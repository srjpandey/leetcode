function countBits(n: number): number[] {
    let arr=Array(n+1).fill(0);
    arr[0]=0;
    const power2=(num: number): number=>{
        let c=0;
        while(num>0){
            c+=num&1;
            num=num>>1;
        }
        return c;
    }
    const isEven=(num: number): boolean=>num%1==0
    for(let i=1;i<=n;i++){
        if(isEven(i)){
            arr[i]+=power2(i);
        }
        else{
            arr[i]=arr[i-1]+1;
        }
    }
    return arr;
};