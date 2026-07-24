# Migration roadmap

## Phase 0: Repository safety baseline

- Create the defensive scaffold.
- Document the legacy architecture and risks.
- Add contributor guidance that prohibits covert remote-access features.

## Phase 1: Requirements and threat model

- Define legitimate users, enrolled devices, and administrative workflows.
- Model threats against devices, backend services, operators, and audit logs.
- Define privacy requirements and data-retention rules.

## Phase 2: Protocol and API redesign

- Replace the legacy socket protocol with authenticated API contracts.
- Choose OpenAPI for REST services or Protobuf for gRPC services.
- Add schema validation, compatibility tests, and deprecation rules.

## Phase 3: Android defensive agent

- Build a new agent with explicit enrollment and visible management state.
- Integrate Android Enterprise capabilities where appropriate.
- Implement telemetry minimization and permission review gates.

## Phase 4: Backend and console

- Add device inventory, policy management, telemetry ingestion, alerting, and audit logging.
- Implement operator SSO, MFA, RBAC, and approval workflows.
- Add dashboards for device posture, detections, and response history.

## Phase 5: Detection and response content

- Write detection rules for risky device states and suspicious network behavior.
- Add response playbooks that require authorization and full audit trails.
- Test detections with benign lab data rather than real user content.

## Phase 6: Validation

- Run security tests, privacy reviews, and abuse-case testing.
- Validate logging completeness and revocation behavior.
- Produce final project documentation and demonstration scenarios.
