// var arr = ["abcd","cdea","cdf","edca"]
// function snakeCase(ac,el){
//     return ac+"_"+el
//   }
//   var newArr=arr.reduce(snakeCase)
//   console.log(newArr)
var arr = ["rini_debnath", "riniDebnath", "tista_debnath_home"];

var ans = arr.filter(function (el) {
    return el.includes("_")
})

console.log(ans);