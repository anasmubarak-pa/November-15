//2,3,5,7,11,13,17

function findPrime(num:number)
{
    let primeCount = 0
    let lastPrime = 0
    for(let i=2;primeCount<num;i++)
    {
        let primeFlag = 0
        for(let j=2;j<=i/2;j++)
        {
            if(i%j==0)
            {
                primeFlag = 1
                break
            }
        }
        if(primeFlag)
        {
            primeFlag = 0
            continue
        }
        primeCount++
        lastPrime = i
    }
    return lastPrime
}

function testOuput(recieved:number,expected:number)
{
    JSON.stringify(recieved)===JSON.stringify(expected)?console.log('Test Pass'):console.log('test fail')
}

// console.log(findPrime(7))
console.log(findPrime(10001))
testOuput(findPrime(1),2)
testOuput(findPrime(2),3)
testOuput(findPrime(3),5)
testOuput(findPrime(4),7)
testOuput(findPrime(5),11)
testOuput(findPrime(6),13)
testOuput(findPrime(7),17)
testOuput(findPrime(8),19)