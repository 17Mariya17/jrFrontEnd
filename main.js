// Excercise 1

// Wrong answer alert
function exercise1Check() {
  document.getElementById("alert_placeholder").innerHTML = `<div
        class="alert alert-danger d-flex align-items-center"
        role="alert"
        >
        <p>
            Incorrect: Please review the customer and the BAC chart
            carefully and try again.
        </p>
        </div>`;
}
// Right answer alert
function exercise1CheckCorrect() {
  document.getElementById("alert_placeholder").innerHTML = `<div
        class="alert alert-success d-flex align-items-center"
        role="alert"
        >
        <p>
            Great job!
        </p>
        </div>`;
}

// Excercise 2

// Function for modals
function exercise2Check() {
  // Correct answer
  if (document.getElementById("correctAnswer").checked) {
    document.getElementById(
      "exampleModal"
    ).innerHTML = `<div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <p class="modal-title fw-bold fs-5" id="exampleModalLabel">
        Correct. Great job!
        </p>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
    </div>
  </div>`;
  } else if (document.getElementById("wrongAnswer").checked) {
    // Wrong answer
    document.getElementById(
      "exampleModal"
    ).innerHTML = `<div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <p class="modal-title fw-bold fs-5" id="exampleModalLabel">
          Please read carefully and try again
        </p>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        Review the material by clicking on the Review button
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-dismiss="modal"
        >
          Review
        </button>
      </div>
    </div>
  </div>`;
  } else {
    // No answer
    document.getElementById(
      "exampleModal"
    ).innerHTML = `<div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <p class="modal-title fw-bold fs-5" id="exampleModalLabel">
          Please select an answer
        </p>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        Review the material by clicking on the Review button
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-dismiss="modal"
        >
          Review
        </button>
      </div>
    </div>
  </div>`;
  }
}
