/* global data */
/* exported data */
var $photoUrl = document.getElementById('photo-url');
var $previewImage = document.querySelector('.preview-image');
var $form = document.getElementById('form');
var $title = document.getElementById('title');
var $notes = document.getElementById('notes');
var $entriesList = document.querySelector('.entries-list');
var $newEntryBtn = document.querySelector('.new-entry-button');
var $entryFormContainer = document.querySelector('.entry-form-container');
var $entriesContainer = document.querySelector('.entries-container');

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
}

function entryList(entryObj) {
  var $list = document.createElement('li');
  $list.setAttribute('class', 'row entry-list');

  var $image = document.createElement('img');
  $image.setAttribute('class', 'column-half');
  $image.setAttribute('src', entryObj.photoURL);
  $image.setAttribute('alt', 'Preview Image');
  $list.appendChild($image);

  var $div = document.createElement('div');
  $div.setAttribute('class', 'column-half');
  $list.appendChild($div);

  var $heading = document.createElement('h2');
  $heading.textContent = entryObj.title;
  $div.appendChild($heading);

  var $paragraph = document.createElement('p');
  $paragraph.textContent = entryObj.notes;
  $div.appendChild($paragraph);

  return $list;
}

for (var i = 0; i < data.entries.length; i++) {
  $entriesList.appendChild(entryList(data.entries[i]));
}

function showEntryForm(event) {
  $entryFormContainer.classList.remove('hidden');
  $entriesContainer.classList.add('hidden');
}

$photoUrl.addEventListener('input', updateEntryImage);
$form.addEventListener('submit', addEntry);
$entriesList.addEventListener('DOMContentLoaded', entryList);
$newEntryBtn.addEventListener('click', showEntryForm);
