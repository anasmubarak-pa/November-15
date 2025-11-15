function getValueByPath(obj:Record<string,number|object>,path:string)
{
    let elements = path.split('.')
    let returnVal = structuredClone(obj)
    for(let element of elements)
    {
        returnVal = returnVal[element]
    }
    return returnVal
}

console.log(getValueByPath({ a: { b: { c: 42 } } },"a.b.c"))
console.log(getValueByPath({ a: { b: { c: 42 } } },"a.b.x"))

function testOuput(recieved:Record<string, number | object>,expected:number|undefined)
{
    JSON.stringify(recieved)===JSON.stringify(expected)?console.log('Test Pass'):console.log('test fail')
}

testOuput(getValueByPath({ a: { b: { c: 42 } } },"a.b.c"),42)
testOuput(getValueByPath({ a: { b: { c: 42 } } },"a.b.x"),undefined)
testOuput(getValueByPath({ a: { b: { c: {d:42} } } },"a.b.x"),undefined)
testOuput(getValueByPath({ a: { b: { c: {d:42} } } },"a.b.c.d"),42)
testOuput(getValueByPath({ a: { b: { c: {d:42} },e:7 } },"a.e"),7)
testOuput(getValueByPath({ a: { b: { c: {d:42},e:7 } } },"a.b.e"),7)
testOuput(getValueByPath({ a:1 },"a"),1)