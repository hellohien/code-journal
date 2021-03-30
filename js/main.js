/* global data */
/* exported data */
var $photoUrl = document.getElementById('photo-url');
var $entryImage = document.querySelector('.entry-image');

function updateEntryImage() {
  $entryImage.src = $photoUrl.value;
}

$photoUrl.addEventListener('input', updateEntryImage);
