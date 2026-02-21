pipeline {
    agent any

  
    environment {
        DOCKER_HUB_USER    = "ajaydev05"
        FRONTEND_IMAGE     = "${DOCKER_HUB_USER}/ecom-frontend"
        BACKEND_IMAGE      = "${DOCKER_HUB_USER}/ecom-backend"
        IMAGE_TAG          = "${BUILD_NUMBER}"           
        DOCKER_CREDENTIALS = "docker-hub-credentials"   
        K8S_NAMESPACE      = "ecom"
        HELM_RELEASE       = "ecom"
        HELM_CHART_PATH    = "./helm/ecom"
    }

 

    stages {

    
        stage('Git Clone') {
            steps {
                echo ' Cloning repository...'
                git branch: 'main',
                    url: 'https://github.com/Ajaydev05/ecom.git'
                echo ' Clone successful'
                sh 'ls -la'   
            }
        }

   
            parallel {
                stage('Build Frontend') {
                    steps {
                        echo ' Building frontend image...'
                        sh """
                            docker build \
                                -t ${FRONTEND_IMAGE}:${IMAGE_TAG} \
                                -t ${FRONTEND_IMAGE}:latest \
                                ./frontend
                        """
                        echo " Frontend image built: ${FRONTEND_IMAGE}:${IMAGE_TAG}"
                    }
                }
                stage('Build Backend') {
                    steps {
                        echo ' Building backend image...'
                        sh """
                            docker build \
                                -t ${BACKEND_IMAGE}:${IMAGE_TAG} \
                                -t ${BACKEND_IMAGE}:latest \
                                ./backend
                        """
                        echo " Backend image built: ${BACKEND_IMAGE}:${IMAGE_TAG}"
                    }
                }
            }
        }

     
        stage('Docker Push') {
            steps {
                echo ' Pushing images to Docker Hub...'
                withCredentials([usernamePassword(
                    credentialsId: "${DOCKER_CREDENTIALS}",
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh """
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin

                        # Push frontend — both versioned tag and latest
                        docker push ${FRONTEND_IMAGE}:${IMAGE_TAG}
                        docker push ${FRONTEND_IMAGE}:latest

                        # Push backend — both versioned tag and latest
                        docker push ${BACKEND_IMAGE}:${IMAGE_TAG}
                        docker push ${BACKEND_IMAGE}:latest

                        docker logout
                    """
                }
                echo ' Images pushed to Docker Hub successfully'
            }
        }


        stage('Helm Deploy') {
            steps {
                echo ' Deploying with Helm...'
                sh """
                    
                    kubectl get namespace ${K8S_NAMESPACE} || kubectl create namespace ${K8S_NAMESPACE}

                   
                    helm upgrade --install ${HELM_RELEASE} ${HELM_CHART_PATH} \
                       
                """
                echo ' Helm deploy successful'
            }
        }

        stage('kubectl Verify') {
            steps {
                echo ' Verifying deployment with kubectl...'
                sh """
                    echo "--- Pods ---"
                    kubectl get pods -n ${K8S_NAMESPACE}

                    echo "--- Services ---"
                    kubectl get svc -n ${K8S_NAMESPACE}

                    echo "--- Deployments ---"
                    kubectl get deployments -n ${K8S_NAMESPACE}

                    echo "--- Helm Release Status ---"
                    helm status ${HELM_RELEASE} -n ${K8S_NAMESPACE}
                """

                
                sh """
                    kubectl rollout status deployment/ecom-frontend -n ${K8S_NAMESPACE} --timeout=3m
                    kubectl rollout status deployment/ecom-backend -n ${K8S_NAMESPACE} --timeout=3m
                """
                echo ' All pods are running and healthy'
            }
        }

    }

  
