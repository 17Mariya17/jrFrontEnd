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
