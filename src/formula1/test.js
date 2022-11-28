let races = fetch('./allRaces.json')
    .then((response) => response.json())
    .then((json) => console.log(json));