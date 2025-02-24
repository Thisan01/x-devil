/* Copyright ©  @Farhan_dqz.
you can copy file. but credit must be there!!!
JulieMwol - Farhan-dqz
*/

const Julie = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require ('axios')
const LOAD_ING = "*Searching details*"
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('scrapers');

if (Config.WORKTYPE == 'private') {
Julie.addCommand({pattern: 'device ?(.*)', fromMe: true, desc: Lang.DEVICE , dontAddCommandList: true }, async (message, match) => {
    
const {data} = await axios(`https://zenzapi.xyz/api/gsmarena?query=${match[1]}&apikey=a9a05974d30e`)
const { status, result } = data
if(!status) return await message.sendMessage('not found')
await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text, { quoted: message.data });
let msg = '```'
msg +=  `NAME          :${result.devil}\n\n`
msg +=  `DATE          :${result.rilis}\n\n`
msg +=  `WEIGHT        :${result.ukuran}\n\n`
msg +=  `VERSION       :${result.type}\n\n`
msg +=  `ROM           :${result.storage}\n\n`
msg +=  `DISPLAY       :${result.display}\n\n`
msg +=  `RAM           :${result.ram}\n\n`
msg += `BATTERY        :${result.batrai}\n\n`
msg += `CPU            :${result.chipset}\n\n`
msg += `INCH           :${result.inchi}\n\n`
msg += `VIDEO MP       :${result.videoPixel}\n\n`
msg += `PIC            :${result.thumb}\n\n`
msg += `BATTERY BRAND  :${result.pixel}\n\n`
msg += '```'
 return await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
});
}
else if (Config.WORKTYPE == 'public') {
    Julie.addCommand({pattern: 'device ?(.*)', fromMe: false, desc: Lang.DEVICE , dontAddCommandList: true }, async (message, match) => {
    
        const {data} = await axios(`https://zenzapi.xyz/api/gsmarena?query=${match[1]}&apikey=a9a05974d30e`)
        const { status, result } = data
        if(!status) return await message.sendMessage('not found')
        await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text, { quoted: message.data });
        let msg = '```'
        msg +=  `NAME          :${result.devil}\n\n`
        msg +=  `DATE          :${result.rilis}\n\n`
        msg +=  `WEIGHT        :${result.ukuran}\n\n`
        msg +=  `VERSION       :${result.type}\n\n`
        msg +=  `ROM           :${result.storage}\n\n`
        msg +=  `DISPLAY       :${result.display}\n\n`
        msg +=  `RAM           :${result.ram}\n\n`
        msg += `BATTERY        :${result.batrai}\n\n`
        msg += `CPU            :${result.chipset}\n\n`
        msg += `INCH           :${result.inchi}\n\n`
        msg += `VIDEO MP       :${result.videoPixel}\n\n`
        msg += `PIC            :${result.thumb}\n\n`
        msg += `BATTERY BRAND  :${result.pixel}\n\n`
        msg += '```'
         return await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
        });
    }
