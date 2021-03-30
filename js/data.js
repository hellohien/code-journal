/* exported data */
var $form = document.getElementById('form');
var $photoUrl = document.getElementById('photo-url');
var $entryImage = document.querySelector('.entry-image');
var $title = document.getElementById('title');
var $notes = document.getElementById('notes');

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousDataJSON = localStorage.getItem('javascript-local-storage');
if (previousDataJSON) {
  data = JSON.parse(previousDataJSON);
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
  $entryImage.src = 'images/placeholder-image-square.jpg';
  $form.reset();

  var dataJSON = JSON.stringify(data);
  localStorage.setItem('javascript-local-storage', dataJSON);
}

$form.addEventListener('submit', addEntry);
