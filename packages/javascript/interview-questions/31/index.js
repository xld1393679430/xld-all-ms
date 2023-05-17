/* 
改造下面的代码，使之输出0 - 9
for (var i = 0; i< 10; i++){
   setTimeout(() => {
   console.log(i);
   }, 1000)
}
 */


// 1： setTimeout 参数
// for (var i = 0; i < 10; i++) {
//     setTimeout((i) => {
//         console.log(i);
//     }, 1000, i)
// }

// 2：函数
// function fn(i) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000)
// }
// for (var i = 0; i < 10; i++) {
//     fn(i)
// }

// 3：函数
// for (var i = 0; i < 10; i++) {
//     (function(index) {
//         setTimeout(() => {
//             console.log(index);
//         }, 1000)
//     })(i)
// }

// 4: let
// for (let i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000)
// }