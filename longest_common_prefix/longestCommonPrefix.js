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

