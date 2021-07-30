// 6. ZigZag Conversion
// https://leetcode.com/problems/zigzag-conversion/

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:
// string convert(string s, int numRows);

// Example 1:
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// Example 2:
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// Example 3:
// Input: s = "A", numRows = 1
// Output: "A"

let convert = (s, numRows) => {
  if(s.length < numRows || numRows === 1) return s;
  const {chars, grid} = config(s, numRows)

  let row = 0;
  let column = 0;
  let zig = true;

  for(let i = 0; i < chars.length; i++){
    let cur = chars[i]
    if(zig){
      if(timeToZag(numRows, row)){
        grid[row][column] = cur
        zig = !zig
        row--
        column++
      }else{
        grid[row][column] = cur
        row++
      }
    }else{
      if(row === 0){
        grid[row][column] = cur
        row++;
        zig = !zig
      }else{
        grid[row][column] = cur
        row--
        column++
      }
    }
  }
  return parseGrid(grid)
}

let parseGrid = (grid) => {
  let parsed = ''
  grid.forEach(row => {
    parsed += row.join('')
  })
  return parsed
}

let timeToZag = (numRows, row) => {
  return (numRows - 1) === row
}

let config = (s, numRows) => {
  const chars = s.split('')
  const grid = []
  for(let i = 0; i < numRows; i++){
    grid.push([])
  }

  return { chars, grid }
}

let convert_two = (s, numRows) => {
  let rows = []
  let row = 0
  let zig = true

  for(let i = 0; i < s.length; i++){
    if(!rows[row]){
      rows[row] = s[i]
    }else{
      rows[row] += s[i]
    }
    if(zig){
      if(row < (numRows - 1)){
        row++
      }else{
        row--
        zig = !zig
      }
    }else{
      if(row > 0){
        row--
      }else{
        row++
        zig = !zig
      }
    }
  }
  return rows.join('')
}
