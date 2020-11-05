const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected'); 
});

http.listen(8000, () => {
  console.log('listening on *:8000');
});

const TelegramBot = require('node-telegram-bot-api');
const token = require('/etc/secret/token.json').token;
// const Agent = require('socks5-https-client/lib/Agent');
// needed in case to avoid blocks
console.log("TOKEN:" + token);
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    console.log(msg.text); // Logging
    if (msg.text == "RED ON") {
        io.emit("RED ON");
        bot.sendMessage(chatId, 'Turnin on light red');
    } else if (msg.text == "RED OFF") {
        io.emit("RED OFF");
        bot.sendMessage(chatId, 'Turnin off light red');
    } else if (msg.text == "AMBER ON") {
        io.emit("AMBER ON");
        bot.sendMessage(chatId, 'Turnin on light amber');
    } else if (msg.text == "AMBER OFF") {
        io.emit("AMBER OFF");
        bot.sendMessage(chatId, 'Turnin off light amber');
    } else if (msg.text == "GREEN ON") {
        io.emit("GREEN ON");
        bot.sendMessage(chatId, 'Turnin on light green');
    } else if (msg.text == "GREEN OFF") {
        io.emit("GREEN OFF");
        bot.sendMessage(chatId, 'Turnin off light green');
    } else {
        bot.sendMessage(chatId, 'Incorrect input');
    };  
});