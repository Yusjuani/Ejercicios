/*Dada una matriz de números enteros y un número de destino, 
diseña un algoritmo para encontrar todos los pares únicos de números 
cuya suma sea igual al número objetivo. 
Por ejemplo, dada la matriz [3, 1, 4, 2, 5] y el objetivo 6,
 la salida sería [(1, 5), (2, 4)].*/

 /* encontrar los pares [3, 1, 4, 2, 5]
 const numeros = [3, 1, 4, 2, 5]
 const pares= []

 for (indice = 0; indice <= numeros.length; indice++) {
      console.log(numeros[indice])
    }

    */

 /*   function findPairs(array, target) {
        let numIndex = {};
        let pairs = [];
    
        for (let i = 0; i < array.length; i++) {
            let num = array[i];
            let complement = target - num;
            if (numIndex.hasOwnProperty(complement)) {
                pairs.push([complement, num]);
            }
            numIndex[num] = true;
        }
    
        return pairs;
    }
    
    // Ejemplo de uso
    let array = [3, 1, 4, 2, 5];
    let target = 6;
    let result = findPairs(array, target);
    console.log(result); // Salida: [[1, 5], [2, 4]]*/
/*const CryptoJS = require('crypto-js');

function findStringWithHash() {
    let subject = "bkudgsdtit";
    let hash = "";
    let number = 0;

    while (!hash.includes("b00da")) {
        number++;
        hash = CryptoJS.SHA256(subject + number).toString();
    }

    return { subject: subject, number: number, hash: hash };
}

const { subject, number, hash } = findStringWithHash();
console.log("Subject:", subject);
console.log("number:", number);
console.log("Hash:", hash);
*/

const crypto = require('crypto');

// Función para generar un string aleatorio de longitud dada
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Función para pasar un texto por la función hash SHA256
function calculateSHA256Hash(text) {
    return crypto.createHash('sha256').update(text).digest('hex');
}

// Función para verificar si un hash contiene el substring "b00da"
function hashContainsSubstring(hash) {
    return hash.includes('b00da');
}

// Función para generar un texto que, al pasar por SHA256, contiene el substring "b00da"
function generateTextWithDesiredHash() {
    let text = generateRandomString(10); // Generar un string aleatorio
    let hash = calculateSHA256Hash(text); // Calcular el hash SHA256
    while (!hashContainsSubstring(hash)) { // Verificar si el hash contiene el substring "b00da"
        text = generateRandomString(10); // Generar un nuevo string aleatorio
        hash = calculateSHA256Hash(text); // Calcular el hash SHA256 del nuevo string
    }
    return text;
}

// Ejemplo de uso
const textWithDesiredHash = generateTextWithDesiredHash();
console.log("Texto con hash deseado:", textWithDesiredHash); 
