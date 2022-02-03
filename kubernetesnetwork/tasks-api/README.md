### instruction

### build and start

docker build -t breakosin/kubernetes-network-tasks:1 .

### start minikube, using docker as driver, docker must be running

minikube start --driver=docker

### tasks is its own pod

kubectl apply -f=tasks-deployment.yml -f=tasks-service.yml

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

curl -v -H "Authorization: Bearer abcefghij" --request GET http://127.0.0.1:57979/tasks

curl -H "Authorization: Bearer abcefghij" -H "Content-Type: application/json" -X POST -d "{\"text\":\"some task\", \"title\":\"get a new job soon\"}" http://127.0.0.1:57979/tasks
