let formSubmit = document.querySelector("#formInfo");
let year = document.querySelector('#year');
let season = document.querySelector('#season');
let table = document.querySelector("#standingsTable");

formSubmit.addEventListener("submit", (event) => {
    event.preventDefault()
    fetch(`http://ergast.com/api/f1/${year.value}/${season.value}/driverstandings.json`)
    .then((response) => response.json())
    .then((data) => {
    //   console.log(data);
    let standingsInfo = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    console.log(standingsInfo);
    for(let i = 0; i < 10; i++) {
        let position = document.createElement('tr');
        position.innerHTML = `
        <th>${i + 1}</th>
        <td>${standingsInfo[i].Driver.givenName} ${standingsInfo[i].Driver.familyName}</td>
        <td>${standingsInfo[i].Driver.nationality}</td>
        <td>${standingsInfo[i].Constructors[0].name}</td>
        <td>${standingsInfo[i].points}</td>`;
        table.appendChild(position);
    }
    year.value = '';
    season.value = '';
    });
});