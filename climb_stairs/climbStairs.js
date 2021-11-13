// 70. Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


const climbStairsRecursive = function(n, memo = [0, 1, 2, 3]) {
  if(!memo[n]){
    memo[n] = climbStairs(n - 2, memo) + climbStairs(n - 1, memo)
  }
  return memo[n]
};

const climbStairsIterative = n => {
  const memo = [0, 1, 2, 3]
  for(let i = 3; i < n + 1; i++){
    memo[i] = memo[i - 1] + memo[i - 2]
  }
  return memo[n]
}