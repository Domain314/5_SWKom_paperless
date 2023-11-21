export const toggleScrolling = (disable) => {
    if (disable) {
        // Disable scrolling
        document.body.style.overflow = "hidden";
        document.addEventListener("touchmove", preventDefault, { passive: false });
    } else {
        // Enable scrolling
        document.body.style.overflow = "";
        document.removeEventListener("touchmove", preventDefault, { passive: false });
    }
};

// Prevent default touch behavior
function preventDefault(e) {
    e.preventDefault();
}