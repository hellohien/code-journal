/* global data */
/* exported data */
var $photoUrl = document.getElementById('photo-url');
var $previewImage = document.querySelector('.preview-image');
var $form = document.getElementById('form');
var $title = document.getElementById('title');
var $notes = document.getElementById('notes');

function updateEntryImage() {
  $previewImage.src = $photoUrl.value;
}

function addEntry(event) {
  var entries = {
    title: $title.value,
    photoURL: $photoUrl.value,
    notes: $notes.value,
    entryId: data.nextEntryId
  };

  data.nextEntryId++;
  data.entries.unshift(entries);
  $form.reset();
}

$photoUrl.addEventListener('input', updateEntryImage);
$form.addEventListener('submit', addEntry);
