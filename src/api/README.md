# API and dependency boundary

This directory contains the defensive API contract for the modernization scaffold. Prefer dependency managers and reproducible builds instead of vendoring opaque libraries.

## Contract

- `openapi.json` defines the versioned HTTP API for the backend boundary.
- `schemas/README.md` summarizes the modeled defensive data domains.

## Safe capabilities covered

The API supports the repository's target structure through:

1. authenticated operator token issuance;
2. consent-based Android device enrollment;
3. device inventory lookup and revocation;
4. normalized telemetry ingestion with replay-resistant event IDs and timestamps;
5. defensive policy creation and listing;
6. immutable audit-event search.

Do not add unauthenticated command-and-control packet handling, covert surveillance, hidden persistence, or unauthorized device-control features here.
