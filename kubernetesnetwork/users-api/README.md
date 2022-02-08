### instruction

### build and start

docker build -t breakosin/kubernetes-network-users:3 .

### start minikube, using docker as driver, docker must be running

minikube start --driver=docker

### apply users deployment

kubectl apply -f=users-deployment.yml

kubectl apply -f=users-service.yml

### start users-service

minikube service users-service

### kubectl get commands

kubectl get deployments

kubectl get pods

kubectl get services

kubectl get sc

kubectl get pv

kubectl get pvc

kubectl get configmap

kubectl get namespaces

### curl commands
### need to replace localhost:80 with the URL returned from minikube service story-service command

curl -H "Content-Type: application/json" -X POST -d "{\"email\":\"abc@abc.com\", \"password\":\"abc123\"}" http://127.0.0.1:51927/login

curl -H "Content-Type: application/json" -X POST -d "{\"email\":\"abc@abc.com\", \"password\":\"abc123\"}" http://127.0.0.1:51927/signup
