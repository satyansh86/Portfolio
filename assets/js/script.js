document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your user ID
    emailjs.init('oIe0t-e86WvuofuPv'); 

    // Add event listener to the contact form for form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const formData = new FormData(contactForm);
        const formObject = {};
        formData.forEach((value, key) => formObject[key] = value);

        // Send email using EmailJS
        emailjs.send('service_9q3h52g', 'template_9r5h0us', formObject)
            .then(response => {
                alert('Message sent successfully!');
                contactForm.reset(); // Reset the form after successful submission
            })
            .catch(error => {
                alert('Failed to send message. Please try again later.');
                console.error('EmailJS Error:', error);
            });
    });

    // Existing functionality for menu icon and scrolling
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });
    };

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
});
