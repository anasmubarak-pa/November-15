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
    if(!validation(domain,[''])||tld.length<2||!validation(tld,[])) return false
    return true
}

function returnValid(emailList:Array<string>)
{
    return emailList.filter(e=>validateMail(e))
}

console.log(returnValid(["test@mail.com", "abc@", "ok@gmail.com"]))

// console.log(validateMail('@gmail.com'))
// console.log(validateMail('he2l.lo@gmail.com'))