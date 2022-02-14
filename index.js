const dictionary = require('./dictionary.js');
const synonyms = function(word, deepSearch){
	let result = []
	word = (word || "").toLowerCase();
	if(deepSearch){
		result = deep(word)
	} else {
		for(var type in dictionary[word]){
			result.push(...dictionary[word][type])
		}
	}
	return result.filter((x, i) => result.indexOf(x) === i)
};

function deep(wordR){
	let result = []
	for(var entry in dictionary){
		for(var type in dictionary[entry]){
			if(~dictionary[entry][type].indexOf(wordR)) {
				result.push(...dictionary[entry][type]);
			}
		}
	}
	return result;
}

module.exports = synonyms;

