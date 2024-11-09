function fullJustify(words: string[], maxWidth: number): string[] {
    let res = [], str = "", i = 0, n = words.length, x = 0;
    while( i < n ){
        if( (str + words[i]).length === maxWidth ){
            str += words[i++];
            res.push(str);
            str = "";
            x = i;
        }
        else if( (str + words[i]).length > maxWidth ){
            let j = x, cnt = maxWidth - (str.length - 1);
            while( cnt > 0 && j < i - 1 ){
                words[j++] += " ";
                cnt--;
                if( j === i - 1 && cnt > 0 )j = x
            }
            let tempStr = ""; j = x;
            while( j < i )tempStr += j < i - 1 ?  words[j++] + " " : words[j++];
            while( tempStr.length < maxWidth )tempStr += " "
            res.push(tempStr);
            str = "";
            x = i;
        }
        else str += words[i++] + " ";
    }
    if( str.length > 0 ){
        let cnt = maxWidth - str.length;
        while( cnt > 0 ){
            str += " ";
            cnt--;
        }
        res.push(str)
    }
    return res
};