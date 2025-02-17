/* Form redirect to booking.html */

const appointmentForm = document.getElementById('appointment-form');
appointmentForm.addEventListener('submit', function (e) {
e.preventDefault();
const doctor = document.getElementById('doctor').value;
const service = document.getElementById('service').value;
if (!doctor || !service) {
    alert('Please select both a doctor and a service!');
    return;
}
const url = `booking.html?doctor=${encodeURIComponent(doctor)}
&service=${encodeURIComponent(service)}`;
window.location.href = url;
});

/* Animation for doctors and reviews sections */

function startHoverCarousel(selector, dotSelector) {
    const container = document.querySelector(selector);
    const dots = document.querySelectorAll(dotSelector);
    let interval;

    function startScrolling() {
        let scrollAmount = 0;
        const scrollStep = 2;
        interval = setInterval(() => {
            scrollAmount += scrollStep;
            container.scrollLeft = scrollAmount;
            if (scrollAmount >= container.scrollWidth - container.clientWidth) {
                scrollAmount = 0;
            }
            updateDots(container, dots);
        }, 50);
    }

    function stopScrolling() {
        clearInterval(interval);
    }

    container.addEventListener('mouseenter', startScrolling);
    container.addEventListener('mouseleave', stopScrolling);
}

function updateDots(container, dots) {
    const currentIndex = Math.floor(container.scrollLeft / container.clientWidth);
    dots.forEach((dot, index) => {
        dot.style.backgroundColor = index === currentIndex ? '#4CAF50' : '#ccc';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    startHoverCarousel('.doctor-list', '.doctor-dot');
    startHoverCarousel('.reviews-list', '.review-dot');
});
