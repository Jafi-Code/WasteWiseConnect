// Mobile Navigation Toggle
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileToggle.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Form submission handler
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.email || !data.engagement) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // In a real implementation, you would send this data to a server
    // For now, we'll just show a success message
    alert(`Thank you ${data.name}! Your interest has been submitted. We'll contact you at ${data.email} about ${data.engagement} opportunities.`);
    
    // Reset form
    contactForm.reset();
    
    // Keep newsletter checked by default
    document.getElementById('newsletter').checked = true;
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements with fade-in class
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Add fade-in class to elements that should animate on scroll
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.problem-card, .step, .form-container');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Simple console welcome message
console.log('🚀 WasteWise Connect - Transforming Township Waste Management');
console.log('📧 Contact: contact@wastewiseconnect.co.za');
console.log('🏆 Entry for the 2026 EDHE & Mr Price Foundation Waste Innovation Challenge');