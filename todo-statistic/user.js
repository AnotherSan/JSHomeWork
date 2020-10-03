function user (files, param) {
    const todoArray = files.map(file =>  file.split('\n'))
    let result = []
    name = String(param).toLowerCase();
    let regEx = 'todo ' + name + ';';
        for (let item of todoArray){
            for (let str of item){
                if (str.toLowerCase().match(regEx)){
                    result.push(str
                        .slice(str.indexOf('//')))
                }
            }
        }
    if (!result.length) result.push('UserNotFound')
    console.log(result) 
}

module.exports = {
    user
};