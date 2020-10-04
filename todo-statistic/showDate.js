function showDate (files, param) {
    const todoArray = files.map(file =>  file.split('\n'))
    let result = []
    date = String(param);
    let regEx = new RegExp('\/\/ TODO.*'+date,'gi');
        for (let item of todoArray){
            for (let str of item){
                if (str.match(regEx)){
                    result.push(str
                        .slice(str.indexOf('//')))
                }
            }
        }
    if (!result.length) result.push('DateNotFound')
    console.log(result) 
}

module.exports = {
    showDate
};