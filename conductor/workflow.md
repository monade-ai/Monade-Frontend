# Workflow

## Track Lifecycle
1. **Discovery:** Define the track scope and requirements in `spec.md`.
2. **Planning:** Create a step-by-step implementation plan in `plan.md`.
3. **Execution:** Implement tasks iteratively following TDD principles.
4. **Verification:** Verify completion against acceptance criteria.

## Implementation Protocol (TDD)
- For every feature/fix:
    1. **Write Tests:** Define the expected behavior with automated tests.
    2. **Implement:** Write code to make tests pass.
    3. **Refactor:** Clean up code while ensuring tests stay green.

## Phase Completion Verification and Checkpointing Protocol
At the end of each phase in `plan.md`, the developer must:
1. Verify all tasks in the phase are completed.
2. Ensure all tests relevant to the phase pass.
3. Update the `plan.md` status.
4. Call for a manual verification check if required.
