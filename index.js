function myEach(collection, callback) {
    let values = []

    if(collection instanceof Array) {
        values = collection.slice()
    } else {
        values = Object.values(collection)
    }

    for (let value of values){
        callback(value)
    }
    return collection
}

function myMap(collection, callback) {
    let values = []

    if(collection instanceof Array) {
        values = collection.slice()
    } else {
        values = Object.values(collection)
    }

    let resultArray = []
    for (let value of values) {
        resultArray.push(callback(value))
    }
    return resultArray
}

function myReduce(collection, callback, acc=0) {
    let values = []

    if(collection instanceof Array) {
        values = collection.slice()
    } else {
        values = Object.values(collection)
    }

    if (!acc) {
        acc = values[0]
        values = values.slice(1)
    }
    for (let value of values) {
        acc = callback(acc, value, collection)
    }
    return acc
}

function myFind(collection, predicate) {
    let values = Object.values(collection)
    if (collection instanceof Array) {
      values = collection.slice()
    }
    for (let value of values) {
        if (predicate(value)) {
            return value
            break
        }
    }
    return undefined
}

function myFilter(collection, predicate) {
    let values = Object.values(collection)
    let result = []
    if (collection instanceof Array) {
        values = collection.slice()
    }
    for (let value of values) {
        if (predicate(value)) {
            result.push(value)
        }
    }
    return result
}

function mySize(collection) {
    let values = Object.values(collection)
    if (collection instanceof Array) {
        values = collection.slice()
    }
    return values.length
}

function myFirst(array, n=1) {
    if (n === 1) {
        return array[0]
    } else {
        return array.slice(0,n)
    }
}

function myLast(array, n=-1) {
    if (n === -1) {
        return array[array.length - 1]
    } else {
        return array.slice(-n)
    }
}

function myKeys(object) {
    return Object.keys(object)
}

function myValues(object) {
    return Object.values(object)
}