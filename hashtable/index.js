import HashTable from "./HashTable.js";


function main(){
  const newHashTable = new HashTable();
  newHashTable.set('prova', 1)    

  newHashTable.set('prova', 2)    
  newHashTable.set('prova', 3)    
  newHashTable.set('prova-1', 4)    
  newHashTable.set('prova', 5)    
  newHashTable.set('prova', 6)
  console.log(JSON.stringify(newHashTable)) 
}
main();
