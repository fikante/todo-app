const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");
const filters = document.getElementById("filters");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = input.value.trim();
  if (!title) {
    alert("Task title cannot be empty");
    return;
  }

  const li = document.createElement("li");
  const textSpan = document.createElement("span");
  textSpan.textContent = title;
  textSpan.classList.add("task-title");

  const toggleBtn = document.createElement("button");
  toggleBtn.innerHTML = "✅";
  toggleBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "🗑️";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  const editBtn = document.createElement("button");
  editBtn.innerHTML = "✏️";
  editBtn.addEventListener("click", () => {
    const newTitle = prompt("Edit task title:", textSpan.textContent);
    if (newTitle && newTitle.trim()) {
      textSpan.textContent = newTitle.trim();
    }
  });

  li.classList.add("task");
  li.append(textSpan, toggleBtn, deleteBtn, editBtn);
  list.appendChild(li);
  input.value = "";
});

filters.addEventListener("click", function (e) {
  if (e.target.tagName !== "BUTTON") return;
  const filter = e.target.dataset.filter;
  document.querySelectorAll(".task").forEach((li) => {
    switch (filter) {
      case "all":
        li.style.display = "";
        break;
      case "completed":
        li.style.display = li.classList.contains("completed") ? "" : "none";
        break;
      case "pending":
        li.style.display = !li.classList.contains("completed") ? "" : "none";
        break;
    }
  });
});
