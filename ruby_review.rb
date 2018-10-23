def unflatten(flat)
  unflat = []
  flat.each_with_index do |elem, idx|
    next if unflat.flatten.size > flat[0...idx].size
    unflat << (elem < 3 ? elem : flat[idx..-1].take(elem))
  end
  unflat
end

p unflatten([ 1, 4, 5, 2, 1, 2, 4, 5, 2, 6, 2, 3, 3 ])

# [1, [4, 5, 2, 1], 2, [4, 5, 2, 6], 2, [3, 3]]


# def unflatten(list)
#   result = []
#   i = 0

#   while i < list.length
#     if list[i] < 3
#       result << list[i]
#       i += 1
#     else
#       new_sub = list[i...(i + list[i])]
#       result << new_sub
#       i += list[i]
#     end
#   end

#   result
# end
