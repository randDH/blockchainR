import Block from "./Block.js";
import Blockchain from "./blockchain.js";

let randCoin = new Blockchain();

//constructor(height, timestamp, data, prevHash )
randCoin.addBlock(new Block(1, "01/5/2022", {sender: "Gahid", recipient: "Basil", quantity: 250}));
randCoin .addBlock(new Block(2, "16/6/2022", {sender: "Basil", recipient: "Raed", quantity: 500}));

console.log(JSON.stringify(randCoin, null, 4));

