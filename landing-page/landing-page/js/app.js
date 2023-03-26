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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const navigation = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 */

//build the nav

const navBuilder = () => {
//Creating loop for sections
  let navUI = "";

  sections.forEach((section) => {
//Global varialbe navigation
    const sectionID = section.id;
//Global variable sections
    const sectionDataNav = section.dataset.nav;

    navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;
  });

//Append elements to the navigation
  navigation.innerHTML = navUI;
};

// Build menu
navBuilder();
// Add class 'active' to section when near top of viewport
const offset = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};

//Remove active class
const removeActive = (section) => {
  section.classList.remove("your-active-class");
  section.style.cssText =
    "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
  sectionid = section.id.slice(7, 8) - 1;
  navigation.childNodes[sectionid].style.cssText = "background-color: white;";
};

//Add active class
const addActive = (conditional, section) => {
  if (conditional) {
    section.classList.add("your-active-class");
    section.style.cssText = "background-color: blue;";
    sectionid = section.id.slice(7, 8) - 1;
    navigation.childNodes[sectionid].style.cssText = "background-color: blue;";
  }
};
//implementation of the actual the actual function
const sectionActivation = () => {
  sections.forEach((section) => {
    const elementOffset = offset(section);

    inviewport = () => elementOffset < 150 && elementOffset >= -150;

    removeActive(section);
    addActive(inviewport(), section);
  });
};

window.addEventListener("scroll", sectionActivation);

// Scroll to anchor ID using scroll To event
const scrolling = () => {

// Scroll to section on link click
  const links = document.querySelectorAll("navbar__menu a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      for (i = 0; i < sections; i++) {
        sections[i].addEventListener("click", sectionScroll(link));

// Add event.preventDefault
   const checkbox = document.querySelector("#id-checkbox");

   checkbox.addEventListener("click",
   checkboxClick, false);

   function checkboxClick (event) {
     let warn = "preventDefault() won't let you check this!<br>";
     document.getElementById("output-box").innerHTML += warn;
     event.preventDefault();
   }
    }
    });
  });
};
// Add Scrolling
scrolling();

function sectionScroll(link) {
  throw new Error("Function not implemented.");
}
/**
 * End Main Functions
 * Begin Events
 *
 */