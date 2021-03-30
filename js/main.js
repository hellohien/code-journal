/* global data */
/* exported data */
var $photoUrl = document.getElementById('photo-url');
var $previewImage = document.querySelector('.preview-image');

function updateEntryImage() {
  $previewImage.src = $photoUrl.value;
}

$photoUrl.addEventListener('input', updateEntryImage);
