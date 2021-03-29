/* global data */
/* exported data */
var $photoUrlInput = document.getElementById('photo-url');
var $entryImage = document.querySelector('.entry-image');

function updateEntryImage() {
  $entryImage.src = $photoUrlInput.value;
}

$photoUrlInput.addEventListener('input', updateEntryImage);
