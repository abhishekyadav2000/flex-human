# PRD: Public Website

> Product requirements for the Flex Human public-facing website.

---

## 1. Objective

Establish Flex Human's digital presence as a premium Interface Engineering Platform Company. Build trust, demonstrate technical credibility, and capture partnership/investor interest.

---

## 2. MVP Pages

| Page          | Route            | Purpose                                                                          |
| ------------- | ---------------- | -------------------------------------------------------------------------------- |
| Home          | `/`              | Hero positioning, product pillars overview, credibility signals, primary CTA     |
| Technology    | `/technology`    | Synthetic skin architecture, wearable engineering, manufacturing AI capabilities |
| R&D           | `/r-and-d`       | Research roadmap, material science focus areas, lab capabilities                 |
| Manufacturing | `/manufacturing` | Process intelligence, QC pipeline, safety standards, global vendor model         |
| Partnerships  | `/partnerships`  | Partner/vendor inquiry form, collaboration model, integration capabilities       |
| Contact       | `/contact`       | Secure contact form, business inquiries                                          |
| Legal         | `/legal`         | Privacy policy, terms of service, IP notice                                      |

---

## 3. Page Specifications

### Home (`/`)

- Hero: bold headline + subline positioning Flex Human as interface engineering platform
- Three product pillar cards (Synthetic Skin, Prosthetics, Wearables) with links
- Manufacturing intelligence section with diagram
- Trust signals: standards compliance, material testing, precision engineering
- CTA: "Partner With Us" + "Explore Technology"

### Technology (`/technology`)

- Multi-layer skin architecture diagram (conceptual cross-section)
- Sensor mesh integration explanation
- Material properties table (public-safe subset)
- Wearable engineering capabilities
- Manufacturing AI overview

### R&D (`/r-and-d`)

- 4-phase research roadmap visualization
- Focus areas: tactile sensing, self-healing polymers, thermal adaptation, neural interfaces
- Lab capabilities overview
- No proprietary data exposed

### Manufacturing (`/manufacturing`)

- Process flow diagram (polymer blending → curing → QC → integration)
- AI-driven quality control explanation
- Computer vision defect detection concept
- Six Sigma and safety standards
- Global vendor model (regions, not names)

### Partnerships (`/partnerships`)

- Collaboration model explanation
- Inquiry form (name, organization, interest area, message)
- Target partner types: robotics companies, prosthetic manufacturers, defense programs, research institutions

### Contact (`/contact`)

- Secure form with CSRF protection
- Fields: name, email, organization, subject, message
- Rate limited (5 submissions per IP per hour)
- Honeypot field for spam prevention

### Legal (`/legal`)

- Privacy Policy
- Terms of Service
- IP Notice (intellectual property attribution and restrictions)

---

## 4. Non-Scope (MVP)

- Blog / news section
- E-commerce / product purchasing
- User accounts / login
- Real-time data dashboards
- Chatbot / live support
- Multi-language support
- Career listings (stub page acceptable)

---

## 5. Technical Requirements

| Requirement                    | Target          |
| ------------------------------ | --------------- |
| Lighthouse Performance         | >= 90           |
| Lighthouse Accessibility       | >= 90           |
| Lighthouse Best Practices      | >= 90           |
| Lighthouse SEO                 | >= 90           |
| LCP (Largest Contentful Paint) | < 2.0s          |
| CLS (Cumulative Layout Shift)  | < 0.1           |
| FID (First Input Delay)        | < 100ms         |
| Bundle size (initial JS)       | < 100KB gzipped |

---

## 6. SEO Requirements

- Dynamic `sitemap.xml` generated from routes
- `robots.txt` configured for search engines
- JSON-LD structured data (Organization, WebPage schemas)
- OpenGraph + Twitter Card meta tags per page
- Semantic HTML (proper heading hierarchy, landmarks)
- Image alt text on all images
- Canonical URLs on all pages

---

## 7. Analytics

- Analytics-ready: placeholder for Google Analytics 4 or Plausible
- Event tracking stubs for: page views, CTA clicks, form submissions
- No tracking without consent mechanism (future requirement)

---

## 8. Success Metrics

| Metric                   | Target               | Timeframe           |
| ------------------------ | -------------------- | ------------------- |
| Lighthouse all scores    | >= 90                | Launch              |
| Organic search indexing  | All pages indexed    | 30 days post-launch |
| Partnership inquiries    | >= 5 qualified leads | 90 days post-launch |
| Average session duration | >= 2 minutes         | 90 days post-launch |

---

_Scope changes require PRD update and team review._
