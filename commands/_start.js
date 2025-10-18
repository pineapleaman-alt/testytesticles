/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var oldUser = User.GetPropery("oldUser")

if(oldUser){ return } 
User.setProperty("oldUser", true);
  var totalUsers = Libs.ResourcesLib.anotherChatRes("total", "global")
  totalUsers.add(1)
  var balance = Libs.ResourcesLib.userRes("balance")
  balance.add(0.5)
  Bot.sendMessage("welcome bonus 0.5 TRX")

function onAttracted(refUser) {
   Bot.run({
    command: "/lvl1",
    options: { hel: hel }
  })
}
Libs.ReferralLib.track({
  onAttracted: onAttracted
})