
function longestSubstring(s){
  let sub = []
  let i = 0
  let array = Array.from(s)
  array.forEach((c) => {
      if(!sub.includes(c)){
          sub.push(c)
      }else{
          let index = sub.findIndex((el) => el === c)
          sub.push(c)
          for(let j = 0; j < index + 1; j++){
              sub.shift()
          }
      }
      if(sub.length > i){
          i = sub.length
      }
      
  })
  return i
};