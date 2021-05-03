
function longestPalindromicSubstringBruteForce(s){

  let chars = [...s]
  if(s === chars.reverse().join('')){
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

function longestPalindromicSubstring(s){
  
  if(s === [...s].reverse()){
    return s
  }
  
  let longest = s[0]
  let palindromes = []

  // Look for 2 letter palindromes

  for(let i = 0; i < s.length; i++){

    if(isPalindromic(s.substr(i, 2))){
      if(isPalindromic(s.substr(i, 3))){
        let j = 3
        while(isPalindromic(s.substr(i, j))){
          i -= 1
          j += 2
        }
        let palindrome = s.substr(i + 1, j - 2)
        longest = longest.length > palindrome.length ? longest : palindrome
        i += j
      }else{
        let j = 2
        while(isPalindromic(s.substr(i, j))){
          i -= 1
          j += 2
        }
        let palindrome = s.substr(i + 1, j - 2)
        longest = longest.length > palindrome.length ? longest : palindrome
        i += j
      }
    }else if(isPalindromic(s.substr(i, 3))){
      let j = 3
      while(isPalindromic(s.substr(i, j))){
        i -= 1
        j += 2
      }
      let palindrome = s.substr(i + 1, j - 2)
      longest = longest.length > palindrome.length ? longest : palindrome
      i += j
    }

  }
  return longest
}

function isPalindromic(string){

  return string === string.split('').reverse().join('')

}