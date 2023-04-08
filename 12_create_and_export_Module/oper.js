const add = (a, b) => {
    return a + b
}

const name = 'chirag'

const sub = (a, b) => {
    return a - b
}

// For Exporting (private scope ko public kar diya)
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.name = name;

// Alternative for above
module.exports = {add, sub, name}