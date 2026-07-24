# Defensive architecture modernization

## Objective

Design a legitimate mobile-defense and device-management platform that can be used in a lab, enterprise, or classroom environment with explicit device enrollment and operator accountability.

## Target architecture

```text
Enrolled Android Agent
        │ mTLS + OAuth2 device grant
        ▼
API Gateway / Backend Services
        │
        ├── Policy service
        ├── Telemetry ingestion service
        ├── Device inventory service
        ├── Detection service
        ├── Evidence service
        └── Audit-log service
        │
        ▼
Operator Web Console
```

## Key modernization decisions

1. Replace raw sockets with authenticated HTTPS or gRPC.
2. Replace shared mutable packet classes with versioned schemas.
3. Separate command policy from telemetry ingestion.
4. Require explicit enrollment, visible device ownership state, and revocation.
5. Use role-based access control for every operator action.
6. Store immutable audit events for policy changes, remote actions, and evidence access.
7. Prefer Android Enterprise, Device Policy Controller, and user-approved APIs over direct access to sensitive resources.

## Suggested modules

| Module | Purpose |
| --- | --- |
| `agent-android` | Consent-based Android telemetry and policy agent |
| `backend-api` | Authenticated API surface and service orchestration |
| `policy-engine` | Authorization, policy evaluation, and safety gates |
| `telemetry-pipeline` | Normalization, validation, storage, and alerting |
| `operator-console` | Web UI for inventory, alerts, and approved actions |
| `detection-content` | Rules, analytics, and response playbooks |

## Legacy boundaries retained in this scaffold

The current `src/Androrat`, `src/AndroratServer`, `src/InOut`, and `Experiment` folders are retained as analysis boundaries only. Future implementation should create new defensive modules rather than revive unsafe remote-access behavior.
