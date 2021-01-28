//Given two arrays, write a function to compute their intersection.

function occurrence(arr){

  const map = new Map();

  for(let i of arr){
    map.set(i, (map.get(i) || 0) + 1)
  }
  
  return map
}

function intersection(nums1,nums2){
  
  let nums1_map = occurrence(nums1.sort((a,b) => a-b))
  let nums2_map = occurrence(nums2.sort((a,b) => a-b))
  console.log(nums1_map)
  console.log(nums2_map)
  
  for(let [i, n1count] of nums1_map){
    const n2count = nums2_map.get(i)
    let num = n2count - n1count
    console.log(num)
  }
}
intersection([1,2,2,1],[2,2,2,2,1])

console.log([3,2,3,4,5,6,3,2,1,10,23].sort((a,b) => a-b))