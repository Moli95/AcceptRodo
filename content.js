fetch('https://moli95.github.io/AcceptRodo/dictionary.json')
	.then(response => response.json())
	.then(data => {
		dictionary = data;

		setTimeout(() => {
			var searchTerm = window.location.hostname;
			var results = dictionary.filter(function (record) {
				return record.domain === searchTerm
			});
			if (results[0] === undefined) {
				return;
			}
			var selectedTags = document.getElementsByTagName(results[0].tag);
			var search = {
				"text": results[0].innerHTML,
				"value": results[0].value,
				"id": results[0].id
			}
			var counter = 0;
			var interval = setInterval(function () {
				counter++;
				for (var i = 0; i < selectedTags.length; i++) {
					if (counter > 40) {
						clearInterval(interval);
						break;
					}

					if ((selectedTags[i].innerHTML).trim() == search.text || (selectedTags[i].value) == search.value || (selectedTags[i].id) == search.id) {
						selectedTags[i].click();
						clearInterval(interval);
						break;
					}
				}
			}, 100);

		}, 1000);

	})
	.catch(error => console.error(error))