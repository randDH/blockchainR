import Block from "./Block.js";

class Blockchain{
    chain;
    difficulty;

    constructor(){
        this.chain = [this.init()];
        this.difficulty = 4;
    }

    init(){
        return new Block(0, "01/01/2022", "Genesis Block", "0");
    }

    addBlock(newBlock){
        newBlock.prevHash = this.chain[this.chain.length - 1].hash;
        newBlock.proOfWork(this.difficulty);
        this.chain.push(newBlock);
    }

    validtyChain(){
        for (let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const prevBlock = this.chain[i-1];
            
            if(currentBlock.hash !== currentBlock.calculateHash())
                return false;
            
            if(currentBlock.prevHash !== prevBlock.hash)
                return false;    
        }
        return true;
    }


}


export default Blockchain;