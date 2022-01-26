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
	return result
};

function deep(wordR){
	var result = [];
	for(var entry in dictionary){
		for(var type in dictionary[entry]){
			if(~dictionary[entry][type].indexOf(wordR)) {
				result.push(...dictionary[entry][type].filter(x => result.indexOf(x) === -1));
			}
		}
	}
	return result;
}

module.exports = synonyms;

