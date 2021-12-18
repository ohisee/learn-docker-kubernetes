### instruction

### build and start

docker-compose up -d --build stories

### stop docker 

docker-compose down

### build for docker hub

docker build -t breakosin/kubernetes-data-volume-node-app:2 .

### start minikube, using docker as driver, docker must be running

minikube start --driver=docker

### apply deployment, service

kubectl apply -f=deployment.yml -f=service.yml

### apply persistent volume configuration

kubectl apply -f=host-pv.yml
kubectl apply -f=host-pvc.yml
kubectl apply -f=deployment.yml

### apply config map

kubectl apply -f=environment.yml

### backend is the name used in service.yml as service metadata name

minikube service story-service

### get storage class

kubectl get sc

### get persistent volume

kubectl get pv

### get persistent volume claim

kubectl get pvc

### get config map

kubectl get configmap

### delete deployment by using yml file

kubectl delete -f=environment.yml 
kubectl delete -f=host-pv.yml 
kubectl delete -f=host-pvc.yml
kubectl delete -f=deployment.yml 
kubectl delete -f=service.yml

### curl commands to test server
### need to replace localhost:80 with the URL returned from minikube service story-service command

curl -v --request GET http://localhost:80/story
curl -v --request GET http://localhost:80/error
curl -H "Content-Type: application/json" -X POST -d "{\"text\":\"my message\"}" http://localhost:80/story
