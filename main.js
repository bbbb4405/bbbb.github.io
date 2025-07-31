// ---------------------------
// Sidebar toggle
// ---------------------------
const sidebarToggles = document.querySelectorAll(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");

sidebarToggles.forEach((btn) => {
  btn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
  });
});

// ---------------------------
// Load page inside iframe + menu highlight
// ---------------------------
function loadPage(page) {
  document.getElementById("contentFrame").src = page;

  // Remove active from all menu items
  document.querySelectorAll(".menu-item").forEach((item) =>
    item.classList.remove("active")
  );

  // Add active to clicked item
  const link = [...document.querySelectorAll(".menu-link")].find((l) =>
    l.getAttribute("onclick")?.includes(page)
  );
  if (link) link.parentElement.classList.add("active");
}

// ---------------------------
// Theme toggle (Dark mode)
// ---------------------------
document.querySelector(".theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

// ---------------------------
// Navbar highlight (if used)
// ---------------------------
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});
