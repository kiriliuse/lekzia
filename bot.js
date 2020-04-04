const Discord = require("discord.js");
const client = new Discord.Client();
client.login("Njk2MDAzOTk3MTE4NzU4OTgz.XoihNw.Fo1ZgiyoJ297E3a_9RJ8l7YzxXc");
client.on("message", (message) => { //В случае если бот заметит новое сообщение (message)..
    if(message.content == "!help"){ //Он проверит если его контент (content) равняется фразе "!privet"
    message.reply("Мои команды: !bund"); //И в случае если так и есть он ответит на сообщение фразой Привет! и отправит смайлик
    } //Закрытие условия
    });