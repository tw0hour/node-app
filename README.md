# NODE-APP

Ce dépot contient un serveur web / API en Node.js.

Ce serveur répond "Welcome to Node-app" quand on envoie une requête HTTP GET à la racine.

## Installation et exécution

```
$ git clone https://github.com/tw0hour/node-app.git
$ cd app-node
$ npm install # pour installer les dépendances
$ npx express-generator --hogan --git # pour installer express generator
$ npm start # pour exécuter le serveur
# presser ctrl-c pour quitter le serveur
```

## Comment tester le serveur

```
$ curl http://localhost:3000/ # doit retourner le texte “Welcome to Node-app”
```
