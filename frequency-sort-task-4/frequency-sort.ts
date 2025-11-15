function frequencySort(arr:Array<number>)
{
    let countMap = new Map()
    for(let number of arr)
    {
        countMap.set(number,(countMap.get(number)|0)+1)
    }
    let orderArray = Array.from(countMap.keys()).sort((a,b):number=>{
        if(countMap.get(b)<countMap.get(a)) return b-a
        if(countMap.get(a)==countMap.get(b)&&b>a) return a-b
        return 0
    })
    let retutrnArray:Array<number> = []
    orderArray.forEach((e)=>{
        for(let i=0;i<countMap.get(e);i++)
        {
            retutrnArray.push(e)
        }
    })
    return retutrnArray
}

console.log(frequencySort([4,5,6,5,4,3]))
// console.log(frequencySort([5,4,6,5,4,3]))
// console.log(frequencySort([6,4,6,5,4,3,7,7]))
// console.log(frequencySort([6,4,6,5,4,7,3,7,7]))
// console.log(frequencySort([2,2,1,1,3,3,3,3,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6]))

function testOuput(recieved:Array<number>,expected:Array<number>)
{
    JSON.stringify(recieved)===JSON.stringify(expected)?console.log('Test Pass'):console.log('test fail')
}

testOuput(frequencySort([4,5,6,5,4,3]),[4,4,5,5,3,6])
testOuput(frequencySort([5,4,6,5,4,3]),[4,4,5,5,3,6])
testOuput(frequencySort([6,4,6,5,4,3,7,7]),[4,4,6,6,7,7,3,5])
testOuput(frequencySort([6,4,6,5,4,7,3,7,7]),[7,7,7,4,4,6,6,3,5])
testOuput(frequencySort([2,2,1,1,3,3,3,3,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6]),[5,5,5,5,5,5,6,6,6,6,6,6,3,3,3,3,4,4,4,1,1,2,2])
testOuput(frequencySort([1,2,3,4,5]),[1,2,3,4,5])
testOuput(frequencySort([1,2,3,4,5,5]),[5,5,1,2,3,4])