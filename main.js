
/* =========================================
   WATEL DASHBOARD JAVASCRIPT
========================================= */


/* =========================================
   SELECT HTML ELEMENTS
========================================= */

const drawer = document.getElementById("contentDrawer");

const overlay = document.getElementById("drawerOverlay");

const drawerTitle = document.getElementById("drawerTitle");

const closeButton = document.getElementById("closeDrawer");

const menuLinks = document.querySelectorAll(
    ".menu a[data-section]"
);


/* =========================================
   SECTION TITLES
========================================= */

const sectionTitles = {

    profile: "My Profile",

    statistics: "My Statistics",

    bills: "Electric Bills",

    faq: "Frequently Asked Questions",

    feedback: "Customer Feedback",

    settings: "Account Settings"

};


/* =========================================
   OPEN SLIDING PANEL
========================================= */

function openDrawer(sectionId) {

    // Find the selected section

    const selectedSection = document.getElementById(sectionId);

    // Check if the section exists

    if (!selectedSection || !drawer) {
        return;
    }

    // Hide all other sections

    document.querySelectorAll(".drawer-section").forEach(section => {

        section.classList.remove("is-visible");

    });


    // Display the selected section

    selectedSection.classList.add("is-visible");


    // Change panel title

    drawerTitle.textContent = sectionTitles[sectionId] || "WATEL";


    // Show the panel and overlay

    drawer.classList.add("is-open");

    overlay.classList.add("is-open");


    // Prevent background scrolling while panel is open

    document.body.classList.add("drawer-active");

}


/* =========================================
   CLOSE SLIDING PANEL
========================================= */

function closeDrawerPanel() {

    drawer.classList.remove("is-open");

    overlay.classList.remove("is-open");

    document.body.classList.remove("drawer-active");

}


/* =========================================
   SIDEBAR NAVIGATION
========================================= */

menuLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        // Prevent page reload

        event.preventDefault();


        // Get the selected section

        const sectionId = this.dataset.section;


        // Remove previous active menu

        document.querySelectorAll(".menu li").forEach(item => {

            item.classList.remove("active");

        });


        // Highlight clicked menu

        this.closest("li").classList.add("active");


        // Dashboard closes the panel

        if (sectionId === "dashboard") {

            closeDrawerPanel();

            return;

        }


        // Open the selected section

        openDrawer(sectionId);

    });

});


/* =========================================
   CLOSE BUTTON
========================================= */

closeButton.addEventListener("click", function() {

    closeDrawerPanel();

});


/* =========================================
   CLICK OUTSIDE PANEL TO CLOSE
========================================= */

overlay.addEventListener("click", function() {

    closeDrawerPanel();

});


/* =========================================
   ESCAPE KEY TO CLOSE PANEL
========================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeDrawerPanel();

    }

});


/* =========================================
   FEEDBACK FORM
========================================= */

const feedbackForm = document.getElementById("feedbackForm");

const feedbackNotice = document.getElementById("feedbackNotice");

if (feedbackForm) {

    feedbackForm.addEventListener("submit", function(event) {

        // Prevent page reload

        event.preventDefault();


        // Get feedback information

        const name = document.getElementById("feedbackName").value;

        const email = document.getElementById("feedbackEmail").value;

        const category = document.getElementById("feedbackCategory").value;

        const message = document.getElementById("feedbackMessage").value;


        // Check that all fields are completed

        if (!name || !email || !category || !message) {

            feedbackNotice.textContent =
                "Please complete all the fields.";

            return;

        }


        // Display confirmation

        feedbackNotice.textContent =
            "Thank you! Your feedback has been prepared successfully.";


        // Reset form

        feedbackForm.reset();

    });

}


/* =========================================
   SIGNOUT BUTTON
========================================= */

const signoutButton = document.getElementById("signoutBtn");

if (signoutButton) {

    signoutButton.addEventListener("click", function(event) {

        event.preventDefault();

        const confirmSignout = confirm(
            "Are you sure you want to sign out?"
        );

        if (confirmSignout) {

            alert("You have selected to sign out.");

            // Connect your actual logout page here
            // Example: window.location.href = "login.html";

        }

    });

}


/* =========================================
   WATEL DASHBOARD READY
========================================= */

console.log("WATEL Dashboard loaded successfully!");

 