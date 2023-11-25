const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/sumba2000/sumba2000-Secktor-Md'
global.location = 'Nairobi'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '254114140048'
global.website = 'https://github.com/SamPandey001/Secktor-Md' //wa.me/+254114140048
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://user-images.githubusercontent.com/99327602/198687429-7ad69879-6029-4da6-90cd-9d39acfc31d9.jpg'
module.exports = {
  botname: process.env.BOT_NAME || 'Mystic 𝐁𝐨𝐭𝐭𝐨',
  ownername:process.env.OWNER_NAME || 'MysticMan',
  sessionName: process.env.SESSION_ID || 'PUT-HERE',
  author: process.env.PACK_INFO.split(";")[0] || 'author', 
  packname: process.env.PACK_INFO.split(";")[1] || 'Name',
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || false,
  HANDLERS: process.env.PREFIX || ['.'],
  nsfw_detect_ai : process.env.NSFW_DETECTION_AI || 'false',
  pmpermit: process.env.PMPERMIT || "false",
  mongodb_url: process.env.MONGODB_URI || "Enter-Mongo-URI-HERE",
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'main',
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'MYSTIC',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
