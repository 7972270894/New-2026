/* =================================
   COLLEGE EVENT MANAGEMENT SYSTEM
   JAVASCRIPT
   ================================= */


/* =================================
   1. SELECT EVENT
   ================================= */

function selectEvent(eventName) {

    // Select the event dropdown
    const eventDropdown = document.getElementById("event");

    // Set selected event
    eventDropdown.value = eventName;

    // Scroll to registration form
    document.getElementById("register").scrollIntoView({
        behavior: "smooth"
    });
}


/* =================================
   2. STUDENT REGISTRATION
   ================================= */

function registerStudent(event) {

    // Stop page from refreshing
    event.preventDefault();

    // Get student details
    const name =
        document.getElementById("studentName").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const selectedEvent =
        document.getElementById("event").value;

    const department =
        document.getElementById("department").value.trim();


    // Check whether all fields are filled
    if (
        name === "" ||
        email === "" ||
        selectedEvent === "" ||
        department === ""
    ) {
        alert("Please fill all the fields.");
        return;
    }


    // Display success message
    const message =
        document.getElementById("message");

    message.innerHTML =
        "Registration successful! " +
        name +
        ", you have registered for " +
        selectedEvent +
        ".";


    // Show alert
    alert(
        "Registration Successful!\n\n" +
        "Student: " + name + "\n" +
        "Event: " + selectedEvent
    );


    // Clear form
    document.querySelector("form").reset();
}


/* =================================
   3. SEARCH EVENTS
   ================================= */

function searchEvents() {

    // Get search text
    const searchText =
        document.getElementById("search")
        .value
        .toLowerCase();


    // Get all event cards
    const eventCards =
        document.querySelectorAll(".event-card");


    // Check every event
    eventCards.forEach(function(card) {

        const eventName =
            card.querySelector("h3")
            .textContent
            .toLowerCase();


        // Show matching events
        if (eventName.includes(searchText)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";
        }
    });
}


/* =================================
   4. PAGE LOAD MESSAGE
   ================================= */

window.addEventListener("load", function() {

    console.log(
        "College Event Management System loaded successfully."
    );

});
