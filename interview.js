// given a string, try to find the length of the longest substring that has k distinct characters

// ex: 'aaaaabbbaacccccc'
// if k = 1, answer = 6
// if k = 2, answer = 10
// if k = 3, answer = 16
// if k > 3, answer = 16

function distinctCharsBruteForce(s, k){

  // put in array? 
  // iterate through array (logic to deal with repeating)
  // check for longest
  
  let substrings_with_same_chars = []
  
  
  // break up into substrings that have the same characters
  // pushing into an array of substrings

  let i = 0

  while(i < s.length){
    if(s[i] === s[i + 1]){
      let j = i + 1
      while(s[i] === s[j]){
        j++
      }
      let sub = s.substring(i, j);
      substrings_with_same_chars.push(sub)
      i = j
    }else{
      substrings_with_same_chars.push(s[i])
      i++
    }
  }

  // ex: 'ababababab'

  // ex: 'aaaaabbbaacccccc'
  //  index       
  // [aaaaa, bbb, aa, cccccc]
  // if k = 2, answer = 10

  let max = 1
  let distinct = 0

  for(let i = 0; i < substrings_with_same_chars.length; i++){
    let current = substrings_with_same_chars[i]
    let j = i + 1
    while(distinct < k && j < substrings_with_same_chars.length){
      // for every case except the first iteration
      if([...current].includes(substrings_with_same_chars[j][0])){
        current.concat(substrings_with_same_chars[j])
      }else{
        current.concat(substrings_with_same_chars[j])
        distinct++
      }
      j++
    }

    if((current.length) > max){
      max = current.length
    }

    return max

  }


}

// how many of each character, and where in string

// sliding window
//  