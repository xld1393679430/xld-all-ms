const arr1 =  ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 
const arr2 = ['A', 'B', 'C', 'D', 'F']

var c = [...arr1, ...arr2.map(item => item + '3')].sort().map(item => {
    if(item.endsWidth('3')) {
        item = item.split
    }
})