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
    //let maxWidthName=0;
    //let maxWidthDate=0;
    //let maxWidthComment=0;
    for(let i=0;i<result.length;i++){
        let tableResult=result[i].replace('//'+' TODO','').split(';');
        if(tableResult.length<2){//Случай когда нет имени и даты
            comment=tableResult;
            res.push(' |'+" ".repeat(10)+' |'+" ".repeat(10)+'  |'+comment)
        }
        else{
        for(let j=0;j<tableResult.length;j++){
                if(tableResult[0]===undefined){name=''}else{name=tableResult[0];}
                if(tableResult[1]===undefined){date=''}else{date=tableResult[1];}
                if(tableResult[2]===undefined){comment=''}else{comment=tableResult[2];}
                //Тут идет подбор максимальной строки, можно еще через, можно через массивы и sort, но я не доперла 
                //if(tableResult[0].length>maxWidthName){
                  //  maxWidthName=tableResult[0].length;
                //}
                //if(tableResult[1].length>maxWidthDate){          
                //  maxWidthDate=tableResult[1].length;           
                //}
                //if(tableResult[2].length>maxWidthComment){
                  //  maxWidthComment=tableResult[2].length;
                //}
                if(name.length<1&&date.length<1){
                    res.push('| '+" ".repeat(10)+' |'+" ".repeat(10)+' |'+" ".repeat(10)+' |');
                }
                var resultName = name.slice(0, 10) + (name.length > 10 ? "" : " ".repeat(10-name.length));
                //var resultDate = date.slice(0, 10) + (date.length > 10 ? "" : " ".repeat(10-date.length));
                //var resultComment = comment.slice(0, 50) + (comment.length > 50 ? "" : " ".repeat(50-comment.length));
        }
        res.push('| '+resultName+' |'+date+' |'+comment+' |');
    }
}
    
for(let el=0;el<res.length;el++){
        console.log(res[el]);
    }
}

module.exports = {
    show
};