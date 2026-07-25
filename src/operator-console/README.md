# Console opérateur — prototype

Cette première itération implémente uniquement la page **Vue d’ensemble** de la console défensive. Elle présente des indicateurs, une posture de conformité, une activité de détection et un tableau d’alertes à partir de données entièrement synthétiques.

## Lancer localement

```bash
python3 -m http.server 8000 --directory src/operator-console
```

Ouvrir ensuite `http://localhost:8000`. Aucun paquet externe ni backend n’est nécessaire.

## Limites de sécurité

- aucune connexion à un appareil ;
- aucune commande distante ;
- aucune donnée personnelle ou sensible ;
- aucun mécanisme de persistance ou de surveillance ;
- les autres pages restent volontairement désactivées jusqu’à leur développement défensif, page par page.

## Prochaine page

La prochaine itération prévue est **Appareils** : inventaire synthétique, état d’enrôlement explicite, conformité et révocation visible.
