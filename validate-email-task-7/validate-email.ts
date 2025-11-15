function validation(word:string,accepted:Array<string>)
{
    for(let letter of word)
    {
        if(!((letter.toLowerCase().charCodeAt(0)>96&&letter.toLocaleLowerCase().charCodeAt(0)<123)||Number(letter)))
        {
            if(accepted.find(e=>e==letter)) continue
            return false
        }
    }
    return true
}

function validateMail(mailId:string)
{
    if(mailId.split('@').length!=2||mailId[0]=='.'||mailId.includes('..')||mailId.includes(' '))return false
    let [header,footer] = mailId.split('@')
    if(header==''||footer=='')return false
    if(!validation(header,['.','_','-']))return false
    if(footer.split('.').length!=2)return false
    let [domain,tld] = footer.split('.')
    if(!validation(domain,['-'])||tld.length<2||!validation(tld,[])||domain[0]=='-'||domain[domain.length-1]=='-') return false
    return true
}

function returnValid(emailList:Array<string>)
{
    return emailList.filter(e=>validateMail(e))
}

console.log(returnValid(["test@mail.com", "abc@", "ok@gmail.com"]))

// console.log(validateMail('@gmail.com'))
// console.log(validateMail('he2l.lo@gmail.com'))
function testOuput(recieved:Array<string>,expected:Array<string>)
{
    JSON.stringify(recieved)===JSON.stringify(expected)?console.log('Test Pass'):console.log('test fail')
}

testOuput(returnValid(["test@mail.com", "abc@", "ok@gmail.com"]),['test@mail.com',"ok@gmail.com"])
testOuput(returnValid(["test@mail.com", "abc@",'.bcd@gmail.com', "ok@gmail.com"]),['test@mail.com',"ok@gmail.com"])
testOuput(returnValid(["test@mail.com", "abc@",'.bcd@gmail.com', "ok@gmail.com"]),['test@mail.com',"ok@gmail.com"])
testOuput(returnValid(["test@mail.com", "abc@", "ok_7@gmail.com"]),['test@mail.com',"ok_7@gmail.com"])
testOuput(returnValid(["test@mail.com", "abc@", "ok_7@gmai_l.com"]),['test@mail.com'])
testOuput(returnValid(["test@e-mail.com", "abc@", "ok_7@gmai_l.com"]),['test@e-mail.com'])
testOuput(returnValid(["test@-email.com", "abc@", "ok_7@gmai_l.com"]),[])