
function longestPalindromicSubstringBruteForce(s){

  let chars = [...s]
  if(chars.join('') === chars.reverse().join('')){
    return s
  }

  let substrings = []
  // Find every substring
  for(let i = 0; i < chars.length; i++){
    substrings.push(chars[i])
    for(let j = i + 1; j < chars.length; j++){
      let sliced = chars.slice(i, j + 1)
      // Check to see if they're palindromic
      if(sliced.join('') === sliced.reverse().join('')){
        substrings.push(sliced.join(''))
      }
    }
  }
  // return the longest palindromic substring
  let longest = substrings.reduce((max, current) => max.length > current.length ? max : current, "")
  if(longest.length === 1){
    return s[0]
  }else{
    return longest
  }

}