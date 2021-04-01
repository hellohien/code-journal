/* global data */
/* exported data */
var $photoUrl = document.getElementById('photo-url');
var $previewImage = document.querySelector('.preview-image');
var $form = document.getElementById('form');
var $title = document.getElementById('title');
var $notes = document.getElementById('notes');
var $entriesList = document.querySelector('.entries-list');
var $newEntryBtn = document.querySelector('.new-entry-button');
var $containers = document.querySelectorAll('.container');
var $entriesLink = document.querySelector('.entries-link');

function updateEntryImage() {
  $previewImage.src = $photoUrl.value;
}

function addEntry(event) {
  event.preventDefault();
  var entries = {
    title: $title.value,
    photoURL: $photoUrl.value,
    notes: $notes.value,
    entryId: data.nextEntryId
  };
  data.nextEntryId++;
  data.entries.unshift(entries);
  $previewImage.src = 'images/placeholder-image-square.jpg';
  $form.reset();
  $entriesList.prepend(entryList(entries));
  getDataValue('entries');
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

function changeView(view) {
  for (var index = 0; index < $containers.length; index++) {
    if ($containers[index].dataset.view === view) {
      $containers[index].className = 'container hidden';
    } else {
      $containers[index].className = 'container';
    }
  }
}

function getDataValue(view) {
  var dataView = event.target.getAttribute('data-view');
  changeView(dataView);
}

$photoUrl.addEventListener('input', updateEntryImage);
$form.addEventListener('submit', addEntry);
$entriesList.addEventListener('DOMContentLoaded', entryList);
$newEntryBtn.addEventListener('click', getDataValue);
$entriesLink.addEventListener('click', getDataValue);
