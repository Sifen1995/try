document.addEventListener('DOMContentLoaded', (event: Event) => {
    const modal = document.getElementById("reservationModal") as HTMLElement;
    const btn = document.querySelector(".reserveBtn") as HTMLButtonElement;
    const span = document.getElementsByClassName("close")[0] as HTMLElement;

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event: MouseEvent) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});



// Get the modal
var modal = document.getElementById("eventModal") as HTMLElement;

// Get the button that opens the modal
const btn = document.getElementById("addEventBtn") as HTMLButtonElement;

// Get the <span> element that closes the modal
const closeBtn = document.querySelector(".close") as HTMLSpanElement;

// Get the form
const eventForm = document.getElementById("eventForm") as HTMLFormElement;

// Show modal when "Add New Event" button is clicked
btn.onclick = function (): void {
  modal.style.display = "block";
};

// Close modal when "X" is clicked
closeBtn.onclick = function (): void {
  modal.style.display = "none";
};

// Close modal when clicking outside of it
window.onclick = function (event: MouseEvent): void {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Handle form submission
eventForm.onsubmit = function (e: SubmitEvent): void {
  e.preventDefault();
  
  alert("Event Created Successfully!");

 
  (eventForm.elements.namedItem("eventName") as HTMLInputElement).value = "";
  (eventForm.elements.namedItem("organizer") as HTMLInputElement).value = "";
  (eventForm.elements.namedItem("eventDate") as HTMLInputElement).value = "";
  (eventForm.elements.namedItem("category") as HTMLInputElement).value = "";

   
  modal.style.display = "none";
};

