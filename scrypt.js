document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent default form submission

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill all fields.");
            return;
        }

        // Encode special characters so mailto link works properly
        const subject = encodeURIComponent(`Portfolio Message from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

        const mailLink = `mailto:karthikgoud3737@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailLink;
    });
});