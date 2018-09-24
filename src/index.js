module.exports = function solveEquation(equation) {
  var x = [];
  var str = equation.match(/\s*(?:([+-]?)\s*(\d*)\s*\*?\s*x\s*\^\s*2)?\s*(?:([+-]?)\s*(\d*)\s*\*\s*x)?\s*(?:([+-]?)\s*(\d+))?\s*/);

  var a = numberBuilder(str[1], str[2]);
  var b = numberBuilder(str[3], str[4]);
  var c = numberBuilder(str[5], str[6]);

  var D = (b * b) - (4 * a * c);
  var x1 = Math.round((- b + Math.sqrt(D)) / (2 * a));
  var x2 = Math.round((- b - Math.sqrt(D)) / (2 * a));
  x.push(x1);
  x.push(x2);
  x.sort((a,b)=>a-b);
  return x;

  function numberBuilder(sign, coef){
    if (coef == ''){
        if (sign == ''){
            return 1;
        }
        else return +(sign + 1);
    } else if (sign ==''){
        return +coef;
    } else return +(sign + coef);
  }
}