class HashTable {
    constructor(num = 127){
        this.table = [];
        this.size = 0;
        this.table.length = num; 
    }  
    
    #_hash(key){
        let sum = 0;
        key = key.toString();
        for(let i=0; i < key.length; i++){
          sum += key[i].charCodeAt(0);
        }
        return sum % this.table.length;
    }

    set(key, val){
        const index = this.#_hash(key);
        if(!Array.isArray(this.table[index])){
          this.table[index] = [];
        }
        this.table[index].push([key, val]);
        this.size++;
    }

    get(key){
        const index = this.#_hash(key);
        
        const records = this.table[index];
        for(let i=0; i<records.length;i++){
            if(records[i] === key){
                return records[i];
            }
        }
        return undefined
    }
    remove(key){
        const index = this.#_hash(key);
        const records = this.table[index];
        if(records){
          delete this.table[index];
        }  
        return undefined
    }
    
}
export default HashTable;
