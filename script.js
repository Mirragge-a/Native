document.querySelectorAll("details").forEach((detail) => {
    detail.addEventListener("click", function () {
        document.querySelectorAll("details").forEach((otherDetail) => {
            if (otherDetail !== detail) {
                otherDetail.removeAttribute("open");
            }
        });
    });
});
// Close other close question
document.querySelectorAll("summary").forEach((summary) => {
    summary.addEventListener("mousedown", (event) => {
        event.preventDefault();
    });
});