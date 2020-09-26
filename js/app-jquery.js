const apiUrl = 'https://rickandmortyapi.com/api/character';
const charactersInfos = [];
const infosSupp = [];


$.get(apiUrl, function(datas) {
    charactersInfos.push(...datas.results);
})
.fail(function() {
    console.warn('error');
})

const searchInput = $('#username');

searchInput.change(displayMatches);
searchInput.keyup(displayMatches);

const resultDiv = $('.card-character');

function findMatches(research) {
  return charactersInfos.filter(character => {
    const regex = new RegExp(research, 'gi');
    //Ajouter épisodes
    if (character.name.match(regex) || character.location.name.match(regex)) {
      return character;
    }
  })
}

function displayMatches() {
  const matchArray = findMatches(this.value);
  const html = matchArray.map(match => {
    const listOfEpisodes = match.episode;
    const image = match.image;
    const location = match.location;
    const name = match.name;
    const specie = match.species;

    let liListOfEpisodes;

    for (let i = 0; i < listOfEpisodes.length && i < 5; i++) {
      liListOfEpisodes += `
        <li> ${listOfEpisodes[i]} </li>
      `
    };

    return `
      <div class="max-w-sm w-full lg:max-w-full lg:flex">
        <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden img-character"
          style="background-image: url( ${image} )">
        </div>
        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="mb-5">
            <div class="text-gray-900 font-bold text-xl name-character">
              ${name}
            </div>
            <p class="text-gray-700 text-base text-sm specie-character"> ${specie} </p>
          </div>
          <div class="flex items-center">
            <div class="text-sm">
              <p class="text-gray-900 leading-none">Liste des épisodes : </p>
              <ul class="episodes-character">
                ${liListOfEpisodes}
              </ul>
              <p class="text-gray-900 leading-none mt-5">Lieu de vie : </p>
              <p> ${location.name} </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  resultDiv.html(html);

}