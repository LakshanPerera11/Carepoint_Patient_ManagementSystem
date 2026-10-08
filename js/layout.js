const role = sessionStorage.getItem("role") || "patient";
const user =
  role === "patient"
    ? "Sarah Silva, Patient"
    : role === "admin"
      ? "Dr. Sarah Silva, Administrator"
      : "Dr. Marcus Vance, " + role;
const nav = [
  [
    "Dashboard",
    role === "admin" ? "admin-dashboard.html" : "patient-dashboard.html",
  ],
  ["Appointments", "appointment-booking.html"],
  ["Medical Records", "medical-records.html"],
  ["Prescriptions", "medical-records.html#rx"],
  ["Billing & Payments", "billing-payments.html"],
];
const ops =
  role === "admin"
    ? [
        ["Administrator", "admin-dashboard.html"],
        ["System Settings", "#"],
      ]
    : [];
const here = location.pathname.split("/").pop() || "index.html";
const li = ([t, h]) =>
  `<a href="${h}" ${h === here ? 'aria-current="page"' : ""}>${t}</a>`;
document.body.insertAdjacentHTML(
  "afterbegin",
  '<a class="skip" href="#main">Skip to main content</a>',
);
const shell = document.getElementById("shell");
shell.innerHTML = `<aside class="side"><div class="brand"><span class="logo" aria-hidden="true">+</span><span>CarePoint<small>HEALTH SYSTEMS NETWORK</small></span></div>
<nav aria-label="Main"><small>CLINICAL SUITE</small>${nav.map(li).join("")}${ops.length ? "<small>OPERATIONS</small>" + ops.map(li).join("") : ""}</nav>
<a class="signout" href="index.html">↪ <span>Sign out</span></a></aside>
<div><header class="top"><label class="sr" for="q">Search</label><input id="q" type="search" placeholder="Search patient name, MRN, physician, or appointment record…">
<span class="chip ok">🔒 HIPAA Compliant / 256-bit SSL</span><button class="btn sec sm" aria-label="Notifications, 3 unread">🔔 3</button>
<span class="user"><span class="avatar"></span>${user}</span></header><main id="main">${shell.innerHTML}</main></div>`;
