document.querySelectorAll("details").forEach((detail) => {
    detail.addEventListener("click", function () {
        // Закриваємо інші відкриті питання
        document.querySelectorAll("details").forEach((otherDetail) => {
            if (otherDetail !== detail) {
                otherDetail.removeAttribute("open");
            }
        });
    });
});

document.querySelectorAll("summary").forEach((summary) => {
    summary.addEventListener("mousedown", (event) => {
        event.preventDefault(); // Запобігає виділенню тексту
    });
});