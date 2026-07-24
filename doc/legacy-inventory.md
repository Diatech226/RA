# Legacy inventory for defensive analysis

This inventory records the requested historical layout so future work can reason about migration boundaries without recreating unsafe behavior.

## Top-level layout

```text
AndroRAT/
├── README.md
├── .gitignore
├── .gitattributes
├── doc/
├── src/
│   ├── Androrat/
│   ├── AndroratServer/
│   ├── InOut/
│   └── api/
└── Experiment/
    ├── AndroratActivity/
    └── InOut/
```

## Defensive interpretation

- `src/Androrat/` represents the old Android client boundary.
- `src/AndroratServer/` represents the old desktop server boundary.
- `src/InOut/` represents the old shared transport and packet boundary.
- `src/api/` represents third-party or embedded dependency boundaries.
- `Experiment/` represents research-only legacy variants.

## Migration principle

Do not extend legacy components with covert collection or remote-control features. Treat these folders as references for threat modeling, documentation, and safe replacement by a consent-based platform.
