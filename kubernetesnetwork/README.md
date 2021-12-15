### instruction

Kubernetes network, mutiple containers deployment, pod to pod communication

### build and start

docker build -t breakosin/kubernetes-network-users:1 .

docker build -t breakosin/kubernetes-network-auth:1 .

docker build -t breakosin/kubernetes-network-tasks:1 .

### start minikube, using docker as driver, docker must be running

minikube start --driver=docker

### stop minikube

minikube stop

### kubectl get commands

kubectl get deployments

kubectl get pods

kubectl get services

kubectl get sc

kubectl get pv

kubectl get pvc

kubectl get configmap

kubectl get namespaces
