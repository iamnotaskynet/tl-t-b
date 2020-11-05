# tl-t-b

### (T)raffic (l)ight (t)elegram (b)ot

Traffic light (html) changeble via bot api (telegram).

#### Usage by kubectl

k create secret generic glbasecamp  --from-literal=token.json={\\"token\\":\\"YOUR_TOKEN\\"}

k create -f kube/app.yaml

k expose pod trafficlight --port 8080 --target-port 8000 --type LoadBalancer

k apply -f kube/ingress.yaml

#### Messages to your bot
RED ON

RED OFF

AMBER ON

AMBER OFF

GREEN ON
GREEN OFF
#### Message must be exactly the same, otherwise it will respond incorrect input

#### Libs and code

[Interface](https://github.com/iamnotaskynet/tl-t-b/blob/main/public/index.html) based on[snippet](https://codepen.io/Jab2870/pen/xnIHp/) in docker on :8000, and via kuber commands on :80

- npm [express](https://www.npmjs.com/package/express)
- npm [socket.io](https://www.npmjs.com/package/socket.io)
- npm [node-telegram-bot-api](https://www.npmjs.com/package/node-telegram-bot-api)
- ~~npm [socks5-https-client](https://www.npmjs.com/package/socks5-https-client)~~ in case socks5 needed to avoid blocks

#### TODO

- Rewrite in pure nodejs, avoid overhead
- Rewrite in assembly, maximum super ultra performence 