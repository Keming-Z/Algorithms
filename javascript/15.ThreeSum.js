/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort(function(a,b) {return a - b;})
    var rst = [];
    for(let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i] === nums[i-1]) continue;
        var target = -nums[i];
        var j = i + 1, k = nums.length - 1;
        while(j < k) {
            if(nums[j] + nums[k] === target) {
                rst.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while(j<k && nums[j] === nums[j-1]) j++;
                while(j<k && nums[k] === nums[k+1]) k--;
            } else if(nums[j] + nums[k] > target){
                k--;
            } else {
                j++;
            }
        }
    }
    return rst;
};