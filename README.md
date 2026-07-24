# AndroRAT Defensive Modernization Lab

This repository is a **defensive and educational modernization scaffold** for a cybersecurity final-year project. It documents the legacy AndroRAT-style repository layout while redirecting future development toward a consent-based device-management and mobile-defense platform. The goal is to improve defensive cybersecurity software through safe architecture, simulations, detections, and audit-focused workflows.

## Safety and scope

This project must not be used to build, deploy, or operate malware, spyware, covert remote-access tooling, or unauthorized device-control features.

Allowed work includes:

- defensive architecture analysis;
- consent-based mobile-device management design;
- endpoint telemetry with explicit enrollment;
- threat modeling and detection engineering;
- protocol-hardening plans;
- documentation for safe migration away from legacy socket/RAT patterns.

Disallowed work includes:

- covert persistence;
- hidden surveillance;
- credential theft;
- unauthorized SMS, call, GPS, camera, microphone, or file access;
- bypassing Android permissions or user consent;
- command-and-control implementation for compromised devices.

## Repository structure

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

The directories are intentionally present as modernization boundaries, not as a request to recreate unsafe legacy behavior.

## Modernization goal

The next development phase should replace the old monolithic Java socket architecture with a defensive platform composed of:

1. an explicitly enrolled Android agent;
2. a backend API with authentication, authorization, audit logs, and policy enforcement;
3. an operator dashboard for legitimate administration;
4. a normalized telemetry pipeline;
5. a detection and response layer focused on abuse prevention;
6. privacy, consent, retention, and compliance controls.


## Defensive modernization strategy

The modernization work is organized around four defensive outcomes:

1. **Visibility:** understand enrolled device posture without covert surveillance.
2. **Control:** apply authorized policies with strong identity, least privilege, and revocation.
3. **Detection:** identify suspicious RAT-like behaviors using synthetic or consented telemetry.
4. **Accountability:** preserve immutable audit trails for every operator decision and platform action.

The project should prioritize documents, schemas, tests, simulations, and safe platform components before any runnable agent or server implementation. Sensitive capabilities must be replaced by policy-gated, consent-based, platform-approved alternatives.

## Legacy-to-defensive mapping

| Legacy area | Defensive replacement |
| --- | --- |
| Android background client | Enrolled Android management agent with foreground disclosure and least-privilege permissions |
| Java/Swing socket server | Authenticated HTTPS/gRPC backend with role-based access control |
| Shared Java packet classes | Versioned OpenAPI/Protobuf contracts with schema validation |
| Direct GPS/SMS/call/file access | Policy-gated telemetry, user consent, and platform-approved Android APIs |
| Experimental streaming features | Incident-evidence workflows with explicit approval and audit logging |

## Documentation

- `doc/architecture-modernization.md` describes the safe target architecture.
- `doc/security-controls.md` lists mandatory controls for the defensive platform.
- `doc/migration-roadmap.md` proposes staged modernization work.
- `doc/iterations-modernisation.md` defines concrete defensive iterations and acceptance criteria.
- `doc/legacy-inventory.md` records the legacy layout provided for analysis.

## Suggested first milestones

1. Review `doc/legacy-inventory.md` and classify each historical feature as remove, replace, simulate, or document.
2. Use `doc/iterations-modernisation.md` as the working backlog for the next project iterations.
3. Draft versioned API contracts before writing agent or backend code.
4. Build detection and simulation content with synthetic data before testing on consented devices.

## Development status

This repository currently contains scaffold and defensive planning documents only. It does not add executable remote-access functionality.
