### Front-end project

Kubernetes network front-end react application

### build and start

docker build -t breakosin/kubernetes-network-frontend:1 .

### deploy to kebernetes

kubectl apply -f=frontend-service.yml -f=frontend-deployment.yml

### add the following into conf/nginx.conf as reverse proxy for front-end
### we can use the cluster internal IP given by kubernetes, for example tasks-service.default as 
### backend api the address
### this is because nginx server runs in the pod's container and is managed by kubernetes
### front-end react app runs in the browser
### JS code only needs to set the URL path, /api/**, and nginx reverse proxy config forwards 
### the incoming request to the correct backend api address

location /api/ {
  proxy_pass http://tasks-service.default:8000/;
}
