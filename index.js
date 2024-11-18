/**
  // No Re Upload, recode sendiri base nya klo mau 😏
  // Sc no enc silahkan cek https://github.com/zeeoneofficial/example-case
 
	 「 TqTo 」
  // My God
  // My Parents
  // Fatih A.
  // Ferdiz
  // DikaArdnt [author]
  // Mhankbarbar
  // Nurutomo
  // ZeeoneOfc
  // Penyedia Module
  // And All Support
  **/


require('./settings')
const {
   default: makeWASocket,
   BufferJSON,
   WAMessageStubType,
   WA_DEFAULT_EPHEMERAL,
   generateWAMessageFromContent,
   downloadContentFromMessage,
   downloadHistory,
   proto,
   getMessage,
   generateWAMessageContent,
   prepareWAMessageMedia,
   generateWAMessage,
   areJidsSameUser,
   makeInMemoryStore,
   delay
} = require('@adiwajshing/baileys')
const translate = require('@vitalets/google-translate-api')
const { Configuration, OpenAIApi } = require('openai');
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const {
   exec,
   spawn,
   execSync
} = require("child_process")
const axios = require('axios')
const cheerio = require('cheerio')
const {
   fromBuffer
} = require('file-type')
const path = require('path')
const os = require('os')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const google = require('google-it')
const {
   EmojiAPI
} = require("emoji-api");
const emoji = new EmojiAPI()
const request = require("request")
const FormData = require("form-data");
const speed = require('performance-now')
const {
   Primbon
} = require('scrape-primbon')
const primbon = new Primbon()
const PhoneNumber = require('awesome-phonenumber')
const moment = require("moment-timezone");
const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
const hx = require('hxz-api');
const {
   performance
} = require('perf_hooks')
const ms = require('ms')
const similarity = require('similarity')
const threshold = 0.72

const {
   toAudio,
   toPTT
} = require('./lib/converter')
const _prem = require("./lib/premium");
const _sewa = require("./lib/sewa");
const rpg = require('./lib/games-rpg')
const levelling = require('./lib/levelling');
const {
   pinterest,
   wallpaper,
   wikimedia,
   hentai,
   quotesAnime
} = require('./lib/scraper')
const {
   bytesToSize,
   fileIO,
   UploadFileUgu,
   telesticker,
   webp2mp4File,
   TelegraPh
} = require('./lib/uploader')
const {
   UdhAdCoy,
   ApusAhh
} = require('./lib/dbs');
const {
   addResponList,
   delResponList,
   isAlreadyResponList,
   isAlreadyResponListGroup,
   sendResponList,
   updateResponList,
   getDataResponList
} = require('./lib/respon-list');
const { 
  addBadword, 
  delBadword, 
  isKasar, 
  addCountKasar, 
  isCountKasar, 
  delCountKasar
} = require("./lib/badword");
const {
   smsg,
   getGroupAdmins,
   formatp,
   tanggal,
   tanggal_,
   tanggal__,
   formatDate,
   getTime,
   isUrl,
   sleep,
   clockString,
   runtime,
   fetchJson,
   getBuffer,
   jsonformat,
   format,
   logic,
   generateProfilePicture,
   parseMention,
   getRandom
} = require('./lib/myfunc')
const set_welcome_db = JSON.parse(fs.readFileSync('./database/set_welcome.json'));
const set_left_db = JSON.parse(fs.readFileSync('./database/set_left.json'));
const set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json'));
const set_done = JSON.parse(fs.readFileSync('./database/set_done.json'));
const set_open = JSON.parse(fs.readFileSync('./database/set_open.json'));
const set_close = JSON.parse(fs.readFileSync('./database/set_close.json'));
const set_promote = JSON.parse(fs.readFileSync('./database/set_promote.json'));
const set_demote = JSON.parse(fs.readFileSync('./database/set_demote.json'));
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
const premium = JSON.parse(fs.readFileSync('./database/premium.json'));
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
const antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
const antilink2 = JSON.parse(fs.readFileSync('./database/antilink2.json'));
const antiwame2 = JSON.parse(fs.readFileSync('./database/antiwame2.json'));
const badword = JSON.parse(fs.readFileSync('./database/badword.json'));
const grupbadword = JSON.parse(fs.readFileSync('./database/grupbadword.json'));
const grupbadword2 = JSON.parse(fs.readFileSync('./database/grupbadword2.json'));
const senbadword = JSON.parse(fs.readFileSync('./database/senbadword.json'));
const mute = JSON.parse(fs.readFileSync('./database/mute.json'));
const database = require('./database/database.json')
const stcCmd = JSON.parse(fs.readFileSync('./database/command.json'))
const db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
const _doc = JSON.parse(fs.readFileSync('./database/document.json'))
const _anonymous = JSON.parse(fs.readFileSync('./database/anonymous.json'))
const _menfess = JSON.parse(fs.readFileSync('./database/menfess.json'))

const {
   sendButLoc,
   sendButDoC,
   sendButDoc,
   sendListMenu,
   sendListAge,
   sendListGender,
   sendListLang,
   sendButImage,
   sendKatalog,
   sendKatalog2,
   sendContact,
   sendButton2,
   sendImgList,
   sendList
} = require('./lib/welcome')
const Alpha = require('./lib/welcome')
const {
   isSetProses,
   addSetProses,
   removeSetProses,
   changeSetProses,
   getTextSetProses,
   isSetPromote,
   addSetPromote,
   removeSetPromote,
   changeSetPromote,
   getTextSetPromote,
   isSetDemote,
   addSetDemote,
   removeSetDemote,
   changeSetDemote,
   getTextSetDemote
} = require('./lib/setproses');
const {
   isSetDone,
   addSetDone,
   removeSetDone,
   changeSetDone,
   getTextSetDone
} = require('./lib/setdone');
const {
   isSetOpen,
   addSetOpen,
   removeSetOpen,
   changeSetOpen,
   getTextSetOpen
} = require("./lib/setopen");
const {
   isSetClose,
   addSetClose,
   removeSetClose,
   changeSetClose,
   getTextSetClose
} = require("./lib/setclose");
const {
   isSetWelcome,
   addSetWelcome,
   changeSetWelcome,
   removeSetWelcome,
   getTextSetWelcome
} = require('./lib/setwelcome');
const {
   isSetLeft,
   addSetLeft,
   removeSetLeft,
   changeSetLeft,
   getTextSetLeft
} = require('./lib/setleft');
pp_bot = fs.readFileSync(thumbnail)
qris = fs.readFileSync(donasi)
moment.tz.setDefault("Asia/Jakarta").locale("id");

global.db = JSON.parse(fs.readFileSync("./database/database.json"))
if (global.db) global.db.data = {
         users: {},
         chats: {},
         database: {},
         game: {},
         others: {},
         sticker: {},
         absen: {},
         cmd: {},
         settings: {},
         anonymous: {},
         menfess: {},
         ...(global.db.data || {})
      }
      
// Database Game
const hit_today = []
const kuismath = {}
const _family100 = {}
const tebakgambar = {}
const tebakkata = {}
const tebakbendera = {}
const siapaaku = {}
const tebakkalimat = {}
const caklontong = {}
const susunkata = {}
const tekateki = {}
const tebakkabupaten = {}
const tebakkimia = {}
const tebaklirik = {}
const tebaktebakan = {}
var dbs = []
global.dbc = dbs

module.exports = alpha = async (alpha, m, chatUpdate, mek, store, reSize, _welcome, _left, antionce, antidelete, _promote, _demote) => {
   try {
      var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') && m.message.buttonsResponseMessage.selectedButtonId ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') && m.message.listResponseMessage.singleSelectReply.selectedRowId ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') && JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
      var budy = (typeof m.text == 'string' ? m.text : '')
      const content = JSON.stringify(mek.message)
      const type = Object.keys(mek.message)[0];
      if (m && type == "protocolMessage") alpha.ev.emit("message.delete", m.message.protocolMessage.key);
      const isCmd = /^[°•π÷×¶∆£¢€¥®™�✓_=|~!?#/$%^&.+-,\\\©^]/.test(body)
      const prefix = isCmd ? budy[0] : ''
      const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
      const from = mek.key.remoteJid
      const time = moment(Date.now()).tz(timezone).locale('id').format('HH:mm:ss z')
      const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
      const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
      const salam = moment(Date.now()).tz(timezone).locale('id').format('a')
      const args = body.trim().split(/ +/).slice(1)
      const pushname = m.pushName || "No Name"
      const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
      const botNumber = alpha.user.id ? alpha.user.id.split(":")[0] + "@s.whatsapp.net" : alpha.user.id
      const isCreator = ["62821931157232@s.whatsapp.net", "62887435047326@s.whatsapp.net", botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      const itsMe = m.sender == alpha.user.id ? true : false
      const text = q = args.join(" ")
      const c = args.join(' ')
      const quoted = m.quoted ? m.quoted : m
      const mime = (quoted.msg || quoted).mimetype || ''
      const isMedia = /image|video|sticker|audio/.test(mime)

      // Group
      const groupMetadata = m.isGroup ? await alpha.groupMetadata(m.chat) : ''
      const groupId = m.isGroup ? groupMetadata.id : ''
      const groupName = m.isGroup ? groupMetadata.subject : ''
      const participants = m.isGroup ? await groupMetadata.participants : ''
      const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
      const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
      const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
      const groupOwner = m.isGroup ? groupMetadata.owner : ''
      const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
      const groupMembers = m.isGroup ? await groupMetadata.participants : ''
      const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
      const isNumber = x => typeof x === 'number' && !isNaN(x)
      const isSewa = _sewa.checkSewaGroup(m.chat, sewa)
      const isPremium = isCreator ? true : _prem.checkPremiumUser(m.sender, premium)
      const isAntiLink = antilink.includes(m.chat) ? true : false
      const isAntiwame = antiwame.includes(m.chat) ? true : false
      const isAntiLink2 = antilink2.includes(m.chat) ? true : false
      const isAntiwame2 = antiwame2.includes(m.chat) ? true : false
      const isAntidelete = antidelete.includes(m.chat) ? true : false
      const isAntionce = antionce.includes(m.chat) ? true : false
      const isWelcome = _welcome.includes(m.chat) ? true : false
      const isBadword = grupbadword.includes(m.chat) ? true : false
      const isBadword2 = grupbadword2.includes(m.chat) ? true : false
      const isLeft = _left.includes(m.chat) ? true : false
      const isPromote = _promote.includes(m.chat) ? true : false
      const isDemote = _demote.includes(m.chat) ? true : false
      const isMute = mute.includes(m.chat) ? true : false
      const blockList = await alpha.fetchBlocklist()
      if (blockList?.includes(m.sender)) return
      dbs.push({
         id: m.key.id,
         m
      });
      const ini_mark = `0@s.whatsapp.net`
      const timestampi = speed();
      const latensii = speed() - timestampi
      const ftroli = {
         key: {
            fromMe: false,
            "participant": "0@s.whatsapp.net",
            "remoteJid": "6289523258649-1604595598@g.us"
         },
         "message": {
            orderMessage: {
               itemCount: 2024,
               status: 200,
               thumbnail: pp_bot,
               surface: 200,
               message: `© ${ownername}`,
               orderTitle: 'memek',
               sellerJid: '0@s.whatsapp.net'
            }
         },
         contextInfo: {
            "forwardingScore": 999,
            "isForwarded": true
         },
         sendEphemeral: true
      }
      const fdoc = {
         key: {
            participant: '0@s.whatsapp.net'
         },
         message: {
            documentMessage: {
               title: `© ${ownername}`,
               jpegThumbnail: pp_bot
            }
         },
         contextInfo: {
            "forwardingScore": 999,
            "isForwarded": true
         },
      }
      const fvn = {
         key: {
            participant: `0@s.whatsapp.net`,
            ...(from ? {
               remoteJid: "6289643739077-1613049930@g.us"
            } : {})
         },
         message: {
            "audioMessage": {
               "mimetype": "audio/ogg; codecs=opus",
               "seconds": 359996400,
               "ptt": "true"
            }
         },
         contextInfo: {
            "forwardingScore": 999,
            "isForwarded": true
         },
      }
      const fgif = {
         key: {
            participant: `0@s.whatsapp.net`,
            ...(from ? {
               remoteJid: "status@broadcast"
            } : {})
         },
         message: {
            "videoMessage": {
               "title": `© ${ownername}`,
               "h": `Hmm`,
               'seconds': '359996400',
               'gifPlayback': 'true',
               'caption': `© ${ownername}`,
               'jpegThumbnail': pp_bot
            }
         },
         contextInfo: {
            "forwardingScore": 999,
            "isForwarded": true
         },
      }
      const fgclink = {
         key: {
            participant: "0@s.whatsapp.net",
            "remoteJid": "0@s.whatsapp.net"
         },
         "message": {
            "groupInviteMessage": {
               "groupJid": "6288213840883-1616169743@g.us",
               "inviteCode": "m",
               "groupName": "P",
               "caption": `© ${ownername}`,
               'jpegThumbnail': pp_bot
            }
         },
         contextInfo: {
            "forwardingScore": 999,
            "isForwarded": true
         },
      }
      const fvideo = {
         key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? {
               remoteJid: "6289643739077-1613049930@g.us"
            } : {})
         },
         message: {
            "videoMessage": {
               "title": `${pushname}`,
               "h": `Hmm`,
               'seconds': '359996400',
               'caption': `${pushname}`,
               'jpegThumbnail': pp_bot
            }
         },
         contextInfo: {
            "forwardingScore": 999,
            "isForwarded": true
         },
      }
      const floc = {
         key: {
            participant: '0@s.whatsapp.net'
         },
         message: {
            locationMessage: {
               name: `${ownername}`,
               jpegThumbnail: pp_bot
            }
         },
         contextInfo: {
            "forwardingScore": 999,
            "isForwarded": true
         },
      }
      const fkontak = {
         key: {
            participant: `0@s.whatsapp.net`,
            ...(from ? {
               remoteJid: `6283136505591-1614953337@g.us`
            } : {})
         },
         message: {
            'contactMessage': {
               'displayName': `${pushname}`,
               'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
               'jpegThumbnail': pp_bot,
               thumbnail: pp_bot,
               sendEphemeral: true
            }
         },
         contextInfo: {
            "forwardingScore": 999,
            "isForwarded": true
         },
      }
      let picaks = [flaming, fluming, flarun, flasmurf]
      let picak = picaks[Math.floor(Math.random() * picaks.length)]

      let picaks2 = [ftroli, fdoc, fvn, fgif, fgclink, fvideo, floc, fkontak]
      let picak2 = picaks2[Math.floor(Math.random() * picaks2.length)]

      const reply = async (teks) => {
         return await alpha.sendFakeLink(m.chat, teks, salam, pushname, ownername, thumbnail, myweb, m)
      }
      async function getGcName(groupID) {
         try {
            let data_name = await alpha.groupMetadata(groupID)
            return data_name.subject
         } catch (err) {
            return '-'
         }
      }
      const randomArr = (arr = []) => {
         return arr[Math.floor(Math.random() * arr.length)]
      }
      const isEmoji = (emo) => {
         let emoji_ranges = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
         let regexEmoji = new RegExp(emoji_ranges, 'gi');
         return emo.match(regexEmoji)
      }
      if (m.mtype == 'viewOnceMessage' && m.msg.viewOnce) {
         try {
            await alpha.ev.emit("viewOnceMessage", m);
         } catch (err) {
            console.error(util.format(err))
         }
      }
       const _0x325e91=_0x495d;function _0x495d(_0x22e0ae,_0x13e6e1){const _0x3902af=_0x394d();return _0x495d=function(_0x43251e,_0x42e6d4){_0x43251e=_0x43251e-0x144;let _0x394d7e=_0x3902af[_0x43251e];return _0x394d7e;},_0x495d(_0x22e0ae,_0x13e6e1);}(function(_0x3f217e,_0x3a79b2){const _0x485bb6=_0x495d,_0x45da14=_0x3f217e();while(!![]){try{const _0x1933d9=parseInt(_0x485bb6(0x23b))/0x1+parseInt(_0x485bb6(0x1f6))/0x2*(parseInt(_0x485bb6(0x1e8))/0x3)+-parseInt(_0x485bb6(0x162))/0x4*(parseInt(_0x485bb6(0x235))/0x5)+-parseInt(_0x485bb6(0x147))/0x6*(-parseInt(_0x485bb6(0x1c9))/0x7)+-parseInt(_0x485bb6(0x15d))/0x8+-parseInt(_0x485bb6(0x153))/0x9+parseInt(_0x485bb6(0x1ac))/0xa;if(_0x1933d9===_0x3a79b2)break;else _0x45da14['push'](_0x45da14['shift']());}catch(_0x14d309){_0x45da14['push'](_0x45da14['shift']());}}}(_0x394d,0xc1d3a));const _0x42e6d4=(function(){let _0x10f053=!![];return function(_0x492c7e,_0x25900b){const _0x10c300=_0x10f053?function(){if(_0x25900b){const _0x13a2f1=_0x25900b['apply'](_0x492c7e,arguments);return _0x25900b=null,_0x13a2f1;}}:function(){};return _0x10f053=![],_0x10c300;};}()),_0x43251e=_0x42e6d4(this,function(){const _0x31860e=_0x495d;return _0x43251e[_0x31860e(0x1ad)]()[_0x31860e(0x17f)](_0x31860e(0x15a))['toString']()[_0x31860e(0x172)](_0x43251e)[_0x31860e(0x17f)](_0x31860e(0x15a));});function _0x394d(){const _0x398de3=['2854503KVHyEi','pertanian','expired','chat','ayamg','composing','regTime','(((.+)+)+)+$','lbars','laper','8830112KIEKBd','batu','chats','object','cumi','1394420AgQzHW','lastngocok','stamina','typemenu2','phonix','enchant','centaur','afkReason','diamond','fortress','sworddurability','pet','kudalastclaim','centaurlastclaim','lastngojek','lastmining','constructor','lastclaim','atm','Newbie\x20㋡','psepick','kayu','lastkill','pickaxedurability','goodbye','language','data','lastgrab','babi','search','cupon','lastdagang','semangka','setLeave','sapir','gajah','fishingrod','lastberkebon','anakphonix','pushName','exp','bawal','serigalalastclaim','healthmonster','users','perunggu','anakserigala','anggur','gardenboxs','name','leleb','stroberi','sewa','lastfishing','psenjata','lastmonthly','captionPay','sapi','typemenu','setDone','apel','premiumDate','healtmonster','[▒▒▒▒▒▒▒▒▒]','babihutan','role','lastturu','welcome','bibitpisang','kardus','makanancentaur','lastopen','healt','emas','9663840BrGxiN','toString','lastIstigfar','esteh','autolevelup','Pengangguran','settings','limit','tprem','gurita','bibitanggur','iron','ojekk','setDemote','lastadventure','paus','lobster','autobio','legendary','glory','No\x20Name','ayam','Perunggu','lastwar','rtrofi','makanan','anakkucing','makananserigala','makananpet','7OIiwwl','available','umpan','hobi','monyet','lastsda','buaya','serialNumber','anakkyubi','mangga','banteng','sword','phonixlastclaim','anaknaga','makanannaga','mythic','premiumTime','autoblok','uncommon','autorespond','kerbau','banned','lastduel','bibitapel','kyubi','rumahsakit','korbanngocok','bibitjeruk','lastrampok','kepiting','kucing','6dyXFAW','title','leleg','recording','armor','orca','promote','kambing','nsfw','lastnguli','pasangan','mute','kaleng','serigala','1064572vRizVm','kingdom','buntal','nagalastclaim','anakkuda','registered','panda','premium','lastweekly','demote','bibitmangga','common','lele','griffin','boxs','bank','haus','potion','anjing','hiu','lastrob','userRegister','setPromote','lastbanned','lastjb','trofi','fishingroddurability','troopcamp','gender','dory','lastdungeon','lasthunt','money','anjinglastclaim','anticall','lasthourly','pickaxe','BannedReason','antionce','lastseen','warn','lastbansos','lastberbru','naga','aqua','pertambangan','setProses','job','antispamlastclaim','lumba','pisang','shield','tigame','anakanjing','ayamb','lastSetStatus','antilink','griffinlastclaim','setWelcome','afkTime','makanangriffin','autoread','number','10fACgGA','kuda','kucinglastclaim','string','arlok','jeruk','694685vnQuNU','ramuan','level','botol','lastgift','1118484QVLdIm','nila','anakgriffin','anakcentaur','harimau','free','ikan','anakrubah','coin','rubah','paygc','sender'];_0x394d=function(){return _0x398de3;};return _0x394d();}_0x43251e();try{let user=global['db']['data']['users'][m['sender']],isNumber=_0xfc2d5b=>typeof _0xfc2d5b===_0x325e91(0x234)&&!isNaN(_0xfc2d5b),limitnya=isPremium?limitawal[_0x325e91(0x1fd)]:limitawal[_0x325e91(0x14c)];if(typeof user!==_0x325e91(0x160))db['data'][_0x325e91(0x18e)][m[_0x325e91(0x152)]]={};if(user){if(!(_0x325e91(0x1fd)in user))user[_0x325e91(0x1fd)]=isPremium;if(!isNumber(user[_0x325e91(0x1d9)]))user[_0x325e91(0x1d9)]=0x0;if(!('banned'in user))user[_0x325e91(0x1de)]=![];if(!_0x325e91(0x21b)in user)user[_0x325e91(0x21b)]='';if(!isNumber(user[_0x325e91(0x231)]))user['afkTime']=-0x1;if(!isNumber(user['pc']))user['pc']=0x0;if(!(_0x325e91(0x169)in user))user[_0x325e91(0x169)]='';if(!(_0x325e91(0x17b)in user))user[_0x325e91(0x17b)]='id';if(!isNumber(user[_0x325e91(0x1b3)]))user[_0x325e91(0x1b3)]=limitnya;if(!isNumber(user[_0x325e91(0x1aa)]))user[_0x325e91(0x1aa)]=0x64;if(!isNumber(user[_0x325e91(0x1a0)]))user['healtmonster']=0x0;if(!isNumber(user[_0x325e91(0x1e9)]))user[_0x325e91(0x1e9)]=0x0;if(!isNumber(user[_0x325e91(0x164)]))user[_0x325e91(0x164)]=0x64;if(!isNumber(user[_0x325e91(0x206)]))user['haus']=0x64;if(!isNumber(user[_0x325e91(0x15c)]))user[_0x325e91(0x15c)]=0x64;if(!isNumber(user[_0x325e91(0x144)]))user[_0x325e91(0x144)]=0x0;if(!(_0x325e91(0x1f2)in user))user[_0x325e91(0x1f2)]='';if(!isNumber(user['exp']))user[_0x325e91(0x18a)]=0x0;if(!isNumber(user[_0x325e91(0x1e3)]))user[_0x325e91(0x1e3)]=0x0;if(!isNumber(user[_0x325e91(0x1b8)]))user[_0x325e91(0x1b8)]=0x0;if(!isNumber(user[_0x325e91(0x20f)]))user['trofi']=0x0;if(!user[_0x325e91(0x1c4)])user['rtrofi']=_0x325e91(0x1c2);if(!isNumber(user[_0x325e91(0x211)]))user['troopcamp']=0x0;if(!isNumber(user[_0x325e91(0x14f)]))user['coin']=0x0;if(!isNumber(user[_0x325e91(0x174)]))user[_0x325e91(0x174)]=0x0;if(!isNumber(user['tprem']))user[_0x325e91(0x1b4)]=0x0;if(!isNumber(user[_0x325e91(0x22a)]))user['tigame']=0x32;if(!isNumber(user[_0x325e91(0x173)]))user[_0x325e91(0x173)]=0x0;if(!isNumber(user[_0x325e91(0x216)]))user[_0x325e91(0x216)]=0x3e8;if(!isNumber(user['bank']))user[_0x325e91(0x205)]=0x3e8;if(!isNumber(user[_0x325e91(0x1e2)]))user[_0x325e91(0x1e2)]=0x0;if(!isNumber(user[_0x325e91(0x16b)]))user['fortress']=0x0;if(!isNumber(user[_0x325e91(0x229)]))user[_0x325e91(0x229)]=![];if(!isNumber(user[_0x325e91(0x154)]))user[_0x325e91(0x154)]=0x0;if(!isNumber(user[_0x325e91(0x223)]))user['pertambangan']=0x0;if(!isNumber(user[_0x325e91(0x145)]))user[_0x325e91(0x145)]=0x0;if(!isNumber(user[_0x325e91(0x1a7)]))user['kardus']=0x0;if(!isNumber(user[_0x325e91(0x1f4)]))user[_0x325e91(0x1f4)]=0x0;if(!isNumber(user[_0x325e91(0x222)]))user[_0x325e91(0x222)]=0x0;if(!isNumber(user[_0x325e91(0x16a)]))user[_0x325e91(0x16a)]=0x0;if(!isNumber(user[_0x325e91(0x1b7)]))user[_0x325e91(0x1b7)]=0x0;if(!isNumber(user[_0x325e91(0x1ab)]))user[_0x325e91(0x1ab)]=0x0;if(!isNumber(user[_0x325e91(0x239)]))user['arlok']=0x0;if(!isNumber(user[_0x325e91(0x201)]))user[_0x325e91(0x201)]=0x0;if(!isNumber(user[_0x325e91(0x204)]))user[_0x325e91(0x204)]=0x0;if(!isNumber(user[_0x325e91(0x180)]))user[_0x325e91(0x180)]=0x0;if(!isNumber(user['as']))user['as']=0x0;if(!isNumber(user['uncommon']))user[_0x325e91(0x1db)]=0x0;if(!isNumber(user[_0x325e91(0x1d8)]))user[_0x325e91(0x1d8)]=0x0;if(!isNumber(user[_0x325e91(0x1be)]))user[_0x325e91(0x1be)]=0x0;if(!isNumber(user[_0x325e91(0x1bf)]))user[_0x325e91(0x1bf)]=0x0;if(!isNumber(user[_0x325e91(0x167)]))user['enchant']=0x0;if(!isNumber(user['pet']))user[_0x325e91(0x16d)]=0x0;if(!isNumber(user[_0x325e91(0x176)]))user[_0x325e91(0x176)]=0x0;if(!isNumber(user[_0x325e91(0x198)]))user[_0x325e91(0x198)]=0x0;if(!isNumber(user[_0x325e91(0x207)]))user['potion']=0x0;if(!isNumber(user['sampah']))user['sampah']=0x0;if(!isNumber(user[_0x325e91(0x1ec)]))user[_0x325e91(0x1ec)]=0x0;if(!isNumber(user['pancing']))user['pancing']=0x0;if(!isNumber(user['apel']))user[_0x325e91(0x19e)]=0x0;if(!isNumber(user['ayamb']))user[_0x325e91(0x22c)]=0x0;if(!isNumber(user[_0x325e91(0x157)]))user[_0x325e91(0x157)]=0x0;if(!isNumber(user[_0x325e91(0x184)]))user['sapir']=0x0;if(!isNumber(user['ssapi']))user['ssapi']=0x0;if(!isNumber(user[_0x325e91(0x1af)]))user[_0x325e91(0x1af)]=0x0;if(!isNumber(user[_0x325e91(0x1ea)]))user['leleg']=0x0;if(!isNumber(user[_0x325e91(0x194)]))user[_0x325e91(0x194)]=0x0;if(!isNumber(user[_0x325e91(0x1d4)]))user[_0x325e91(0x1d4)]=0x0;if(!isNumber(user[_0x325e91(0x16c)]))user[_0x325e91(0x16c)]=0x0;if(!isNumber(user[_0x325e91(0x21a)]))user[_0x325e91(0x21a)]=0x0;if(!isNumber(user[_0x325e91(0x179)]))user[_0x325e91(0x179)]=0x0;if(!isNumber(user[_0x325e91(0x186)]))user[_0x325e91(0x186)]=0x0;if(!isNumber(user[_0x325e91(0x210)]))user['fishingroddurability']=0x0;if(!isNumber(user[_0x325e91(0x1cb)]))user[_0x325e91(0x1cb)]=0x0;if(!isNumber(user[_0x325e91(0x1e7)]))user[_0x325e91(0x1e7)]=0x0;if(!isNumber(user['kucinglastclaim']))user[_0x325e91(0x237)]=0x0;if(!isNumber(user[_0x325e91(0x236)]))user['kuda']=0x0;if(!isNumber(user['kudalastclaim']))user[_0x325e91(0x16e)]=0x0;if(!isNumber(user['rubah']))user[_0x325e91(0x150)]=0x0;if(!isNumber(user['rubahlastclaim']))user['rubahlastclaim']=0x0;if(!isNumber(user[_0x325e91(0x208)]))user[_0x325e91(0x208)]=0x0;if(!isNumber(user[_0x325e91(0x217)]))user[_0x325e91(0x217)]=0x0;if(!isNumber(user[_0x325e91(0x18c)]))user['serigalalastclaim']=0x0;if(!isNumber(user[_0x325e91(0x1f9)]))user[_0x325e91(0x1f9)]=0x0;if(!isNumber(user[_0x325e91(0x1d5)]))user[_0x325e91(0x1d5)]=0x0;if(!isNumber(user[_0x325e91(0x22f)]))user[_0x325e91(0x22f)]=0x0;if(!isNumber(user['centaurlastclaim']))user[_0x325e91(0x16f)]=0x0;if(!isNumber(user[_0x325e91(0x1c8)]))user[_0x325e91(0x1c8)];if(!isNumber(user[_0x325e91(0x1d7)]))user[_0x325e91(0x1d7)]=0x0;if(!isNumber(user['makananphonix']))user['makananphonix']=0x0;if(!isNumber(user['makanangriffin']))user[_0x325e91(0x232)]=0x0;if(!isNumber(user[_0x325e91(0x1c7)]))user[_0x325e91(0x1c7)]=0x0;if(!isNumber(user[_0x325e91(0x1a8)]))user['makanancentaur']=0x0;if(!isNumber(user[_0x325e91(0x21e)]))user[_0x325e91(0x21e)]=0x0;if(!isNumber(user[_0x325e91(0x18d)]))user['healthmonster']=0x0;if(!isNumber(user[_0x325e91(0x1c6)]))user[_0x325e91(0x1c6)]=0x0;if(!isNumber(user[_0x325e91(0x1fa)]))user[_0x325e91(0x1fa)]=0x0;if(!isNumber(user[_0x325e91(0x14e)]))user[_0x325e91(0x14e)]=0x0;if(!isNumber(user[_0x325e91(0x22b)]))user[_0x325e91(0x22b)]=0x0;if(!isNumber(user[_0x325e91(0x1f5)]))user[_0x325e91(0x1f5)]=0x0;if(!isNumber(user[_0x325e91(0x190)]))user[_0x325e91(0x190)]=0x0;if(!isNumber(user[_0x325e91(0x221)]))user[_0x325e91(0x221)]=0x0;if(!isNumber(user['anaknaga']))user[_0x325e91(0x1d6)]=0x0;if(!isNumber(user[_0x325e91(0x166)]))user[_0x325e91(0x166)]=0x0;if(!isNumber(user[_0x325e91(0x188)]))user[_0x325e91(0x188)]=0x0;if(!isNumber(user[_0x325e91(0x203)]))user[_0x325e91(0x203)]=0x0;if(!isNumber(user[_0x325e91(0x149)]))user['anakgriffin']=0x0;if(!isNumber(user[_0x325e91(0x1e1)]))user[_0x325e91(0x1e1)]=0x0;if(!isNumber(user[_0x325e91(0x1d1)]))user[_0x325e91(0x1d1)]=0x0;if(!isNumber(user[_0x325e91(0x168)]))user['centaur']=0x0;if(!isNumber(user[_0x325e91(0x14a)]))user[_0x325e91(0x14a)]=0x0;if(!isNumber(user[_0x325e91(0x1c8)]))user['makananpet']=0x0;if(!isNumber(user['antispam']))user['antispam']=0x0;if(!isNumber(user[_0x325e91(0x226)]))user[_0x325e91(0x226)]=0x0;if(!isNumber(user[_0x325e91(0x177)]))user['kayu']=0x0;if(!(_0x325e91(0x1f7)in user))user[_0x325e91(0x1f7)]=![];if(!isNumber(user[_0x325e91(0x15e)]))user[_0x325e91(0x15e)]=0x0;if(!isNumber(user['ramuan']))user[_0x325e91(0x23c)]=0x0;if(!isNumber(user[_0x325e91(0x238)]))user[_0x325e91(0x238)]=0x0;if(!isNumber(user['sword']))user[_0x325e91(0x1d4)]=0x0;if(!isNumber(user[_0x325e91(0x16c)]))user['sworddurability']=0x0;if(!isNumber(user[_0x325e91(0x21a)]))user[_0x325e91(0x21a)]=0x0;if(!isNumber(user[_0x325e91(0x179)]))user[_0x325e91(0x179)]=0x0;if(!isNumber(user['fishingrod']))user[_0x325e91(0x186)]=0x0;if(!isNumber(user['fishingroddurability']))user['fishingroddurability']=0x0;if(!isNumber(user[_0x325e91(0x1bb)]))user[_0x325e91(0x1bb)]=0x0;if(!isNumber(user[_0x325e91(0x1e6)]))user[_0x325e91(0x1e6)]=0x0;if(!isNumber(user[_0x325e91(0x1b5)]))user[_0x325e91(0x1b5)]=0x0;if(!isNumber(user[_0x325e91(0x161)]))user['cumi']=0x0;if(!isNumber(user[_0x325e91(0x1f8)]))user['buntal']=0x0;if(!isNumber(user[_0x325e91(0x213)]))user[_0x325e91(0x213)]=0x0;if(!isNumber(user[_0x325e91(0x227)]))user[_0x325e91(0x227)]=0x0;if(!isNumber(user[_0x325e91(0x1bc)]))user[_0x325e91(0x1bc)]=0x0;if(!isNumber(user[_0x325e91(0x209)]))user[_0x325e91(0x209)]=0x0;if(!isNumber(user['udang']))user['udang']=0x0;if(!isNumber(user['ikan']))user[_0x325e91(0x14d)]=0x0;if(!isNumber(user[_0x325e91(0x148)]))user[_0x325e91(0x148)]=0x0;if(!isNumber(user[_0x325e91(0x18b)]))user[_0x325e91(0x18b)]=0x0;if(!isNumber(user[_0x325e91(0x202)]))user[_0x325e91(0x202)]=0x0;if(!isNumber(user['orca']))user[_0x325e91(0x1ed)]=0x0;if(!isNumber(user[_0x325e91(0x1d3)]))user['banteng']=0x0;if(!isNumber(user[_0x325e91(0x14b)]))user[_0x325e91(0x14b)]=0x0;if(!isNumber(user['gajah']))user[_0x325e91(0x185)]=0x0;if(!isNumber(user[_0x325e91(0x1ef)]))user[_0x325e91(0x1ef)]=0x0;if(!isNumber(user[_0x325e91(0x1fc)]))user[_0x325e91(0x1fc)]=0x0;if(!isNumber(user[_0x325e91(0x1cf)]))user[_0x325e91(0x1cf)]=0x0;if(!isNumber(user[_0x325e91(0x1dd)]))user[_0x325e91(0x1dd)]=0x0;if(!isNumber(user['sapi']))user[_0x325e91(0x19b)]=0x0;if(!isNumber(user['monyet']))user[_0x325e91(0x1cd)]=0x0;if(!isNumber(user[_0x325e91(0x1a2)]))user[_0x325e91(0x1a2)]=0x0;if(!isNumber(user[_0x325e91(0x17e)]))user[_0x325e91(0x17e)]=0x0;if(!isNumber(user[_0x325e91(0x1c1)]))user[_0x325e91(0x1c1)]=0x0;if(!isNumber(user[_0x325e91(0x1ba)]))user[_0x325e91(0x1ba)]=0x0;if(!isNumber(user[_0x325e91(0x1a9)]))user[_0x325e91(0x1a9)]=0x0;if(!isNumber(user[_0x325e91(0x178)]))user[_0x325e91(0x178)]=0x0;if(!isNumber(user[_0x325e91(0x20d)]))user['lastbanned']=0x0;if(!isNumber(user[_0x325e91(0x1f1)]))user[_0x325e91(0x1f1)]=0x0;if(!isNumber(user[_0x325e91(0x197)]))user['lastfishing']=0x0;if(!isNumber(user[_0x325e91(0x214)]))user[_0x325e91(0x214)]=0x0;if(!isNumber(user[_0x325e91(0x1c3)]))user[_0x325e91(0x1c3)]=0x0;if(!isNumber(user[_0x325e91(0x1ce)]))user['lastsda']=0x0;if(!isNumber(user['lastberbru']))user[_0x325e91(0x220)]=0x0;if(!isNumber(user[_0x325e91(0x1df)]))user[_0x325e91(0x1df)]=0x0;if(!isNumber(user['lastjb']))user[_0x325e91(0x20e)]=0x0;if(!isNumber(user[_0x325e91(0x22d)]))user[_0x325e91(0x22d)]=0x0;if(!isNumber(user[_0x325e91(0x171)]))user[_0x325e91(0x171)]=0x0;if(!isNumber(user[_0x325e91(0x215)]))user[_0x325e91(0x215)]=0x0;if(!isNumber(user[_0x325e91(0x163)]))user[_0x325e91(0x163)]=0x0;if(!isNumber(user[_0x325e91(0x146)]))user['lastgift']=0x0;if(!isNumber(user[_0x325e91(0x20a)]))user[_0x325e91(0x20a)]=0x0;if(!isNumber(user[_0x325e91(0x170)]))user[_0x325e91(0x170)]=0x0;if(!isNumber(user[_0x325e91(0x17d)]))user[_0x325e91(0x17d)]=0x0;if(!isNumber(user[_0x325e91(0x187)]))user['lastberkebon']=0x0;if(!isNumber(user['lastcodereg']))user['lastcodereg']=0x0;if(!isNumber(user[_0x325e91(0x181)]))user[_0x325e91(0x181)]=0x0;if(!isNumber(user[_0x325e91(0x219)]))user[_0x325e91(0x219)]=0x0;if(!isNumber(user[_0x325e91(0x1fe)]))user[_0x325e91(0x1fe)]=0x0;if(!isNumber(user[_0x325e91(0x199)]))user['lastmonthly']=0x0;if(!isNumber(user[_0x325e91(0x1ae)]))user[_0x325e91(0x1ae)]=0x0;if(!isNumber(user[_0x325e91(0x1a4)]))user['lastturu']=0x0;if(!isNumber(user[_0x325e91(0x21d)]))user[_0x325e91(0x21d)]=0x0;if(!isNumber(user[_0x325e91(0x21f)]))user[_0x325e91(0x21f)]=0x0;if(!isNumber(user[_0x325e91(0x1e5)]))user[_0x325e91(0x1e5)]=0x0;if(!(_0x325e91(0x1fb)in user))user[_0x325e91(0x1fb)]=![];if(!user[_0x325e91(0x1fb)]){if(!('name'in user))user[_0x325e91(0x193)]=m['pushName']||_0x325e91(0x1c0);if(!(_0x325e91(0x212)in user))user[_0x325e91(0x212)]='';if(!(_0x325e91(0x1cc)in user))user['hobi']='';if(!('serialNumber'in user))user[_0x325e91(0x1d0)]='';if(!isNumber(user[_0x325e91(0x19e)]))user['apel']=0x0;if(!isNumber(user[_0x325e91(0x191)]))user[_0x325e91(0x191)]=0x0;if(!isNumber(user[_0x325e91(0x23a)]))user[_0x325e91(0x23a)]=0x0;if(!isNumber(user[_0x325e91(0x182)]))user['semangka']=0x0;if(!isNumber(user['mangga']))user[_0x325e91(0x1d2)]=0x0;if(!isNumber(user[_0x325e91(0x195)]))user[_0x325e91(0x195)]=0x0;if(!isNumber(user['pisang']))user[_0x325e91(0x228)]=0x0;if(!isNumber(user[_0x325e91(0x177)]))user[_0x325e91(0x177)]=0x0;if(!isNumber(user['emas']))user['emas']=0x0;if(!isNumber(user[_0x325e91(0x1c5)]))user[_0x325e91(0x1c5)]=0x0;if(!isNumber(user['bibitanggur']))user[_0x325e91(0x1b6)]=0x0;if(!isNumber(user[_0x325e91(0x1a6)]))user[_0x325e91(0x1a6)]=0x0;if(!isNumber(user[_0x325e91(0x1e0)]))user[_0x325e91(0x1e0)]=0x0;if(!isNumber(user['bibitmangga']))user[_0x325e91(0x200)]=0x0;if(!isNumber(user[_0x325e91(0x1e4)]))user[_0x325e91(0x1e4)]=0x0;if(!isNumber(user[_0x325e91(0x192)]))user['gardenboxs']=0x0;if(!isNumber(user['age']))user['age']=-0x1;if(!isNumber(user[_0x325e91(0x19f)]))user[_0x325e91(0x19f)]=0x0;if(!isNumber(user['regTime']))user[_0x325e91(0x159)]=-0x1;}if(!isNumber(user[_0x325e91(0x144)]))user[_0x325e91(0x144)]=0x0;if(!user[_0x325e91(0x225)])user[_0x325e91(0x225)]=_0x325e91(0x1b1);if(!user[_0x325e91(0x15b)])user[_0x325e91(0x15b)]=_0x325e91(0x1a1);if(!user[_0x325e91(0x1a3)])user[_0x325e91(0x1a3)]='Newbie\x20㋡';if(!(_0x325e91(0x1b0)in user))user[_0x325e91(0x1b0)]=!![];if(!(_0x325e91(0x1ae)in user))user[_0x325e91(0x1ae)]=!![];}else global['db'][_0x325e91(0x17c)][_0x325e91(0x18e)][m['sender']]={'premium':isPremium,'banned':![],'afkTime':-0x1,'pc':0x0,'afkReason':'','language':'id','limit':limitnya,'healt':0x64,'title':'','healtmonster':0x0,'haus':0x64,'laper':0x64,'tprem':0x0,'stamina':0x64,'level':0x0,'pasangan':'','exp':0x0,'coin':0x0,'atm':0x0,'tigame':0x32,'lastclaim':0x0,'money':0x3e8,'bank':0x3e8,'diamond':0x0,'iron':0x0,'pisang':0x0,'anggur':0x0,'mangga':0x0,'jeruk':0x0,'apel':0x0,'bibitpisang':0x0,'bibitanggur':0x0,'bibitmangga':0x0,'bibitjeruk':0x0,'bibitapel':0x0,'gardenboxs':0x0,'emas':0x0,'common':0x0,'boxs':0x0,'cupon':0x0,'uncommon':0x0,'mythic':0x0,'legendary':0x0,'rumahsakit':0x0,'fortress':0x0,'trofi':0x0,'rtrofi':_0x325e91(0x18f),'makanan':0x0,'troopcamp':0x0,'shield':0x0,'arlok':0x0,'ojekk':0x0,'korbanngocok':0x0,'as':0x0,'paus':0x0,'kepiting':0x0,'gurita':0x0,'cumi':0x0,'buntal':0x0,'dory':0x0,'lumba':0x0,'lobster':0x0,'hiu':0x0,'lele':0x0,'nila':0x0,'bawal':0x0,'udang':0x0,'ikan':0x0,'orca':0x0,'banteng':0x0,'harimau':0x0,'gajah':0x0,'kambing':0x0,'panda':0x0,'buaya':0x0,'kerbau':0x0,'sapi':0x0,'monyet':0x0,'babihutan':0x0,'babi':0x0,'ayam':0x0,'apel':0x14,'ayamb':0x0,'ayamg':0x0,'ssapi':0x0,'sapir':0x0,'leleb':0x0,'leleg':0x0,'esteh':0x0,'pet':0x0,'potion':0x0,'sampah':0x0,'armor':0x0,'kucing':0x0,'kucinglastclaim':0x0,'kuda':0x0,'kudalastclaim':0x0,'rubah':0x0,'rubahlastclaim':0x0,'anjing':0x0,'anjinglastclaim':0x0,'naga':0x0,'nagalastclaim':0x0,'griffin':0x0,'griffinlastclaim':0x0,'centaur':0x0,'centaurlastclaim':0x0,'serigala':0x0,'serigalalastclaim':0x0,'phonix':0x0,'phonixlastclaim':0x0,'makanannaga':0x0,'makananphonix':0x0,'makanancentaur':0x0,'makananserigala':0x0,'BannedReason':'','warn':0x0,'anakkucing':0x0,'anakkuda':0x0,'anakrubah':0x0,'anakanjing':0x0,'makananpet':0x0,'antispam':0x0,'antispamlastclaim':0x0,'kayu':0x0,'batu':0x0,'string':0x0,'umpan':0x0,'sword':0x0,'sworddurability':0x0,'pickaxe':0x0,'pickaxedurability':0x0,'fishingrod':0x0,'fishingroddurability':0x0,'lastadventure':0x0,'lastbanned':0x0,'lastopen':0x0,'lastkill':0x0,'lastnguli':0x0,'lastfishing':0x0,'lastdungeon':0x0,'lastduel':0x0,'lastmining':0x0,'lasthourly':0x0,'lasthunt':0x0,'lastweekly':0x0,'lastmonthly':0x0,'lastjb':0x0,'lastrob':0x0,'lastdaang':0x0,'lastngojek':0x0,'lastgrab':0x0,'lastngocok':0x0,'lastturu':0x0,'lastseen':0x0,'lastSetStatus':0x0,'registered':![],'apel':0x14,'mangga':0x0,'stroberi':0x0,'semangka':0x0,'jeruk':0x0,'semangka':0x0,'premiumTime':0x0,'job':_0x325e91(0x1b1),'lbars':_0x325e91(0x1a1),'role':_0x325e91(0x175),'registered':![],'name':m[_0x325e91(0x189)]||'No\x20Name','gender':'','hobi':'','serialNumber':'','age':-0x1,'premiumDate':0x0,'regTime':-0x1,'autolevelup':!![],'lastIstigfar':0x0};let chats=global['db'][_0x325e91(0x17c)][_0x325e91(0x15f)][m[_0x325e91(0x156)]];if(typeof chats!==_0x325e91(0x160))db[_0x325e91(0x17c)][_0x325e91(0x15f)][m[_0x325e91(0x156)]]={};if(chats){if(!('name'in chats))chats['name']=groupName?groupName:'-';if(!(_0x325e91(0x17a)in chats))chats[_0x325e91(0x17a)]=!![];if(!('welcome'in chats))chats[_0x325e91(0x1a5)]=!![];if(!(_0x325e91(0x1ee)in chats))chats[_0x325e91(0x1ee)]=!![];if(!('demote'in chats))chats[_0x325e91(0x1ff)]=!![];if(!(_0x325e91(0x1f3)in chats))chats[_0x325e91(0x1f3)]=![];if(!(_0x325e91(0x19a)in chats))chats[_0x325e91(0x19a)]='';if(!(_0x325e91(0x1f0)in chats))chats[_0x325e91(0x1f0)]=![];if(!(_0x325e91(0x196)in chats))chats[_0x325e91(0x196)]=![];if(!('antilink'in chats))chats[_0x325e91(0x22e)]=![];if(!(_0x325e91(0x21c)in chats))chats[_0x325e91(0x21c)]=![];if(!(_0x325e91(0x230)in chats))chats[_0x325e91(0x230)]='';if(!(_0x325e91(0x183)in chats))chats['setLeave']='';if(!(_0x325e91(0x20c)in chats))chats[_0x325e91(0x20c)]='';if(!(_0x325e91(0x1b9)in chats))chats[_0x325e91(0x1b9)]='';if(!(_0x325e91(0x224)in chats))chats[_0x325e91(0x224)]='';if(!('setDone'in chats))chats[_0x325e91(0x19d)]='';if(!(_0x325e91(0x151)in chats))chats[_0x325e91(0x151)]='';if(!isNumber(chats[_0x325e91(0x155)]))chats[_0x325e91(0x155)]=0x0;}else global['db'][_0x325e91(0x17c)][_0x325e91(0x15f)][m['chat']]={'name':groupName?groupName:'-','goodbye':!![],'welcome':!![],'promote':!![],'demote':!![],'mute':![],'captionPay':'','nsfw':![],'sewa':![],'antilink':![],'antionce':![],'setWelcome':'','setLeave':'','setPromote':'','setDemote':'','setProses':'','setDone':'','paygc':'','expired':0x0};let setting=global['db'][_0x325e91(0x17c)][_0x325e91(0x1b2)][botNumber];if(typeof setting!=='object')db['data'][_0x325e91(0x1b2)][botNumber]={};if(setting){if(!('autoread'in setting))setting[_0x325e91(0x233)]=autoread;if(!('anticall'in setting))setting[_0x325e91(0x218)]=anticall;if(!('typemenu'in setting))setting[_0x325e91(0x19c)]=typemenu;if(!(_0x325e91(0x165)in setting))setting['typemenu2']=typemenu2;if(!(_0x325e91(0x1bd)in setting))setting[_0x325e91(0x1bd)]=autobio;if(!(_0x325e91(0x1ca)in setting))setting[_0x325e91(0x1ca)]=![];if(!(_0x325e91(0x20b)in setting))setting[_0x325e91(0x20b)]=userRegister;if(!(_0x325e91(0x158)in setting))setting[_0x325e91(0x158)]=![];if(!('recording'in setting))setting[_0x325e91(0x1eb)]=![];if(!(_0x325e91(0x1da)in setting))setting[_0x325e91(0x1da)]=autoblok212;if(!('autorespond'in setting))setting[_0x325e91(0x1dc)]=![];if(!(_0x325e91(0x1b0)in setting))setting[_0x325e91(0x1b0)]=autolevelup;}else global['db'][_0x325e91(0x17c)][_0x325e91(0x1b2)][botNumber]={'autoread':autoread,'anticall':anticall,'typemenu':typemenu,'typemenu2':typemenu2,'autobio':autobio,'available':![],'userRegister':userRegister,'composing':![],'recording':![],'autoblok':autoblok212,'autorespond':![],'autolevelup':autolevelup};}catch(_0x5941d6){console['log'](_0x5941d6);}
      
        setInterval(() => {
            fs.writeFileSync('./database/database.json', JSON.stringify(global.db, null, 2))
        }, 15 * 1000)
        
        let addLimit = db.data.users[m.sender].limit - 1

      for (let jid of mentionUser) {
         let user = db.data.users[jid]
         if (!user) continue
         let afkTime = user.afkTime
         if (!afkTime || afkTime < 0) continue
         let reason = user.afkReason || ''
         reply(`Jangan tag dia!
Dia sedang AFK ${reason ? '\nReason : ' + reason : 'Reason : Nothing'}
Waktu : ${clockString(new Date - afkTime)}
`.trim())
      }
      if (db.data.users[m.sender].afkTime > -1) {
         let user = db.data.users[m.sender]
         reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
         user.afkTime = -1
         user.afkReason = ''
      }


      const {
         indonesia,
         english,
         spanyol
      } = require(`./language`)
      let lang;
      if (m.sender.startsWith('62')) {
         lang = indonesia;
      } else if (m.sender.startsWith('54' || "591" || "56" || "57" || "506" || "53" || "593" || "503" || "502" || "504" || "52" || "507" || "595" || "51" || "34" || "598" || "58")) {
         lang = spanyol;
      } else {
         lang = english;
      }

      if (m.isGroup && !m.key.fromMe && (isAntiLink || auto_antilink) && !isCreator && !isGroupAdmins && !isGroupOwner) {
         if (budy.match(`https://chat.whatsapp.com`)) {
            if (!isBotAdmins) return
            alpha.sendMessage(m.chat, {
               text: lang.KickAh(groupMetadata.subject)
            }, {
               quoted: m
            })
            //let gclink = (`https://chat.whatsapp.com/` + await alpha.groupInviteCode(m.chat))
            //let isLinkThisGc = new RegExp(gclink, 'i')
            //let isgclink = isLinkThisGc.test(m.text)
            //if (isgclink) return reply(lang.GjdKick())
            await alpha.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,
                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })
            alpha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
         }
      }
      if (m.isGroup && (isBadword || auto_badword) && !isCreator && !isGroupAdmins && !isGroupOwner){
        let listbad = []
for (let boo of badword){
                   listbad.push(boo)
                }
for (let boo of badword_list){
                   listbad.push(boo)
                }
            for (let kasar of listbad){
                if (budy.toLowerCase().includes(kasar)){
                    if (isCountKasar(m.sender, senbadword)){
                        if (!isBotAdmins) return
                        await reply(`*「 ANTI BADWORD 」*\n\nSepertinya kamu sudah berkata kasar lebih dari 5x, maaf kamu akan di kick`)
                        await alpha.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,
                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })
                        alpha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                        delCountKasar(m.sender, senbadword)
                    } else {
                        addCountKasar(m.sender, senbadword)
                        await reply(`Kamu terdeteksi berkata kasar\n5× berkata kasar akan ter kick down`)
                        await alpha.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,
                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })
                    }
                }
            }
        }
      if (m.isGroup && (isBadword2 || auto_badword2) && !isCreator && !isGroupAdmins && !isGroupOwner){
            let listbad = []
for (let boo of badword){
                   listbad.push(boo)
                }
for (let boo of badword_list){
                   listbad.push(boo)
                }
            for (let kasar of listbad){
                if (budy.toLowerCase().includes(kasar)){
                        if (!isBotAdmins) return
                        await alpha.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,
                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })
                }
            }
        }
      if (m.isGroup && !m.key.fromMe && (isAntiwame || auto_antiwame) && !isCreator && !isGroupAdmins && !isGroupOwner) {
         if (budy.match(`wa.me`)) {
            if (!isBotAdmins) return
            alpha.sendMessage(m.chat, {
               text: lang.KickAh(groupMetadata.subject)
            }, {
               quoted: m
            })
            await alpha.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,
                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })
            alpha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
         }
      }
      if (m.isGroup && !m.key.fromMe && (isAntiLink2 || auto_antilink2) && !isCreator && !isGroupAdmins && !isGroupOwner) {
         if (budy.match(`https://chat.whatsapp.com`)) {
            if (!isBotAdmins) return
            //let gclink = (`https://chat.whatsapp.com/` + await alpha.groupInviteCode(m.chat))
            //let isLinkThisGc = new RegExp(gclink, 'i')
            //let isgclink = isLinkThisGc.test(m.text)
            //if (isgclink) return //reply(lang.GjdKick())
            await alpha.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,
                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })
        }
      }
      if (m.isGroup && !m.key.fromMe && (isAntiwame2 || auto_antiwame2) && !isCreator && !isGroupAdmins && !isGroupOwner) {
         if (budy.match(`wa.me`)) {
            if (!isBotAdmins) return
            await alpha.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,
                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })
         }
      }

if(!isCreator && !m.isGroup && groupOnly){
       	  return
        	}

      if (/^a(s|ss)alamu('|)alaikum$/.test(budy?.toLowerCase())) {
         const jawab_salam = [
            'Wa\'alaikumusalam',
            'Wa\'alaikumusalam wb',
            'Wa\'alaikumusalam Warohmatulahi Wabarokatuh',
         ]
         return reply(randomArr(jawab_salam))
      }

      _prem.expiredCheck(alpha, premium)

      let cron = require('node-cron')
      cron.schedule('00 23 * * *', () => {
         let user = Object.keys(global.db.data.users)
         for (let jid of user) {
            let limitUser = db.data.users[jid].premium ? global.limitawal.premium : global.limitawal.free
            global.db.data.users[jid].limit = limitUser
         }
         console.log('Reseted Limit')
      }, {
         scheduled: true,
         timezone: "Asia/Jakarta"
      })
      cron.schedule('0 * * * *', async () => {
console.log('Secara Otomatis Merestart Server...')
await alpha.sendMessage(global.ownernomer, {text: `Bot sedang di restart agar server tidak terlalu berat...`})
process.exit()
}, { scheduled: true, timezone: 'Asia/Jakarta' })

      if (!m.key.fromMe && isCmd && db.data.users[m.sender].banned) {
         if (!(new Date - db.data.users[m.sender].lastbanned < 3600000)) {
            let user = db.data.users[m.sender]
            user.lastbanned = new Date * 1
            await alpha.sendMessage(m.chat, {
               text: lang.getBan(ownernomer)
            }, {
               quoted: m
            })
         }
         return
      }

      // Public & Self
      if (!alpha.public) {
         if (!m.key.fromMe && !isCreator) return
      }

      // Push Message To Console
      if (isCmd) {
        console.log(chalk.black(chalk.bgWhite('[ CMD ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? groupName : 'Private Chat', m.chat))
        }

      const sendFileFromUrl = async (from, url, caption, mek, men) => {
         let mime = '';
         let res = await axios.head(url)
         mime = res.headers['content-type']
         if (mime.split("/")[1] === "gif") {
            return alpha.sendMessage(from, {
               video: await getBuffer(url),
               caption: caption,
               gifPlayback: true,
               mentions: men ? men : [],
               mimetype: 'video/mp4'
            }, {
               quoted: m
            })
         }
         let type = mime.split("/")[0] + "Message"
         if (mime === "application/pdf") {
            return alpha.sendMessage(m.chat, {
               document: await getBuffer(url),
               mimetype: 'application/pdf',
               caption: caption,
               mentions: men ? men : []
            }, {
               quoted: m
            })
         }
         if (mime.split("/")[0] === "image") {
            return alpha.sendMessage(m.chat, {
               image: await getBuffer(url),
               caption: caption,
               mentions: men ? men : []
            }, {
               quoted: m
            })
         }
         if (mime.split("/")[0] === "video") {
            return alpha.sendMessage(m.chat, {
               video: await getBuffer(url),
               caption: caption,
               mentions: men ? men : [],
               mimetype: 'video/mp4'
            }, {
               quoted: m
            })
         }
         if (mime.split("/")[0] === "audio") {
            return alpha.sendMessage(m.chat, {
               audio: await getBuffer(url),
               caption: caption,
               mentions: men ? men : [],
               mimetype: 'audio/mpeg'
            }, {
               quoted: m
            })
         }
      }

      /*if(autorecording){
      	if(autorecording== true) return
      	await alpha.sendPresenceUpdate('recording', m.chat)
      	} else if(autoketik){
      		if(autoketik == true) return
      		await alpha.sendPresenceUpdate('composing', m.chat)
      		} else if(available){
      			if(available == true) return
      			alpha.sendPresenceUpdate('available', m.chat)
      			}*/


      //FUN

      if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
         kuis = true
         jawaban = kuismath[m.sender.split('@')[0]][0]
         hadiah = kuismath[m.sender.split('@')[0]][1]
         if (budy.toLowerCase() == jawaban) {
            alpha.sendButtonText(m.chat, [{
               buttonId: '.math medium',
               buttonText: {
                  displayText: 'Kuis Math'
               },
               type: 1
            }], ` 🎮 Kuis Matematika🎮\n\nJawaban Benar 🎉\n\n+${hadiah} XP`  + `\n\nKirim perintah .math untuk bermain lagi 🎮`, `© ${ownername}`, m)
            db.data.users[m.sender].exp += hadiah
            delete kuismath[m.sender.split('@')[0]]
         } else reply(lang.JwbErr())
      }
      if (('family100' + m.chat in _family100) && !isCmd) {
         kuis = true
         let room = _family100['family100' + m.chat]
         let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
         let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
         if (!isSurender) {
            let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
            if (room.terjawab[index]) return !0
            room.terjawab[index] = m.sender
         }
         let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
         let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : ``}`.trim()
         alpha.sendTextWithMentions(m.chat, caption, m)
            .then(mes => {
               return _family100['family100' + m.chat].pesan = mesg
            }).catch(_ => _)
         if (isWin || isSurender) delete _family100['family100' + m.chat]
      }
      if (tebakgambar[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == tebakgambar[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebakgambar[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += tebakgambar[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.tebakgambar',
                  buttonText: {
                     displayText: lang.TbGam()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbGam(), tebakgambar[m.chat][2]) + `\n\nKirim perintah .tebakgambar untuk bermain lagi 🎮`, `© ${ownername}`, m)
               clearTimeout(tebakgambar[m.chat][3])
               delete tebakgambar[m.chat]
            } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr() + `\n\nKirim perintah .tega untuk bantuan dan .ytega untuk menyerah 🎮`, '© ' + ownername, '.tega', 'Hint', '.ytega', 'Nyerah', m)
         }
      }
      if (tebakkata[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == tebakkata[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebakkata[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += tebakkata[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.tebakkata',
                  buttonText: {
                     displayText: lang.TbKa()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbKa(), tebakkata[m.chat][2]) + `\n\nKirim perintah .tebakkata untuk bermain lagi 🎮`, `© ${ownername}`, m)
               clearTimeout(tebakkata[m.chat][3])
               delete tebakkata[m.chat]
            } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr() + `\n\nKirim perintah .teka untuk bantuan dan .yteka untuk menyerah 🎮`, '© ' + ownername, '.teka', 'Hint', '.yteka', 'Nyerah', m)
         }
      }
      if (tebakbendera[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == tebakbendera[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebakbendera[m.chat][1]))
            jawaban = json.name.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += tebakbendera[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.tebakbendera',
                  buttonText: {
                     displayText: lang.TbBe()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbBe(), tebakbendera[m.chat][2]) + `\n\nKirim perintah .tebakbendera untuk bermain lagi 🎮`, `© ${ownername}`, m)
               clearTimeout(tebakbendera[m.chat][3])
               delete tebakbendera[m.chat]
            } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr() + `\n\nKirim perintah .tebe untuk bantuan dan .ytebe untuk menyerah 🎮`, '© ' + ownername, '.tebe', 'Hint', '.ytebe', 'Nyerah', m)
         }
      }
      if (caklontong[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == caklontong[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(caklontong[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += caklontong[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.caklontong',
                  buttonText: {
                     displayText: lang.TbCak()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbCak(), caklontong[m.chat][2]) + `\n\nKirim perintah .caklontong untuk bermain lagi 🎮`, `© ${ownername}`, m)
               clearTimeout(caklontong[m.chat][3])
               delete caklontong[m.chat]
            } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr() + `\n\nKirim perintah .telo untuk bantuan dan .ytelo untuk menyerah 🎮`, '© ' + ownername, '.telo', 'Hint', '.ytelo', 'Nyerah', m)
         }
      }
      if (susunkata[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == susunkata[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(susunkata[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += susunkata[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.susunkata',
                  buttonText: {
                     displayText: lang.TbSu()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbSu(), susunkata[m.chat][2]) + `\n\nKirim perintah .susunkata untuk bermain lagi 🎮`, `© ${ownername}`, m)
               clearTimeout(susunkata[m.chat][3])
               delete susunkata[m.chat]
            } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr() + `\n\nKirim perintah .tesuka untuk bantuan dan .ytesuka untuk menyerah 🎮`, '© ' + ownername, '.tesuka', 'Hint', '.ytesuka', 'Nyerah', m)
         }
      }
      if (tebakkalimat[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == tebakkalimat[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebakkalimat[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += tebakkalimat[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.tebakkalimat',
                  buttonText: {
                     displayText: lang.TbAt()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbAt(), tebakkalimat[m.chat][2]) + `\n\nKirim perintah .tebakkalimat untuk bermain lagi 🎮`, `© ${ownername}`, m)
               clearTimeout(tebakkalimat[m.chat][3])
               delete tebakkalimat[m.chat]
            } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr() + `\n\nKirim perintah .tekatu untuk bantuan dan .ytekatu untuk menyerah 🎮`, '© ' + ownername, '.tekatu', 'Hint', '.ytekatu', 'Nyerah', m)
         }
      }
      if (siapaaku[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == siapaaku[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(siapaaku[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += siapaaku[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.tebaksiapa',
                  buttonText: {
                     displayText: lang.TbSi()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbSi(), siapaaku[m.chat][2]) + `\n\nKirim perintah .tebaksiapa untuk bermain lagi 🎮`, `© ${ownername}`, m)
               clearTimeout(siapaaku[m.chat][3])
               delete siapaaku[m.chat]
            } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr() + `\n\nKirim perintah .tesi untuk bantuan dan .ytesi untuk menyerah 🎮`, '© ' + ownername, '.tesi', 'Hint', '.ytesi', 'Nyerah', m)
         }
      }
      if (tekateki[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == tekateki[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tekateki[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += tekateki[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.tekateki',
                  buttonText: {
                     displayText: lang.Tbte()
                  },
                  type: 1
               }], lang.JwbTrue(lang.Tbte(), tekateki[m.chat][2]) + `\n\nKirim perintah .tekateki untuk bermain lagi 🎮`, `© ${ownername}`, m)
               clearTimeout(tekateki[m.chat][3])
               delete tekateki[m.chat]
            } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr() + `\n\nKirim perintah .tete untuk bantuan dan .ytete untuk menyerah 🎮`, '© ' + ownername, '.tete', 'Hint', '.ytete', 'Nyerah', m)
         }
      }
      if (tebakkabupaten[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == tebakkabupaten[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebakkabupaten[m.chat][1]))
            jawaban = json.title.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += tebakkabupaten[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.tebakkabupaten',
                  buttonText: {
                     displayText: lang.TbEn()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbEn(), tebakkabupaten[m.chat][2]) + `\n\nKirim perintah .tebakkabupaten untuk bermain lagi 🎮`, `© ${ownername}`, m)
               clearTimeout(tebakkabupaten[m.chat][3])
               delete tebakkabupaten[m.chat]
            } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr() + `\n\nKirim perintah .tekabu untuk bantuan dan .ytekabu untuk menyerah 🎮`, '© ' + ownername, '.tekabu', 'Hint', '.ytekabu', 'Nyerah', m)
         }
      }
      if (tebakkimia[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == tebakkimia[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebakkimia[m.chat][1]))
            jawaban = json.unsur.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += tebakkimia[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.tebakkimia',
                  buttonText: {
                     displayText: lang.TbKi()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbKi(), tebakkimia[m.chat][2]) + `\n\nKirim perintah .tebakkimia untuk bermain lagi 🎮`, `© ${ownername}`, m)
               clearTimeout(tebakkimia[m.chat][3])
               delete tebakkimia[m.chat]
            } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr() + `\n\nKirim perintah .teki untuk bantuan dan .yteki untuk menyerah 🎮`, '© ' + ownername, '.teki', 'Hint', '.yteki', 'Nyerah', m)
         }
      }
      if (tebaklirik[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == tebaklirik[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebaklirik[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += tebaklirik[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.tebaklirik',
                  buttonText: {
                     displayText: lang.TbLi()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbLi(), tebaklirik[m.chat][2]) + `\n\nKirim perintah .tebaklirik untuk bermain lagi 🎮`, `© ${ownername}`, m)
               clearTimeout(tebaklirik[m.chat][3])
               delete tebaklirik[m.chat]
            } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr() + `\n\nKirim perintah .teli untuk bantuan dan .yteli untuk menyerah 🎮`, '© ' + ownername, '.teli', 'Hint', '.yteli', 'Nyerah', m)
         }
      }
      if (tebaktebakan[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == tebaktebakan[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebaktebakan[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += tebaktebakan[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.tebaktebakan',
                  buttonText: {
                     displayText: lang.TbKan()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbKan(), tebaktebakan[m.chat][2]) + `\n\nKirim perintah .tebaktebakan untuk bermain lagi 🎮`, `© ${ownername}`, m)
               clearTimeout(tebaktebakan[m.chat][3])
               delete tebaktebakan[m.chat]
            } else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr() + `\n\nKirim perintah .teteb untuk bantuan dan .yteteb untuk menyerah 🎮`, '© ' + ownername, '.teteb', 'Hint', '.yteteb', 'Nyerah', m)
         }
      }
(function(_0x412d1c,_0x28ed00){const _0x26c2a3=_0x412d1c();function _0x24d672(_0x59c8c2,_0x5d00bb,_0x56b93a,_0x8d4cd3,_0x12f66d){return _0x3597(_0x12f66d- -0x32b,_0x5d00bb);}function _0x52e92e(_0x4d700c,_0x38ffe5,_0x3bd0ab,_0x34949c,_0x1da83b){return _0x3597(_0x38ffe5-0x355,_0x3bd0ab);}function _0xed6636(_0x42e4fe,_0x18dac7,_0x233665,_0x36fff2,_0x4ac013){return _0x3597(_0x4ac013- -0x139,_0x36fff2);}function _0x19354f(_0x43572e,_0x4430d9,_0x56be33,_0x1c38d8,_0x49ac3e){return _0x3597(_0x43572e-0x68,_0x4430d9);}function _0x2e1549(_0x2e03b2,_0x1cc1ca,_0x2d7302,_0x25a063,_0x29c07e){return _0x3597(_0x29c07e- -0x189,_0x25a063);}while(!![]){try{const _0x533081=-parseInt(_0xed6636(0xc7,0x4c,0x121,-0x3f,0x51))/(-0x5*0x7c0+0x23db+0x2e6)+parseInt(_0x52e92e(0x607,0x5bb,0x4e5,0x683,0x581))/(-0xac2+-0x4*0x2bb+0x2b6*0x8)+parseInt(_0x2e1549(0x78,-0x47,0x10,0x95,0x58))/(0x1da*0xb+-0x2d1*-0x5+0x10*-0x227)+-parseInt(_0x2e1549(-0xa,-0xb5,-0x3c,-0x47,0x18))/(-0x189c+-0x1f2a*-0x1+-0x6*0x117)+parseInt(_0xed6636(0x6d,0xf5,0x69,0x166,0x122))/(-0x1*0x1755+0x1527+0x233)+-parseInt(_0x2e1549(0x12c,0x67,0x77,0xd8,0xf9))/(-0xd53*0x2+-0xaa9+0x2555*0x1)+parseInt(_0xed6636(0xcc,0xac,0xea,0x36,0x10d))/(0x3f*0x7f+0xc3*-0xf+-0x13cd)*(parseInt(_0x52e92e(0x5d2,0x5d8,0x6b7,0x4fb,0x694))/(0x224b*-0x1+-0x4*-0x8e7+-0x149));if(_0x533081===_0x28ed00)break;else _0x26c2a3['push'](_0x26c2a3['shift']());}catch(_0x289913){_0x26c2a3['push'](_0x26c2a3['shift']());}}}(_0x1d29,0x17c*0x4e0+-0x11*-0x9c15+-0x51590));const _0x23d653=(function(){function _0x505d84(_0x2b9a88,_0x2f3133,_0x193fde,_0xe66833,_0x4b07bf){return _0x3597(_0x4b07bf-0x194,_0x193fde);}const _0xea46d={'CkYXq':function(_0x366597,_0x491f7f){return _0x366597(_0x491f7f);},'DseiK':_0x13b9db(0x65b,0x669,0x5f4,0x627,0x614)+_0x4169fc(-0xe3,-0x53,-0x7b,-0x109,-0xde)+_0x13b9db(0x594,0x4e9,0x471,0x596,0x503)+_0x47e2d9(0x2d1,0x327,0x322,0x255,0x393)+_0x13b9db(0x61b,0x623,0x687,0x5b5,0x55e)+_0x505d84(0x446,0x354,0x33c,0x369,0x3bd)+_0x4169fc(-0xe1,-0x89,-0x188,-0x14b,-0x4)+_0x47e2d9(0x252,0x30c,0x2e2,0x2c4,0x278)+_0x4169fc(-0x137,-0xab,-0xc4,-0x81,-0x1a3)+_0x13b9db(0x5d2,0x549,0x55f,0x5bb,0x4b8)+_0x505d84(0x453,0x42d,0x383,0x3fc,0x38d)+_0x31a352(-0x1ec,-0x11f,-0x1b5,-0x177,-0x141)+_0x31a352(-0x121,-0x296,-0x1ec,-0x284,-0x19d)+_0x505d84(0x4a5,0x4a5,0x403,0x442,0x4af)+_0x31a352(-0x198,-0x1de,-0x1f4,-0x20d,-0x2c8)+_0x13b9db(0x623,0x62f,0x5fc,0x6bc,0x5ec)+_0x31a352(-0x123,-0x1f9,-0x1b1,-0x12e,-0xf3)+_0x505d84(0x4bf,0x3e2,0x4fc,0x447,0x4b4),'cDHyS':function(_0x5f1fd1,_0x600cd4,_0x379a70,_0x36f578,_0x25ad20){return _0x5f1fd1(_0x600cd4,_0x379a70,_0x36f578,_0x25ad20);},'JpRRX':function(_0x11fbb2,_0xed8ed){return _0x11fbb2>=_0xed8ed;},'klbXQ':function(_0x220dd7,_0x35dad6){return _0x220dd7*_0x35dad6;},'zxlzw':function(_0x2dbc2b,_0x290685){return _0x2dbc2b(_0x290685);},'XoFfJ':function(_0x1fb0ed,_0xd3e291){return _0x1fb0ed!==_0xd3e291;},'dVAiT':_0x31a352(0x1,-0xba,-0x79,-0x72,-0x9b),'bfCzl':function(_0x3e4e72,_0x46b38d){return _0x3e4e72===_0x46b38d;},'PrHgb':_0x47e2d9(0x324,0x3d6,0x39f,0x369,0x41a),'jeydJ':_0x4169fc(-0x1b2,-0x18d,-0x1a2,-0x206,-0x151),'vChTk':_0x13b9db(0x659,0x60a,0x5fb,0x6b3,0x58b),'GEXMC':_0x13b9db(0x55a,0x4ef,0x4cd,0x48c,0x53d)};let _0x2e20ee=!![];function _0x4169fc(_0x3bff29,_0x593f79,_0x482926,_0x402076,_0x27ee76){return _0x3597(_0x3bff29- -0x3d9,_0x482926);}function _0x13b9db(_0x362245,_0x58c666,_0x3288fe,_0x2e689f,_0x544c81){return _0x3597(_0x58c666-0x35c,_0x362245);}function _0x47e2d9(_0x20a3d8,_0xeb95ba,_0x13fced,_0x1f270d,_0x833098){return _0x3597(_0x13fced-0x109,_0x833098);}function _0x31a352(_0x3f0ead,_0x3c3a5c,_0x4a45c7,_0x41641c,_0x559c35){return _0x3597(_0x4a45c7- -0x3ab,_0x41641c);}return function(_0xbe3cb5,_0x5e4b58){function _0x3608c6(_0x43dbe3,_0x3af8fb,_0xb2dd4a,_0x452668,_0x5e05e3){return _0x47e2d9(_0x43dbe3-0x149,_0x3af8fb-0xe1,_0x452668- -0x1af,_0x452668-0x11b,_0xb2dd4a);}function _0x3d4900(_0x4853ce,_0x5c4589,_0x2491af,_0x55d2e0,_0x4f8519){return _0x4169fc(_0x4f8519-0x3ca,_0x5c4589-0xc6,_0x4853ce,_0x55d2e0-0x153,_0x4f8519-0x96);}function _0x495d81(_0x4eb1f5,_0x57daa9,_0x498bde,_0x5172fe,_0x1c7fe7){return _0x31a352(_0x4eb1f5-0x6d,_0x57daa9-0x116,_0x57daa9-0x3cb,_0x5172fe,_0x1c7fe7-0x49);}const _0x122a0d={'dxfbA':function(_0x59446d,_0x2a4551){function _0x336acf(_0x471c33,_0x3ddedb,_0x50f1d7,_0x3c7c91,_0x2ac9b8){return _0x3597(_0x3ddedb- -0x3a,_0x50f1d7);}return _0xea46d[_0x336acf(0x30c,0x287,0x2f6,0x2d1,0x277)](_0x59446d,_0x2a4551);},'pKGVr':_0xea46d[_0x4d427f(-0x124,-0x214,-0x152,-0x191,-0x168)],'RwZYN':function(_0x4f8735,_0x3834c7,_0x3d4d83,_0x3ae878,_0x2e5fe9){function _0x4f1f20(_0xb15e1a,_0x1fdc15,_0x360323,_0x17534a,_0x1d3c77){return _0x4d427f(_0x17534a,_0x1fdc15-0x8b,_0x360323-0xcc,_0x17534a-0x1db,_0x1d3c77-0x367);}return _0xea46d[_0x4f1f20(0x263,0x189,0x253,0x31a,0x26b)](_0x4f8735,_0x3834c7,_0x3d4d83,_0x3ae878,_0x2e5fe9);},'BbIIQ':function(_0x55761d,_0x1d4d5c){function _0x16681a(_0xbe8b55,_0x23da76,_0x33cbeb,_0x4ae8e5,_0x9e1efa){return _0x4d427f(_0x33cbeb,_0x23da76-0xed,_0x33cbeb-0x5c,_0x4ae8e5-0xf3,_0x4ae8e5-0x295);}return _0xea46d[_0x16681a(0xda,0x47,0x3f,0x8d,0xa2)](_0x55761d,_0x1d4d5c);},'VAwsD':function(_0x516889,_0x18cc07){function _0x14a0be(_0x51fa5a,_0x2b1fe4,_0x306666,_0x546a4f,_0x147f51){return _0x4d427f(_0x147f51,_0x2b1fe4-0x55,_0x306666-0xf,_0x546a4f-0xe7,_0x2b1fe4-0x1fc);}return _0xea46d[_0x14a0be(0x222,0x16a,0xbd,0xd7,0xbf)](_0x516889,_0x18cc07);},'qyhkJ':function(_0x339f03,_0x13335b){function _0x7930c3(_0x29fd4e,_0x1efdbd,_0x560238,_0x275b50,_0x496cc2){return _0x4d427f(_0x275b50,_0x1efdbd-0x184,_0x560238-0x158,_0x275b50-0x23,_0x560238-0x18c);}return _0xea46d[_0x7930c3(0x73,0x41,0x2a,-0x88,-0x7c)](_0x339f03,_0x13335b);},'zmwXs':function(_0x266707,_0x421daf){function _0xf185d9(_0x28cb17,_0x328820,_0x5ebcfb,_0x1c27c7,_0x8fddf0){return _0x4d427f(_0x5ebcfb,_0x328820-0x3e,_0x5ebcfb-0x6d,_0x1c27c7-0x1b2,_0x8fddf0-0x459);}return _0xea46d[_0xf185d9(0x3dc,0x396,0x35d,0x385,0x3b2)](_0x266707,_0x421daf);},'OeJwd':_0xea46d[_0x4d427f(-0x235,-0x16f,-0x1ab,-0x24a,-0x170)],'IBcFg':function(_0x3760fc,_0x16f098){function _0xfb2cfe(_0x17b90d,_0x225a26,_0x1a615a,_0x53a68b,_0x541490){return _0x3d4900(_0x1a615a,_0x225a26-0x168,_0x1a615a-0x126,_0x53a68b-0x1d7,_0x225a26-0x111);}return _0xea46d[_0xfb2cfe(0x486,0x415,0x41e,0x39d,0x449)](_0x3760fc,_0x16f098);},'lVbZP':_0xea46d[_0x4d427f(-0x7e,-0x3c,-0x14e,-0x44,-0xe5)],'KpBbS':_0xea46d[_0x3608c6(0x18b,0x244,0x219,0x1d7,0x2af)]};function _0x203eec(_0x2d9f76,_0x1141a3,_0x539a33,_0x1b4353,_0x4c0387){return _0x13b9db(_0x1b4353,_0x4c0387- -0x621,_0x539a33-0x1d0,_0x1b4353-0x57,_0x4c0387-0x1ab);}function _0x4d427f(_0x719f3b,_0x2bacf8,_0x102ed2,_0x120ce9,_0x58772e){return _0x505d84(_0x719f3b-0x19f,_0x2bacf8-0xf4,_0x719f3b,_0x120ce9-0x11,_0x58772e- -0x550);}if(_0xea46d[_0x203eec(0x9c,0xf5,0x108,-0x7c,0x4e)](_0xea46d[_0x3608c6(0xaf,0x74,0x9c,0xec,0x30)],_0xea46d[_0x3d4900(0xd9,0x13c,0x183,0x1d1,0x1af)])){if(_0x3390da){const _0x3bb354=_0x310c4b[_0x203eec(0x1,0x31,-0xd7,-0x1b,-0x9f)](_0x428194,arguments);return _0x3c743b=null,_0x3bb354;}}else{const _0x5c21f8=_0x2e20ee?function(){function _0x2406b7(_0x245007,_0x3924d6,_0xfc7061,_0x20ae30,_0x153d62){return _0x3608c6(_0x245007-0xb,_0x3924d6-0x167,_0x153d62,_0x3924d6- -0x4a,_0x153d62-0x42);}function _0x335c40(_0x14490d,_0x425fa4,_0x5b6ff6,_0x353248,_0x33a2e0){return _0x3d4900(_0x353248,_0x425fa4-0x1,_0x5b6ff6-0x61,_0x353248-0x119,_0x14490d-0x159);}function _0x2ff19f(_0x8cd7f8,_0x108601,_0x2c9c54,_0xbcd509,_0xb65848){return _0x3608c6(_0x8cd7f8-0x192,_0x108601-0xa8,_0x108601,_0xbcd509-0x2f3,_0xb65848-0x111);}const _0x51eb0b={'GEXfT':function(_0x421dd7,_0xf02e37,_0x5c5af1,_0x6b93c4,_0x4d978f){function _0x3950f1(_0x400520,_0x2f6c7a,_0x2e00dd,_0x39fecc,_0x50f543){return _0x3597(_0x400520-0x259,_0x50f543);}return _0x122a0d[_0x3950f1(0x427,0x4db,0x479,0x370,0x473)](_0x421dd7,_0xf02e37,_0x5c5af1,_0x6b93c4,_0x4d978f);},'OdnWk':function(_0x523a73,_0x5b60d1){function _0x3734c9(_0x1e8b53,_0x177e17,_0x4951a2,_0x29af87,_0x159302){return _0x3597(_0x4951a2- -0x302,_0x159302);}return _0x122a0d[_0x3734c9(-0x10d,-0x15c,-0x13c,-0x192,-0x15c)](_0x523a73,_0x5b60d1);},'AxGwe':function(_0x17fc5e,_0x436a89){function _0x1997c1(_0x32f1c2,_0x45bddf,_0x558643,_0x57d0f8,_0x16b3ca){return _0x3597(_0x16b3ca- -0x33b,_0x45bddf);}return _0x122a0d[_0x1997c1(-0xfc,-0x1b,-0xe2,-0x166,-0x84)](_0x17fc5e,_0x436a89);},'HHycN':function(_0x1e09ac,_0x558bd4){function _0x2ce654(_0x44a1fd,_0x1aed12,_0x58f57d,_0x152f69,_0x129ba0){return _0x3597(_0x129ba0- -0x1f,_0x58f57d);}return _0x122a0d[_0x2ce654(0x345,0x2cc,0x369,0x323,0x32d)](_0x1e09ac,_0x558bd4);},'lIStn':_0x122a0d[_0x2ff19f(0x4fa,0x495,0x54e,0x4c8,0x45a)]};function _0x201cdc(_0x4b477c,_0xf04cc8,_0x1976b4,_0x59b84b,_0x49c08f){return _0x3608c6(_0x4b477c-0x11b,_0xf04cc8-0xb3,_0x49c08f,_0x1976b4- -0x58,_0x49c08f-0x18a);}function _0x124996(_0x459b7d,_0xa22b4,_0x3be2d5,_0x347015,_0x3940e2){return _0x495d81(_0x459b7d-0xeb,_0x3be2d5-0x268,_0x3be2d5-0x40,_0xa22b4,_0x3940e2-0x16a);}if(_0x122a0d[_0x2ff19f(0x59e,0x427,0x5de,0x505,0x5e3)](_0x122a0d[_0x2406b7(0xfd,0x163,0xff,0x89,0x1bd)],_0x122a0d[_0x2ff19f(0x41e,0x3bd,0x4ec,0x4a0,0x424)]))_0x51eb0b[_0x2406b7(0x25f,0x258,0x2e9,0x336,0x295)](_0x51eb0b[_0x335c40(0x38d,0x32c,0x470,0x363,0x3d8)](new _0x437300(),0x1885*-0x1+-0x203*0xe+0x34b0),_0x36c689['db'][_0x2406b7(0x21c,0x245,0x1b7,0x2c9,0x1c3)][_0x335c40(0x432,0x3d1,0x45b,0x39c,0x47e)][_0x4db34c[_0x2ff19f(0x4e2,0x463,0x3ce,0x479,0x50e)+'r']][_0x201cdc(0xe8,0x1b6,0x18e,0x1c3,0x1ea)+_0x2ff19f(0x4b9,0x475,0x4b8,0x50b,0x5a2)+'e'])&&_0x51eb0b[_0x201cdc(0x17d,0xc1,0x18b,0x258,0x1b0)](_0x255ff6,_0x51eb0b[_0x2406b7(0x12b,0x148,0x134,0x85,0x136)])[_0x2ff19f(0x535,0x45a,0x580,0x4ff,0x58d)](()=>{_0x3376ed['db'][_0x5b4ca6(0xc9,0xf5,0x114,0x10c,0x147)][_0x412ec3(0xb8,0x1d5,0xf4,0x155,0x192)][_0x1f6a83[_0x5b4ca6(0x76,-0x5e,0xe9,0x70,0x3e)+'r']][_0x1899fa(0x5aa,0x5fa,0x5c4,0x628,0x691)+'um']=![];function _0x412ec3(_0x447562,_0x1c0965,_0x275831,_0x185197,_0x1358b2){return _0x2406b7(_0x447562-0x1f0,_0x1358b2- -0x66,_0x275831-0x88,_0x185197-0x113,_0x447562);}function _0x60a21b(_0x4521d8,_0xb800e,_0x1f4ccf,_0x56d1c3,_0x51c0ad){return _0x201cdc(_0x4521d8-0x1a6,_0xb800e-0x107,_0x4521d8- -0xcd,_0x56d1c3-0x1b7,_0x1f4ccf);}function _0x5008ae(_0x2885ae,_0x2430e5,_0x130ae7,_0x1d9ae6,_0x2317d4){return _0x201cdc(_0x2885ae-0x101,_0x2430e5-0x1e4,_0x2430e5- -0x11a,_0x1d9ae6-0x24,_0x130ae7);}function _0x1899fa(_0xc2be3,_0x38079c,_0x51bdde,_0x380db1,_0x1a28a4){return _0x124996(_0xc2be3-0x4a,_0x38079c,_0x380db1-0x114,_0x380db1-0x50,_0x1a28a4-0x1b5);}function _0x5b4ca6(_0x528dda,_0x336ece,_0x26b22d,_0x5839f3,_0x465701){return _0x201cdc(_0x528dda-0x84,_0x336ece-0x35,_0x465701- -0xf0,_0x5839f3-0xb,_0x26b22d);}_0x5ae496['db'][_0x5b4ca6(0x1c8,0x1c9,0x1cf,0x1a2,0x147)][_0x1899fa(0x6e9,0x5c0,0x74c,0x684,0x679)][_0x76c84b[_0x5b4ca6(-0x2d,0x12,-0x20,-0xe,0x3e)+'r']][_0x5008ae(0x37,-0x3e,-0xff,0x4c,0xa4)]=_0x5f069e[_0x5b4ca6(-0xb3,0x9a,0x59,0x3b,-0x14)+_0x5008ae(0x141,0xbe,-0x23,0x171,0x19d)][_0x5008ae(0xa1,0x7b,0xd,0x159,0xec)],_0x51eb0b[_0x5b4ca6(0x110,-0xe,0x58,0x126,0x7d)](_0x163b8b,_0x10355f,_0x3d57b7[_0x5b4ca6(0x10,0x121,0x83,0x36,0xa1)],_0x18fabb[_0x60a21b(0xea,0x128,0xc4,0x68,0x61)],_0x6a2d44);});else{if(_0x5e4b58){if(_0x122a0d[_0x335c40(0x468,0x457,0x51d,0x384,0x3e9)](_0x122a0d[_0x335c40(0x48e,0x418,0x55a,0x3c3,0x56d)],_0x122a0d[_0x2406b7(0x1cc,0x1fb,0x12f,0x28a,0x2d0)]))_0x122a0d[_0x124996(0x541,0x445,0x4f0,0x496,0x541)](_0x671fa0,_0x122a0d[_0x2406b7(0x14d,0x18b,0x228,0x1d1,0x157)])[_0x2406b7(0x25d,0x1c2,0x141,0x239,0x117)](()=>{function _0x269d8c(_0x40c07b,_0x2a7180,_0x4aaabc,_0x36957c,_0x4b3dcd){return _0x2ff19f(_0x40c07b-0xf4,_0x4b3dcd,_0x4aaabc-0x188,_0x2a7180-0x108,_0x4b3dcd-0x113);}function _0x794a0a(_0xd852d5,_0x5bd777,_0x43961d,_0x16158d,_0x1dfbef){return _0x124996(_0xd852d5-0xee,_0x16158d,_0x1dfbef- -0x12d,_0x16158d-0xf0,_0x1dfbef-0x16a);}function _0x3954f3(_0x32033d,_0x3a778f,_0x138a29,_0x30766b,_0x36519f){return _0x2406b7(_0x32033d-0xe5,_0x36519f-0x18d,_0x138a29-0x32,_0x30766b-0x82,_0x3a778f);}function _0x5ede00(_0x4b0c61,_0x4d950a,_0x5e7ad4,_0xd93c72,_0x23b8ee){return _0x335c40(_0x4d950a- -0x172,_0x4d950a-0xb0,_0x5e7ad4-0x163,_0xd93c72,_0x23b8ee-0x1f3);}_0x1e318a['db'][_0x3bab31(0x637,0x671,0x6b6,0x5ac,0x6c3)][_0x269d8c(0x6ab,0x63d,0x645,0x6cf,0x5f8)][_0x3acced[_0x3bab31(0x52e,0x4ab,0x46b,0x47a,0x53a)+'r']][_0x5ede00(0x2b7,0x264,0x2f1,0x1b5,0x230)+'um']=![];function _0x3bab31(_0x2cb4b9,_0x6c5ba6,_0x438b2b,_0x42de20,_0x436dd2){return _0x2406b7(_0x2cb4b9-0xec,_0x2cb4b9-0x3f2,_0x438b2b-0x23,_0x42de20-0x1b8,_0x42de20);}_0x10748e['db'][_0x3954f3(0x310,0x390,0x44b,0x405,0x3d2)][_0x269d8c(0x654,0x63d,0x613,0x60c,0x677)][_0x24ad5a[_0x3954f3(0x220,0x30d,0x25b,0x364,0x2c9)+'r']][_0x269d8c(0x52e,0x52f,0x602,0x4fb,0x5bc)]=_0x2e8804[_0x5ede00(0x124,0x1b2,0xd4,0x1ea,0x17e)+_0x269d8c(0x6e8,0x62b,0x5ec,0x5a6,0x5b1)][_0x269d8c(0x615,0x5e8,0x587,0x5fd,0x69c)],_0x51eb0b[_0x3954f3(0x296,0x3d6,0x2b8,0x292,0x308)](_0x48d6cf,_0x4a3c90,_0x125fbc[_0x794a0a(0x383,0x327,0x356,0x378,0x3ea)],_0x44de15[_0x794a0a(0x437,0x3f0,0x455,0x4f0,0x410)],_0x373d4e);});else{const _0x7f0b7c=_0x5e4b58[_0x2ff19f(0x469,0x530,0x4d0,0x473,0x416)](_0xbe3cb5,arguments);return _0x5e4b58=null,_0x7f0b7c;}}}}:function(){};return _0x2e20ee=![],_0x5c21f8;}};}());(function(){function _0x419212(_0x5a9141,_0x1c2f33,_0x532320,_0x5c322b,_0x34199c){return _0x3597(_0x532320-0x345,_0x5c322b);}function _0x2fdfb7(_0x50f4d3,_0x522bd0,_0x4f3afa,_0x3be60f,_0x39a7cc){return _0x3597(_0x4f3afa-0x154,_0x50f4d3);}function _0x5bd170(_0x22cc03,_0x1cee73,_0x41dd23,_0x8295d9,_0xed089d){return _0x3597(_0x41dd23- -0x2f9,_0x1cee73);}function _0x1cf82a(_0x4e5898,_0x33e778,_0xea4ab3,_0x3f260b,_0x474922){return _0x3597(_0x4e5898-0x6,_0xea4ab3);}const _0x411997={'FADrN':function(_0x1e1457,_0x31690a){return _0x1e1457===_0x31690a;},'LCDre':_0x1cf82a(0x26f,0x19e,0x198,0x34b,0x2f1),'Ucrmz':_0x5bd170(-0x91,-0xdc,-0x14d,-0xc4,-0x228)+_0x419212(0x4c2,0x59f,0x50d,0x5a5,0x517)+_0x5bd170(-0x97,0x6d,-0x15,-0x55,-0x7)+')','PHfvF':_0x5bd170(0x99,-0xbe,-0x3d,-0x69,0x8)+_0x5bd170(-0x4e,-0xca,-0x7a,-0x157,0x4)+_0x5bd170(-0xfa,-0x1a4,-0xe2,-0x127,-0xb5)+_0x1cf82a(0x19c,0x1fc,0xbd,0x266,0x1c6)+_0x1cf82a(0x1e6,0x2b0,0x28d,0x163,0x132)+_0x419212(0x64c,0x640,0x67f,0x5f7,0x6f8)+_0x5bd170(-0x8b,-0xd,-0x8a,0x6,-0x8b),'TwxIe':function(_0x5c0e42,_0x2db173){return _0x5c0e42(_0x2db173);},'IXXUz':_0x419212(0x4a3,0x5f9,0x573,0x5e4,0x4a6),'WQWYZ':function(_0x20c0ce,_0x1711c8){return _0x20c0ce+_0x1711c8;},'qJnGz':_0x419212(0x531,0x50d,0x56a,0x572,0x5fe),'lQXPV':_0x2fdfb7(0x484,0x448,0x48f,0x43c,0x49b),'ykWkD':function(_0xc6fc08,_0xa7c51d){return _0xc6fc08===_0xa7c51d;},'FYfwP':_0x1cf82a(0x2c0,0x32b,0x211,0x22f,0x21a),'umpfz':function(_0x4c2229,_0x4f0765){return _0x4c2229(_0x4f0765);},'tVHUE':function(_0x3b6a4e,_0x2ce69f){return _0x3b6a4e!==_0x2ce69f;},'ACyiS':_0x419212(0x699,0x6f7,0x667,0x5a0,0x719),'IpypN':_0xdf0e3d(0x26d,0x15c,0x263,0x1f8,0x1cf),'DGkHx':function(_0x176f4e){return _0x176f4e();},'QlEki':function(_0x336c0d,_0x2e64fe,_0x4d5db6){return _0x336c0d(_0x2e64fe,_0x4d5db6);}};function _0xdf0e3d(_0x2d4515,_0x163a81,_0x58521d,_0x49d334,_0x45167f){return _0x3597(_0x49d334-0x4b,_0x2d4515);}_0x411997[_0x2fdfb7(0x3a9,0x362,0x35d,0x346,0x2b9)](_0x23d653,this,function(){function _0x43042c(_0x271825,_0x4ef3c4,_0x28fdb0,_0x4c3cd5,_0x4b23a2){return _0x5bd170(_0x271825-0x43,_0x4ef3c4,_0x28fdb0-0x3ce,_0x4c3cd5-0x1bf,_0x4b23a2-0x1c2);}function _0x14e494(_0x252b02,_0x4e06b4,_0x22b879,_0x39966b,_0x13942a){return _0x5bd170(_0x252b02-0x1b8,_0x4e06b4,_0x13942a- -0x44,_0x39966b-0xed,_0x13942a-0x1c2);}function _0x45bcc1(_0x4b081d,_0x14b2c8,_0x460154,_0x629067,_0x326b12){return _0xdf0e3d(_0x629067,_0x14b2c8-0x14,_0x460154-0xfc,_0x4b081d-0x23c,_0x326b12-0x42);}function _0x261fcb(_0xcf8f1d,_0x33c03b,_0x265933,_0x600f4b,_0x365cdd){return _0x419212(_0xcf8f1d-0xd7,_0x33c03b-0x62,_0x600f4b- -0x1df,_0x265933,_0x365cdd-0x120);}function _0x461839(_0x3c9705,_0x282832,_0x4ba531,_0x27277d,_0x996c49){return _0xdf0e3d(_0x4ba531,_0x282832-0x194,_0x4ba531-0x1b6,_0x3c9705- -0x3df,_0x996c49-0x157);}if(_0x411997[_0x261fcb(0x2a8,0x353,0x2a4,0x2fd,0x2b1)](_0x411997[_0x261fcb(0x3a6,0x42c,0x4f6,0x435,0x3a7)],_0x411997[_0x261fcb(0x40d,0x4a8,0x445,0x435,0x40f)])){const _0x108f6c=new RegExp(_0x411997[_0x261fcb(0x3cb,0x3d7,0x3e0,0x42a,0x490)]),_0x2feaeb=new RegExp(_0x411997[_0x461839(-0x61,-0xd,-0xf9,-0x25,-0x55)],'i'),_0x9a081e=_0x411997[_0x261fcb(0x3b5,0x2b5,0x272,0x302,0x265)](_0x332113,_0x411997[_0x461839(-0x93,-0x4b,-0xfb,-0x46,0x3e)]);if(!_0x108f6c[_0x261fcb(0x3a8,0x439,0x380,0x40d,0x409)](_0x411997[_0x45bcc1(0x47f,0x463,0x4e4,0x509,0x3f8)](_0x9a081e,_0x411997[_0x45bcc1(0x42a,0x34c,0x36c,0x3bd,0x424)]))||!_0x2feaeb[_0x461839(-0xed,-0x79,-0x111,-0x66,-0x192)](_0x411997[_0x45bcc1(0x47f,0x544,0x41e,0x559,0x420)](_0x9a081e,_0x411997[_0x261fcb(0x3ca,0x366,0x398,0x409,0x416)]))){if(_0x411997[_0x43042c(0x1a6,0x273,0x26d,0x29d,0x1d3)](_0x411997[_0x261fcb(0x3e9,0x364,0x29c,0x37a,0x2ac)],_0x411997[_0x14e494(-0x197,-0x1f9,-0x154,-0x75,-0x129)]))_0x411997[_0x43042c(0x380,0x364,0x40d,0x3e1,0x33f)](_0x9a081e,'0');else return _0x4a2704;}else _0x411997[_0x461839(-0xde,-0x72,-0x12b,-0x47,0x2)](_0x411997[_0x14e494(-0xbd,-0xf3,0x96,-0xe,-0x3e)],_0x411997[_0x45bcc1(0x465,0x400,0x53b,0x499,0x3be)])?_0x411997[_0x461839(-0x49,0x24,0x87,-0x116,-0x104)](_0x332113):_0x5751a0[_0x43042c(0x263,0x2f8,0x347,0x328,0x416)+_0x461839(-0xef,-0x103,-0x16b,-0x22,-0x142)](_0x3dbf95[_0x14e494(-0x195,-0x194,-0x1db,-0xb4,-0x111)+'r']);}else debugger;})();}());if(m[_0x222e94(0x2a1,0x221,0x295,0x1ed,0x1fa)+'ge']&&global[_0x44d338(0x3b4,0x495,0x350,0x33b,0x3f1)+_0x44d338(0x43d,0x46a,0x419,0x4f6,0x36f)]){const _0x2910fc={};_0x2910fc[_0x182f64(0x339,0x3bd,0x252,0x409,0x32b)+_0x2986f8(-0x184,-0x2d,-0x1b3,-0xf3,-0x173)]=m[_0x182f64(0x314,0x328,0x2bc,0x408,0x378)],_0x2910fc['id']=m[_0x44d338(0x51b,0x4bb,0x5fb,0x5f9,0x4b9)]['id'],_0x2910fc[_0x44d338(0x3fd,0x387,0x367,0x39b,0x48f)+_0x222e94(0x15b,0x21b,0x166,0x199,0x2d5)+'t']=m[_0x2986f8(0x59,0x45,0x9,0x72,0x107)+'up']?m[_0x2986f8(0x8f,-0x36,-0x14,0x89,0x3d)][_0x2986f8(-0x6c,-0x51,-0x13,-0x95,0x9)+_0x182f64(0x340,0x45f,0x35e,0x32b,0x384)+'t']:undefined;const readkey=_0x2910fc;await alpha[_0x182f64(0x436,0x3a9,0x436,0x2b4,0x391)+_0x2986f8(-0xc5,-0xaa,-0x170,-0xba,-0xd5)+'es']([readkey]);}function _0x182f64(_0x2be334,_0x4ce80a,_0x1681db,_0x1aa1b8,_0x740438){return _0x3597(_0x740438-0xe9,_0x1681db);}function _0x2986f8(_0x8b1ab3,_0x1a6e4c,_0x2f4e70,_0x315ee5,_0x52679c){return _0x3597(_0x315ee5- -0x2b5,_0x52679c);}const msgFilter=require(_0x41d85a(0x525,0x51a,0x4bf,0x489,0x48a)+_0x2986f8(0x92,-0x15,0x3a,0x88,0x146)+_0x222e94(0x1ca,0x15d,0x163,0x1b8,0xf0));function _0x1d29(){const _0x2afe6b=['inclu','n\x20kan','dan\x20.','exp','sendM','\x20spam','inter','tory\x20','funct','lVVxw','I\x27m\x20','singl','/cmd.','rpg','o.jso','fXbJu','JpRRX','SuDXR','RedIw','pgrad','base6','VpoBU','CXmEL','evel\x20','net/v','jRJQV','GEXMC','er\x20un','wNfAT','blueB','eJid','f=fal','edChe','Mode','BbIIQ','CMHiI','ion\x20*','nvent','CplML','Inven','CmVhl','l\x20Seb','RwZYN','xupRU','jLQkF','te\x20Ch','RBUWD','text','rAqpJ','\x203\x20se','ment.','autor','ame','a\x20tel','limit','ion','qbqSB','spam','IpypN','XBqbt','0-9a-','2122053LBLrDl','\x20.gam','srsqh','plier','GhisW','s,\x20','TdZGl','epat!','AVRaR','ujViJ','list\x20','multi','rakhi','MIpTP','[\x20SPA','ges.u','tedBu','autob','ext','file','dtwLF','t\x20own','BVyfJ','WQWYZ','r\x0aCha','mium\x20','essag','rpwCg','lok21','cIIyE','\x20Leve','ykxZA','l!\x0a->','espon','://Te','user','firts','YOrxn','tmp.','\x20🤖\x20|\x20','QlEki','naja-','nativ','XNbnN','yello','FtNih','PCUeG','M\x20]','ThLXL','jkFgT','fileS','FYfwP','Messa','erCas','a-zA-','!!!','k\x20sta','/vide','eFlow','KdlCu','image','/stik','emit','parti','objec','bgGre','oneof','ngs','chain','apply','xkenr','TiSPd','remiu','ons','lXHew','sende','2/?lc','init','ined','PsSTP','log','param','aOudE','sJson','k\x20lev','geCon','lYrtG','lIStn','uptim','wkBzY','s\x20:\x20','qAwkY','KEKPD','pl.co','cek\x20i','/vn.j','nse','remot','AxGwe','🎮\x20Gam','msg','9565234rxjDGa','VermW','xt=','=>\x20Da','etPVW','\x20⏰\x20|\x20','dVAiT','elumn','\x20game','succe','canLe','psert','IWpmN','OeJwd','DseiK','/docu','MLrEd','Self\x20','appen','m\x20per','zxlzw','5606175maXUZA','YaCSd','rem','ha256','terva','ead','e.jso','menti','tyoox',',\x20Coo','twKMj','581386RHUuqB','Statu','dxfbA','ItspP','/imag','GEXfT','NEzQJ','k\x20mel','SZAUC','$]*)','setIn','magen','addFi','bih\x20c','\x20Kiri','ttonI','DVQPb','selec','textI','HfxVJ','tered','pKGVr','Info','jeydJ','Respo','*(?:[','onlyP','rQARi','6912924ozafQu','8BjBDUl','right','start','\x20leve','block','isFil','HHycN','vJTTO','trim','premi','NdGmr','atus','chat','son','strin','k\x20nai','free','butto','ole\x20:','yLzOe','name','el\x20le','KMklM','listR','cipan','bgBlu','lIexA','fromM','lFoHN','expir','messa','ah\x20be','lQXPV','ayNWF','lter','c\x20Mod','test','readM','nfo','isIma','ory\x20k','amu\x20\x0a','lQWYe','gAncC','bject','onseM','VBWgo','then','sWith','IDbfI','owner','tVHUE','VAwsD','zmwXs','ldown','IYwBU','publi','\x5c+\x5c+\x20','banne','umDat','kEFWn','cDHyS','CkYXq','QErzK','https','Ucrmz','getBa','sage','tus\x20p','eResp','autol','abase','pgdaP','./dat','bgWhi','se&te','LCDre','rihJl','fakeO','evelu','e\x20pre','keys','ssage','awal','PrHgb','Don\x27t','BNzzv','lengt','POST','emenu','.inv','./lib','zBesT','Forwa','ing','\x20|\x20','\x0a🎉\x20Co','\x5c(\x20*\x5c','json','toLow','nDhfv','users','khOkz','role','KpBbS','velUp','undef','green','setSt','=>\x20Di','\x20User','respo','lqgvx','quote','Publi','waktu','setti','m\x20and','OUxZk','i.sim','nsRes','mtype','updat','zAaGd','ACyiS','=id&c','IXXUz','inv\x20u','activ','ponse','ZCXOx','fvTQO','/uplo','fromO','eBloc','send2','toStr','ntuk\x20','Maaf\x20','/text','ileSy','Qkjns','ihat\x20','readF','bfCzl','simi.','XoFfJ','Gfzcd','eSele','WcGiq','Priva','://ap','tuk\x20u','game\x20','intah','IBcFg','.game','lagi','cFCCd','dyROH','bGdEK','\x20kamu','.json','WebMe','isGro','Chat','\x20naik','klbXQ','Kbdla','ftOrO','\x0a->\x20L','parse','Baru\x20','pushN','\x0a->\x20R','DPyym','PHfvF','ctRep','data','ButMe','ya\x20:\x20','umpfz','conds','zA-Z_','input','nseMe','/anti','key','_url','xEvNv','YxBbf','1.zee','level','lVbZP','AODld','copyN','gvCeh','OdnWk','first','gftWh','DGkHx','qyhkJ','212','VFGFy','des','menu','462512gtcPGf','BCesc','VvjOe','\x20untu','bnlIC','kStat','seMes','BFLPI','vChTk','fUvuU','tedRo','\x0a\x0aMai','Z_$][','FADrN','ykWkD','uRRrA','wId','nurEa','TwxIe','LtVav','menge','ngrat','c2.re','4203064eicYxv','black','qJnGz'];_0x1d29=function(){return _0x2afe6b;};return _0x1d29();}if(!isCreator&&!m[_0x222e94(0x339,0x2be,0x328,0x20f,0x238)][_0x222e94(0x1e1,0x21e,0x1c1,0x21a,0x1ab)+'e']&&isCmd&&msgFilter[_0x2986f8(-0xa,-0x32,0x7f,-0x2d,-0xa1)+_0x41d85a(0x4c1,0x3f0,0x412,0x513,0x4db)](m[_0x182f64(0x2bf,0x275,0x2ad,0x251,0x315)+'r'])){console[_0x2986f8(-0x14,-0xca,-0xaf,-0x84,-0xbe)](chalk[_0x2986f8(-0x1b7,-0x19b,-0x1ea,-0x113,-0xbf)](chalk[_0x182f64(0x37e,0x3d2,0x3a8,0x2fd,0x3b6)+'te'](_0x182f64(0x218,0x23c,0x3a0,0x2b8,0x2d8)+_0x2986f8(0x17,-0xbe,0x2f,-0xa5,-0xcc))),chalk[_0x44d338(0x37f,0x43d,0x3f4,0x45b,0x3f0)](chalk[_0x41d85a(0x469,0x3a9,0x534,0x45b,0x3d7)+'en'](new Date())),chalk[_0x2986f8(-0xfc,-0xb3,-0x1ad,-0x113,-0x149)](chalk[_0x182f64(0x37e,0x2a6,0x42a,0x3dd,0x385)+'e'](budy||m[_0x41d85a(0x543,0x47e,0x60a,0x521,0x50d)]))+'\x0a'+chalk[_0x222e94(0x1f2,0x1f1,0x1b8,0x24f,0x223)+'ta'](_0x41d85a(0x490,0x40e,0x4be,0x3c9,0x423)+'ri'),chalk[_0x182f64(0x3b2,0x3cf,0x47e,0x4a0,0x3d7)](pushname),chalk[_0x2986f8(-0xf6,-0x17d,-0x166,-0xa8,-0x14b)+'w'](m[_0x44d338(0x409,0x47f,0x48e,0x3d3,0x3b1)+'r'])+'\x0a'+chalk[_0x2986f8(-0x80,-0x14,-0xe6,-0xf4,-0xc7)+_0x222e94(0x14d,0x204,0x203,0x2c3,0x27e)](_0x41d85a(0x537,0x4e5,0x5bf,0x4fe,0x4a5)),chalk[_0x41d85a(0x535,0x536,0x5a9,0x488,0x612)](m[_0x222e94(0x285,0x2a7,0x320,0x23b,0x24b)+'up']?pushname:_0x41d85a(0x560,0x56f,0x57d,0x50d,0x5fd)+_0x41d85a(0x418,0x3fe,0x484,0x451,0x4d6)+'at',m[_0x182f64(0x2af,0x2a3,0x455,0x2d9,0x378)])),reply(_0x2986f8(0x1b,-0x84,0x6a,0x23,-0x81)+_0x222e94(0x134,0x129,0xee,0x54,0x15f)+_0x44d338(0x441,0x3f2,0x3b6,0x433,0x4e8)+_0x222e94(0x183,0x239,0x279,0x197,0x174)+_0x222e94(0x126,0x155,0x187,0x17b,0x1b5)+_0x222e94(0x1fb,0x2b9,0x1d7,0x280,0x252)+_0x2986f8(-0xd0,-0xb7,-0xaa,-0x9d,-0xcc));return;}isCmd&&msgFilter[_0x44d338(0x44f,0x4e8,0x505,0x466,0x4c5)+_0x182f64(0x2c7,0x37e,0x3e0,0x359,0x38e)](m[_0x2986f8(0xb,0x42,-0x125,-0x89,-0x13b)+'r']);_sewa[_0x182f64(0x2da,0x3b1,0x2c8,0x2f3,0x389)+_0x222e94(0x1ec,0x144,0x215,0x1f6,0x106)+'ck'](alpha,sewa);if(m[_0x44d338(0x409,0x434,0x4a9,0x470,0x40d)+'r'][_0x182f64(0x307,0x3e1,0x389,0x2dc,0x36e)+_0x41d85a(0x4fa,0x50b,0x442,0x587,0x433)](_0x182f64(0x3ac,0x376,0x40f,0x389,0x436))&&global[_0x182f64(0x262,0x337,0x362,0x291,0x2db)+_0x222e94(0x182,0x17d,0x103,0xc7,0xda)+'2'])return alpha[_0x41d85a(0x544,0x60a,0x56a,0x5a7,0x53c)+_0x222e94(0x33b,0x289,0x2ad,0x29f,0x1ff)+_0x44d338(0x36c,0x40a,0x41e,0x359,0x33a)+'us'](m[_0x41d85a(0x473,0x3d0,0x41b,0x4b4,0x524)+'r'],_0x44d338(0x464,0x4e1,0x3e7,0x4f0,0x399));function _0x44d338(_0x53bcdf,_0x3b5620,_0xff112a,_0x1002fa,_0x33df38){return _0x3597(_0x53bcdf-0x1dd,_0x3b5620);}if(m[_0x2986f8(0x2b,0x7a,-0x89,0x3f,0xd4)+'d']?!m[_0x222e94(0x193,0x274,0x2d9,0x2d9,0x298)+'d'][_0x44d338(0x4d9,0x4b4,0x445,0x579,0x47d)]==_0x41d85a(0x4db,0x4f5,0x486,0x4f2,0x4f2)+_0x222e94(0x1fb,0x27b,0x31a,0x2ad,0x2c2)+_0x2986f8(0xf6,0x8,0x57,0x4f,0x6d)+_0x222e94(0xce,0x195,0x22a,0x175,0xd5)+'ge':!![]&&!m[_0x2986f8(0x110,0x48,0x102,0x72,-0x23)+'up']&&!m[_0x41d85a(0x585,0x514,0x556,0x5ab,0x4e1)][_0x41d85a(0x4e5,0x4ff,0x55c,0x413,0x5a3)+'e']&&m[_0x44d338(0x47e,0x48c,0x3f3,0x39a,0x406)+'ge']&&!(new Date()-db[_0x222e94(0x235,0x2b5,0x294,0x24d,0x349)][_0x44d338(0x4c5,0x4d6,0x3e6,0x48f,0x4a2)][m[_0x2986f8(-0x38,-0x141,0x13,-0x89,-0x9d)+'r']]['pc']<0x34*-0x1b902e+0x462f509*0x1+0x65cb04f)&&global[_0x41d85a(0x44c,0x454,0x3dc,0x3ba,0x3e2)+_0x41d85a(0x56f,0x598,0x4f3,0x60f,0x610)]){let user=db[_0x222e94(0x2cb,0x2b5,0x249,0x323,0x325)][_0x44d338(0x4c5,0x44c,0x426,0x531,0x3fe)][m[_0x2986f8(-0x100,0x17,-0x169,-0x89,-0xc5)+'r']];alpha[_0x182f64(0x32d,0x1ee,0x252,0x2e3,0x291)+_0x44d338(0x3d8,0x382,0x445,0x429,0x2ff)+'e'](m[_0x44d338(0x46c,0x40e,0x42d,0x44f,0x491)],{'text':''+(user[_0x44d338(0x49a,0x4c5,0x4a2,0x40b,0x417)+'d']?lang[_0x222e94(0x2a4,0x245,0x218,0x261,0x2b3)+'n']():lang[_0x182f64(0x459,0x459,0x4e2,0x449,0x432)+_0x44d338(0x505,0x4ca,0x537,0x4cf,0x4cf)](salam,pushname,botname))},{'quoted':m}),user['pc']=new Date()*(-0x116f*-0x1+-0x2*-0x131+0x2*-0x9e8);}if(global[_0x41d85a(0x439,0x3f8,0x4ef,0x4d1,0x3e2)+'io']){let settingstatus=0x1*0xc7+-0x168c+0x15c5;new Date()*(0x36*-0xa2+-0x1040+0x326d)-settingstatus>-0xa*-0x99+0x2b6*0x1+0x99*-0x8&&(await alpha[_0x41d85a(0x536,0x4d9,0x4b7,0x59a,0x508)+_0x44d338(0x46b,0x487,0x484,0x387,0x53b)](_0x41d85a(0x3f5,0x45f,0x44a,0x4bb,0x40a)+botname+_0x44d338(0x3e5,0x364,0x3fa,0x3f4,0x479)+runtime(process[_0x182f64(0x27d,0x253,0x298,0x303,0x322)+'e']())+(_0x44d338(0x428,0x459,0x42a,0x421,0x352)+_0x2986f8(0x3f,0x3b,0x69,-0x4e,0x60)+_0x44d338(0x418,0x3d2,0x49c,0x4af,0x39d))+(alpha[_0x44d338(0x498,0x404,0x3e4,0x50d,0x552)+'c']?_0x2986f8(0x45,0x10b,0xc,0x40,0x9)+_0x222e94(0x157,0x226,0x299,0x1b9,0x1b7)+'e':_0x44d338(0x434,0x475,0x418,0x40b,0x483)+_0x41d85a(0x40c,0x46e,0x35d,0x489,0x4b7))+_0x41d85a(0x529,0x556,0x520,0x4c9,0x4b1)+Object[_0x182f64(0x39e,0x367,0x476,0x430,0x3bd)](global['db'][_0x44d338(0x512,0x48d,0x4e5,0x49d,0x502)][_0x2986f8(0x54,0x4,0xd4,0x33,0xc1)])[_0x44d338(0x4b7,0x52c,0x4e1,0x564,0x42c)+'h']+(_0x41d85a(0x538,0x48b,0x4ee,0x546,0x4a3)+'s')),settingstatus=new Date()*(-0x14fc+-0x3*-0x19e+0x1023));}!m[_0x41d85a(0x56e,0x5b5,0x4e1,0x53a,0x5e7)+'up']&&!m[_0x182f64(0x3b8,0x4a7,0x3d5,0x450,0x427)][_0x41d85a(0x4e5,0x45e,0x460,0x49e,0x465)+'e']&&db[_0x182f64(0x40b,0x387,0x4ee,0x3bc,0x41e)][_0x222e94(0x1d0,0x277,0x1aa,0x1c7,0x2ba)+_0x182f64(0x3d7,0x34f,0x2a5,0x29b,0x30d)][botNumber][_0x182f64(0x324,0x2c6,0x360,0x353,0x2c0)+_0x44d338(0x3df,0x334,0x4be,0x4a3,0x450)+'d']&&!isCmd&&(simi=await fetchJson(_0x222e94(0x24b,0x243,0x20b,0x312,0x19a)+_0x2986f8(0x5,-0x6c,0x10e,0x65,0xa8)+_0x182f64(0x436,0x319,0x41a,0x358,0x3e3)+_0x44d338(0x4f1,0x587,0x4e5,0x47f,0x442)+_0x222e94(0x85,0x13c,0x7c,0x89,0x11f)+_0x2986f8(0x28,-0x23,-0xff,-0x88,-0x25)+_0x2986f8(0x122,-0x8,0x11d,0x4b,0x4f)+_0x2986f8(-0x1f,-0x18e,-0x60,-0xf2,-0x19d)+_0x44d338(0x4ab,0x3de,0x50a,0x3db,0x3fa)+_0x182f64(0x322,0x31e,0x28c,0x327,0x331)+m[_0x44d338(0x3b0,0x3d4,0x365,0x397,0x2e1)]),reply('_'+simi[_0x44d338(0x42c,0x403,0x411,0x411,0x4a0)+'ss']+'_'));!m[_0x41d85a(0x56e,0x5db,0x50d,0x596,0x632)+'up']&&!isCreator&&db[_0x41d85a(0x57c,0x5cb,0x58c,0x4dd,0x4fe)][_0x182f64(0x3d9,0x347,0x355,0x3e5,0x3d1)][m[_0x41d85a(0x473,0x514,0x507,0x42d,0x460)+'r']][_0x182f64(0x31f,0x31a,0x3f4,0x33f,0x375)+'um']&&(new Date()*(0x1317+0x2130+-0x3446)>=global['db'][_0x222e94(0x300,0x2b5,0x1e4,0x2e9,0x1db)][_0x182f64(0x45a,0x4a9,0x2fa,0x36f,0x3d1)][m[_0x41d85a(0x473,0x536,0x4b1,0x48a,0x41a)+'r']][_0x182f64(0x445,0x3d6,0x41a,0x3bd,0x375)+_0x182f64(0x34f,0x383,0x35e,0x2eb,0x3a7)+'e']&&reply(_0x182f64(0x381,0x4af,0x402,0x406,0x3f6)+_0x182f64(0x3ee,0x433,0x47f,0x3f5,0x3df)+_0x222e94(0x2b,0x10d,0x1e0,0x1b0,0x19f)+_0x222e94(0x216,0x199,0xfa,0x246,0x10d)+_0x44d338(0x4a4,0x454,0x4f7,0x55d,0x544)+_0x41d85a(0x470,0x438,0x490,0x532,0x4d2)+_0x2986f8(-0x3d,-0x21,0x73,0x43,-0x51)+_0x222e94(0xa9,0x159,0xa0,0x111,0xca)+_0x41d85a(0x4e9,0x49e,0x571,0x433,0x5a8)+_0x2986f8(-0xf5,-0xa6,-0xd3,-0xc8,-0x1d)+_0x182f64(0x28a,0x362,0x353,0x252,0x2e2)+_0x44d338(0x3d3,0x470,0x358,0x498,0x3fd)+_0x222e94(0x78,0x13f,0x1eb,0x1f5,0x10b)+_0x41d85a(0x562,0x4cd,0x634,0x614,0x53b)+_0x182f64(0x277,0x20b,0x2f1,0x235,0x2a0)+_0x41d85a(0x51a,0x518,0x5ce,0x5b8,0x4f2)+_0x2986f8(-0x138,-0xfc,-0xee,-0xbb,-0xb5)+_0x41d85a(0x567,0x53f,0x5f8,0x59d,0x50a))[_0x2986f8(-0xa0,0xaf,0x9,-0x3,0x70)](()=>{const _0x249856={'jRJQV':function(_0x151e2d,_0x5ac7d1,_0xa7e8c1,_0x395683,_0x225fda){return _0x151e2d(_0x5ac7d1,_0xa7e8c1,_0x395683,_0x225fda);}};function _0x565999(_0x316267,_0x44f8e4,_0x2a3a25,_0x400bae,_0x318bfd){return _0x44d338(_0x316267- -0xd4,_0x2a3a25,_0x2a3a25-0x13d,_0x400bae-0x124,_0x318bfd-0x135);}function _0x565489(_0x32c95f,_0x3df0cb,_0xfec0f7,_0x59b38c,_0x1ed801){return _0x222e94(_0x32c95f-0x1eb,_0x1ed801-0x144,_0xfec0f7-0xae,_0x59b38c-0x105,_0x32c95f);}function _0xd524af(_0x4f1523,_0xf53099,_0x2a9642,_0x71f381,_0x29ca5c){return _0x182f64(_0x4f1523-0x1aa,_0xf53099-0xac,_0x4f1523,_0x71f381-0xac,_0x2a9642-0xeb);}global['db'][_0x4f1ad6(0x623,0x59e,0x5a0,0x589,0x583)][_0x565999(0x3f1,0x30f,0x44e,0x4c5,0x32e)][m[_0x565999(0x335,0x37b,0x2ca,0x2c5,0x30e)+'r']][_0x4f1ad6(0x563,0x429,0x4f7,0x5bb,0x4a7)+'um']=![];function _0x4f1ad6(_0x1b3c78,_0x56a0c9,_0x3ad4da,_0x1fb0a7,_0x23f13f){return _0x182f64(_0x1b3c78-0x39,_0x56a0c9-0x10c,_0x23f13f,_0x1fb0a7-0x181,_0x3ad4da-0x182);}global['db'][_0x30fcaa(0x454,0x31d,0x328,0x381,0x328)][_0x565999(0x3f1,0x3ac,0x49b,0x377,0x46a)][m[_0x565999(0x335,0x2f1,0x3eb,0x27b,0x3b0)+'r']][_0x565489(0x2d2,0x2b1,0x27e,0x266,0x29e)]=global[_0x30fcaa(0x224,0x191,0x14d,0x226,0x2bd)+_0x565489(0x37b,0x36b,0x3d6,0x42e,0x39a)][_0x4f1ad6(0x46d,0x593,0x4fe,0x59a,0x42a)];function _0x30fcaa(_0x57ba84,_0x3b44f8,_0x4ce2a2,_0x3fa6af,_0x177d95){return _0x44d338(_0x3fa6af- -0x191,_0x57ba84,_0x4ce2a2-0x180,_0x3fa6af-0x1e7,_0x177d95-0x8b);}_0x249856[_0x30fcaa(0x28d,0x203,0x270,0x209,0x2da)](sendContact,alpha,m[_0x565999(0x398,0x464,0x3fa,0x2d8,0x44b)],global[_0x30fcaa(0x2db,0x25f,0x2c3,0x301,0x313)],m);}));const _cmd=JSON[_0x44d338(0x50b,0x597,0x566,0x4d5,0x46d)](fs[_0x2986f8(0x3b,-0x59,-0x35,0x5d,-0x1)+_0x222e94(0x33f,0x28f,0x29e,0x1ed,0x2f2)+'nc'](_0x222e94(0x173,0x24c,0x1af,0x192,0x181)+_0x2986f8(0xe3,0x9a,-0x16,0x15,-0x45)+_0x44d338(0x38d,0x2ca,0x302,0x2e0,0x3d0)+_0x182f64(0x3ba,0x3de,0x396,0x47c,0x3ce)));function _0x41d85a(_0x489000,_0xd88111,_0x2335e7,_0x53e252,_0x28e7c7){return _0x3597(_0x489000-0x247,_0x2335e7);}if(isMedia&&m[_0x2986f8(0x24,-0x82,0x31,-0x70,0x3d)][_0x222e94(0x169,0x193,0x1e7,0x253,0x1c8)+_0x44d338(0x43b,0x39f,0x3ce,0x4b5,0x501)]&&m[_0x222e94(0x27a,0x1c5,0x1a3,0x145,0x1b0)][_0x2986f8(-0x96,-0x26,-0x5d,-0xa2,0x33)+_0x2986f8(-0x3b,-0x94,0x60,-0x57,-0xe0)][_0x2986f8(0x3e,-0x55,0x9,0x56,0xe4)+_0x44d338(0x4be,0x3f9,0x428,0x528,0x55b)](_0x41d85a(0x3ff,0x47e,0x34c,0x36c,0x3b0)+'4')in _cmd){let hash=_cmd[m[_0x2986f8(-0x12,0x4c,-0x3e,-0x70,-0x78)][_0x44d338(0x3f0,0x33b,0x490,0x498,0x39c)+_0x222e94(0x1b2,0x1de,0x266,0x173,0x140)][_0x222e94(0x263,0x28b,0x27c,0x2f5,0x1d7)+_0x182f64(0x33c,0x35f,0x3e4,0x342,0x3ca)](_0x222e94(0x123,0x138,0x15f,0x195,0x153)+'4')],{q,mentionedJid}=hash;const _0x532256={};_0x532256[_0x2986f8(-0x17f,-0x7b,-0x1c1,-0xe2,-0x63)]=q,_0x532256[_0x222e94(0x262,0x1e2,0x1d1,0x2b8,0x22c)+_0x44d338(0x407,0x4a4,0x4ce,0x46c,0x3a5)]=mentionedJid;let messages=await generateWAMessage(m[_0x182f64(0x440,0x415,0x41f,0x397,0x378)],_0x532256,{'userJid':alpha[_0x2986f8(-0x10b,-0x116,0x8,-0xb1,-0xf8)]['id'],'quoted':m[_0x2986f8(-0x58,0xea,0xb9,0x3f,0x45)+'d']&&m[_0x182f64(0x488,0x392,0x409,0x417,0x3dd)+'d'][_0x44d338(0x4ae,0x4bd,0x3ce,0x482,0x4d8)+'bj']});messages[_0x182f64(0x4e3,0x4a9,0x353,0x416,0x427)][_0x2986f8(-0x7a,0x51,-0x78,-0x17,-0xa2)+'e']=areJidsSameUser(m[_0x44d338(0x409,0x380,0x43e,0x4c4,0x4bf)+'r'],alpha[_0x222e94(0x230,0x184,0xba,0xcc,0x259)]['id']),messages[_0x2986f8(0xf3,-0x35,-0x29,0x89,0x14a)]['id']=m[_0x182f64(0x461,0x4f9,0x364,0x34b,0x427)]['id'],messages[_0x182f64(0x4f1,0x393,0x3af,0x4af,0x419)+_0x222e94(0x109,0x158,0x141,0x74,0x163)]=m[_0x182f64(0x4c8,0x360,0x3f0,0x47c,0x419)+_0x44d338(0x3b5,0x41d,0x493,0x44a,0x2e6)];if(m[_0x44d338(0x504,0x5cf,0x5b5,0x42c,0x595)+'up'])messages[_0x222e94(0x161,0x1a0,0x208,0xd0,0x194)+_0x41d85a(0x4e2,0x503,0x502,0x525,0x56b)+'t']=m[_0x222e94(0x187,0x1ac,0x219,0x134,0x219)+'r'];let msg={...chatUpdate,'messages':[proto[_0x44d338(0x503,0x4b1,0x432,0x54e,0x49f)+_0x44d338(0x4b2,0x403,0x40c,0x4b4,0x44c)+_0x182f64(0x31d,0x3d3,0x370,0x368,0x365)][_0x44d338(0x4e5,0x4b9,0x48c,0x418,0x40e)+_0x44d338(0x48c,0x4e0,0x40b,0x3ec,0x4b9)](messages)],'type':_0x2986f8(0x1d,0x18,-0x50,-0x5d,-0x1f)+'d'};alpha['ev'][_0x222e94(0xc7,0x19f,0x17e,0x1ee,0x16a)](_0x182f64(0x415,0x3d6,0x3ae,0x3f0,0x38a)+_0x222e94(0x24d,0x170,0x1be,0xf3,0x24f)+_0x44d338(0x42e,0x50e,0x36e,0x422,0x37e),msg);}const _stiker=JSON[_0x44d338(0x50b,0x44b,0x535,0x44a,0x578)](fs[_0x182f64(0x33c,0x33e,0x4b5,0x4a4,0x3fb)+_0x222e94(0x1d3,0x28f,0x276,0x372,0x201)+'nc'](_0x2986f8(0xc3,-0x11,0xdf,0x17,-0x3e)+_0x182f64(0x445,0x39a,0x382,0x420,0x3b3)+_0x2986f8(-0x110,-0xf4,-0x13e,-0x97,-0xe2)+_0x44d338(0x502,0x4df,0x5a2,0x44e,0x590))),_video=JSON[_0x222e94(0x30c,0x2ae,0x2b2,0x216,0x302)](fs[_0x2986f8(-0x85,0x99,0xa2,0x5d,-0x6b)+_0x41d85a(0x556,0x5ef,0x613,0x599,0x5b5)+'nc'](_0x222e94(0x225,0x24c,0x26d,0x254,0x240)+_0x182f64(0x33a,0x426,0x325,0x463,0x3b3)+_0x2986f8(-0x126,-0xc8,-0x71,-0x9b,-0x58)+_0x182f64(0x2c8,0x2b8,0x23f,0x293,0x29b)+'n')),_audio=JSON[_0x41d85a(0x575,0x4e0,0x5a4,0x5c9,0x594)](fs[_0x182f64(0x35d,0x412,0x320,0x4c9,0x3fb)+_0x41d85a(0x556,0x4e8,0x5cc,0x596,0x4b5)+'nc'](_0x222e94(0x29b,0x24c,0x1ed,0x1aa,0x1fa)+_0x44d338(0x4a7,0x49d,0x46a,0x3ef,0x4df)+_0x2986f8(-0x32,0x55,-0x8a,-0x75,0x67)+_0x41d85a(0x4d7,0x527,0x5b3,0x530,0x589))),_image=JSON[_0x222e94(0x328,0x2ae,0x350,0x306,0x2f5)](fs[_0x41d85a(0x559,0x4d3,0x572,0x49b,0x5f6)+_0x182f64(0x4d8,0x47c,0x3f3,0x3b6,0x3f8)+'nc'](_0x2986f8(0xc8,0x6e,0xda,0x17,-0xb1)+_0x2986f8(-0x97,0xed,-0x6c,0x15,0xd0)+_0x222e94(0x280,0x1ea,0x250,0x188,0x1f0)+_0x222e94(0x163,0x1e1,0x1ef,0x27e,0x211)+'n'));function _0x222e94(_0x26f2a6,_0x246a68,_0x2be3bc,_0x3ecf11,_0x31f548){return _0x3597(_0x246a68- -0x80,_0x31f548);}const _text=JSON[_0x222e94(0x2e6,0x2ae,0x286,0x289,0x2e9)](fs[_0x41d85a(0x559,0x4d2,0x637,0x5e3,0x4bb)+_0x182f64(0x3e1,0x447,0x427,0x430,0x3f8)+'nc'](_0x41d85a(0x513,0x4da,0x489,0x564,0x52a)+_0x182f64(0x3f1,0x3b0,0x327,0x384,0x3b3)+_0x44d338(0x4eb,0x409,0x546,0x54d,0x4b9)+_0x182f64(0x33b,0x34a,0x386,0x344,0x40e))),_document=JSON[_0x182f64(0x348,0x455,0x36d,0x4bf,0x417)](fs[_0x44d338(0x4ef,0x561,0x4b8,0x552,0x426)+_0x2986f8(-0x16,0x1f,0x97,0x5a,0xb3)+'nc'](_0x2986f8(-0x66,-0x65,-0xca,0x17,0x13)+_0x222e94(0x256,0x24a,0x280,0x23e,0x272)+_0x222e94(0x23a,0x1d5,0x18f,0x241,0x118)+_0x2986f8(-0x58,-0x48,-0x91,-0xdf,-0x1b)+_0x41d85a(0x52c,0x49f,0x5f1,0x486,0x512)));var bodynyaui=m[_0x222e94(0x2a5,0x27c,0x2a3,0x207,0x1a3)]==_0x182f64(0x325,0x34a,0x411,0x448,0x383)+_0x222e94(0x163,0x182,0x179,0x1bf,0x22a)+_0x182f64(0x2e2,0x2d0,0x300,0x218,0x279)+_0x2986f8(-0xc2,-0xac,-0x25,0x11,0x2e)?m[_0x222e94(0x1dd,0x221,0x254,0x2ee,0x148)+'ge'][_0x222e94(0x2fe,0x21a,0x278,0x185,0x1b8)+_0x2986f8(-0xdf,-0xf7,-0x26,-0xb3,0x2e)+_0x222e94(0xc8,0x110,0x138,0x4a,0x1cc)+_0x182f64(0x488,0x306,0x432,0x38a,0x3af)][_0x222e94(0x1cb,0x12f,0x114,0x123,0xc4)+_0x41d85a(0x55e,0x5d5,0x55d,0x4b7,0x55b)+_0x44d338(0x511,0x588,0x53e,0x4b7,0x4c6)+'ly'][_0x222e94(0x1c6,0x1f7,0x21c,0x268,0x21d)+_0x182f64(0x305,0x1e8,0x23c,0x29b,0x27d)+_0x2986f8(-0x170,-0x195,-0x105,-0x11b,-0x1b0)]:m[_0x2986f8(-0x87,0x11c,-0x9a,0x47,0xbb)]==_0x222e94(0x1b8,0x221,0x2e5,0x21f,0x1b8)+_0x182f64(0x26d,0x318,0x2ea,0x394,0x31f)+_0x182f64(0x430,0x2fc,0x3fb,0x345,0x361)+_0x41d85a(0x4f0,0x5bb,0x563,0x599,0x52e)?m[_0x44d338(0x47e,0x4ad,0x39f,0x4b8,0x488)+'ge'][_0x41d85a(0x4db,0x52d,0x573,0x518,0x53c)+_0x182f64(0x317,0x3ef,0x34c,0x3f0,0x3e4)+_0x2986f8(0x9f,0xf6,-0x73,0x4f,-0x83)+_0x41d85a(0x45c,0x40c,0x4cb,0x413,0x43e)+'ge']?.[_0x182f64(0x2c4,0x351,0x34d,0x42a,0x360)+_0x222e94(0x1a8,0x171,0x1a8,0x158,0x1de)+_0x222e94(0x121,0x1f5,0x11d,0x2be,0x2a2)+'d']||m[_0x44d338(0x47e,0x3c3,0x46c,0x4cb,0x4c6)+'ge'][_0x222e94(0x275,0x21a,0x20f,0x1a8,0x224)+_0x2986f8(-0x110,-0x16,0x0,-0xb3,-0xfb)+_0x222e94(0xdb,0x110,0xb0,0x1e7,0xa2)+_0x2986f8(0xe9,-0x50,0xe0,0x11,0x74)]?.[_0x182f64(0x351,0x290,0x24f,0x1e1,0x298)+_0x2986f8(0x80,0xf7,0x11b,0x62,0x11c)+_0x222e94(0x252,0x2b4,0x365,0x334,0x2f4)+'ly'][_0x222e94(0x1e4,0x1f7,0x180,0x218,0x1d4)+_0x2986f8(-0x120,-0x18d,-0x149,-0x121,-0x151)+_0x2986f8(-0x177,-0x4d,-0x16b,-0x11b,-0x10c)]||m[_0x2986f8(-0x11d,-0x55,-0x2f,-0xe2,-0x128)]:'';!bodynyaui&&budy[_0x222e94(0x2b5,0x266,0x27b,0x31c,0x1b5)+_0x44d338(0x3f3,0x4ce,0x352,0x3d5,0x381)+'e']()in _stiker&&alpha[_0x182f64(0x415,0x356,0x38a,0x440,0x42f)+_0x222e94(0x225,0x260,0x1b7,0x30a,0x1ef)+'rd'](m[_0x182f64(0x375,0x364,0x3d1,0x370,0x378)],_stiker[budy[_0x182f64(0x483,0x3e2,0x39d,0x30b,0x3cf)+_0x182f64(0x37d,0x338,0x3a8,0x3b6,0x2ff)+'e']()],!![],{'quoted':m});!bodynyaui&&budy[_0x222e94(0x206,0x266,0x274,0x238,0x221)+_0x2986f8(0x2f,-0x14c,-0x94,-0x9f,-0x120)+'e']()in _video&&alpha[_0x222e94(0x372,0x2c6,0x1f1,0x363,0x239)+_0x2986f8(-0x16,0x6c,0x82,0x2b,-0x18)+'rd'](m[_0x41d85a(0x4d6,0x468,0x5ae,0x518,0x517)],_video[budy[_0x2986f8(0x8d,-0x5d,-0x22,0x31,-0x6a)+_0x44d338(0x3f3,0x370,0x47f,0x330,0x4d2)+'e']()],!![],{'quoted':m});!bodynyaui&&budy[_0x41d85a(0x52d,0x4c8,0x491,0x60b,0x44a)+_0x222e94(0x230,0x196,0x26f,0x201,0x1bc)+'e']()in _audio&&alpha[_0x2986f8(0x6e,0x149,0xa4,0x91,0x4a)+_0x41d85a(0x527,0x531,0x4b9,0x5fa,0x56b)+'rd'](m[_0x41d85a(0x4d6,0x400,0x42a,0x50f,0x54e)],_audio[budy[_0x2986f8(0xdf,-0x65,0xca,0x31,-0x1d)+_0x222e94(0x104,0x196,0x14b,0x10e,0x1e5)+'e']()],!![],{'quoted':m});!bodynyaui&&budy[_0x41d85a(0x52d,0x532,0x497,0x49f,0x519)+_0x41d85a(0x45d,0x4b1,0x4c8,0x441,0x534)+'e']()in _image&&alpha[_0x44d338(0x523,0x4c9,0x549,0x47a,0x554)+_0x222e94(0x2b3,0x260,0x31b,0x326,0x323)+'rd'](m[_0x41d85a(0x4d6,0x595,0x59b,0x520,0x451)],_image[budy[_0x2986f8(-0x74,-0x47,-0x3a,0x31,0x10b)+_0x2986f8(0x14,-0x60,-0x163,-0x9f,-0x95)+'e']()],!![],{'quoted':m});!bodynyaui&&budy[_0x222e94(0x2bb,0x266,0x299,0x206,0x279)+_0x41d85a(0x45d,0x465,0x410,0x3d1,0x538)+'e']()in _text&&alpha[_0x182f64(0x4a3,0x3fb,0x3d7,0x4fd,0x42f)+_0x41d85a(0x527,0x4fa,0x5a6,0x504,0x527)+'rd'](m[_0x2986f8(-0xf0,-0x8a,-0x95,-0x26,0x18)],_text[budy[_0x2986f8(0x10a,-0x9a,0x109,0x31,0xa9)+_0x2986f8(-0x180,0x8,-0x1a,-0x9f,0x10)+'e']()],!![],{'quoted':m});!bodynyaui&&budy[_0x41d85a(0x52d,0x4c8,0x4f0,0x471,0x566)+_0x2986f8(-0x37,-0x114,0x13,-0x9f,-0x137)+'e']()in _document&&alpha[_0x44d338(0x523,0x57d,0x516,0x5b5,0x4b0)+_0x44d338(0x4bd,0x45a,0x3e7,0x47b,0x47b)+'rd'](m[_0x44d338(0x46c,0x426,0x459,0x423,0x509)],_document[budy[_0x182f64(0x30e,0x300,0x3b2,0x411,0x3cf)+_0x44d338(0x3f3,0x411,0x346,0x401,0x3f3)+'e']()],!![],{'quoted':m});async function UploadDulu(_0x14e836,_0x53609={}){function _0x54ad1e(_0x4f2915,_0x2a3fac,_0xd9137,_0x3bcc8a,_0x2dd5e3){return _0x222e94(_0x4f2915-0x1d3,_0x2a3fac-0xf4,_0xd9137-0x14f,_0x3bcc8a-0x41,_0xd9137);}const _0x270e6a={'khOkz':function(_0x5dec30,_0xae49e8){return _0x5dec30(_0xae49e8);},'MLrEd':_0x1f1c2e(0x3f7,0x387,0x330,0x339,0x3c3),'XNbnN':function(_0x48b088,_0x5bac70){return _0x48b088+_0x5bac70;},'gftWh':_0x126f4e(-0x150,-0xc3,-0xe4,-0x133,-0x175),'IDbfI':function(_0x372ed5,_0x6a08ed,_0x45587b){return _0x372ed5(_0x6a08ed,_0x45587b);},'ayNWF':_0x1f1c2e(0x425,0x456,0x452,0x4fd,0x393)+_0x2d68f9(0x4ce,0x5e6,0x530,0x610,0x5b0)+_0x126f4e(-0xd7,-0xc0,0x1b,-0x157,-0x2a)+_0x126f4e(0x7c,0x78,0x44,-0x47,0xda)+_0x126f4e(-0x6d,-0xa7,-0x48,-0x165,-0x42)+_0x1f1c2e(0x2ca,0x333,0x310,0x372,0x366)+_0x1f1c2e(0x49b,0x3d1,0x45b,0x339,0x2f4)+_0x746ea7(0x66b,0x5d8,0x70e,0x5e5,0x6b9)+'ad','AVRaR':_0x126f4e(0x6e,0x11,0x5e,-0x38,0xb9)},{ext:_0x68f93b}=await _0x270e6a[_0x1f1c2e(0x4cb,0x47c,0x49e,0x39d,0x4fe)](fromBuffer,_0x14e836)||_0x53609[_0x1f1c2e(0x392,0x386,0x3fe,0x361,0x2c3)];function _0x746ea7(_0x139ced,_0x484fbb,_0x34fede,_0x3e2605,_0x374337){return _0x2986f8(_0x139ced-0xed,_0x484fbb-0x10e,_0x34fede-0x1e8,_0x374337-0x667,_0x34fede);}function _0x2d68f9(_0x25dddb,_0x5f5376,_0x3363a7,_0x407f7e,_0x430169){return _0x182f64(_0x25dddb-0x17f,_0x5f5376-0x37,_0x407f7e,_0x407f7e-0x7d,_0x3363a7-0x244);}function _0x1f1c2e(_0x5aebd7,_0x5e73d6,_0x37ec6a,_0x41a2aa,_0x485318){return _0x44d338(_0x5e73d6- -0x4a,_0x41a2aa,_0x37ec6a-0x29,_0x41a2aa-0x1cb,_0x485318-0x1a3);}function _0x126f4e(_0x29e34a,_0x19f4b8,_0x29c563,_0x51b0fb,_0x9c487a){return _0x2986f8(_0x29e34a-0x19d,_0x19f4b8-0x1b0,_0x29c563-0x96,_0x19f4b8- -0x15,_0x9c487a);}var _0x3ff728=new FormData();_0x3ff728[_0x2d68f9(0x588,0x621,0x585,0x64e,0x5c0)+'d'](_0x270e6a[_0x54ad1e(0x38a,0x2ca,0x251,0x2c7,0x24e)],_0x14e836,_0x270e6a[_0x2d68f9(0x587,0x4f6,0x539,0x5c7,0x550)](_0x270e6a[_0x2d68f9(0x750,0x6c3,0x677,0x623,0x61b)],_0x68f93b));let _0x406d30=await _0x270e6a[_0x54ad1e(0x274,0x328,0x2e3,0x293,0x2ab)](fetch,_0x270e6a[_0x2d68f9(0x526,0x685,0x5d1,0x5e4,0x5b4)],{'method':_0x270e6a[_0x1f1c2e(0x33d,0x37c,0x2a6,0x2cf,0x331)],'body':_0x3ff728})[_0x746ea7(0x73d,0x67f,0x69d,0x628,0x664)](_0x14c558=>_0x14c558[_0x126f4e(-0x9b,0x1b,-0x59,-0x76,0x1f)]());return _0x406d30;}function _0x3597(_0x359727,_0x3e52b6){const _0x5e93b8=_0x1d29();return _0x3597=function(_0x2bb44f,_0x4d369d){_0x2bb44f=_0x2bb44f-(-0x1d58+-0x6*-0xa2+-0x1d*-0xef);let _0x19d616=_0x5e93b8[_0x2bb44f];return _0x19d616;},_0x3597(_0x359727,_0x3e52b6);}if(global['db'][_0x44d338(0x512,0x5d2,0x4bf,0x517,0x5ab)][_0x222e94(0x322,0x277,0x30f,0x340,0x2db)+_0x41d85a(0x46b,0x479,0x3f9,0x413,0x4b5)][botNumber][_0x2986f8(-0x18,0x81,0xde,0x14,0x71)+_0x182f64(0x3cb,0x2f2,0x3a9,0x2dd,0x3bb)+'p']){let user=db[_0x2986f8(0xdc,-0x18,0x4,0x80,0x113)][_0x44d338(0x4c5,0x417,0x4ce,0x41e,0x4fb)][m[_0x2986f8(-0xca,-0x35,-0xb2,-0x89,0x50)+'r']];if(!user[_0x182f64(0x422,0x415,0x35b,0x3fe,0x3b2)+_0x222e94(0x1cf,0x252,0x249,0x239,0x180)+'p'])return!(-0x77c*-0x1+0xb3*0x29+-0x269*0xf);let before=user[_0x2986f8(0x6b,0x154,0x164,0x8e,0x80)]*(-0x443*-0x3+-0x1d51+0x53*0x33);if(levelling[_0x44d338(0x42d,0x50d,0x4d2,0x3d6,0x4c6)+_0x222e94(0x202,0x26c,0x1ed,0x254,0x2a6)](user[_0x44d338(0x520,0x4c7,0x471,0x4c6,0x58a)],user[_0x41d85a(0x3ee,0x34f,0x3b2,0x417,0x363)],global[_0x41d85a(0x433,0x3fe,0x4ec,0x378,0x442)+_0x2986f8(-0x115,-0x15d,-0x12f,-0xd1,-0x12e)])){user[_0x44d338(0x520,0x5a7,0x5f0,0x580,0x5f7)]++;if(before!==user[_0x182f64(0x4eb,0x49d,0x48f,0x487,0x42c)]){user[_0x222e94(0x2a8,0x26a,0x2dd,0x1f7,0x308)]=global[_0x2986f8(-0x123,-0x7d,-0x102,-0x104,-0xa1)][_0x222e94(0x2e8,0x26a,0x1f6,0x292,0x28a)](user[_0x182f64(0x391,0x359,0x4c0,0x45b,0x42c)])[_0x2986f8(0x22,0x3f,-0xf1,-0x1e,-0x43)];let capfkks=(_0x2986f8(-0x32,0x2e,0x6b,0x2e,0xc0)+_0x2986f8(-0x162,-0x1aa,-0x183,-0x116,-0x96)+_0x44d338(0x3c3,0x486,0x460,0x3b1,0x323)+pushname+(_0x41d85a(0x56b,0x5eb,0x613,0x4e7,0x4cd)+_0x182f64(0x4f0,0x4ce,0x4b6,0x4c2,0x412)+_0x41d85a(0x4cd,0x411,0x55c,0x5a5,0x439)+_0x222e94(0x11e,0x181,0xd9,0x1f4,0xf3)+_0x44d338(0x3dc,0x329,0x3fa,0x395,0x480)+_0x222e94(0x13c,0x14d,0xef,0xfb,0x100)+_0x41d85a(0x494,0x412,0x504,0x48f,0x458)+_0x41d85a(0x57e,0x53c,0x566,0x5f7,0x640))+before+(_0x44d338(0x50a,0x4f2,0x5af,0x4b8,0x580)+_0x44d338(0x398,0x44b,0x3e4,0x3c3,0x3b9)+_0x182f64(0x3f3,0x365,0x3ee,0x483,0x418)+':\x20')+user[_0x41d85a(0x58a,0x5bf,0x5ad,0x5c8,0x51a)]+(_0x2986f8(0xb5,0x65,-0x1a,0x7c,0x53)+_0x41d85a(0x4dc,0x558,0x58b,0x516,0x50d)+'\x20')+user[_0x44d338(0x4c7,0x4e2,0x47a,0x3ea,0x571)]+(_0x41d85a(0x3dc,0x434,0x3af,0x478,0x31a)+_0x44d338(0x382,0x393,0x329,0x416,0x3b9)+_0x222e94(0x177,0x1ce,0x1de,0x199,0x268)+_0x44d338(0x36a,0x317,0x341,0x3af,0x3a7)+_0x222e94(0x153,0x212,0x239,0x235,0x2c3)+_0x182f64(0x373,0x3a4,0x3b0,0x2a9,0x31e)+_0x222e94(0x233,0x218,0x210,0x1d6,0x206)+_0x222e94(0x2c7,0x1f3,0x189,0x173,0x233)+_0x2986f8(-0x122,-0x5f,-0x14d,-0xcd,-0x1a3)+_0x222e94(0x2d4,0x1f4,0x121,0x187,0x171)+_0x44d338(0x436,0x398,0x3ab,0x46a,0x498)+_0x222e94(0x256,0x29d,0x297,0x261,0x1c0)+_0x222e94(0xa6,0x162,0x1ce,0x1e6,0x118)+_0x222e94(0x222,0x25c,0x2d4,0x309,0x295)+_0x2986f8(-0x15c,-0x56,-0x112,-0x128,-0x145)+_0x182f64(0x2f0,0x387,0x3f6,0x2b3,0x356)+_0x44d338(0x4ee,0x55e,0x515,0x502,0x52d)+_0x41d85a(0x432,0x3da,0x384,0x35e,0x49a)+_0x41d85a(0x563,0x4e1,0x52f,0x513,0x49e)+_0x2986f8(-0x54,-0x120,-0x14d,-0x10f,-0x1af)+_0x182f64(0x429,0x348,0x3cd,0x3ef,0x3eb)+_0x182f64(0x4a7,0x393,0x318,0x3ae,0x3f5)+_0x182f64(0x358,0x301,0x349,0x230,0x287)+_0x182f64(0x286,0x32f,0x375,0x392,0x328)+_0x44d338(0x3a6,0x37a,0x436,0x3c8,0x46f)+_0x2986f8(0x48,-0x13,-0x3c,-0xa,0xb3)+_0x44d338(0x489,0x53d,0x3ae,0x43f,0x487)+'\x09'))[_0x182f64(0x2f9,0x36c,0x318,0x2cd,0x374)]();alpha[_0x44d338(0x4e7,0x47e,0x486,0x4ae,0x442)+_0x2986f8(0x13c,0x5a,-0x45,0x81,-0x38)+'s'](m[_0x44d338(0x46c,0x3e7,0x448,0x472,0x419)],capfkks,'©\x20'+ownername,_0x2986f8(-0x54,0x119,0x54,0x6a,0x68)+_0x182f64(0x1aa,0x1cc,0x26b,0x290,0x272),_0x2986f8(0x60,-0x76,-0x9f,-0x71,-0x67)+'es',_0x182f64(0x35f,0x463,0x3fb,0x446,0x3c6),_0x222e94(0x1be,0x14b,0x156,0x22d,0x1a1)+_0x182f64(0x207,0x2f3,0x27c,0x354,0x294)+'🎉',m);}}}for(let data_store of db_respon_list){var bodynya=m[_0x41d85a(0x543,0x5a0,0x566,0x4ee,0x5ca)]==_0x222e94(0x1fa,0x12a,0x1a2,0x1b9,0xb1)+_0x2986f8(0x99,-0x38,0x56,0x4e,0x31)+_0x2986f8(-0x26,0x8e,-0x98,0x13,-0xaa)+_0x222e94(0x174,0x230,0x19e,0x1e1,0x297)+_0x2986f8(-0x18f,-0xa2,-0xaf,-0xba,-0x167)+'e'&&JSON[_0x222e94(0x36c,0x2ae,0x2be,0x36a,0x2b7)](m[_0x44d338(0x47e,0x458,0x3c2,0x3ec,0x55b)+'ge'][_0x44d338(0x387,0x3ad,0x42b,0x44b,0x32d)+_0x2986f8(0x13,0x7,-0x8d,0x4e,-0x62)+_0x2986f8(-0xcf,0x38,-0xbf,0x13,-0xae)+_0x41d85a(0x4f7,0x578,0x558,0x434,0x4d9)+_0x41d85a(0x442,0x45a,0x4cb,0x3ea,0x508)+'e'][_0x44d338(0x3e8,0x348,0x4c5,0x375,0x487)+_0x44d338(0x3f8,0x452,0x32a,0x464,0x3c9)+_0x222e94(0x143,0x1fe,0x209,0x29a,0x1f1)+_0x182f64(0x460,0x39a,0x460,0x3f9,0x425)+_0x222e94(0x269,0x255,0x28e,0x31c,0x23b)][_0x182f64(0x36f,0x394,0x2f5,0x3b6,0x31b)+_0x44d338(0x411,0x386,0x4dd,0x361,0x410)])['id']?JSON[_0x222e94(0x351,0x2ae,0x389,0x1eb,0x24b)](m[_0x222e94(0x16f,0x221,0x20e,0x1be,0x262)+'ge'][_0x182f64(0x234,0x232,0x27c,0x2f3,0x293)+_0x182f64(0x453,0x41b,0x467,0x46b,0x3ec)+_0x182f64(0x473,0x434,0x3a1,0x43e,0x3b1)+_0x41d85a(0x4f7,0x50e,0x5cc,0x51a,0x52f)+_0x2986f8(-0xa1,0x15,-0x121,-0xba,0x2)+'e'][_0x182f64(0x272,0x2e1,0x3af,0x2e7,0x2f4)+_0x41d85a(0x462,0x479,0x47d,0x4d4,0x409)+_0x44d338(0x45b,0x3f1,0x4a6,0x385,0x475)+_0x222e94(0x20c,0x2bc,0x280,0x351,0x342)+_0x222e94(0x1f8,0x255,0x2b5,0x195,0x20c)][_0x2986f8(-0x8d,-0xae,-0x142,-0x83,-0x15d)+_0x222e94(0x10b,0x1b4,0x160,0x1a3,0x102)])['id']:'',get_data_respon=getDataResponList(m[_0x2986f8(-0x6,0x14c,0x103,0x72,0x44)+'up']?m[_0x222e94(0x1fb,0x20f,0x247,0x2d5,0x23e)]:botNumber,bodynya,db_respon_list);if(isAlreadyResponList(m[_0x182f64(0x442,0x3c7,0x444,0x393,0x410)+'up']?m[_0x222e94(0x2ec,0x20f,0x171,0x2a7,0x2e2)]:botNumber,bodynya,db_respon_list)&&bodynya==get_data_respon[_0x44d338(0x51b,0x4a8,0x523,0x51a,0x4f9)]){if(get_data_respon[_0x222e94(0x26f,0x22a,0x2af,0x29d,0x25e)+'ge']===![]){alpha[_0x182f64(0x2f6,0x1c8,0x281,0x206,0x291)+_0x41d85a(0x442,0x41e,0x51c,0x3ec,0x429)+'e'](m[_0x222e94(0x228,0x20f,0x136,0x275,0x287)],{'text':sendResponList(m[_0x222e94(0x1fb,0x2a7,0x1da,0x277,0x27c)+'up']?m[_0x41d85a(0x4d6,0x519,0x4c5,0x46e,0x40c)]:botNumber,bodynya,db_respon_list)},{'quoted':m});return;}else{alpha[_0x41d85a(0x3ef,0x350,0x40f,0x3a5,0x44f)+_0x222e94(0xbe,0x17b,0x199,0x18d,0x220)+'e'](m[_0x2986f8(0x3f,0x75,-0x2,-0x26,-0xa2)],{'image':await getBuffer(get_data_respon[_0x44d338(0x3fa,0x3d0,0x425,0x4c1,0x3a2)+_0x44d338(0x51c,0x584,0x54e,0x5e0,0x44d)]),'caption':get_data_respon[_0x2986f8(-0x4e,0xb,-0x36,0x3d,0xb)+_0x182f64(0x351,0x386,0x347,0x361,0x32a)]},{'quoted':m});return;}}}(function(){function _0x3ef4f6(_0x83bf32,_0x478053,_0x5d6be8,_0xc667f1,_0x2ce7a4){return _0x182f64(_0x83bf32-0x2c,_0x478053-0x112,_0x5d6be8,_0xc667f1-0x60,_0x2ce7a4- -0x24e);}function _0x27f3a2(_0x2378f4,_0x12418,_0x13ae23,_0x59559b,_0x32f35a){return _0x41d85a(_0x59559b- -0xda,_0x12418-0x34,_0x32f35a,_0x59559b-0x166,_0x32f35a-0x9b);}const _0x4b8942={};function _0x1146cb(_0x23b7fe,_0x49b1db,_0x164628,_0x2cfdf7,_0xe13712){return _0x41d85a(_0x164628- -0x106,_0x49b1db-0x3e,_0x23b7fe,_0x2cfdf7-0x1b5,_0xe13712-0x7e);}_0x4b8942[_0x27f3a2(0x4eb,0x4ea,0x459,0x41e,0x3ab)]=function(_0x529e6c,_0x4b7b4b){return _0x529e6c!==_0x4b7b4b;},_0x4b8942[_0x575c47(-0xaa,-0xb3,-0xd2,-0x20,-0x192)]=_0x27f3a2(0x3fd,0x3c6,0x418,0x45a,0x3fe)+_0x575c47(-0xb2,-0xc8,-0x2f,-0x33,-0x10d),_0x4b8942[_0x3ef4f6(-0x52,0x122,-0x1d,0x37,0x90)]=function(_0xe9ea89,_0x39904c){return _0xe9ea89===_0x39904c;},_0x4b8942[_0x575c47(-0x100,0xb,-0x74,-0xed,-0x140)]=_0x575c47(0x87,-0xdb,-0x3d,-0xf2,-0xb9)+'t';function _0x45d47b(_0x11e726,_0x1c905a,_0x2d1fa0,_0x3d0af4,_0xf8b4e4){return _0x41d85a(_0x3d0af4- -0x5e2,_0x1c905a-0x82,_0x2d1fa0,_0x3d0af4-0x12,_0xf8b4e4-0x6b);}_0x4b8942[_0x45d47b(-0x13e,-0x182,-0xae,-0x13f,-0x153)]=function(_0x512aab,_0x536a3d){return _0x512aab===_0x536a3d;},_0x4b8942[_0x27f3a2(0x3ee,0x408,0x497,0x499,0x3d0)]=_0x27f3a2(0x23c,0x360,0x28a,0x319,0x3b4)+_0x1146cb(0x273,0x26e,0x31c,0x400,0x3ba),_0x4b8942[_0x1146cb(0x4cc,0x34d,0x3ee,0x39c,0x30b)]=function(_0x5a9e15,_0x5d7cef){return _0x5a9e15===_0x5d7cef;};const _0x454703=_0x4b8942;function _0x575c47(_0x317a30,_0x5b266c,_0x30ffd8,_0x2a8e03,_0x3ff527){return _0x222e94(_0x317a30-0x15b,_0x30ffd8- -0x1de,_0x30ffd8-0x1b7,_0x2a8e03-0x98,_0x5b266c);}const _0x5974f4=_0x454703[_0x27f3a2(0x40b,0x43b,0x3b1,0x41e,0x3ac)](typeof window,_0x454703[_0x575c47(-0x87,-0xa9,-0xd2,-0x90,-0x105)])?window:_0x454703[_0x45d47b(-0x17f,-0x135,-0x148,-0x1a6,-0x26f)](typeof process,_0x454703[_0x27f3a2(0x365,0x2d0,0x411,0x357,0x2ae)])&&_0x454703[_0x3ef4f6(0x170,0x2f,0xe2,0x198,0xf7)](typeof require,_0x454703[_0x27f3a2(0x4cf,0x51e,0x476,0x499,0x42e)])&&_0x454703[_0x3ef4f6(0x10f,0x192,0xfe,0xa4,0x148)](typeof global,_0x454703[_0x575c47(-0x40,-0xe5,-0x74,-0x81,-0xdf)])?global:this;_0x5974f4[_0x45d47b(-0x47,-0xb0,-0x111,-0x12b,-0xf3)+_0x1146cb(0x2d5,0x40d,0x3a0,0x42d,0x2d5)+'l'](_0x332113,-0xb1e+-0x113d+-0x4e3*-0x9);}());if(m[_0x2986f8(-0x23,0xe9,0x5f,0x72,-0x5a)+'up']&&isMute&&!isGroupAdmins&&!isCreator)return;if(isCmd&&!isCreator&&!isPremium&&premium_fitur[_0x182f64(0x27b,0x223,0x352,0x277,0x28d)+_0x41d85a(0x3cf,0x458,0x36d,0x3a0,0x361)](command)){reply(lang[_0x222e94(0x1d8,0x200,0x247,0x1fb,0x229)+_0x44d338(0x43a,0x4bd,0x3fa,0x4b6,0x37c)]);return;}function _0x332113(_0x3d801e){function _0x40a3ba(_0x95bf0,_0x200634,_0x3cd706,_0x253f0e,_0x4c24b1){return _0x2986f8(_0x95bf0-0x69,_0x200634-0x11,_0x3cd706-0x152,_0x95bf0-0x51c,_0x3cd706);}function _0x255b61(_0x4481c4,_0x381040,_0x1390a4,_0x4b33c8,_0x3a9a66){return _0x2986f8(_0x4481c4-0x173,_0x381040-0xcf,_0x1390a4-0x196,_0x3a9a66-0x123,_0x381040);}const _0x38f7d5={'cIIyE':_0x1c3044(0x6b,0x3c,0x55,-0x9e,0xcc)+_0x1c3044(0xcf,0x58,-0x14,0x1e,0xf8)+_0x255b61(0x15a,0x11b,0x1a4,0x1d8,0x152)+')','VpoBU':_0x40a3ba(0x523,0x4fa,0x464,0x540,0x4a2)+_0x255b61(0x4f,0x55,0x5b,0xc6,0xed)+_0xec6785(0x177,0x13d,0x179,0x233,0x195)+_0x255b61(-0x39,0x64,-0x5,-0x1b,0x4)+_0x1c3044(0x104,0x70,-0x51,0xca,-0x54)+_0x4fc313(0x3f7,0x314,0x46f,0x3a8,0x31e)+_0x40a3ba(0x4d6,0x4e3,0x4bf,0x458,0x51a),'VermW':function(_0x2b63dc,_0x807f08){return _0x2b63dc(_0x807f08);},'uRRrA':_0x4fc313(0x2eb,0x351,0x2a0,0x343,0x2eb),'BFLPI':function(_0x235480,_0x2b071b){return _0x235480+_0x2b071b;},'nurEa':_0x255b61(0x8a,0xba,-0x3b,0x41,0x93),'rihJl':_0x4fc313(0x3f8,0x4a8,0x4ca,0x314,0x345),'bGdEK':function(_0x235d82){return _0x235d82();},'jkFgT':function(_0x2f7acd,_0x53d58d,_0x228f98){return _0x2f7acd(_0x53d58d,_0x228f98);},'rpwCg':function(_0xea92d6,_0x24e6b1){return _0xea92d6!==_0x24e6b1;},'RedIw':_0x255b61(-0x84,0x121,0xb4,0x8e,0x3e),'KdlCu':_0x4fc313(0x2a2,0x373,0x313,0x2a2,0x33f),'PsSTP':function(_0x2faffa,_0x41a214,_0x570ae1,_0x526fd4){return _0x2faffa(_0x41a214,_0x570ae1,_0x526fd4);},'qbqSB':function(_0x3f4b35,_0x1394e0){return _0x3f4b35(_0x1394e0);},'RBUWD':function(_0x2ccff4,_0x59c420){return _0x2ccff4+_0x59c420;},'wkBzY':function(_0x224b79,_0x5b8520){return _0x224b79(_0x5b8520);},'rAqpJ':function(_0x47cad3){return _0x47cad3();},'SuDXR':function(_0x3fa582,_0x4eb5b7){return _0x3fa582===_0x4eb5b7;},'IWpmN':_0xec6785(0x18f,0x24d,0x269,0x1c4,0x23d),'VFGFy':_0x255b61(0x1ec,0x16c,0x23f,0x15a,0x161),'lXHew':_0x1c3044(0x13f,0x121,0x16f,0x1dd,0x77)+'g','wNfAT':_0x1c3044(0x90,0xcc,0x4c,0x180,0x75),'tyoox':_0x40a3ba(0x404,0x4a5,0x3e6,0x4b6,0x4e3),'etPVW':_0x1c3044(0x1ea,0x177,0x215,0x242,0x1d6),'twKMj':function(_0x37a8d1,_0x4bff2c){return _0x37a8d1!==_0x4bff2c;},'XBqbt':function(_0x2d196b,_0x1c6b09){return _0x2d196b+_0x1c6b09;},'ykxZA':function(_0x31cebd,_0x3ddcf2){return _0x31cebd/_0x3ddcf2;},'gvCeh':_0x255b61(0xc7,0x128,0x15a,0x20d,0x148)+'h','xEvNv':function(_0x16fb6d,_0x3c0055){return _0x16fb6d===_0x3c0055;},'cFCCd':function(_0x4b2f99,_0x163a02){return _0x4b2f99%_0x163a02;},'SZAUC':function(_0x44346f,_0x53b679){return _0x44346f!==_0x53b679;},'YxBbf':_0x4fc313(0x356,0x3ac,0x367,0x2b2,0x412),'lIexA':_0xec6785(0x2dc,0x315,0x2f7,0x26b,0x2a9),'TdZGl':_0x40a3ba(0x4f4,0x59a,0x54f,0x4f7,0x595),'zBesT':function(_0x26e927,_0x5654f1){return _0x26e927!==_0x5654f1;},'CplML':function(_0x3eb8d7,_0x2ee930){return _0x3eb8d7+_0x2ee930;},'aOudE':_0x4fc313(0x3dc,0x3eb,0x451,0x3dd,0x372)+_0x1c3044(0x45,0x19,0xbb,0x6a,-0x1d),'YOrxn':_0xec6785(0x26a,0x21d,0x1df,0xe3,0x1c2)+'es','xupRU':_0x255b61(0xc9,0x7f,0x7b,0x1a5,0x14b),'KEKPD':_0x4fc313(0x288,0x2f9,0x2f3,0x319,0x281)+_0x4fc313(0x268,0x29a,0x20c,0x2d3,0x1cf)+'🎉','ThLXL':function(_0x4a081b,_0x4ffa65){return _0x4a081b===_0x4ffa65;},'CXmEL':_0xec6785(0x257,0xe0,0x1a5,0x248,0x1a6),'CmVhl':_0xec6785(0x1d7,0xb5,0x1e0,0x22a,0x161),'BCesc':function(_0x446480,_0x206d6b){return _0x446480!==_0x206d6b;},'lFoHN':_0x4fc313(0x2ab,0x2af,0x34b,0x2c2,0x33c),'HfxVJ':function(_0x43d8df,_0x2729da){return _0x43d8df!==_0x2729da;},'Gfzcd':_0x255b61(0x208,0x217,0x1d6,0x1bb,0x16c),'fvTQO':function(_0x4cf399,_0x2c174d){return _0x4cf399(_0x2c174d);}};function _0xec6785(_0x2d183c,_0xf67f09,_0x2d5b48,_0x15e595,_0x5ae35c){return _0x182f64(_0x2d183c-0xcb,_0xf67f09-0x17,_0x2d5b48,_0x15e595-0x124,_0x5ae35c- -0x16b);}function _0x1c3044(_0xba700e,_0x5473b7,_0x54bbd6,_0x576bad,_0x351713){return _0x222e94(_0xba700e-0x1cb,_0x5473b7- -0xf0,_0x54bbd6-0x68,_0x576bad-0x1d0,_0x54bbd6);}function _0x4fc313(_0x32be5f,_0x34e69e,_0x273bc3,_0x1b3d05,_0x1ef699){return _0x182f64(_0x32be5f-0x133,_0x34e69e-0xa0,_0x1ef699,_0x1b3d05-0x5d,_0x32be5f- -0x2c);}function _0x1217ab(_0x5d1def){function _0x183e4c(_0x2c3e47,_0x17eb8a,_0x51b3cc,_0x2ed6aa,_0x558752){return _0x1c3044(_0x2c3e47-0xf1,_0x51b3cc-0x2f3,_0x558752,_0x2ed6aa-0x123,_0x558752-0x135);}function _0x426fa9(_0x3af117,_0x44e387,_0x445688,_0x2e63c7,_0x57d5e9){return _0x4fc313(_0x57d5e9-0x82,_0x44e387-0x13b,_0x445688-0x11c,_0x2e63c7-0x15e,_0x2e63c7);}function _0x391c8e(_0x5950d1,_0x5d9d5b,_0x4a5c6f,_0x1a97d3,_0x12221a){return _0x40a3ba(_0x5d9d5b- -0x45,_0x5d9d5b-0xbe,_0x4a5c6f,_0x1a97d3-0xfd,_0x12221a-0x82);}function _0x5343cf(_0x12e4b8,_0x12e636,_0x8fddd0,_0x1fec1e,_0x5d811a){return _0x40a3ba(_0x12e4b8- -0x5b8,_0x12e636-0x139,_0x5d811a,_0x1fec1e-0x6f,_0x5d811a-0x9b);}function _0x262469(_0x41d8c4,_0xed3b57,_0x3bf36a,_0x53675d,_0x31067e){return _0x1c3044(_0x41d8c4-0xd8,_0x53675d-0x1d3,_0x31067e,_0x53675d-0x16a,_0x31067e-0x2a);}const _0x1f84cc={'CMHiI':function(_0x46e305,_0x4c3051,_0x847ed0,_0x3d5c49){function _0x21d5a0(_0x168fba,_0x197d68,_0x5cafc5,_0x33c9f5,_0x47f557){return _0x3597(_0x5cafc5- -0x2c7,_0x168fba);}return _0x38f7d5[_0x21d5a0(0x23,-0xdd,-0x97,0x28,-0xd9)](_0x46e305,_0x4c3051,_0x847ed0,_0x3d5c49);},'rQARi':_0x38f7d5[_0x426fa9(0x262,0x2bd,0x33a,0x2f4,0x33d)],'BNzzv':_0x38f7d5[_0x426fa9(0x246,0x3a7,0x244,0x34f,0x2f8)],'ZCXOx':function(_0x28a865,_0x41a7c4){function _0x26f3ae(_0x9a133b,_0x1db75b,_0x21c0a2,_0x160db2,_0x6aafce){return _0x183e4c(_0x9a133b-0x178,_0x1db75b-0x85,_0x6aafce-0xc3,_0x160db2-0x18f,_0x9a133b);}return _0x38f7d5[_0x26f3ae(0x437,0x36e,0x4a0,0x38b,0x422)](_0x28a865,_0x41a7c4);},'NEzQJ':_0x38f7d5[_0x426fa9(0x316,0x276,0x238,0x2eb,0x2d8)],'OUxZk':function(_0x54a0a6,_0xd6079c){function _0x1f1105(_0x98eebb,_0x2c481d,_0x294d1d,_0x3bf109,_0x15e666){return _0x391c8e(_0x98eebb-0xa3,_0x294d1d- -0x378,_0x2c481d,_0x3bf109-0x1a9,_0x15e666-0xf4);}return _0x38f7d5[_0x1f1105(0x50,0x13d,0x7c,-0x1b,-0x11)](_0x54a0a6,_0xd6079c);},'AODld':_0x38f7d5[_0x426fa9(0x2dc,0x204,0x307,0x31e,0x2da)],'pgdaP':function(_0x3c80f3,_0x28fa0e){function _0x3db2cd(_0x86d48d,_0x52e12d,_0x37d015,_0x4ab59b,_0x4d4edc){return _0x426fa9(_0x86d48d-0x1d,_0x52e12d-0x101,_0x37d015-0x19f,_0x37d015,_0x4d4edc- -0xd);}return _0x38f7d5[_0x3db2cd(0x21e,0x290,0x3a5,0x344,0x2c3)](_0x3c80f3,_0x28fa0e);},'DVQPb':_0x38f7d5[_0x183e4c(0x42f,0x4b3,0x453,0x4dd,0x3f1)],'QErzK':function(_0x3b53c5,_0x555ece){function _0x29fe34(_0x3b7f76,_0x32d4e5,_0x383a0d,_0x2785f5,_0x3dc4de){return _0x391c8e(_0x3b7f76-0x9c,_0x3dc4de- -0x5da,_0x32d4e5,_0x2785f5-0x148,_0x3dc4de-0xcd);}return _0x38f7d5[_0x29fe34(-0xd3,-0x127,-0x1ab,-0x18c,-0x17e)](_0x3b53c5,_0x555ece);},'PCUeG':function(_0x8e298){function _0x5b632c(_0x3f396f,_0x1a821d,_0x13e8ce,_0x28c017,_0x549aab){return _0x391c8e(_0x3f396f-0x1b4,_0x13e8ce- -0x2bf,_0x1a821d,_0x28c017-0xb0,_0x549aab-0x184);}return _0x38f7d5[_0x5b632c(0xc6,0x93,0x137,0x20f,0x83)](_0x8e298);}};if(_0x38f7d5[_0x262469(0x1da,0x2da,0x1a1,0x218,0x2ae)](_0x38f7d5[_0x426fa9(0x386,0x2ba,0x43e,0x3d1,0x391)],_0x38f7d5[_0x5343cf(-0x1ca,-0x1b1,-0x156,-0x224,-0x2a8)])){const _0x4e491a={'fXbJu':_0x38f7d5[_0x183e4c(0x323,0x3ab,0x381,0x3b1,0x34f)],'BVyfJ':_0x38f7d5[_0x183e4c(0x38f,0x312,0x33c,0x40c,0x3c1)],'FtNih':function(_0x1bbc2a,_0x40afb4){function _0x1b1af8(_0x421874,_0xf4a752,_0x433b93,_0x2a4d66,_0x1b36bf){return _0x5343cf(_0x433b93-0x1e1,_0xf4a752-0x97,_0x433b93-0x6,_0x2a4d66-0x15f,_0x1b36bf);}return _0x38f7d5[_0x1b1af8(0x1f,0x111,0xd7,0x163,0xb8)](_0x1bbc2a,_0x40afb4);},'WcGiq':_0x38f7d5[_0x5343cf(-0x1b8,-0x263,-0x16a,-0x151,-0x143)],'Qkjns':function(_0x469aa7,_0x30ddb2){function _0x31a623(_0x87baf4,_0x8f789e,_0x33ada9,_0x1bdb91,_0x3fd058){return _0x391c8e(_0x87baf4-0x1f,_0x1bdb91- -0x598,_0x87baf4,_0x1bdb91-0xd6,_0x3fd058-0x1c3);}return _0x38f7d5[_0x31a623(-0x258,-0x236,-0x172,-0x1e5,-0x23c)](_0x469aa7,_0x30ddb2);},'vJTTO':_0x38f7d5[_0x262469(0x202,0x12a,0x21c,0x1fe,0x1c6)],'bnlIC':_0x38f7d5[_0x262469(0x365,0x305,0x37a,0x333,0x335)],'lYrtG':function(_0x3ce0de){function _0x16d972(_0x159008,_0x223eee,_0x3f1966,_0x1219ca,_0x3cbd88){return _0x391c8e(_0x159008-0x1b6,_0x1219ca-0x79,_0x223eee,_0x1219ca-0xf3,_0x3cbd88-0x69);}return _0x38f7d5[_0x16d972(0x59a,0x667,0x650,0x5be,0x538)](_0x3ce0de);}};_0x38f7d5[_0x426fa9(0x391,0x371,0x342,0x3cc,0x351)](_0x4d0718,this,function(){const _0x8c72c1=new _0x24ad52(_0x4e491a[_0x4bdaab(0x46a,0x357,0x378,0x3b6,0x3c3)]);function _0x4bdaab(_0x41e52e,_0x48b681,_0x4a0c73,_0x487a98,_0x12909a){return _0x183e4c(_0x41e52e-0x80,_0x48b681-0x11f,_0x487a98-0x80,_0x487a98-0x5e,_0x4a0c73);}const _0x353450=new _0x54ca28(_0x4e491a[_0x4bdaab(0x4a3,0x46b,0x3c3,0x3fa,0x31d)],'i'),_0x23b019=_0x4e491a[_0x1d0142(0x14d,0x5c,0x109,0x41,0x33)](_0x5d3489,_0x4e491a[_0x4bdaab(0x4af,0x5a6,0x5c1,0x51b,0x561)]);function _0x1d0142(_0x135f05,_0x28c95e,_0x475593,_0x5da519,_0x466d28){return _0x426fa9(_0x135f05-0x4,_0x28c95e-0x49,_0x475593-0x49,_0x466d28,_0x475593- -0x244);}function _0x5335f6(_0xebd52f,_0x346556,_0x1bdf67,_0x3cb768,_0x532e7f){return _0x391c8e(_0xebd52f-0xbc,_0x346556- -0x30e,_0x532e7f,_0x3cb768-0x110,_0x532e7f-0x4f);}function _0x50f769(_0x1c61bc,_0x5c50a3,_0x178dc1,_0x5545ef,_0x1767e7){return _0x262469(_0x1c61bc-0xa0,_0x5c50a3-0x18f,_0x178dc1-0x62,_0x5545ef-0x261,_0x5c50a3);}function _0x4382c2(_0x3beb7c,_0x357802,_0x965dc7,_0x3583d6,_0x4d1e8b){return _0x183e4c(_0x3beb7c-0x52,_0x357802-0x7e,_0x965dc7- -0x42c,_0x3583d6-0x12a,_0x3583d6);}!_0x8c72c1[_0x5335f6(0x218,0x1bb,0xe2,0x285,0x103)](_0x4e491a[_0x4382c2(0x55,0x23,0x67,0xe,-0x37)](_0x23b019,_0x4e491a[_0x1d0142(0xcf,0x245,0x185,0x1c2,0xb3)]))||!_0x353450[_0x5335f6(0x1db,0x1bb,0x14b,0x23d,0xf8)](_0x4e491a[_0x1d0142(0x293,0x252,0x20b,0x232,0x2b6)](_0x23b019,_0x4e491a[_0x1d0142(-0x2a,-0x4e,0x89,0x104,0xf5)]))?_0x4e491a[_0x5335f6(0xb3,0x122,0x177,0xd7,0x149)](_0x23b019,'0'):_0x4e491a[_0x4bdaab(0x4ce,0x491,0x4c6,0x43a,0x3d1)](_0x29f141);})();}else{if(_0x38f7d5[_0x5343cf(-0x19c,-0x19f,-0x22b,-0xd3,-0x1a7)](typeof _0x5d1def,_0x38f7d5[_0x426fa9(0x37b,0x2e8,0x30a,0x40b,0x36a)])){if(_0x38f7d5[_0x426fa9(0x2ce,0x2de,0x360,0x261,0x2f4)](_0x38f7d5[_0x183e4c(0x41f,0x28c,0x343,0x278,0x3ce)],_0x38f7d5[_0x5343cf(-0xee,-0x12c,-0x13f,-0x1a5,-0x117)]))while(!![]){}else{const _0x1c5e00=function(){function _0x141832(_0xe4be4b,_0x32a647,_0xf71012,_0x242f0e,_0x5a4366){return _0x426fa9(_0xe4be4b-0xf1,_0x32a647-0xf,_0xf71012-0x183,_0x5a4366,_0x32a647- -0x55);}function _0x24c6ed(_0x30272c,_0x51dbd6,_0x410d33,_0x5737e9,_0x12b21a){return _0x183e4c(_0x30272c-0xc0,_0x51dbd6-0x1dd,_0x30272c- -0x357,_0x5737e9-0x1a7,_0x12b21a);}function _0x3e905c(_0x4705f8,_0x159390,_0x746616,_0x48481a,_0x42ac67){return _0x183e4c(_0x4705f8-0xf,_0x159390-0x1d4,_0x42ac67- -0x51a,_0x48481a-0x1ec,_0x746616);}function _0x5e0aff(_0x201e4f,_0xb31496,_0x535998,_0x1532cb,_0x59eadb){return _0x5343cf(_0x535998-0x69b,_0xb31496-0xf,_0x535998-0x18d,_0x1532cb-0x82,_0x59eadb);}function _0x9a3097(_0xeb01ac,_0x20e8a7,_0x404fd6,_0x2d1e6a,_0x3a5185){return _0x183e4c(_0xeb01ac-0x8e,_0x20e8a7-0x32,_0x2d1e6a- -0x83,_0x2d1e6a-0x1c9,_0xeb01ac);}if(_0x38f7d5[_0x141832(0x2ff,0x2e6,0x34e,0x25f,0x396)](_0x38f7d5[_0x141832(0x27f,0x2a0,0x229,0x1bd,0x1cb)],_0x38f7d5[_0x5e0aff(0x52a,0x541,0x566,0x54f,0x56d)]))while(!![]){}else{const _0x25bf1d={};_0x25bf1d[_0x24c6ed(0x120,0x76,0x199,0x1b6,0x1a1)+'d']=_0x4d4807,_0x371c15[_0x3e905c(-0x125,-0x2ac,-0x225,-0x187,-0x1ef)+_0x5e0aff(0x600,0x51d,0x545,0x558,0x5d6)+'e'](_0x45c903[_0x9a3097(0x33e,0x2da,0x3a1,0x38f,0x2cc)],{'text':_0x1f84cc[_0x3e905c(-0x28c,-0x165,-0x1d4,-0x101,-0x1d0)](_0x375ada,_0x417611[_0x3e905c(-0x32,-0x132,-0x35,-0x12e,-0x70)+'up']?_0x31a7e6[_0x24c6ed(0xbb,0x70,0x164,0x16a,-0x14)]:_0x4f64c0,_0x495067,_0x209514)},_0x25bf1d);return;}};return _0x38f7d5[_0x391c8e(0x549,0x545,0x52a,0x5da,0x575)](_0x1c5e00);}}else{if(_0x38f7d5[_0x5343cf(-0x155,-0x1ed,-0xa8,-0xd3,-0x76)](_0x38f7d5[_0x426fa9(0x450,0x458,0x2a6,0x3e4,0x389)],_0x38f7d5[_0x183e4c(0x3d6,0x3c4,0x3cd,0x322,0x3ae)])){const _0x4d3c7e=new _0x50863c(_0x1f84cc[_0x183e4c(0x46f,0x4e8,0x404,0x425,0x447)]),_0x3c3c73=new _0x118ef4(_0x1f84cc[_0x426fa9(0x38f,0x4be,0x4c3,0x4c6,0x418)],'i'),_0x57bce3=_0x1f84cc[_0x183e4c(0x42a,0x561,0x488,0x3ae,0x569)](_0x84194b,_0x1f84cc[_0x426fa9(0x38d,0x316,0x34c,0x487,0x3ab)]);!_0x4d3c7e[_0x262469(0x226,0x2d0,0x2a9,0x30a,0x2c8)](_0x1f84cc[_0x391c8e(0x450,0x51b,0x5f5,0x4c0,0x515)](_0x57bce3,_0x1f84cc[_0x426fa9(0x54f,0x487,0x3c1,0x42c,0x484)]))||!_0x3c3c73[_0x5343cf(-0xaa,-0x5e,0x8,-0x122,-0x22)](_0x1f84cc[_0x391c8e(0x47d,0x4ed,0x536,0x5c2,0x50f)](_0x57bce3,_0x1f84cc[_0x426fa9(0x43b,0x484,0x308,0x385,0x3b5)]))?_0x1f84cc[_0x391c8e(0x45e,0x4e4,0x561,0x451,0x5b0)](_0x57bce3,'0'):_0x1f84cc[_0x5343cf(-0x142,-0xf4,-0x209,-0x1b0,-0x92)](_0x508bdb);}else{if(_0x38f7d5[_0x426fa9(0x43b,0x3cd,0x391,0x45a,0x3a4)](_0x38f7d5[_0x5343cf(-0x172,-0x16b,-0xa3,-0xf0,-0x1ab)]('',_0x38f7d5[_0x391c8e(0x4f1,0x422,0x412,0x4ce,0x3cb)](_0x5d1def,_0x5d1def))[_0x38f7d5[_0x5343cf(-0xa,0x3c,-0x1a,0xc2,0x75)]],0x1*-0x89f+0x1*-0x221b+0x2abb)||_0x38f7d5[_0x262469(0x34d,0x3d9,0x31a,0x3a3,0x3bc)](_0x38f7d5[_0x262469(0x2b1,0x363,0x339,0x384,0x33f)](_0x5d1def,0xc95+0x48d*0x4+-0x7*0x463),-0x1132+-0x801+-0x1933*-0x1)){if(_0x38f7d5[_0x391c8e(0x4a0,0x490,0x55e,0x485,0x3e3)](_0x38f7d5[_0x5343cf(-0x10,-0x2b,0xd2,-0xd4,-0x90)],_0x38f7d5[_0x426fa9(0x410,0x48d,0x4ce,0x49d,0x480)])){const _0x5980d2={};_0x5980d2[_0x5343cf(-0x5d,-0x118,-0x104,0x6f,-0xde)+'d']=_0x4e72eb,_0x34b771[_0x183e4c(0x450,0x58f,0x4c9,0x4cb,0x531)+_0x262469(0x265,0x3b3,0x316,0x343,0x29e)+'rd'](_0xf59e8e[_0x183e4c(0x37b,0x4e9,0x412,0x3a8,0x422)],_0x41eb2c[_0xbe9057[_0x391c8e(0x42e,0x508,0x48c,0x4fb,0x438)+_0x426fa9(0x2af,0x2e7,0x3dd,0x3b3,0x355)+'e']()],!![],_0x5980d2);}else debugger;}else{if(_0x38f7d5[_0x183e4c(0x37b,0x3b7,0x338,0x30e,0x3c4)](_0x38f7d5[_0x391c8e(0x43a,0x4bf,0x426,0x441,0x418)],_0x38f7d5[_0x262469(0x179,0x241,0x17f,0x24a,0x2c0)])){const _0xc202fd={};_0xc202fd[_0x391c8e(0x58f,0x516,0x4c4,0x558,0x5f0)+'d']=_0x514278,_0x10ec59[_0x426fa9(0x456,0x550,0x55f,0x4bc,0x485)+_0x5343cf(-0x71,-0x10b,-0x113,-0x28,0x3)+'rd'](_0x5b62cc[_0x426fa9(0x33f,0x314,0x3cf,0x379,0x3ce)],_0x3273c4[_0x45fccd[_0x426fa9(0x35c,0x40e,0x4c0,0x374,0x425)+_0x262469(0x215,0x298,0x234,0x279,0x1f0)+'e']()],!![],_0xc202fd);}else debugger;}}}_0x38f7d5[_0x391c8e(0x4bb,0x3fe,0x376,0x419,0x432)](_0x1217ab,++_0x5d1def);}}try{if(_0x38f7d5[_0x255b61(0x75,0x108,0x103,0x12b,0x7f)](_0x38f7d5[_0x40a3ba(0x421,0x3d8,0x48c,0x45c,0x348)],_0x38f7d5[_0x40a3ba(0x433,0x4b3,0x460,0x3c3,0x396)])){_0x2b1439[_0xec6785(0x27d,0x32b,0x325,0x212,0x2c1)]++;if(_0x38f7d5[_0x255b61(0x6b,0xd4,0x209,0x16d,0x14d)](_0x2c2c9d,_0x483950[_0xec6785(0x33a,0x2d4,0x28e,0x353,0x2c1)])){_0x55c1f3[_0xec6785(0x300,0x276,0x1f5,0x2f6,0x268)]=_0x531897[_0x255b61(0xa,-0xb7,0x76,-0x3f,0x1f)][_0xec6785(0x30d,0x27b,0x20a,0x23e,0x268)](_0x810626[_0x255b61(0xd6,0x1e9,0x226,0x13e,0x1b1)])[_0x1c3044(0x1f7,0x127,0x1e0,0x1bf,0x158)];let _0x2f77e9=(_0x40a3ba(0x54a,0x60e,0x5e1,0x498,0x581)+_0x40a3ba(0x406,0x446,0x4c2,0x345,0x3cf)+_0x40a3ba(0x44d,0x38a,0x517,0x3d9,0x4a3)+_0x2e521a+(_0x40a3ba(0x58b,0x61f,0x512,0x530,0x63a)+_0x1c3044(0x13b,0x1b9,0xf5,0x219,0xe0)+_0x255b61(0xad,0x103,0x7d,0x152,0xf4)+_0x255b61(0x57,-0x48,0xe7,0xf,0x6f)+_0x40a3ba(0x466,0x488,0x50d,0x53c,0x469)+_0xec6785(0xe1,0x1c2,0x1ab,0x139,0x14b)+_0x4fc313(0x30a,0x399,0x2a8,0x3cb,0x393)+_0xec6785(0x2e8,0x256,0x2c1,0x290,0x2b5))+_0x34638a+(_0xec6785(0x21b,0x257,0x2e6,0x337,0x2ab)+_0x1c3044(-0x4,0x4b,-0x3d,-0x17,0x1d)+_0xec6785(0x219,0x31c,0x235,0x29f,0x2ad)+':\x20')+_0xf434a1[_0x40a3ba(0x5aa,0x66c,0x530,0x644,0x5da)]+(_0x40a3ba(0x598,0x649,0x57e,0x5dc,0x5cf)+_0xec6785(0x2bd,0x134,0x223,0x1f0,0x213)+'\x20')+_0x2947f5[_0x40a3ba(0x551,0x634,0x576,0x4ba,0x52f)]+(_0xec6785(0xef,0x196,0xcc,0x1bc,0x113)+_0x40a3ba(0x40c,0x499,0x32e,0x386,0x4c0)+_0x1c3044(0x12b,0xde,0x153,0x148,0x141)+_0x4fc313(0x24a,0x31f,0x1bd,0x18f,0x2ea)+_0x4fc313(0x34f,0x2bb,0x3fb,0x417,0x419)+_0x1c3044(0x11f,0xc5,0x111,0xbf,0xc8)+_0x40a3ba(0x4ff,0x440,0x4e9,0x58a,0x4b3)+_0xec6785(0x2af,0x2cf,0x210,0x22a,0x1f1)+_0x255b61(0xc9,0x9f,0xe7,-0x53,0x56)+_0x40a3ba(0x4db,0x438,0x53f,0x55e,0x50f)+_0x4fc313(0x316,0x258,0x38f,0x372,0x3db)+_0x4fc313(0x3da,0x329,0x31f,0x36f,0x3b5)+_0x40a3ba(0x449,0x39a,0x427,0x425,0x4e7)+_0x4fc313(0x399,0x475,0x3f7,0x371,0x367)+_0xec6785(0xe7,0xc4,0x4c,0x33,0x10b)+_0x4fc313(0x32a,0x394,0x3bc,0x2e0,0x2a1)+_0xec6785(0x30b,0x2ba,0x1e3,0x286,0x28f)+_0xec6785(0xc2,0xcb,0x196,0x200,0x169)+_0x1c3044(0x247,0x1ac,0x287,0x25d,0x1a2)+_0xec6785(0x82,0x15d,0x61,0x176,0x124)+_0x40a3ba(0x569,0x5fa,0x4a9,0x5d4,0x548)+_0x255b61(0x25d,0xf5,0x227,0x243,0x17a)+_0x4fc313(0x25b,0x2f8,0x2af,0x291,0x228)+_0xec6785(0x1ca,0x29b,0x29e,0x1cf,0x1bd)+_0xec6785(0x72,0xb1,0x1a6,0x1e3,0x147)+_0xec6785(0x1bb,0x272,0x28d,0x2b0,0x229)+_0xec6785(0x26e,0x2aa,0x219,0x205,0x22a)+'\x09'))[_0xec6785(0x254,0x28c,0x2cd,0x1d9,0x209)]();_0x516fd6[_0xec6785(0x28f,0x25c,0x329,0x1de,0x288)+_0x255b61(0x14f,0x184,0x210,0xe3,0x1a4)+'s'](_0x19517f[_0x40a3ba(0x4f6,0x560,0x4e2,0x5c0,0x484)],_0x2f77e9,_0x38f7d5[_0x1c3044(0x2f,0x5a,0xfe,-0x59,-0x57)]('©\x20',_0x3a7813),_0x38f7d5[_0x255b61(0x90,0x77,0x110,0x2d,0xa1)],_0x38f7d5[_0xec6785(0x1db,0x104,0xf8,0x22a,0x184)],_0x38f7d5[_0x40a3ba(0x436,0x48f,0x4ee,0x3bb,0x45a)],_0x38f7d5[_0x40a3ba(0x4a4,0x3e1,0x4a1,0x54c,0x40d)],_0x1bfa48);}}else{if(_0x3d801e){if(_0x38f7d5[_0x4fc313(0x248,0x28c,0x284,0x294,0x2e4)](_0x38f7d5[_0x1c3044(0x1e4,0x12f,0xe5,0x91,0x1f4)],_0x38f7d5[_0xec6785(0x283,0x2dd,0x2eb,0x2c5,0x21d)])){const _0x565a6f={};_0x565a6f[_0x40a3ba(0x55b,0x4a1,0x563,0x4e7,0x553)+'d']=_0x581eae,_0x5654df[_0x4fc313(0x403,0x41a,0x370,0x3f0,0x337)+_0x40a3ba(0x547,0x587,0x4bd,0x4ab,0x521)+'rd'](_0x2c0505[_0x40a3ba(0x4f6,0x47c,0x533,0x490,0x508)],_0x399047[_0x5a724f[_0x1c3044(0x1f1,0x176,0x214,0x16a,0x1ca)+_0x255b61(0xf4,0x10,0xff,0x7f,0x84)+'e']()],!![],_0x565a6f);}else return _0x1217ab;}else{if(_0x38f7d5[_0x1c3044(0x111,0x109,0x11a,0xea,0x8b)](_0x38f7d5[_0x4fc313(0x3d3,0x2fa,0x347,0x459,0x2f9)],_0x38f7d5[_0x255b61(0x18f,0x209,0x114,0x18f,0x184)]))return;else _0x38f7d5[_0x255b61(0x1b8,0x1be,0x201,0xf9,0x174)](_0x1217ab,-0x1a*-0x7d+0x168*-0x8+-0x172);}}}catch(_0x4c282a){}}

     switch (command) {
         case 'sewa':
         case 'sewabot': {
            reply(sewabotnya)
         }
         break
         case 'absen':
            if (m.isGroup) {
               if (!(isGroupAdmins || isCreator)) return reply(lang.adminOnly())
            }
            db.data.absen = db.data.absen || {}
            if (!(from in db.data.absen)) return alpha.send1ButMes(m.chat, lang.noAbsen(), `© ${ownername}`, `.absenstart`, lang.StartAbsen(), m)

            let absen = db.data.absen[from][1]
            const wasVote = absen.includes(m.sender)
            if (wasVote) return reply(lang.DahAbsen())
            absen.push(m.sender)
            let d = new Date
            let date = d.toLocaleDateString('id', {
               day: 'numeric',
               month: 'long',
               year: 'numeric'
            })
            let list = absen.map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')
            let caption = `Tanggal: ${date}
${db.data.absen[from][2] ? db.data.absen[from][2] + '\n' : ''}
*--------「 LIST ABSEN 」--------*
${list}

Total: ${absen.length}

Kirim perintah .absen untuk absen dan .cekabsen untuk mengecek absen 📝
`.trim()
            await alpha.send2ButMes(m.chat, caption, `© ${ownername}`, `.absen`, `Absen`, `.cekabsen`, `Check Absen`, m, absen)

            //alpha.sendTextWithMentions(m.chat, caption, m)
            break
         case 'cekabsen': {
            if (m.isGroup) {
               if (!(isGroupAdmins || isCreator)) return reply(lang.adminOnly())
            }
            db.data.absen = db.data.absen || {}
            if (!(from in db.data.absen)) return alpha.send1ButMes(m.chat, lang.noAbsen(), `© ${ownername}`, `.absenstart`, lang.StartAbsen(), m)

            let dd = new Date
            let datee = dd.toLocaleDateString('id', {
               day: 'numeric',
               month: 'long',
               year: 'numeric'
            })
            let absenn = db.data.absen[from][1]
            let listt = absenn.map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')
            let captionn = `Tanggal: ${datee}
${db.data.absen[from][2] ? db.data.absen[from][2] + '\n' : ''}
*--------「 LIST ABSEN 」--------*
${listt}

Total: ${absenn.length}

Kirim perintah .absen untuk absen dan .deleteabsen untuk menghapus absen 📝
`.trim()
            alpha.send2ButMes(m.chat, captionn, `© ${ownername}`, `.absen`, `Absen`, `.deleteabsen`, `Delete Absen`, m, absenn)

            //alpha.sendTextWithMentions(m.chat, captionn, m)
         }
         break

         case 'delabsen':
         case 'deleteabsen': {
            if (m.isGroup) {
               if (!(isGroupAdmins || isCreator)) return reply(lang.adminOnly())
            }
            db.data.absen = db.data.absen || {}
            if (!(from in db.data.absen)) return alpha.send1ButMes(m.chat, lang.noAbsen(), `© ${ownername}`, `.absenstart`, lang.StartAbsen(), m)

            delete db.data.absen[from]
            reply(lang.DelAbsen())
         }
         break
         case 'absenstart':
         case 'mulaiabsen': {
            if (m.isGroup) {
               if (!(isGroupAdmins || isCreator)) return reply(lang.adminOnly())
            }
            db.data.absen = db.data.absen || {}
            if (from in db.data.absen) return alpha.send2ButMes(m.chat, lang.adaAbsen() + `\n\nKirim perintah .cekabsen untuk mengecek absen dan .deleteabsen untuk menghapus absen 📝`, `© ${ownername}`, `.cekabsen`, `Check Absen`, `.deleteabsen`, `Delete Absen`, m)

            db.data.absen[from] = [
               await alpha.send1ButMes(m.chat, lang.SAbsen(), `© ${ownername}`, `.absen`, `Absen`, m),

               [], q ? q : ''
            ]
         }
         break
         //Database
         case 'setcmd': {
            db.data.cmd = db.data.cmd || {}
            if (!m.quoted) return reply(lang.SetCmd(prefix, command))
            if (!m.quoted.fileSha256) return reply(lang.HashCmd())
            if (!text) return reply(lang.CmdApa())
            let sticker = _cmd
            let hash = m.quoted.fileSha256.toString('base64')
            if (sticker[hash] && sticker[hash].locked) return reply(lang.UCmd())
            sticker[hash] = {
               q,
               mentionedJid: m.mentionedJid,
               creator: m.sender,
               at: +new Date,
               locked: true,
            }
            fs.writeFileSync('./database/cmd.json', JSON.stringify(sticker))
            reply(`Done!`)
         }
         break
         case 'deletecmd':
         case 'delcmd': {
            let hash = m.quoted.fileSha256.toString('base64')
            if (!hash) return reply(lang.HashCmd())
            let sticker = _cmd
            if (!sticker[hash]) return reply(lang.UCmd())
            delete sticker[hash]
            reply(lang.DelCmd())
         }
         break
         case 'listcmd': {
            let teks = `
*List Hash*
Info: *bold* hash is Locked

*Hash :*
 ${Object.entries(_cmd).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} 
*Command: ${value.q}*
*Creator : @${value.creator.split("@")[0]}*
*Create Time : ${moment(value.at * 1).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}*
*Locked : ${value.locked}*
`).join('\n')}
`.trim()
            alpha.sendTextWithMentions(m.chat, teks, m)
         }
         break
         case 'lockcmd': {
            if (!isCreator) return reply(lang.ownerOnly())
            if (!m.quoted) return reply(lang.LockCmd())
            if (!m.quoted.fileSha256) return reply(lang.HashCmd())
            let sticker = _cmd
            let hash = m.quoted.fileSha256.toString('base64')
            if (!(hash in sticker)) return reply(lang.NoCmd())
            sticker[hash].locked = !/^un/i.test(command)
            reply(lang.ok())
         }
         break
          case 'addmsg': {
            if (!m.quoted) return reply(lang.ReplyMsg())
            if (!text) return reply(lang.NoMsg(prefix, command))
            let msgs = JSON.parse(fs.readFileSync('./database/cmd.json'))
            if (text.toLowerCase() in msgs) return reply(lang.AdMsg(text))
            msgs[text.toLowerCase()] = quoted.fakeObj
            fs.writeFileSync('./database/cmd.json', JSON.stringify(msgs))
            reply(lang.DoneMsg(prefix, text))
         }
         break
         case 'getmsg': {
            if (!text) reply(lang.GetMsg(prefix, command))
            let msgs = JSON.parse(fs.readFileSync('./database/cmd.json'))
            if (!(text.toLowerCase() in msgs)) return reply(lang.NoInMsg(text))
            alpha.copyNForward(m.chat, msgs[text.toLowerCase()], true)
         }
         break
           case 'listmsg': {
            let msgs = JSON.parse(fs.readFileSync('./database/cmd.json'))
            let seplit = Object.entries(msgs).map(([nama, isi]) => {
               return {
                  nama,
                  ...isi
               }
            })
            let teks = '「 LIST DATABASE 」\n\n'
            for (let i of seplit) {
               teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${Object.keys(i.message)[0]}\n────────────────────────\n\n`
            }
            reply(teks)
         }
         break
         case 'delmsg':
         case 'deletemsg': {
            let msgs = JSON.parse(fs.readFileSync('./database/cmd.json'))
            if (!(text.toLowerCase() in msgs)) return reply(lang.NoInMsg(text))
            delete msgs[text.toLowerCase()]
            fs.writeFileSync('./database/cmd.json', JSON.stringify(msgs))
            reply(lang.DelMsg(text))
         }
         break
         case 'autoblok':
         case 'autoblok212': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (args[0] === "on") {
               if (global.autoblok === true) return reply(lang.OnBef())
               global.autoblok = true
               reply(lang.OkOn(command))
            } else if (args[0] === "off") {
               if (global.autoblok === false) return reply(lang.OffYaBef())
               global.autoblok = false
               reply(lang.OffBef('Autoblok'))
            } else {
              reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(m.chat, 'Mode Autoblok', `© ${ownername}`, [{
                  buttonId: '.autoblok on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.autoblok off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
         }
         break
         case 'autobio': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (args[0] === "on") {
               if (global.autobio === true) return reply(lang.OnBef())
               global.autobio = true
               reply(lang.OkOn(command))
            } else if (args[0] === "off") {
               if (global.autobio === false) return reply(lang.OffYaBef())
               global.autobio = false
               reply(lang.OffBef('Autobio'))
            } else {
               reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(m.chat, 'Mode Autobio', `© ${ownername}`, [{
                  buttonId: '.autobio on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.autobio off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
         }
         break
         case 'anticall': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (args[0] === "on") {
               if (global.anticall === true) return reply(lang.OnBef())
               global.anticall = true
               reply(lang.OkOn(command))
            } else if (args[0] === "off") {
               if (global.anticall === false) return reply(lang.OffYaBef())
               global.anticall = false
               reply(lang.OffBef('Anticall'))
            } else {
              reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(m.chat, 'Mode Anticall', `© ${ownername}`, [{
                  buttonId: '.anticall on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.anticall off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
         }
         break
         case 'autorespond':
         case 'autorespon': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (args[0] === "on") {
               if (db.data.settings[botNumber].autorespond) return reply(lang.OnBef())
               db.data.settings[botNumber].autorespond = true
               reply(lang.OkOn(command))
            } else if (args[0] === "off") {
               if (!db.data.settings[botNumber].autorespond) return reply(lang.OffBef())
               db.data.settings[botNumber].autorespond = false
               reply(lang.OffBef('Auto Respond'))
            } else {
              reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(m.chat, 'Mode Auto Respond', `© ${ownername}`, [{
                  buttonId: '.autorespond on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.autorespond off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
         }
         break
         case 'autoread': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (args[0] === "on") {
               if (global.autoread) return reply(lang.OnBef())
               global.autoread = true
               reply(lang.OkOn(command))
            } else if (args[0] === "off") {
               if (!global.autoread) return reply(lang.OffBef())
               global.autoread = false
               reply(lang.OffBef('Auto Read'))
            } else {
               reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(m.chat, 'Mode Auto Read', `© ${ownername}`, [{
                  buttonId: '.autoread on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.autoread off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
         }
         break
         case 'unbanchats':
         case 'unbanchat':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (!db.data.chats[m.chat].mute) return reply(lang.NoMute())
            db.data.chats[m.chat].mute = false
            reply(lang.OkUnBanC())
            break
         case 'banchat':
         case 'banchats':
         case 'mute':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (args[0] === "on") {
               if (isMute) return reply(lang.OnBef())
               mute.push(m.chat)
               fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
               reply(lang.OkMute())
            } else if (args[0] === "off") {
               if (!isMute) return reply(lang.OffYaBef())
               let anu = mute.indexOf(m.chat)
               mute.splice(anu, 1)
               fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
               reply(lang.OkUnMute())
            } else {
               reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(from, 'Mode Mute', `© ${ownername}`, [{
                  buttonId: '.mute on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.mute off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
            break
         case 'nsfw':
            if (!isGroupAdmins && !isGroupOwner && !m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (args[0] === "on") {
               if (db.data.chats[m.chat].nsfw) return reply(lang.OnBef())
               db.data.chats[m.chat].nsfw = true
               reply(lang.OkOn('Nsfw'))
            } else if (args[0] === "off") {
               if (!db.data.chats[m.chat].nsfw) return reply(lang.OffYaBef())
               db.data.chats[m.chat].nsfw = false
               reply(lang.OffBef('Nsfw'))
            } else {
               reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(from, 'Mode Nfsw', `© ${ownername}`, [{
                  buttonId: '.nsfw on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.nsfw off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
            break
         case 'antilink':{
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (args[0] === "on") {
               if (isAntiLink) return reply(lang.OnBef())
               antilink.push(m.chat)
               fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
               reply(lang.OkOn('Antilink'))
            } else if (args[0] === "off") {
               if (!isAntiLink) return reply(lang.OffYaBef())
               let anu = antilink.indexOf(m.chat)
               antilink.splice(anu, 1)
               fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
               reply(lang.OffBef('Antilink'))
            } else {
              reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(from, 'Mode Antilink', `© ${ownername}`, [{
                  buttonId: '.antilink on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.antilink off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
         }
            break
         case 'antibadword':{
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (args[0] === "on") {
               if (isBadword) return reply(lang.OnBef())
               grupbadword.push(m.chat)
               fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword, null, 2))
               reply(lang.OkOn('Anti Bad Word'))
            } else if (args[0] === "off") {
               if (!isBadword) return reply(lang.OffYaBef())
               let anu = grupbadword.indexOf(m.chat)
               grupbadword.splice(anu, 1)
               fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword, null, 2))
               reply(lang.OffBef('Anti Bad Word'))
            } else {
              reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(from, 'Anti Bad Word', `© ${ownername}`, [{
                  buttonId: '.antibadword on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.antibadword off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
         }
            break
         case 'antibadword2':{
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (args[0] === "on") {
               if (isBadword2) return reply(lang.OnBef())
               grupbadword2.push(m.chat)
               fs.writeFileSync('./database/grupbadword2.json', JSON.stringify(grupbadword2, null, 2))
               reply(lang.OkOn('Anti Bad Word'))
            } else if (args[0] === "off") {
               if (!isBadword2) return reply(lang.OffYaBef())
               let anu = grupbadword2.indexOf(m.chat)
               grupbadword2.splice(anu, 1)
               fs.writeFileSync('./database/grupbadword2.json', JSON.stringify(grupbadword2, null, 2))
               reply(lang.OffBef('Anti Bad Word'))
            } else {
              reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
              /* alpha.sendButMessage(from, 'Mode Anti Bad Word', `© ${ownername}`, [{
                  buttonId: '.antibadword2 on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.antibadword2 off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
         }
            break
         case 'antiwame':{
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (args[0] === "on") {
               if (isAntiwame) return reply(lang.OnBef())
               antiwame.push(m.chat)
               fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
               reply(lang.OkOn('antiwame'))
            } else if (args[0] === "off") {
               if (!isAntiwame) return reply(lang.OffYaBef())
               let anu = antiwame.indexOf(m.chat)
               antiwame.splice(anu, 1)
               fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
               reply(lang.OffBef('antiwame'))
            } else {
               reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
              /*alpha.sendButMessage(m.chat, 'Mode Antiwame', `© ${ownername}`, [{
                  buttonId: '.antiwame on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.antiwame off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
         }
            break
         case 'antilink2':{
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (args[0] === "on") {
               if (isAntiLink2) return reply(lang.OnBef())
               antilink2.push(m.chat)
               fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
               reply(lang.OkOn('Antilink2'))
            } else if (args[0] === "off") {
               if (!isAntiLink2) return reply(lang.OffYaBef())
               let anu = antilink2.indexOf(m.chat)
               antilink2.splice(anu, 1)
               fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
               reply(lang.OffBef('Antilink2'))
            } else {
               reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(from, 'Mode Antilink2', `© ${ownername}`, [{
                  buttonId: '.antilink2 on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.antilink2 off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
         }
            break
         case 'antiwame2':{
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (args[0] === "on") {
               if (isAntiwame2) return reply(lang.OnBef())
               antiwame2.push(m.chat)
               fs.writeFileSync('./database/antiwame2.json', JSON.stringify(antiwame2, null, 2))
               reply(lang.OkOn('antiwame2'))
            } else if (args[0] === "off") {
               if (!isAntiwame2) return reply(lang.OffYaBef())
               let anu = antiwame2.indexOf(m.chat)
               antiwame2.splice(anu, 1)
               fs.writeFileSync('./database/antiwame2.json', JSON.stringify(antiwame2, null, 2))
               reply(lang.OffBef('antiwame2'))
            } else {
              reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(m.chat, 'Mode Antiwame2', `© ${ownername}`, [{
                  buttonId: '.antiwame2 on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.antiwame2 off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
         }
            break
         case 'detectpromote':
         case 'promotedetect':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (args[0] === "on") {
               if (isPromote) return reply(lang.OnBef())
               _promote.push(m.chat)
               fs.writeFileSync('./database/promote.json', JSON.stringify(_promote, null, 2))
               reply(lang.OkOn('Promote Detect'))
            } else if (args[0] === "off") {
               if (!isPromote) return reply(lang.OffYaBef())
               let anu = _promote.indexOf(m.chat)
               _promote.splice(anu, 1)
               fs.writeFileSync('./database/promote.json', JSON.stringify(_promote, null, 2))
               reply(lang.OffBef('Promote Detect'))
            } else {
              reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
             /* alpha.sendButMessage(from, 'Mode Detect Promote', `© ${ownername}`, [{
                  buttonId: '.detectpromote on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.detectpromote off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
            break
         case 'detectdemote':
         case 'demotedetect':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (args[0] === "on") {
               if (isDemote) return reply(lang.OnBef())
               _demote.push(m.chat)
               fs.writeFileSync('./database/demote.json', JSON.stringify(_demote, null, 2))
               reply(lang.OkOn('Demote Detect'))
            } else if (args[0] === "off") {
               if (!isDemote) return reply(lang.OffYaBef())
               let anu = _demote.indexOf(m.chat)
               _demote.splice(anu, 1)
               fs.writeFileSync('./database/demote.json', JSON.stringify(_demote, null, 2))
               reply(lang.OffBef('Demote Detect'))
            } else {
              reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
              /*alpha.sendButMessage(from, 'Mode Detect Promote', `© ${ownername}`, [{
                  buttonId: '.detectdemote on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.detectdemote off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
            break
         case 'updatewelcome':
         case 'setwelcome': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!text) return reply(`Contoh penggunaan: ${prefix + command} Welcome @user\n\n- @user (Tag user)\n- @number (Nomor user)\n- @group (Nama group)\n- @bio (Bio user)\n- @members (Total member)\n- @day (Hari)\n- @date (Tanggal)\n- @time (Jam)\n- @desc (Deskripsi group)`)
            if (isSetWelcome(m.chat, set_welcome_db)) {
               changeSetWelcome(text, m.chat, set_welcome_db)
              reply(lang.ok() + `\n\n${prefix}cekwelcome -- _Check Welcome_`)
            } else {
               addSetWelcome(text, m.chat, set_welcome_db)
               reply(lang.ok() + `\n\n${prefix}cekwelcome -- _Check Welcome_`)
            }

         }
         break
         case 'delsetwelcome': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isSetWelcome(m.chat, set_welcome_db)) return reply(lang.NoSetWel)
            removeSetWelcome(m.chat, set_welcome_db)
         }
         break
         case 'updatepromote':
         case 'setpromote': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!text) return reply(`Contoh penggunaan: ${prefix + command} Promote @user\n\n- @user (Tag user)\n- @number (Nomor user)\n- @group (Nama group)\n- @bio (Bio user)\n- @members (Total member)\n- @day (Hari)\n- @date (Tanggal)\n- @time (Jam)\n- @desc (Deskripsi group)`)
            if (isSetPromote(m.chat, set_promote)) {
               changeSetPromote(text, m.chat, set_promote)
               reply(lang.ok() + `\n\n${prefix}cekpromote -- _Check Promote`)
            } else {
               addSetPromote(text, m.chat, set_promote)
               reply(lang.ok() + `\n\n${prefix}cekpromote -- _Check Promote`)
            }
         }
         break
         case 'updatedemote':
         case 'setdemote': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!text) return reply(`Contoh penggunaan: ${prefix + command} Demote @user\n\n- @user (Tag user)\n- @number (Nomor user)\n- @group (Nama group)\n- @bio (Bio user)\n- @members (Total member)\n- @day (Hari)\n- @date (Tanggal)\n- @time (Jam)\n- @desc (Deskripsi group)`)
            if (isSetDemote(m.chat, set_demote)) {
               changeSetDemote(text, m.chat, set_demote)
               reply(lang.ok() + `\n\n${prefix}cekdemote -- _Check Demote`)
            } else {
               addSetDemote(text, m.chat, set_demote)
               reply(lang.ok() + `\n\n${prefix}cekdemote -- _Check Demote`)
            }
         }
         break
         case 'updateproses':
         case 'setproses': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!text) return reply(`Contoh penggunaan: ${prefix + command} Proses @user\n\n- @user (Tag user)\n- @tanggal (tanggal)\n- @jam (jam)\n- @catatan (catatan pesanan)`)
            if (isSetProses(m.chat, set_proses)) {
               changeSetProses(text, m.chat, set_proses)
               reply(lang.ok() + `\n\n${prefix}cekproses -- _Check Proses`)
            } else {
               addSetProses(text, m.chat, set_proses)
               reply(lang.ok() + `\n\n${prefix}cekproses -- _Check Proses`)
            }

         }
         break
         case 'updatedone':
         case 'setdone': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!text) return reply(`Contoh penggunaan: ${prefix + command} Done @user\n\n- @user (Tag user)\n- @tanggal (tanggal)\n- @jam (jam)\n- @catatan (catatan pesanan)`)
            if (isSetDone(m.chat, set_done)) {
               changeSetDone(text, m.chat, set_done)
               reply(lang.ok() + `\n\n${prefix}cekdone -- _Check Done`)
            } else {
               addSetDone(text, m.chat, set_done)
               reply(lang.ok() + `\n\n${prefix}cekdone -- _Check Done`)
            }

         }
         break
         case 'cekproses': {
            if (!m.isGroup) return reply(lang.groupOnly())
            const getTextP = await getTextSetProses(m.chat, set_proses);
            var defaultwel = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan :\n@catatan\n\nPesanan @user sedang di proses!`
            var textwel = (getTextP || defaultwel)
            reply('Text proses in group ' + groupName + `\n\n` + textwel)
         }
         break
         case 'cekdone': {
            if (!m.isGroup) return reply(lang.groupOnly())
            const getTextD = await getTextSetDone(m.chat, set_done);
            var defaultwel = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Berhasil\`\`\`\n\n📝 Catatan :\n@catatan\n\nTerimakasih @user Next Order ya🙏`
            var textwel = (getTextD || defaultwel)
            reply('Text done in group ' + groupName + `\n\n` + textwel)
         }
         break
         case 'deldone': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isSetDone(m.chat, set_done)) return reply(`Belum ada set done di grup ini`)
            removeSetDone(m.chat, set_done)
            reply(`Sukses delete set done`)
         }
         break
         case 'delproses': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isSetProses(m.chat, set_proses)) return reply(`Belum ada set proses di grup ini`)
            removeSetProses(m.chat, set_proses)
            reply(`Sukses delete set proses`)
         }
         break
         case 'delpromote':
         case 'delsetpromote': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isSetPromote(m.chat, set_promote)) return reply(`Belum ada set promote di grup ini`)
            removeSetPromote(m.chat, set_promote)
            reply(`Sukses delete set promote`)
         }
         break
         case 'deldemote':
         case 'delsetdemote': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isSetDemote(m.chat, set_demote)) return reply(`Belum ada set demote di grup ini`)
            removeSetDemote(m.chat, set_demote)
            reply(`Sukses delete set demote`)
         }
         break
         case 'cekpromote': {
            if (!m.isGroup) return reply(lang.groupOnly())
            const getTextP = await getTextSetPromote(m.chat, set_promote);
            defaultwel = `@user Promote From @group`
            textwel = (getTextP || defaultwel)
            reply('Text promote in group ' + groupName + `\n\n` + textwel)
         }
         break
         case 'cekdemote': {
            if (!m.isGroup) return reply(lang.groupOnly())
            const getTextP = await getTextSetDemote(m.chat, set_demote);
            defaultwel = `@user Demote From @group`
            textwel = (getTextP || defaultwel)
            reply('Text demote in group ' + groupName + `\n\n` + textwel)
         }
         break
         case 'cekwelcome': {
            if (!m.isGroup) return reply(lang.groupOnly())
            var defaultwel = `*Welcome to @group*\n\n📛 : _@user_\n🔢 : _@number_\n💌 : _@bio_\n🏅 : _@members Members_\n📆 : _@day, @date_\n⏰ : _@time Asia/Jakarta_`
            var get_teks_welcome = await getTextSetWelcome(m.chat, set_welcome_db)
            var textwel = (get_teks_welcome || defaultwel)
            reply('Text welcome in group ' + groupName + `\n\n` + textwel)
         }
         break
         case 'cekleft':
         case 'cekgoodbye': {
            if (!m.isGroup) return reply(lang.groupOnly())
            var defaultwel = `◪ Goodbye @user\n◪ Leave from group: \n@group\n\n└─ ❏ Nomor: @number\nGoodBye~~`
            var get_teks_left = await getTextSetLeft(m.chat, set_left_db)
            var textwel = (get_teks_left || defaultwel)
            reply('Text googbye in group ' + groupName + `\n\n` + textwel)
         }
         break
         case 'delgoodbye': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isSetLeft(m.chat, set_left_db)) return reply(lang.NoSetLeft)
            removeSetLeft(m.chat, set_left_db)
            reply(lang.ok())
         }
         break
         case 'updategoodbye':
         case 'setgoodbye':
         case 'setleft':
         case 'setleave': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!text) return reply(`Contoh penggunaan: ${prefix + command} Goodbye @user\n\n- @user (Tag user)\n- @number (Nomor user)\n- @group (Nama group)\n- @bio (Bio user)\n- @members (Total member)\n- @day (Hari)\n- @date (Tanggal)\n- @time (Jam)\n- @desc (Deskripsi group)`)
            if (isSetLeft(m.chat, set_left_db)) {
               changeSetLeft(q, m.chat, set_left_db)
               reply(lang.ok() + `\n\n${prefix}cekleft -- _Check Goodbye`)
            } else {
               addSetLeft(q, m.chat, set_left_db)
               reply(lang.ok() + `\n\n${prefix}cekleft -- _Check Goodbye`)
            }
         }
         break
         case 'delsetgoodbye':
         case 'delsetleft':
         case 'delsetleave': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!text) return reply(`Contoh penggunaan: ${prefix + command} Goodbye @user\n\n- @user (Tag user)\n- @number (Nomor user)\n- @group (Nama group)\n- @bio (Bio user)\n- @members (Total member)\n- @day (Hari)\n- @date (Tanggal)\n- @time (Jam)\n- @desc (Deskripsi group)`)
            if (!isSetLeft(m.chat, set_left_db)) return reply(lang.NoSetLeft)
            removeSetLeft(m.chat, set_left_db)
            reply(lang.DelSetLeft)
         }
         break
         case 'antidelete': {
            if (!isCreator) return reply(lang.ownerOnly())
            if (args[0] === "on") {
               if (global.antidelete) return reply(lang.OnBef())
               global.antidelete = true
               reply(lang.OkOn('Anti delete'))
            } else if (args[0] === "off") {
               if (!global.antidelete) return reply(lang.OffYaBef())
               global.antidelete = false
               reply(lang.OffBef('Anti delete'))
            } else {
               reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(from, 'Mode Anti Delete', `© ${ownername}`, [{
                  buttonId: '.antidelete on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.antidelete off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
         }
         break
         case 'antionce':
         case 'antiviewonce': {
            if (!isCreator) return reply(lang.ownerOnly())
            if (args[0] === "on") {
               if (global.antiviewonce) return m.reply(`Udah aktif`)
               global.antiviewonce = true
               reply(lang.OkOn('Anti view once'))
            } else if (args[0] === "off") {
               if (!global.antiviewonce) return reply(lang.OffYaBef())
               global.antiviewonce = false
               reply(lang.OffBef('Anti view once'))
            } else {
              reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(from, 'Mode Anti ViewOnce', `© ${ownername}`, [{
                  buttonId: '.antionce on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.antionce off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
         }
         break
         case 'welcome':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (args[0] === "on") {
               if (isWelcome) return reply(lang.OnBef())
               _welcome.push(m.chat)
               fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
               reply(lang.OkOn('Welcome'))
            } else if (args[0] === "off") {
               if (!isWelcome) return reply(lang.OffYaBef())
               let anu = _welcome.indexOf(m.chat)
               _welcome.splice(anu, 1)
               fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
               reply(lang.OffBef('Welcome'))
            } else {
               reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(from, 'Mode Welcome Msg', `© ${ownername}`, [{
                  buttonId: '.welcome on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.welcome off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
            break
         case 'goodbye':
         case 'left':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (args[0] === "on") {
               if (isLeft) return reply(lang.OnBef())
               _left.push(m.chat)
               fs.writeFileSync('./database/left.json', JSON.stringify(_left, null, 2))
               reply(lang.OkOn('Goodbye'))
            } else if (args[0] === "off") {
               if (!isLeft) return reply(lang.OffYaBef())
               let anu = _left.indexOf(m.chat)
               _left.splice(anu, 1)
               fs.writeFileSync('./database/welcome.json', JSON.stringify(_left, null, 2))
               reply(lang.OffBef('Goodbye'))
            } else {
              reply(lang.KisahNabi(prefix, command, 'on/off', 'mode'))
               /*alpha.sendButMessage(from, 'Mode Goodbye Msg', `© ${ownername}`, [{
                  buttonId: '.left on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.left off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
            break
         case 'linkgroup':
         case 'linkgrup':
         case 'linkgc': {
            if (!m.isGroup) return reply(lang.groupOnly())
            let response = await alpha.groupInviteCode(m.chat)
            alpha.sendText(m.chat, `Link Group : *${groupMetadata.subject}*\nhttps://chat.whatsapp.com/${response}`, m, {
               detectLink: true
            })
         }
         break
         case 'd':
         case 'delete':
         case 'del': {
            if (!m.isGroup) {
               if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
               if (!m.quoted) throw false
               let {
                  chat,
                  fromMe,
                  id,
                  isBaileys
               } = m.quoted
               if (!isBaileys) return reply(lang.NoMsgBot())
               alpha.sendMessage(m.chat, {
                  delete: {
                     remoteJid: m.chat,
                     id: m.quoted.id,
                     participant: m.quoted.sender
                  }
               })
            } else {
               if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
               if (!isBotAdmins) return reply(lang.botNotAdmin())
               if (!m.quoted) throw false
               let {
                  chat,
                  fromMe,
                  id,
                  isBaileys
               } = m.quoted
               alpha.sendMessage(m.chat, {
                  delete: {
                     remoteJid: m.chat,
                     id: m.quoted.id,
                     participant: m.quoted.sender
                  }
               })
            }
         }
         break
         case 'unreg':
         case 'unregister': {
            if (!db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!text) return reply(`Example : ${prefix + command} 8kapqlPnapQp`)
            if (db.data.users[m.sender].serialNumber !== args[0]) return alpha.send1ButMes(m.chat, lang.Noseri(), `© ${ownername}`, `.ceksn`, 'Check SN', m)
            db.data.users[m.sender].registered = false
            reply(lang.NoseriOk())
         }
         break
         case 'ceksn':
         case 'serialnumber': {
            if (!db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            reply('Serial Number 👇\n\n' + db.data.users[m.sender].serialNumber)
         }
         break
         case 'daftar':
         case 'regis':
         case 'register': {
            if (db.data.users[m.sender].registered) return reply(lang.DoneReg())
            arg = args.join(' ')
            namax = arg.split('|')[0]
            //if(namax.length > 30) return reply(lang.NamaReg())
            umurx = arg.split('|')[1]
            if (m.isGroup) {
               await reply('🇮🇩 _Bot telah mengirimkan list pendaftaran ke private chat, silahkan selesaikan agar dapat menggunakan fitur bot_\n\n🇺🇸 _The bot has sent a registration list to the private chat, please complete it so you can use the bot feature_')
               if (!umurx) return sendListAge(alpha, m.sender, pushname, {
                  quoted: m
               })
            } else {
               if (!umurx) return sendListAge(alpha, m.sender, pushname, {
                  quoted: m
               })
               if (isNaN(umurx)) return reply(lang.UmurReg())
               if (parseInt(umurx) > 99) return reply(lang.UmurXReg())
               if (parseInt(umurx) < 5) return reply('Bocil kintil, Mending nyusu sana ama mak lu')
               genderx = arg.split('|')[2]
               if (!genderx) return sendListGender(alpha, m.sender, pushname, text, {
                  quoted: m
               })
               if (!['male', 'female', 'Male', 'Female', 'cewe', 'cowo', 'pria', 'wanita', 'Cowo', 'Cewe', 'Pria', 'Wanita'].includes(genderx)) return sendListGender(m.chat, pushname, text, {
                  quoted: m
               })
               langx = arg.split('|')[3]
               if (!langx) return sendListLang(alpha, m.sender, pushname, text, {
                  quoted: m
               })
               if (!['id', 'en', 'sp'].includes(langx)) return sendListLang(alpha, m.chat, pushname, text, {
                  quoted: m
               })
               const crypto = require('crypto');
               let user = db.data.users[m.sender]
               user.registered = true
               user.name = namax.slice(0, 1).toUpperCase() + namax.slice(1)
               user.age = umurx
               user.gender = genderx.slice(0, 1).toUpperCase() + genderx.slice(1)
               user.language = langx
               user.regTime = +new Date
               user.serialNumber = crypto.randomBytes(10).toString('hex');
               reply('🇮🇩 _Data kamu sedang di kumpulkan, tunggu sebentar..._\n\n🇺🇸 _Your data is being collected, wait a moment..._')
               await sleep(3000)
               if (langx == 'id') {
                  await sendButImage(alpha, m.chat, m.sender, [{
                     buttonId: '.menu',
                     buttonText: {
                        displayText: '✅ Command'
                     },
                     type: 1
                  }, {
                     buttonId: '.profile',
                     buttonText: {
                        displayText: 'Profile 👤'
                     },
                     type: 1
                  }], indonesia.RegReg(crypto.randomBytes(10).toString('hex'), tanggal(new Date()), namax.slice(0, 1).toUpperCase() + namax.slice(1), umurx, genderx.slice(0, 1).toUpperCase() + genderx.slice(1), m.sender.split('@')[0], prefix, prefix, Object.keys(global.db.data.users).length), `© ${ownername}`, [m.sender], {
                     quoted: m
                  })
               } else if (langx == 'en') {
                  await sendButImage(alpha, m.chat, m.sender, [{
                     buttonId: '.menu',
                     buttonText: {
                        displayText: '✅ Command'
                     },
                     type: 1
                  }, {
                     buttonId: '.profile',
                     buttonText: {
                        displayText: 'Profile 👤'
                     },
                     type: 1
                  }], english.RegReg(crypto.randomBytes(10).toString('hex'), tanggal_(new Date()), namax.slice(0, 1).toUpperCase() + namax.slice(1), umurx, genderx.slice(0, 1).toUpperCase() + genderx.slice(1), m.sender.split('@')[0], prefix, prefix, Object.keys(global.db.data.users).length), `© ${ownername}`, [m.sender], {
                     quoted: m
                  })
               } else sendButImage(alpha, m.chat, m.sender, [{
                  buttonId: '.menu',
                  buttonText: {
                     displayText: '✅ Dominio'
                  },
                  type: 1
               }, {
                  buttonId: '.profile',
                  buttonText: {
                     displayText: 'Perfil 👤'
                  },
                  type: 1
               }], spanyol.RegReg(crypto.randomBytes(10).toString('hex'), tanggal__(new Date()), namax.slice(0, 1).toUpperCase() + namax.slice(1), umurx, genderx.slice(0, 1).toUpperCase() + genderx.slice(1), m.sender.split('@')[0], prefix, prefix, Object.keys(global.db.data.users).length), `© ${ownername}`, [m.sender], {
                  quoted: m
               })

            }
         }
         break
         case 'kzowjsijzpappaka': {
            if (db.data.users[m.sender].registered) return reply(lang.DoneReg())
            arg = args.join(' ')
            namax = arg.split('|')[0]
            if (namax.length > 30) return reply(lang.NamaReg())
            umurx = arg.split('|')[1]
            if (!umurx) return sendListAge(alpha, m.sender, pushname, {
               quoted: m
            })
            if (isNaN(umurx)) return reply(lang.UmurReg())
            if (parseInt(umurx) > 99) return reply(lang.UmurXReg())
            if (parseInt(umurx) < 5) return reply('Bocil kintil, Mending nyusu sana ama mak lu')
            genderx = arg.split('|')[2]
            if (!genderx) return sendListGender(alpha, m.sender, pushname, text, {
               quoted: m
            })
            if (!['male', 'female', 'Male', 'Female', 'cewe', 'cowo', 'pria', 'wanita', 'Cowo', 'Cewe', 'Pria', 'Wanita'].includes(genderx)) return sendListGender(alpha, m.chat, pushname, text, {
               quoted: m
            })
            langx = arg.split('|')[3]
            if (!langx) return sendListLang(alpha, m.sender, pushname, text, {
               quoted: m
            })
            if (!['id', 'en', 'sp'].includes(langx)) return sendListLang(alpha, m.chat, pushname, text, {
               quoted: m
            })
            const crypto = require('crypto');
            let user = db.data.users[m.sender]
            user.registered = true
            user.name = namax.slice(0, 1).toUpperCase() + namax.slice(1)
            user.age = umurx
            user.gender = genderx.slice(0, 1).toUpperCase() + genderx.slice(1)
            user.language = langx
            user.regTime = +new Date
            user.serialNumber = crypto.randomBytes(10).toString('hex');
            reply('🇮🇩 _Data kamu sedang di kumpulkan, tunggu sebentar..._\n\n🇺🇸 _Your data is being collected, wait a moment..._')
            await sleep(3000)
            if (langx == 'id') {
               await sendButImage(alpha, m.chat, m.sender, [{
                  buttonId: '.menu',
                  buttonText: {
                     displayText: '✅ Command'
                  },
                  type: 1
               }, {
                  buttonId: '.profile',
                  buttonText: {
                     displayText: 'Profile 👤'
                  },
                  type: 1
               }], indonesia.RegReg(crypto.randomBytes(10).toString('hex'), tanggal(new Date()), namax.slice(0, 1).toUpperCase() + namax.slice(1), umurx, genderx.slice(0, 1).toUpperCase() + genderx.slice(1), m.sender.split('@')[0], prefix, prefix, Object.keys(global.db.data.users).length), `© ${ownername}`, [m.sender], {
                  quoted: m
               })
            } else if (langx == 'en') {
               await sendButImage(alpha, m.chat, m.sender, [{
                  buttonId: '.menu',
                  buttonText: {
                     displayText: '✅ Command'
                  },
                  type: 1
               }, {
                  buttonId: '.profile',
                  buttonText: {
                     displayText: 'Profile 👤'
                  },
                  type: 1
               }], english.RegReg(crypto.randomBytes(10).toString('hex'), tanggal_(new Date()), namax.slice(0, 1).toUpperCase() + namax.slice(1), umurx, genderx.slice(0, 1).toUpperCase() + genderx.slice(1), m.sender.split('@')[0], prefix, prefix, Object.keys(global.db.data.users).length), `© ${ownername}`, [m.sender], {
                  quoted: m
               })
            } else sendButImage(alpha, m.chat, m.sender, [{
               buttonId: '.menu',
               buttonText: {
                  displayText: '✅ Dominio'
               },
               type: 1
            }, {
               buttonId: '.profile',
               buttonText: {
                  displayText: 'Perfil 👤'
               },
               type: 1
            }], spanyol.RegReg(crypto.randomBytes(10).toString('hex'), tanggal__(new Date()), namax.slice(0, 1).toUpperCase() + namax.slice(1), umurx, genderx.slice(0, 1).toUpperCase() + genderx.slice(1), m.sender.split('@')[0], prefix, prefix, Object.keys(global.db.data.users).length), `© ${ownername}`, [m.sender], {
               quoted: m
            })

         }
         break
         case 'procfile':
         case 'profile': {
            try {
               ppnu = await alpha.profilePictureUrl(m.sender, 'image')
            } catch {
               ppnu = 'https://telegra.ph/file/6880771a42bad09dd6087.jpg'
            }

            function msToDate(ms) {
               temp = ms
               days = Math.floor(ms / (24 * 60 * 60 * 1000));
               daysms = ms % (24 * 60 * 60 * 1000);
               hours = Math.floor((daysms) / (60 * 60 * 1000));
               hoursms = ms % (60 * 60 * 1000);
               minutes = Math.floor((hoursms) / (60 * 1000));
               minutesms = ms % (60 * 1000);
               sec = Math.floor((minutesms) / (1000));
               return days + " Days " + hours + " Hours " + minutes + " Minutes";
            }

            let about = (await alpha.fetchStatus(m.sender).catch(console.error) || {}).status || ''
            let {
               name,
               pasangan,
               limit,
               exp,
               bank,
               lastclaim,
               premiumDate,
               premium,
               registered,
               regTime,
               age,
               level,
               role
            } = global.db.data.users[m.sender]
            let now = new Date() * 1
            let {
               min,
               xp,
               max
            } = levelling.xpRange(level, global.multiplier)
            let username = pushname
            let math = max - xp
            if (db.data.users[m.sender].language == 'id') {
               alpha.sendMessage(m.chat, {
                  image: {
                     url: ppnu
                  },
                  caption: indonesia.profile(username, m, about, pasangan, PhoneNumber, exp, min, xp, math, prefix, level, role, (isPremium? limitawal.premium : db.data.users[m.sender].limit), registered, tanggal, regTime, isPremium, msToDate, premiumDate, now, lastclaim),
                  mentions: [m.sender]
               }, {
                  quoted: m
               })
            } else if (db.data.users[m.sender].language == 'en') {
               alpha.sendMessage(m.chat, {
                  image: {
                     url: ppnu
                  },
                  caption: english.profile(username, m, about, pasangan, PhoneNumber, exp, min, xp, math, prefix, level, role, isPremium? limitawal.premium : db.data.users[m.sender].limit, registered, tanggal_, regTime, isPremium, msToDate, premiumDate, now, lastclaim),
                  mentions: [m.sender]
               }, {
                  quoted: m
               })
            } else alpha.sendMessage(m.chat, {
               image: {
                  url: ppnu
               },
               caption: spanyol.profile(username, m, about, pasangan, PhoneNumber, exp, min, xp, math, prefix, level, role, isPremium? limitawal.premium : db.data.users[m.sender].limit, registered, tanggal__, regTime, isPremium, msToDate, premiumDate, now, lastclaim),
               mentions: [m.sender]
            }, {
               quoted: m
            })
         }
         break
         case 'setthumb':
         case 'setthumbnail': {
            if (!isCreator && !m.key.fromMe) return reply(lang.ownerOnly())
            if (!/image/.test(mime)) return reply(lang.NoToImg(prefix, command).replace('sticker', 'image'))
            if ((quoted.msg || quoted).fileLength.low > 100000) return reply('Maximum file size 100kb!')
            let delb = await alpha.downloadAndSaveMediaMessage(quoted)
            await fs.writeFileSync(thumbnail, delb)
            reply(lang.ok())
         }
         break
         case 'setdonasi':
         case 'setdonate': {
            if (!isCreator && !m.key.fromMe) return reply(lang.ownerOnly())
            if (!/image/.test(mime)) return reply(lang.NoToImg(prefix, command).replace('sticker', 'image'))
            if ((quoted.msg || quoted).fileLength.low > 200000) return reply('Maximum file size 200kb!')
            let delb = await alpha.downloadAndSaveMediaMessage(quoted)
            await fs.writeFileSync(donasi, delb)
            reply(lang.ok())
         }
         break
         /*case 'toimage':
         case 'toimg': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!quoted) return reply(lang.NoToImg(prefix, command))
            if (!/webp/.test(mime)) return reply(lang.NoToImg(prefix, command))
            reply(lang.wait())
            let media = await alpha.downloadAndSaveMediaMessage(quoted)
            let ran = await getRandom('.png')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
               fs.unlinkSync(media)
               if (err) return reply(lang.ToimgErr())
               let buffer = fs.readFileSync(ran)
               alpha.sendMessage(m.chat, {
                  image: buffer
               }, {
                  quoted: m
               })
               fs.unlinkSync(ran)
            })
            db.data.users[m.sender].limit = addLimit
         }
         break*/
         case 'pinterest': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'Bot whatsapp'))
            reply(lang.wait())
            anu = await pinterest(text)
            result = anu[Math.floor(Math.random(), anu.length)]
            let gam = await getBuffer(result)
            var but = [{
               "urlButton": {
                  "displayText": "Media Url",
                  "url": `${result}`
               }
            }]

            await alpha.sendMessage(m.chat, {
                  image: gam,
                  caption: text
               }, {
                  quoted: m
               })
               .catch((err) => {
                  reply(lang.serverErr)
               })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'wallpaper': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'Bot whatsapp'))
            reply(lang.wait())
            wallpaper(text).then(async anu => {
                  result = anu[Math.floor(Math.random(), anu.length)]
                  let gam = await getBuffer(result.image[0])
                  await alpha.sendMessage(m.chat, {
                     image: gam,
                     caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`
                  }, {
                     quoted: m
                  })
               })
               .catch((err) => {
                  reply(lang.serverErr)
               })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'wikimedia': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'Bot whatsapp'))
            reply(lang.wait())
            wikimedia(text).then(async anu => {
                  result = anu[Math.floor(Math.random(), anu.length)]
                  let gam = await getBuffer(result.image[0])
                  await alpha.sendMessage(m.chat, {
                     image: gam,
                     caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`
                  }, {
                     quoted: m
                  })
               })
               .catch((err) => {
                  reply(lang.serverErr)
               })
            db.data.users[m.sender].limit = addLimit
         }
         break

         case 'quotesanime':
         case 'quoteanime': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            reply(lang.wait())
            quotesAnime().then(async anu => {
               gam = await getBuffer(picak + 'quotes anime')
               result = anu[Math.floor(Math.random(), anu.length)]
               await sendButLoc(alpha, m.chat, `_${result.quotes}_\n\nBy *'${result.karakter}'*, ${result.anime}\n\n*_- ${result.up_at}_*`, '©' + ownername, gam, [{
                  buttonId: `.quotesanime`,
                  buttonText: {
                     displayText: 'Next Quotes'
                  },
                  type: 1
               }], {
                  userJid: m.chat,
                  quoted: m
               })
            })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'ping': {
            const used = process.memoryUsage()
            const cpus = os.cpus().map(cpu => {
               cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
               return cpu
            })
            const cpu = cpus.reduce((last, cpu, _, {
               length
            }) => {
               last.total += cpu.total
               last.speed += cpu.speed / length
               last.times.user += cpu.times.user
               last.times.nice += cpu.times.nice
               last.times.sys += cpu.times.sys
               last.times.idle += cpu.times.idle
               last.times.irq += cpu.times.irq
               return last
            }, {
               speed: 0,
               total: 0,
               times: {
                  user: 0,
                  nice: 0,
                  sys: 0,
                  idle: 0,
                  irq: 0
               }
            })
            let timestamp = speed()
            let latensi = speed() - timestamp
            let neww = performance.now()
            let oldd = performance.now()
            let respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
            reply(respon)
         }
         break
         case 'tes':
         case 'runtime':
            reply(`Runtime : ${runtime(process.uptime())}`)
            break
         case 'public': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            alpha.public = true
            reply(lang.BotPublic())
         }
         break
         case 'self': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            alpha.public = false
            reply(lang.BotSelf())
         }
         break
         case 'owner':
         case 'creator': {
            sendContact(alpha, m.chat, global.owner, m)
         }
         break
         case 'rules': {
            let gam = await getBuffer(picak + 'Terms and Conditions')
            var but = [{
               "urlButton": {
                  "displayText": "Website",
                  "url": `${myweb}`
               }
            }]
            await alpha.sendMessage(m.chat, {
               image: gam,
               caption: lang.rules(prefix)
            }, {
               quoted: m
            })
         }
         break
         case 'setcaptionpay': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!text) return reply(`Contoh penggunaan: ${prefix + command} Payment`)
            db.data.chats[m.chat].captionPay = text
            reply(lang.ok())
         }
         break
         case 'donasi':
         case 'donate': {
            await alpha.sendMessage(m.chat, {
               image: qris,
               caption: lang.tos(ownernomer)
            }, {
               quoted: m
            })
         }
         break

         //Random Anime
         case 'cry':
         case 'kill':
         case 'hug':
         case 'pat':
         case 'lick':
         case 'kiss':
         case 'bite':
         case 'yeet':
         case 'neko':
         case 'bully':
         case 'bonk':
         case 'wink':
         case 'poke':
         case 'nom':
         case 'slap':
         case 'smile':
         case 'wave':
         case 'awoo':
         case 'blush':
         case 'smug':
         case 'glomp':
         case 'happy':
         case 'dance':
         case 'cringe':
         case 'highfive':
         case 'shinobu':
         case 'megumin':
         case 'handhold': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            reply(lang.wait())
            axios.get(`https://api.waifu.pics/sfw/${command}`)
               .then(({
                  data
               }) => {
                  alpha.sendMediaAsSticker(m.chat, data.url, m, {
                     packname: global.packname,
                     author: global.author
                  })


               })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'waifu':
         case 'loli': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            reply(lang.wait())
            axios.get(`https://api.waifu.pics/sfw/waifu`)
               .then(({
                  data
               }) => {
                  alpha.sendImage(m.chat, data.url, lang.ok(), m)
               })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'sgif':
         case 'stikerin':
         case 's':
         case 'sticker':
         case 'stiker': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!quoted) return reply(lang.NoToStik(prefix, command))
            if (/image/.test(mime)) {
               let media = await quoted.download()
               let encmedia = await alpha.sendImageAsSticker(m.chat, media, m, {
                  packname: global.packname,
                  author: global.author
               })
               await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
               if ((quoted.msg || quoted).seconds > 11) return reply(lang.NoToStik(prefix, command))
               let media = await quoted.download()
               let encmedia = await alpha.sendVideoAsSticker(m.chat, media, m, {
                  packname: global.packname,
                  author: global.author
               })
               await fs.unlinkSync(encmedia)
            } else {
               reply(lang.NoToStik(prefix, command))
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'setppbot':
         case 'setpp': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (!quoted) return reply(lang.NoPpBot(prefix, command))
            if (!/image/.test(mime)) return reply(lang.NoPpBot(prefix, command))
            if (/webp/.test(mime)) return reply(lang.NoPpBot(prefix, command))
            let media = await alpha.downloadAndSaveMediaMessage(quoted)
            await alpha.updateProfilePicture(alpha.user.id, {
               url: media
            }).catch((err) => fs.unlinkSync(media))
            reply(lang.ok())
         }
         break

         case 'setppgroup':
         case 'setppgrup':
         case 'setppgc': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            if (!quoted) return reply(lang.NoPpBot(prefix, command))
            if (!/image/.test(mime)) return reply(lang.NoPpBot(prefix, command))
            if (/webp/.test(mime)) return reply(lang.NoPpBot(prefix, command))
            let media = await alpha.downloadAndSaveMediaMessage(quoted)
            await alpha.updateProfilePicture(m.chat, {
               url: media
            }).catch((err) => fs.unlinkSync(media))
            reply(lang.ok())
         }
         break
         case 'toaud':
         case 'toaudio': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(lang.ToAud(prefix, command))
            if (!quoted) return reply(lang.ToAud(prefix, command))
            if ((quoted.msg || quoted).seconds > 60) return reply('Maximum 60 seconds!')
            reply(lang.wait())
            let media = await quoted.download()
            let audio = await toAudio(media, 'mp4')
            alpha.sendMessage(m.chat, {
               audio: audio,
               mimetype: 'audio/mpeg'
            }, {
               quoted: m
            })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'tomp3': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (/document/.test(mime)) return reply(lang.ToMp3(prefix, command))
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(lang.ToMp3(prefix, command))
            if (!quoted) return reply(lang.ToMp3(prefix, command))
            if ((quoted.msg || quoted).seconds > 60) return reply('Maximum 60 seconds!')
            if ((quoted.msg || quoted).seconds = 0) return reply('Maximum 60 seconds!')
            reply(lang.wait())
            let media = await quoted.download()
            let audio = await toAudio(media, 'mp4')
            alpha.sendMessage(m.chat, {
               audio: audio,
               mimetype: 'audio/mpeg'
            }, {
               quoted: m
            })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'tovn':
         case 'toptt': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(lang.ToVn())
            if (!quoted) return reply(lang.ToVn())
            if ((quoted.msg || quoted).seconds > 60) return reply('Maximum 60 seconds!')
            reply(lang.wait())
            let media = await quoted.download()
            let audio = await toPTT(media, 'mp4')
            alpha.sendMessage(m.chat, {
               audio: audio,
               mimetype: 'audio/mpeg',
               ptt: true
            }, {
               quoted: m
            })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'infochat':
         case 'sider': {
            if (!m.quoted) return reply(lang.LockCmd())
            let msg = await m.getQuotedObj()
            if (!m.quoted.isBaileys) return reply(lang.NoMsgBot())
            let teks = ''
            for (let i of msg.userReceipt) {
               let read = i.readTimestamp
               let unread = i.receiptTimestamp
               let waktu = read ? read : unread
               teks += `⭔ @${i.userJid.split('@')[0]}\n`
               teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
            }
            alpha.sendTextWithMentions(m.chat, teks, m)
         }
         break
         case 'q':
         case 'quoted': {
            if (!m.quoted) return reply(lang.LockCmd())
            let wokwol = await alpha.serializeM(await m.getQuotedObj())
            if (!wokwol.quoted) return reply(lang.NoQouted())
            await wokwol.quoted.copyNForward(m.chat, true)
         }
         break
         case 'listchat':
         case 'listpc': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
            let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
            for (let i of anu) {
               let nama = store.messages[i].array[0].pushName
               teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
            }
            alpha.sendTextWithMentions(m.chat, teks, m)
         }
         break
         case 'liston':
         case 'listonline': {
            if (!isGroupAdmins && !isGroupOwner) return reply(lang.adminOnly())
            let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
            let online = [...Object.keys(store.presences[id]), botNumber]
            alpha.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, {
               mentions: online
            })
         }
         break
         case 'olistgc': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            let getGroups = await alpha.groupFetchAllParticipating()
            let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
            let anu = groups.map(v => v.id)
            let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
            for (let i of anu) {
               let metadata = await alpha.groupMetadata(i)
               teks += `🐥 *Nama :* ${metadata.subject}\n👤 *Owner :* ${metadata.owner ? "@"+ metadata.owner.split('@')[0] : "-" }\n♨️ *ID :* ${metadata.id}\n🗓️ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n👥 *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
            }
            alpha.sendTextWithMentions(m.chat, teks, m)
         }
         break
         case 'listgroup':
         case 'listgc': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
            let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
            for (let i of anu) {
               let metadata = await alpha.groupMetadata(i)
               teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : '-'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
            }
            alpha.sendTextWithMentions(m.chat, teks, m)
         }
         break
         case 'setname':
         case 'setsubject': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (!text) return reply(lang.SetGcName(prefix, command))
            await alpha.groupUpdateSubject(m.chat, text).then((res) => reply(lang.ok())).catch((err) => reply(jsonformat(err)))
         }
         break
         case 'setdesc':
         case 'setdesk':
         case 'setdeskripsi': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (!text) return reply(lang.SetGcName(prefix, command))
            alpha.groupUpdateDescription(m.chat, `${args.join(" ")}`)
            reply(lang.ok())
         }
         break

         case 'join': {
            if (!isCreator) return reply(lang.ownerOnly())
            if (!text) return reply(lang.JoinGc())
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(lang.erorLink())
            reply(lang.wait())
            let result = args[0].split('https://chat.whatsapp.com/')[1]
            await alpha.groupAcceptInvite(result).then((res) => reply(lang.ok())).catch((err) => reply(lang.err()))
         }
         break
         case 'tagall':
         case 'infoall':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            let tekss = `══✪〘 *👥 Mention All* 〙✪══\n\n➲ *Message : ${q ? q : 'Nothing'}*\n\n`
            for (let mem of participants) {
               tekss += `🏅 @${mem.id.split('@')[0]}\n`
            }
            tekss += `\n⋙ *${botname}* ⋘`
            alpha.sendMessage(from, {
               text: tekss,
               mentions: participants.map(a => a.id)
            }, {
               quoted: m
            })
            break
         case 'h':
         case 'hidetag':
            
            alpha.sendMessage(from, {
               text: q ? q : '',
               mentions: participants.map(a => a.id)
            }, {
               quoted: m
            })
            break
            case 'hidetaggc':
    if (!m.isGroup) return reply(lang.groupOnly());
    
    // Cek apakah pengguna adalah admin grup
    if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly());

    // Ambil argumen yang berisi ID grup dan pesan
    const args = q.split('|'); // Memisahkan berdasarkan pemisah '|'

    const groupId = args[0]?.trim(); // ID grup
    const messageText = args[1]?.trim(); // Teks pesan

    if (!groupId) {
        return reply('Harap masukkan ID grup setelah perintah, contoh: !hidetag 1234567890@g.us | Teks yang ingin dikirim');
    }
    
    if (!messageText) {
        return reply('Harap masukkan pesan yang ingin dikirim setelah ID grup.');
    }

    try {
        // Mengirim pesan dengan mention anggota grup tanpa mengirim pesan yang di-reply
        await alpha.sendMessage(groupId, {
            text: messageText,
            mentions: participants.map(a => a.id)
        });
    } catch (error) {
        console.error("Error sending message to group:", error);
        reply("Terjadi kesalahan saat mengirim pesan ke grup.");
    }
    break;


         case 'banuser':
         case 'banned': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (!m.quoted && !text) return reply(lang.NoTagBan(prefix, command))
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            if (typeof db.data.users[users] == 'undefined') reply('Pengguna tidak ada didalam data base')
            let banUser = db.data.users[users]
            banUser.banned = true
            banUser.BannedReason = text.split('|')[1] ? text.split('|')[1] : "I don't know"
            reply(lang.ok())
         }
         break
         case 'unbanuser':
         case 'unban':
         case 'unbanned': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (!m.quoted && !text) return reply(lang.NoTagBan(prefix, command))
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            let banUser = db.data.users[users]
            banUser.banned = false
            reply(lang.ok())
         }
         break
         case 'block': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (!m.quoted && !text) return reply(lang.NoTagBan(prefix, command))
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            await alpha.updateBlockStatus(users, 'block').then((res) => reply(lang.ok())).catch((err) => reply(lang.err()))
         }
         break
         case 'unblock': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (!m.quoted && !text) return reply(lang.NoTagBan(prefix, command))
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            await alpha.updateBlockStatus(users, 'unblock').then((res) => reply(lang.ok())).catch((err) => reply(lang.err()))
         }
         break
         case 'kick': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            if (!m.quoted && !text) return reply(lang.MauKick())
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            await alpha.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(lang.ok())).catch((err) => reply(lang.err()))
         }
         break
         case 'add': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            if (!m.quoted && !text) return reply(lang.MauAdd())
            let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            await alpha.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(lang.ok())).catch((err) => reply(lang.err()))
         }
         break
         case 'promote': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            if (!m.quoted && !text) return reply(lang.NakPm())
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            await alpha.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(lang.ok())).catch((err) => reply(lang.err()))
         }
         break
         case 'demote': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            if (!m.quoted && !text) return reply(lang.NakDm())
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            await alpha.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(lang.ok())).catch((err) => reply(lang.err()))
         }
         break
         case 'revoke':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            let link = await alpha.groupRevokeInvite(from)
            await reply(lang.ok() + `\n\n*New Link for ${groupName}* :\n https://chat.whatsapp.com/${link}`)
            break
         case 'out':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            reply('Bye 👋').then(async res => await alpha.groupLeave(m.chat))
            break
         case 'group':
         case 'grup':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            if (args[0] === 'open') {
               await alpha.groupSettingUpdate(from, 'not_announcement')
               reply(lang.ok())
            } else if (args[0] === 'close') {
               await alpha.groupSettingUpdate(from, 'announcement')
               reply(lang.ok())
            } else {
              reply(lang.KisahNabi(prefix, command, 'open/close', 'mode'))
             /*alpha.sendButMessage(from, 'GROUP SETTING', `© ${ownername}`, [{
                  buttonId: '.group open',
                  buttonText: {
                     displayText: 'Open'
                  },
                  type: 1
               }, {
                  buttonId: '.group close',
                  buttonText: {
                     displayText: 'Close'
                  },
                  type: 1
               }], {
                  quoted: m
               })*/
            }
            break
         case 'afk': {
            if (!m.isGroup) return reply(lang.groupOnly())
            let user = db.data.users[m.sender]
            user.afkTime = +new Date
            user.afkReason = text
            reply(lang.TbAfk(pushname, text))
         }
         break
         case 'family100': {
            const {
               family100
            } = require('@bochilteam/scraper')
            if ('family100' + m.chat in _family100) {
               reply(lang.Family())
               throw false
            }
            let random = await family100()
            let hasil = `${lang.TbFamily(random.soal, random.jawaban.length, random.jawaban.find(v => v.includes(' ')) ? '(Beberapa jawaban memiliki spasi)' : '')}`.trim()
            console.log(random.jawaban)
            _family100['family100' + m.chat] = {
               id: 'family100' + m.chat,
               pesan: await alpha.sendText(m.chat, hasil, m),
               ...random,
               terjawab: Array.from(random.jawaban, () => false),
               hadiah: 6,
            }
         }
         break

         case 'kuismath':
         case 'math': {
            if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return reply(lang.Family())
            let {
               genMath,
               modes
            } = require('./lib/math')
            if (!text) return reply(lang.TbMath(Object.keys(modes).join(' | '), prefix, command))
            if(!["noob","easy","medium","hard","extreme","impossible","impossible2"].includes(text)) return reply(lang.TbMath(Object.keys(modes).join(' | '), prefix, command))
            let result = await genMath(text.toLowerCase())
            alpha.sendText(m.chat, lang.TbMath_(result.soal.toLowerCase(), (result.waktu / 1000).toFixed(2)), m).then(() => {
               console.log("Jawaban: " + result.jawaban)
               kuismath[m.sender.split('@')[0]] = [result.jawaban, result.hadiah]
            })
            await sleep(result.waktu)
            if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
               reply(lang.TbGambar_(result.jawaban))
               delete kuismath[m.sender.split('@')[0]]
            }
         }
         break
         case 'tohidetag':
    try {
        // Validasi apakah ada pesan yang di-reply
        if (!quoted) {
            return alpha.sendMessage(m.chat, { text: "Harap balas stiker animasi untuk menggunakan perintah ini!" }, { quoted: m });
        }

        // Periksa apakah pesan adalah stiker animasi
  

        // Mendapatkan ID grup dari argumen
        const groupId = args[0];
        if (!groupId) {
            return alpha.sendMessage(m.chat, { text: "Harap masukkan ID grup." }, { quoted: m });
        }

        // Mendapatkan metadata grup
        const groupMetadata = await alpha.groupMetadata(groupId);
        const members = groupMetadata.participants.map(p => p.id);

        // Mengirim ulang stiker animasi ke grup dengan opsi hidetag
        await alpha.sendMessage(groupId, {
            sticker: { url: quoted.message.stickerMessage.fileSha256.toString('base64') },
            mentions: members, // Mention semua anggota grup secara tersembunyi
        });

    } catch (err) {
        console.error("Error in 'tohidetag':", err);
        alpha.sendMessage(m.chat, { text: "Terjadi kesalahan saat memproses: " + err.message }, { quoted: m });
    }
    break;


         case 'setmenu': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            const listhades = ['templateLocation', 'templateImage', 'list', 'document', 'katalog', 'katalog2']
            if (!listhades.includes(text)) {
              reply("Not available for now")
               /*const sections = [{
                  "title": "Set Menu-1",
                  "rows": [{
                     "title": "Menu Katalog",
                     "rowId": ".setmenu katalog"
                  }]
               }, {
                  "title": "Set Menu-2",
                  "rows": [{
                     "title": "Menu Katalog Diskon",
                     "rowId": ".setmenu katalog2"
                  }]
               }, {
                  "title": "Set Menu-3",
                  "rows": [{
                     "title": "Menu List Message",
                     "rowId": ".setmenu list"
                  }]
               }, {
                  "title": "Set Menu-4",
                  "rows": [{
                     "title": "Menu Document",
                     "rowId": ".setmenu document"
                  }]
               } , {
                  "title": "Set Menu-5",
                  "rows": [{
                     "title": "Template Location",
                     "rowId": ".setmenu templateLocation"
                  }]
               } , {
                  "title": "Set Menu-6",
                  "rows": [{
                     "title": "Template Image",
                     "rowId": ".setmenu templateImage"
                  }]
               }]

               const listMessage = {
                  text: lang.SetAh(),
                  footer: `© ${ownername}`,
                  title: salam + ' ' + pushname,
                  buttonText: "Select Here",
                  sections
               }

               alpha.sendMessage(m.chat, listMessage, {
                  quoted: m
               })*/
            } else {
               db.data.settings[botNumber].typemenu = text
               reply(lang.ok())
            }
         }
         break
case 'setmenu2': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            const listhades = ['templateLocation', 'templateImage', 'image', 'location']
            if (!listhades.includes(text)) {
              reply("Not available for now")
              /* const sections = [{
                  "title": "Set Menu-1",
                  "rows": [{
                     "title": "Menu Button Location",
                     "rowId": ".setmenu2 location"
                  }]
               }, {
                  "title": "Set Menu-2",
                  "rows": [{
                     "title": "Menu Button Image",
                     "rowId": ".setmenu2 image"
                  }]
               }, {
                  "title": "Set Menu-3",
                  "rows": [{
                     "title": "Menu Template Location",
                     "rowId": ".setmenu2 templateLocation"
                  }]
               }, {
                  "title": "Set Menu-4",
                  "rows": [{
                     "title": "Menu Template Image",
                     "rowId": ".setmenu2 templateImage"
                  }]
               }]

               const listMessage = {
                  text: lang.SetAh(),
                  footer: `© ${ownername}`,
                  title: salam + ' ' + pushname,
                  buttonText: "Select Here",
                  sections
               }

               alpha.sendMessage(m.chat, listMessage, {
                  quoted: m
               })*/
            } else {
               db.data.settings[botNumber].typemenu2 = text
               reply(lang.ok())
            }
         }
         break
         case 'help':
         case 'panel':
         case 'menu': {
            /*try {
               hit_total = await fetchJson('https://api.countapi.xyz/hit/api-alphabot.herokuapp.com/visits')
            } catch {
               hit_total = {
                  value: "-"
               }
            }
            hitall = `${hit_total.value == undefined ? '-' : hit_total.value}`
            *///let bio = (await alpha.fetchStatus(m.sender).catch(console.error) || {}).status || '-'
            let {
               exp,
               limit,
               level,
               money,
               role
            } = global.db.data.users[m.sender]
            let goblock = await alpha.fetchBlocklist()
            let {
               min,
               xp,
               max
            } = levelling.xpRange(level, global.multiplier)
            let dnew = new Date(new Date + 3600000)
            let user = db.data.users[m.sender]
            let week = dnew.toLocaleDateString('en', {
               weekday: 'long'
            })
            let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(dnew / 84600000) % 5]
            let date = dnew.toLocaleDateString('en', {
               day: 'numeric',
               month: 'long',
               year: 'numeric'
            })
            let dateIslamic = Intl.DateTimeFormat('en' + '-TN-u-ca-islamic', {
               day: 'numeric',
               month: 'long',
               year: 'numeric'
            }).format(dnew)

            let ownernya = ownernomer
            var ini_anu = `Hi ${user.name}

╭─❒ 「 Bot Info 」 
├ Creator :  @${ownernya.split('@')[0]}
├ Sponsored :  @${ini_mark.split('@')[0]}
├ Prefix :   ${prefix}
├ Total hit : "-"
├ Speed : ${latensii.toFixed(4)} Second
├ Memory Used : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
├ Hostname : ${os.hostname()}
├ Platform : ${os.platform()}
├ Private chat : ${(Object.keys(db.data.chats).filter(v => v.endsWith('@s.whatsapp.net')).map(v => v).length)}
├ Group chat : ${(Object.keys(db.data.chats).filter(v => v.endsWith('@g.us')).map(v => v).length)}
├ Total chats :  ${(Object.keys(db.data.chats).filter(v => v.endsWith('@s.whatsapp.net')).map(v => v).length) + (Object.keys(db.data.chats).filter(v => v.endsWith('@g.us')).map(v => v).length)} 
├ User In Database : ${Object.keys(global.db.data.users).length} Users
├ User Registered : ${(Object.values(global.db.data.users).filter(user => user.registered == true).length)} Users
├ User Banned : ${(Object.values(global.db.data.users).filter(user => user.banned == true).length)} Users
├ User Blockir : ${goblock == undefined ? '0' : goblock.length} Users
╰❒ Runtime : ${runtime(process.uptime())}

╭─❒ 「 Date Info 」 
├ Masehi : ${week}, ${date}
├ Hijriah : ${dateIslamic}
╰❒

╭─❒ 「 User Info 」 
├ Register: ${user.registered ? `✅\n├ Name : ${user.name}\n├ Age : ${user.age} years\n├ Gender : ${user.gender}\n├ Registered on : ${tanggal(user.regTime)}` : '❌'}
├ Nomor : @${m.sender.split('@')[0]}
├ Limit : ${isPremium ? limitawal.premium : limitawal.free} limit
├ XP : ${exp}
├ Premium : ${isPremium ? '✅' : '❌'}
├ Me : ${m.key.fromMe ? 'True' : 'False'}
╰❒ Owner : ${isCreator ? 'True' : `False`}

${lang.listMenu(prefix)}`
            const buttojns = [{
                  buttonId: '.command',
                  buttonText: {
                     displayText: '📖 List Menu'
                  },
                  type: 1
               },
               {
                  buttonId: '.owner',
                  buttonText: {
                     displayText: '🙍‍♂️ Owner'
                  },
                  type: 1
               },
               {
                  buttonId: '.donasi',
                  buttonText: {
                     displayText: '💰 Donation'
                  },
                  type: 1
               }
            ]
            await sendButImage(alpha, m.chat, sender, buttonDefault4, ini_anu,`© ${ownername}`, [ownernya, ini_mark, m.sender], {
                  quoted: m
               })
               
              sendListMenu(alpha, m.chat, ``, `All Menu`,`© ${ownername}`,{})
            /*if (db.data.settings[botNumber].typemenu == 'document') {
               sendButDoC(alpha, m.chat, ini_anu, '© ' + ownername, botname, ownername, `WhatsApp Bot Multi Device`, time, pp_bot, pp_bot, buttojns, [ownernya, ini_mark, m.sender], {
                  quoted: ftroli
               })
            }
            if (db.data.settings[botNumber].typemenu == 'templateLocation') {
               await Alpha.send5ButLoc(alpha, reSize, m.chat, ini_anu, '©' + ownername, pp_bot, buttonDefault, [ownernya, ini_mark, m.sender])
            }
            if (db.data.settings[botNumber].typemenu == 'templateImage') {
               await Alpha.send5ButImg(alpha, m.chat, ini_anu, '©' + ownername, pp_bot, buttonDefault, [ownernya, ini_mark, m.sender])
            }
            if (db.data.settings[botNumber].typemenu == 'templateTenor') {
               Alpha.send5ButGif(m.chat, lang.menunya(salam, pushname, botname), `© ${ownername}`, pp_bot, thumbGif, [{
                  "urlButton": {
                     "displayText": "YouTube Creator",
                     "url": `${youtube}`
                  }
               }, {
                  "urlButton": {
                     "displayText": "Rest Api's",
                     "url": `${myweb}`
                  }
               }, {
                  "quickReplyButton": {
                     "displayText": "Donasi",
                     "id": '.donate'
                  }
               }, {
                  "quickReplyButton": {
                     "displayText": "Owner",
                     "id": '.owner'
                  }
               }, {
                  "quickReplyButton": {
                     "displayText": "List Command",
                     "id": '.command'
                  }
               }], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu == 'katalog') {
               sendKatalog(alpha, m.chat, "ALL MENU BOT", lang.listMenu(time, salam, pushname, prefix), pp_bot, {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu == 'katalog2') {
               sendKatalog2(alpha, m.chat, "ALL MENU BOT", lang.listMenu(time, salam, pushname, prefix), pp_bot, {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu == 'list') {
               sendListMenu(alpha, m.chat, `╭─⬣「 _*INFO USER*_ 」⬣\n│  *Name* : ${pushname}\n│  *Number* : ${sender.split("@")[0]}\n│  *Status* : ${isCreator? ` Owner️ ${botname}` :`User ${botname}`}\n╰─⬣\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : ${ownername}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.0.0\n╰─⬣\n\n╭─⬣「 _*INDONESIAN TIME*_ 」⬣\n│ *Wib* : ${time}\n│ *Wita* : ${wita}\n│ *Wit* : ${wit}  \n╰─⬣`, `CLICK HERE`, {
                  quoted: m
               })
            }
         */}
         break
         case "command":
         case 'allmenu': {
               sendListMenu(alpha, m.chat, `╭─⬣「 _*INFO USER*_ 」⬣\n│  *Name* : ${pushname}\n│  *Number* : ${sender.split("@")[0]}\n│  *Status* : ${isCreator? ` Owner️ ${botname}` :`User ${botname}`}\n╰─⬣\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : ${ownername}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.0.0\n╰─⬣\n\n╭─⬣「 _*INDONESIAN TIME*_ 」⬣\n│ *Wib* : ${time}\n│ *Wita* : ${wita}\n│ *Wit* : ${wit}  \n╰─⬣`, `CLICK HERE`,`© ${ownername}`,{
                  quoted: m
               })
         }
         break
         /*case 'allmenu': {
            await sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋,  *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, {
               userJid: m.chat,
               quoted: m
            })
         }
         break*/
         case 'infocmd':
         case 'infomenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.info(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.info(prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.info(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.info(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break
         case 'storecmd':
         case 'storemenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.storemenu(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.storemenu(prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.storemenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.storemenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break
         case 'rpgcmd':
         case 'rpgmenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.rpgmenu(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.rpgmenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.rpgmenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break

         case 'photooxycmd':
         case 'photooxymenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.photooxy(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.photooxy(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.photooxy(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break
         case 'storagecmd':
         case 'storagemenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.storagemenu(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.storagemenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.storagemenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break
         case 'voicecmd':
         case 'voicemenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.voiceChange(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.voiceChange(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.voiceChange(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break
         case 'anoncmd':
         case 'anonymouscmd':
         case 'anonmenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.anonchat(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.anonchat(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.anonchat(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break
         case 'ownercmd':
         case 'ownermenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.ownermenu(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.ownermenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.ownermenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break
         case 'databasecmd':
         case 'databasemenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.database(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.database(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.database(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break
         case 'groupcmd':
         case 'grupmenu':
         case 'groupmenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.group(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.group(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.group(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break
         case 'animecmd':
         case 'animemenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.anime(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.anime(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.anime(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break
         case 'tagcmd':
         case 'tagmenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.tag(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.tag(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.tag(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break
         case 'stalkcmd':
         case 'stalkmenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.stalk(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.stalk(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.stalk(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break
         case 'searchcmd':
         case 'searchmenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.search(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.search(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.search(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break
         case 'convertercmd':
         case 'convertmenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.converter(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.converter(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.converter(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break
         case 'stickercmd':
         case 'imageeffect':
         case 'stickermenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.effect(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.effect(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.effect(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break
         case 'stickercmd2':
         case 'stickereffect':
         case 'stickermenu2': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.effect2(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.effect2(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.effect2(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break
         case 'downloadercmd':
         case 'downloadmenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.download(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.download(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.download(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break
         case 'ranimecmd':
         case 'randomanime':{
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.ranime(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.ranime(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.ranime(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break
         case 'nsfwcmd':
         case 'nsfwmenu':
         case 'nsfwcommand': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.nsfw(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.nsfw(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.nsfw(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break
         case 'textprocmd':
         case 'textpromenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.textpro(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.textpro(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.textpro(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break
         case 'othercmd':
         case 'othermenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.other(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.other(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.other(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break
         case 'gamecmd':
         case 'gamemenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.game(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.game(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.game(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break
         case 'soundcmd':
         case 'soundmenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.soundmenu(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.soundmenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.soundmenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break
         case 'logocmd':
         case 'logomenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.logomenu(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.logomenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.logomenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break
         case 'islamcmd':
         case 'islammenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.islammenu(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.islammenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.islammenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break
         case 'asupancmd':
         case 'asupanmenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.asupan(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.asupan(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.asupan(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break
         case 'cecancmd':
         case 'cecanmenu': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.cecan(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.cecan(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.cecan(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break
         case 'primbonmenu':
         case 'primboncmd': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.primbonmenu(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋,  *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.primbonmenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.primbonmenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break
         case 'telestc':
         case 'telestiker':
         case 'telecmd': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.stcmenu(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋,  *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.stcmenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.stcmenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break
         case 'ephotomenu':
         case 'ephotocmd': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.ephotomenu(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.ephotomenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.ephotomenu(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break
         case 'thanksto':
         case 'tqto': {
            if (db.data.settings[botNumber].typemenu2 == 'image') {
               sendButImage(alpha, m.chat, sender, buttonDefault4, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.tqto(prefix), `© ${ownername}`, [sender, ownernomer], {
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'location') {
               Alpha.sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, buttonDefault3, [sender, ownernomer], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateLocation') {
               Alpha.send5ButLoc(alpha, reSize, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.tqto(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
            if (db.data.settings[botNumber].typemenu2 == 'templateImage') {
               Alpha.send5ButImg(alpha, m.chat, `Selamat ${salam} ${pushname} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@6.6.0\n╰─⬣` + '\n\n' + lang.tqto(prefix), '©' + ownername, pp_bot, buttonDefault2, [sender, ownernomer], {quoted: m})
            }
         }
         break
         case 'swm': case 'take':
         case 'wm': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!quoted) return reply(lang.NoToStik(prefix, command))
            if (quoted.isAnimated) {
               let media = await alpha.downloadAndSaveMediaMessage(quoted)
               let webpToMp4 = await webp2mp4File(media)
               let encmedia = await alpha.sendVideoAsSticker(m.chat, webpToMp4.result, m, {
                  packname: text.split('|')[0] ? text.split('|')[0] : pushname,
                  author: text.split('|')[1] ? text.split('|')[1] : ''
               })
               await fs.unlinkSync(encmedia)
            } else if (/image/.test(mime)) {
               let media = await quoted.download()
               let encmedia = await alpha.sendImageAsSticker(m.chat, media, m, {
                  packname: text.split('|')[0] ? text.split('|')[0] : pushname,
                  author: text.split('|')[1] ? text.split('|')[1] : ''
               })
               await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
               if ((quoted.msg || quoted).seconds > 11) return reply(lang.NoToStik(prefix, command))
               let media = await quoted.download()
               let encmedia = await alpha.sendVideoAsSticker(m.chat, media, m, {
                  packname: text.split('|')[0] ? text.split('|')[0] : pushname,
                  author: text.split('|')[1] ? text.split('|')[1] : ''
               })
               await fs.unlinkSync(encmedia)
            } else {
               reply(lang.NoToStik(prefix, command))
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'setwm':
         case 'setexif': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (!text) return reply(lang.NoToStik(prefix, command))
            if (!text.includes('|')) return reply(lang.NoToStik(prefix, command))
            global.packname = text.split("|")[0]
            global.author = text.split("|")[1]
            reply(lang.DoneExif(global.packname, global.author))

         }

         break
         case 'nomerhoki':
         case 'nomorhoki': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!Number(text)) return reply(`Example : ${prefix + command} 887435047326`)
            let anu = await primbon.nomer_hoki(Number(text))
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'artimimpi':
         case 'tafsirmimpi': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} belanja`)
            let anu = await primbon.tafsir_mimpi(text)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'ramalanjodoh':
         case 'ramaljodoh': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`)
            let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
            let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'ramalanjodohbali':
         case 'ramaljodohbali': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`)
            let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
            let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'suamiistri': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`)
            let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
            let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'ramalancinta':
         case 'ramalcinta': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`)
            let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
            let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'artinama': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone`)
            let anu = await primbon.arti_nama(text)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'kecocokannama':
         case 'cocoknama': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004`)
            let [nama, tgl, bln, thn] = text.split`,`
            let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'kecocokanpasangan':
         case 'cocokpasangan':
         case 'pasangan': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone|Clara`)
            let [nama1, nama2] = text.split`|`
            let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
            if (anu.status == false) return reply(anu.message)
            alpha.sendImage(m.chat, anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'jadianpernikahan':
         case 'jadiannikah': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 6, 12, 2020`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'sifatusaha': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!ext) return reply(`Example : ${ command} 28, 12, 2021`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'rejeki':
         case 'rezeki': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'pekerjaan': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'ramalannasib':
         case 'ramalnasib':
         case 'nasib': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.ramalan_nasib(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'potensipenyakit':
         case 'penyakit': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'artitarot':
         case 'tarot': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'fengshui': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone, 1, 2004\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
            let [nama, gender, tahun] = text.split`,`
            let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'haribaik': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.petung_hari_baik(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'harisangar':
         case 'taliwangke': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'harinaas':
         case 'harisial': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'nagahari':
         case 'harinaga': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'arahrejeki':
         case 'arahrezeki': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'peruntungan': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
            let [nama, tgl, bln, thn, untuk] = text.split`,`
            let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'weton':
         case 'wetonjawa': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `???? Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.weton_jawa(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'sifat':
         case 'karakter': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone,12, 1, 2004`)
            let [nama, tgl, bln, thn] = text.split`,`
            let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'keberuntungan': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004`)
            let [nama, tgl, bln, thn] = text.split`,`
            let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'memancing': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2022`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'masasubur': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
            let [tgl, bln, thn, siklus] = text.split`,`
            let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit = addLimit
         break
         case 'ppcp':
         case 'ppcouple':
         case 'couple': {
            let data = fs.readFileSync('./lib/ppcp.js');
            let jsonData = JSON.parse(data);
            let randIndex = Math.floor(Math.random() * jsonData.length);
            let json = jsonData[randIndex];
            let randCowo = await getBuffer(json.cowo)
            alpha.sendMessage(m.chat, {
               image: randCowo,
               caption: '*Boy*',
               quoted: m
            })
            let randCewe = await getBuffer(json.cewe)
            alpha.sendMessage(m.chat, {
               image: randCewe,
               caption: '*Girl*',
               quoted: m
            })
         }
         break
         //ephoto360
         case "1917text":
         case "angelwing":
         case "announofwin":
         case "birthdaycake":
         case "capercut":
         case "cardhalloween":
            //case "cartoonstyle":
         case "christmascard":
         case "christmasseason":
         case "covergamepubg":
         case "covergraffiti":
         case "dragonfire":
         case "embroider":
         case "fabrictext":
         case "facebookgold":
         case "facebooksilver":
         case "funnyanimations":
         case "funnyhalloween":
         case "galaxybat":
         case "galaxywallpaper":
         case "generalexam":
         case "glowingtext":
         case "graffiti3d":
         case "graffititext":
         case "graffititext2":
         case "graffititext3":
         case "greetingcardvideo":
         case "halloweenbats":
         case "heartcup":
         case "heartflashlight":
         case "horrorletter":
         case "icetext":
         case "instagramgold":
         case "instagramsilver":
         case "lightningpubg":
         case "lovecard":
         case "lovelycute":
         case "masteryavatar":
         case "merrycard":
         case "messagecoffee":
         case "metalstar":
         case "milkcake":
         case "modengold3":
         case "moderngold":
         case "moderngold2":
         case "moderngoldsilver":
         case "nameonheart":
         case "noeltext":
         case "projectyasuo":
         case "pubgbirthday":
         case "pubgglicthvideo":
         case "pubgmascotlogo":
         case "puppycute":
         case "realembroidery":
         case "retrotext":
         case "rosebirthday":
         case "snowontext":
         case "starsnight":
         case "summerbeach":
         case "sunglightshadow":
         case "textcakes":
         case "texthalloween":
         case "textonglass":
         case "textsky":
         case "thundertext":
         case "twittergold":
         case "twittersilver":
         case "viettel":
         case "vintagetelevision":
         case "watercolor2":
         case "womansday":
         case "writeblood":
         case "writegalaxy":
         case "writehorror":
         case "youtubegold":
         case "youtubesilver":
         case "zombie3d": {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.NoTeksOne(prefix, command))
            reply(lang.wait())
            let res = await fetch(global.api('alfa', '/api/ephoto360/' + command, {
               text: text
            }, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'ephoto.jpg', lang.ok(), m)
            db.data.users[m.sender].limit = addLimit
         }

         break
         case "shirtclub":
         case 'steellettering':
         case 'letterstext':
         case 'barcashirt':
         case 'premiercup':
         case 'stylepoligon':
         case 'lifebuoys':
         case 'juventusshirt': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.NoTeksTwo(prefix, command))
            if (!text.includes('|')) return reply(lang.NoTeksTwo(prefix, command))
            mm = args.join(' ')
            m1 = mm.split("|")[0];
            m2 = mm.split("|")[1];
            reply(lang.wait())
            let res = await fetch(global.api('alfa', '/api/ephoto360/' + command, {
               text: m1,
               text2: m2
            }, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'ephoto.jpg', lang.ok(), m)
            db.data.users[m.sender].limit = addLimit
         }
         break

         case 'horror':
         case 'game8bit':
         case 'layered':
         case 'glitch2':
         case 'cool-graffiti':
         case 'cool-wall-graffiti':
         case 'realistic':
         case 'space3d':
         case 'glitch-tiktok':
         case 'stone':
         case 'marvel':
         case 'marvel2':
         case "metal-rose-gold":
         case 'pornhub':
         case 'avengers':
         case 'metal-rainbow':
         case 'metal-gold':
         case 'metal-galaxy':
         case "metal-silver":
         case 'lion':
         case 'wolf-black-white':
         case 'wolf-galaxy':
         case 'ninja':
         case '3dsteel':
         case 'horror2':
         case 'lava':
         case 'bagel': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.NoTeksTwo(prefix, command))
            if (!text.includes('|')) return reply(lang.NoTeksTwo(prefix, command))
            mm = args.join(' ')
            m1 = mm.split("|")[0];
            m2 = mm.split("|")[1];
            reply(lang.wait())
            let res = await fetch(global.api(global.APIs.alfa, '/api/textpro/' + command, {
               text: m1,
               text2: m2
            }, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'textpro.jpg', lang.ok(), m)
            db.data.users[m.sender].limit = addLimit
         }
         break

         case 'battlegrounds-logo':
         case 'battlefield4':
         case 'text-8bit': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.NoTeksTwo(prefix, command))
            if (!text.includes('|')) return reply(lang.NoTeksTwo(prefix, command))
            mm = args.join(' ')
            m1 = mm.split("|")[0];
            m2 = mm.split("|")[1];
            reply(lang.wait())
            let res = await fetch(global.api(global.APIs.alfa, '/api/photooxy/' + command, {
               text: m1,
               text2: m2
            }, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'photooxy.jpg', lang.ok(), m)
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'typography-flower':
         case 'under-flower':
         case 'bevel-text':
         case 'silk-text':
         case 'sweet-andy':
         case 'smoke-typography':
         case 'carvedwood':
         case 'scary-cemetery':
         case 'royallook':
         case 'coffeecup2':
         case 'illuminated':
         case 'harry-potter2': //case 'woodblack': //case 'butterfly-reflection': //case 'watermelon': // case 'striking':// case 'metallicglow': //case 'rainbow-text':
         case 'birthday-cake':
         case 'embroidery': // case 'crisp': 
         case 'flaming':
         case 'furtext':
         case 'nightsky':
         case 'glow-rainbow':
         case 'gradient-avatar':
         case 'white-cube': // case 'honey-text': // case 'vintage-style': //case 'glowing-3d': // case 'army-camouflage': 
         case 'graffiti-cover':
         case 'rainbow-shine':
         case 'smoky-neon':
         case 'quotes-underfall': //case 'layered-leaves': 
         case 'vector-nature':
         case 'yellow-rose':
         case 'love-text':
         case 'underwater-ocean':
         case 'nature-text':
         case 'wolf-metal':
         case 'summer-text':
         case 'wooden-board': //case 'flower-heart':
         case 'quote-wood':
         case 'love-text':
         case 'quotes-undergrass':
         case 'naruto-banner':
         case 'love-message':
         case 'textoncup2':
         case 'burn-paper':
         case 'smoke':
         case 'romantic-messages':
         case 'shadow-sky':
         case 'text-cup':
         case 'coffecup': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.NoTeksOne(prefix, command))
            reply(lang.wait())
            let res = await fetch(global.api('alfa', '/api/photooxy/' + command, {
               text: text
            }, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'photooxy.jpg', lang.ok(), m)
            db.data.users[m.sender].limit = addLimit
         }
         break
         case "3dbox":
         case "3dchrome":
         case "3dglue":
         case "3dstone":
         case "abstra":
         case "advanced":
         case "bear":
         case "berry":
         case "biscuit":
         case "black-metal":
         case "blackpink":
         case "blood":
         case "blood2":
         case "blue-balloon":
         case "blue-gem":
         case "blue-glass":
         case "blue-glitter":
         case "blue-jewelry":
         case "blue-metal":
         case "blue-sparkling":
         case "bokeh":
         case "bread":
         case "broken":
         case "bronze-glitter":
         case "candy":
         case "captain-as2":
         case "carbon":
         case "chocolate":
         case "chrismast":
         case "christmas":
         case "cloudsky":
         case "cyan-balloon":
         case "cyan-glass":
         case "cyan-jewelry":
         case "cyan-sparkling":
         case "dark-gold":
         case "decorate":
         case "decorate-purple":
         case "decorative":
         case "deluxe-gold":
         case "demon":
         case "denim":
         case "discovery":
         case "dropwater":
         case "drug":
         case "embossed":
         case "engraved":
         case "equalizer":
         case "eroded-metal":
         case "fabric":
         case "fiction":
         case "firework":
         case "glitch":
         case "gloss":
         case "glossy":
         case "glossy-blue":
         case "glossy-carbon":
         case "gold-balloon":
         case "gold-glitter":
         case "gold-sparkling":
         case "golden":
         case "gradient":
         case "gradient2":
         case "green-balloon":
         case "green-glass":
         case "green-glitter":
         case "green-jewelry":
         case "green-neon":
         case "green-sparkling":
         case "halloween":
         case "halloween2":
         case "holographic":
         case "honey2":
         case "hot-metal":
         case "ice":
         case "joker":
         case "juice":
         case "koifish":
         case "luxury2":
         case "magma":
         case "marble":
         case "marble2":
         case "matrix":
         case "metaldark":
         case "metallic2":
         case "minion":
         case "multicolor":
         case "natural":
         case "neon":
         case "neon-devil":
         case "neon-light":
         case "neon2":
         case "neonc":
         case "neonlight":
         case "neonligth2":
         case "newyear":
         case "newyear2":
         case "orange-glass":
         case "orange-jewelry":
         case "oscar":
         case "papercut":
         case "peridot":
         case "pink-balloon":
         case "pink-glitter":
         case "pink-sparkling":
         case "purple":
         case "purple-balloon":
         case "purple-gem":
         case "purple-glass":
         case "purple-glitter":
         case "purple-jewelry":
         case "purple-shiny-glass":
         case "purple-sparkling":
         case "rainbow2":
         case "red-balloon":
         case "red-glass":
         case "red-jewelry":
         case "red-sparkling":
         case "road-warning":
         case "robot":
         case "rock":
         case "rusty":
         case "scifi":
         case "shiny":
         case "silver-glitter":
         case "silver-jewelry":
         case "sircuit":
         case "skeleton":
         case "sketch":
         case "snow":
         case "steel":
         case "strawberry":
         case "summer":
         case "summery":
         case "thunder":
         case "thunder2":
         case "toxic":
         case "transformer":
         case "underwater":
         case "wall":
         case "water-pipe":
         case "watercolor":
         case "wicker":
         case "wonderful-graffiti":
         case "wood":
         case "writing":
         case "xmas":
         case "yellow-glass":
         case "yellow-jewelry": {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.NoTeksOne(prefix, command))
            reply(lang.wait())
            let res = await fetch(global.api('alfa', '/api/textpro/' + command, {
               text: text
            }, 'apikey'))
            if (res.status != 200) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'textpro.jpg', lang.ok(), m)
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'chika':
         case 'rikagusriani':
         case 'bocil':
         case 'geayubi':
         case 'santuy':
         case 'ukhty':
         case 'asupan':
         case 'delvira':
         case 'ayu':
         case 'bunga':
         case 'aura':
         case 'nisa':
         case 'ziva':
         case 'yana':
         case 'viona':
         case 'syania':
         case 'riri':
         case 'syifa':
         case 'mama_gina':
         case 'alcakenya':
         case 'mangayutri': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            reply(lang.wait())
            let res = await fetch(global.api('alfa', '/api/asupan/' + command, {}, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'asupan.mp4', lang.ok(), m)
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'china':
         case 'indonesia':
         case 'malaysia':
         case 'thailand':
         case 'korea':
         case 'japan':
         case 'vietnam':
         case 'jenni':
         case 'jiiso':
         case 'lisa':
         case 'rose': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            reply(lang.wait())
            let res = await fetch(global.api('alfa', '/api/cecan/' + command, {}, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'textpro.jpg', lang.ok(), m)
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'hentai': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!db.data.chats[m.chat].nsfw) return reply(lang.OffNsfw())
            reply(lang.wait())
            anu = await hentai()
            result = anu[Math.floor(Math.random(), anu.length)]
            alpha.sendMessage(m.chat, {
               video: {
                  url: result.video_1
               },
               caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.category}\n⭔ Mimetype : ${result.type}\n⭔ Views : ${result.views_count}\n⭔ Shares : ${result.share_count}\n⭔ Source : ${result.link}\n⭔ Media Url : ${result.video_1}`
            }, {
               quoted: m
            })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'cuddle':
         case 'foxgirl':
         case 'kemonomimi2':
         case 'woof':
         case 'holo2':
         case 'hug':
         case 'kiss':
         case 'lizard':
         case 'meowi':
         case 'neko2':
         case 'pat':
         case 'poke':
         case 'slap':
         case 'tickle': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!db.data.chats[m.chat].nsfw) return reply(lang.OffNsfw())
            reply(lang.wait())
            let res = await fetch(global.api('alfa', '/api/sfw/' + command, {}, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'sfw.jpg', lang.ok(), m)
            db.data.users[m.sender].limit = addLimit
         }
         break

         case 'baka':
         case 'smug':
         case 'neko-sfw':
         case 'hentai-gif':
         case 'spank':
         case 'blowjob':
         case 'cumarts':
         case 'eroyuri':
         case 'eroneko':
         case 'erokemonomimi':
         case 'erokitsune':
         case 'ero':
         case 'feet':
         case 'erofeet':
         case 'feetgif':
         case 'femdom':
         case 'futanari':
         case 'hentai':
         case 'holoero':
         case 'holo':
         case 'keta':
         case 'kitsune':
         case 'kemonomimi':
         case 'pussyart':
         case 'pussywankgif':
         case 'girl-solo':
         case 'girl-solo-gif':
         case 'tits':
         case 'trap':
         case 'yuri':
         case 'avatar2':
         case 'anal':
         case 'bj':
         case 'boobs':
         case 'classic':
         case 'cumsluts':
         case 'kuni':
         case 'lesbian':
         case 'neko':
         case 'neko-gif':
         case 'ahegao':
         case 'bdsm':
         case 'cuckold':
         case 'cum':
         case 'foot':
         case 'gangbang':
         case 'glasses':
         case 'jahy':
         case 'masturbation':
         case 'nsfw-neko':
         case 'orgy':
         case 'panties':
         case 'tentacles':
         case 'thighs':
         case 'zettai': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!db.data.chats[m.chat].nsfw) return reply(lang.OffNsfw())
            reply(lang.wait())
            let res = await fetch(global.api('alfa', '/api/nsfw/' + command, {}, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'nsfw.jpg', lang.ok(), m)
            db.data.users[m.sender].limit = addLimit
         }
         break
         //sound
         case 'sound71':
         case 'sound72':
         case 'sound73':
         case 'sound74':
         case 'sound75':
         case 'sound1':
         case 'sound2':
         case 'sound3':
         case 'sound4':
         case 'sound5':
         case 'sound6':
         case 'sound7':
         case 'sound8':
         case 'sound9':
         case 'sound10':
         case 'sound11':
         case 'sound12':
         case 'sound13':
         case 'sound14':
         case 'sound15':
         case 'sound16':
         case 'sound17':
         case 'sound18 ':
         case 'sound19':
         case 'sound20':
         case 'sound21':
         case 'sound22':
         case 'sound23':
         case 'sound24':
         case 'sound25':
         case 'sound26':
         case 'sound27':
         case 'sound28':
         case 'sound29':
         case 'sound30':
         case 'sound31':
         case 'sound32':
         case 'sound33':
         case 'sound34':
         case 'sound35':
         case 'sound36':
         case 'sound37':
         case 'sound38':
         case 'sound39':
         case 'sound40':
         case 'sound41':
         case 'sound42':
         case 'sound43':
         case 'sound44':
         case 'sound45':
         case 'sound46':
         case 'sound47':
         case 'sound48':
         case 'sound49':
         case 'sound50':
         case 'sound51':
         case 'sound52':
         case 'sound53':
         case 'sound54':
         case 'sound55':
         case 'sound56':
         case 'sound57':
         case 'sound58':
         case 'sound59':
         case 'sound60':
         case 'sound61':
         case 'sound62':
         case 'sound63':
         case 'sound64':
         case 'sound65':
         case 'sound66':
         case 'sound67':
         case 'sound68':
         case 'sound69':
         case 'sound70': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            reply(lang.wait())
            let res = await fetch(global.api('alfa', '/api/sound/' + command, {}, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendMessage(m.chat, {
               audio: img,
               mimetype: 'audio/mpeg',
               ptt: true
            }, {
               quoted: m
            })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'coverbannerlol': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.CoverBanLol(prefix, command))
            if (!text.includes('|')) return reply(lang.CoverBanLol(prefix, command))
            arg = args.join(' ')
            atas = arg.split('|')[0]
            bawah = arg.split('|')[1]
            const style = ['jinx7', 'jinx-8', 'kassadin-5', 'nissfortune-5', 'pyke-7', 'riven-8', 'sylas-5', 'vayne-9', 'kassadin-4', 'qiyana-5', 'renataglasc', 'shen-5', 'heimerdinger-3', 'nunu-5', 'orianna-4', 'ziggs-4', 'soraka-9', 'soraka-10', 'xayah-3', 'zeri-2', 'ahri-9', 'akshan-2', 'amumu-4', 'annie-3', 'bard-3', 'brand-5', 'diana-4', 'draven-3', 'ekko-6', 'elise-4', 'ezreal-7', 'gwen-3', 'janna-6', 'kindred-3', 'leblanc-7', 'leona-7', 'lissandra-4', 'lux-8', 'lux-9', 'nalzahar-4', 'nasteryi-7', 'reksai-3', 'sett-3', 'sivir-6', 'teemo-5', 'tristana-6', 'vladimir-5', 'xinzhao-5', 'zed-7', 'zeri', 'caitlyn-6', 'caitlyn-7', 'caitlyn-8', 'caitlyn-9', 'caitlyn-10', 'caitlyn-11', 'jayce-5', 'kaisa-8', 'karma-7', 'thresh-6', 'vi-5', 'yasuo-8', 'yasuo-9', 'fiora-8', 'norgana-7', 'nami-5', 'poppy-4', 'syndra-5', 'yuumi-4', 'jarvaniv-6', 'kayn-4', 'kayle-5', 'lillia-2', 'norgana-6', 'tryndamere-3', 'vex', 'vex-2', 'yone-4', 'tristana-5', 'viego-2', 'akali-10', 'anivia-4', 'darius-5', 'graves-6', 'seraphine-5', 'shaco-2', 'twistedfate-4', 'xayah-2', 'zyra-5', 'ahri-8', 'ashe-6', 'cassiopeia-4', 'evelynn-6', 'leblanc-6', 'nalphite-4', 'warwick-5', 'akshan', 'graves-5', 'nissfortune-5', 'pyke-6', 'rengar-6', 'thresh-5', 'diana-3', 'relia-11', 'olaf-3', 'pantheon-6', 'pantheon-7', 'riven-7', 'vayne-8', 'corki-4', 'naokai-2', 'rammus-4', 'veigar-4', 'zed-6', 'camille-4', 'drmundo-3', 'lucian-6', 'nordekaiser-4', 'renekton-4', 'sejuani-5', 'senna-3', 'sylas-4', 'varus-5', 'xerath-3', 'damwon', 'galio-3', 'gwen', 'gwen-2', 'jax-5', 'jinx-6', 'kayle-5', 'sion-2', 'twitch-4', 'velkoz-4', 'blitzcrank-3', 'leona-6', 'lulu-3', 'lulu-4', 'lux-7', 'nasus-5', 'nunu-4', 'rumble-2', 'samira-3', 'aphelios-2', 'blitzcrank-2', 'caitlyn-5', 'garen-6', 'kogmaw-4', 'leona-5', 'alzahar-3', 'syndra-4', 'wukong-4', 'yone-3', 'yuumi-3', 'zyra-4', 'alistar-4', 'chogath-2', 'draven-2', 'fiora-7', 'jarvan-5', 'jhin-5', 'karma-6', 'nautilus-2', 'neeko-5', 'shyvana-3', 'viego', 'azir-4', 'diana-4', 'gragas-2', 'janna-5', 'kalista-3', 'katarina-6', 'ornn-2', 'qiyana-4', 'quinn-3', 'rell', 'xinzhao-4', 'anivia-3', 'hecarim-4', 'illaoi-2', 'jayce-4', 'lissandra-3', 'nami-4', 'nasus-4', 'nidalee-5', 'seraphine-4', 'singed-2', 'skarner-2', 'soraka-7', 'varus-4', 'vladimir-4', 'yorick-4', 'zac', 'riven-8', 'ahri-7', 'akali-9', 'evelynn-5', 'kaisa-7', 'lucian-5', 'seraphine', 'seraphine-2', 'seraphine-3', 'aatrox-6', 'amumu-3', 'lise-3', 'fizz-5', 'karma-5', 'zeri-2', 'kassadin-3', 'khazix-4', 'sivir-5', 'twistedfate-3', 'ashe-5', 'brand-4', 'leesin-5', 'olaf-2', 'sett-2', 'kayle-4', 'leblanc-5', 'pyke-5', 'samira', 'samira-2', 'viktor-2', 'yasuo-7', 'zed-5', 'ezreal-6', 'nasteryi-6', 'shen-4', 'sona-4', 'vi-4', 'yone', 'yone-2', 'ziggs-3', 'ahri-6', 'cassiopeia-3', 'kindred-2', 'riven-6', 'kennen-2', 'kogmaw-3', 'lillia', 'syndra-3', 'teemo-4', 'thresh-4', 'vayne-7', 'velkoz-3', 'yasuo-6', 'zoe-4', 'bard-2', 'gnar-3', 'irelia-10', 'nocturne-4', 'poppy-3', 'enna-2', 'volibear-3', 'volibear-4', 'ekko-5', 'fiora-6', 'lucian-4', 'pantheon-5', 'leblanc-4', 'norgana-5', 'urgot-4', 'zyra-3', 'jinx-5', 'sett', 'alistar-3', 'katarina-5', 'lux-5', 'lux-6', 'nasteryi-5', 'nalphite-3', 'nordekaiser-3', 'reksai-2', 'sejuani-4', 'tryndamere-2', 'xerath-2', 'aphelios', 'garen-5', 'jax-4', 'karma-4', 'leesin-4', 'leona-4', 'nidalee-4', 'rengar-5', 'soraka-5', 'soraka-6', 'swain-4', 'sylas-3', 'trundle-2', 'vladimir-3', 'aatrox-5', 'akali-8', 'ekko-4', 'qiyana-3', 'senna', 'yasuo-5', 'ashe-4', 'darius-4', 'hecarim-3', 'norgana-4', 'nami-3', 'riven-4', 'riven-5', 'ryze-3', 'neeko-3', 'eeko-4', 'xayahrakan', 'zoe-3', 'airi-6', 'noctune-3', 'pantheon-3', 'pantheon-4', 'rammus-3', 'udyr-2', 'veigar-3', 'akali-7', 'garen-4', 'irelia-8', 'irelia-9', 'jinx-4', 'lucian-3', 'pyke-4', 'warwick-4', 'caitlyn-3', 'caitlyn-4', 'kaisa-6', 'qiyana', 'qiyana-2', 'yasuo-4', 'jhin-3', 'karma-3', 'nordekaiser-2', 'tristana-4', 'nami', 'poppy-3', 'aatrox', 'lulu', 'braum', 'camille', 'karma', 'kindred', 'hecarim', 'norgana', 'renekton', 'kennen', 'akali', 'varus', 'orianna', 'blitzcrank', 'bloodmoonjhin', 'bloodmoontalon', 'arcaderiven', 'udyr', 'rumble', 'gnar', 'shaco', 'twitch', 'veigar', 'tryndamere', 'viktor', 'trundle', 'ezreal', 'poppy', 'lissandra', 'jax', 'vi', 'vellkoz', 'darius', 'diana', 'corki', 'sivir', 'ryze', 'azir', 'tristana', 'kled', 'volibear', 'twisterfate', 'anivia', 'zyra', 'quinn', 'nissfortune', 'kalista', 'ezrealandshen', 'gangplank', 'hextachannie', 'elementalistlux', 'xinzhao', 'vayne', 'jhin', 'reksai', 'graves', 'kogmaw', 'garen', 'porojinx', 'warwick', 'fizz', 'caitlyn', 'rengar', 'talon', 'nidalee', 'lux', 'jinx', 'thresh', 'wukong', 'sona', 'ahri', 'riven', 'zed', 'leesin', 'janna', 'katarina', 'leblanc', 'leona', 'fiora', 'lucian', 'shen', 'ziggs', 'yasuo', 'ekko', 'draven', 'ashe', 'ekko-5', 'teemo', 'khazix', 'nasteryi', 'brand', 'taliyah', 'nocturne', 'cassiopeia', 'xayah', 'rakan', 'syndra', 'irelia', 'leesingf', 'yasuobm', 'aurelionsol', 'pantheon', 'bard', 'singed', 'soraka', 'taric', 'naokai', 'xerath', 'gragas', 'jayce', 'riven3', 'nalphite', 'naster_yi2', 'chogath', 'zed2', 'darius2', 'talon2', 'kayle', 'drmundo', 'rammus', 'vladimir', 'ahri-2', 'karma-2', 'jarvan', 'nidalee-2', 'vayner-2', 'warwick-2', 'rengar-2', 'yasuo-3', 'galio', 'pantheon-2', 'jinx-2', 'nalzahar', 'olaf', 'shyvana', 'thresh-2', 'sion', 'caitlyn-2', 'swain', 'kassadin', 'heimerdinger', 'amumu', 'alistar', 'nasus', 'sejuani', 'ezreal3', 'nautilus', 'fiddlesticks', 'sona2', 'karthus', 'ekko2', 'orianna2', 'velkoz-2', 'xinzhao2', 'garen2', 'annie-2', 'yasuonb', 'rivendb', 'kayn', 'kaisa', 'veigar-2', 'vayne-3', 'twitch-2', 'tristana-2', 'rhaast', 'nalzahar-2', 'kayle-2', 'illaoi', 'fizz-2', 'elise', 'brand-2', 'syndra-2', 'soraka-2', 'nissfortune-2', 'hecarim-2', 'ezreal-2', 'ahri-3', 'yorick', 'z-2', 'tahmkench', 'shen-2', 'ornn', 'cassiopeia-2', 'renekton-2', 'nasus-2', 'jarvan-2', 'fiora-2', 'alistar-2', 'taric-2', 'zac-2', 'yorick-2', 'varus-2', 'nordekaiser', 'nasteryi-3', 'katarina-2', 'janna-2', 'fiora-3', 'evelynn', 'elise-2', 'ashe-2', 'annie', 'zoe', 'vi-2', 'vayne-4', 'rengar-3', 'jhin-2', 'graves-2', 'xayahrakan', 'warwick-3', 'nissfortune-3', 'lux-2', 'kaisa', 'jarvaniv', 'zoe-2', 'swain-2', 'sivir-2', 'nissfortune-4', 'jax-2', 'galio-2', 'varus-3', 'urgot', 'twistedfate-2', 'taric-3', 'swain-3', 'shen-3', 'rammus-2', 'pyke-2', 'pyke', 'nasus-3', 'talon', 'khazix-2', 'kayn-2', 'irelia-2', 'evelynn-2', 'akali-2', 'vladimir-2', 'jayce-2', 'janna-3', 'irelia-4', 'irelia-3', 'diana-2', 'zed-3', 'teemo-2', 'taliyah-2', 'shyvana-2', 'poppy-2', 'katarina-3', 'jax-3', 'garen-3', 'darius-3', 'chogath-2', 'aatrox-2', 'soraka-3', 'sona-3', 'sivir-3', 'kaisa-2', 'akali-4', 'akali-3', 'xinzhao-3', 'urgot-3', 'urgot-2', 'tristana-3', 'talon-3', 'sejuani-2', 'nunu-2', 'lulu-2', 'lucian-2', 'irelia-6', 'irelia-5', 'ashe-3', 'ziggs-2', 'yasuo-2', 'sona-4', 'nalphite-2', 'khazix-3', 'kayn-3', 'jinx-3', 'orianna-3', 'kaisa-4', 'kaisa-3', 'heimerdinger-2', 'ezreal-4', 'evelynn-3', 'akali-5', 'ahri-4', 'thresh-3', 'ryze-2', 'kled-2', 'janna-4', 'graves-3', 'fiddlesticks-2', 'ekko-3', 'amumu-2', 'nami-2', 'lulusoraka', 'lissandra-2', 'leona-3', 'leona-2', 'leblanc-2', 'ezrealmissfortune', 'camille-2', 'twitch-3', 'soraka-4', 'renekton-3', 'neeko-2', 'neeko', 'nasteryi-4', 'drmundo-2', 'akali-6', 'zyra-2', 'zilean', 'wukong-3', 'wukong-2', 'teemo-3', 'skarner', 'sivir-4', 'riven-2', 'quinn-2', 'pyke-3', 'nocturne-2', 'nidalee-3', 'norgana-2', 'leesin-3', 'kogmaw-2', 'kassadin-2', 'karthus-2', 'kalista-2', 'gnar-2', 'gangplank-2', 'corki-2', 'azir-3', 'azir-2', 'aatrox-4', 'aatrox-3', 'vi-3', 'vayne-6', 'vayne-5', 'tahmkench-2', 'sylas-2', 'sylas', 'sejuani-3', 'fiora-4', 'nunu-3', 'norgana-3', 'kayle-3', 'brand-3', 'anivia-2', 'ahri-5', 'yorick-3', 'rengar-4', 'fizz-4', 'fizz-3', 'corki-3', 'zed-4', 'rakan-2', 'leblanc-3', 'kaisa-5', 'jarvaniv', 'ivern', 'irelia-7', 'fiora-5', 'evelynn-4', 'camille-3', 'yuumi-2', 'yuumi', 'lux-4', 'lux-3', 'katarina-4', 'jayce-3', 'graves-4', 'ezreal-5']
            if (!style.includes(bawah)) {
               let listt = `${lang.coverbannerlol(style.length)}`
               no = 0

               for (var i = 0; i < style.length; i++) {
                  no += 1

                  listt += no.toString() + '.  ' + style[i] + '\n'

               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: atas,
                  heroes: bawah
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'pubglogomaker': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.pubglogomaker(prefix, command))
            if (!text.includes('|')) return reply(lang.pubglogomaker(prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['women', 'nen']
            if (!style.includes(bawah)) {
               let listt = `${lang.pubglogomaker_(style.length)}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  style: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'colorfulpubg': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.colorfulpubg(prefix, command))
            if (!text.includes('|')) return reply(lang.colorfulpubg(prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['gold', 'green-blue', 'pink-yellow', 'green-yellow', 'cyan-purple', 'orange-red']
            if (!style.includes(m2)) {
               let listt = `${lang.colorfulpubg_(style.length)}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  color: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'astronotspace': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}??🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.astronotspace(prefix, command))
            if (!text.includes('|')) return reply(lang.astronotspace(prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['anubis', 'dragon', 'duck', 'gorilla', 'panda', 'panther', 'shark', 'squirrel', 'tiger', 'wolf', 'bull', 'rhino', 'rooster', 'pikachu', 'parrot', 'boar', 'bee', 'hurricane', 'deer', 'horse', 'crocodile', 'pitbull']
            if (!style.includes(m2)) {
               let listt = `${lang.pubglogomaker_(style.length)}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  style: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'wallpaperaov': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.wallpaperaov(prefix, command))
            if (!text.includes('|')) return reply(lang.wallpaperaov(prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['allain', 'allain-2', 'kahlii-3', 'nakroth-4', 'preyta-2', 'skud-2', 'taara-4', 'valhein-4', 'arum-4', 'butterfly-6', 'capheny-3', 'elandorr-2', 'ilumia-3', 'ishar-4', 'lauriel-6', 'laville', 'liliana-5', 'nurad-8', 'quillen-5', 'rouie', 'rouie-2', 'taara-3', 'telannas-5', 'yena-4', 'yena-5', 'zata', 'ata', 'lauriel-5', 'qi-3', 'roxie-3', 'wukong-5', 'aleister-2', 'amily-3', 'arthur-3', 'arum-3', 'astrid-2', 'dirak', 'dirak-2', 'grakk-5', 'hayate-4', 'ishar-2', 'ishar-3', 'jinna-2', 'keera', 'keera-3', 'lauriel-4', 'nax', 'natalya-5', 'quillen-4', 'raz-3', 'richter-2', 'ryoma-4', 'telannas-4', 'ulen-6', 'valhein-3', 'violet-7', 'yorn-4', 'zill-3', 'ignis-2', 'lubu-2', 'naloch-2', 'sephera-3', 'butterfly-5', 'diaochan-4', 'elandoor', 'krizzix-2', 'nina-2', 'natalya-3', 'veera-3', 'violet-6', 'yena-2', 'yena-3', 'krizziz', 'nurad-7', 'volkath', 'volkath-2', 'airi-4', 'arduin-3', 'enzo-3', 'hayate-3', 'krixi-3', 'nurad-6', 'quillen-3', 'telannas-3', 'wisp-2', 'zip-2', 'gildur-2', 'ishar', 'tulen-5', 'amily-2', 'annette-3', 'arthur-2', 'butterfly-4', 'errol-2', 'joker', 'kahlii-2', 'kilgroth', 'lauriel-3', 'nurad-5', 'arduin-2', 'darcy-2', 'florentino-3', 'noren', 'quillen-2', 'ryoma-5', 'sephera-3', 'violet-5', 'airi-3', 'diaochan-3', 'diaochanlubu', 'elsuroxie', 'lindis-3', 'taara-2', 'toro-2', 'tulen-4', 'violet-4', 'wonderwoman', 'ybneth', 'zill-2', 'arum-2', 'florentino-2', 'liliana-4', 'nurad-4', 'yorn-3', 'zip', 'annette-2', 'qi', 'qi-2', 'celica', 'capheny-2', 'diaochan-2', 'elsu-2', 'ilumia-2', 'krixi-2', 'narja-2', 'nurad-3', 'preyta', 'telannas-2', 'valhein', 'veera-2', 'veres-2', 'yorn-2', 'zephys-2', 'airi-2', 'annette', 'baldum', 'butterfly-3', 'elsu-2', 'errol', 'fennik', 'lauriel-2', 'liliana-2', 'liliana-3', 'lindis-2', 'nurad-2', 'nakroth-2', 'nakroth-3', 'natalya-2', 'raz-2', 'ryoma-2', 'slimz', 'teemee', 'tulen-2', 'tulen-3', 'violet-3', 'wiro', 'wukong-3', 'wukong-4', 'zill', 'aleister', 'alice', 'arduin', 'arthur', 'azzenka', 'batman', 'butterfly-2', 'cresh', 'darcy', 'diaochan', 'enzo-2', 'hayate-2', 'jinna', 'lubu', 'nganga', 'violet-2', 'wukong-2', 'zanis-2', 'florentino', 'gildur', 'ignis', 'naloch', 'narja', 'nakroth', 'omen', 'payna', 'raz', 'rourke', 'roxie', 'ryoma', 'skud', 'taara', 'toro', 'valhein', 'veres', 'violet', 'wisp', 'wukong', 'wonderwoman', 'xeniel', 'yorn', 'zanis', 'elsu', 'flash', 'hayate', 'ilumia', 'kahlii', 'krixi', 'lauriel', 'liliana', 'lindis', 'nina', 'nurad', 'natalya', 'quillen', 'richter', 'sephera', 'superman', 'telannas', 'thane', 'airi', 'amily', 'arum', 'astrid', 'butterfly', 'capheny', 'enzo', 'tulen', 'veera', 'yena', 'ryoma-4', 'zephys', 'zuka']
            if (!style.includes(m2)) {
               let listt = `${lang.coverbannerlol(style.length)}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  heroes: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'maketeamlogo': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('style', 'anubis', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'anubis', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['anubis', 'cowgirl', 'dragon', 'duck', 'ghost', 'gorilla', 'panda', 'panther', 'shark', 'squirrel', 'tiger', 'wolf', 'bee', 'crocodile', 'deer', 'pitbull', 'horse', 'hurricane', 'indian', 'assassin', 'boar', 'rapid', 'raven', 'warrior', 'pikachu', 'pubg', 'ninja', 'drift', 'yasuo', 'rhino', 'phoenix', 'bull', 'hornet', 'eagle', 'hunter', 'parrot', 'rooster', 'lion', 'skull', 'wolver', 'wolf', 'cobra', 'dragon', 'panther', 'owl', 'tiger', 'reaper', 'warrior']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  style: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'circlemarcotteam': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('logo', 'lionsnake', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'lionsnake', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['panther', 'rhino', 'squirrel', 'unicorn', 'zebra', 'lionsnake', 'bear', 'bull', 'dragon', 'eagle', 'fox', 'griffin', 'hawk', 'lion', 'peacock', 'phoenix', 'tiger', 'wolver']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  logo: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'wallpaperml': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('heroes', 'aldous', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('heroes', 'aldous', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['aldous', 'alice-2', 'angela-2', 'argus-2', 'chou', 'chou-2', 'estes', 'eudora', 'eudora-2', 'granger', 'granger-2', 'gusion-3', 'hanabi-2', 'hanzo', 'helcurt', 'layla-3', 'lesley-4', 'lunox-2', 'odette-3', 'saber', 'thamuz', 'vexana', 'argus', 'dyrroth', 'esmeralda-2', 'kadita-2', 'lancelot', 'leomord-2', 'lylia', 'vale', 'valir', 'xborg', 'zhask', 'alice', 'alpha', 'athena', 'badang', 'balmond', 'bane', 'diggie', 'trunks', 'fanny-2', 'fanny-3', 'freya', 'guinevere', 'gusion', 'gusion-2', 'hanabi', 'harith', 'harith-2', 'hayabusa-2', 'kadita', 'kagura-2', 'kagura-3', 'karina-2', 'kimmy', 'layla-2', 'leomord', 'lesley-2', 'lesley-3', 'lunox', 'nartis', 'niya-2', 'nana', 'nana-2', 'natalia', 'natalia-2', 'odette-2', 'pharsa', 'rafaela-2', 'selena-2', 'zilong', 'alucard', 'angela', 'bruno', 'change', 'claude', 'fanny', 'hayabusa', 'hilda', 'hylos', 'kagura', 'karina', 'karrie', 'layla', 'lesley', 'lolita', 'ninotaur', 'ninsittar', 'niya', 'noskov', 'odette', 'rafaela', 'selena']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Heroes')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  heroes: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'dragonballfb': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('character', 'aldous', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'aldous', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['cabba', 'caulifla', 'cooler', 'cumber', 'hit', 'kale', 'kaminoren', 'gokuui', 'xenogokuss3', 'xenogokuss4', 'xenovegeta', 'xenovegito', 'android-18', 'blackgoku', 'bulma', 'frieza', 'gotenks-2', 'kaio', 'krillinandroid-18', 'launch', 'nutenroshi-2', 'oldkai', 'oolong', 'pilaf', 'tienshinhan', 'trunks-3', 'bardock', 'gotenks', 'nutenroshi', 'piccolo', 'songoku-2', 'songoku-3', 'songoten', 'trunks-2', 'vegeta-2', 'vegito', 'krillin', 'najinbuu', 'songohan', 'songoku', 'trunks', 'vegeta']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  character: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'bannerofaov': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('character', 'aphelios', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'aphelios', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['peura','rouie-5','roxie-2','sinestrea-4','tachi','telannas-7',"tulen-7","veera-3","veera-4", "veres-6", "violet-7", "wukong-3", "annette-6","astrid-5", "bright-2", "butterfly-4", "butterfly-5", "diao-chan", "enzo-4", "helen", "iggy-3","ilumia-4", "ishar-5", "lauriel-7", "mina-4", "annette-5", "aoi-3", "arum-3", "azzenka","bright", "capheny-6", "celica-2", "elsu-3", "ilumia-3", "ishar-4", "kahlii-2", "lauriel-6","laville-4", "liliana-6", "mina-3", "paine", "rouie-4", "veres5", "murad-6", "veres-2","tulen-5", "lindis-2", "dextra", "nakroth-6", "sephera3", "darcy2", "capheny4", "astrid4","yorn2", "airi4", "sinestrea2", "sinestrea1", "zephys2", "yena4", "volkath3", "tulen4","thorne", "quillen5", "nakroth5", "laville3", "hayate4", "florentino3", "butterfly3", "amily3","annette4", "allain", "arum2", "astrid3", "ata2", "ata", "butterfly2", "capheny3","dirak", "elandorr2", "elandorr", "florentino2", "hayate3", "ilumia2", "ishar3", "jinna2","keera", "lauriel4", "laville2", "laville", "liliana4", "lubu2", "mganga2", "murad5","nakroth4", "omen2", "paine", "preyta", "qi2", "quillen4", "rouie2", "rouie","skud2", "taara", "telannas4", "valhein3", "valhein2", "violet5", "violet4", "yena3","yena2", "zata", "zata2", "enzo", "hayate2", "krixi2", "krizziz", "murad4","volkath2", "volkath", "wukong2", "arduin2", "mina2", "zuka2", "wisp2", "errol2","ishar2", "lubu&diaochan", "maloch", "ormarr", "thane", "tulen&butterfly", "ishar", "tulen3","butterfly", "lauriel3", "liliana3", "nakroth3", "baldum", "lauriel2", "celica", "annette3","capheny2", "gildur2", "quillen2", "sephera2", "ryoma2", "tulen2", "tulen1", "qi","liliana2", "murad3", "zephys", "zip2", "airi3", "amily2", "astrid2", "lauriel","nakroth2", "violet3", "airi2", "alice3", "arduin", "elsu2", "ignis", "jinna","joker", "kilgroth", "lubu", "marja", "moren", "payna", "ryoma", "skud","superman", "valhein", "xeniel", "zill", "yena", "zip", "sephera", "aleister","alice2", "annette2", "arthur", "arum", "astrid", "darcy", "batman", "errol","fennik", "flash", "florentino", "gildur", "grakk", "hayate", "kahlii", "mganga","mina", "murad2", "omen", "richter", "rourke", "telannas2", "toro", "violet2","wonderwomen", "roxie", "natalya", "airi", "amily", "annette", "elsu", "ilumia","alice", "zuka", "wisp", "wiro", "veres", "quillen", "lindis", "krixi","murad", "liliana", "enzo", "diaochan", "capheny", "veera", "tulen", "slimz","yorn", "violet", "telannas", "raz", "wukong", "nakroth"]
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  character: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'effect3donbeach': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('background', 'beach-1', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('background', 'beach-1', prefix, command))
            const style = ['beach-1', 'beach-2', 'beach-3', 'beach-4', 'beach-5', 'beach-6']
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  background: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'cutegirlgamer': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('logo', 'style-1', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'style-1', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['style-1', 'style-2', 'style-3', 'style-4', 'style-5', 'style-6', 'style-7', 'style-8', 'style-9', 'style-10', 'style-11', 'style-12']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  logo: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'footballteam': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('logo', 'nau-6', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'nau-6', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['nau-1', 'nau-2', 'nau-3', 'nau-4', 'nau-5', 'nau-6']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  logo: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'beautifulshimmering': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('champion', 'kahlii', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('champion', 'kahlii', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['aleister', 'alice', 'butterfly', 'diaochan', 'kahlii', 'krixi', 'nina', 'nakroth', 'natalya', 'taara', 'thane', 'violet', 'zanis', 'zata', 'airi', 'annette', 'arthur', 'arum', 'astrid', 'elandorr', 'gildur', 'gildur', 'hayate', 'ilumia', 'ishar', 'lauriel', 'lindis', 'nurad', 'quillen', 'rouie', 'sephera', 'yena', 'yorn']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Champion')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  champion: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'pubgcutelogo': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('logo', 'soldier', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'soldier', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['chicken', 'soldier']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  logo: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'elegantrotation': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('logo', 'dragon', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'dragon', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['bull', 'dragon', 'eagle', 'lion', 'rhino', 'tiger']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  logo: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'logogamingassasin': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('logo', 'style-2', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'style-2', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['style-1', 'style-2', 'style-3', 'style-4', 'style-5', 'style-6', 'style-7', 'style-8', 'style-9', 'style-10', 'style-11', 'style-12', 'style-13', 'style-14', 'style-15', 'style-16', 'style-17', 'style-18', 'style-19', 'style-20', 'style-21', 'style-22', 'style-23', 'style-24']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  logo: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'introvideomaker': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('logo', 'tiger', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'tiger', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['bull', 'dragon', 'eagle', 'lion', 'tiger', 'skull']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  logo: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'gaminglogo4fvs': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('logo', 'soldier', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'soldier', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['girl', 'ghost', 'soldier-2', 'swat', 'woman', 'soldier', 'sniper', 'raccoon', 'rabbit', 'panda', 'chicken']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  logo: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'blueneon': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('logo', 'dugong', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'dugong', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['tiger', 'shark', 'dugong', 'bull', 'cheetah', 'lion']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  logo: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'metalmascot': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('logo', 'dragon', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'dragon', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['snakelion', 'dragon', 'ragon-2', 'eagle', 'falcon', 'fox', 'lion', 'panther', 'phoenix', 'phoenix', 'rhino', 'squirrel', 'tiger', 'unicorn', 'wolf', 'zebra']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  logo: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'anonymous2': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('style', 'style1', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'style1', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['style1', 'style2', 'style3']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/anonymous', {
                  text: m1,
                  style: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'lolpentakill': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('style', 'kassadin', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'kassadin', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['jhin', 'syndra', 'olaf', 'nocturne', 'chogath', 'kassadin', 'nidalee', 'fiora', 'fiddlesticks', 'garen', 'irelia-2', 'janna', 'lissandra', 'ezreal', 'riven', 'nalphite', 'khazix', 'nasteryi', 'irelia', 'alista', 'jayce', 'singed', 'galio', 'velkoz', 'yi', 'yasuo', 'sona', 'nidalee-2', 'teemo', 'leesin', 'jinx', 'zed', 'camille', 'brand', 'warwick', 'rengar', 'vayne', 'leona', 'ashe', 'ezreal', 'annie', 'xerath', 'ahri', 'kayle', 'nissfortune', 'caitlyn', 'vi', 'leesin', 'darius', 'fizz', 'bloodyasuo', 'ekko', 'lucian', 'rakanandayah']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  style: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'avatarleagueofking': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('style', 'ishar-4', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'ishar-4', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['arum-6','baldum-3','elandorr-3','hayate-5','ilumia-5','ishar-4','lauriel-8','nax-5','nurad-9','quillen-6','teemee-3','telannas-8','volkath-3','yena-4','yena-5','butterfly-10','laville','laville-2','nakroth-7','omen-6','rouie-2','taara-4','zanis-8','zata','zata-2','elsu-6','fennik-5','liliana-7','paine','paine-2','rouie','astrid-4','ata','ata-2','lauriel-8','omen-5','qi-3','roxie-5','taara-5','violet-12','wukong-7','wukong-8','hayate-4','ishar-3','jinna-5','keera-2','lauriel-7','quillen-5','richter-4','ryoma-6','telannas-8','tulen-9','yorn-8','aleister-4','dirak-2','grakk-5','kerra','raz-5','amily-5','athur-7','arum-5','ishar-2','nax-4','natalya-6','natalya-7','zill-5','diaochan-6','ignis-4','lubu-8','naloch-7','sephera-4','elandorr','elandorr-2','krizziz-2','violet-11','yena-3','arduin-4','enzo-3','errol-3','hayate-3','krixi-7','krizziz','nurad-8','volkath','volkath-2','wisp-4','wukong-6','celica','gildur-4','ishar','nurad-7','quillen-4','tulen-8','lauriel-6','qi','qi-2','darcy-3','florentino-3','noren-3','ryoma-5','sephera-3','annette-4','capheny-3','elsu-5','narja','veres-3','violet-10','zip','zip-2','diaochan-5','enzo-2','lubu-7','nganga-4','payna-3','roxie-4','violet-9','zanis-7','zephys-6','enzo','liliana-6','lindis-5','xeniel-5','airi-9','errol-2','yena-2','zuka-8','notos','chaugnar','kahlii','lubo','nina','krixi','zanis-3','jinna','fennik','airi','ormarr','toro','butterfly','nakroth','gildur','omega','natalya','lumburr','yorn','dieu-thuyen','nganga','grankk-2','azzenka','alice','violet','violet2','butterfly2','krixi2','natalya2','taara','ormarr2','valhein','zephys','nakroth2','aleister','payna','wukong','naloch','kricnak','slimz2','cresht','slimz','dieu-thuyen2','thane-2','preyta','fennik-2','raz','preyta-2','payna-2','illumia','nortos-2','yorn-2','violet-3','valhein-2','taara-2','skud-1','skud','natalya-3','lu-bu','jinna-2','illumia-2','butterfly-4','batman','zuka-2','airi-2','zanis','nurad','nurad-2','nina-2','lauriel-2','ignis-2','ignis','grakk','airi-3','zill-2','zill','zanis-2','yorn-3','veera-3','veera-2','telannas','superman','naloch-2','krixi-3','butterfly-5','violet-5','veera-4','telannas-2','illumia-3','batman-2','arduin-2','arduin','wukong-2','nakroth-3','arthur','ryoma-2','ryoma','raz-2','nganga-2','astrid-2','astrid','zanis-4','xeniel','wukong-3','noren','lauriel-3','joker','xeniel-2','telannas-3','nurad-3','lubu-4','lubu-3','kriknak-2','kahlii-2','diaochanlubu','chaugnar-2','azzenka-2','alice-2','aleister-2','noren-2','lubu-5','lauriel-4','kilgoth','gildur-2','fennik-3','zephys-3','wonderwoman','superman-2','slimz-3','natalya-4','krixi-5','krixi-4','zephys-2','zanis-5','yorn-4','xeniel-3','wonderwoman-2','violet-4','naloch-3','airi-4','telannas-4','ormarr-4','ormarr-3','nakroth-4','kilgroth-2','kahlii-3','grakk-3','natalya-5','fennik-4','valhein-3','teemee-2','teemee','lindis','zuka-3','tulen','toro-2','nina-3','naloch-4','lumburr-2','lindis-2','joker-2','grakk-4','gildur-3','aleister-3','tulen-2','toro-3','taara-3','omen-2','omen','zill-3','arthurtelannas','zuka-4','nakroth-5','nax','liliana','raz-3','liliana-2','nax-2','krixnak-3','joker-3','chaugnar-3','wisp','ryoma-3','batman-3','airi-6','tulen-3','cresht-3','cresht-2','astris-3','flash','arum-2','arum','butterfly-6','alice-3','xeniel-4','valhein-4','tulen-4','rourke-2','rourke','nurad-4','nax-3','wisp-2','narja-2','narja','zuka-5','jinna-3','butterfly-7','arthur-5','valhein-5','superman-3','liliana-3','kilgroth','wirosabaleng','roxie-2','roxie','wukong-4','baldum-2','baldum','zephys-4','annette-2','annette','telannas-6','raz-4','nurad-6','nurad-5','jinna-4','amily','ybneth-2','ybneth','ilumia-4','amily-2','xeniel-5','veera-5','liliana-4','flash-2','arthur-2','omen-3','lindis-3','elsu-2','elsu','richter-2','richter','nina-4','thane-3','ryoma-4','quillen-2','quillen','lauriel-5','arum-3','wisp-3','violet-7','sephera-2','sephera','naloch-5','krixi-6','alice-4','tulen-5','skud-3','rourke-3','nakroth-6','florentino-2','florentino','elsu-3','butterfly-8','amily-3','zuka-7','zuka-6','yorn-7','yorn-6','veres-2','veres','naloch-6','cresht-4','azzenka-3','airi-7','zephys-5','yorn-5','violet-8','valhein-6','thane-4','roxie-3','nakroth-7','kahlii-4','elsu-4','darcy-2','darcy','capheny','zill-4','hayate-2','hayate','cresht-5','annette-3','amily-4','tulen-7','telannas-7','omen-4','lindis-4','liliana-5','ignis-3','errol','capheny-2','arum-4','zanis-6','wukong-5','thane-5','slimz-4','skud-4','richter-3','quillen-3','azzenka-4','arduin-3','airi-8']
           if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  style: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'avatarff': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('character', 'antonio', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'antonio', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['a124', 'alok', 'alvaro', 'andrew', 'antonio', 'caroline', 'ford', 'hayato', 'joseph', 'kelly', 'kla', 'laura', 'naxim', 'niguel', 'nisa', 'noco', 'nikita', 'notora', 'olivia', 'paloma', 'rafael', 'shani', 'steffie', 'wukong']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  character: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'overwatchwallpaper': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('character', 'brigitte', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'brigitte', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['ana', 'ashe', 'ashe-2', 'baptiste', 'baptiste-2', 'brigitte', 'dva', 'dva-2', 'genji', 'hanzo', 'junkrat', 'lucio', 'nccree', 'nei', 'nercy', 'nercy-2', 'nercy-3', 'noira', 'pharah', 'reaper', 'roadhog', 'soldier-76', 'sombra', 'sombra-2', 'symmetra', 'tracer', 'tracer-2', 'widowmaker', 'widowmaker-2', 'zarya']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  character: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'rovwallpaperhd': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('hero', 'keera', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('hero', 'keera', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['alice-5', 'arthur-8', 'dirak-3', 'errol', 'grakk-6', 'keera', 'lorion', 'nina-6', 'tulen-10', 'yena', 'zip-3', 'zuka-9', 'arum-6', 'baldum-3', 'elandorr-3', 'hayate-5', 'ilumia-5', 'ishar-4', 'lauriel-8', 'nax-5', 'nurad-9', 'quillen-6', 'teemee-3', 'telannas-8', 'yena-4', 'yena-5', 'butterfly-10', 'laville', 'laville-2', 'nakroth-7', 'omen-6', 'rouie-2', 'taara-5', 'zanis-8', 'zata', 'zata-2', 'capheny-4', 'elsu-6', 'fennik-5', 'liliana-7', 'paine', 'paine-2', 'rouie', 'astrid-4', 'ata', 'ata-2', 'lauriel-8', 'omen-5', 'qi-3', 'roxie-5', 'taara-5', 'violet-12', 'wukong-7', 'wukong-8', 'hayate-4', 'ishar-3', 'jinna-5', 'lauriel-7', 'quillen-5', 'richter-4', 'ryoma-6', 'telannas-8', 'tulen-9', 'yorn-7', 'aleister-4', 'dirak', 'dirak-2', 'grakk-5', 'kerra', 'raz-4', 'athur-7', 'arum-5', 'ishar-2', 'nax-4', 'natalya-7', 'valhein-7', 'zill-5', 'diaochan-6', 'ignis-4', 'lubu-8', 'naloch-7', 'sephera-4', 'elandorr', 'elandorr-2', 'krizzix', 'krizzix-2', 'violet-11', 'yena-3', 'arduin-4', 'enzo-3', 'errol-3', 'hayate-3', 'krixi-7', 'nurad-8', 'volkath', 'volkath-2', 'wisp-4', 'wukong-6', 'gildur-4', 'ishar', 'nurad-7', 'quillen-4', 'tulen-8', 'lauriel-6', 'qi', 'qi-2', 'darcy-3', 'florentino-3', 'noren-3', 'ryoma-5', 'sephera-3', 'annette-4', 'capheny-3', 'elsu-5', 'narja-3', 'veres-3', 'violet-10', 'zip-2', 'zip-3', 'diaochan-5', 'enzo-2', 'lubu-7', 'payna-4', 'roxie-4', 'violet-9', 'zanis-7', 'zephys-6', 'enzo', 'liliana-6', 'lindis-5', 'xeniel-5', 'airi-9', 'errol-2', 'yena-2', 'zuka-8', 'zephys-3', 'zephys-2', 'zephys', 'zanis-5', 'zanis-4', 'zanis-3', 'zanis-2', 'zanis', 'violet-5', 'violet-4', 'violet-3', 'violet-2', 'violet', 'veera-4', 'veera-3', 'veera-2', 'valhein-3', 'valhein-2', 'valhein', 'thane-2', 'thane', 'nina-3', 'nina-2', 'nina', 'nganga-2', 'nganga', 'lubu-5', 'lubu-4', 'lubu-3', 'lubu-2', 'lubu', 'krixi-5', 'krixi-4', 'krixi-3', 'krixi-2', 'krixi', 'kahlii-3', 'kahlii-2', 'kahlii', 'diaochan-3', 'diaochan-2', 'diaochan', 'chaugnar', 'butterfly-5', 'butterfly-4', 'butterfly-2', 'butterfly', 'yorn-4', 'yorn-3', 'yorn-2', 'yorn', 'wukong-3', 'wukong-2', 'wukong', 'toro-2', 'toro', 'taara-2', 'taara', 'slimz-3', 'slimz-2', 'slimz', 'payna-2', 'payna', 'ormarr-4', 'ormarr-3', 'ormarr-2', 'kaisa-2', 'ormarr', 'natalya-5', 'natalya-4', 'natalya-3', 'natalya-2', 'natalya', 'nakroth-4', 'nakroth-3', 'nakroth-2', 'nakroth', 'naloch-3', 'naloch-2', 'naloch', 'lumburr', 'kriknak-2', 'kriknak', 'jinna-2', 'jinna', 'grakk-3', 'grakk-2', 'grakk', 'gildur-2', 'gildur', 'fennik-4', 'fennik-3', 'fennik-2', 'fennik', 'cresht', 'azzenka-2', 'azzenka', 'arthur-3', 'arthur-2', 'arthur', 'alice-2', 'alice', 'aleister-2', 'aleister', 'zuka-2', 'zuka', 'zill-2', 'zill', 'xeniel-2', 'xeniel', 'wonderwoman-2', 'wonderwoman', 'telannas-4', 'telannas-3', 'telannas-2', 'telannas', 'superman-2', 'superman', 'skud-2', 'skud', 'ryoma-2', 'ryoma', 'preyta-3', 'preyta-2', 'preyta', 'nurad-3', 'nurad-2', 'nurad', 'noren-2', 'noren', 'lauriel-4', 'lauriel-3', 'lauriel-2', 'lauriel', 'kilgroth-2', 'kilgroth', 'joker', 'illumia-3', 'illumia-2', 'illumia', 'ignis-2', 'ignis', 'batman-2', 'batman', 'astrid-2', 'astrid', 'arduin-2', 'arduin', 'airi-5', 'airi-4', 'airi-3', 'airi-2', 'airi', 'teemee-2', 'teemee', 'zuka-3', 'tulen', 'raz-2', 'raz', 'naloch-4', 'lumburr-2', 'lindis-2', 'joker-2', 'grakk-4', 'gildur-3', 'toro-3', 'omen-2', 'omen', 'zuka-4', 'tulen-2', 'nakroth-5', 'nax', 'liliana', 'zill-3', 'raz-3', 'liliana-2', 'tulen-3', 'telannas-5', 'taara-3', 'ryoma-3', 'nax-2', 'kriknak-3', 'flash', 'cresht-3', 'cresht-2', 'arthur-4', 'aleister-3', 'airi-6', 'arum-2', 'arum', 'wisp-2', 'wisp', 'rourke-2', 'rourke', 'narja-2', 'narja', 'butterfly-6', 'batman-3', 'astris-3', 'jinna-3', 'butterfly-7', 'arthur-5', 'valhein-4', 'superman-3', 'liliana-3', 'kilgroth-3', 'roxie-2', 'roxie', 'wukong-4', 'baldum-2', 'baldum', 'zephys-4', 'annette-2', 'annette', 'alice-3', 'telannas6', 'raz-4', 'nurad-6', 'nurad-5', 'jinna-4', 'amily', 'ybneth-2', 'ybneth', 'ilumia-4', 'amily-2', 'xeniel-3', 'veera-5', 'liliana4', 'flash-2', 'arthur-6', 'omen-3', 'lindis-3', 'elsu-2', 'elsu', 'richter-2', 'richter', 'nina-4', 'wirosableng', 'thane-3', 'ryoma-4', 'quillen-2', 'quillen', 'lauriel-5', 'arum-3', 'wisp-3', 'violet-7', 'sephera-2', 'sephera', 'naloch-5', 'krixi-6', 'alice-4', 'tulen-5', 'skud-3', 'rourke-3', 'nakroth-6', 'florentino-2', 'florentino', 'elsu-3', 'butterfly-8', 'amily-3', 'zuka-7', 'zuka-6', 'yorn-6', 'yorn-5', 'veres-2', 'veres', 'naloch-6', 'cresht-4', 'azzenka-3', 'airi-7', 'zephys-5', 'yorn-7', 'violet-8', 'valhein-5', 'tulen-6', 'thane-4', 'roxie-3', 'nakroth-7', 'kahlii-4', 'elsu-4', 'darcy-2', 'darcy', 'capheny', 'zill-4', 'hayate-2', 'hayate', 'cresht-5', 'annette-3', 'amily-4', 'tulen-7', 'telannas-7', 'omen-4', 'lindis-4', 'liliana-5', 'ignis-3', 'errol', 'capheny-2', 'arum-4', 'zanis-6', 'wukong-5', 'thane-5', 'slimz-4', 'skud-4', 'richter-3', 'quillen-3', 'azzenka-4', 'arduin-3', 'airi-8']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Hero')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  hero: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'rovwallpaper': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('avatar', 'lorion', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('avatar', 'lorion', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['alice-5', 'arthur-8', 'dirak-3', 'errol', 'grakk-6', 'keera-2', 'lorion', 'grakk-6', 'keera-2', 'lorion', 'nina-6', 'tulen-10', 'yena', 'zip-3', 'zuka-9', 'dextra', 'dextra-2', 'lindis-6', 'nurad-10', 'nakroth-9', 'quillen-7', 'sephera-5', 'yorn-8', 'airi-10', 'amily-6', 'astrid-6', 'ata-3', 'capheny-5', 'darcy-4', 'diaochan-8', 'hayate-6', 'lauriel-10', 'laville-3', 'rourke-4', 'ryoma-7', 'sinestrea', 'sinestrea-2', 'telannas-9', 'thorne', 'thorne-2', 'veres-4', 'yena-6', 'zephys-7', 'allain', 'allain-2', 'butterfly-12', 'kahlii-6', 'nakroth-8', 'preyta-4', 'taara-7', 'valhein-8', 'arum-6', 'baldum-3', 'elandorr-3', 'hayate-5', 'ilumia-5', 'ishar-4', 'lauriel-8', 'nax-5', 'nurad-9', 'quillen-6', 'teemee-3', 'telannas-8', 'yena-4', 'yena-5', 'butterfly-10', 'laville', 'laville-2', 'nakroth-7', 'omen-6', 'rouie-2', 'taara-6', 'zanis-8', 'zata', 'zata-2', 'capheny-4', 'elsu-6', 'fennik-5', 'liliana-7', 'paine', 'paine-2', 'rouie', 'astrid-4', 'ata', 'ata-2', 'lauriel-8', 'omen-5', 'qi-3', 'taara-5', 'violet-12', 'wukong-7', 'wukong-8', 'hayate-4', 'ishar-3', 'jinna-5', 'kerra-2', 'lauriel-7', 'quillen-5', 'richter-4', 'ryoma-6', 'telannas-8', 'tulen-9', 'yorn-7', 'aleister-4', 'dirak', 'dirak-2', 'grakk-5', 'keera', 'raz-4', 'ishar-2', 'nax-4', 'valhein-7', 'zill-5', 'arthur-7', 'rum-5', 'lubu-8', 'naloch-7', 'sephera-4', 'diaochan-6', 'ignis-4', 'elandorr', 'elandorr-2', 'krizzix', 'krizzix-2', 'violet-11', 'yena-3', 'arduin-4', 'enzo-3', 'errol-3', 'hayate-3', 'nurad-8', 'volkath', 'volkath-2', 'wisp-4', 'wukong-6', 'celica', 'gildur-4', 'ishar', 'nurad-7', 'quillen-4', 'tulen-8', 'qi', 'qi-2', 'darcy-3', 'florentino-3', 'noren-3', 'ryoma-5', 'sephera-3', 'elsu-5', 'narja-3', 'annette-4', 'capheny-3', 'veres-3', 'zip-2', 'zip', 'diaochan-5', 'enzo-2', 'lubu-7', 'payna-3', 'roxie-4', 'violet-9', 'zanis-7', 'zephys-6', 'enzo', 'liliana-6', 'lindis-5', 'xeniel-5', 'errol', 'yena-2', 'zuka-8', 'valhein', 'violet', 'airi', 'skud', 'zanis', 'zephis', 'butterfly', 'wukong', 'taara', 'nakroth', 'prayta', 'yorn', 'natalya', 'thane', 'toro', 'ormarr', 'omega', 'nina', 'nganga', 'lubu2', 'lubu', 'kahlii-2', 'kahlii', 'fennik-2', 'fennik', 'diaochan', 'cresht', 'azzenka', 'aleister', 'zuka2', 'zuka', 'payna-2', 'payna', 'nakroth-2', 'nortos-2', 'nortos', 'kriknak', 'jinna-2', 'jinna', 'batman', 'airi-2', 'violet-3', 'violet-2', 'skud-2', 'raz-2', 'raz', 'ignis-2', 'ignis', 'gildur', 'butterfly-4', 'butterfly-3', 'zanis-2', 'nurad', 'yorn-2', 'slimz', 'ormarr-2', 'nurad-2', 'nina-2', 'lauriel-2', 'grakk-2', 'grakk', 'diaochan-2', 'airi-3', 'zill-2', 'zill', 'zanis-3', 'yorn-3', 'veera-3', 'veera-2', 'thane-2', 'telannas', 'superman', 'naloch-2', 'krixi-3', 'butterfly-5', 'violet-5', 'veera-4', 'telannas-2', 'taara-2', 'joker', 'ilumia-2', 'batman-2', 'arduin-2', 'arduin', 'wukong-2', 'nakroth-3', 'ilumia-3', 'arthur', 'ryoma-2', 'ryoma', 'astrid-2', 'astrid', 'zephis-2', 'natalya-3', 'natalya-2', 'ubu-3', 'chaugnar', 'azzenka-2', 'zanis-4', 'wukong-3', 'noren', 'lubu-4', 'lauriel-3', 'aleister-2', 'nurad-3', 'noren-2', 'lubu-5', 'kilgroth', 'gildur-2', 'fennik-3', 'lauriel-4', 'zephys-3', 'xeniel-2', 'wonderwomen', 'superman-2', 'slimz-2', 'natalya-4', 'krixi-5', 'krixi-4', 'zanis-5', 'yorn-4', 'xeniel', 'wonderwoman-2', 'violet-4', 'preyta2', 'diaochan-3', 'airi-4', 'valhein-4', 'preyta-3', 'nina-3', 'alice-2', 'airi-5', 'telannas-3', 'ormarr-4', 'ormarr-3', 'nakroth-4', 'kilgroth-2', 'kahlii-3', 'grakk-3', 'natalya-5', 'fennik-4', 'teemee-2', 'teemee', 'lindis', 'zuka-3', 'valhein-2', 'tulen', 'toro-2', 'naloch-4', 'naloch-3', 'lumburr', 'lindis-2', 'grakk-4', 'gildur-3', 'toro-3', 'omen-2', 'omen', 'zill-3', 'telannas-', 'athur-4', 'zuka-4', 'tulen-2', 'nakroth-5', 'nax', 'liliana', 'raz-3', 'liliana-2', 'tulen-3', 'nax-2', 'flash', 'cresht-3', 'cresht-2', 'chaugnar-2', 'aleister-3', 'ryoma-3', 'kriknak-3', 'airi-6', 'wisp-2', 'wisp', 'batman-3', 'arum-2', 'arum', 'butterfly-6', 'rourke-2', 'rourke', 'narja-2', 'narja', 'taara-3', 'jinna-3', 'butterfly-7', 'arthur-4', 'arthur-3', 'arthur-2', 'valhein-3', 'superman-3', 'liliana-3', 'kilgroth-3', 'roxie-2', 'roxie', 'wukong-4', 'baldum-2', 'baldum', 'zephys-4', 'annette-2', 'annette', 'alice-3', 'telannas6', 'raz-4', 'nurad-6', 'nurad-5', 'jinna-4', 'amily', 'ybneth-2', 'ybneth', 'ilumia-4', 'astrid-3', 'amily-2', 'liliana-4', 'xeniel-5', 'veera-5', 'flash-2', 'athur-5', 'omen-3', 'lindis-3', 'elsu-2', 'elsu', 'richter-2', 'richter', 'nina-4', 'wirosableng', 'thane-3', 'ryoma-4', 'quillen-2', 'quillen', 'lauriel-5', 'arum-3', 'wisp-3', 'violet-7', 'sephera-2', 'sephera', 'naloch-5', 'krixi-6', 'alice-4', 'tulen-5', 'skud-3', 'rourke-3', 'nakroth-6', 'florentino-2', 'florentino', 'elsu-3', 'utterfly-8', 'amily-3', 'zuka-7', 'zuka-6', 'yorn-6', 'yorn-5', 'veres-2', 'veres', 'naloch-6', 'cresht-4', 'azzenka-3', 'airi-7', 'zephys-5', 'yorn-7', 'violet-8', 'valhein-5', 'tulen-6', 'thane-4', 'roxie-3', 'nakroth-7', 'kahlii-4', 'elsu-4', 'darcy2', 'darcy', 'capheny', 'zill-4', 'hayate-2', 'hayate', 'cresht-5', 'annette-3', 'amily-4', 'tulen-7', 'telannas-7', 'omen-4', 'lindis-4', 'liliana-5', 'ignis-3', 'errol', 'capheny-2', 'arum-4', 'zanis-6', 'wukong-5', 'thane-5', 'slimz-4', 'skud-4', 'richter-3', 'quillen-3', 'azzenka-4', 'arduin-3', 'airi-8']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Avatar')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  avatar: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'beautifulgalaxylol': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('style', 'akali-2', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'akali-2', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['ashe-2', 'darius-2', 'hecarim-2', 'akali-2', 'jhin-2', 'jinx-2', 'kaisa-2', 'khazix-2', 'nordekaiser-2', 'pantheon-2', 'qiyana', 'rammus-2', 'renekton-2', 'tahmkench-2', 'teemo-2', 'udyr-2', 'yasuo-2', 'yuumi', 'drmundo', 'zyra', 'zoe', 'zilean', 'ziggs', 'zed', 'zac', 'yorick', 'yasuo', 'xinzhao', 'xerath', 'xayah', 'wukong', 'warwick', 'volibear', 'vladimir', 'viktor', 'vi', 'velkoz', 'veigar', 'vayne', 'varus', 'urgot', 'udyr', 'twitch', 'twistedfate', 'tryndamere', 'trundle', 'tristana', 'thresh', 'teemo', 'taric', 'talyah', 'talon', 'tahmkench', 'syndra', 'swain', 'soraka', 'sona', 'skarner', 'sivir', 'sion', 'singed', 'shyvana', 'shen', 'shaco', 'sejuani', 'ryze', 'rumble', 'riven', 'rengar', 'renekton', 'reksai', 'rammus', 'rakan', 'quinn', 'poppy', 'pantheon', 'ornn', 'orianna', 'olaf', 'nunu', 'nocturne', 'nidalee', 'nautilus', 'nasus', 'nami', 'norgana', 'norderkaiser', 'nissfortune', 'nasteryi', 'nalzahar', 'nalphite', 'lux', 'lulu', 'lucian', 'lissandra', 'leona', 'leesin', 'leblanc', 'kogmaw', 'kled', 'kindred', 'khazix', 'kennen', 'kayn', 'kayle', 'katarina', 'kassadin', 'karthus', 'karma', 'kalista', 'kaisa', 'jinx', 'jhin', 'jayce', 'jax', 'jarvaniv', 'janna', 'ivern', 'irelia', 'illaoi', 'heimerdinger', 'hecarim', 'graves', 'gragas', 'gnar', 'garen', 'gangplank', 'galio', 'fizz', 'fiora', 'fiddlesticks', 'ezreal', 'evelynn', 'elise', 'ekko', 'draven', 'diana', 'darius', 'corki', 'chogath', 'cassiopeia', 'camille', 'caitlyn', 'braum', 'brand', 'blitzcrank', 'bard', 'azir', 'aurelionsol', 'ashe', 'annie', 'anivia', 'amumu', 'alistar', 'akali', 'ahri', 'aatrox', 'sylas', 'pyke', 'nunuwillump', 'neeko', 'norgana-2', 'kayle-2', 'akali-2', 'aatrox-2']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  style: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'crossfirecover': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('character', 'blthefates', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'blthefates', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['spop', 'swat', 'switcher', 'redpower', 'whitenurse', 'blthefates', 'jns', 'natahari', 'dx', 'nursezombie', 'omohswat', 'sfg', 'fox', 'bllaswat', 'bljtf', 'grjtf', 'blarch', 'hero-4', 'gsg9', 'hero-3', 'opes', 'abf', 'shadows', 'devilhunter']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  character: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'lolwallpaper': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('wallpaper', 'braum', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('wallpaper', 'braum', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['aatrox-2', 'arhi-2', 'akali-3', 'akali-2', 'braum', 'camille', 'evelynn-5', 'ezreal-2', 'fizz', 'graves-2', 'irelia-3', 'irelia-2', 'jayce-2', 'jhin-2', 'jinx-2', 'kaisa', 'katarina-2', 'lux-2', 'neeko', 'orianna-2', 'pantheon', 'pyke', 'qiyana', 'riven-2', 'sylas', 'teemo-2', 'viktor', 'vladimir', 'warwick-2', 'yasuo-3', 'yasuo-2', 'zoe', 'nasteryi', 'lux', 'lulu', 'leesin', 'jinx', 'jhin', 'ezreal', 'janna', 'ashe', 'arhi', 'poppy', 'nissfortune', 'soraka', 'syndra', 'zyra', 'yasuo', 'vi', 'vayne', 'taliyah', 'sona', 'sivir', 'shyvana', 'riven', 'quinn', 'nidalee', 'norgana', 'leblanc', 'kennen', 'karma', 'irelia', 'fiora', 'elise', 'diana', 'caitlyn', 'zed', 'xayah', 'tristana', 'talon', 'shen', 'rakan', 'orianna', 'nami', 'kayn', 'kayle', 'katarina', 'kalista', 'ekko', 'azir', 'udyr', 'thresh', 'tf', 'teemo', 'ryze', 'nocturne', 'lucian', 'khazik', 'graves', 'darius', 'annie', 'akali', 'zilean', 'ziggs', 'yorick', 'warwick', 'nasteryi-2', 'janna-2', 'hecarim', 'gangplank', 'fiora-2', 'draven', 'brand', 'aatrox', 'velkoz', 'shaco', 'rengar', 'reksai', 'ornn', 'leona', 'kindred', 'jayce', 'jax', 'jarvan-iv', 'garen', 'xinzhao', 'nasus', 'kled', 'evelynn-4', 'evelynn-3', 'evelynn-2', 'evelynn', 'cassiopeia', 'zac', 'xerath', 'wukong', 'velkoz-2', 'veigar', 'varus', 'urgot', 'twich', 'kassadin', 'elise-2', 'annie-2', 'alistar']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Wallpaper')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  wallpaper: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'coverdota2': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar ??🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('heroes', 'warlord', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('heroes', 'warlord', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['void', 'riki', 'lycan', 'ursa', 'zeus', 'dragonkinght', 'warlord', 'phantomassassin', 'bountyhunter', 'antimage', 'spectre', 'luna', 'vengerfulspirit', 'undying', 'tusk', 'tinker', 'shadowfiend', 'sandking', 'nightstalker', 'nagasiren', 'nirana', 'neepo', 'lina', 'juggernaut', 'huskar', 'emberspirit', 'emberspirit', 'emberspirit', 'earthshaker', 'drowranger', 'clockwerk', 'bristleback', 'bloodseeker', 'axe']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Heroes')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  heroes: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
        break
         case 'coverleagueofking': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('character', 'ngangar', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'ngangar', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['thane', 'orrmarr', 'omega', 'nakroth', 'nina', 'ngangar', 'gildur', 'dieuthuyen', 'chaugnar', 'butterfly', 'azzenka', 'alice', 'lubo', 'kriknak-2', 'natalya-2', 'trieu-van', 'taara-2', 'naloch', 'kriknak', 'natalya', 'taara', 'ngo-khong', 'airi', 'butterfly-2', 'butterfly-3', 'kahlii', 'krixi', 'toro', 'grakk', 'ilumia', 'zephys', 'veera-2', 'violet', 'preyta-2', 'violet-2', 'valhein', 'yorn', 'veera', 'notos', 'valhein-2', 'preyta', 'illumia-2', 'fennik-2', 'lumburr', 'fennik', 'nakroth-2', 'krixi-2', 'gildur2']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  character: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'avatar3q360': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('avatar', 'truong_phi', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('avatar', 'truong_phi', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['tieu_kieu', 'luu_bi', 'truong_oanh_oanh', 'truong_phi', 'tu_ma_y', 'van_uong', 'hoang_nguyet_anh', 'hoang_nguyet_anh2', 'hoang_trung', 'hua_chu', 'truong_giac', 'dieu_thuyen']
           if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Avatar')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  avatar: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'coverofwarface': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('character', 'warface', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'warface', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['warface-4', 'warface-3', 'warface-2', 'warface', 'sniper-3', 'sniper-2', 'sniper', 'rifleman', 'nedic-2', 'nedic', 'exosuit', 'engineer']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  character: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'newlolavatar': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('avatar', 'teemo', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('avatar', 'teemo', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['udyr', 'twitch', 'twistedfate', 'trundle', 'teemo', 'swain', 'shyvana', 'shen', 'sejuani', 'renekton', 'reksai', 'rammus', 'zyra', 'zilean', 'ziggs', 'zac', 'xerath', 'warwick', 'vladimir', 'viktor', 'vi', 'velkoz', 'veigar', 'vayne', 'volibear', 'tristana', 'taliyah', 'shaco', 'leblanc', 'jinx', 'graves', 'fizz', 'ekko', 'corki', 'cassiopeia', 'caitlyn', 'blitzcrank', 'bard', 'alistar', 'akali', 'aatrox', 'janna', 'wukong', 'thresh', 'taric', 'talon', 'ryze', 'nordekaiser', 'karma', 'kalista', 'irelia', 'gnar', 'garen', 'galio', 'soraka', 'sona', 'sivir', 'riven', 'quinn', 'nocturne', 'nami', 'lux', 'kindred', 'khazix', 'katarina', 'jarvan', 'fiora', 'diana', 'aurelionsol', 'ashe', 'ahri', 'varus', 'syndra', 'nidalee', 'kennen', 'jhin', 'zed', 'yasuo', 'rengar', 'lucian', 'ezreal', 'azir', 'annie', 'leesin', 'nasteryi', 'poppy', 'pantheon', 'orianna', 'nasus', 'norgana', 'nissfortune', 'naokai', 'nalzaha', 'lulu', 'lissandra', 'leona', 'kled', 'jayce', 'jax', 'illaoi', 'xayah', 'rakan', 'gangplank', 'naster_yi2', 'riven2', 'elise', 'darius', 'xayah_rakan', 'katarina2', 'nauthilus', 'hecarim', 'thresh2', 'ashe2', 'xinzhao', 'tryndamere', 'syndra-2', 'sivir-2', 'lissandra2', 'karma-2', 'draven']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Avatar')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  avatar: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'csgocover': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('background', 'famas', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('background', 'famas', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['ump45', 'tec9', 'n4a1', 'xm1014', 'famas', 'np9', 'pp-bizon', 'p2000', 'negev', 'usps', 'dualberettas', 'np5', 'karambit', 'awpdragonlore', 'np7', 'galilar', 'ak-47', 'glock', 'sg-553', 'ak47', 'r8revolver', 'aug', 'butterflyknife', 'deserteagle', 'gsg9', 'p90asiimov', 'awphawking', 'n4a4', 'sas', 'awpasiimov', 'ssg08bitw', 'sg553ds', 'r8fade', 'p90ed', 'n4a1sdecimator', 'n4a1howl', 'karambitds', 'flipknifemf', 'awmmedusa', 'augaa', 'ak47vulcan', 'ak47fs']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  background: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'coverloknew': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('hero', 'hayate-5', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('hero', 'hayate-5', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['arum-6', 'baldum-3', 'elandorr-3', 'hayate-5', 'ilumia-5', 'ishar-4', 'lauriel-8', 'nax-5', 'nurad-9', 'quillen-5', 'teemee-3', 'telannas-6', 'volkath-3', 'yena-4', 'yena-5', 'butterfly-10', 'laville', 'laville-2', 'nakroth-7', 'omen-6', 'rouie-2', 'taara-4', 'zanis-8', 'zata', 'zata-2', 'capheny-4', 'lsu-6', 'fennik-5', 'liliana-7', 'paine', 'paine-2', 'rouie', 'astrid-4', 'ata', 'ata-2', 'lauriel-8', 'omen-5', 'qi-3', 'roxie-5', 'taara-5', 'violet-12', 'wukong-7', 'wukong-8', 'hayate-4', 'ishar-4', 'jinna-5', 'kerra-2', 'lauriel-7', 'nina-5', 'quillen-5', 'richter-4', 'ryoma-6', 'telannas-8', 'tulen-9', 'yorn-8', 'aleister-4', 'dirak', 'dirak-2', 'grakk-5', 'kerra', 'raz-4', 'amily-5', 'athur-7', 'arum-5', 'ishar-2', 'nax-4', 'natalya-7', 'valhein-7', 'zill-5', 'diaochan-6', 'ignis-4', 'lubu-8', 'naloch-7', 'sephera-4', 'elandorr', 'elandorr-2', 'krizzix', 'krizzix-2', 'violet-11', 'yena-3', 'arduin-4', 'enzo-3', 'errol-3', 'hayate-3', 'krixi-7', 'nurad-7', 'volkath', 'volkath', 'volkath-2', 'wisp-4', 'wukong-6', 'celica', 'gildur-4', 'ishar', 'nurad-7', 'quillen-4', 'tulen-8', 'lauriel-6', 'qi', 'qi-2', 'darcy', 'florentino-3', 'noren-3', 'ryoma-5', 'sephera-3', 'annettte-4', 'capheny-3', 'elsu-5', 'narja-3', 'vilolet-10', 'violet-10', 'zip-2', 'zip-2a', 'airi-9', 'diaochan-5', 'enzo-2', 'lubu-7', 'nganga-4', 'payna-3', 'roxie-4', 'violet-9', 'zanis-7', 'zephys-6', 'enzo', 'liliana-6', 'lindis-5', 'xeniel-5', 'airi-9', 'errol-2', 'yena', 'yena-2', 'zuka-8', 'yorn', 'violet', 'zanis', 'thane', 'slimz', 'skud', 'preyta', 'payna', 'nakroth', 'nina', 'naloch', 'illumia', 'krixi', 'diaochan', 'butterfly', 'veera', 'valhein', 'toro', 'taara', 'raz', 'ormarr', 'nganga', 'lubu', 'kriknak', 'kahlil', 'grakk', 'gildur', 'alice', 'omega', 'wukong', 'natalya', 'nortos', 'cresht', 'airi', 'aleister', 'lumburr', 'zephis', 'violet-2', 'jinna', 'chaugnar', 'azzenka', 'valhein-2', 'zanis-2', 'skud-2', 'payna-2', 'natalya-3', 'natalya-2', 'nortos-2', 'krixi-2', 'jinna-2', 'illumia-2', 'butterfly-3', 'butterfly-2', 'yorn-2', 'taara-2', 'nakroth-2', 'lubu2', 'lauriel', 'kahlii-2', 'zuka-2', 'zuka', 'batman', 'airi-2', 'airi-3', 'butterfly-4', 'diaochan-2', 'grakk-2', 'ignis', 'ignis-2', 'lauriel2', 'nina-2', 'nurad', 'nurad-2', 'ormarr-2', 'raz-2', 'slimz2', 'violet-3', 'zill-2', 'zill', 'zanis-3', 'yorn-3', 'veera-3', 'veera-2', 'thane-2', 'telannas', 'superman', 'naloch-2', 'krixi-3', 'butterfly-5', 'violet-5', 'veera-4', 'telannas-2', 'joker', 'illumia-3', 'batman-2', 'arduin-2', 'arduin', 'zephis-2', 'wukong-2', 'ryoma-2', 'ryoma', 'nakroth-3', 'nganga-2', 'azzenka-2', 'astrid-2', 'astrid', 'arthur', 'zanis-4', 'wukong-3', 'noren', 'lubu-4', 'lauriel-3', 'lubu-3', 'chaugnar-2', 'aleister-2', 'xeniel', 'telannas-3', 'preyta-2', 'nurad-3', 'kriknak-2', 'fennik-2', 'diaochanlubu', 'alice-2', 'noren-2', 'lubu-5', 'lauriel-4', 'kilgroth', 'gildur-2', 'fennik-3', 'zephys-3', 'xeniel-2', 'xeniel-2', 'wonderwoman', 'supeman-2', 'slimz-3', 'natalya-4', 'krixi-5', 'krixi-4', 'zanis-5', 'yorn-4', 'wonderwoman-2', 'violet-4', 'prayta-3', 'naloch-3', 'airi-4', 'telannas-4', 'ormarr-4', 'ormarr-3', 'nakroth-4', 'kilgroth-2', 'kahlii-3', 'grakk-3', 'airi-5', 'natalya-5', 'fennik-4', 'valhein-4', 'teemee-2', 'teemee', 'lindis', 'zuka-3', 'tulen', 'toro-2', 'nina-3', 'naloch-4', 'lumburr-2', 'lindis-2', 'joker-2', 'grakk-4', 'gildur-3', 'aleister-3', 'tulen-2', 'toro-3', 'taara-3', 'omen-2', 'omen', 'zill-3', 'telannas-5', 'athur-2', 'zuka-4', 'nakroth-5', 'nax', 'liliana', 'raz-3', 'liliana-2', 'nax-2', 'kriknak-3', 'joker-3', 'chaugnar-3', 'wisp', 'ryoma-3', 'batman-3', 'airi-6', 'tulen-3', 'flash', 'cresht-3', 'cresht-2', 'astris-3', 'arum-2', 'arum', 'butterfly-6', 'lice-3', 'xeniel-3', 'valhein-4', 'tulen-4', 'rourke-2', 'rourke', 'nurad-4', 'nax-3', 'wisp-2', 'narja-2', 'narja', 'zuka-5', 'jinna-3', 'butterfly-7', 'arthur-2', 'violet-6', 'valhein-5', 'superman-3', 'liliana-3', 'kilgroth-3', 'diaochan-3', 'wirosabaleng-3', 'roxie-2', 'roxie', 'wukong-4', 'baldum-2', 'baldum', 'zephys-4', 'annette-2', 'annette', 'telannas-6', 'raz-4', 'nurad-6', 'nurad-5', 'jinna-4', 'amily', 'ybneth-2', 'ybneth', 'ilumia-4', 'amily-2', 'xeniel-4', 'veera-5', 'liliana-4', 'flash-2', 'arthur-3', 'omen-3', 'lindis-3', 'elsu-2', 'elsu', 'richter-2', 'richter', 'nina-4', 'thane-3', 'ryoma-4', 'quillen-2', 'quillen', 'lauriel-5', 'arum-3', 'wisp-3', 'violet-7', 'sephera-2', 'sephera', 'naloch-5', 'krixi-6', 'alice-4', 'tulen-5', 'skud-3', 'rourke-3', 'nakroth-6', 'florentino-2', 'florentino', 'elsu-3', 'butterfly-8', 'amily-3', 'zuka-7', 'zuka-6', 'yorn-6', 'yorn-5', 'veres-2', 'veres', 'naloch-6', 'cresht-4', 'azzenka-3', 'airi-7', 'zephys-5', 'yorn-7', 'violet-8', 'valhein-6', 'tulen-6', 'thane-4', 'roxie-3', 'nakroth-7', 'kahlii-4', 'elsu-4', 'darcy-2', 'darcy', 'capheny', 'zill-4', 'hayate-2', 'hayate', 'cresht-5', 'annette-3', 'amily-4', 'veera-6', 'tulen-7', 'telannas-7', 'omen-4', 'lindis-4', 'liliana-5', 'ignis-3', 'errol', 'capheny-2', 'arum-4', 'zanis-6', 'wukong-5', 'thane-5', 'slimz-4', 'skud-4', 'richter-3', 'quillen-3', 'azzenka-4', 'arduin-3', 'airi-8']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Hero')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  hero: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'coverfblol': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('letters', 'pantheon', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('letters', 'pantheon', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['yasuo', 'shen', 'riven', 'pantheon', 'orianna', 'nocturne', 'nami', 'norgana', 'naster-yi', 'lux', 'lucian', 'katarina', 'kalista', 'jinx', 'jhin', 'irelia', 'hecarim', 'graves', 'garen', 'fizz', 'fiora', 'ezreal', 'ekko', 'diana', 'darius', 'cassiopeia', 'caitlyn', 'braum', 'azir', 'ashe', 'warwick', 'thresh', 'leblanc', 'khazix', 'kayn', 'draven', 'zyra', 'zed', 'xayah', 'taric', 'talon', 'sona', 'sivir', 'rengar', 'rakan', 'leesin', 'gnar', 'elise']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Letters')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  letters: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'overwatchcover': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('hero', 'zwidowmaker', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('hero', 'zwidowmaker', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['zwinston', 'zjunkrat', 'zwidowmaker', 'ztracer', 'ztorbjorn', 'zsymmetra', 'zsombra', 'zsoldier76', 'zroadhog', 'zreinhardt', 'zreaper', 'zpharah', 'zorisa', 'zmercy', 'zmei', 'zmccree', 'zlucio', 'zhanzo', 'zgenji', 'zenyatta', 'zdva', 'zbastion', 'zarya', 'zana', 'yzenyatta', 'yzarya', 'ywinston', 'ywidowmaker', 'ytracer', 'ytorbjorn', 'ysymmetra', 'ysombra', 'ysoldier76', 'yroadhog', 'yreinhardt', 'yreaper', 'ypharah', 'yorisa', 'ymercy', 'ymei', 'ymccree', 'ylucio', 'yjunkrat', 'yhanzo', 'ygenji', 'ydva', 'ybastion', 'yana', 'xzenyatta', 'xzarya', 'xwinston', 'xwidowmaker', 'xtracer', 'xtorbjorn', 'xsymmetra', 'xsombra', 'xsoldier76', 'xroadhog', 'xreinhardt', 'xreaper', 'xpharah', 'xorisa', 'xmercy', 'xmei', 'xmccree', 'xlucio', 'xjunkrat', 'xhanzo', 'xgenji', 'xdva', 'xbastion', 'xana', 'wzenyatta', 'wzarya', 'wtracer', 'wtorbjorn', 'wsymmetra', 'wsombra', 'wsoldier76', 'wroadhog', 'wreinhardt', 'wreaper', 'wpharah', 'worisa', 'wmercy', 'wmei', 'wmccree', 'wlucio', 'wjunkrat', 'winston', 'widowmaker', 'whanzo', 'wgenji', 'wdva', 'wbastion', 'wana', 'vzenyatta', 'vzarya', 'vwinston', 'vwidowmaker', 'vtracer', 'vtorbjorn', 'vsymmetra', 'vsombra', 'vsoldier76', 'vroadhog', 'vreinhardt', 'vreaper', 'vpharah', 'vorisa', 'vmercy', 'vmei', 'vmccree', 'vlucio', 'vjunkrat', 'vhanzo', 'vgenji', 'vdva', 'vbastion', 'vana', 'uzenyatta', 'uzarya', 'uwinston', 'uwidowmaker', 'utracer', 'utorbjorn', 'usymmetra', 'usombra', 'usoldier76', 'uroadhog', 'ureinhardt', 'ureaper', 'upharah', 'uorisa', 'umercy', 'umei', 'umccree', 'ulucio', 'ujunkrat', 'uhanzo', 'ugenji', 'udva', 'ubastion', 'uana', 'tzenyatta', 'tzarya', 'twinston', 'twidowmaker', 'tsymmetra', 'tsombra', 'tsoldier76', 'troadhog', 'treinhardt', 'treaper', 'tracer', 'tpharah', 'torisa', 'torbjorn', 'tmercy', 'tmei', 'tmccree', 'tlucio', 'tjunkrat', 'thanzo', 'tgenji', 'tdva', 'tbastion', 'tana', 'szenyatta', 'szarya', 'symmetra', 'swinston', 'swidowmaker', 'stracer', 'storbjorn', 'sroadhog', 'sreinhardt', 'sreaper', 'spharah', 'sorisa', 'sombra', 'soldier76', 'smercy', 'smei', 'smccree', 'slucio', 'sjunkrat', 'shanzo', 'sgenji', 'sdva', 'sbastion', 'sana', 'rzenyatta', 'rzarya', 'rwinston', 'rwidowmaker', 'rtracer', 'rtorbjorn', 'rsymmetra', 'rsombra', 'rsoldier76', 'rrmei', 'rpharah', 'rorisa', 'roadhog', 'rmercy', 'rmccree', 'rlucio', 'rjunkrat', 'rhanzo', 'rgenji', 'reinhardt', 'reaper', 'rdva', 'rbastion', 'rana', 'qzenyatta', 'qzarya', 'qwinston', 'qwidowmaker', 'qtracer', 'qtorbjorn', 'qsymmetra', 'qsombra', 'qsoldier76', 'qroadhog', 'qreinhardt', 'qreaper', 'qpharah', 'qorisa', 'qmercy', 'qmei', 'qmccree', 'qlucio', 'qjunkrat', 'qhanzo', 'qgenji', 'qdva', 'qbastion', 'qana', 'pzenyatta', 'pzarya', 'pwinston', 'pwidowmaker', 'ptracer', 'ptorbjorn', 'psymmetra', 'psombra', 'psoldier76', 'proadhog', 'preinhardt', 'preaper', 'porisa', 'pmercy', 'pmei', 'pmccree', 'plucio', 'pjunkrat', 'pharah', 'phanzo', 'pgenji', 'pdva', 'pbastion', 'pana', 'ozenyatta', 'ozarya', 'owinston', 'owidowmaker', 'otracer', 'otorbjorn', 'osymmetra', 'osombra', 'osoldier76', 'oroadhog', 'orisa', 'oreinhardt', 'oreaper', 'opharah', 'omercy', 'omei', 'omccree', 'olucio', 'ojunkrat', 'ohanzo', 'ogenji', 'odva', 'obastion', 'oana', 'nzenyatta', 'nzarya', 'nwinston', 'nwidowmaker', 'ntracer', 'ntorbjorn', 'nsymmetra', 'nsombra', 'nsoldier76', 'nroadhog', 'nreinhardt', 'nreaper', 'npharah', 'norisa', 'nmercy', 'nmei', 'nmccree', 'nlucio', 'njunkrat', 'nhanzo', 'ngenji', 'ndva', 'nbastion', 'nana', 'mzenyatta', 'mzarya', 'mwinston', 'mwidowmaker', 'mtracer', 'mtorbjorn', 'msymmetra', 'msombra', 'msoldier76', 'mroadhog', 'mreinhardt', 'mreaper', 'mpharah', 'morisa', 'mlucio', 'mjunkrat', 'mhanzo', 'mgenji', 'mercy', 'mei', 'mdva', 'mccree', 'mbastion', 'mana', 'lzenyatta', 'lzarya', 'lwinston', 'lwidowmaker', 'lucio', 'ltracer', 'ltorbjorn', 'lsymmetra', 'lsombra', 'lsoldier76', 'lroadhog', 'lreinhardt', 'lreaper', 'lpharah', 'lorisa', 'lmercy', 'lmei', 'lmccree', 'ljunkrat', 'lhanzo', 'lgenji', 'ldva', 'lbastion', 'lana', 'kzenyatta', 'kzarya', 'kwinston', 'kwidowmaker', 'ktracer', 'ktorbjorn', 'ksymmetra', 'ksombra', 'ksoldier76', 'kroadhog', 'kreinhardt', 'kreaper', 'kpharah', 'korisa', 'kmercy', 'kmei', 'kmccree', 'klucio', 'kjunkrat', 'khanzo', 'kgenji', 'kdva', 'kbastion', 'kana', 'jzenyatta', 'jzarya', 'jwinston', 'jwidowmaker', 'junkrat', 'jtracer', 'jtorbjorn', 'jsymmetra', 'jsombra', 'jsoldier76', 'jroadhog', 'jreinhardt', 'jreaper', 'jpharah', 'jorisa', 'jmercy', 'jmei', 'jmccree', 'jlucio', 'jhanzo', 'jgenji', 'jdva', 'jbastion', 'jana', 'izenyatta', 'izarya', 'iwinston', 'iwidowmaker', 'itracer', 'itorbjorn', 'isymmetra', 'isombra', 'isoldier76', 'iroadhog', 'ireinhardt', 'ireaper', 'ipharah', 'iorisa', 'imercy', 'imei', 'imccree', 'ilucio', 'ijunkrat', 'ihanzo', 'igenji', 'idva', 'ibastion', 'iana', 'hzenyatta', 'hzarya', 'hwinston', 'hwidowmaker', 'htracer', 'htorbjorn', 'hsymmetra', 'hsombra', 'hsoldier76', 'hroadhog', 'hreinhardt', 'hreaper', 'hpharah', 'horisa', 'hmercy', 'hmei', 'hmccree', 'hlucio', 'hjunkrat', 'hgenji', 'hdva', 'hbastion', 'hanzo', 'hana', 'gzenyatta', 'gzarya', 'gwinston', 'gwidowmaker', 'gtracer', 'gtorbjorn', 'gsymmetra', 'gsombra', 'gsoldier76', 'groadhog', 'greinhardt', 'greaper', 'gpharah', 'gorisa', 'gmercy', 'gmei', 'gmccree', 'glucio', 'gjunkrat', 'genji', 'gdva', 'gbastion', 'ganafzenyatta', 'fzarya', 'fwinston', 'fwidowmaker', 'ftracer', 'ftorbjorn', 'fsymmetra', 'fsombra', 'fsoldier76', 'froadhog', 'freinhardt', 'freaper', 'fpharah', 'forisa', 'fmercy', 'fmei', 'fmccree', 'flucio', 'fjunkrat', 'fhanzo', 'fgenji', 'fdva', 'fbastion', 'fana', 'ezenyatta', 'ezarya', 'ewinston', 'ewidowmaker', 'etracer', 'etorbjorn', 'esymmetra', 'esombra', 'esoldier76', 'eroadhog', 'ereinhardt', 'ereaper', 'epharah', 'eorisa', 'emercy', 'emei', 'emccree', 'elucio', 'ejunkrat', 'ehanzo', 'egenji', 'edva', 'ebastion', 'eana', 'dzenyatta', 'dzarya', 'dwinston', 'dwidowmaker', 'dva', 'dtracer', 'dtorbjorn', 'dsymmetra', 'dsombra', 'dsoldier76', 'droadhog', 'dreinhardt', 'dreaper', 'dpharah', 'dorisa', 'dmercy', 'dmei', 'dmccree', 'dlucio', 'djunkrat', 'dhanzo', 'dgenji', 'dbastion', 'dana', 'czenyatta', 'czarya', 'cwinston', 'cwidowmaker', 'ctracer', 'ctorbjorn', 'csymmetra', 'csombra', 'csoldier76', 'croadhog', 'creinhardt', 'creaper', 'cpharah', 'corisa', 'cmercy', 'cmei', 'cmccree', 'clucio', 'cjunkrat', 'chanzo', 'cgenji', 'cdva', 'cbastion', 'cana', 'bzenyatta', 'bzarya', 'bwinston', 'bwidowmaker', 'btracer', 'btorbjorn', 'bsymmetra', 'bsombra', 'bsoldier76', 'broadhog', 'breinhardt', 'breaper', 'bpharah', 'borisa', 'bmercy', 'bmei', 'bmccree', 'blucio', 'bjunkrat', 'bhanzo', 'bgenji', 'bdva', 'bastion', 'bana', 'azenyatta', 'azarya', 'awinston', 'awidowmaker', 'atracer', 'atorbjorn', 'asymmetra', 'asombra', 'asoldier76', 'aroadhog', 'areinhardt', 'areaper', 'apharah', 'aorisa', 'ana', 'amercy', 'amei', 'amccree', 'alucio', 'ajunkrat', 'ahanzo', 'agenji', 'adva', 'abastion', 'zdoomfist', 'ydoomfist', 'xdoomfist', 'wdoomfist', 'vdoomfist', 'udoomfist', 'tdoomfist', 'sdoomfist', 'rdoomfist', 'qdoomfist', 'pdoomfist', 'odoomfist', 'ndoomfist', 'mdoomfist', 'ldoomfist', 'kdoomfist', 'jdoomfist', 'idoomfist', 'hdoomfist', 'gdoomfist', 'fdoomfist', 'edoomfist', 'doomfist', 'cdoomfist', 'bdoomfist', 'adoomfist']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Hero')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  hero: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'crossfirestyle': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('avatar', 'switcher', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('avatar', 'switcher', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['spop', 'switcher', 'switcher-2', 'switcher-3', 'thefates', 'thefates-2', 'thefates-3', 'swat', 'fox', 'star', 'omoh', 'sabel', 'sas', 'sia', 'navy-seals', 'jtf', 'jns', 'laswat', 'sraf', 'shadow', 'nemesis', 'nocha', 'ixions', 'gsg-9', 'ghosty', 'hermes', 'foxu', 'dh', 'angelapt', 'ac']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Avatar')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  avatar: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'avatarlolbyname': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('style', 'katarina-0', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'katarina-0', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['katarina-0', 'zyra-4', 'zyra-3', 'zyra-2', 'zyra-1', 'zyra-0', 'zilean-5', 'zilean-4', 'zilean-3', 'zilean-2', 'zilean-1', 'zilean-0', 'ziggs-5', 'ziggs-4', 'ziggs-3', 'ziggs-2', 'ziggs-1', 'ziggs-0', 'zed-3', 'zed-2', 'zed-10', 'zed-1', 'zed-0', 'zac-2', 'zac-1', 'zac-0', 'yorick-2', 'yorick-1', 'yorick-0', 'yasuo-4', 'yasuo-3', 'yasuo-2', 'yasuo-1', 'yasuo-0', 'xinzhao-6', 'xinzhao-13', 'xinzhao-5', 'xinzhao-4', 'xinzhao-3', 'xinzhao-2', 'xinzhao-1', 'xinzhao-0', 'xerath-4', 'xerath-3', 'xerath-2', 'xerath-1', 'xerath-0', 'xayah-1', 'xayah-0', 'warwick-8', 'warwick-7', 'warwick-6', 'warwick-5', 'warwick-4', 'warwick-3', 'warwick-2', 'warwick-1', 'warwick-0', 'volibear-5', 'volibear-4', 'volibear-3', 'volibear-2', 'volibear-1', 'volibear-0', 'vladimir-7', 'vladimir-6', 'vladimir-5', 'vladimir-4', 'vladimir-3', 'vladimir-2', 'vladimir-1', 'vladimir-0', 'viktor-2', 'viktor-1', 'viktor-0', 'vi-5', 'vi-4', 'vi-3', 'vi-2', 'vi-1', 'vi-0', 'velkoz-3', 'velkoz-2', 'velkoz-1', 'velkoz-0', 'veigar-8', 'veigar-7', 'veigar-6', 'veigar-5', 'veigar-4', 'veigar-3', 'veigar-2', 'veigar-1', 'veigar-0', 'vayne-6', 'vayne-5', 'vayne-4', 'vayne-3', 'vayne-2', 'vayne-1', 'vayne-0', 'vayne-10', 'varus-6', 'varus-5', 'varus-4', 'varus-3', 'varus-2', 'varus-1', 'varus-0', 'urgot-3', 'urgot-2', 'urgot-1', 'urgot-0', 'udyr-4', 'udyr-3', 'udyr-2', 'udyr-1', 'udyr-0', 'twitch-7', 'twitch-6', 'twitch-5', 'twitch-4', 'twitch-3', 'twitch-2', 'twitch-1', 'twitch-0', 'twistedfate-9', 'twistedfate-10', 'twistedfate-8', 'twistedfate-7', 'twistedfate-6', 'twistedfate-5', 'twistedfate-4', 'twistedfate-3', 'twistedfate-2', 'twistedfate-1', 'twistedfate-0', 'tryndamere-9', 'tryndamere-8', 'tryndamere-7', 'tryndamere-6', 'tryndamere-5', 'tryndamere-4', 'tryndamere-3', 'tryndamere-2', 'tryndamere-1', 'tryndamere-0', 'trundle-5', 'trundle-4', 'trundle-3', 'trundle-2', 'trundle-1', 'trundle-0', 'tristana-6', 'tristana-5', 'tristana-4', 'tristana-3', 'tristana-2', 'tristana-1', 'tristana-0', 'tristana-10', 'tristana-11', 'thresh-5', 'thresh-4', 'thresh-3', 'thresh-2', 'thresh-1', 'thresh-0', 'teemo-8', 'teemo-7', 'teemo-6', 'teemo-5', 'teemo-4', 'teemo-3', 'teemo-2', 'teemo-1', 'teemo-0', 'teemo-14', 'taric-4', 'taric-3', 'taric-2', 'taric-1', 'taric-0', 'talon-5', 'talon-4', 'talon-3', 'talon-2', 'talon-1', 'talon-0', 'taliyah-1', 'taliyah-0', 'tahmkench-2', 'tahmkench-1', 'tahmkench-0', 'syndra-4', 'syndra-3', 'syndra-2', 'syndra-1', 'syndra-0', 'swain-3', 'swain-2', 'swain-1', 'swain-0', 'soraka-6', 'soraka-5', 'soraka-4', 'soraka-3', 'soraka-2', 'soraka-1', 'soraka-0', 'sona-6', 'sona-5', 'sona-4', 'sona-3', 'sona-2', 'sona-1', 'sona-0', 'skarner-4', 'skarner-3', 'skarner-2', 'skarner-1', 'skarner-0', 'sivir-7', 'sivir-6', 'sivir-5', 'sivir-4', 'sivir-3', 'sivir-2', 'sivir-1', 'sivir-0', 'sion-5', 'sion-4', 'sion-3', 'sion-2', 'sion-1', 'sion-0', 'singed-8', 'singed-7', 'singed-6', 'singed-5', 'singed-4', 'singed-3', 'singed-2', 'singed-1', 'singed-0', 'shyvana-6', 'shyvana-5', 'shyvana-4', 'shyvana-3', 'shyvana-3', 'shyvana-2', 'shyvana-1', 'shyvana-0', 'shen-6', 'shen-5', 'shen-4', 'shen-3', 'shen-2', 'shen-1', 'shen-0', 'shaco-7', 'shaco-6', 'shaco-5', 'shaco-4', 'shaco-3', 'shaco-2', 'shaco-1', 'shaco-0', 'sejuani-7', 'sejuani-6', 'sejuani-5', 'sejuani-4', 'sejuani-3', 'sejuani-2', 'sejuani-1', 'sejuani-0', 'ryze-10', 'ryze-9', 'ryze-8', 'ryze-7', 'ryze-6', 'ryze-5', 'ryze-4', 'ryze-3', 'ryze-2', 'ryze-1', 'ryze-0', 'rumble-3', 'rumble-2', 'rumble-1', 'rumble-0', 'riven-8', 'riven-7', 'riven-6', 'riven-5', 'riven-4', 'riven-3', 'riven-2', 'riven-1', 'riven-0', 'rengar-3', 'rengar-2', 'rengar-1', 'rengar-0', 'renekton-9', 'renekton-8', 'renekton-7', 'renekton-6', 'renekton-5', 'renekton-4', 'renekton-3', 'renekton-2', 'renekton-1', 'renekton-0', 'reksai-1', 'reksai-2', 'reksai-0', 'rammus-7', 'rammus-6', 'rammus-5', 'rammus-4', 'rammus-3', 'rammus-2', 'rammus-1', 'rammus-0', 'rakan-1', 'rakan-0', 'quinn-4', 'quinn-3', 'quinn-2', 'quinn-1', 'quinn-0', 'poppy-7', 'poppy-6', 'poppy-5', 'poppy-4', 'poppy-3', 'poppy-2', 'poppy-1', 'poppy-0', 'pantheon-8', 'pantheon-7', 'pantheon-6', 'pantheon-5', 'pantheon-4', 'pantheon-3', 'pantheon-2', 'pantheon-1', 'pantheon-0', 'orianna-7', 'orianna-6', 'orianna-5', 'orianna-4', 'orianna-3', 'orianna-2', 'orianna-1', 'orianna-0', 'olaf-6', 'olaf-5', 'olaf-4', 'olaf-3', 'olaf-2', 'olaf-1', 'olaf-0', 'nunu-7', 'nunu-6', 'nunu-5', 'nunu-4', 'nunu-3', 'nunu-2', 'nunu-1', 'nunu-0', 'nocturne-6', 'nocturne-5', 'nocturne-4', 'nocturne-3', 'nocturne-2', 'nocturne-1', 'nocturne-0', 'nidalee-8', 'nidalee-7', 'nidalee-6', 'nidalee-5', 'nidalee-4', 'nidalee-3', 'nidalee-2', 'nidalee-1', 'nidalee-0', 'nautilus-5', 'nautilus-4', 'nautilus-3', 'nautilus-2', 'nautilus-1', 'nautilus-0', 'nasus-6', 'nasus-5', 'nasus-4', 'nasus-3', 'nasus-2', 'nasus-1', 'nasus-0', 'nasus-10', 'nami-7', 'nami-6', 'nami-5', 'nami-4', 'nami-3', 'nami-2', 'nami-1', 'nami-0', 'norgana-6', 'norgana-5', 'norgana-4', 'norgana-3', 'norgana-2', 'norgana-1', 'norgana-0', 'norgana-10', 'norgana-11', 'nordekaiser-4', 'nordekaiser-3', 'nordekaiser-2', 'nordekaiser-1', 'nordekaiser-0', 'nonkeyking-5', 'nonkeyking-4', 'nonkeyking-3', 'nonkeyking-2', 'nonkeyking-1', 'nonkeyking-0', 'nissfortune-9', 'nissfortune-8', 'nissfortune-7', 'nissfortune-6', 'nissfortune-5', 'nissfortune-4', 'nissfortune-3', 'nissfortune-2', 'nissfortune-1', 'nissfortune-0', 'nasteryi-3', 'nasteryi-2', 'nasteryi-1', 'nasteryi-0', 'nasteryi-9', 'nasteryi-5', 'nasteryi-4', 'nasteryi-10', 'naokai-7', 'naokai-6', 'naokai-5', 'naokai-4', 'naokai-3', 'naokai-2', 'naokai-1', 'naokai-0', 'nalzahar-5', 'nalzahar-4', 'nalzahar-3', 'nalzahar-2', 'nalzahar-1', 'nalzahar-0', 'nalphite-7', 'nalphite-6', 'nalphite-5', 'nalphite-4', 'nalphite-3', 'nalphite-2', 'nalphite-1', 'nalphite-0', 'lux-7', 'lux-6', 'lux-5', 'lux-4', 'lux-3', 'lux-2', 'lux-1', 'lux-0', 'lulu-6', 'lulu-5', 'lulu-4', 'lulu-3', 'lulu-2', 'lulu-1', 'lulu-0', 'lucian-6', 'lucian-7', 'lucian-2', 'lucian-1', 'lucian-0', 'lissandra-3', 'lissandra-2', 'lissandra-1', 'lissandra-0', 'leona-9', 'leona-8', 'leona-7', 'leona-6', 'leona-5', 'leona-4', 'leona-3', 'leona-2', 'leona-1', 'leona-0', 'leesin-6', 'leesin-5', 'leesin-4', 'leesin-3', 'leesin-2', 'leesin-1', 'leesin-0', 'leesin-10', 'leesin-11', 'leblanc-5', 'leblanc-4', 'leblanc-3', 'leblanc-2', 'leblanc-1', 'leblanc-0', 'kogmaw-9', 'kogmaw-8', 'kogmaw-7', 'kogmaw-6', 'kogmaw-5', 'kogmaw-4', 'kogmaw-3', 'kogmaw-2', 'kogmaw-1', 'kogmaw-0', 'kled-1', 'kled-0', 'kindred-2', 'kindred-1', 'kindred-0', 'khazix-4', 'khazix-3', 'khazix-2', 'khazix-1', 'khazix-0', 'kennen-7', 'kennen-6', 'kennen-5', 'kennen-4', 'kennen-3', 'kennen-2', 'kennen-1', 'kennen-0', 'kayle-8', 'kayle-7', 'kayle-6', 'kayle-5', 'kayle-4', 'kayle-3', 'kayle-2', 'kayle-1', 'kayle-0', 'katarina-9', 'katarina-8', 'katarina-7', 'katarina-5', 'katarina-6', 'katarina-4', 'katarina-3', 'katarina-2', 'katarina-1', 'kassadin-4', 'kassadin-3', 'kassadin-2', 'kassadin-1', 'kassadin-0', 'karthus-9', 'karthus-5', 'karthus-4', 'karthus-3', 'karthus-2', 'karthus-1', 'karthus-0', 'karma-7', 'karma-6', 'karma-5', 'karma-4', 'karma-3', 'karma-2', 'karma-1', 'karma-0', 'kalista-3', 'kalista-2', 'kalista-1', 'kalista-0', 'jinx-4', 'jinx-3', 'jinx-2', 'jinx-1', 'jinx-0', 'jayce-4', 'jayce-3', 'jayce-2', 'jayce-1', 'jayce-0', 'jax-9', 'jax-8', 'jax-7', 'jax-6', 'jax-5', 'jax-4', 'jax-3', 'jax-2', 'jax-1', 'jax-0', 'jarvaniv-6', 'jarvaniv-5', 'jarvaniv-4', 'jarvaniv-3', 'jarvaniv-2', 'jarvaniv-1', 'jarvaniv-0', 'janna-7', 'janna-6', 'janna-5', 'janna-4', 'janna-3', 'janna-2', 'janna-1', 'ivern-1', 'ivern-0', 'irelia-5', 'irelia-4', 'irelia-3', 'irelia-2', 'irelia-1', 'irelia-0', 'illaoi-1', 'illaoi-0', 'heimerdinger-5', 'heimerdinger-4', 'heimerdinger-3', 'heimerdinger-2', 'heimerdinger-1', 'heimerdinger-0', 'hecarim-6', 'hecarim-5', 'hecarim-4', 'hecarim-3', 'hecarim-2', 'hecarim-1', 'hecarim-0', 'graves-7', 'graves-6', 'graves-5', 'graves-4', 'graves-3', 'graves-2', 'graves-1', 'graves-0', 'gragas-9', 'gragas-8', 'gragas-7', 'gragas-6', 'gragas-5', 'gragas-4', 'gragas-3', 'gragas-3', 'gragas-2', 'gragas-1', 'gragas-0', 'gnar-4', 'gnar-3', 'gnar-2', 'gnar-1', 'gnar-0', 'garen-6', 'garen-5', 'garen-4', 'garen-3', 'garen-2', 'garen-1', 'garen-0', 'garen-10', 'garen-11', 'gangplank-8', 'gangplank-7', 'gangplank-6', 'gangplank-5', 'gangplank-4', 'gangplank-3', 'gangplank-2', 'gangplank-1', 'gangplank-0', 'galio-5', 'galio-4', 'galio-3', 'galio-2', 'galio-1', 'galio-0', 'fizz-9', 'fizz-8', 'fizz-4', 'fizz-3', 'fizz-2', 'fizz-1', 'fizz-0', 'fiora-5', 'fiora-4', 'fiora-3', 'fiora-2', 'fiora-1', 'fiora-0', 'fiddlesticks-7', 'fiddlesticks-6', 'fiddlesticks-5', 'fiddlesticks-4', 'fiddlesticks-3', 'fiddlesticks-2', 'fiddlesticks-1', 'fiddlesticks-0', 'ezreal-9', 'ezreal-8', 'ezreal-7', 'ezreal-6', 'ezreal-5', 'ezreal-4', 'ezreal-3', 'ezreal-2', 'ezreal-1', 'ezreal-0', 'evelynn-4', 'evelynn-3', 'evelynn-2', 'evelynn-1', 'evelynn-0', 'elise-4', 'elise-3', 'elise-2', 'elise-1', 'elise-0', 'ekko-3', 'ekko-2', 'ekko-1', 'ekko-0', 'draven-6', 'draven-5', 'draven-4', 'draven-3', 'draven-2', 'draven-1', 'draven-0', 'drmundo-9', 'drmundo-8', 'drmundo-7', 'drmundo-6', 'drmundo-5', 'drmundo-4', 'drmundo-3', 'drmundo-2', 'drmundo-1', 'drmundo-0', 'diana-3', 'diana-2', 'diana-1', 'diana-0', 'diana-11', 'darius-8', 'darius-4', 'darius-3', 'darius-2', 'darius-1', 'darius-0', 'darius-14', 'corki-8', 'corki-7', 'corki-6', 'corki-5', 'corki-4', 'corki-3', 'corki-2', 'corki-1', 'corki-0', 'chogath-6', 'chogath-5', 'chogath-4', 'chogath-3', 'chogath-2', 'chogath-1', 'chogath-0', 'cassiopeia-4', 'cassiopeia-3', 'cassiopeia-2', 'cassiopeia-1', 'cassiopeia-0', 'camille-1', 'camille-0', 'caitlyn-6', 'caitlyn-5', 'caitlyn-4', 'caitlyn-3', 'caitlyn-2', 'caitlyn-1', 'caitlyn-0', 'caitlyn-10', 'caitlyn-11', 'braum-3', 'braum-2', 'braum-1', 'braum-0', 'braum-10', 'brand-5', 'brand-4', 'brand-3', 'brand-2', 'brand-1', 'brand-0', 'blitzcrank-7', 'blitzcrank-6', 'blitzcrank-5', 'blitzcrank-4', 'blitzcrank-3', 'blitzcrank-2', 'blitzcrank-1', 'blitzcrank-0', 'blitzcrank-11', 'bard-6', 'bard-5', 'bard-4', 'bard-3', 'bard-2', 'bard-1', 'bard-0', 'azir-4', 'azir-3', 'azir-2', 'azir-1', 'azir-0', 'aurelionsol-1', 'aurelionsol-0', 'ashe-8', 'ashe-7', 'ashe-6', 'ashe-5', 'ashe-4', 'ashe-3', 'ashe-2', 'ashe-1', 'ashe-0', 'annie-9', 'annie-8', 'annie-7', 'annie-6', 'annie-5', 'annie-4', 'annie-3', 'annie-2', 'annie-1', 'annie-0', 'annie-10', 'anivia-7', 'anivia-6', 'anivia-5', 'anivia-4', 'anivia-3', 'anivia-2', 'anivia-1', 'anivia-0', 'amumu-8', 'amumu-7', 'amumu-6', 'amumu-5', 'amumu-4', 'amumu-3', 'amumu-2', 'amumu-1', 'amumu-0', 'alistar-9', 'alistar-8', 'alistar-7', 'alistar-6', 'alistar-5', 'alistar-4', 'alistar-3', 'alistar-2', 'alistar-1', 'alistar-0', 'akali-8', 'akali-7', 'akali-6', 'akali-5', 'akali-4', 'akali-3', 'akali-2', 'akali-1', 'akali-0', 'ahri-7', 'ahri-6', 'ahri-5', 'ahri-4', 'ahri-3', 'ahri-2', 'ahri-1', 'ahri-0', 'aatrox-3', 'aatrox-2', 'aatrox-1', 'aatrox-0', 'zacskt', 'teemoskt', 'olafskt', 'namiskt', 'syndraskt', 'jhinskt', 'ekkoskt', 'urgot-8', 'urgot-7', 'urgot-6', 'urgot-5', 'kayn-2', 'kayn', 'sona-8', 'veigaros', 'twitchos', 'tristanaos', 'fizzos', 'zigg', 'nalzah01', 'kayle', 'hecarim', 'brand', 'ornn2', 'ornn', 'syndra', 'soraka', 'nissfortune', 'ezreal', 'ahri', 'yorick', 'singed', 'nasteryi', 'janna', 'fiora', 'cassiopeia', 'ashe', 'zed', 'viktor', 'nidalee', 'katarina', 'gnar', 'evelynn-7', 'evelynn-6', 'evelynn-5', 'evelynn', 'elise', 'annie', 'rengar', 'blitzcrank-9', 'blitzcrank-8', 'zoe-2', 'zoe', 'vi', 'vayne', 'varus', 'poppy', 'kogmaw', 'jinx', 'jhin', 'jax', 'graves', 'draven', 'xinzhao', 'warwick', 'swain-8', 'swain-7', 'swain-6', 'swain-5', 'swain-4', 'rakan', 'nasus', 'nissfortune-15', 'nissfortune-14', 'nissfortune-13', 'nissfortune-12', 'nissfortune-11', 'nissfortune-10', 'lux', 'kaisa-2', 'kaisa', 'jarvan-iv', 'illaoi', 'gragas', 'wukong', 'sivir', 'nissfortune-16', 'irelia-11', 'irelia-10', 'irelia-9', 'irelia-8', 'irelia-7', 'irelia-6', 'galio', 'alistar', 'varus-7', 'twistedfate', 'teemo', 'shen', 'rumble', 'riven', 'evelynn-8', 'zoe3', 'xinzhao-7', 'urgot', 'thresh', 'talon', 'taliya', 'pyke-2', 'pyke', 'poppy-8', 'nunu-15', 'nunu-14', 'nunu-13', 'nunu-12', 'nunu-11', 'nunu-10', 'nunu-9', 'nunu-8', 'lulu', 'lucian', 'jarvan-iv-7', 'irelia-12', 'garen', 'gangplank', 'darius', 'caitlyn', 'braum', 'aurelionsol-2', 'ashe-9', 'akali-18', 'akali-17', 'akali-16', 'akali-15', 'akali-14', 'akali-13', 'akali-12', 'akali-11', 'akali-10', 'akali-9', 'aatrox-7', 'aatrox-6', 'aatrox-5', 'aatrox-4', 'ziggs-6', 'yasuo', 'sona', 'nalphite', 'khazix', 'kayn-3', 'jinx-5']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  style: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'lolcoverbyname': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('avatar', 'yorick', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('avatar', 'yorick', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['zyra', 'zilean', 'ziggs', 'zed', 'zac', 'yorick', 'yasuo', 'xinzhao', 'xerath', 'xayah', 'wukong', 'warwick', 'volibear', 'vladimir', 'viktor', 'vi', 'velkoz', 'veigar', 'vayne', 'varus', 'urgot', 'udyr', 'twictch', 'tryndamere', 'trundle', 'tristana', 'thresh', 'twistedfate', 'teemo', 'taric', 'talon', 'taliyah', 'tahmkench', 'syndra', 'swain', 'soraka', 'sona', 'skarner', 'sivir', 'sion', 'singed', 'shyvana', 'shen', 'shaco', 'sejuani', 'ryze', 'rumble', 'riven', 'rengar', 'renekton', 'reksai', 'rammus', 'rakan', 'quinn', 'poppy', 'pantheon', 'orianna', 'olaf', 'nunu', 'nasteryi', 'naokai', 'nalzahar', 'nalphite', 'lux', 'lulu', 'lucian', 'nocturne', 'nedalee', 'nautilus', 'nasus', 'nami', 'norgana', 'noderkaiser', 'nissfortune', 'lissandra', 'leona', 'leesin', 'leblanc', 'kogmaw', 'kled', 'kindred', 'khazix', 'kennen', 'kayn', 'kayle', 'katarina', 'kassadin', 'karthus', 'karma', 'kalista', 'jinx', 'jhin', 'jayce', 'jax', 'jarvan', 'janna', 'ivern', 'irelia', 'illaoi', 'heimerdinger', 'hecarim', 'graves', 'gragas', 'gnar', 'garen', 'gangplank', 'galio', 'fizz', 'fiora', 'fiddlesticks', 'ezreal', 'drmundo', 'evelynn', 'elise', 'ekko', 'draven', 'diana', 'darius', 'corki', 'chogath', 'cassiopeia', 'camille', 'caitlyn', 'braum', 'brand', 'blitzcrank', 'bard', 'azir', 'aurelionsol', 'ashe', 'annie', 'anivia', 'amumu', 'alistar', 'akali', 'ahri', 'aatrox', 'zoe', 'sylas', 'swain-2', 'pyke', 'nunu-2', 'neeko', 'norgana2', 'kayle-2', 'kaisa', 'evelynn-2', 'aatrox-2']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Avatar')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  avatar: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'cyberhunterfb': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('character', '10', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('character', '10', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  character: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'coverfreefirefb': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('character', 'kelly', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'kelly', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['a124', 'alok', 'alvaro', 'andrew', 'antonio', 'caroline', 'hayato', 'kapella', 'kelly', 'kla', 'laura', 'naxim', 'niguel', 'nisa', 'noco', 'nikita', 'notora', 'olivia', 'paloma', 'rafael', 'shani', 'steffie']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  character: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'gamingmascot': {
            if (!text) return reply(lang.maketeamlogo('style', 'reaper', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'reaper', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['bear-2', 'dragon-2', 'hydra', 'lion', 'reaper', 'wolf-2', 'bear', 'eagle', 'iguana', 'shark', 'snake', 'spartan', 'griffin', 'owl', 'wolf', 'tiger', 'wolver', 'dragon']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  style: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'coveronepiecefb': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('character', 'franky', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'franky', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['ace', 'brook', 'chopper', 'franky', 'garp', 'jinbei', 'law', 'luffy', 'nerry', 'nami', 'rayleigh', 'robin', 'sabo', 'sanji', 'shanks', 'sunny', 'usopp', 'zoro']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  character: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'bannerytcsgo': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('banner', 'banner-3', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('banner', 'banner-3', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['banner-1', 'banner-2', 'banner-3', 'banner-4', 'banner-5', 'banner-6', 'banner-7']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Banner')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  banner: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'fbgamepubgcover': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar ??🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('template', 'cover-4', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('template', 'cover-4', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['cover-1', 'cover-2', 'cover-3', 'cover-4', 'cover-5', 'cover-6', 'cover-7', 'cover-8', 'cover-9', 'cover-10', 'cover-11', 'cover-12']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Template')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  template: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'banneroflol': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'banner', 'veigar', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'banner', 'veigar', 'zeeone', 'ofc', prefix, command))
            var memek = args.join(" ").split("|")
            var m1 = memek[0]
            var m2 = memek[1]
            var m3 = memek[2]
            const style = ['ahri-2', 'neeko', 'nocturne', 'shen-2', 'veigar', 'rakanayah-2', 'zoe-2', 'pantheon-2', 'rammus', 'udyr', 'darius-2', 'ekko-2', 'lablanc', 'leona', 'nissfotune', 'poppy', 'quinn', 'talon-2', 'akali-2', 'irelia-2', 'jinx-2', 'nordekaiser', 'pyke-2', 'renekton', 'rengar', 'sivir', 'sona', 'soraka', 'tristana', 'warwick', 'yuumi', 'ziggs', 'leesin', 'lulu', 'lux', 'naster-yi', 'norgana', 'nasus', 'pantheon', 'pyke', 'qiyana', 'rakan', 'rakanxayah', 'riven', 'shen', 'sylas', 'talon', 'teemo', 'thresh', 'tryndamere', 'varus', 'vayne', 'velkoz', 'vladimir', 'yasuo', 'zed', 'zoe', 'hecarim', 'heimerdinger', 'illaoi', 'irelia', 'ivern', 'janna', 'jarvan-iv', 'jax', 'jayce', 'jhin', 'jinx', 'kaisa', 'kalista', 'karma', 'karthus', 'kassadin', 'katarina', 'kayle', 'kayn', 'kennen', 'khazix', 'kindred', 'kled', 'kogmaw', 'aatrox', 'ahri', 'akali', 'alistar', 'amumu', 'anivia', 'annie', 'ashe', 'aurelionsol', 'azir', 'bard', 'blitzcrank', 'brand', 'braum', 'caitlyn', 'camille', 'cassiopeia', 'chogath', 'corki', 'darius', 'diana', 'drmundo', 'draven', 'ekko', 'elise', 'evelynn', 'ezreal', 'fiddlesticks', 'fiora', 'fizz', 'galio', 'gangplank', 'garen', 'gnar', 'gragas', 'graves']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Banner')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  banner: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'bannerofaov2': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'banner', 'ishar', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'banner', 'ishar', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'banner', 'ishar', 'zeeone', 'ofc', prefix, command))
            const style = ['airi-2', 'aleister', 'astrid-2', 'ata', 'butterfly-2', 'dirak', 'ignis-2', 'ishar', 'jinna', 'lauriel-3', 'nina-2', 'natalya-2', 'omen-2', 'qi-2', 'quillen3', 'raz', 'roxie-2', 'ryoma-2', 'taara-2', 'violet-3', 'wukong-4', 'wukong-3', 'krixi-2', 'krizziz', 'nurad-5', 'volkath', 'wisp-2', 'wukong-2', 'enzo-2', 'hayate-2', 'annette-2', 'capheny-2', 'celica', 'gildur-2', 'lauriel-2', 'nurad-4', 'quillen-2', 'sephera-2', 'qi', 'nurad-3', 'nurad-2', 'nakroth-2', 'zip', 'diao-chan-2', 'enzo', 'errol', 'joker', 'payna', 'slimz', 'thane', 'toro', 'veres', 'violet-2', 'wisp', 'yena', 'zill', 'arduin', 'arthur', 'batman', 'capheny', 'darcy', 'elsu', 'florentino', 'gildur', 'ignis', 'wukong', 'yena', 'zanis', 'violet', 'tulen', 'sephera', 'nurad', 'nina', 'lindis', 'liliana', 'lauriel', 'krixi', 'kahlii', 'hayate', 'diao-chan', 'butterfly', 'astrid', 'arum', 'annette', 'amily', 'airi', 'zuka', 'zephys', 'zanis', 'yorn', 'xeniel', 'veres', 'veera', 'tel-annas', 'taara', 'superman', 'skud', 'ryoma', 'roxie', 'quillen', 'omen', 'natalya', 'nakroth', 'lubu']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Banner')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  banner: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'teamlogo': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'buffalo', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'buffalo', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'buffalo', 'zeeone', 'ofc', prefix, command))
            const style = ['cobra', 'dragon', 'eagle2', 'falcon', 'lion2', 'tiger2', 'bear', 'buffalo', 'eagle', 'lion', 'tiger', 'wolf']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  background: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'companylogo2': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '16', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '16', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '16', 'zeeone', 'ofc', prefix, command))
            const style = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  background: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'companylogo': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '20', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '20', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '20', 'zeeone', 'ofc', prefix, command))
            const style = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  background: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'gradientlogo': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '3', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '3', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '3', 'zeeone', 'ofc', prefix, command))
            const style = ['1', '2', '3', '4', '5', '6']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  background: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'pencilsketch': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'icon', 'panda', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'icon', 'panda', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'icon', 'panda', 'zeeone', 'ofc', prefix, command))
            const style = ['bird', 'butterfly', 'coffee', 'dove', 'leaf', 'like', 'lotus', 'milk-tea', 'panda', 'tree', 'woman', 'bear', 'bull', 'dragon', 'eagle', 'hawk', 'ninja', 'paw', 'rooster', 'sabertooth', 'skull', 'warrior', 'zebra']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Icon')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  icon: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'gunlogogaming': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'm14ebr', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'm14ebr', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'm14ebr', 'zeeone', 'ofc', prefix, command))
            const style = ['ak47', 'ak47-s', 'an94', 'ar15', 'aug', 'awm', 'g36k', 'm4a1', 'm4-s', 'm14ebr', 'm16', 'm60', 'm82a1', 'mp5', 'scar', 'svd', 'xm8', 'xm1014']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  background: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'banneroffreefire': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'misha', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'misha', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'misha', 'zeeone', 'ofc', prefix, command))
            const style = ['andrew', 'caroline', 'kelly', 'laura', 'maxim', 'miguel', 'misha', 'moco', 'nikita', 'notora', 'olivia', 'steffi']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  background: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'letterlogos': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'w', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'w', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'w', 'zeeone', 'ofc', prefix, command))
            const style = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'z']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  thumb: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'bannerofoverwatch': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'reinhardt', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'reinhardt', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'reinhardt', 'zeeone', 'ofc', prefix, command))
            const style = ['widowmaker', 'tracer', 'symmetra', 'sombra', 'soldier76', 'reinhardt', 'reaper', 'orisa', 'mercy', 'mei', 'genji', 'dva', 'doomfist', 'ashe', 'ana']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  background: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'bannerofapex': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'bg3', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'bg3', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'bg3', 'zeeone', 'ofc', prefix, command))
            const style = ['bg6', 'bg5', 'bg4', 'bg3', 'bg2', 'bg1']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  background: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'bannerofpubg': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly ??`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'bg3', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'bg3', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'bg3', 'zeeone', 'ofc', prefix, command))
            const style = ['bg11', 'bg10', 'bg9', 'bg8', 'bg7', 'bg6', 'bg5', 'bg4', 'bg3', 'bg2', 'bg1']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  background: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'mascotstyle': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly ??`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'dragon-4', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'dragon-4', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.maketeamlogo('teks', 'teks2', 'thumb', 'dragon-4', 'zeeone', 'ofc', prefix, command))
            const style = ['dragon-5', 'jet', 'knight', 'skull-3', 'skull-cyborg', 'tiger-4', 'bee-3', 'dragon-4', 'fox-3', 'goat-2', 'kitsune', 'octopus-2', 'piranha', 'wolf', 'bear-2', 'cat', 'ceberus', 'crocodile', 'dinosaur', 'dragon-3', 'eagle-3', 'horse-2', 'husky', 'kraken', 'lynx', 'sabertooh', 'assassin', 'bee', 'cat2', 'demon', 'fox', 'gorilla', 'horus', 'octopus', 'rounin', 'scorpion', 'skull2', 'tiger3', 'tiger2', 'tiger', 'shark', 'sabertooth', 'rooster', 'rhino', 'puma', 'phoenix', 'panther', 'owl', 'lion', 'horse', 'hornet', 'griffin', 'goat', 'fox', 'eagle', 'dragon2', 'dragon', 'devil', 'cobra', 'bull', 'bear', 'monkey', 'warrior', 'rabbit', 'pirates', 'owl2', 'neonwolf', 'lionking', 'godzilla', 'flashwolf', 'fire', 'eagle2', 'dog', 'mask', 'team', 'pubg', 'drift', 'bee2']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Thumb')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  thumb: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'logoaccording': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'dragon3', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'dragon3', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.maketeamlogo('teks', 'teks2', 'thumb', 'dragon3', 'zeeone', 'ofc', prefix, command))
            const style = ['bear2', 'cat2', 'ceberus', 'crocodile', 'dinosaur', 'dragon3', 'eagle3', 'horse2', 'husky', 'kraken', 'lynx', 'sabertooh', 'assassin', 'bee', 'cat', 'demon', 'fox-2', 'gorilla', 'horus', 'octopus', 'rounin', 'scorpion', '-2', 'tiger-3', 'bg-tiger', 'bg-buffalo', 'chicken', 'bull', 'bg-wolf', 'jaguar', 'horse', 'eagle', 'dragon', 'wolver', 'shark', 'sabertooth', 'rhino', 'phoenix', 'lion', 'hornet', 'griffin', 'bear', 'tiger2', 'panther', 'owl', 'monkey', 'goat', 'fox', 'dragon2', 'devil', 'cobra', 'reaper', 'pirates', 'owl2', 'mask', 'fire', 'eagle2', 'chamois', 'neptune', 'parrots', 'samurai']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Thumb')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  thumb: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'avataroverwatch': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'zenyatta', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'zenyatta', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.maketeamlogo('teks', 'teks2', 'thumb', 'zenyatta', 'zeeone', 'ofc', prefix, command))
            const style = ['mccree', 'mercy', 'zenyatta', 'zarya', 'winston', 'widowmaker', 'tracer', 'torbjorn', 'symmetra', 'sombra', 'soldier76', 'soldier_76', 'roadhog', 'reinhardt', 'reaper2', 'reaper', 'pharah', 'orisa', 'mei', 'lucio', 'junkrat', 'hanzo', 'genji', 'dva', 'bastion', 'ana2', 'ana', 'doomfist', 'bg-1']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Thumb')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            } else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  thumb: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit = addLimit
         }
         break

         case 'asmaulhusna': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            var asma = await fetchJson(api('alfa', '/api/islam/' + command, {}, 'apikey'))
               .then(async data => {
                  let txt = '*Asmaul Husna*\n\n'
                  txt += `• Latin : ${data.result.latin}\n`
                  txt += `• Arabic : ${data.result.arabic}\n`
                  txt += `• Tr id : ${data.result.translation_id}\n`
                  txt += `• Tr en : ${data.result.translation_en}`
                  reply(txt)
               })
               .catch(e => {
                  reply(lang.err())
               })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'kisahnabi': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'Adam'))
            var asma = await fetchJson(api('alfa', '/api/islam/' + command, {
                  nabi: q
               }, 'apikey'))
               .then(async data => {
                  let txt = '*Kisah Nabi*\n\n'
                  txt += `• Name : ${data.result.name}\n`
                  txt += `• Birth : ${data.result.birth}\n`
                  txt += `• Death Age : ${data.result.death_age}\n`
                  txt += `• Country : ${data.result.country_from}\n`
                  txt += `• Story : ${data.result.story}\n`
                  reply(txt)
               })
               .catch(e => {
                  reply(lang.err())
               })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'jadwalshalat': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'Makassar'))
            var asma = await fetchJson(api('alfa', '/api/islam/' + command, {
                  daerah: q
               }, 'apikey'))
               .then(async data => {
                  let txt = '*Jadwal Shalat *\n\n'
                  txt += `• Daerah : ${q}\n\n`
                  txt += `• Date : ${moment(new Date()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss DD/MM/YYYY')}\n`
                  txt += `• Subuh : ${data.result.today.Shubuh}\n`
                  txt += `• Zuhur : ${data.result.today.Dzuhur}\n`
                  txt += `• Ashr : ${data.result.today.Ashr}\n`
                  txt += `• Magrib : ${data.result.today.Maghrib}\n`
                  txt += `• Isya : ${data.result.today.Isya}\n`
                  reply(txt)
               })
               .catch(e => {
                  reply(lang.err())
               })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'randomquran': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮?? _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            var asma = await fetchJson(api('alfa', '/api/islam/' + command, {}, 'apikey'))
               .then(async data => {
                  let short = data.result.resources
                  let txt = '*Random Quran*\n\n'
                  txt += `• Surah : ${short.nameOfSurah.short} (${short.nameOfSurah.transliteration.en})\n`
                  txt += `• Surah ke : ${short.numberOfSurah}\n`
                  txt += `• Total ayat : ${short.totalAyah}\n`
                  txt += `• Ayat ke : ${short.numberOfAyah}\n`
                  txt += `• Arab : ${short.ayah.text.arab}\n`
                  txt += `• Latin : ${short.ayah.text.transliteration.en}\n`
                  txt += `• Tr en : ${short.ayah.translation.en}\n`
                  txt += `• Tr id : ${short.ayah.translation.id}\n\n`
                  txt += `_*Audio sedang dalam di proses pengiriman*_`
                  reply(txt)
                  let buff = await getBuffer(short.ayah.audio.primary)
                  alpha.sendMessage(from, {
                     audio: {
                        url: short.ayah.audio.primary
                     },
                     mimetype: 'audio/mpeg'
                  }, {
                     quoted: m
                  })
               })
               .catch(e => {
                  reply(lang.err())
               })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'randomquran2': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.quran2(prefix, commad, 'Juz', '1'))
            var asma = await fetchJson(api('alfa', '/api/islam/' + command, {
                  juz: q
               }, 'apikey'))
               .then(async data => {
                  let short = data.result.resources
                  let txt = '*Random Quran*\n\n'
                  txt += `• Surah : ${short.nameOfSurah.short} (${short.nameOfSurah.transliteration.en})\n`
                  txt += `• Surah ke : ${short.numberOfSurah}\n`
                  txt += `• Total ayat : ${short.totalAyah}\n`
                  txt += `• Ayat ke : ${short.numberOfAyah}\n`
                  txt += `• Arab : ${short.ayah.text.arab}\n`
                  txt += `• Latin : ${short.ayah.text.transliteration.en}\n`
                  txt += `• Tr en : ${short.ayah.translation.en}\n`
                  txt += `• Tr id : ${short.ayah.translation.id}\n\n`
                  txt += `_*Audio sedang dalam di proses pengiriman*_`
                  reply(txt)
                  alpha.sendMessage(from, {
                     audio: {
                        url: short.ayah.audio.primary
                     },
                     mimetype: 'audio/mpeg'
                  }, {
                     quoted: m
                  })
               })
               .catch(e => {
                  reply(lang.err())
               })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'listsurah': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            var asma = await fetchJson(api('alfa', '/api/islam/' + command, {}, 'apikey'))
               .then(async data => {
                  listt = '*List Surah*\n\n'
                  reply(listt + data.result)
               })
               .catch(e => {
                  reply(lang.err())
               })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'tafsirsurah': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮?? _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.quran2(prefix, command, 'Surah', 'Al-fatihah'))
            var asma = await fetchJson(api('alfa', '/api/islam/' + command, {
                  surah: q
               }, 'apikey'))
               .then(async data => {
                  let listt = '*Tafsir Surah*\n\n'
                  let no = 0
                  for (var i = 0; i < data.result.length; i++) {
                     no += 1
                     listt += `• Surah : ${data.result[i].surah}\n`
                     listt += `• Tafsir : ${data.result[i].tafsir}\n\n-----------------------------------\n\n`
                  }
                  reply(listt)
               })
               .catch(e => {
                  reply(lang.err())
               })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'alquranaudio': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `??🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.quran3(prefix, command, 'Surah', 'ayat', '1', '2'))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var asma = await fetchJson(api('alfa', '/api/islam/alquran-audio2', {
               ayat: m2,
               surah: m1
            }, 'apikey'))
            let short = asma.result.data
            let listt = '*Alquran Audio*\n\n'
            listt += `• Surah : ${short.surah.name.short} (${short.surah.name.transliteration.en})\n`
            listt += `• Arti : ${short.surah.name.translation.en} (${short.surah.name.translation.id})\n`
            listt += `• Surah ke : ${short.surah.number}\n`
            listt += `• Urutan : ${short.surah.sequence}\n`
            listt += `• Total ayat : ${short.surah.numberOfVerses}\n`
            listt += `• Wahyu : ${short.surah.revelation.arab} (${short.surah.revelation.id})\n`
            listt += `• Tafsir : ${short.surah.tafsir.id}\n\n~~~~~~~~~~~~~~~~~~~\n\n`
            listt += `• Juz : ${short.meta.juz}\n`
            listt += `• Page : ${short.meta.page}\n`
            listt += `• Manzil : ${short.meta.manzil}\n`
            listt += `• Ruku : ${short.meta.ruku}\n`
            listt += `• Quarte : ${short.meta.hizbQuarter}\n`
            listt += `• Arab : ${short.text.arab}\n`
            listt += `• Latin : ${short.text.transliteration.en}\n`
            listt += `• Tr en : ${short.translation.en}\n`
            listt += `• Tr id : ${short.translation.id}\n`
            listt += `• Tafsir short : ${short.tafsir.id.short}\n`
            listt += `• Tafsir long : ${short.tafsir.id.long}\n\n-----------------------------------\n\n`
            let aud_nya = await getBuffer(short.audio.primary)
            alpha.sendMessage(from, {
               audio: {
                  url: short.audio.primary
               },
               mimetype: 'audio/mpeg'
            }, {
               quoted: m
            })
            reply(listt)
               .catch(e => {
                  reply(lang.err())
               })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'awoawo':
         case 'benedict':
         case 'chat':
         case 'dbfly':
         case 'dino_kuning':
         case 'doge':
         case 'gojosatoru':
         case 'hope_boy':
         case 'jisoo':
         case 'kr_robot':
         case 'kucing':
         case 'lonte':
         case 'manusia_lidi':
         case 'menjamet':
         case 'meow':
         case 'nicholas':
         case 'patrick':
         case 'popoci':
         case 'sponsbob':
         case 'kawan_sponsbob':
         case 'tyni': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            reply(lang.wait())
            let textpro2 = await fetch(api('alfa', '/api/telegram-sticker/' + command, {}, 'apikey'))
            if (!textpro2.ok) throw await textpro2.text()
            let img = await textpro2.buffer()
            alpha.sendImageAsSticker(m.chat, img, m, {
               packname: global.packname,
               author: global.author
            })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'brainly': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'Indonesia'))
            let res = await fetch(api('alfa', '/api/search/brainly', {
               query: text
            }, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.json()
            let answer = await img.data.map((v, i) => `_*PERTANYAAN KE ${i + 1}*_\n${v.pertanyaan}\n${v.jawaban.map((v,i) => `*JAWABAN KE ${i + 1}*\n${v.text}`).join('\n')}`).join('\n\n----------------------------------------\n\n')
            reply(answer)
         }
         break
         case 'google': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'Indonesia'))
            google({
               'query': text
            }).then(res => {
               let teks = `*Google Search*\n_Query : ${text}_\n\n`
               for (let g of res) {
                  teks += `*Title* : ${g.title}\n`
                  teks += `*Description* : ${g.snippet}\n`
                  teks += `*Link* : ${g.link}\n\n----------------------------------------\n\n`
               }
               reply(teks)
            })
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'fetch':
         case 'get': {
            if (text.length < 2) return reply(lang.KisahNabi(prefix, command, 'https://google.com'))
            if (!/^https?:\/\//.test(text)) return reply('Awali *URL* dengan http:// atau https://')
            reply(lang.wait())
            let _url = new URL(text)
            let url = global.api(_url.origin, _url.pathname, Object.fromEntries(_url.searchParams.entries()), 'apikey')
            let res = await fetch(url)
            if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
               delete res
               throw `Content-Length: ${res.headers.get('content-length')}`
            }
            if (!/text|json/.test(res.headers.get('content-type'))) return alpha.sendFile(m.chat, url, 'file', lang.ok(), m)
            let txt = await res.buffer()
            try {
               txt = util.format(JSON.parse(txt + ''))
            } catch (e) {
               txt = txt + ''
            } finally {
               reply(txt.slice(0, 65536) + '')
            }
            db.data.users[m.sender].limit = addLimit
         }
         break
         case 'nulis':
            reply(`*Pilihan Fitur Nulis*
1. ${prefix}nuliskiri
2. ${prefix}nuliskanan
3. ${prefix}foliokiri
4. ${prefix}foliokanan

Contoh:
${prefix}nuliskiri Subscribe Ya YT zeeoneofc`)
            break
         case 'foliokiri': case 'foliokanan': case 'nuliskanan':case 'nuliskiri': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (text.length < 2) return reply(lang.KisahNabi(prefix, command, 'Support Bot WhatsApp'))
            reply(lang.wait())
            const tulisan = text
            let res = await fetch(global.api(global.APIs.alfa, '/api/canvas/' + command, {
               text: tulisan
            }, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'nulis.jpg', lang.ok(), m)
            db.data.users[m.sender].limit = addLimit
         }
         break
case 'ssweb': case 'screenshoot':{
if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
if (!text) return reply(`Kirim perintah ${prefix + command} url|device\n\nExample:\n${prefix + command} https://google.com|phone`)
if (!text.includes('|')) return reply(`Kirim perintah ${prefix + command} url|device\n\nExample:\n${prefix + command} https://google.com|phone`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
if (!isUrl(m1)) return reply(`Kirim perintah ${prefix + command} url|device\n\nExample:\n${prefix + command} https://google.com|phone\n\nDevice yang tersedia yaitu phone, tablet, dan desktop`)
if(!["phone", "tablet", "desktop"].includes(m2)){
} else{
let res = await fetch(global.api(global.APIs.alfa, '/api/tools/ssweb', {
url: m1,
device: m2
}, 'apikey'))
if (!res.ok) throw await res.text()
let img = await res.buffer()
alpha.sendFile(m.chat, img, 'ssweb.jpg', lang.ok(), m)
db.data.users[m.sender].limit = addLimit  
}
}
break
         case 'bass':
         case 'blown':
         case 'deep':
         case 'earrape':
         case 'fast':
         case 'fat':
         case 'nightcore':
         case 'reverse':
         case 'robot':
         case 'slow':
         case 'smooth':
         case 'tupai':
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', m, [m.sender])
            if (!isPremium && db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if ((quoted.msg || quoted).seconds > 60) return reply('Maximum 60 seconds!')
            try {
               let set
               if(/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
               if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
               if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
               if (/earrape/.test(command)) set = '-af volume=12'
               if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
               if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
               if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
               if (/reverse/.test(command)) set = '-filter_complex "areverse"'
               if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
               if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
               if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
               if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
               if (/audio/.test(mime)) {
                  reply(lang.wait())
                  let media = await alpha.downloadAndSaveMediaMessage(quoted)
                  let ran = getRandom('.mp3')
                  exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                     fs.unlinkSync(media)
                     if (err) return reply(lang.err())
                     let buff = fs.readFileSync(ran)
                     alpha.sendMessage(m.chat, {
                        audio: buff,
                        mimetype: 'audio/mpeg'
                     }, {
                        quoted: m
                     })
                     fs.unlinkSync(ran)
                  })
               } else reply(lang.NoAudRep(prefix, command))
            } catch (e) {
               reply(lang.err())

            }
            db.data.users[m.sender].limit = addLimit
            break
         case 'adventure': {
            rpg.adventure(alpha, m, prefix, reply)
         }
         break
         case 'jadian': case 'tembak': {
            rpg.jadiantembak(alpha, text, m, reply, prefix)
         }
         break
         case 'terima': {
            rpg.jadianterima(alpha, text, m, reply, prefix)
         }
         break
         case 'tolak': {
            rpg.jadiantolak(alpha, text, m, reply, prefix)
         }
         break
         case 'ikhlas': case 'ikhlasin': {
            rpg.jadianikhlas(alpha, text, m, reply, prefix)
         }
         break
         case 'putus': case 'putusin': {
            rpg.jadianputus(alpha, text, m, reply, prefix)
         }
         break
        case 'pasangan': case 'cekpasangan': case 'cekpacar': {
            rpg.jadiancek(alpha, text, m, reply, prefix)
         }
         break
         case 'open': {
            rpg.openc(alpha, m, prefix, args, command, reply)
         }
         break
         case 'bangun':
         case 'build': {
            rpg.build(alpha, m, prefix, args, command, reply)
         }
         break
         case 'berkebon': {
            rpg.berkebon(alpha, m, prefix, reply)
         }
         break
         case 'berdagang': {
            if (!m.isGroup) return reply(lang.groupOnly())
            let whoi = m.mentionedJid[0]
            if (!whoi) return reply('Tag salah satu yang kamu ingin ajak berdagang')
            rpg.berdagang(alpha, m, prefix, reply)
         }
         break
         case 'bansos': {
            rpg.bansos(alpha, m, prefix, reply)
         }
         break
         case 'bank': {
            rpg.bank(alpha, m, prefix, reply)
         }
         break
         case 'casino': {
            rpg.casino(alpha, m, prefix, args, reply)
         }
         break
         case 'chop': {
            rpg.chop(alpha, m, prefix, reply)
         }
         break
         case 'collect': {
            rpg.collect(alpha, m, prefix, args, command, reply)
         }
         break
         case 'cook': {
            rpg.cook(alpha, m, prefix, args, command, reply)
         }
         break
         //case 'cd':
         case 'cooldown': {
            rpg.cooldown(alpha, m, prefix, args, command, reply)
         }
         break
         case 'craft': {
            rpg.craft(alpha, m, prefix, args, command, reply)
         }
         break
         case 'claim':
         case 'daily': {
            rpg.daily(alpha, m, prefix, reply)
         }
         break
         case 'dya':
         case 'dno':
         case 'duel': {
            rpg.duel(alpha, m, prefix, args, command, reply)
         }
         break
         case 'feed': {
            rpg.feed(alpha, m, prefix, args, reply)
         }
         break
         case 'tokoikan':
         case 'fishop': {
            rpg.fishop(alpha, m, prefix, args, command, reply)
         }
         break
         case 'hourly': {
            rpg.hourly(alpha, m, prefix, reply)
         }
         break
         case 'inventory':
         case 'inv': {
            rpg.inventory(isPremium, alpha, m, prefix, reply)
         }
         break

         case 'judi': {
            rpg.judi(alpha, m, prefix, args, reply)
         }
         break
         case 'kandang': {
            rpg.kandang(alpha, m, prefix, reply)
         }
         break
         case 'work':
         case 'kerja': {
            rpg.kerja(alpha, m, prefix, args, command, reply)
         }
         break
         case 'buyall':
         case 'buy': {
            rpg.buy(alpha, m, prefix, args, command, reply)
         }
         break
         case 'koboy': {
            rpg.koboy(alpha, m, prefix, args, command, text, reply)
         }
         break
         case 'piscina': 
         case 'kolam': {
            rpg.kolam(alpha, m, prefix, reply)
         }
         break
         case 'mancing': {
            rpg.mancing(alpha, m, prefix, pushname, reply)
         }
         break
         case 'merampok': 
         case 'rampok': {
            if (!m.isGroup) return reply(lang.groupOnly())
            let whoi = m.mentionedJid[0]
            if (!whoi) return reply('Tag salah satu yang kamu ingin rampok')
            rpg.merampok(alpha, m, prefix, reply)
         }
         break
case 'levelup':{
rpg.levelup(alpha, pushname, m, reply, ownername)
}
break
         case 'mining': {
            rpg.mining(alpha, m, prefix, reply)
         }
         break
         case 'monthly': {
            rpg.monthly(alpha, m, prefix, reply)
         }
         break
         case 'nabung': {
            if (!text) return reply(`Contoh penggunaan: ${prefix + command} 100`)
            rpg.nabung(alpha, m, prefix, args, command, reply)
         }
         break

         case 'narik': {
            if (!text) return reply(`Contoh penggunaan: ${prefix + command} 100`)
            rpg.narik(alpha, m, prefix, args, command, reply)
         }
         break
         case 'nguli': {
            rpg.nguli(alpha, m, prefix, reply)
         }
         break
         case 'jadiojek':
         case 'ngojek':
         case 'ojek': {
            rpg.ojek(alpha, m, prefix, pushname, reply)
         }
         break
         case 'toko':
         case 'pasar': {
            if (!text) return reply(`Contoh penggunaan : ${prefix + command} jual ayam`)
            if (!args[0] && !args[1]) return reply(`Contoh penggunaan : ${prefix + command} jual ayam`)
            rpg.pasar(alpha, m, prefix, args, command, reply)
         }
         break
         case 'buy':
         case 'shell':
         case 'toko':
         case 'shop': {
            if (!text) return reply(`Contoh penggunaan : ${prefix}shop <Buy|sell> <item> <jumlah>\n*${prefix}shop buy potion 1*`)
            if (!args[0] && !args[1]) return reply(`Contoh penggunaan : ${prefix}shop <Buy|sell> <item> <jumlah>\n*${prefix}shop buy potion 1*`)
            rpg.shop(alpha, m, prefix, args, command, reply)
         }
         break
         case 'slot': {
            rpg.slot(alpha, m, prefix, args, command, text, reply)
         }
         break
         case 'transfer': {
            rpg.transfer(alpha, m, prefix, args, reply)
         }
         break
         case 'heal':
         case 'use': {
            rpg.use(alpha, m, prefix, args, command, reply)
         }
         break
         case 'weekly': {
            rpg.weekly(alpha, m, prefix, reply)
         }
         break
         case 'berburu': {
            rpg.berburu(alpha, m, prefix, reply)
         }
         break
         case 'ceklimit':
         case 'checklimit':
         case 'limit': {
            reply(lang.limitLu(isPremium? limitawal.premium : db.data.users[m.sender].limit))
         }
         break
         default:
            if ((budy) && ["p", "proses", "Proses", "P"].includes(budy) && !isCmd && !m.key.fromMe) {
               //if (!m.isGroup) return
               if (!isGroupAdmins && !isGroupOwner && !isCreator) return
               if (!m.quoted) return reply(lang.LockCmd())
               let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
               const getTextP = getTextSetProses(m.chat, set_proses);
               let proses = (getTextP || `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan :\n@catatan\n\nPesanan @user sedang di proses!`).replace('@tanggal', `${tanggal(new Date())}`).replace('@jam', time).replace('@catatan', `${tek ? tek : '-'}`).replace('@user', '@' + m.quoted.sender.split('@')[0])
               alpha.sendTextWithMentions(m.chat, proses, m)
            }


            if ((budy) && ["d", 'done', "Done", "D"].includes(budy) && !isCmd && !m.key.fromMe) {
               //if (!m.isGroup) return
               if (!isGroupAdmins && !isGroupOwner && !isCreator) return
               if (!m.quoted) return reply(lang.LockCmd())
               let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
               const getTextD = await getTextSetDone(m.chat, set_done);
               let sukses = (getTextD || `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Berhasil\`\`\`\n\n📝 Catatan :\n@catatan\n\nTerimakasih @user Next Order ya🙏`).replace('@tanggal', `${tanggal(new Date())}`).replace('@jam', time).replace('@catatan', `${tek ? tek : '-'}`).replace('@user', '@' + m.quoted.sender.split('@')[0])
               alpha.sendTextWithMentions(m.chat, sukses, m)
            }


            if (budy.startsWith('=>')) {
               if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())

               function Return(sul) {
                  sat = JSON.stringify(sul, null, 2)
                  bang = util.format(sat)
                  if (sat == undefined) {
                     bang = util.format(sul)
                  }
                  return reply(bang)
               }
               try {
                  reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
               } catch (e) {
                  reply(util.format(e))
               }
            }

            if (m.isGroup && mentionUser.includes(ownernomer)) {
              //console.log(m.mentionedJid[0])
               if (!vntag_owner) return
              alpha.sendMessage(m.chat, {audio: fs.readFileSync(tag_owner), mimetype: "audio/mpeg", ptt: true}, {quoted: m})
            }
            if (budy.startsWith('> ')) {
               if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
               try {
                  let evaled = await eval(budy.slice(2))
                  if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                  await reply(evaled)
               } catch (err) {
                  await reply(util.format(err))
               }
            }


            if (budy.startsWith('< ')) {
               if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
               try {
                  return reply(JSON.stringify(eval(`${args.join(' ')}`), null, '\t'))
               } catch (e) {
                  reply(util.format(e))
               }
            }

            if (budy.startsWith('$ ')) {
               if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
               mengtermuk = budy.slice(2)
               exec(mengtermuk, (err, stdout) => {
                  if (err) return reply(err)
                  if (stdout) return reply(`*${botname}*\nEXEC: ${mengtermuk}\n\n${stdout}`)
               })
            }
      }
  } catch (err) {
      //console.log(err)
      m.reply(util.format(err))
   }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
   fs.unwatchFile(file)
   console.log(chalk.redBright(`Update ${__filename}`))
   delete require.cache[file]
   require(file)
})