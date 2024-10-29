/*
1 - Set characters to create the serial
2 - Set serial characters count
3 - Create empty variable to store the serial
4 - Create random number + access sequence
5 - Store the random element in the empty variable
6 - Loop X count
7 - Change serial element content with the serial variable
*/
let serialElement = document.querySelector(".serial");
let btnElement = document.querySelector(".generate");
btnElement.onclick = function () {
    let characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWZ";
    let charsLenght = 15;
    let randomSerial = "";
    for (let i=0; i<charsLenght; i++) {
        randomSerial += characters[Math.floor(Math.random() * characters.length)];
    }
    serialElement.innerHTML = randomSerial;
};