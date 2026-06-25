## Status

> **Project Status:** Brainstorm / Research / Pre-MVP

This repository currently exists to preserve an idea.

No architectural decisions should be considered final.

The primary objective at this stage is to capture the original vision, philosophy, constraints, and engineering direction before implementation begins.

Implementation details MAY change significantly over time.

The core philosophy SHOULD remain stable.

---

# Specification Language

The key words **MUST**, **MUST NOT**, **REQUIRED**, **SHALL**, **SHALL NOT**, **SHOULD**, **SHOULD NOT**, **RECOMMENDED**, **NOT RECOMMENDED**, **MAY**, and **OPTIONAL** in this document are to be interpreted as described in RFC 2119.

Unless otherwise stated, architectural statements in this document are normative.

---

# Design Philosophy

SellerSense is intentionally **not** an AI-first project.

SellerSense is a software engineering project whose purpose is to encode the intuition of experienced marketplace buyers into deterministic, explainable software.

Whenever possible:

* deterministic heuristics MUST be preferred over machine learning.
* explainability MUST be preferred over prediction accuracy.
* local execution SHOULD be preferred over cloud services.
* configuration SHOULD be preferred over hardcoded logic.
* composable modules SHOULD be preferred over monolithic implementations.

Artificial intelligence MAY be integrated in the future.

Artificial intelligence MUST NOT become a mandatory dependency of the core system.

---

# Repository Purpose

This repository serves three independent purposes.

1. Preserve ideas before they are forgotten.
2. Act as the canonical project specification.
3. Provide implementation guidance for both humans and coding agents.

This repository MUST remain understandable without requiring knowledge from previous conversations.

No design decision SHOULD depend on undocumented tribal knowledge.

If a future contributor asks:

> "Why was this implemented this way?"

the answer SHOULD exist somewhere within this repository.

---

# Long-Term Vision

SellerSense SHOULD evolve into a reusable marketplace intelligence engine rather than an OLX-specific tool.

Marketplace integrations, scoring strategies, storage engines and notification backends SHOULD remain independently replaceable.

Every architectural decision SHOULD be evaluated against the following question:

> **Does this improve our ability to understand seller intent?**

If the answer is "no", the feature probably belongs outside the core project.

---

# Guiding Principle

The project is built around a single observation:

> **The best opportunities are often created by human circumstances, not by market inefficiency.**

Traditional software attempts to understand products.

SellerSense attempts to understand people.

Every major feature SHOULD reinforce that principle.
