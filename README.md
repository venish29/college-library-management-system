# Northbridge University Library

A premium, frontend-only college library management portal built with HTML5, CSS3, Bootstrap 5, Bootstrap Icons, Chart.js, Vanilla JavaScript, and LocalStorage.

## Run

Serve the workspace with any static server, for example:

```powershell
python -m http.server 5500
```

Then open `http://localhost:5500`.

## Demonstration Accounts

These are demo accounts for faculty and usability testing only:

| Role | Email | Password |
|---|---|---|
| Admin | admin@northbridge.edu | admin123 |
| Librarian | librarian@northbridge.edu | library123 |
| Student | student@northbridge.edu | student123 |

## Features

- Public landing, library information, rules, and contact pages
- Three role-specific dashboards and navigation models
- Strict client-side route and action permission checks
- Book, category, student, and librarian CRUD
- Issue and return workflows with automatic availability
- Due-date and overdue fine calculations
- LocalStorage persistence, reports, charts, notifications, and activity logs

## Important Security Note

Authentication, authorization, and data storage in this academic demonstration are implemented in the browser using JavaScript and LocalStorage. They are not production-grade security controls and do not replace a real backend, database, password hashing, server-side authorization, or secure multi-user authentication.
