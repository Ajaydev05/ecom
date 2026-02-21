# 🛒 E-Commerce Platform — Docker + Jenkins CI/CD + Kubernetes

A full-stack e-commerce application containerized with Docker and deployed on Kubernetes using NodePort. Features a complete Jenkins CI/CD pipeline that reduced deployment time by ~70% and eliminated manual errors.

---

## 🏗️ Architecture

```
Browser
   ↓
<EC2-IP>:30007  ← NodePort
   ↓
React Frontend (Pod ×2)
   ↓
Node.js Backend API (Pod ×2)  ← ClusterIP (internal)
   ↓
MongoDB (Pod ×1)              ← ClusterIP (internal)

↑ All managed by Kubernetes + Helm
↑ Auto-deployed by Jenkins on every GitHub push
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js |
| Backend | Node.js / Express |
| Database | MongoDB |
| Containerization | Docker |
| Orchestration | Kubernetes |
| Package Manager | Helm |
| CI/CD | Jenkins |
| Cloud | AWS EC2 |
| Version Control | Git, GitHub |

---

## ✨ Key Features

- ✅ Fully containerized with Docker (frontend + backend + MongoDB)
- ✅ Jenkins CI/CD pipeline — auto build, push, deploy on every commit
- ✅ ~70% faster deployments vs manual process
- ✅ Zero downtime rolling updates via Kubernetes
- ✅ NodePort service — no cloud load balancer needed
- ✅ Helm chart for repeatable, configurable deployments
- ✅ Automatic rollback on deployment failure

---

## 📁 Project Structure

```
ecom/
├── frontend/                  # React.js application
│   └── Dockerfile
├── backend/                   # Node.js REST API
│   ├── app.js
│   └── Dockerfile
├── k8s/                       # Raw Kubernetes manifests
│   ├── namespace.yaml
│   ├── configmap.yaml
│   ├── secret.yaml
│   ├── deployment.yaml
│   └── service.yaml
├── helm/
│   └── ecom/                  # Helm chart
│       ├── Chart.yaml
│       ├── values.yaml
│       └── templates/
│           ├── namespace.yaml
│           ├── configmap.yaml
│           ├── secret.yaml
│           ├── deployment.yaml
│           └── service.yaml
├── Jenkinsfile                # CI/CD pipeline definition
├── docker-compose.yml         # Local development
└── README.md
```

---

## 🔄 CI/CD Pipeline (Jenkins)

```
1. Push code → GitHub
        ↓
2. Jenkins webhook triggers
        ↓
3. Git Clone → Docker Build (parallel) → Docker Push
        ↓
4. Helm upgrade --install on Kubernetes
        ↓
5. kubectl verifies all pods are Running
        ↓
6. Auto rollback if anything fails
```

### Jenkins Setup

Add Docker Hub credentials in Jenkins before running:
```
Manage Jenkins → Credentials → Add
Kind     : Username with password
Username : ajaydev05
Password : <your Docker Hub password>
ID       : docker-hub-credentials
```

---

## 🚀 Deploy with Helm

```bash
# Clone repo
git clone https://github.com/Ajaydev05/ecom.git
cd ecom

# Deploy everything
helm install ecom ./helm/ecom

# Check status
kubectl get all -n ecom

# Access app → http://<EC2-IP>:30007

# Upgrade after changes
helm upgrade ecom ./helm/ecom

# Uninstall
helm uninstall ecom -n ecom
```

---

## 🚀 Deploy with kubectl

```bash
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/secret.yaml
kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml

# Verify
kubectl get all -n ecom

# Access app → http://<EC2-IP>:30007
```

---

## 💻 Run Locally

```bash
docker-compose up --build
# Frontend → http://localhost:3000
# Backend  → http://localhost:5000
```

---

## ☸️ Kubernetes Services

| Service | Type | Port | Access |
|---|---|---|---|
| `ecom-frontend-svc` | NodePort | 30007 | Public — browser access |
| `ecom-backend-svc` | ClusterIP | 5000 | Internal only |
| `ecom-mongodb-svc` | ClusterIP | 27017 | Internal only |

> ⚠️ Open port **30007** in your EC2 Security Group inbound rules.

---

## 👤 Author

**Ajaydev A**
- GitHub: [@Ajaydev05](https://github.com/Ajaydev05)
- LinkedIn: [ajaydev-a-](https://linkedin.com/in/ajaydev-a-)
- Email: ajaydev05.2003@gmail.com
