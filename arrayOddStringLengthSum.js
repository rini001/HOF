var arr = [ "abc", "de","cdefg"];

var strlength = arr.map(function(el) {
 if(el.length%2==1){
     return el.length
 }
 else{
     return 0
 }
});
var sum=function(ac,el){
    return ac+el
}
var ans=strlength.reduce(sum)
console.log(ans)
