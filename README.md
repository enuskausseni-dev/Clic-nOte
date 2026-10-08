# 📝 Clic nOte

> Une application web simple et moderne pour créer, gérer et partager des notes.

## 📌 À propos

**Quick Note** est une application web développée pour permettre aux utilisateurs de créer et gérer leurs notes depuis une interface simple et intuitive.

La version **V1** comprend un système d'authentification ainsi qu'un espace permettant de publier et consulter des notes.

Le projet est développé avec une architecture **Frontend / Backend / Database**, afin de séparer clairement l'interface utilisateur, l'API et la gestion des données.

---

## ✨ Fonctionnalités

### 👤 Authentification

* Création de compte
* Connexion utilisateur
* Authentification avec JWT
* Gestion du token côté client
* Protection des routes nécessitant une authentification

### 📝 Notes

* Création de notes
* Affichage des notes
* Modification des notes
* Suppression des notes
* Association d'une note à son propriétaire
* Affichage des informations du propriétaire

### 👤 Profil

* Nom d'utilisateur
* Adresse e-mail
* Bio
* Photo de profil
* Modification des informations du profil

### 🔐 Sécurité

* Validation des données avec Zod
* Hashage des mots de passe avec bcrypt
* Authentification avec JWT
* Middleware d'authentification
* Autorisation basée sur le propriétaire de la ressource

---

## 🏗️ Architecture

```text
                         Clic nOte
                             │
              ┌──────────────┴──────────────┐
              │                             │
              ▼                             ▼
        🌐 Frontend                    ⚙️ Backend
         HTML/CSS/JS                  Node.js/Express
              │                             │
              │          REST API           │
              └──────────────►──────────────┘
                                            │
                                            ▼
                                     🍃 MongoDB Atlas
```

### Technologies utilisées

**Frontend**

* HTML5
* CSS3
* JavaScript

**Backend**

* Node.js
* Express.js
* Mongoose
* Zod
* bcrypt
* JSON Web Token (JWT)

**Database**

* MongoDB
* MongoDB Atlas

**Outils**

* Git
* GitHub
* Postman / Thunder Client
* VS Code

---

---

## 🔑 Authentification

Quick Note utilise **JWT (JSON Web Token)** pour gérer l'authentification des utilisateurs.

Le fonctionnement général est :

```text
Inscription
    ↓
Validation Zod
    ↓
Hash du mot de passe
    ↓
Enregistrement MongoDB
    ↓
Connexion
    ↓
JWT
    ↓
Token côté client
    ↓
Accès aux routes protégées
```

---

## 🔄 API

Quelques routes principales de l'application :

### Authentification

```http
POST /inscription
POST /connexion
```

### Notes

```http
GET    /notes
POST   /notes
PUT    /notes/:id
DELETE /notes/:id
```

### Profil

Les routes de profil permettent notamment de consulter et modifier les informations de l'utilisateur authentifié.

---

## ⚙️ Installation

### 1. Cloner le projet

```bash
git clone <URL_DU_REPOSITORY>
```

### 2. Entrer dans le projet

```bash
cd Quick-Note
```

### 3. Installer les dépendances

```bash
npm install
```

### 4. Démarrer le serveur

```bash
npm start
```

ou selon la configuration du projet :

```bash
node server.js
```

---

## 🌍 Déploiement

L'architecture de déploiement prévue pour Quick Note V1 est :

```text
GitHub
   │
   ├──────────────► Vercel
   │                 │
   │                 │ Frontend
   │                 ▼
   │              Internet
   │
   └──────────────► Render
                     │
                     │ Backend API
                     ▼
               MongoDB Atlas
```

### Frontend

Le frontend peut être déployé sur **Vercel**.

### Backend

L'API Node.js / Express peut être déployée sur **Render**.

### Database

Les données sont stockées dans **MongoDB Atlas**.

---
---


## 🚀 Évolution prévue

Les prochaines versions pourront améliorer progressivement Quick Note avec notamment :

* 💬 commentaires
* ❤️ système de favoris
* 🔔 notifications
* 🔎 recherche avancée
* 👥 interactions entre utilisateurs
* 📱 amélioration de l'expérience mobile
* ⚡ optimisation des performances
* 🔐 renforcement de la sécurité

---

## 🎯 Objectif du projet

Quick Note est également un projet d'apprentissage et de mise en pratique du développement **Full Stack JavaScript**.

Il permet de travailler concrètement sur :

```text
Frontend
   +
Backend
   +
API REST
   +
Authentification
   +
Base de données
   +
Déploiement
```

---

## 👨‍💻 Auteur

**Enuska Usseni**

Projet personnel — **Clic  nOte V1**

---

## 📄 Licence

Ce projet est actuellement un projet personnel à des fins d'apprentissage et de développement.
