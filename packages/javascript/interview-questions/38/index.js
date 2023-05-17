/* 
var a = ?;
if(a == 1 && a == 2 && a == 3){
 	console.log(1);
}
*/

// 1
var a = {
    array: [3, 2, 1],
    valueOf: function() {
		console.log(this.array, 'array');
        return this.array.pop()
    }
}

// 2
// Object.defineProperty(window, 'a', {
//     get: function() {
//         if (this.value) {
//             return this.value += 1
//         } else {
//             return this.value = 1;
//         }
//     }
// });

// 3
// var a = {
//     i: 1,
//     toString: function() {
//         return a.i++
//     }
// }

if(a == 1 && a == 2 && a == 3){
 	console.log(1);
}