const fs = require('fs');

function removeElement(arr, element) {
  const index = arr.indexOf(element);
  if (index > -1) {
    arr.splice(index, 1);
  }
  save()
}
function insertElement(arr, element) {
  if(!arr.includes(element))
  arr.push(element);
  save()
}
let developers = { dev: [] }
let artists = { artists: [] }
let designers ={ designers: [] }
function load() {
    try {
        const rawData = fs.readFileSync('../model/data.json');
        const data = JSON.parse(rawData);

        developers = data.developers || developers;
        artists = data.artists || artists;
        designers = data.designers || designers;

        console.log('Data loaded successfully!');
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
function save() {
    const data = {
      developers,
      artists,
      designers,
    };
  
    const jsonData = JSON.stringify(data, null, 2);
  
    fs.writeFile('data.json', jsonData, err => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Data saved successfully!');
    });
  }


function insertDeveloper(developer)  {
    load()
    let found = false
    const _dev = getDevelopers()
    if(_dev)
        found = _dev.includes(developer)
    if(!found)
    insertElement(developers.dev,developer)
}
function insertArtist(artist) {
    load()
    let found = false
    const _artists = getArtists()
    if(_artists)
        found = _artists.includes(artist)
    if(!found)
    insertElement(artists.artists, artist)
}
function insertDesigner(designer){
    load()
    let found = false
    const _designers = getDesigners()
    if(_designers)
        found = _designers.includes(designer)
    if(!found)
    insertElement(designers.designers,designer)
} 


function getDevelopers() {
    load()
    if(developers.dev.length === 0) {
        return false;
    } else {
        return developers.dev;
    }
}
    
function getArtists() {
    load()
    if(artists.artists.length === 0) {
        return false;
    } else {
        return artists.artists;
    }
}
    
function getDesigners() {
    load()
    if(designers.designers.length === 0) {
        return false;
    } else {
        return designers.designers;
    }
}
load()
module.exports = {insertDeveloper,insertDesigner,insertArtist,getDesigners,getArtists,getDevelopers,designers,developers,artists}