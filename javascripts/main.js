// these are the two buttons
var showButton = document.getElementById("modal-show");
var hideButton = document.getElementById("modal-hide");
// this is the modal element
var modal = document.getElementById("modal-container");
// this function shows the modal
var showModal = function() {
    modal.style.display = 'block';
}
 
// this function hides the modal
var hideModal = function() {
    modal.style.display = 'none';
}
// when the buttons are clicked, call functions by name
showButton.onclick = showModal;
hideButton.onclick = hideModal;
 

