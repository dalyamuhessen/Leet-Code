 var longestCommonPrefix=function(strs){
    var pre=strs[0];
    for(var i=0;i<strs.length;i++){
      while(strs[i].indexOf(pre)!==0){
        pre=pre.slice(0,pre.length-1);
        if(pre=="") return "";
      }

    }
  return pre;

}
strs=["flower","flow","flight"];
// strs = ["dog","racecar","car"];
console.log(longestCommonPrefix(strs));