# Defensive API schemas

The canonical API contract is `../openapi.json`. It models the safe modernization structure described in the repository documentation:

- consent-based Android device enrollment;
- authenticated device inventory access;
- normalized posture, compliance, health, and security telemetry ingestion;
- defensive policy definition;
- immutable audit-event search;
- explicit revocation and offboarding.

The contract intentionally avoids unauthenticated command handling, covert remote control, hidden persistence, or surveillance capabilities.
