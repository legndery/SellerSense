# SellerSense

> **Most deal trackers watch prices. SellerSense watches people.**

---

# Vision

SellerSense is a seller-intelligence engine for classified marketplaces.

The goal is **not** to find the cheapest listings.

The goal is to identify listings that are **likely to be significantly undervalued because of seller psychology and circumstances.**

Traditional deal finders ask:

> *"What is this product worth?"*

SellerSense asks:

> *"Why is this person selling?"*

Those are fundamentally different questions.

A motivated seller can create opportunities that are invisible to traditional price trackers.

---

# The Story

This project was inspired by years of buying used hardware.

Some examples:

* Entire Ryzen 2200G desktop purchased for ₹8,000 because the seller thought it was old and worthless.
* PS5 Digital purchased for ₹20,000 because the owner was leaving India for Germany and wanted it gone immediately.

Neither deal happened because the products were cheap.

Both happened because the **seller's circumstances** mattered more than the product itself.

This project attempts to encode that intuition into software.

---

# Core Philosophy

The market is often efficient.

People are not.

People sell things because:

* They are relocating.
* They are moving abroad.
* They received an onsite opportunity.
* They are upgrading.
* They inherited hardware.
* They need cash urgently.
* They are cleaning a garage.
* They are shutting down an office.
* They don't know what the hardware is worth.

SellerSense attempts to identify those situations.

---

# Goals

SellerSense should answer:

* Which listings deserve my attention?
* Which sellers appear motivated?
* Which listings are statistically unusual?
* Which listings are likely hidden gems?
* Why did this listing receive a high score?

Every recommendation must be explainable.

No black-box scoring.

---

# Non Goals

SellerSense is NOT:

* another scraper
* another price tracker
* another notification bot
* another AI wrapper
* an auto-buy bot

Those are implementation details.

The product is a **decision engine**.

---

# First Principles

Every listing contains signals.

Examples:

* wording
* pricing
* timing
* seller history
* image quality
* image count
* posting frequency
* description quality
* hardware specification
* market rarity

Each signal contributes confidence.

No single signal should dominate.

---

# The Human Thought Process

Experienced buyers naturally perform reasoning similar to:

"I wonder why this person is selling."

"They're moving abroad."

"They only have one listing."

"They've had the account for years."

"They posted 15 minutes ago."

"They clearly don't know the hardware."

"The price is 40% below market."

"I should call immediately."

SellerSense attempts to automate this reasoning.

---

# Explainability

Every recommendation must answer:

Why?

Example:

Score: 91

Signals

* Moving abroad
* Posted recently
* Long-term seller
* Price anomaly
* Original invoice
* Single listing

Never return only a number.

---

# Local First

SellerSense should run completely locally.

Requirements:

* no cloud dependency
* no mandatory LLM
* no API keys
* works offline after scraping
* SQLite preferred
* configuration driven

Optional AI may be added later but must never become a requirement.

---

# Marketplace Agnostic

SellerSense should never become tightly coupled to OLX.

Supported sources may eventually include:

* OLX
* Facebook Marketplace
* Quikr
* Craigslist
* eBay
* Gumtree
* Local classified websites

Marketplace support should be implemented through adapters.

The scoring engine must remain independent.

---

# Design Principles

Prefer:

* simple heuristics
* explainable logic
* deterministic behaviour
* configuration over code
* modular architecture
* small dependencies
* local storage
* reproducibility

Avoid:

* magic AI
* opaque scoring
* vendor lock-in
* framework bloat

---

# What Makes SellerSense Different

Existing tools answer:

* cheapest price
* newest listing
* saved search
* price drop

SellerSense instead attempts to answer:

"Should I stop what I'm doing and contact this seller immediately?"

That is a fundamentally different optimization problem.

---

# Signals (Initial Brainstorm)

Seller intent

Examples

* moving abroad
* relocating
* shifting house
* transfer
* onsite opportunity
* urgent sale
* must sell
* final price
* leaving city
* hostel vacating

Seller trust

Examples

* account age
* total listings
* repost frequency
* description quality
* image uniqueness

Listing quality

Examples

* image count
* original invoice
* warranty
* accessories
* serial number shown

Pricing

Examples

* category median
* historical trend
* standard deviation
* outlier detection

Product rarity

Examples

* enterprise hardware
* niche electronics
* discontinued hardware
* workstation equipment
* networking gear

Knowledge asymmetry

Examples

* generic title
* incorrect model names
* incomplete specifications
* poor categorization

---

# Future Ideas

Not required for MVP.

Possible future additions:

* OCR on images
* duplicate detection
* price history
* image similarity
* Telegram notifications
* Discord notifications
* local LLM integration
* seller reputation
* market trend dashboard
* deal replay
* "Why this is interesting" explanations
* plugin system
* custom scoring rules

---

# Success Criteria

A successful SellerSense notification should make the user think:

"I probably wouldn't have found this manually."

or

"I would have ignored this listing without SellerSense."

---

# Failure Criteria

SellerSense has failed if it becomes:

* another scraper
* another dashboard
* another AI chatbot
* another notification spammer

The value is not collecting listings.

The value is surfacing **meaningful opportunities.**

---

# Personal Note

The purpose of this repository is to preserve the original idea before implementation begins.

Implementation details will evolve.

The philosophy should not.

Whenever adding new features, ask:

> Does this help understand the seller better?

If the answer is no, it probably belongs somewhere else.
