document.addEventListener('DOMContentLoaded', function (event) {
    var modal = document.getElementById("reservationModal");
    var btn = document.querySelector(".reserveBtn");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function () {
        modal.style.display = "block";
    };
    span.onclick = function () {
        modal.style.display = "none";
    };
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
// Get the modal
var modal = document.getElementById("eventModal");
// Get the button that opens the modal
var btn = document.getElementById("addEventBtn");
// Get the <span> element that closes the modal
var closeBtn = document.querySelector(".close");
// Get the form
var eventForm = document.getElementById("eventForm");
// Show modal when "Add New Event" button is clicked
btn.onclick = function () {
    modal.style.display = "block";
};
// Close modal when "X" is clicked
closeBtn.onclick = function () {
    modal.style.display = "none";
};
// Close modal when clicking outside of it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
// Handle form submission
eventForm.onsubmit = function (e) {
    e.preventDefault();
    // Add logic to handle form data (e.g., save event details)
    alert("Event Created Successfully!");
    // Clear form inputs
    eventForm.elements.namedItem("eventName").value = "";
    eventForm.elements.namedItem("organizer").value = "";
    eventForm.elements.namedItem("eventDate").value = "";
    eventForm.elements.namedItem("category").value = "";
    // Close modal
    modal.style.display = "none";
};











document.addEventListener('DOMContentLoaded', () => {
    const eventTableBody = document.getElementById('eventTableBody');
    const eventModal = document.getElementById('eventModal');
    const closeModalButton = document.querySelector('.close');
    const eventForm = document.getElementById('eventForm');
    let isEditing = false;
    let currentRow;
  
    // Open modal for adding or editing
    document.getElementById('addEventBtn').addEventListener('click', () => {
      isEditing = false;
      eventForm.reset();
      eventModal.style.display = 'block';
    });
  
    eventTableBody.addEventListener('click', (e) => {
      if (e.target.classList.contains('edit-btn')) {
        isEditing = true;
        currentRow = e.target.closest('tr');
        populateFormForEdit(currentRow);
        eventModal.style.display = 'block';
      } else if (e.target.classList.contains('delete-btn')) {
        const row = e.target.closest('tr');
        if (confirm('Are you sure you want to delete this event?')) {
          eventTableBody.removeChild(row);
        }
      }
    });
  
    closeModalButton.addEventListener('click', () => {
      eventModal.style.display = 'none';
    });
  
    window.addEventListener('click', (e) => {
      if (e.target == eventModal) {
        eventModal.style.display = 'none';
      }
    });
  
    eventForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(eventForm);
      const newRowHtml = `
        <tr>
          <td>${formData.get('eventName')}</td>
          <td>${formData.get('organizer')}</td>
          <td>${formData.get('eventDate')}</td>
          <td>${formData.get('category')}</td>
          <td>
            <button class="edit-btn">Edit</button> |
            <button class="delete-btn">Delete</button>
          </td>
        </tr>`;
      
      if (isEditing) {
        currentRow.innerHTML = newRowHtml;
      } else {
        eventTableBody.insertAdjacentHTML('beforeend', newRowHtml);
      }
      eventModal.style.display = 'none';
    });
  
    function populateFormForEdit(row) {
      const cells = row.children;
      eventForm.eventName.value = cells[0].textContent;
      eventForm.organizer.value = cells[1].textContent;
      eventForm.eventDate.value = cells[2].textContent;
      eventForm.category.value = cells[3].textContent;
    }
  });
  
