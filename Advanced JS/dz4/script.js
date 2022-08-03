const chapter = document.querySelector('.chapter');

function filmRender(arr) {
  arr.forEach(({episodeId, name, openingCrawl, id}) => {
    let li = document.createElement('li');
    li.id = `${id}`
    li.innerHTML = `<p>Name: ${name}</p>
    <p>Episode: ${episodeId}</p>
    <p>Opening Crawl: ${openingCrawl}</p>`;
    chapter.append(li);
  });
}

function getCharacterList(arr) {
  let characterUrlList = [];
  arr.forEach(el=>{
    characterUrlList.push(el.characters)
  });
  return characterUrlList;
}

function renderCharacter(arr) {
  arr.forEach((f, i) => {
    let domElement = document.getElementById(`${i+1}`);
    let domElForName = document.createElement('p');
    
    let nameListToRender = f.map(el=>`<span>${el}</span>`).join(', ');
    domElForName.innerHTML += nameListToRender;
    domElement.append(domElForName);
  })
}
function makeFetch(url) {
  return new Promise((res, rej) => {
    fetch(url)
        .then(response => response.json())
        .then(character => res(character.name))
        .catch(e => rej(e))
  });
}

function loadCharactersByFilm(characterUrls) {
  const promiseList = [];

  for(let j = 0; j < characterUrls.length; j++){
    promiseList.push(makeFetch(characterUrls[j]));
  }

  return new Promise((res, rej) => {
    Promise.all(promiseList)
    .then(list => {
      res(list)
    })
    .catch(e => {
      console.log('promise all error:', e);
      rej(e);
    });
  });
}

function loadAllCharacters(arr) {
  const promiseList = [];
  for(let i = 0; i < arr.length; i++){
    promiseList.push(loadCharactersByFilm(arr[i]));
  }

  return new Promise((res, rej) => {
    Promise.all(promiseList)
    .then(list => {
      res(list);
    })
    .catch(e => {
      console.log('Error:', e);
      rej(e);
  });
  });
  
}


fetch('https://ajax.test-danit.com/api/swapi/films')
  .then(response => response.json())
  .then(list => {
    filmRender(list);
    return list;
  })
  .then(list => getCharacterList(list))
  .then(urlList => loadAllCharacters(urlList))
  .then(list => renderCharacter(list))
