# tl-t-b

### (T)raffic (l)ight (t)elegram (b)ot

Traffic light (html) changeble via bot api (telegram).

#### Usage

k create secret generic glbasecamp  --from-literal=token.json={\"token\":\"YOUR_TOKEN\"}

k create -f kube/app.yaml

k expose pod trafficlight --port 8080 --target-port 8000 --type LoadBalancer

k3 apply -f kube/ingress.yaml

####

Based on HTML/CSS [snippet](https://codepen.io/Jab2870/pen/xnIHp/)
