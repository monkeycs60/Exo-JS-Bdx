const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphabetMaj = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function encryptor (key, message) {
    let minuscule = message.toLowerCase();
    let result = [];
for (let index = 0; index < minuscule.length; index++) {
    const lettre = minuscule[index];
    const lettreCode = alphabet.indexOf(lettre);
    const lettreCodeCrypte = lettreCode + key;
    const lettreCrypte = alphabet[lettreCodeCrypte];
    const regex = /[^a-zA-Z0-9]/g;
    
    if (lettre === message.match(regex)) {
        result.push(lettre);
    }
   else if (message[index] === message[index].toUpperCase()) {
        if ((alphabetMaj.indexOf(message[index]) + key) <= 25) {
            result.push(alphabetMaj[(alphabetMaj.indexOf(message[index]) + key)]);
        } 
        else {
            result.push(alphabetMaj[alphabetMaj.indexOf(message[index]) + key % 26]);
        }
            
        } 
    else if (message[index] === message[index].toLowerCase()) {
        if ((alphabet.indexOf(message[index]) + key) <= 25) {
            result.push(alphabet[(alphabet.indexOf(message[index]) + key)]);
        } 
        else {
            result.push(alphabet[alphabet.indexOf(message[index]) + key % 26]);
        }
    }
    
    
    
    
}

return result.join("");
}


console.log(encryptor(1, "I love  America"));