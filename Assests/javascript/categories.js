const filterButtons = document.querySelectorAll(".filter-btn");
const designItems = document.querySelectorAll(".design-item");

filterButtons.forEach((button) => {
    
    button.addEventListener("click", () => {

        // Remove active class
        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        // Add active class
        button.classList.add("active");

        const filterValue = button.getAttribute("data-filter");

        designItems.forEach((item) => {

            if (
                filterValue === "all" ||
                item.classList.contains(filterValue)
            ) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });

});
