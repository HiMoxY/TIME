const Eris = require("eris");
var bot = new Eris("NDU1NTQ5MjUwMzMyMjYyNDAw.Df9m0A.OSQ3Liqqn8YuHTbh1y_jJoBLf74");
var id = "455552914686083073";
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
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}

bot.editChannel(id, { name : "●⌠ " + "TIME : " + hours + ":" + minutes + " " + suffix + " ⌡●"});
}, 60000);

}

bot.connect();