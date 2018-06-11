const Eris = require("eris");
var bot = new Eris("توكن البوت حقك");
var id = "الآي دي حقْ الروم";
//** لاتعدل على شي تحت ذا **//
bot.on("ready", () => {
onstart();
});

function onstart(){

setInterval(function(){

var currentTime = new Date(),
hours = currentTime.getHours() + 0 ,
minutes = currentTime.getMinutes(),
seconds = currentTime.getSeconds();

if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "صباحاَ";
if (hours >= 12) {
suffix = "مساء";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}

bot.editChannel(id, { name : "●⌠ " + "الوقت : " + hours + ":" + minutes + " " + suffix + " ⌡●"});
}, 60000);

}

bot.connect();