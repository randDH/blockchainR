import sha256 from 'crypto-js/sha256.js';

class Block {
    height;
    data;
    hash;
    prevHash;
    timestamp;
    nonce;

    constructor(height, timestamp, data, prevHash = " " ){
        this.height = height;
        this.timestamp = timestamp;
        this.data = data;
        this.prevHash = prevHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash() {
        return sha256(
            this.height + this.timestamp + JSON.stringify(this.data) + this.prevHash + this.nonce
        ).toString();
    }

    proOfWork(difficulty) {
        while(this.hash.substring(0, difficulty) !== "".padStart(difficulty, "0")){
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log("block mined:" + this.hash)
    }
}
export default Block;

