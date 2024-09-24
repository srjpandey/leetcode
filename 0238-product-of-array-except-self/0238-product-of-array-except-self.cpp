class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n=nums.size();
        int t=1,c=0;
        for(int i=0;i<n;i++)
        {
            
            if(nums[i]!=0)
            {
               
                t=t*nums[i];
            }
            else
            {
                c++;
            }
            
        }
       
        if(c>=2)
        {
            for(int i=0;i<n;i++)
            {
                nums[i]=0;
            }
            return nums;
        }
        else if(c==1)
        {
            for(int i=0;i<n;i++)
            {
                if(nums[i]!=0)
                {
                    nums[i]=0;
                }
                else
                {
                    nums[i]=t;
                }

            }
            return nums;
        }
        else
        {
            for(int i=0;i<n;i++)
            {
                nums[i]=t/nums[i];
            }
            return nums;
        }
        
    }
};