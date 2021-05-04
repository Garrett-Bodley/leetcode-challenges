
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

  // Look for 2 letter palindromes

  for(let i = 0; i < s.length; i++){

    if(isPalindromic(s.substr(i, 2))){
      if(isPalindromic(s.substr(i, 3))){
        let j = i + 2
        while(s[i] === s[j] && i > 0 && j < s.length){
          i --
          j ++
        }
        let palindrome = s.substring(i, j + 1)
        debugger
        longest = longest.length > palindrome.length ? longest : palindrome
        i += j
      }else{
        let j = i + 1
        let palindrome = s.substring(i, j)
        while(s[i] === s[j] && i > 0 && j < s.length){
          i--
          j++
        }
        let palindrome = s.substr(i + 1, j - 2)
        debugger
        longest = longest.length > palindrome.length ? longest : palindrome
        i += j
      }
    }else if(isPalindromic(s.substr(i, 3))){
      let j = 3
      while(isPalindromic(s.substr(i, j)) && i > 0 && j < s.length - i){
        i -= 1
        j += 2
      }
      let palindrome = s.substr(i + 1, j - 2)
      debugger
      longest = longest.length > palindrome.length ? longest : palindrome
      i += j
    }

  }
  return longest
}

function longestPalindromicSubstringBeta(s){

  if(isPalindromic(s)){
    return s
  }else{

    let longest = s[0]

    for(let i = 0; i < s.length; i++){
      let sub_2 = s.substring(i, i + 2)
      let sub_3 = s.substring(i, i + 3)
      debugger
      if(isPalindromic(sub_2) && !isPalindromic(sub_3)){
        let j = i + 2
        while(s[i - 1] === s[j + 1] && i > 0 && j < s.length){
          i--
          j++
        }
        let substring = s.substring(i, j)
        longest = longest.length > substring.length ? longest : substring
        i = j

      }else if(isPalindromic(sub_3)){
        let j = i + 3
        while(s[i - 1] === s[j + 1] && i > 0 && j < s.length){
          i--
          j++
        }
        let substring = s.substring(i, j)
        longest = longest.length > substring.length ? longest : substring
        i = j
      }

    }

    return longest
  }
}

function longestPalindromicSubstringFromMiddle(s){
  if(s === null || s.length < 1){
    return ""
  }
  let start = 0;
  let end = 0;

  for(let i = 0; i < s.length; i++){
    let len1 = expandFromMiddle(s, i, i)
    let len2 = expandFromMiddle(s, i, i + 1)
    let len = Math.max(len1, len2)
    if(len > end - start){
      start = parseInt(i - (len - 1)/2)
      end = parseInt(i + (len - 1/2))
    }
  }
  return s.substring(start, end)
}

function isPalindromic(string){

  return string === string.split('').reverse().join('')

}


// helper method for expanding from middle
function expandFromMiddle(string, left, right){
  if(string == null || left > right){
    return 0
  }
  while(left >= 0 && right < string.length && string[left] === string[right]){
    left--
    right++
  }

  return right - left - 1
}