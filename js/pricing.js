document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".pricing-buttons .btn");
    const items = document.querySelectorAll(".pricing-item");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-category");

            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            items.forEach(item => {
                if (category === "all" || item.getAttribute("data-category") === category) {
                    item.style.display = "flex"; 
                } else {
                    item.style.display = "none"; 
                }
            });
        });
    });
});
