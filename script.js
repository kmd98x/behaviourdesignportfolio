// Navigation functionality
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

// Toggle menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = link.getAttribute('data-page');
        
        // Update active nav link
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Show target page
        showPage(targetPage);
        
        // Close menu
        navMenu.classList.remove('active');
    });
});

// Show specific page
function showPage(pageId) {
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Timeline point clicks (for Inhoudsopgave)
const timelinePoints = document.querySelectorAll('.timeline-point');
timelinePoints.forEach(point => {
    point.addEventListener('click', () => {
        const pointNumber = point.getAttribute('data-point');
        let targetPage = '';
        
        switch(pointNumber) {
            case '01':
                targetPage = 'over-mij';
                break;
            case '02':
                targetPage = 'meting';
                break;
            case '03':
                targetPage = 'ontwikkelplan';
                break;
            case '04':
                targetPage = 'carddeck';
                break;
            case '05':
                targetPage = 'bootcamp';
                break;
        }
        
        if (targetPage) {
            // Update nav
            navLinks.forEach(l => {
                l.classList.remove('active');
                if (l.getAttribute('data-page') === targetPage) {
                    l.classList.add('active');
                }
            });
            
            showPage(targetPage);
        }
    });
});

// Handle browser back/forward
window.addEventListener('popstate', (e) => {
    const page = window.location.hash.replace('#', '') || 'home';
    showPage(page);
});

// Initialize - show home page
showPage('home');

