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

/* Filtering services */

document.addEventListener('DOMContentLoaded', function () {
    const doctorSelect = document.getElementById('doctor');
    const serviceSelect = document.getElementById('service');

    const servicesByDoctor = {
        'dr-smith': ['cleaning', 'whitening', 'implants'],
        'dr-carter': ['braces'],
        'dr-brown': ['root-canal'],
        'dr-johnson': ['pediatric'],
        'dr-lee': ['wisdom-tooth'],
        'dr-martin': ['crowns'],
        'dr-harris': ['gum-treatment'],
        'dr-white': ['whitening'],
        'dr-anderson': ['implants']
    };

    const allServices = Array.from(serviceSelect.options);

    doctorSelect.addEventListener('change', function () {
        const selectedDoctor = doctorSelect.value;

        serviceSelect.innerHTML = '';
        serviceSelect.appendChild(new Option('Select a Service', ''));
        serviceSelect.appendChild(new Option("I'm not sure", 'not-sure'));

        if (!selectedDoctor || selectedDoctor === 'not-sure') {
            allServices.forEach(option => {
                if (option.value) serviceSelect.appendChild(option.cloneNode(true));
            });
        } else {
            (servicesByDoctor[selectedDoctor] || []).forEach(service => {
                const option = allServices.find(opt => opt.value === service);
                if (option) serviceSelect.appendChild(option.cloneNode(true));
            });
        }
    });
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

