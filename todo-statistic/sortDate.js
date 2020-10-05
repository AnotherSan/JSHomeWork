function sortDate (files) {
    const todoArray = files.map(file =>  file.split('\n'))
    let result = []
    let year = /\d\d\d\d.*;/im;
    let date = /\d/gim;
    let regEx = /\/\/ TODO.*$/gim;
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
        if (item.match(year)) imp.push(item)
        else other.push(item)
    }
    imp.sort(function(a, b){
        a = a.match(date).join('')
        b = b.match(date).join('')
        return b - a
    })
    result = imp.concat(other)
    console.log(result) 
}

module.exports = {
    sortDate
};