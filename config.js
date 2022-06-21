const fs = require("fs")
const chalk = require("chalk")

// Other
global.thum = "https://telegra.ph/KeniBotz-Logo-06-21"
global.log0 = fs.readFileSync("./media/fenzo.jpg")
global.err4r = "https://telegra.ph/KeniBotz-Logo-06-21"
global.owner = ['6285778815524','6285778815524']
global.lolhuman = "KaysaS"
global.rkyt = []
global.banUser = ['6281366679021@s.whatsapp.net']
global.ntilink = ['120363043965529911@g.us','120363022988111568@g.us']
global.wlcm = []
global.gcrevoke = ['19054091487-1424650263@g.us']
global.packname = "Kenichii Ichi"
global.packname2 = "KeniBotz Pack •|• I Love Yu😗😗"
global.author = "Kenichi Ichi"
global.sessionName = "faxx"
global.namebot = "KeniBotz"
global.linkgrupss = "https://chat.whatsapp.com/LBHHmgLnr9Y5q7ZkhGikkI"
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: '_Success Kak..._',
    admin: 'Fitur Ini DiKhususkan Untuk Admin Group Kak ♥️',
    botAdmin: 'Jadiin Aku Admin Dulu Dong Kak :(',
    owner: 'Fitur Ini Cuma Khusus Owner Kenichi Dan Mahesa',
    group: 'Fitur Digunakan Hanya Untuk Group Chat Kak 😗😗',
    private: 'Fitur Digunakan Hanya Untuk Private Chat Ya Kak😼',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '_Tunggu Bentar Kak, Aku Lagi Proses Dulu...😗♥️_',
    linkm: '_Linknya Mana Kak?_',
    ban: 'Kamu telah dibanned oleh owner, Jika ingin di unbanned chat owner'
}
global.limitawal = {
    premium: "Infinity",
    free: 20,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}
// Beli Di Zenz Yo
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Isi Api Mu Di sini
global.APIKeys = {
	'https://zenzapis.xyz': '26bb7e7e9c',
}
//Thank Fax Bot
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
