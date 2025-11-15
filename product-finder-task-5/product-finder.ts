function filterProducts(products:Array<{name:string,price:number}>,searchText:string)
{
    return products.filter((product)=>product.name.toLowerCase().includes(searchText.toLowerCase()))
}

console.log(filterProducts([
{ name: "Laptop", price: 60000 },
{ name: "Mouse", price: 800 },
{ name: "Monitor", price: 12000 }
],'Laptop'))

function testOuput(recieved:Array<{name:string,price:number}>,expected:Array<{name:string,price:number}>)
{
    JSON.stringify(recieved)===JSON.stringify(expected)?console.log('Test Pass'):console.log('test fail')
}

testOuput(filterProducts([
{ name: "Laptop", price: 60000 },
{ name: "Mouse", price: 800 },
{ name: "Monitor", price: 12000 }
],'Laptop'),[{ name: "Laptop", price: 60000 }])
testOuput(filterProducts([
{ name: "Laptop", price: 60000 },
{ name: "Mouse", price: 800 },
{ name: "Monitor", price: 12000 }
],'Mouse'),[{ name: "Mouse", price: 800 }])
testOuput(filterProducts([
{ name: "Laptop", price: 60000 },
{ name: "Mouse", price: 800 },
{ name: "Monitor", price: 12000 }
],'Monitor'),[{ name: "Monitor", price: 12000 }])

//lower case search
testOuput(filterProducts([
{ name: "Laptop", price: 60000 },
{ name: "Mouse", price: 800 },
{ name: "Monitor", price: 12000 }
],'laptop'),[{ name: "Laptop", price: 60000 }])
testOuput(filterProducts([
{ name: "Laptop", price: 60000 },
{ name: "Mouse", price: 800 },
{ name: "Monitor", price: 12000 }
],'mouse'),[{ name: "Mouse", price: 800 }])
testOuput(filterProducts([
{ name: "Laptop", price: 60000 },
{ name: "Mouse", price: 800 },
{ name: "Monitor", price: 12000 }
],'monitor'),[{ name: "Monitor", price: 12000 }])
testOuput(filterProducts([
{ name: "Laptop", price: 60000 },
{ name: "Mouse", price: 800 },
{ name: "Monitor", price: 12000 },
{ name: "Gaming Laptop", price: 70000 }
],'laptop'),[{ name: "Laptop", price: 60000 },{ name: "Gaming Laptop", price: 70000 }])
