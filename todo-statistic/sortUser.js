function sortUser (files) {
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
    for (let item of result){
        if (item.includes(';')){ 
            imp.push(item)
        }
        else other.push(item)
    }
    imp.sort(function(a, b){
        a = a.toLowerCase().slice(8,)
        b = b.toLowerCase().slice(8,)
        if (a < b) return -1
        if (a > b) return 1
        return 0
    })
    result = imp.concat(other)
    console.log(result) 
}

module.exports = {
    sortUser
};