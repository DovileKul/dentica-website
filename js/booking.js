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