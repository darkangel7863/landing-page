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
// Build menu 
for (let i = 0; i < sections.length; i++) {

// setting list items variables
	let item = document.createElement('li');
    let itemClass = item.classList.add('menu__link');
    let itemId = item.setAttribute('id', `section-link${i + 1}`);
    item.innerHTML = `Section ${i + 1}`;

// adding the list items to the menu	
    navbar.appendChild(item);

// Scroll to section on link click and adding .active to link clicked
    item.addEventListener('click', function (e) {
        let links = document.getElementsByClassName('menu__link')
        for (let i = 0; i < links.length; i++) {
            document.getElementById(`section-link${i + 1}`).classList.remove('active');
        }
        e.target.classList.add('active');
		
// Scroll to anchor ID using scrollTO event        
		
        let sectionId = e.target.innerText.replace(' ', '').toLowerCase();
        document.getElementById(sectionId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
		
// Set section as active
		for (let j = 0; j < sections.length; j++) {
            document.getElementById(`section${j+1}`).classList.remove('your-active-class');
        }
		document.getElementById(sectionId).classList.add('your-active-class');

    });
}
// Add class 'active' to section when near top of viewport
window.addEventListener('scroll',checkIfInView);

function checkIfInView(){
	
	for (i = 1; i < sections.length +1 ;i++){
		let sctn = document.querySelectorAll(`#section${i}`);
		for (let m = 0; m< sctn.length;m++){
			let secId = sctn[m].id;
			let secLoc = sctn[m].getBoundingClientRect();
			if(secLoc.top >= 0 &&
			secLoc.left>= 0 &&
			secLoc.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			secLoc.right <= (window.innerWidth || document.documentElement.clientWidth)
			){

				let linkId = secId.replace('section','section-link');
				let links = document.getElementsByClassName('menu__link')
				
// Set sections as active and also the link clicked
				for (let l = 0; l < links.length; l++) {
					document.getElementById(`section-link${l + 1}`).classList.remove('active');
				}
				document.getElementById(linkId).classList.add('active');
				for (let j = 0; j < sections.length; j++) {
				document.getElementById(`section${j+1}`).classList.remove('your-active-class');
				}
				document.getElementById(secId).classList.add('your-active-class');
			}
		}
		
	}
	
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Back to top button

let bttButton = document.getElementById('btn');

window.onscroll = function(){scrollToTop()};

function scrollToTop(){
	if(document.body.scollTop > 20 || document.documentElement.scrollTop >20){
		bttButton.style.display = "block";
	} else {
		bttButton.style.display = "none";
	}
};

function backToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	let links = document.getElementsByClassName('menu__link');
	for (let i = 0; i < links.length; i++) {
            document.getElementById(`section-link${i + 1}`).classList.remove('active');
    }
};

let isScrolling;
window.addEventListener('scroll',function(event){
	window.clearTimeout(isScrolling);
		document.getElementById('mainHeader').style.display = "block";
	isScrolling = setTimeout(function(){
		document.getElementById('mainHeader').style.display = "none";
	},60);
},false);

