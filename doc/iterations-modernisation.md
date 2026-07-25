# Plan d'itérations pour la modernisation défensive

## Intention

Ce document transforme l'ancien modèle client Android / serveur Java Swing / protocole socket partagé en une trajectoire de plateforme défensive moderne. Les itérations ci-dessous servent à organiser un projet de fin d'études, des démonstrations en laboratoire et des jalons vérifiables sans développer de fonctions de prise de contrôle non autorisée.

## Principes de conception

- Consentement explicite avant tout enrôlement d'appareil.
- Transparence utilisateur et état de gestion visible sur l'appareil.
- Collecte minimale : préférer les signaux de posture aux contenus personnels.
- Authentification forte des appareils et des opérateurs.
- Autorisation centralisée pour toute action à impact.
- Journalisation immuable et exploitable pour l'audit.
- Données de démonstration synthétiques lorsque des contenus sensibles seraient nécessaires.

## Itération 1 : cadrage, inventaire et risques

**Objectif :** comprendre l'ancien découpage sans réactiver de comportements intrusifs.

Livrables :

- inventaire des composants historiques et de leurs responsabilités ;
- matrice des risques liés aux accès sensibles Android ;
- liste des scénarios pédagogiques autorisés ;
- règles de contribution interdisant les fonctions furtives.

Critères d'acceptation :

- chaque fonctionnalité héritée est classée comme `à supprimer`, `à remplacer`, `à simuler` ou `à documenter` ;
- aucune logique d'accès SMS, GPS, caméra, micro, fichiers ou appels n'est ajoutée sans consentement explicite et justification défensive ;
- le dépôt reste utilisable comme support pédagogique sûr.

## Itération 2 : architecture cible et contrats d'API

**Objectif :** remplacer le couplage socket/paquets Java par des contrats versionnés.

Livrables :

- schéma d'architecture cible ;
- première version OpenAPI ou Protobuf ;
- modèle d'identité appareil/opérateur ;
- conventions de versionnement et de dépréciation.

Critères d'acceptation :

- les commandes inconnues sont refusées par défaut ;
- chaque endpoint ou méthode possède une règle d'autorisation ;
- les événements de sécurité disposent d'un format normalisé.

## Itération 3 : agent Android défensif enrôlé

**Objectif :** concevoir un agent légitime et visible, limité à la posture de sécurité.

Livrables :

- flux d'enrôlement et de révocation ;
- liste minimale de permissions Android ;
- collecte de posture : version OS, chiffrement, verrouillage écran, état réseau, intégrité applicative ;
- mécanisme de configuration signé.

Critères d'acceptation :

- l'appareil peut être désenrôlé ;
- les permissions sont justifiées et testées ;
- aucune collecte de contenu personnel n'est activée par défaut ;
- les politiques expirées ou non signées sont rejetées.

## Itération 4 : backend de défense

**Objectif :** fournir une base serveur moderne pour l'inventaire, la télémétrie et les politiques.

Livrables :

- API gateway avec authentification ;
- service d'inventaire des appareils ;
- ingestion de télémétrie validée par schéma ;
- moteur de politiques ;
- journal d'audit append-only.

Critères d'acceptation :

- chaque action opérateur est tracée avec acteur, appareil, motif, horodatage et résultat ;
- les rôles séparent lecture, investigation et réponse ;
- les secrets ne sont pas stockés en clair ;
- les erreurs d'autorisation sont testées.

## Itération 5 : console opérateur et workflows d'approbation

**Objectif :** remplacer l'ancienne interface Swing par une console web orientée défense.

Livrables :

- tableau de bord d'inventaire ;
- vue posture et alertes ;
- historique d'audit ;
- workflow d'approbation pour actions sensibles ;
- exports de rapports pédagogiques.

Critères d'acceptation :

- aucun bouton ne déclenche d'action non autorisée ;
- les actions sensibles exigent une justification ;
- l'interface affiche clairement les limites de collecte et le statut de consentement.

## Itération 6 : détection, simulation et jeux de données

**Objectif :** améliorer les logiciels défensifs par des scénarios mesurables et reproductibles.

Livrables :

- règles de détection pour comportements suspects de type RAT ;
- générateur de télémétrie synthétique ;
- scénarios de lab : enrôlement, alerte, investigation, révocation ;
- métriques de précision et de couverture.

Critères d'acceptation :

- les démonstrations ne nécessitent pas de données personnelles réelles ;
- chaque règle a une description, une sévérité et une procédure de triage ;
- les faux positifs et faux négatifs sont documentés.

## Itération 7 : durcissement, conformité et soutenance

**Objectif :** rendre le projet présentable, auditable et aligné avec l'éthique de cybersécurité défensive.

Livrables :

- threat model final ;
- tests de sécurité ;
- politique de conservation des données ;
- guide de démonstration ;
- rapport de soutenance.

Critères d'acceptation :

- le périmètre défensif est vérifiable ;
- les abus possibles et leurs mitigations sont documentés ;
- la démonstration fonctionne avec appareils consentis ou données synthétiques ;
- le dépôt ne contient pas de fonctionnalité de commande-contrôle exploitable.

## Backlog technique priorisé

| Priorité | Élément | Justification défensive |
| --- | --- | --- |
| P0 | Charte de sécurité et consentement | Empêche les usages ambigus ou abusifs |
| P0 | Inventaire legacy et classification des risques | Oriente la migration sans réimplémenter le RAT |
| P1 | Contrats API versionnés | Réduit le couplage et permet la validation stricte |
| P1 | Authentification appareil/opérateur | Protège les actions et la télémétrie |
| P1 | Audit append-only | Rend les opérations imputables |
| P2 | Agent Android posture-only | Fournit une valeur défensive sans collecte intrusive |
| P2 | Console opérateur RBAC | Limite les actions selon les rôles |
| P3 | Détections et simulation | Améliore l'apprentissage et l'évaluation défensive |
