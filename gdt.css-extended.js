// ================ TOAST ================
function showToast() {
    let toast = document.getElementById("gdt-toast");
    toast.classList.add("show");

    setTimeout(() => toast.classList.remove("show"), 2000);
}

// ================ CONTEXT MENU ================
const ctxArea = document.getElementById("ctxArea");
const ctxMenu = document.getElementById("ctxMenu");

window.addEventListener("contextmenu", (e) => {
    if (e.target === ctxArea) {
        e.preventDefault();
        ctxMenu.style.left = e.pageX + "px";
        ctxMenu.style.top = e.pageY + "px";
        ctxMenu.classList.add("show");
    } else {
        ctxMenu.classList.remove("show");
    }
});

window.addEventListener("click", () => {
    ctxMenu.classList.remove("show");
});