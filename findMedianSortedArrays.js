/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArray = []
    const totalLen = nums1.length+nums2.length;
    const num1leng = nums1.length-1;
    const num2leng = nums2.length-1;
    if(nums1[0]>=nums2[num2leng]){
        mergedArray = nums2.concat(nums1);
    }else if(nums2[0]>=nums1[num1leng]){
        mergedArray = nums1.concat(nums2);
    }else{
        for(let i=0;i<totalLen;i++){
        const j = nums1.length-1;
        const k = nums2.length-1;
        if(j<0 || nums1[j]<nums2[k]){
            mergedArray.push(nums2.pop());
        }else{
            mergedArray.push(nums1.pop());
        }
        }
    }
    
    const length = mergedArray.length;
    const mid = length/2;
    if(length%2){
        return mergedArray[Math.floor(mid)];
    }else{
        return (mergedArray[mid]+mergedArray[mid-1])/2;
    }
};
