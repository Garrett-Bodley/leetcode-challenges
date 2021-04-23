def two_sum(nums, target)

  #single pass solution

  hash = {}
  
  nums.each_with_index do |num, index|
      if hash[target-num]
         return [index, hash[target-num]] 
      end
      hash[num] = index
  end
  
  # looping twice, once to create hash, second to retrieve answer
  
  # nums.each_with_index do |num, index|
  #   hash[num] = index
  # end

  # nums.each_with_index do |num, index|
  #    if hash[target-num] && hash[target-num] != index
  #        return [index, hash[target-num]]
  #    end
  # end
  
  # using brute force. Spoofing a classic for loop because ruby is too syntactically clean lol

  # i = 0
  # while i < nums.length
  #     j = i + 1
  #     while j <  nums.length
  #         if nums[j] == target - nums[i]
  #             return [j, i]
  #         end
  #         j += 1
  #     end
  #     i += 1
  # end
end