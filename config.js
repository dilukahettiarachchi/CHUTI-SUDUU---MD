const fs = require('fs')
const chalk = require('chalk')

//—————「 Website Apikey 」—————//
global.APIs = {
    zahwa: 'https://api.zahwazein.xyz'
}

//—————「 Website Apikey 」—————//
global.APIKeys = {
    'https://api.zahwazein.xyz': 'zenzkey_ad0a9acee99f'
}
global.lolhuman = 'APOLOZEA'
//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'CHUTI SUDUU-MD'
global.namaowner = 'DILLA EDITZ'

//—————「 Setting Owner 」—————//
global.owner = ['94764570094']
global.ownernomer = "94764570094"
global.premium = ['94764570094']
global.ultah = 'September 02, 2023'

//—————「 Setting Donasi 」—————//
global.dana = '94764570094'

//—————「 Set Kebutuhan Button 」—————//
global.email = 'dilukahettiarachchi3@gmail.com'
global.namaweb = 'TikTok'
global.myweb = 'https://www.tiktok.com/@sl_dilla_gaming'
global.region = 'Asia'
global.github = 'https://github.com/dilukahettiarachchi'
global.mygc = 'https://chat.whatsapp.com/LRSHgQRPyICB0qujhQX4Yn'
global.myig = 'https://telegra.ph/ME-08-24-11'

//—————「 Set Wm 」—————//
global.packname = 'STICKERS BY CHUTI SUDUU-MD \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
global.author = ' CHUTI SUDUU-MD'

//—————「 Set Nama Session 」—————//
//gausah di apa² ini!
global.sessionName = 'session'

//—————「 Set Prefix 」—————//
//gausah di apa² ini!
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['', '!', '.', '#', '$', ',']

//—————「 Set Simbol 」—————//
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {

    success: '🤗Done, OK ',
    admin: '❗This command can only be used by group admins!',
    botAdmin: '❗This Command Can Only Be Used When a Bot Becomes a Group Admin!',
    owner: '❗This command can only be used by the owner!',
    group: '❗This command can only be used in group chats!',
    private: '❗This command can only be used in private chat!',
    bot: '🤖 Bot Number Users Special Features !',
    wait: '⏳ Currently Processing !',
    endLimit: '🕊️ Your Daily Limit Has Been Expired, The Limit Will Reset Every 12 Hours!',
    error: '🚫 Feature is Error !',
}

//—————「 Set Limit 」—————//
//terserah mau ubah atau nggak
global.limitawal = {
    premium: "Infinity",
    free: 10,
}

//—————「 Set Image 」—————//
//global.thumb = 'https://telegra.ph/file/1537b118bad59ab8fa15e.png'
global.thumb = fs.readFileSync('./media/image/adrian.jpg')
global.kurome = { url: 'https://a.uguu.se/faLPPBPP.mp4' }
global.botname = 'CHUTI SUDUU-MD'
global.akulaku = 'Bot By DILLA EDITZ'
global.ttname = 'TikTok DILLA EDITZ'

//—————「 Set Random Image Menu 」—————//
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.mehk = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
global.awog = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mohai = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mhehe = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
