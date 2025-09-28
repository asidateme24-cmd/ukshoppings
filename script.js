// Form submission handlers
document.getElementById('lead-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if(name && email) {
        alert(`Thank you, ${name}! Check your email at ${email} for confirmation and your first exclusive offer.`);
        document.getElementById('lead-form').reset();
        
        // In a real implementation, you would send this data to your email service
        console.log('Lead captured:', { name, email });
    } else {
        alert('Please fill in all fields to get started.');
    }
});

document.getElementById('final-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your early access has been confirmed. Check your email for next steps.');
    this.reset();
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});