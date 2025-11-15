function withTimeout(promise,ms)
{
    let randTime = Math.floor(Math.random()*ms*2+1)
    console.log(randTime)
    promise.then((e)=>console.log(e))
}

function promiseHandle(resolve,rejct)
{
    return resolve('dssdsdws')
}

withTimeout(new Promise(promiseHandle),2)