// Checkbox-Status in localStorage speichern
document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll("input[type=checkbox]");
  
  checkboxes.forEach(cb => {
    const id = cb.getAttribute("data-id");
    if (localStorage.getItem(id) === "true") {
      cb.checked = true;
    }
    
    cb.addEventListener("change", () => {
      localStorage.setItem(id, cb.checked);
    });
  });
});


