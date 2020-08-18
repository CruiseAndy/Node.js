
let reverseRlt = {};
let tmpArr = [];

const JSONReverse = obj => {
  if (obj == null || typeof(obj) == 'undefined' || Array.isArray(obj))
    return 'input data type fail';
    
  for (let key in obj) {
    if (!obj.hasOwnProperty(key))
      return 'nothing in object';
  }
  
  exeReverse(obj);
  
  reverseRlt = { [tmpArr[1]]: tmpArr[0] }
  for(let index = 2; index < tmpArr.length; index++) {
    reverseRlt = { [tmpArr[index]]: reverseRlt }
  }
  
  return reverseRlt;
}

const exeReverse = obj => {
  let tmpData = Object.entries(obj)[0];
  tmpArr.push(tmpData[0])
  
  if (typeof(tmpData[1]) == 'object') {
    exeReverse(tmpData[1])
  }
  else {
    tmpArr.push(tmpData[1])
  }
  
//   if (typeof(tmpData[1] == 'object') {
//       return { [exeReverse(tmpData[1])]: tmpData[0] }
//   }
  
//   if (typeof(tmpData[1]) != 'object') {
//     return { [tmpData[1]]: tmpData[0] };
//   }
//   else {
//     return { [exeReverse(tmpData[1])]: tmpData[0] }
//   }
}

export default JSONReverse
