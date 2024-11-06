// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Search functionality
const searchButton = document.querySelector('.search-bar button');
const searchInput = document.querySelector('.search-bar input');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        // Add your search logic here
        console.log('Searching for:', searchTerm);
    }
});

// Get in touch button animation
const getInTouchBtn = document.querySelector('.get-in-touch');

getInTouchBtn.addEventListener('mouseover', () => {
    getInTouchBtn.style.transform = 'scale(1.05)';
    getInTouchBtn.style.transition = 'transform 0.3s ease';
});

getInTouchBtn.addEventListener('mouseout', () => {
    getInTouchBtn.style.transform = 'scale(1)';
});

// Service cards hover effect
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Secondary buttons hover effect
document.querySelectorAll('.secondary-btn').forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.style.transition = 'all 0.3s ease';
    });
});

// FAQ items interaction
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all items
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle active class on clicked item
        item.classList.toggle('active');
    });
});

// Contact buttons hover effect
document.querySelectorAll('.contact-btn').forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.style.transform = 'translateY(-2px)';
    });

    btn.addEventListener('mouseout', () => {
        btn.style.transform = 'translateY(0)';
    });
});

// Footer navigation hover effect
document.querySelectorAll('.footer-nav a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = getComputedStyle(document.documentElement)
            .getPropertyValue('--accent-color');
    });

    link.addEventListener('mouseout', () => {
        link.style.color = getComputedStyle(document.documentElement)
            .getPropertyValue('--secondary-color');
    });
});

// Footer links hover effect with smooth transition
document.querySelectorAll('.footer-column ul li a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transition = 'color 0.3s ease';
        link.style.color = '#00ffff';
    });

    link.addEventListener('mouseout', () => {
        link.style.transition = 'color 0.3s ease';
        link.style.color = getComputedStyle(document.documentElement)
            .getPropertyValue('--secondary-color');
    });
});
