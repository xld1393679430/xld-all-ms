/* 
实现一个字符串匹配算法，从长度为 n 的字符串 S 中，
查找是否存在字符串 T，T 的长度是 m，若存在返回所在位置
*/

// 方法一：
const find = (S, T) => S.search(T)

// 方法二：
const find = (S, T) => {
  const matched = S.match(T) 
  return matched ? matched.index : -1 
}

// 方法三：
const find = (S,T) => S.indexOf(T)
