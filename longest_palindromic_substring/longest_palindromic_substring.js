let s = "aacabdkacaa"
document.addEventListener('DOMContentLoaded', () => {

})


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

function longestPalindromicSubstringDynamic(s){

  if(isPalindromic(s)) return s

  let table = []
  let max = 0
  let start = 0
  let length = s.length

  for(let i = 0; i < length; i++){
    let row = []
    for(let j = 0; j< length; j++){
      row.push(0)
    }
    table.push(row)
  }
  debugger
  for(let i = 0; i < length; i++){
    table[i][i] = true
    if(s[i] === s[i + 1]){
      table[i][i + 1] = true
      start = i
      max = 1
    }
  }

  for(let k = 2; k < length; k++){

    for(let i = 0; i < length - k; i++){
      let j = i + k
      if(s[i] === s[j] && table[i + 1][j - 1] === true){
        table[i][j] = true
        if(k + 1 > max){
          max = k + 1
          start = i
        }
      }
    }
  }

  return s.substr(start, max)

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

// checks if string is a Palindrome
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