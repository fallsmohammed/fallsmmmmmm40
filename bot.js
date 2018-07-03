const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


 

client.on ('message'، async message => {
const ms = تتطلب ("ms")؛
إذا عاد (message.author.omar)؛
if (! message.content.startsWith (prefix)) return؛
إذا (! message.channel.guild) ارجع message.channel.send ('** هذا الأمر فقط للسيرفرات **'). ثم (m => m.delete (5000))؛
إذا (! message.member.hasPermission ('MANAGE_ROLES'))
if (! message.guild.member (client.user) .hasPermission ("MANAGE_ROLES")) return message.reply ("** ليس لدي` MANAGE_ROLES` إذن ** ") ، ثم (msg => msg. حذف (6000))
var command = message.content.split ("") [0]؛
command = command.slice (prefix.length)؛
var args = message.content.split ("") .slice (1)؛
    if (command == "mute") {
    السماح tomute = message.guild.member (message.mentions.users.first () || message.guild.members.get (args [0]))؛
    if (! tomute) return message.reply ("** Should عليك المنشن اولاّ **: x:") .then (m => m.delete (5000))؛
    if (tomute.hasPermission ("MANAGE_MESSAGES")) return message.channel.send ('** للأسف لا أمتلك صلاحية ** `MANAGE_MASSAGEES`')؛
    اسمحوا muterole = message.guild.roles.find (`name` ،" كتم ") ؛
    // بداية من إنشاء دور
    إذا (! muterole) {
      محاولة{
        muterole = await message.guild.createRole ({
          الاسم: "صامت" ،
          اللون: "# 000000" ،
          أذونات: []
        })
        message.guild.channels.forEach (async (channel، id) => {
          في انتظار channel.overwritePermissions (muterole، {
            SEND_MESSAGES: خطأ ،
            ADD_REACTIONS: false
          })؛
        })؛
      } صيد (ه) {
        console.log (e.stack)؛
      }
    }
    // end of create role
    دع mutetime = args [1]؛
    if (! mutetime) return message.reply ("** يرجى تحديد وقت الميوت **: x:")؛
 
    ننتظر (tomute.addRole (muterole.id))؛
    message.reply (`<@ $ {tomute.id}> تم اعطائه ميوت ومدة الميوت: $ {ms (ms (mutetime))}`)؛
    setTimeout (وظيفة () {
      tomute.removeRole (muterole.id)؛
      message.channel.send (`<@ $ {tomute.id}> ** انقضى الوقت وتموح الميوت عن الشخص **: white_check_mark:`)؛
    }، ms (mutetime))؛
 
 
 
  }
if (command === `unmute`) {
  if (! message.member.hasPermission ("MANAGE_ROLES")) return message.channel.sendMessage ("** ليس لديك صلاحية لفك عن الشخص ميوت **: x:") .ثم (m => m.delete (5000) )؛
if (! message.guild.member (client.user) .hasPermission ("MANAGE_ROLES")) return message.reply ("** ليس لدي` MANAGE_ROLES` إذن ** ") ، ثم (msg => msg. حذف (6000))
 
  السماح tomute = message.guild.member (message.mentions.users.first ()) || message.guild.members.get (وسائط [0])؛
  if (! toMute) return message.channel.sendMessage ("** عليك المنشن أولاّ **: x:")؛
 
  دع الدور = message.guild.roles.find (r => r.name === "صامت") ؛
 
  if (! role!! toMute.roles.has (role.id)) return message.channel.sendMessage ("** لا تعتيد هذه شخص ميوت من الأساس **: x:")
 
  بانتظار toMute.removeRole (دور)
  message.channel.sendMessage ("** لقد تم فك الميوت عن شخص بنجاح **: white_check_mark:")؛
 
  إرجاع؛
 
  }
 
})؛



client.login(process.env.BOT_TOKEN);
