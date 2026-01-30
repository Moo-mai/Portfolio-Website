// ========================================
// Certificate Modal Functions
// ========================================
let currentCertificate = 0;
const certificates = [
    {
        image: 'images/certificate1.jpg',
        title: 'Gemini Certified Educator',
        issuer: 'Google for Education',
        date: '16/09/2025 - 15/09/2028'
    },
    {
        image: 'images/certificate2.jpg',
        title: 'Frontend Development Bootcamp',
        issuer: 'Thai MOOC',
        date: '2024'
    },
    {
        image: 'images/certificate3.jpg',
        title: 'JavaScript Advanced Course',
        issuer: 'Coding Institute',
        date: '2023'
    },
    {
        image: 'images/certificate4.jpg',
        title: 'UI/UX Design Fundamentals',
        issuer: 'Design School',
        date: '2023'
    }
];

function openCertificate(index) {
    currentCertificate = index;
    const modal = document.getElementById('certificateModal');
    const modalImg = document.getElementById('modalImage');
    const caption = document.getElementById('caption');
    
    modal.style.display = 'block';
    modalImg.src = certificates[index].image;
    caption.innerHTML = `
        <strong>${certificates[index].title}</strong><br>
        ${certificates[index].issuer} | ${certificates[index].date}
    `;
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('certificateModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function nextCertificate() {
    currentCertificate = (currentCertificate + 1) % certificates.length;
    openCertificate(currentCertificate);
}

function prevCertificate() {
    currentCertificate = (currentCertificate - 1 + certificates.length) % certificates.length;
    openCertificate(currentCertificate);
}

// Keyboard navigation for modal
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('certificateModal');
    if (modal.style.display === 'block') {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') nextCertificate();
        if (e.key === 'ArrowLeft') prevCertificate();
    }
});
// ========================================
// Smooth Scroll Function
// ========================================
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
}

// ========================================
// Form Submission Handler
// ========================================
function handleSubmit(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Show success message
    alert(`ขอบคุณสำหรับข้อความครับ!\n\nชื่อ: ${name}\nอีเมล: ${email}\nข้อความ: ${message}\n\nเราจะติดต่อกลับโดยเร็วที่สุด`);
    
    // Reset form
    event.target.reset();
    
    // In production, you would send this data to a server using:
    // fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ name, email, message })
    // });
}

// ========================================
// Navigation Active State
// ========================================
function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', updateActiveNav);

// ========================================
// Scroll Animation for Elements
// ========================================
function revealOnScroll() {
    const elements = document.querySelectorAll('.service-card, .project-card, .certificate-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize elements for animation
function initScrollAnimations() {
    const elements = document.querySelectorAll('.service-card, .project-card, .certificate-card');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
}

// Run on page load
window.addEventListener('load', () => {
    initScrollAnimations();
    revealOnScroll();
});

// Run on scroll
window.addEventListener('scroll', revealOnScroll);

// ========================================
// Skill Tags Animation
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach((tag, index) => {
        tag.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s`;
        tag.style.animationFillMode = 'backwards';
    });
});

// ========================================
// Mobile Menu Toggle (Optional)
// ========================================
function createMobileMenu() {
    const nav = document.querySelector('nav');
    const ul = nav.querySelector('ul');
    
    // Create hamburger menu button
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-btn';
    menuButton.innerHTML = '☰';
    menuButton.style.display = 'none';
    menuButton.style.background = 'none';
    menuButton.style.border = 'none';
    menuButton.style.color = '#fff';
    menuButton.style.fontSize = '1.5rem';
    menuButton.style.cursor = 'pointer';
    
    // Toggle menu on click
    menuButton.addEventListener('click', () => {
        ul.style.display = ul.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Insert button before ul
    nav.insertBefore(menuButton, ul);
    
    // Show/hide menu button based on screen size
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            menuButton.style.display = 'block';
            ul.style.display = 'none';
            ul.style.flexDirection = 'column';
            ul.style.position = 'absolute';
            ul.style.top = '60px';
            ul.style.right = '2rem';
            ul.style.background = 'rgba(0, 0, 0, 0.9)';
            ul.style.padding = '1rem';
            ul.style.borderRadius = '10px';
        } else {
            menuButton.style.display = 'none';
            ul.style.display = 'flex';
            ul.style.flexDirection = 'row';
            ul.style.position = 'static';
            ul.style.background = 'none';
            ul.style.padding = '0';
        }
    }
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
}

// Initialize mobile menu
createMobileMenu();

// ========================================
// Add Loading Animation
// ========================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ========================================
// Console Message for Developers
// ========================================
console.log('%c👋 Hello Developer!', 'color: #f093fb; font-size: 20px; font-weight: bold;');
console.log('%cWelcome to my portfolio! Feel free to explore the code.', 'color: #764ba2; font-size: 14px;');
console.log('%c💻 Made with ❤️ by Weeraphat Sripromma', 'color: #667eea; font-size: 12px;');