// Subject information and real links can be added here as they become available.
const subjects = [
  { code: "IS1101", name: "Fundamentals of Information Systems", icon: "▤", notes: [], slides: [], videos: [], papers: [] },
  { code: "IS1102", name: "Structured Programming Techniques", icon: "⌘", notes: [], slides: [], videos: [], papers: [] },
  { code: "IS1103", name: "Structured Programming Practicum", icon: "⌨", notes: [], slides: [], videos: [], papers: [] },
  { code: "IS1104", name: "Theories of Information Systems", icon: "◉", notes: [], slides: [], videos: [], papers: [] },
  { code: "IS1105", name: "Computer System Organization", icon: "▦", notes: [], slides: [], videos: [], papers: [] },
  { code: "IS1106", name: "Foundations of Web Technologies", icon: "〈〉", notes: [], slides: [], videos: [], papers: [] },
  { code: "IS1107", name: "Personal Productivity with Information Technology", icon: "✦", notes: [], slides: [], videos: [], papers: [] },
  { code: "IS1108", name: "Fundamentals of Mathematics", icon: "∑", notes: [], slides: [], videos: [], papers: [] },
  { code: "IS1109", name: "Statistics & Probability Theory", icon: "▥", notes: [], slides: [], videos: [], papers: [] },
  { code: "IS1110", name: "Communication Skills I", icon: "✉", notes: [], slides: [], videos: [], papers: [] },
  { code: "IS1111", name: "Academic Integrity & Skillery", icon: "✓", notes: [], slides: [], videos: [], papers: [] },
  { code: "IS-EGP-1101", name: "General English I", icon: "A", notes: [], slides: [], videos: [], papers: [] }
];

const homeView = document.getElementById("homeView");
const detailView = document.getElementById("detailView");
const subjectGrid = document.getElementById("subjectGrid");
const searchInput = document.getElementById("subjectSearch");
const subjectCount = document.getElementById("subjectCount");
const emptyState = document.getElementById("emptyState");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

// Draw each subject as a keyboard-accessible card.
function showSubjects(list) {
  subjectGrid.innerHTML = list.map((subject) => `
    <article class="subject-card" tabindex="0" role="button" data-code="${subject.code}" aria-label="Open ${subject.code}: ${subject.name}">
      <span class="subject-icon" aria-hidden="true">${subject.icon}</span>
      <div class="subject-code">${subject.code}</div>
      <h3>${subject.name}</h3>
      <span class="card-arrow" aria-hidden="true">→</span>
    </article>
  `).join("");
  subjectCount.textContent = list.length;
  emptyState.hidden = list.length !== 0;
}

// Show a list of resource links, or a clear message while none are available.
function resourceList(items, kind) {
  if (!items || items.length === 0) {
    return `<p class="resource-empty">${kind} will appear here when they are provided.</p>`;
  }
  return items.map((item) => `
    <div class="resource-item">
      <span aria-hidden="true">${kind === "YouTube tutorials" ? "▷" : "▤"}</span>
      <div><strong>${item.title}</strong><small>${item.description || "Learning resource"}</small></div>
      ${item.url ? `<a class="resource-action" href="${item.url}" target="_blank" rel="noopener noreferrer">${kind === "YouTube tutorials" ? "Watch ↗" : "View ↗"}</a>` : `<span class="resource-action disabled">Link unavailable</span>`}
    </div>
  `).join("");
}

function openSubject(code) {
  const subject = subjects.find((item) => item.code === code);
  if (!subject) return;
  homeView.hidden = true;
  detailView.hidden = false;
  detailView.innerHTML = `
    <button class="back-button" id="backToSubjects">← &nbsp; Back to Subjects</button>
    <header class="detail-heading"><div class="subject-code">${subject.code}</div><h1>${subject.name}</h1><p>Learning resources for your first semester</p></header>
    <div class="resource-grid">
      <section class="resource-card"><h2>Lecture Notes</h2>${resourceList(subject.notes, "Lecture notes")}</section>
      <section class="resource-card"><h2>Lecture Slides</h2>${resourceList(subject.slides, "Lecture slides")}</section>
      <section class="resource-card"><h2>YouTube Tutorials</h2>${resourceList(subject.videos, "YouTube tutorials")}</section>
      <section class="resource-card"><h2>Past Papers</h2>${resourceList(subject.papers, "Past papers")}</section>
    </div>
    <p class="detail-note">Resource links will be added when verified materials are available.</p>
  `;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goHome(target) {
  detailView.hidden = true;
  homeView.hidden = false;
  if (target) document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  else window.scrollTo({ top: 0, behavior: "smooth" });
}

showSubjects(subjects);
document.getElementById("year").textContent = new Date().getFullYear();

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  const matches = subjects.filter((subject) => `${subject.code} ${subject.name}`.toLowerCase().includes(query));
  showSubjects(matches);
});

subjectGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".subject-card");
  if (card) openSubject(card.dataset.code);
});
subjectGrid.addEventListener("keydown", (event) => {
  const card = event.target.closest(".subject-card");
  if (card && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openSubject(card.dataset.code);
  }
});

document.addEventListener("click", (event) => {
  const scrollButton = event.target.closest("[data-scroll]");
  if (scrollButton) {
    event.preventDefault();
    goHome(scrollButton.dataset.scroll);
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
  if (event.target.closest("[data-home-link]")) {
    event.preventDefault();
    goHome();
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
  if (event.target.closest("#backToSubjects")) goHome("subjects");
});

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

// The keyboard shortcut helps users jump straight to subject search.
document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    goHome("subjects");
    searchInput.focus();
  }
});
