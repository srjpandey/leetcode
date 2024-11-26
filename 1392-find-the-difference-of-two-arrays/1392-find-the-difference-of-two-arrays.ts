function findDifference(nums1: number[], nums2: number[]): number[][] {
    return [[...new Set(nums1.filter(item=>!nums2.includes(item)))],[...new Set(nums2.filter(item=>!nums1.includes(item)))]]
};