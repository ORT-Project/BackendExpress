```
     _    ____ ___   _     _                     
    / \  |  _ \_ _| | |   (_)_   ___ __ ___  ___ 
   / _ \ | |_) | |  | |   | \ \ / / '__/ _ \/ __|
  / ___ \|  __/| |  | |___| |\ V /| | |  __/\__ \
 /_/   \_\_|  |___| |_____|_| \_/ |_|  \___||___/

```
# Api-Livres

Api-Livres est une API permettant de lister l'ensemble des livres existants et de les retrouver
par rapport à leur emplacement à un certain étage dans une bibliothèque.

## Installation

Pour ce faire, vous devrez commencer par cloner ce repo git. Avant d'ensuite
exécuter les commandes ci-dessous.

```shell
npm install # Installer les librairies
cp .env-example .env # Crée le fichier dotenv à *CONFIGURER*
```

## Docker

Ce projet vous permet également d'utiliser Docker pour la base de données, vous aurez simplement
à modifier les informations présentes dans le "docker-compose.yml" puis à faire la commande suivante

```shell
docker compose up -d # Permet de lancer docker en détaché
```
Pour les données de la base, vous les avez dans le "/data-db/database.txt" avec les tables.

## Lancer le projet

Une fois toutes les étapes réalisées, vous pouvez démarrer le Projet, pensez tout de même à ajouter des données ! 

```shell
npm run swagger # Actualise la documentation et lance le serveur
npm start # Lance le serveur API
```
## Routes 

Pour voir les autres routes, référez-vous à la documentation (/docs)

- Livres "/api/books" > API des livres
- Bibliothèques "/api/bookshelf" > API des bibliothèques

## Auteur

- ["BluedyAishela_](https://github.com/BluedyRimuru)
