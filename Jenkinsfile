pipeline {
    agent any

    environment {
        DOCKER_USER = "ajaydev05"
        BACKEND_IMAGE = "ajaydev05/cicd-backend"
        FRONTEND_IMAGE = "ajaydev05/cicd-frontend"
        CONTAINER_NAME = "ecom-app"
    }

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'master',
                    url: 'https://github.com/Ajaydev05/ecom.git'
            }
        }

        stage('Build Backend Image') {
            steps {
                sh 'docker build -t $BACKEND_IMAGE:latest ./backend'
            }
        }

        stage('Build Frontend Image') {
            steps {
                sh 'docker build -t $FRONTEND_IMAGE:latest ./nginx'

            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-cred',
                    usernameVariable: 'DOCKER_USERNAME',
                    passwordVariable: 'DOCKER_PASSWORD'
                )]) {
                    sh '''
                        echo $DOCKER_PASSWORD | docker login \
                        -u $DOCKER_USERNAME --password-stdin
                    '''
                }
            }
        }

        stage('Push Images') {
            steps {
                sh '''
                    docker push $BACKEND_IMAGE:latest
                    docker push $FRONTEND_IMAGE:latest
                '''
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                    docker stop $CONTAINER_NAME || true
                    docker rm $CONTAINER_NAME || true

                    docker run -d \
                      --name $CONTAINER_NAME \
                      -p 80:80 \
                      $FRONTEND_IMAGE:latest
                '''
            }
        }
    }

    post {
        success {
            echo "🚀 Deployment Successful!"
        }
        failure {
            echo "❌ Pipeline Failed!"
        }
    }
}
