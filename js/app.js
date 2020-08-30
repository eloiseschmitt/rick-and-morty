// Replace ./data.json with your JSON feed
fetch('https://rickandmortyapi.com/api/character')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    // Work with JSON data here
    console.log(data)
    data.results.forEach(result => {
        getCharachterResults(result);
    });
    
  })
  .catch((err) => {
    // Do something for an error here
  })

// Get a character results
function getCharachterResults(datasReturned) {
    let listOfEpisodes = datasReturned.episode;
    let image = datasReturned.image;
    let location = datasReturned.location;
    let name = datasReturned.name;
    let specie = datasReturned.species;

    // Create a card div for each result (7 div, 4 p, 1 ul, li(s)):
    let divOne = document.createElement('DIV');
    divOne.classList.add('max-w-sm', 'w-full', 'lg:max-w-full', 'lg:flex');

    let divTwo = document.createElement('DIV');
    divTwo.classList.add('h-48', 'lg:h-auto', 'lg:w-48', 'flex-none', 'bg-cover', 'rounded-t', 'lg:rounded-t-none', 'lg:rounded-l', 'text-center', 'overflow-hidden', 'img-character');
    divTwo.setAttribute('style', 'background-image: url(' + image + ')');
    divOne.appendChild(divTwo);

    let divThree = document.createElement('DIV');
    divThree.classList.add('border-r', 'border-b', 'border-l', 'border-gray-400', 'lg:border-l-0', 'lg:border-t', 'lg:border-gray-400', 'bg-white', 'rounded-b', 'lg:rounded-b-none', 'lg:rounded-r', 'p-4', 'flex', 'flex-col', 'justify-between', 'leading-normal');
    divOne.appendChild(divThree);

    let divFour = document.createElement('DIV');
    divFour.classList.add('mb-5');
    divThree.appendChild(divFour);

    let divFive = document.createElement('DIV');
    divFive.classList.add('text-gray-900', 'font-bold', 'text-xl', 'name-character');
    divFive.textContent = name;
    divFour.appendChild(divFive);

    let pOne = document.createElement('P');
    pOne.classList.add('text-gray-700', 'text-base', 'text-sm', 'specie-characte');
    pOne.textContent = specie;
    divFour.appendChild(pOne);

    let divSix = document.createElement('DIV');
    divSix.classList.add('flex', 'items-center');
    divThree.appendChild(divSix);

    let divSeven = document.createElement('DIV');
    divSeven.classList.add('text-sm');
    divSix.appendChild(divSeven);

    let pTwo = document.createElement('P');
    pTwo.classList.add('text-gray-900', 'leading-none');
    let textpTwo = document.createTextNode('Liste des épisodes : ');
    pTwo.appendChild(textpTwo);
    divSeven.appendChild(pTwo);

    let ulOne = document.createElement('UL');
    ulOne.classList.add('episodes-character');
    divSeven.appendChild(ulOne);
    for(let i = 0 ; i < 5 ; i++) {
        let li = document.createElement('LI');
        let textLi = document.createTextNode(listOfEpisodes[i]);
        li.appendChild(textLi);
        ulOne.appendChild(li);
    };

    let pThree = document.createElement('P');
    pThree.classList.add('text-gray-900', 'leading-none', 'mt-5');
    let textpThree = document.createTextNode('Lieu de vie : ');
    pThree.appendChild(textpThree);
    divSeven.appendChild(pThree);

    let pFour = document.createElement('P');
    pFour.classList.add('locations-character');
    pFour.textContent = location.name;
    divSeven.appendChild(pFour);

    document.querySelector('.card-character').appendChild(divOne);
}