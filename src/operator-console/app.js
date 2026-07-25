const filterButtons = document.querySelectorAll("[data-filter]");
const alertRows = document.querySelectorAll("tbody tr[data-priority]");
const emptyState = document.querySelector("#empty-state");
const refreshButton = document.querySelector("#refresh-button");
const lastUpdated = document.querySelector("#last-updated");

function applyFilter(filter) {
  let visibleRows = 0;
  alertRows.forEach((row) => {
    const visible = filter === "all" || row.dataset.priority === filter;
    row.hidden = !visible;
    if (visible) visibleRows += 1;
  });
  emptyState.hidden = visibleRows !== 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    applyFilter(button.dataset.filter);
  });
});

refreshButton.addEventListener("click", () => {
  const now = new Date();
  lastUpdated.dateTime = now.toISOString();
  lastUpdated.textContent = now.toLocaleString("fr-FR", { dateStyle: "short", timeStyle: "medium" });
  refreshButton.textContent = "✓ Actualisé";
  window.setTimeout(() => { refreshButton.textContent = "↻ Actualiser"; }, 1600);
});
