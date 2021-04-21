import { Bytes } from "./types";




/**
 * Converts hexadecimal code to binary code
 *
 * @param {string} A String containing single digit hexadecimal numbers e.g. '1d'
 * @returns {string} A string containing binary numbers e.g. '00011101'
 */
const hexToBinary = (text) => {
    let result = "";
    for (const nibble of text) {
        result = result.concat(parseInt(nibble, 16).toString(2).padStart(4, "0"));
    }
    return result;
}
/**
 * Converts binary code to hexadecimal string
 *
 * @param {string} binaryString A string containing binary numbers e.g. '00011101'
 * @returns {string} A string containing the hexadecimal numbers e.g. '1d'
 */
const binaryToHex = (text) => {
    let result = "";
    for (let i = 0; i < text.length; i += 4) {
        // Grab a chunk of 4 bits
        const bytes = text.substr(i, 4);
        // Convert to decimal then hexadecimal
        const decimal = parseInt(bytes, 2);
        const hex = decimal.toString(16);
        // Uppercase all the letters and append to output
        result = result.concat(hex.toUpperCase());
    }
    return result;
}



const permute = (k, arr, n) =>  {
    let per = "";
    for (let i = 0; i < n; i++) {
        per += k[arr[i] - 1];
    }
    return per;
}

const  xorBinary = (a, b) => {
    let ans = "";
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) {
            ans += "0";
        }
        else {
            ans += "1";
        }
    }
    return ans;
}





export {
  xorBinary,
  permute,
  binaryToHex,
  hexToBinary,
};
