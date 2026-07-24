# Mandatory security controls

## Enrollment and consent

- Require explicit device enrollment before collecting telemetry.
- Show persistent device-management disclosure on managed devices where platform policy requires it.
- Provide offboarding and key revocation procedures.
- Bind each device identity to hardware-backed keys when available.

## Authentication and authorization

- Use mutual TLS or a comparable device-bound authentication mechanism.
- Require operator single sign-on with multi-factor authentication.
- Enforce role-based access control and least privilege.
- Separate read-only investigation roles from response-action roles.

## Data protection

- Encrypt data in transit and at rest.
- Minimize collection of sensitive personal data.
- Tokenize or redact high-risk fields when full content is not required.
- Define retention periods for telemetry, evidence, and audit logs.

## Abuse prevention

- Block covert operation modes.
- Require policy approval for high-impact response actions.
- Log every operator action with actor, device, timestamp, reason, and result.
- Rate-limit device actions and API calls.
- Add anomaly detection for suspicious operator behavior.

## Protocol hardening

- Validate all message schemas.
- Reject unknown command types by default.
- Sign policy bundles and detection content.
- Use replay protection, sequence numbers, and short-lived credentials.
- Version every client-server contract.

## Android-specific guardrails

- Use Android Enterprise and Device Policy APIs where possible.
- Avoid background collection that lacks user notice or administrative authorization.
- Request only permissions required for the enrolled defensive use case.
- Prefer aggregate security posture signals over sensitive content collection.
