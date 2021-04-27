def search_bst(root, val)
    
  if root.val == val
      return root
  elsif root && root.val > val
      return search_bst(root.left, val) if !!root.left
  elsif root.val < val
      return search_bst(root.right, val) if !!root.right
  end
  
  return nil
  
end