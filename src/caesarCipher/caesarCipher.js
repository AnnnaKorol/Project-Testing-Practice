function caesarCipher(str, shift) {
	return str
		.split("")
		.map((char) => {
			if (/^[a-zA-Z]$/.test(char)) {
				// Check if the character is a letter
				const start = char === char.toLowerCase() ? "a" : "A"; // Define the initial letter to be shifted
				return String.fromCharCode(
					((((char.charCodeAt(0) - start.charCodeAt(0) + shift) % 26) + 26) %
						26) +
					start.charCodeAt(0)
				);
			}
			return char; // If the character is not a letter, return it unchanged
		})
		.join(""); // Convert the array back to a string
}

module.exports = caesarCipher;


/*  /^[a-zA-Z]$/ - regular expression that provides "match all strings that start with a letter"*/
/* /^[a-zA-Z]$/.test(char) */ /* -This regular expression checks if the character is a letter (lowercase or uppercase). If the character is a letter, the character is shifted. If it is not (e.g., space, comma, digit), the character remains unchanged. */