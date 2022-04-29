//═══════[© 2022 Xeon Bot Inc.]════════\\

//~you can re-upload but tag my channel
//or put my channel link in the description.
//~you can recode or copy the codes but give
//credit.
//~Thank you to LORD BUDDHA, ME AND MY 
//FAMILY.

//═══════[modules]════════\\

const fs = require('fs')
const chalk = require('chalk')

//═══════[api website]════════\\
global.APIs = {
	zenz: 'https://zenzapi.xyz', //credit zenz, thank you so much bro <3
}
//═══════[api key of the website]════════\\
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //thank you to zenz
}

//═══════[modification]════════\\
global.owner = ['51977783315'] //owner number, u can put multiple owner number, within quotations and seperated by comma.
global.pemilik = ['51977783315'] //another owner number
global.premium = ['916909137213'] //premium number
global.pengguna = 'Xeon' //username
global.botnma = 'Cheems Bot-MD' //bot name
global.ownernma = 'Misael' //owner name
global.packname = 'Cheems Bot' //sticker package name
global.author = 'By Dream Guy Xeon' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['#','!','/',''] //prefix
global.sp = '⭔' //design
global.mess = {
    success: 'Done ✓',
    admin: '¡Esta función es solo para administradores!',
    botAdmin: '¡El bot debe ser administrador primero!',
    owner: 'Esta función es solo para el *OWNER*',
    group: '¡Función utilizada solo para grupos!',
    private: '¡Características utilizadas solo para chat privado!',
    bot: 'Esta característica es solo para el número de bot',
    wait: 'En proceso...',
    endLimit: 'Su límite diario ha expirado, el límite se restablecerá cada 12 horas',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 100 //free user limit
}
global.thumb = fs.readFileSync('./XeonMedia/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
