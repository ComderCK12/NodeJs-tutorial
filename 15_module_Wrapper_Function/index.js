
//IIFE (Immediately Invoked Function Expression)
// ( function(expores, require, module, _filename, _dirname) {
//     const name = 'chirag';
//     console.log(name);
// });
// It is a Module Wrapper Function and all the things declared inside it becomes private



// const name = 'chirag';
// console.log(name);

( function(expores, require, module, _filename, _dirname) {
    const name = 'chirag';
    console.log(name);
})();

// We dont need to write the part with function. It is actually the working of node's Module Wrapper Function 