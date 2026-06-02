const STORAGE_KEY = "ndisInvoiceSystem.v1";

function cloneData(value) {
  if (typeof structuredClone === "function") return structuredClone(value);
  return JSON.parse(JSON.stringify(value));
}

const demoData = {
  users: [
    { role: "manager", username: "manager", password: "manager123", name: "Operations Manager" },
    { role: "manager", username: "manager", password: "1111", name: "Operations Manager" },
    { role: "manager", username: "ashneel", password: "3291", name: "Ashneel Nand" },
    { role: "account", username: "account", password: "account123", name: "Accounts Officer" },
    { role: "account", username: "accounts", password: "2222", name: "Accounts Officer" },
    { role: "staff", username: "staff", password: "staff123", name: "Support Worker" }
  ],
  settings: {
    endpoint: "",
    businessName: "Ashneel Nand",
    tradingName: "Ashneel Nand",
    abn: "25 632 580 216",
    email: "shnl.nand@gmail.com",
    phone: "04 33455165",
    address: "16a Palmyra Ave, Lethbridge Park, NSW 2770",
    bankName: "CommBank",
    bsb: "062-736",
    accountNumber: "10356868",
    paymentTermsDays: 7,
    gstRegistered: "No"
  },
  providers: [
    {
      id: "p1",
      name: "Buddies Multicare Support Services",
      planManager: "Sonia Narayan",
      abn: "54 200 118 619",
      contact: "accounts@buddies.example",
      transportRate: 1.08,
      transportFlat: 0,
      invoicePrefix: "BMCSS",
      gst: "No",
      notes: "Workbook-style provider with service-specific NDIS rates.",
      rates: {
        day: { weekday: 30, saturday: 40, sunday: 50, publicHoliday: 60 },
        evening: { weekday: 30, saturday: 40, sunday: 50, publicHoliday: 60 },
        sleepover: { weekday: 30, saturday: 40, sunday: 50, publicHoliday: 60 },
        activeNight: { weekday: 30, saturday: 40, sunday: 50, publicHoliday: 60 },
        weekdayMorning: 30,
        weekdayEvening: 30,
        sleepoverLegacy: 30,
        activeNightLegacy: 30,
        saturday: 82,
        sunday: 96,
        publicHoliday: 128
      }
    },
    {
      id: "p2",
      name: "Helping 4 Disability Services",
      planManager: "Rana Al-Yousuf",
      abn: "28 771 902 144",
      contact: "finance@helping4.example",
      transportRate: 0.8,
      transportFlat: 0,
      invoicePrefix: "HDS",
      gst: "No",
      notes: "Imported from workbook provider rates.",
      rates: {
        day: { weekday: 35, saturday: 40, sunday: 50, publicHoliday: 60 },
        evening: { weekday: 35, saturday: 40, sunday: 50, publicHoliday: 60 },
        sleepover: { weekday: 35, saturday: 40, sunday: 50, publicHoliday: 60 },
        activeNight: { weekday: 35, saturday: 40, sunday: 50, publicHoliday: 60 },
        weekdayMorning: 35,
        weekdayEvening: 35,
        sleepoverLegacy: 35,
        activeNightLegacy: 35,
        saturday: 79,
        sunday: 92,
        publicHoliday: 124
      }
    },
    {
      id: "p3",
      name: "Shiloh Care Services",
      planManager: "Lily Awuah",
      abn: "90 441 338 702",
      contact: "billing@shiloh.example",
      transportRate: 0.99,
      transportFlat: 0,
      invoicePrefix: "SCS",
      gst: "No",
      notes: "Imported from workbook provider rates.",
      rates: {
        day: { weekday: 35.15, saturday: 45, sunday: 63.27, publicHoliday: 70.3 },
        evening: { weekday: 35.15, saturday: 45, sunday: 63.27, publicHoliday: 70.3 },
        sleepover: { weekday: 35.15, saturday: 45, sunday: 63.27, publicHoliday: 70.3 },
        activeNight: { weekday: 35.15, saturday: 45, sunday: 63.27, publicHoliday: 70.3 },
        weekdayMorning: 35.15,
        weekdayEvening: 35.15,
        sleepoverLegacy: 35.15,
        activeNightLegacy: 35.15,
        saturday: 88,
        sunday: 104,
        publicHoliday: 135
      }
    }
  ],
  staff: [
    { id: "s1", name: "Shannon Lee", email: "shannon@example.com" },
    { id: "s2", name: "Avery Patel", email: "avery@example.com" }
  ],
  shifts: [
    {
      id: "sh1",
      providerId: "p1",
      staffId: "s1",
      date: "2026-05-18",
      participant: "Anthony",
      ndisNumber: "",
      dayType: "weekday",
      shiftType: "day",
      start: "07:00",
      end: "13:00",
      breakHours: 0,
      hours: 6,
      publicHoliday: "No",
      transportKm: 22,
      expenseAmount: 0,
      expenseExplanation: "",
      approvalStatus: "Approved",
      invoiceNumber: "",
      notes: "Morning personal care and community access."
    },
    {
      id: "sh2",
      providerId: "p1",
      staffId: "s1",
      date: "2026-05-24",
      participant: "Anthony",
      ndisNumber: "",
      dayType: "sunday",
      shiftType: "day",
      start: "09:00",
      end: "15:00",
      breakHours: 0,
      hours: 6,
      publicHoliday: "No",
      transportKm: 18,
      expenseAmount: 5,
      expenseExplanation: "Participant requested lunch item.",
      approvalStatus: "Approved",
      invoiceNumber: "",
      notes: "Sunday social participation support."
    },
    {
      id: "sh3",
      providerId: "p2",
      staffId: "s2",
      date: "2026-05-26",
      participant: "Nicola & Zbynek",
      ndisNumber: "",
      dayType: "weekday",
      shiftType: "activeNight",
      start: "22:00",
      end: "06:00",
      breakHours: 0,
      hours: 8,
      publicHoliday: "No",
      transportKm: 12,
      expenseAmount: 0,
      expenseExplanation: "",
      approvalStatus: "Submitted",
      invoiceNumber: "",
      notes: "Active night monitoring and medication prompts."
    }
  ],
  expenses: [
    {
      id: "ex1",
      providerId: "p1",
      staffId: "s1",
      date: "2026-05-20",
      amount: 18.75,
      explanation: "Participant-approved activity entry fee."
    }
  ],
  payments: [
    {
      id: "pay1",
      invoiceNumber: "INV026102",
      date: "2026-05-19",
      providerId: "p1",
      amount: 189.1,
      method: "Bank Transfer",
      reference: "Partial paid invoice",
      notes: "Workbook-style sample payment."
    }
  ],
  invoices: []
};

let state = loadState();
let session = null;
let currentView = "dashboard";
let currentInvoice = createDraftInvoice();

const money = new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD" });
const shortDate = new Intl.DateTimeFormat("en-AU", { dateStyle: "medium" });

document.addEventListener("DOMContentLoaded", () => {
  try {
    bindEvents();
    fillScriptSnippet();
    document.getElementById("todayStamp").textContent = new Date().toLocaleDateString("en-AU", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    hydrateSettings();
    renderAll();
  } catch (error) {
    showStartupError(error);
  }
});

function bindEvents() {
  document.getElementById("loginForm").addEventListener("submit", login);
  document.getElementById("logoutBtn").addEventListener("click", logout);
  document.querySelectorAll(".nav-list button").forEach((button) => {
    button.addEventListener("click", () => showView(button.dataset.view));
  });
  document.getElementById("syncBtn").addEventListener("click", syncSheet);
  document.getElementById("printBtn").addEventListener("click", () => window.print());
  document.getElementById("newInvoiceFromDashboard").addEventListener("click", () => showView("invoice"));
  document.getElementById("saveInvoiceBtn").addEventListener("click", saveInvoice);
  document.getElementById("clearInvoiceBtn").addEventListener("click", () => {
    currentInvoice = createDraftInvoice();
    renderInvoice();
  });
  document.getElementById("addShiftBtn").addEventListener("click", () => addLine("shift"));
  document.getElementById("addExpenseBtn").addEventListener("click", () => addLine("expense"));
  document.getElementById("addProviderBtn").addEventListener("click", openProviderDialog);
  document.getElementById("quickShiftBtn").addEventListener("click", openShiftDialog);
  document.getElementById("quickExpenseBtn").addEventListener("click", openExpenseDialog);
  document.getElementById("quickPaymentBtn").addEventListener("click", openPaymentDialog);
  document.getElementById("copyClaimBtn").addEventListener("click", copyClaimRows);
  document.getElementById("saveSettingsBtn").addEventListener("click", saveSettings);
  document.getElementById("exportJsonBtn").addEventListener("click", exportJson);
  document.getElementById("resetDemoBtn").addEventListener("click", resetDemo);
  document.getElementById("headerUploadBtn").addEventListener("click", () => document.getElementById("headerImageInput").click());
  document.getElementById("headerImageInput").addEventListener("change", loadHeaderImage);
  ["invoiceProvider", "invoiceStaff", "invoiceNumber", "invoiceIssueDate", "invoiceDueDate", "periodStart", "periodEnd", "invoiceStatus", "invoiceNotes"].forEach((id) => {
    document.getElementById(id).addEventListener("input", updateInvoiceFromForm);
  });
}

function login(event) {
  event.preventDefault();
  const role = document.getElementById("loginRole").value;
  const username = document.getElementById("loginUser").value.trim();
  const password = document.getElementById("loginPass").value;
  const found = state.users.find((user) => user.username === username && String(user.password) === String(password) && (user.role === role || username !== ""));
  const error = document.getElementById("loginError");
  if (!found) {
    error.textContent = "Those credentials do not match a system user.";
    error.hidden = false;
    return;
  }
  error.hidden = true;
  session = found;
  document.getElementById("loginView").hidden = true;
  document.getElementById("appView").hidden = false;
  document.getElementById("roleBadge").textContent = `${found.role.charAt(0).toUpperCase()}${found.role.slice(1)} access`;
  applyPermissions();
  try {
    renderAll();
  } catch (renderError) {
    showStartupError(renderError);
  }
}

function logout() {
  session = null;
  document.getElementById("appView").hidden = true;
  document.getElementById("loginView").hidden = false;
}

function applyPermissions() {
  const isStaff = session?.role === "staff";
  ["providers", "payments", "claim", "settings"].forEach((view) => {
    document.querySelector(`[data-view="${view}"]`).style.display = isStaff ? "none" : "";
  });
  document.getElementById("addProviderBtn").disabled = isStaff;
  document.getElementById("saveSettingsBtn").disabled = isStaff;
  document.getElementById("resetDemoBtn").disabled = isStaff;
}

function showView(view) {
  currentView = view;
  document.querySelectorAll(".view").forEach((item) => item.classList.remove("active-view"));
  document.getElementById(`${view}View`).classList.add("active-view");
  document.querySelectorAll(".nav-list button").forEach((button) => button.classList.toggle("active", button.dataset.view === view));
  document.getElementById("viewTitle").textContent = view === "providers" ? "Provider Rates" : titleCase(view);
  renderAll();
}

function titleCase(value) {
  return value.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return normalizeState(cloneData(demoData));
  try {
    const parsed = JSON.parse(saved);
    return normalizeState({ ...cloneData(demoData), ...parsed });
  } catch {
    return normalizeState(cloneData(demoData));
  }
}

function normalizeState(data) {
  data.settings = { ...cloneData(demoData.settings), ...(data.settings || {}) };
  data.payments = data.payments || [];
  data.providers = (data.providers || []).map((provider) => {
    const baseRates = provider.rates || {};
    return {
      planManager: "",
      transportFlat: 0,
      invoicePrefix: provider.name ? provider.name.slice(0, 3).toUpperCase() : "INV",
      gst: "No",
      notes: "",
      ...provider,
      rates: {
        day: baseRates.day || { weekday: baseRates.weekdayMorning || 0, saturday: baseRates.saturday || 0, sunday: baseRates.sunday || 0, publicHoliday: baseRates.publicHoliday || 0 },
        evening: baseRates.evening || { weekday: baseRates.weekdayEvening || 0, saturday: baseRates.saturday || 0, sunday: baseRates.sunday || 0, publicHoliday: baseRates.publicHoliday || 0 },
        sleepover: typeof baseRates.sleepover === "object" ? baseRates.sleepover : { weekday: baseRates.sleepover || 0, saturday: baseRates.saturday || 0, sunday: baseRates.sunday || 0, publicHoliday: baseRates.publicHoliday || 0 },
        activeNight: typeof baseRates.activeNight === "object" ? baseRates.activeNight : { weekday: baseRates.activeNight || 0, saturday: baseRates.saturday || 0, sunday: baseRates.sunday || 0, publicHoliday: baseRates.publicHoliday || 0 },
        weekdayMorning: baseRates.weekdayMorning || baseRates.day?.weekday || 0,
        weekdayEvening: baseRates.weekdayEvening || baseRates.evening?.weekday || 0,
        saturday: baseRates.saturday || baseRates.day?.saturday || 0,
        sunday: baseRates.sunday || baseRates.day?.sunday || 0,
        publicHoliday: baseRates.publicHoliday || baseRates.day?.publicHoliday || 0
      }
    };
  });
  data.shifts = (data.shifts || []).map((shift) => ({
    participant: "",
    ndisNumber: "",
    breakHours: 0,
    publicHoliday: shift.dayType === "publicHoliday" ? "Yes" : "No",
    expenseAmount: 0,
    expenseExplanation: "",
    approvalStatus: "Draft",
    invoiceNumber: "",
    ...shift,
    shiftType: normalizeShiftType(shift.shiftType)
  }));
  data.invoices = (data.invoices || []).map((invoice) => ({
    lineIds: [],
    expenseIds: [],
    dueDate: addDays(invoice.issueDate, Number(data.settings.paymentTermsDays || 7)),
    notes: "",
    ...invoice,
    lineIds: Array.isArray(invoice.lineIds) ? invoice.lineIds : String(invoice.lineIds || "").split(",").filter(Boolean),
    expenseIds: Array.isArray(invoice.expenseIds) ? invoice.expenseIds : String(invoice.expenseIds || "").split(",").filter(Boolean)
  }));
  return data;
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function createDraftInvoice() {
  const provider = state.providers[0];
  const staff = state.staff[0];
  const today = new Date().toISOString().slice(0, 10);
  const prefix = provider?.invoicePrefix || "INV";
  return {
    id: uid("inv"),
    invoiceNumber: `${prefix}-${new Date().toISOString().slice(0, 10).replace(/-/g, "")}-${String(state.invoices.length + 1).padStart(3, "0")}`,
    providerId: provider?.id || "",
    staffId: staff?.id || "",
    issueDate: today,
    dueDate: addDays(today, Number(state.settings.paymentTermsDays || 7)),
    periodStart: today,
    periodEnd: today,
    status: "Draft",
    notes: "",
    lineIds: [],
    expenseIds: []
  };
}

function renderAll() {
  renderSelects();
  renderDashboard();
  renderProviders();
  renderShiftTable();
  renderExpenseTable();
  renderPaymentTable();
  renderClaimExport();
  renderInvoice();
}

function renderSelects() {
  const providerOptions = state.providers.map((provider) => `<option value="${provider.id}">${escapeHtml(provider.name)}</option>`).join("");
  const staffOptions = state.staff.map((person) => `<option value="${person.id}">${escapeHtml(person.name)}</option>`).join("");
  document.getElementById("invoiceProvider").innerHTML = providerOptions;
  document.getElementById("invoiceStaff").innerHTML = staffOptions;
}

function renderDashboard() {
  const outstanding = state.invoices.reduce((sum, invoice) => sum + totalForInvoice(invoice).unpaid, 0);
  const paid = state.payments.reduce((sum, payment) => sum + Number(payment.amount || 0), 0);
  const fortnightStart = new Date();
  fortnightStart.setDate(fortnightStart.getDate() - 14);
  const fortnightTotal = state.shifts
    .filter((shift) => new Date(shift.date) >= fortnightStart)
    .reduce((sum, shift) => sum + lineAmount(shift).total, 0);
  document.getElementById("metricOutstanding").textContent = money.format(outstanding);
  document.getElementById("metricFortnight").textContent = money.format(fortnightTotal);
  document.getElementById("metricPending").textContent = state.shifts.filter((shift) => ["Draft", "Submitted"].includes(shift.approvalStatus)).length;
  document.getElementById("metricPaid").textContent = money.format(paid);
  document.getElementById("metricProviders").textContent = state.providers.length;
  document.getElementById("invoiceCount").textContent = `${state.invoices.length} saved`;

  const providerTotals = state.providers.map((provider) => {
    const total = state.shifts.filter((shift) => shift.providerId === provider.id).reduce((sum, shift) => sum + lineAmount(shift).total, 0);
    return { provider, total };
  });
  const max = Math.max(...providerTotals.map((item) => item.total), 1);
  document.getElementById("providerBars").innerHTML = providerTotals.map(({ provider, total }) => `
    <div class="bar-row">
      <header><span>${escapeHtml(provider.name)}</span><span>${money.format(total)}</span></header>
      <div class="bar-track"><div class="bar-fill" style="width:${Math.round((total / max) * 100)}%"></div></div>
    </div>
  `).join("");

  document.getElementById("recentInvoices").innerHTML = state.invoices.slice(-6).reverse().map((invoice) => {
    const total = totalForInvoice(invoice);
    return `<div class="record-item"><div><strong>${escapeHtml(invoice.invoiceNumber)}</strong><span>${providerName(invoice.providerId)} · ${invoiceStatus(invoice)}</span></div><strong>${money.format(total.unpaid)}</strong></div>`;
  }).join("") || `<p class="soft-label">No invoices saved yet</p>`;
}

function renderProviders() {
  document.getElementById("providerCards").innerHTML = state.providers.map((provider) => `
    <article class="provider-card">
      <strong>${escapeHtml(provider.name)}</strong>
      <span>${escapeHtml(provider.planManager || "No plan manager")} · Prefix ${escapeHtml(provider.invoicePrefix)} · Transport ${money.format(provider.transportRate)}/km + ${money.format(provider.transportFlat || 0)} flat · GST ${escapeHtml(provider.gst || "No")}</span>
      <div class="rate-grid">
        ${serviceRatePill("Day", provider.rates.day)}
        ${serviceRatePill("Evening", provider.rates.evening)}
        ${serviceRatePill("Sleepover", provider.rates.sleepover)}
        ${serviceRatePill("Active night", provider.rates.activeNight)}
      </div>
    </article>
  `).join("");
}

function ratePill(label, amount) {
  return `<div class="rate-pill"><strong>${label}</strong><br>${money.format(Number(amount || 0))}</div>`;
}

function serviceRatePill(label, rates) {
  return `<div class="rate-pill"><strong>${label}</strong><br>W ${money.format(Number(rates?.weekday || 0))} · Sat ${money.format(Number(rates?.saturday || 0))}<br>Sun ${money.format(Number(rates?.sunday || 0))} · PH ${money.format(Number(rates?.publicHoliday || 0))}</div>`;
}

function renderShiftTable() {
  document.getElementById("shiftTable").innerHTML = `
    <table class="data-table">
      <thead><tr><th>Date</th><th>Provider</th><th>Participant</th><th>Service</th><th>Day</th><th>Hours</th><th>Hourly</th><th>Transport</th><th>Expenses</th><th>Status</th><th>Invoice</th><th>Total</th></tr></thead>
      <tbody>
        ${state.shifts.map((shift) => {
          const amount = lineAmount(shift);
          return `<tr><td>${formatDate(shift.date)}</td><td>${providerName(shift.providerId)}</td><td>${escapeHtml(shift.participant)}</td><td>${shiftLabel(shift.shiftType)}</td><td>${dayTypeLabel(shift.dayType)}</td><td>${shift.hours}</td><td>${money.format(amount.hourlyRate)}</td><td>${money.format(amount.transport)}</td><td>${money.format(amount.shiftExpense)}</td><td>${escapeHtml(shift.approvalStatus)}</td><td>${escapeHtml(shift.invoiceNumber || "")}</td><td>${money.format(amount.total)}</td></tr>`;
        }).join("")}
      </tbody>
    </table>`;
}

function renderExpenseTable() {
  document.getElementById("expenseTable").innerHTML = `
    <table class="data-table">
      <thead><tr><th>Date</th><th>Provider</th><th>Staff</th><th>Explanation</th><th>Amount</th></tr></thead>
      <tbody>
        ${state.expenses.map((expense) => `<tr><td>${formatDate(expense.date)}</td><td>${providerName(expense.providerId)}</td><td>${staffName(expense.staffId)}</td><td>${escapeHtml(expense.explanation)}</td><td>${money.format(Number(expense.amount || 0))}</td></tr>`).join("")}
      </tbody>
    </table>`;
}

function renderPaymentTable() {
  document.getElementById("paymentTable").innerHTML = `
    <table class="data-table">
      <thead><tr><th>Payment ID</th><th>Invoice No</th><th>Date</th><th>Provider</th><th>Amount</th><th>Method</th><th>Reference</th><th>Notes</th></tr></thead>
      <tbody>
        ${state.payments.map((payment) => `<tr><td>${escapeHtml(payment.id)}</td><td>${escapeHtml(payment.invoiceNumber)}</td><td>${formatDate(payment.date)}</td><td>${providerName(payment.providerId)}</td><td>${money.format(Number(payment.amount || 0))}</td><td>${escapeHtml(payment.method)}</td><td>${escapeHtml(payment.reference || "")}</td><td>${escapeHtml(payment.notes || "")}</td></tr>`).join("")}
      </tbody>
    </table>`;
}

function renderClaimExport() {
  const rows = claimRows();
  document.getElementById("claimExportTable").innerHTML = `
    <table class="data-table">
      <thead><tr><th>Invoice No</th><th>Provider</th><th>Participant</th><th>NDIS No</th><th>Date</th><th>Service</th><th>Day Type</th><th>Hours</th><th>Rate</th><th>Transport</th><th>Expenses</th><th>Line Total</th></tr></thead>
      <tbody>
        ${rows.map((row) => `<tr><td>${escapeHtml(row.invoiceNumber)}</td><td>${escapeHtml(row.provider)}</td><td>${escapeHtml(row.participant)}</td><td>${escapeHtml(row.ndisNumber)}</td><td>${formatDate(row.date)}</td><td>${escapeHtml(row.serviceType)}</td><td>${escapeHtml(row.dayType)}</td><td>${row.hours}</td><td>${money.format(row.rate)}</td><td>${money.format(row.transport)}</td><td>${money.format(row.expenses)}</td><td>${money.format(row.lineTotal)}</td></tr>`).join("")}
      </tbody>
    </table>`;
}

function renderInvoice() {
  const providerSelect = document.getElementById("invoiceProvider");
  const staffSelect = document.getElementById("invoiceStaff");
  providerSelect.value = currentInvoice.providerId;
  staffSelect.value = currentInvoice.staffId;
  document.getElementById("invoiceNumber").value = currentInvoice.invoiceNumber;
  document.getElementById("invoiceIssueDate").value = currentInvoice.issueDate;
  document.getElementById("invoiceDueDate").value = currentInvoice.dueDate;
  document.getElementById("periodStart").value = currentInvoice.periodStart;
  document.getElementById("periodEnd").value = currentInvoice.periodEnd;
  document.getElementById("invoiceStatus").value = currentInvoice.status;
  document.getElementById("invoiceNotes").value = currentInvoice.notes || "";

  const provider = findProvider(currentInvoice.providerId);
  document.getElementById("paperBusiness").innerHTML = `
    ${escapeHtml(state.settings.businessName)}<br>
    ABN ${escapeHtml(state.settings.abn)}<br>
    ${escapeHtml(state.settings.email)} · ${escapeHtml(state.settings.phone)}<br>
    ${escapeHtml(state.settings.address)}
  `;
  document.getElementById("paperProvider").innerHTML = provider
    ? `${escapeHtml(provider.name)}<br>${escapeHtml(provider.planManager || "")}<br>ABN ${escapeHtml(provider.abn)}<br>${escapeHtml(provider.contact)}`
    : "No provider selected";
  document.getElementById("paperInvoiceMeta").innerHTML = `
    ${escapeHtml(currentInvoice.invoiceNumber)}<br>
    Issue: ${formatDate(currentInvoice.issueDate)}<br>
    Due: ${formatDate(currentInvoice.dueDate)}<br>
    Period: ${formatDate(currentInvoice.periodStart)} to ${formatDate(currentInvoice.periodEnd)}<br>
    Worker: ${staffName(currentInvoice.staffId)}<br>
    Status: ${invoiceStatus(currentInvoice)}
  `;
  document.getElementById("paperPaymentDetails").innerHTML = `
    ${escapeHtml(state.settings.bankName)}<br>
    BSB ${escapeHtml(state.settings.bsb)} · Acct ${escapeHtml(state.settings.accountNumber)}<br>
    Terms: ${escapeHtml(state.settings.paymentTermsDays)} days<br>
    ${escapeHtml(currentInvoice.notes || "")}
  `;
  document.getElementById("invoiceHeaderProvider").textContent = provider?.name || "Provider billing statement";

  renderLineEditor();
  renderPaperLines();
}

function renderLineEditor() {
  const lines = selectedShifts();
  const expenses = selectedExpenses();
  document.getElementById("invoiceLineEditor").innerHTML = `
    ${lines.map((shift) => {
      const amount = lineAmount(shift);
      return `<article class="line-card"><strong>${formatDate(shift.date)} · ${escapeHtml(shift.participant || "")} · ${shiftLabel(shift.shiftType)}</strong><span>${escapeHtml(shift.notes)}<br>${shift.hours} hrs at ${money.format(amount.hourlyRate)} + ${shift.transportKm} km transport + ${money.format(amount.shiftExpense)} shift expense = ${money.format(amount.total)}</span></article>`;
    }).join("")}
    ${expenses.map((expense) => `<article class="line-card"><strong>Expense · ${formatDate(expense.date)}</strong><span>${escapeHtml(expense.explanation)} · ${money.format(Number(expense.amount || 0))}</span></article>`).join("")}
    ${!lines.length && !expenses.length ? `<p class="soft-label">Add shifts and expenses to this invoice.</p>` : ""}
  `;
}

function renderPaperLines() {
  const lines = selectedShifts();
  const expenses = selectedExpenses();
  const shiftRows = lines.map((shift) => {
    const amount = lineAmount(shift);
    return `<tr><td>${formatDate(shift.date)}</td><td>${escapeHtml(shift.participant || "")} · ${shiftLabel(shift.shiftType)} · ${dayTypeLabel(shift.dayType)}<br><span>${escapeHtml(shift.notes)}${shift.expenseExplanation ? `<br>Expense: ${escapeHtml(shift.expenseExplanation)}` : ""}</span></td><td>${shift.hours}</td><td>${money.format(amount.hourlyRate)}</td><td>${money.format(amount.transport)}</td><td>${money.format(amount.total)}</td></tr>`;
  });
  const expenseRows = expenses.map((expense) => `<tr><td>${formatDate(expense.date)}</td><td>Expense<br><span>${escapeHtml(expense.explanation)}</span></td><td>-</td><td>-</td><td>-</td><td>${money.format(Number(expense.amount || 0))}</td></tr>`);
  document.getElementById("paperLines").innerHTML = [...shiftRows, ...expenseRows].join("") || `<tr><td colspan="6">No billable items selected.</td></tr>`;
  const totals = totalForInvoice(currentInvoice);
  document.getElementById("paperHourly").textContent = money.format(totals.hourly);
  document.getElementById("paperTransport").textContent = money.format(totals.transport);
  document.getElementById("paperExpenses").textContent = money.format(totals.expenses);
  document.getElementById("paperGst").textContent = money.format(totals.gst);
  document.getElementById("paperPaid").textContent = money.format(totals.paid);
  document.getElementById("paperUnpaid").textContent = money.format(totals.unpaid);
  document.getElementById("paperGrand").textContent = money.format(totals.grand);
}

function updateInvoiceFromForm() {
  currentInvoice = {
    ...currentInvoice,
    providerId: document.getElementById("invoiceProvider").value,
    staffId: document.getElementById("invoiceStaff").value,
    invoiceNumber: document.getElementById("invoiceNumber").value,
    issueDate: document.getElementById("invoiceIssueDate").value,
    dueDate: document.getElementById("invoiceDueDate").value,
    periodStart: document.getElementById("periodStart").value,
    periodEnd: document.getElementById("periodEnd").value,
    status: document.getElementById("invoiceStatus").value,
    notes: document.getElementById("invoiceNotes").value
  };
  renderInvoice();
}

function addLine(type) {
  updateInvoiceFromForm();
  if (type === "shift") {
    const eligible = state.shifts.filter((shift) => shift.providerId === currentInvoice.providerId && !currentInvoice.lineIds.includes(shift.id));
    if (!eligible.length) {
      openShiftDialog();
      return;
    }
    currentInvoice.lineIds.push(eligible[0].id);
  } else {
    const eligible = state.expenses.filter((expense) => expense.providerId === currentInvoice.providerId && !currentInvoice.expenseIds.includes(expense.id));
    if (!eligible.length) {
      openExpenseDialog();
      return;
    }
    currentInvoice.expenseIds.push(eligible[0].id);
  }
  renderInvoice();
}

function saveInvoice() {
  updateInvoiceFromForm();
  const index = state.invoices.findIndex((invoice) => invoice.id === currentInvoice.id);
  if (index >= 0) state.invoices[index] = cloneData(currentInvoice);
  else state.invoices.push(cloneData(currentInvoice));
  currentInvoice.lineIds.forEach((id) => {
    const shift = state.shifts.find((item) => item.id === id);
    if (shift) {
      shift.invoiceNumber = currentInvoice.invoiceNumber;
      shift.approvalStatus = "Invoiced";
    }
  });
  persist();
  toast("Invoice saved.");
  renderAll();
}

function selectedShifts() {
  return currentInvoice.lineIds.map((id) => state.shifts.find((shift) => shift.id === id)).filter(Boolean);
}

function selectedExpenses() {
  return currentInvoice.expenseIds.map((id) => state.expenses.find((expense) => expense.id === id)).filter(Boolean);
}

function lineAmount(shift) {
  const provider = findProvider(shift.providerId);
  const serviceRates = provider?.rates?.[normalizeShiftType(shift.shiftType)];
  const hourlyRate = Number(serviceRates?.[shift.dayType] ?? provider?.rates?.[shift.shiftType] ?? 0);
  const transport = Number(shift.transportKm || 0) * Number(provider?.transportRate || 0) + Number(provider?.transportFlat || 0);
  const hourly = Number(shift.hours || 0) * hourlyRate;
  const shiftExpense = Number(shift.expenseAmount || 0);
  return { hourlyRate, hourly, transport, shiftExpense, total: hourly + transport + shiftExpense };
}

function totalForInvoice(invoice) {
  const shifts = invoice.lineIds.map((id) => state.shifts.find((shift) => shift.id === id)).filter(Boolean);
  const expenses = invoice.expenseIds.map((id) => state.expenses.find((expense) => expense.id === id)).filter(Boolean);
  const shiftTotals = shifts.reduce((acc, shift) => {
    const amount = lineAmount(shift);
    acc.hourly += amount.hourly;
    acc.transport += amount.transport;
    acc.shiftExpenses += amount.shiftExpense;
    return acc;
  }, { hourly: 0, transport: 0, shiftExpenses: 0 });
  const expenseTotal = expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
  const beforeGst = shiftTotals.hourly + shiftTotals.transport + shiftTotals.shiftExpenses + expenseTotal;
  const provider = findProvider(invoice.providerId);
  const gst = provider?.gst === "Yes" || state.settings.gstRegistered === "Yes" ? beforeGst * 0.1 : 0;
  const grand = beforeGst + gst;
  const paid = paidForInvoice(invoice.invoiceNumber);
  const unpaid = Math.max(grand - paid, 0);
  return { hourly: shiftTotals.hourly, transport: shiftTotals.transport, expenses: shiftTotals.shiftExpenses + expenseTotal, gst, paid, unpaid, grand };
}

function openProviderDialog() {
  openDialog("Provider", [
    field("name", "Provider name"),
    field("planManager", "Plan manager / company"),
    field("abn", "ABN"),
    field("contact", "Accounts contact"),
    field("transportRate", "Transport rate / km", "number", "1.00"),
    field("transportFlat", "Transport flat", "number", "0.00"),
    field("invoicePrefix", "Invoice prefix", "text", "NDIS"),
    selectField("gst", "GST?", [["No", "No"], ["Yes", "Yes"]]),
    field("weekday", "Weekday rate", "number", "58.50"),
    field("saturday", "Saturday rate", "number", "82.00"),
    field("sunday", "Sunday rate", "number", "96.00"),
    field("publicHoliday", "Public holiday rate", "number", "128.00"),
    field("notes", "Notes", "textarea", "", true)
  ], (values) => {
    const serviceRates = { weekday: Number(values.weekday), saturday: Number(values.saturday), sunday: Number(values.sunday), publicHoliday: Number(values.publicHoliday) };
    state.providers.push({
      id: uid("p"),
      name: values.name,
      planManager: values.planManager,
      abn: values.abn,
      contact: values.contact,
      transportRate: Number(values.transportRate),
      transportFlat: Number(values.transportFlat),
      invoicePrefix: values.invoicePrefix,
      gst: values.gst,
      notes: values.notes,
      rates: {
        day: serviceRates,
        evening: serviceRates,
        sleepover: serviceRates,
        activeNight: serviceRates,
        weekdayMorning: Number(values.weekday),
        weekdayEvening: Number(values.weekday),
        saturday: Number(values.saturday),
        sunday: Number(values.sunday),
        publicHoliday: Number(values.publicHoliday)
      }
    });
    persist();
    renderAll();
  });
}

function openShiftDialog() {
  openDialog("Shift", [
    selectField("providerId", "Provider", state.providers.map((provider) => [provider.id, provider.name])),
    selectField("staffId", "Staff", state.staff.map((person) => [person.id, person.name])),
    field("participant", "Participant / client"),
    field("ndisNumber", "NDIS no."),
    field("date", "Date", "date", new Date().toISOString().slice(0, 10)),
    selectField("publicHoliday", "Public holiday?", [["No", "No"], ["Yes", "Yes"]]),
    selectField("dayType", "Day type", [["weekday", "Weekday"], ["saturday", "Saturday"], ["sunday", "Sunday"], ["publicHoliday", "Public holiday"]]),
    selectField("shiftType", "Shift type", shiftTypeOptions()),
    field("start", "Start", "time", "09:00"),
    field("end", "End", "time", "17:00"),
    field("breakHours", "Break hrs", "number", "0"),
    field("hours", "Hours", "number", "8"),
    field("transportKm", "Transport km", "number", "0"),
    field("expenseAmount", "Shift expense", "number", "0.00"),
    field("expenseExplanation", "Expense explanation", "textarea", "", true),
    selectField("approvalStatus", "Approval status", [["Draft", "Draft"], ["Submitted", "Submitted"], ["Approved", "Approved"], ["Invoiced", "Invoiced"]]),
    field("notes", "Shift notes", "textarea", "Support delivered as rostered.", true)
  ], (values) => {
    const dayType = values.publicHoliday === "Yes" ? "publicHoliday" : values.dayType;
    state.shifts.push({ id: uid("sh"), ...values, dayType, hours: Number(values.hours), breakHours: Number(values.breakHours), transportKm: Number(values.transportKm), expenseAmount: Number(values.expenseAmount) });
    persist();
    renderAll();
    if (currentView === "invoice" && values.providerId === currentInvoice.providerId) {
      currentInvoice.lineIds.push(state.shifts[state.shifts.length - 1].id);
      renderInvoice();
    }
  });
}

function openExpenseDialog() {
  openDialog("Expense", [
    selectField("providerId", "Provider", state.providers.map((provider) => [provider.id, provider.name])),
    selectField("staffId", "Staff", state.staff.map((person) => [person.id, person.name])),
    field("date", "Date", "date", new Date().toISOString().slice(0, 10)),
    field("amount", "Amount", "number", "0.00"),
    field("explanation", "Explanation", "textarea", "Participant-approved expense.", true)
  ], (values) => {
    state.expenses.push({ id: uid("ex"), ...values, amount: Number(values.amount) });
    persist();
    renderAll();
    if (currentView === "invoice" && values.providerId === currentInvoice.providerId) {
      currentInvoice.expenseIds.push(state.expenses[state.expenses.length - 1].id);
      renderInvoice();
    }
  });
}

function openPaymentDialog() {
  const invoiceOptions = state.invoices.length
    ? state.invoices.map((invoice) => [invoice.invoiceNumber, `${invoice.invoiceNumber} · ${providerName(invoice.providerId)}`])
    : [["", "No saved invoices yet"]];
  openDialog("Payment", [
    selectField("invoiceNumber", "Invoice no.", invoiceOptions),
    field("date", "Payment date", "date", new Date().toISOString().slice(0, 10)),
    field("amount", "Amount paid", "number", "0.00"),
    selectField("method", "Method", [["Bank Transfer", "Bank Transfer"], ["Cash", "Cash"], ["Card", "Card"], ["Other", "Other"]]),
    field("reference", "Reference"),
    field("notes", "Notes", "textarea", "", true)
  ], (values) => {
    const invoice = state.invoices.find((item) => item.invoiceNumber === values.invoiceNumber);
    state.payments.push({
      id: uid("pay"),
      invoiceNumber: values.invoiceNumber,
      date: values.date,
      providerId: invoice?.providerId || "",
      amount: Number(values.amount),
      method: values.method,
      reference: values.reference,
      notes: values.notes
    });
    persist();
    renderAll();
  });
}

function openDialog(title, fields, onSave) {
  const dialog = document.getElementById("recordDialog");
  document.getElementById("dialogTitle").textContent = `Add ${title}`;
  document.getElementById("dialogFields").innerHTML = fields.join("");
  const form = document.getElementById("recordForm");
  form.onsubmit = (event) => {
    if (event.submitter?.value === "cancel") return;
    event.preventDefault();
    const values = Object.fromEntries(new FormData(form).entries());
    onSave(values);
    dialog.close();
    toast(`${title} saved.`);
  };
  dialog.showModal();
}

function field(name, labelText, type = "text", value = "", wide = false) {
  if (type === "textarea") {
    return `<label class="${wide ? "wide" : ""}">${labelText}<textarea name="${name}">${escapeHtml(value)}</textarea></label>`;
  }
  return `<label class="${wide ? "wide" : ""}">${labelText}<input name="${name}" type="${type}" value="${escapeHtml(value)}" ${type === "number" ? 'step="0.01"' : ""} required></label>`;
}

function selectField(name, labelText, options) {
  return `<label>${labelText}<select name="${name}">${options.map(([value, labelText]) => `<option value="${value}">${escapeHtml(labelText)}</option>`).join("")}</select></label>`;
}

function shiftTypeOptions() {
  return [
    ["day", "Day"],
    ["evening", "Evening"],
    ["sleepover", "Sleepover"],
    ["activeNight", "Active night"]
  ];
}

function saveSettings() {
  state.settings.endpoint = document.getElementById("sheetEndpoint").value.trim();
  state.settings.businessName = document.getElementById("businessName").value.trim();
  state.settings.abn = document.getElementById("businessAbn").value.trim();
  state.settings.email = document.getElementById("businessEmail").value.trim();
  state.settings.phone = document.getElementById("businessPhone").value.trim();
  state.settings.address = document.getElementById("businessAddress").value.trim();
  state.settings.paymentTermsDays = Number(document.getElementById("paymentTermsDays").value || 7);
  state.settings.bankName = document.getElementById("bankName").value.trim();
  state.settings.bsb = document.getElementById("bankBsb").value.trim();
  state.settings.accountNumber = document.getElementById("bankAccount").value.trim();
  state.settings.gstRegistered = document.getElementById("gstRegistered").value;
  persist();
  hydrateSettings();
  toast("Connection saved.");
}

function hydrateSettings() {
  document.getElementById("sheetEndpoint").value = state.settings.endpoint || "";
  document.getElementById("businessName").value = state.settings.businessName || "";
  document.getElementById("businessAbn").value = state.settings.abn || "";
  document.getElementById("businessEmail").value = state.settings.email || "";
  document.getElementById("businessPhone").value = state.settings.phone || "";
  document.getElementById("businessAddress").value = state.settings.address || "";
  document.getElementById("paymentTermsDays").value = state.settings.paymentTermsDays || 7;
  document.getElementById("bankName").value = state.settings.bankName || "";
  document.getElementById("bankBsb").value = state.settings.bsb || "";
  document.getElementById("bankAccount").value = state.settings.accountNumber || "";
  document.getElementById("gstRegistered").value = state.settings.gstRegistered || "No";
  document.getElementById("syncState").textContent = state.settings.endpoint ? "Sheet endpoint saved" : "Local mode";
}

async function syncSheet() {
  if (!state.settings.endpoint) {
    toast("Add a Google Apps Script Web App URL in Settings first.");
    showView("settings");
    return;
  }
  try {
    const response = await fetch(state.settings.endpoint, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ action: "saveAll", payload: state })
    });
    if (!response.ok) throw new Error("Sync failed");
    toast("Google Sheet sync complete.");
  } catch {
    toast("Sync could not connect. Check the Web App URL and deployment access.");
  }
}

function exportJson() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "invoice-system-backup.json";
  link.click();
  URL.revokeObjectURL(url);
}

function resetDemo() {
  state = cloneData(demoData);
  currentInvoice = createDraftInvoice();
  persist();
  hydrateSettings();
  renderAll();
  toast("Sample data reloaded.");
}

function loadHeaderImage(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    document.getElementById("invoiceHeaderImage").src = reader.result;
    document.getElementById("invoiceHeader").classList.add("has-image");
  };
  reader.readAsDataURL(file);
}

function fillScriptSnippet() {
  document.getElementById("scriptSnippet").textContent = `Use the included google-apps-script.gs file in this folder.

It now writes workbook-style sheets for:
Settings, Users, Providers, Staff, Shifts, Expenses, Payments, and Invoices.

Paste that file into Extensions > Apps Script, deploy as a Web App, then paste the Web App URL here.`;
}

function findProvider(id) {
  return state.providers.find((provider) => provider.id === id);
}

function providerName(id) {
  return findProvider(id)?.name || "Unknown provider";
}

function staffName(id) {
  return state.staff.find((person) => person.id === id)?.name || "Unknown staff";
}

function shiftLabel(value) {
  return Object.fromEntries(shiftTypeOptions())[value] || value;
}

function normalizeShiftType(value) {
  return {
    weekdayMorning: "day",
    weekdayEvening: "evening",
    activeNight: "activeNight",
    saturday: "day",
    sunday: "day",
    publicHoliday: "day"
  }[value] || value || "day";
}

function dayTypeLabel(value) {
  return {
    weekday: "Weekday",
    saturday: "Saturday",
    sunday: "Sunday",
    publicHoliday: "Public holiday"
  }[value] || value;
}

function paidForInvoice(invoiceNumber) {
  return state.payments
    .filter((payment) => payment.invoiceNumber === invoiceNumber)
    .reduce((sum, payment) => sum + Number(payment.amount || 0), 0);
}

function invoiceStatus(invoice) {
  const totals = totalForInvoice(invoice);
  if (totals.unpaid <= 0 && totals.grand > 0) return "Paid";
  if (totals.paid > 0) return "Part Paid";
  return invoice.status === "Paid" ? "Paid" : invoice.status === "Part Paid" ? "Part Paid" : "Unpaid";
}

function claimRows() {
  return state.invoices.flatMap((invoice) => {
    return invoice.lineIds.map((id) => {
      const shift = state.shifts.find((item) => item.id === id);
      if (!shift) return null;
      const amount = lineAmount(shift);
      return {
        invoiceNumber: invoice.invoiceNumber,
        provider: providerName(shift.providerId),
        participant: shift.participant || "",
        ndisNumber: shift.ndisNumber || "",
        date: shift.date,
        serviceType: shiftLabel(shift.shiftType),
        dayType: dayTypeLabel(shift.dayType),
        hours: Number(shift.hours || 0),
        rate: amount.hourlyRate,
        transport: amount.transport,
        expenses: amount.shiftExpense,
        lineTotal: amount.total
      };
    }).filter(Boolean);
  });
}

async function copyClaimRows() {
  const headers = ["Invoice No", "Provider", "Participant", "NDIS No", "Date", "Service Type", "Day Type", "Hours", "Rate", "Transport", "Expenses", "Line Total"];
  const rows = claimRows().map((row) => [row.invoiceNumber, row.provider, row.participant, row.ndisNumber, row.date, row.serviceType, row.dayType, row.hours, row.rate, row.transport, row.expenses, row.lineTotal]);
  const text = [headers, ...rows].map((row) => row.join("\t")).join("\n");
  try {
    await navigator.clipboard.writeText(text);
    toast("Claim export rows copied.");
  } catch {
    toast("Copy was blocked by the browser. Select the table rows manually.");
  }
}

function addDays(dateValue, days) {
  const date = new Date(`${dateValue || new Date().toISOString().slice(0, 10)}T00:00:00`);
  date.setDate(date.getDate() + Number(days || 0));
  return date.toISOString().slice(0, 10);
}

function formatDate(value) {
  if (!value) return "";
  return shortDate.format(new Date(`${value}T00:00:00`));
}

function uid(prefix) {
  return `${prefix}_${Math.random().toString(36).slice(2, 9)}`;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (match) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[match]));
}

function toast(message) {
  const element = document.getElementById("toast");
  element.textContent = message;
  element.hidden = false;
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => {
    element.hidden = true;
  }, 3200);
}

function showStartupError(error) {
  const message = "The app had trouble loading saved browser data. I reloaded the sample data; please try signing in again.";
  console.error(error);
  localStorage.removeItem(STORAGE_KEY);
  state = normalizeState(cloneData(demoData));
  currentInvoice = createDraftInvoice();
  const loginError = document.getElementById("loginError");
  if (loginError) {
    loginError.textContent = message;
    loginError.hidden = false;
  }
}
