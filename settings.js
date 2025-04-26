const fs = require('fs');
const chalk = require('chalk');

/*
	* Create By Naze
	* Follow https://github.com/nazedev
	* Whatsapp : https://whatsapp.com/channel/0029VaWOkNm7DAWtkvkJBK43
*/

//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\

global.owner = ['254701309409'] //['628','628'] 2 owner
global.packname = 'Eliud whatsApp'
global.author = 'Eliud'
global.botname = 'ELIUD_BOT_V1'
global.listprefix = ['+','!','.']
global.listv = ['■','➩','➢','➣','➤']
global.tempatDB = 'database.json' // Taruh url mongodb di sini jika menggunakan mongodb. Format : 'mongodb+srv://...'
global.pairing_code = true
global.number_bot = '' // Kalo pake panel bisa masukin nomer di sini, jika belum ambil session. Format : '628xx'

global.fake = {
	anonim: 'https://files.catbox.moe/cbv0wd.jpg',
	thumbnailUrl: 'https://files.catbox.moe/cbv0wd.jpg',
	thumbnail: fs.readFileSync('./src/media/naze.png'),
	docs: fs.readFileSync('./src/media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf'],
}

global.my = {
	yt: 'https://youtube.com/c/Nazedev',
	gh: 'https://github.com/nazedev',
	gc: 'https://chat.whatsapp.com/B5qJIwZHm4VEYZJQE6iMwy',
	ch: '120363250409960161@newsletter',
}

global.limit = {
	free: 9999999999999990,
	premium: 99999999999,
	vip: 99999999999999
}

global.uang = {
	free: 100000000,
	premium: 1000000000,
	vip: 10000000000
}

global.mess = {
	key: 'Apikey mu telah habis silahkan kunjungi\nhttps://my.hitori.pw',
	owner: '*Command...For..My..Owner..Only* !',
	admin: '*Command..for..group..Admin..Only* !',
	botAdmin: '*BOT..MUST..BE..MADE..ADMIN..FISRT* !',
	group: '*Command Must be used in Group only* !',
	private: '*Dm/Chat..Me..privately* 📲 !',
	limit: 'Limit Anda Telah Habis!',
	prem: 'Khusus User Premium!',
	wait: '......⟩⟩⟩⟩ *PROCESSING* ⟩⟩⟩⟩............',
	error: 'Error,....in....Command!',
	done: 'Done....✅'
}

global.APIs = {
	hitori: 'https://api.hitori.pw',
}
global.APIKeys = {
	'https://api.hitori.pw': 'htrkey-77eb83c0eeb39d40',
	geminiApikey: ['AIzaSyD0lkGz6ZhKi_MHSSmJcCX3wXoDZhELPaQ','AIzaSyDnBPd_EhBfr73NssnThVQZYiKZVhGZewU','AIzaSyA94OZD-0V4quRbzPb2j75AuzSblPHE75M','AIzaSyB5aTYbUg2VQ0oXr5hdJPN8AyLJcmM84-A','AIzaSyB1xYZ2YImnBdi2Bh-If_8lj6rvSkabqlA']
}

// Lainnya

global.badWords = ['tolol','goblok','asu','pantek','kampret','ngentot','jancok','kontol','memek','lonte']


//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
