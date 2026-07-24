# AndroRAT Defensive Modernization Lab

This repository is a **defensive and educational modernization scaffold** for a cybersecurity final-year project. It documents the legacy AndroRAT-style repository layout while redirecting future development toward a based device-management and mobile-defense platform. The goal is to improve defensive cybersecurity software through safe architecture, simulations, detections, and audit-focused workflows.

## Safety and scope

This project must not be used to build, deploy, or operate malware, spyware, covert remote-access tooling, or unauthorized device-control features.




The directories are intentionally present as modernization boundaries, not as a request to recreate unsafe legacy behavior.

## Modernization goal

The next development phase should replace the old monolithic Java socket architecture with a defensive platform composed of:

1. an Android agent;
2. a backend API with authentication, authorization, audit logs, and policy enforcement;
3. an operator dashboard for legitimate administration;
4. a normalized telemetry pipeline;
5. a detection and response layer focused on abuse prevention;





The project should prioritize documents, schemas, tests, simulations 



## Documentation

- `doc/architecture-modernization.md` describes the safe target architecture.
- `doc/security-controls.md` lists mandatory controls for the defensive platform.
- `doc/migration-roadmap.md` proposes staged modernization work.
- `doc/iterations-modernisation.md` defines concrete defensive iterations and acceptance criteria.


## Development status

This repository currently contains scaffold and defensive planning documents only. It does not add executable remote-access functionality.
