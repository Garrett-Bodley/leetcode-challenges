// 14. Longest Common Prefix
// 
// Write a function to find the longest common prefix string amongst an array of strings.
// 
// If there is no common prefix, return an empty string "".
// 
// https://leetcode.com/problems/longest-common-prefix/

const longestCommonPrefix = (strings) => {
  if(!strings || strings.length === 0){ return "" };
  let prefix = strings[0]
  for(let i = 0; i < strings.length; i++){
    /** String.prototype.match() will create its own regex pattern. 
     * You can use concatenation to create complex regex queries! 
     */
    while(!string[i].match("^" + prefix)){
      prefix = prefix.substr(0, prefix.length - 1)
    }
  }
  return prefix
}

const longestPrefixVerticalScan = (strings) => {
  if(!strings || strings.length === 0){ return "" }
  // Iterates through each char of strings[0]
  for(let i = 0; i < strings[0].length; i++){
    let char = strings[0][i]
    // Iterates through each word of strings, skipping the first word
    for(let j = 1; j < strings.length; j++){
      if(i === strings[j].length || strings[j].charAt(i) !== char){
        return strings[0].substring(0, i)
      }
    }
  }
}