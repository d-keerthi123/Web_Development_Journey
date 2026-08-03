const sum=(a,b)=>a+b;
const mul=(a,b)=>a*b;

// module.exports.mul=(a,b)=>a*b; or
//exports.mul=(a,b)=>a*b;
const g=9.18;
const pi=3.14;


// module.exports=123;

// let obj={
//     sum:sum,
//     mul:mul,
//     g:g,
//     pi:pi,
// }
// module.exports=obj;


module.exports={
    sum:sum,
    mul:mul,
    g:g,
    pi:pi,
};