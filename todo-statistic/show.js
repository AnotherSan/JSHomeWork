function show (files) {
    const todoArray = files.map(file =>  file.split('\n'))
    let result = []
    let regEx = /\/\/ TODO.*/gi 
        for (let item of todoArray){
            for (let str of item){
                if (str.match(regEx)){
                    result.push(str
                        .slice(str.indexOf('//')))
                }
            }
        }
    let res=[];
    let name=' ';
    let date=' ';
    let comment=' ';
    for(let i=0;i<result.length;i++){
        let tableResult=result[i].replace('//'+ 'TODO','').split(';');
        if(tableResult.length<2){
            comment=tableResult;
            res.push(`' '\t | ' '\t | ${comment}\t`)
        }
        else{
        for(let j=0;j<tableResult.length;j++){
                if(tableResult[0]===undefined){name=''}else{name=tableResult[0];}
                if(tableResult[j-1]===undefined){date=''}else{date=tableResult[j-1];}
                if(tableResult[j]===undefined){comment=''}else{comment=tableResult[j];}
                var resStr=`${name}\t | ${date}\t | ${comment}\t`;
        }
        res.push(resStr);
    }
}

    for(let el=0;el<res.length;el++){
        console.log(res[el]);
    }
}
module.exports = {
    show
};