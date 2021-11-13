// 746. Min Cost Climbing Stairs
// https://leetcode.com/problems/min-cost-climbing-stairs/

// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. 
// Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.




// Top down recursive approach. No dynamic programming, leading to exponential time complexity O(2^n)
const minCostClimbingStairsRecursive = cost => {
  const go = i => {
    if(i < 0) return 0
    if(i === 0 || i === 1) return cost[i]
    return cost[i] + Math.min(go(i - 1), go(i - 2))
  }
  return Math.min(go(cost.length - 1), go(cost.length - 2))
}

// Top down recursive approach w/Dynamic Programming
const minCostClimbingStairsRecursiveDp = (cost) => {
  const n = cost.length
  const m = []
  const go = (cost, i) => {
    if(i < 0) return 0
    if(i === 0 || i === 1) return cost[i]
    if(!m[i]){
      m[i] = cost[i] + Math.min(go(cost, i - 1), go(cost, i - 2))
    }
    return m[i]
  }
  return Math.min(go(cost, n - 1), go(cost, n - 2))
};

// Convert to iterative approach

const minCostClimbingStairsIterative = cost => {
  const n = cost.length;
  const memo = new Array(cost.length);
  for(let i = 0; i < n; i++){
    if(i < 2) memo[i] = cost[i]
    else memo[i] = cost[i] + Math.min(memo[i - 1], memo[i - 2])
  }
  return Math.min(memo[n - 1], memo[n - 2])
}

// Only save last two steps
const minCostClimbingStairsIterativeOptimized = cost => {
  const n = cost.length;
  let one = cost[0]
  let two = cost[1]
  for(let i = 2; i < n; i++){
    let cur = cost[i] + Math.min(one, two)
    let one = two
    let two = cur
  }
  return Math.min(one, two)
}