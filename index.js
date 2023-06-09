class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = []
    }
    this.data[address].push([key, value])
  }
  get(key) {
    let address = this._hash(key);
    let currentBucket = this.data[address]
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
}

const myhashTable = new HashTable(50);
myhashTable._hash("grapes")
myhashTable.set("grapess", 10000)
myhashTable.set("apples", 50)

class HashTableInterViewQuestion {
  repeatedNumber(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i+1; j < array.length; j++) {
        if(array[i] === array[j]){
          return array[i];
        }
      }
    }
    return undefined
  }
  firstRecurringCharacter(array){
    let hashMap = {}
    for (let i = 0; i < array.length; i++) {
        if(hashMap[array[i]]){
        return array[i];
      }else{
        hashMap[array[i]] = i
      }
    }
  }
}
const hashinterviewQuestion = new HashTableInterViewQuestion()
console.log(hashinterviewQuestion.firstRecurringCharacter([2,3,4,3]))