function restoreIpAddresses(s: string): string[] {
    let result : string[]  = []

    dfs(s,0,"","",0,result)

    return result
};

function dfs(s: string,i: number,current: string,block: string, count: number, result: string[] ){

    if(i>s.length || count>3 || block.length>1 && parseInt(block)+"" != block ||  Number(block)>255) return

    if(i==s.length){
        if(block!="" && count == 3){
            result.push(current)
        }
        else{
            return
        }
        
    }


    dfs(s,i+1,current+s[i],block+s[i],count,result)

    if(block!="")
        dfs(s,i,current+".","",count+1,result)
}