/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
const sections = document.getElementsByTagName('section');
// build the nav
const navbar = document.getElementById('navbar__list');

for (let i = 0; i < sections.length; i++) {
    let item = document.createElement('li');
    let itemClass = item.classList.add('menu__link');
    let itemId = item.setAttribute('id', `section-link${i + 1}`);

    item.innerHTML = `Section ${i + 1}`;
    navbar.appendChild(item);
    item.addEventListener('click', function (e) {
        let links = document.getElementsByClassName('menu__link')
        for (i = 0; i < links.length; i++) {
            document.getElementById(`section-link${i + 1}`).classList.remove('active');
        }

        e.target.classList.add('active');
        let sectionId = e.target.innerText.replace(' ', '').toLowerCase();
        document.getElementById(sectionId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        // .scrollIntoView();
    });
}
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


