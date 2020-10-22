function palindrome(str) {
  let a = str.length - 1;
  let b = Math.floor(str.length / 2);
  for (var i = 0; i < b; ++i) {
      if (str[i] != str[a - i])
       {
          console.log("false");
          break;
      }
  
  else{
 console.log("true");
  }
}
}
palindrome("dad")