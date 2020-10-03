function sortImportance (files) {
    const todoArray = files.map(file =>  file.split('\n'))
    let result = []
    let regEx = /\/\/ TODO.*$/gim
    for (let item of todoArray){
        for (let str of item){
            if (str.match(regEx)){
                result.push(str
                    .slice(str.indexOf('//')))
            }
        }
    }
    let imp = []
    let other = []
    let excl = / *!$/gim
    for (let item of result){
        if (item.match(excl)) imp.push(item)
        else other.push(item)
    }
    imp.sort(function(a, b){
        return a.match(excl).length - b.match(excl).length
    })
    result = imp.concat(other)
    console.log(result) 
}

module.exports = {
    sortImportance
};