function groupAnagrams(words:Array<string>)
{
    let vmap = new Map()
    for(let word of words)
    {
        let wordArray = Array(26).fill(0)
        for(let letter of word)
        {
            wordArray[letter.charCodeAt(0)-97]++
        }
        let stringArray = JSON.stringify(wordArray)
        vmap.get(stringArray)?vmap.get(stringArray).push(word):vmap.set(stringArray,[word])
    }
    return Array.from(vmap.values())
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

function testOuput(recieved:Array<string>,expected:Array<Array<string>>)
{
    JSON.stringify(recieved)===JSON.stringify(expected)?console.log('Test Pass'):console.log('test fail')
}

testOuput(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]),[ ['eat','tea', 'ate' ], [ 'tan', 'nat' ], ['bat'] ])
testOuput(groupAnagrams(["hi", "Hello"]),[ ['hi'], [ 'Hello'] ])
testOuput(groupAnagrams(["dog", "god",'cat']),[ ['dog','god'], [ 'cat'] ])
testOuput(groupAnagrams(["ii", "ii",'iii','i']),[ ['ii','ii'],['iii'],[ 'i'] ])
testOuput(groupAnagrams(["ab", "ba"]),[ ['ab','ba'] ])
testOuput(groupAnagrams(["abcd", "dcba",'bacd']),[ ['abcd','dcba','bacd'] ])
testOuput(groupAnagrams(["i", "ii",'ii','i']),[ [ 'i','i'],['ii','ii']])