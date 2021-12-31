### instruction

### build and start

docker build -t breakosin/kubernetes-network-auth:1 .

### start minikube, using docker as driver, docker must be running

minikube start --driver=docker

### auth uses same users yml deployment
### both users and auth are inside the same pod but different container

kubectl apply -f=users-deployment.yml

### auth is its own pod

kubectl apply -f=auth-deployment.yml -f=auth-service.yml

### kubectl get commands

kubectl get deployments

kubectl get pods

kubectl get services

kubectl get sc

kubectl get pv

kubectl get pvc

kubectl get configmap

kubectl get namespaces
