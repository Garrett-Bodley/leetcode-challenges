/** 8. String to Integer (atoi)
 * 
 * Implement the myAtoi(string s) function, which converts a string to a 32-bit 
 * signed integer (similar to C/C++'s atoi function).
 * 
 * The algorithm for myAtoi(string s) is as follows:
 * 
 * 1. Read in and ignore any leading whitespace.
 * 
 * 2. Check if the next character (if not already at the end of the string) is '-' or '+'. 
 *    Read this character in if it is either. This determines if the final result is negative or 
 *    positive respectively. Assume the result is positive if neither is present.
 * 
 * 3. Read in next the characters until the next non-digit charcter or the end of the input is 
 *    reached. The rest of the string is ignored.
 * 
 * 4. Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read,
 *    then the integer is 0. Change the sign as necessary (from step 2).
 * 
 * 5. If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer
 *    so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, 
 *    and integers greater than 231 - 1 should be clamped to 231 - 1.
 * 
 * 6. Return the integer as the final result.
 * 
 */

let myAtoi = (s) => {
  debugger
  if(!s || s.length === 0) return 0;
  let sign = 1;
  let result = 0;
  let i = 0;
  
  while(i < s.length && s[i] === " ") i++;
  if( i === s.length) return 0;
  
  if(s[i] === "-"){ sign = -1; i++; }
  else if(s[i] === "+"){ i++; };
  if(i === s.length) return 0;
  
  const max = (2**31) - 1;
  const min = -(2**31);
  
  while(i < s.length && s[i].match(/\d/)){
    result *= 10
    result += s.charCodeAt(i) - "0".charCodeAt(0)
    i++
  }
  result *= sign;
  
  if(result > max) return max;
  else if(result < min) return min;
  else return result;
}

let s = "42"

myAtoi(s)