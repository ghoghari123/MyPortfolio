/* =====================================================
   PORTFOLIO WEBSITE JAVASCRIPT
   Features: Navbar, Smooth Scroll, Form, localStorage
   ===================================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    /* ==================== NAVBAR TOGGLE ==================== */
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const navbar = document.getElementById('navbar');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
    
    /* ==================== NAVBAR SCROLL EFFECT ==================== */
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    /* ==================== SMOOTH SCROLLING ==================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    /* ==================== PORTFOLIO FILTER ==================== */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    
    if (filterButtons.length > 0 && portfolioCards.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                portfolioCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    
                    if (filter === 'all' || (category && category.includes(filter))) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    /* ==================== CONTACT FORM HANDLING ==================== */
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value.trim();
            
            // Reset errors
            clearErrors();
            
            // Validate
            let isValid = true;
            
            if (!name) {
                showError('name', 'nameError');
                isValid = false;
            }
            
            if (!email || !isValidEmail(email)) {
                showError('email', 'emailError');
                isValid = false;
            }
            
            if (!message) {
                showError('message', 'messageError');
                isValid = false;
            }
            
            if (isValid) {
                // Create form data object
                const formData = {
                    id: Date.now(),
                    name: name,
                    email: email,
                    phone: phone,
                    service: service,
                    message: message,
                    date: new Date().toISOString(),
                    status: 'new'
                };
                
                // Save to localStorage
                saveToLocalStorage(formData);
                
                // Show success message
                if (successMessage) {
                    successMessage.classList.add('show');
                }
                
                // Reset form
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    if (successMessage) {
                        successMessage.classList.remove('show');
                    }
                }, 5000);
            }
        });
    }
    
    /* ==================== FORM VALIDATION FUNCTIONS ==================== */
    function showError(inputId, errorId) {
        const input = document.getElementById(inputId);
        const formGroup = input.closest('.form-group');
        formGroup.classList.add('error');
    }
    
    function clearErrors() {
        const formGroups = document.querySelectorAll('.form-group');
        formGroups.forEach(group => {
            group.classList.remove('error');
        });
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    /* ==================== LOCAL STORAGE FUNCTIONS ==================== */
    function saveToLocalStorage(formData) {
        // Get existing data
        let submissions = JSON.parse(localStorage.getItem('portfolioSubmissions')) || [];
        
        // Add new submission
        submissions.push(formData);
        
        // Save back to localStorage
        localStorage.setItem('portfolioSubmissions', JSON.stringify(submissions));
        
        // Log for debugging
        console.log('Form submission saved:', formData);
        console.log('Total submissions:', submissions.length);
    }
    
    /* ==================== ANIMATION ON SCROLL ==================== */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements with data-aos attribute
    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
    
    /* ==================== SCROLL TO TOP BUTTON ==================== */
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.id = 'scrollTopBtn';
    document.body.appendChild(scrollTopBtn);
    
    // Add styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .scroll-top-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, var(--beige) 0%, #c4b398 100%);
            border: none;
            border-radius: 50%;
            color: var(--primary-bg);
            font-size: 20px;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 9999;
            box-shadow: 0 10px 20px rgba(212, 196, 168, 0.3);
        }
        
        .scroll-top-btn.show {
            opacity: 1;
            visibility: visible;
        }
        
        .scroll-top-btn:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(212, 196, 168, 0.4);
        }
    `;
    document.head.appendChild(style);
    
    // Scroll event for button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    // Click event
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    /* ==================== PRELOADER (Optional) ==================== */
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    /* ==================== DATE UPDATE ==================== */
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });
    
    /* ==================== MOUSE PARALLAX EFFECT (Hero) ==================== */
    const heroSection = document.querySelector('.hero');
    const floatingCards = document.querySelectorAll('.floating-card');
    
    if (heroSection && floatingCards.length > 0) {
        heroSection.addEventListener('mousemove', function(e) {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            
            floatingCards.forEach((card, index) => {
                const speed = (index + 1) * 5;
                card.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
        });
    }
    
    console.log('Portfolio website initialized successfully!');
});

/* =====================================================
   Additional Utility Functions
   ===================================================== */

// Get submissions from localStorage
function getSubmissions() {
    return JSON.parse(localStorage.getItem('portfolioSubmissions')) || [];
}

// Clear all submissions (for testing)
function clearSubmissions() {
    localStorage.removeItem('portfolioSubmissions');
    console.log('All submissions cleared');
}

// Export for debugging (optional)
window.portfolioUtils = {
    getSubmissions: getSubmissions,
    clearSubmissions: clearSubmissions
};