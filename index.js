class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key){
    let hash = 0;
    for(let i=0; i < key.length; i++){
      hash = (hash + key.charCodeAt(i)*i) %
        this.data.length
    }
    console.log(key.charCodeAt(0));
    return hash;
  }
}

const myhashTable = new HashTable(50);
myhashTable._hash("grapesaresour=")