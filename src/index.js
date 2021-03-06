module.exports = function zeros(expression) { 
  let res = 1; 
  let factorArr=expression.split('*'); 
  factorArr.forEach((item)=> { 
  let delta = item.indexOf('!!')>=0? 2 : 1; 
  var num = +item.replace(/!/g,''); 
  for (var i = num; i > 1; i = i - delta) { 
  res = multiply(res.toString(), i.toString()); 
  } 
  }) 
  let j = 0; 
  let k = res.split('').reverse(); 
  while (k[j] === '0'){ 
  j++; 
  } 
  return j; 
  }


function multiply(first, second) {
  var result = [];
  
    for (var i = 0; i < first.length; i++) {
      for (var j = 0; j < second.length; j++) {
        var tmp = i + j;
  
        if (!result[tmp]) {
          result[tmp] = 0;
        }
  
        result[tmp] = result[tmp] + (first[i] * second[j]);
      }
    }
  
    for (var k = result.length-1; k >= 0; k--) {
      if (result[k] >= 10) {
        var temp = String(result[k]);
  
        if (k == 0) {
          result.unshift(0);
          k++;
        }
  
        result[k] = Number(temp.slice(-1));
        result[k-1] = result[k-1] + Number(temp.slice(0, -1));
      }
    }

    return result.join("");
  }
