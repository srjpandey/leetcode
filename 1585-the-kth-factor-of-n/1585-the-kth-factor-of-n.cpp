class Solution {
public:
    int kthFactor(int n, int k) {
        int x=0;
        for(int i=1;i<(n/2)+1;i++)
        {
            if(n%i==0)
            {
                x++;
                if(x==k)
                {
                    return i;
                }
            }
        }if(x==k-1)
        {
            return n;
        }return -1;
    }
};