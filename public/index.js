// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("left-sidebar-button-save");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// const saveForm = document.getElementById("modal-content-form-save")
// saveForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log("made it to save form")
//     const saveFormData = new FormData(e.target);
//     const saveUserName = saveFormData.get("save-username")
//     const savePhone = saveFormData.get("save-phone")
//     testIt(saveUserName, savePhone)
//     add function here
// })