document.addEventListener('DOMContentLoaded', function() {
    console.log("Gloria AI Landing Page Loaded!");

    // Contoh fungsionalitas untuk tombol "Request Early Access"
    const earlyAccessButton = document.querySelector('a[href="#early-access"]');
    if (earlyAccessButton) {
        earlyAccessButton.addEventListener('click', (e) => {
            e.preventDefault(); // Mencegah link berpindah
            alert('Thank you for your interest! We will notify you soon.');
            console.log('Early Access button clicked.');
        });
    }

    // Contoh fungsionalitas untuk tombol subscribe di footer
    const subscribeButton = document.querySelector('footer button');
    const emailInput = document.querySelector('footer input[type="email"]');

    if (subscribeButton && emailInput) {
        subscribeButton.addEventListener('click', () => {
            const email = emailInput.value;
            if (email) {
                alert(`Subscribed with ${email}!`);
                console.log(`User subscribed with email: ${email}`);
                emailInput.value = ''; // Kosongkan input setelah subscribe
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
});