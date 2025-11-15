function delayedNotification(notifications:Array<string>)
{
    for(let i=1;i<=notifications.length;i++)
    {
        setTimeout(()=>console.log(notifications[i-1]),i*2000)
    }
}

delayedNotification(["Welcome!", "Profile updated", "New message received"])