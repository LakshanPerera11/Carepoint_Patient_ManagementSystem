# Design justification

## Overall design objectives

CarePoint uses a calm clinical palette built around accessible navy, blue,
white, green, amber, and red states. The design aims to make urgent clinical
information visible without making routine tasks feel alarming. Cards,
consistent spacing, clear headings, and a shared sidebar create a predictable
experience across every role.

The prototype is intentionally high fidelity rather than a wireframe. It
includes realistic tables, status chips, charts, forms, confirmation banners,
sample clinical content, responsive layouts, and role-specific navigation.

## Screen decisions

### Login page

- **Objective:** Establish trust and let a patient or staff member enter the
  correct portal quickly.
- **Usability:** The two-column layout combines CarePoint branding and security
  benefits with a focused sign-in card. Role choices are visible before the
  user enters credentials.
- **Accessibility:** Every field has a label, autocomplete metadata, and
  validation feedback. Errors use an alert region, invalid fields are marked,
  and focus moves to the first invalid field. The password visibility control
  has an accessible label.
- **Roles:** Patient, doctor, nurse, and administrator roles are presented.
  Patient and administrator routes are fully demonstrated in this prototype.

### Patient dashboard

- **Objective:** Give patients an immediate overview of upcoming care,
  prescriptions, laboratory results, vitals, alerts, and balances.
- **Usability:** Summary cards surface important counts first, followed by the
  next appointment and actionable lists. Primary actions such as booking,
  refilling, viewing results, and checking in are easy to find.
- **Accessibility:** The page uses a skip link, heading hierarchy, status
  labels with text as well as colour, meaningful button labels, and responsive
  cards that collapse on smaller screens.
- **Roles:** The patient sees personal care information and patient actions,
  while clinical and administrative functions remain outside this view.

### Administrator dashboard

- **Objective:** Support operational monitoring and controlled account
  management.
- **Usability:** KPI cards provide a rapid system overview; the appointment
  chart shows workload; the staff table supports scanning identity, role,
  access, and status; the audit log highlights security events.
- **Accessibility:** The chart has a text alternative, the table has scoped
  headers and a caption, status controls expose switch state, and audit
  updates use a polite live region. Tables scroll horizontally on narrow
  screens rather than becoming unreadable.
- **Roles:** Administrator-only navigation exposes staff, system, and audit
  functions that are not shown in the patient portal.

### Appointment booking

- **Objective:** Guide a patient through a safe, understandable booking
  workflow.
- **Usability:** Progress steps show where the user is. Calendar selection,
  available slots, a reason textarea, and a persistent booking summary reduce
  errors before confirmation.
- **Accessibility:** Calendar and time controls use button semantics and
  pressed states. Disabled dates are labelled unavailable. The confirmation
  button is disabled until required choices are complete, and the success
  message is announced through a status region.
- **Roles:** Patients can book and describe symptoms; the same appointment
  data could be extended for staff scheduling and approval workflows.

### Medical record viewing

- **Objective:** Present sensitive records clearly while making abnormal
  results and allergies difficult to miss.
- **Usability:** The patient summary and allergy warning appear first. Tabs
  separate history, reports, prescriptions, and clinical notes. Tables provide
  comparison of dates, providers, results, and actions.
- **Accessibility:** Tab panels use `role="tablist"`, `role="tab"`, and
  `role="tabpanel"` with Arrow, Home, and End keyboard support. Tables include
  captions, scope attributes, text status labels, and accessible action names.
- **Roles:** Patients have read-only access. Doctors and nurses can access
  clinical sign-off controls, while the administrator can manage access and
  auditing.

### Online payment

- **Objective:** Make a payment understandable, secure-looking, and difficult
  to submit incorrectly.
- **Usability:** The invoice breakdown is placed beside the payment form so
  the amount and responsibility are always visible. Payment method tabs,
  familiar autocomplete fields, and a final amount button support completion.
- **Accessibility:** Labels, input modes, help text, invalid states, an error
  summary, and focus movement support keyboard and screen-reader users.
  Success and failure messages use status/alert regions.
- **Roles:** Patients can settle balances; administrators can review billing
  recovery metrics. The prototype does not process real card data.

## Accessibility test notes

The implementation was checked with keyboard navigation and browser rendering.
Focus moves through controls in document order, focus indicators remain
visible, form errors are announced, and responsive grids collapse at smaller
widths. Colour is not the only indicator of status: chips also contain words
such as `Normal`, `Pending`, `High`, `Active`, and `Revoked`.

## Submission notes

This repository contains the source code and short design notes requested for
the assignment. The Figma prototype and GitHub repository links are listed at
the top of `README.md`. All displayed names, dates, medical values, and
payment values are fictional sample data.
