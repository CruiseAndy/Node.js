
let reverseRlt = null;
let tmpArr = [];

const JSONReverse = obj => {
  if (obj == null || typeof(obj) == 'undefined' || !Array.isArray(obj))
    return 'input data type fail';
    
  for (let key in obj) {
    if (obj.hasOwnProperty(key))
      return 'nothing in object';
  }
  
  exeReverse(obj);
  
}
