# CarePoint - Patient Management System

CarePoint is a high-fidelity, responsive frontend prototype for a hospital
patient management system. It demonstrates separate patient and administrator
experiences for appointments, medical records, prescriptions, laboratory
results, and payments.

## Links

- Figma design: https://www.figma.com/design/LfJvZpngu16iUqCRQBlnkF/CarePoint_HealthCare
- GitHub repository: https://github.com/LakshanPerera11/Carepoint_Patient_ManagementSystem

## Technologies

- HTML5
- CSS3 with responsive grid and flexbox layouts
- Vanilla JavaScript
- Git and GitHub for version control

## Run locally

This is a static frontend and does not require a build step or package
installation.

1. Open `index.html` directly in a browser, or serve the folder with:

   ```text
   python -m http.server 8000
   ```

2. Visit `http://localhost:8000/index.html`.
3. Enter any valid-looking email or Medical ID and any non-empty password.
4. Select **Patient** or **Admin** to view the relevant dashboard.

The interface uses sample data only. It is not connected to a real hospital
database, payment gateway, or authentication service.

## Implemented screens

| Screen | File | Main interaction |
| --- | --- | --- |
| Login | `index.html` | Role selection, validation, password visibility |
| Patient dashboard | `patient-dashboard.html` | Appointments, prescriptions, vitals, lab alerts |
| Administrator dashboard | `admin-dashboard.html` | Operational metrics, staff table, audit log |
| Appointment booking | `appointment-booking.html` | Date/time selection, validation, confirmation |
| Medical records | `medical-records.html` | Accessible tabs, lab tables, findings and sign-off |
| Online payments | `billing-payments.html` | Card validation, error summary, payment success |

## Accessibility and safety

- Semantic headings, landmarks, tables, labels, captions, and form controls
- Skip-to-content link and logical keyboard tab order
- Visible `:focus-visible` indicators for keyboard users
- ARIA labels, live status messages, alert regions, tab semantics, and
  accessible validation messages
- Text alternatives for meaningful images and accessible names for icon-only
  buttons
- Responsive layouts with readable text, strong contrast, and horizontal
  scrolling for wide data tables
- Sensitive screens display confidentiality and security notices
- Payment and medical data are mock data only; no sensitive information is
  stored or transmitted

## Validation checklist

- Login rejects empty credentials and invalid email formats.
- Appointment confirmation remains disabled until a date and time are chosen.
- Payment form validates cardholder name, card number, expiry, and CVV.
- Medical record tabs support mouse selection and Arrow/Home/End keyboard
  navigation.
- Sign out is available at the bottom of the shared sidebar.
- Patient and administrator navigation is selected from the login role.

## Project files

- `index.html` - login screen
- `patient-dashboard.html` - patient portal
- `admin-dashboard.html` - administrator portal
- `appointment-booking.html` - appointment workflow
- `medical-records.html` - records and laboratory reports
- `billing-payments.html` - payment workflow
- `css/style.css` - shared styling and responsive rules
- `js/layout.js` - shared role-based navigation and sidebar
- `NOTES.md` - design justification and assignment notes
