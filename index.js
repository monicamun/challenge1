const fs = require("fs");

fs.readFile("./input.txt", "utf8", (error, data) => {
  if (error) {
    throw error;
  }
  // the input contains four lines that were divided and desconstructed to be able to manipulate them
  [length, instruction1, instruction2, encryptedMessage] = data.split("\r\n");
  
  let simpleMessage = "";
  let lastChar = "";

  //the encrypted line in cleared of the leftover letters 
  for (let i = 0; i < encryptedMessage.length; i++) {
    const currentChar = encryptedMessage[i];
    if (lastChar != currentChar) {
      lastChar = currentChar;
      simpleMessage += currentChar;
    }
  }
  //look for the message going through the encrypted line 
  
  let outMessage1 = simpleMessage.includes(instruction1) ? "SI" : "NO";
  let outMessage2 = simpleMessage.includes(instruction2) ? "\nSI" : "\nNO";
  let outMessage = outMessage1 + outMessage2;
  console.log(outMessage1);
  console.log(outMessage2);

  fs.writeFile("output.txt", outMessage, (err) => {
    if (err) throw "hubo un error";
  });
});
