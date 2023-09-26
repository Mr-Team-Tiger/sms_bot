const TeleBot = require('telebot');
const exec = require('child_process').exec;
const cheerio = require('cheerio');
const express = require('express');
const request = require('request');
const ytdl = require('ytdl-core');
const tts = require('google-tts-api');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Webpage</title>
      </head>
      <body>
        <h1>Welcome CyberSH</h1>
        <p>Uptime Bot Devoloped By : SH TASRIF\nhttps://github.com/ShTasrif\nhttps://t.me/cybersh_official</p>
      </body>
    </html>
  `;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

const token = "6592859798:AAHv3cD4OBcAZSjxWLxd_C8bk2tkMO3BVeY"

const bot = new TelegramBot(token, { polling: true });

const admin = `shtasrif_bot.t.me`

//###################################
const fline = "─────────────────────────"
//###################################
const adminUserIds = [1251593717, 789012];


const helpmsg = `
┌────────⭓
├⪦ ∷ /sms number message
├⪦ ∷ /register 
├⪦ ∷ /price 
├⪦ ∷ /id
└────────────────⧕
» Currently, the bot has a total of 5 commands that can be used.`;
const PriceList = `⭓━━━━━━━━━━━━━━━━━━━━⪦
 TextSH Points Price List
⭓━━━━━━━━━━━━━━━━━━━━⪦
 50 SMS [10] BDT
 111 SMS  [20] BDT
 300 SMS  [50] BDT
 666 SMS  [99] BDT
⭓━━━━━━━━━━━━━━━━━━━━⪦
Buy: ${admin}
⭓━━━━━━━━━━━━━━━━━━━━⪦`;

const startmsg = `Assalamu Alaikum \nWelcome to TextSH SMS Sender BOT! 👻\nOwner : @tasrif_hossen_shuvo\nChannel : @cybersh_official\nGroup : @cybershbd\nUse /help to see commands`;
const imageLink = `https://raw.githubusercontent.com/ShTasrif/File-Manager/main/cybersh.png`;



const usersFile = 'database/registered_user.json';

function readUsers() {
  try {
    const data = fs.readFileSync(usersFile);
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading users:', err.message);
    return {};
  }
}

function saveUsers(users) {
  try {
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
  } catch (err) {
    console.error('Error saving users:', err.message);
  }
}

const ConfigRegUserPath = 'database/registered_user.json';
function ReadRegUser() {
  return JSON.parse(fs.readFileSync(ConfigRegUserPath));
}



function _0x4820(_0x1e92ed,_0x4014da){const _0x1e1751=_0x1e17();return _0x4820=function(_0x48200e,_0x2938c4){_0x48200e=_0x48200e-0x16f;let _0x99b848=_0x1e1751[_0x48200e];return _0x99b848;},_0x4820(_0x1e92ed,_0x4014da);}function _0x1e17(){const _0xce9789=['username','18168NgCRZQ','2gZFLtn','sendPhoto','434780OTyVKu','deleteMessage','14nNVYIL','\x0aUsername\x20:\x20@','115293pWgqMD','\x0aDeveloper\x20:\x20@cybersh_official\x0a','78freSKT','sendMessage','\x0aUserName\x20:\x20@','chat','first_name','⪦\x20∷','message_id',',\x0aYou\x20are\x20already\x20a\x20registered\x20user.\x20❌\x0a','\x0aUserID\x20:\x20','12362517GVmWuE','4107612AJKvwU','onText','from','4537716HUacMG','\x0aDear\x20','810Smjbyq','281413fZDGww'];_0x1e17=function(){return _0xce9789;};return _0x1e17();}const _0xa1c9fa=_0x4820;(function(_0x54d706,_0x4ffb95){const _0x30f2fc=_0x4820,_0x3efeb4=_0x54d706();while(!![]){try{const _0x44cc34=parseInt(_0x30f2fc(0x189))/0x1*(parseInt(_0x30f2fc(0x183))/0x2)+parseInt(_0x30f2fc(0x17d))/0x3+parseInt(_0x30f2fc(0x17a))/0x4+-parseInt(_0x30f2fc(0x185))/0x5*(parseInt(_0x30f2fc(0x170))/0x6)+-parseInt(_0x30f2fc(0x187))/0x7*(parseInt(_0x30f2fc(0x182))/0x8)+parseInt(_0x30f2fc(0x179))/0x9+parseInt(_0x30f2fc(0x17f))/0xa*(-parseInt(_0x30f2fc(0x180))/0xb);if(_0x44cc34===_0x4ffb95)break;else _0x3efeb4['push'](_0x3efeb4['shift']());}catch(_0x4935f3){_0x3efeb4['push'](_0x3efeb4['shift']());}}}(_0x1e17,0xc87c4),bot[_0xa1c9fa(0x17b)](/\/start/,_0x4eabe2=>{const _0x36fa73=_0xa1c9fa;bot[_0x36fa73(0x184)](_0x4eabe2[_0x36fa73(0x173)]['id'],imageLink,{'caption':''+startmsg},{'reply_to_message_id':_0x4eabe2['message_id']});}),bot[_0xa1c9fa(0x17b)](/\/help/,_0x24ba34=>{const _0xbb403b=_0xa1c9fa,_0x313c78=_0xbb403b(0x175);bot[_0xbb403b(0x171)](_0x24ba34['chat']['id'],''+helpmsg,{'reply_to_message_id':_0x24ba34['message_id']});}),bot[_0xa1c9fa(0x17b)](/\/price/,_0x2f8a83=>{const _0x20d767=_0xa1c9fa,_0x237a7c=_0x20d767(0x175);bot['sendMessage'](_0x2f8a83[_0x20d767(0x173)]['id'],''+PriceList,{'reply_to_message_id':_0x2f8a83[_0x20d767(0x176)]});}),bot[_0xa1c9fa(0x17b)](/\/register/,_0x1723cd=>{const _0x24decf=_0xa1c9fa,_0x256979=_0x1723cd[_0x24decf(0x173)]['id'],_0x57402a=_0x1723cd[_0x24decf(0x17c)]['id'],_0x2f75bf=_0x1723cd[_0x24decf(0x17c)][_0x24decf(0x174)]+'\x20'+_0x1723cd[_0x24decf(0x17c)]['last_name']||'',_0x22c309=_0x1723cd['from'][_0x24decf(0x181)],_0x508f01=readUsers();!_0x508f01[_0x256979]?(_0x508f01[_0x256979]={'balance':0xa,'fullName':_0x2f75bf,'username':_0x22c309,'userId':_0x57402a,'status':'Free','expire':'','totalRefer':0x0},saveUsers(_0x508f01),bot[_0x24decf(0x171)](_0x256979,fline+_0x24decf(0x17e)+_0x2f75bf+',\x0aYou\x20have\x20been\x20successfully\x20registered!\x20✅\x0aUserID\x20:\x20'+_0x57402a+_0x24decf(0x188)+_0x22c309+'\x0aRegister\x20Bonus:\x2010\x20SMS\x0a'+fline,{'reply_to_message_id':_0x1723cd[_0x24decf(0x176)]}),setTimeout(()=>{const _0x55169f=_0x24decf;bot[_0x55169f(0x186)](_0x256979,_0x1723cd[_0x55169f(0x176)]);},0xea60)):(bot[_0x24decf(0x171)](_0x256979,fline+_0x24decf(0x17e)+_0x2f75bf+_0x24decf(0x177)+fline+_0x24decf(0x178)+_0x57402a+_0x24decf(0x172)+_0x22c309+'\x0a'+fline+_0x24decf(0x16f)+fline,{'reply_to_message_id':_0x1723cd[_0x24decf(0x176)]}),setTimeout(()=>{const _0x5b2906=_0x24decf;bot[_0x5b2906(0x186)](_0x256979,_0x1723cd[_0x5b2906(0x176)]);},0xea60));}));




bot.onText(/\/id/, (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  bot.sendMessage(chatId, `Your Telegram ID is: ${userId}`);
});


bot.onText(/\/sms (.+) (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const phoneNumber = match[1]; // Extract the phone number
    const messageToSend = match[2]; // Extract the message after the phone number
    const userId = msg.from.id.toString(); // Get user ID as a string
    const userFile = 'database/registered_user.json'; // Path to the user data file

    // Send a waiting message
    const w8msg = await bot.sendMessage(chatId, `────────────────────────
Please wait, Sending SMS...
────────────────────────`, { reply_to_message_id: msg.message_id });

    try {
        // Read the user data from the file
        let userData = JSON.parse(fs.readFileSync(userFile, 'utf8'));

        if (userData[userId] && userData[userId].balance >= 1) {
            const apiUrl = `https://mojibrsm.com/auth/main-api.php?number=${phoneNumber}&message=${encodeURIComponent(messageToSend)}`;
            
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.success) {
                // Deduct 1 balance if the SMS was sent successfully
                userData[userId].balance -= 1;
                
                // Write the updated user data back to the file
                fs.writeFileSync(userFile, JSON.stringify(userData), 'utf8');
                
                const balance = userData[userId].balance;
                const successMessage = `────────────────────────
Message sent successfully!
Number: ${phoneNumber}
Balance: ${balance}
────────────────────────`;

                await bot.sendMessage(chatId, successMessage, { reply_to_message_id: msg.message_id });
            } else {
                const errorMessage = `Failed to send message. Error: ${data.message}`;
                await bot.sendMessage(chatId, errorMessage);
            }
        } else {
            await bot.sendMessage(chatId, `${fline}
Insufficient balance to send SMS.
Please /recharge to send sms
${fline}`, { reply_to_message_id: msg.message_id });
        }
    } catch (error) {
        const errorMessage = `An error occurred: ${error.message}`;
        await bot.sendMessage(chatId, errorMessage);
    } finally {
        // Delete the waiting message
        await bot.deleteMessage(chatId, w8msg.message_id);
    }
});