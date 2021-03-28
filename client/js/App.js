'use strict';

import '../sass/app.scss';

//-- Autocomplete component

const search = document.getElementById('search');
const matchList = document.getElementById('match-list');


//search states.json and filter it
const searchStates = async searchText => {
	const res = await fetch('../api/states?term=' + search.value);
	const states = await res.json();


	// Get matches to current text input
	let matches = states.data.filter(state => {
		const regex = new RegExp(`^${searchText}`, 'gi');
		return state.name.match(regex) || state.abbreviation.match(regex);
	});

	if (searchText.length < 2) {
		matches = [];
		matchList.innerHTML = '';
	}


	outputHtml(matches);
};


//show results in HTML
const outputHtml = matches => {
	if(matches.length > 0) {
		const html = matches.map(match => `
			
			<li>
				<h4 class="statename">${match.name}</h4>
			</li>
			
		`)
		.join('');

		matchList.innerHTML = html;
	}
}

search.addEventListener('input', () => searchStates(search.value));


document.getElementById('match-list')
    .addEventListener('click', event => {
      if (event.target.className === 'statename') {
      	search.value = event.target.innerHTML;
      	matchList.innerHTML = '';
      }
    });


