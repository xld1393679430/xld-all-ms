// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/8
// 第 11 题：将数组扁平化并去除其中重复数据，最终得到一个升序且不重复的数组 #8

var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];


    var result = Array.from(new Set(arr.flat(Infinity).sort((a, b) => a - b)))
    console.log(result);
