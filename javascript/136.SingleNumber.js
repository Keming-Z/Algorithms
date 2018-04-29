/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var rst = 0;
    for(var i in nums) {
        rst ^= nums[i];
    }
    return rst;
};