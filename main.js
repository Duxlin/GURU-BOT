function _0x5278(_0xb36b10,_0x58c7d2){const _0x3b7d4b=_0x3b7d();return _0x5278=function(_0x5278fa,_0x3fabb0){_0x5278fa=_0x5278fa-0x155;let _0x15167e=_0x3b7d4b[_0x5278fa];return _0x15167e;},_0x5278(_0xb36b10,_0x58c7d2);}const _0x4d33c9=_0x5278;(function(_0x2864a1,_0x578adc){const _0x295576=_0x5278,_0x5f4af4=_0x2864a1();while(!![]){try{const _0x3cb5fe=-parseInt(_0x295576(0x1a5))/0x1+parseInt(_0x295576(0x178))/0x2*(parseInt(_0x295576(0x1de))/0x3)+parseInt(_0x295576(0x16e))/0x4*(-parseInt(_0x295576(0x183))/0x5)+-parseInt(_0x295576(0x17e))/0x6+-parseInt(_0x295576(0x19c))/0x7+parseInt(_0x295576(0x1dd))/0x8+parseInt(_0x295576(0x17d))/0x9;if(_0x3cb5fe===_0x578adc)break;else _0x5f4af4['push'](_0x5f4af4['shift']());}catch(_0x2254e2){_0x5f4af4['push'](_0x5f4af4['shift']());}}}(_0x3b7d,0xdb297),process['env'][_0x4d33c9(0x173)]='0');import'./config.js';import{createRequire}from'module';import _0x2cad83,{join}from'path';import{fileURLToPath,pathToFileURL}from'url';import{platform}from'process';import*as _0x142399 from'ws';import{readdirSync,statSync,unlinkSync,existsSync,readFileSync,watch,rmSync}from'fs';import _0x1a9325 from'yargs';import{spawn}from'child_process';import _0x4d2dbe from'lodash';import _0x19fdef from'chalk';import _0x4b8505 from'syntax-error';import{tmpdir}from'os';import{format}from'util';import{makeWASocket,protoType,serialize}from'./lib/simple.js';import{Low,JSONFile}from'lowdb';import _0x325628 from'pino';import{mongoDB,mongoDBV2}from'./lib/mongoDB.js';import _0x5d24de from'./lib/store.js';const {DisconnectReason,useMultiFileAuthState}=await import('@adiwajshing/baileys'),{CONNECTING}=_0x142399,{chain}=_0x4d2dbe,PORT=process['env'][_0x4d33c9(0x1c4)]||process['env'][_0x4d33c9(0x1c2)]||0xbb8;import _0x23bf46 from'dotenv';protoType(),serialize(),_0x23bf46[_0x4d33c9(0x1ce)](),global[_0x4d33c9(0x1cd)]=function filename(_0x600be9=import.meta[_0x4d33c9(0x175)],_0x409c0c=platform!==_0x4d33c9(0x1ad)){const _0x1e763c=_0x4d33c9;return _0x409c0c?/file:\/\/\//[_0x1e763c(0x192)](_0x600be9)?fileURLToPath(_0x600be9):_0x600be9:pathToFileURL(_0x600be9)[_0x1e763c(0x189)]();},global[_0x4d33c9(0x16d)]=function dirname(_0x2303ad){const _0x4b10b7=_0x4d33c9;return _0x2cad83[_0x4b10b7(0x1a7)](global[_0x4b10b7(0x1cd)](_0x2303ad,!![]));},global[_0x4d33c9(0x1ae)]=function require(_0x50d57a=import.meta['url']){return createRequire(_0x50d57a);},global['API']=(_0x1d3455,_0x4f4246='/',_0x4bb07a={},_0x56d59d)=>(_0x1d3455 in global[_0x4d33c9(0x1ba)]?global[_0x4d33c9(0x1ba)][_0x1d3455]:_0x1d3455)+_0x4f4246+(_0x4bb07a||_0x56d59d?'?'+new URLSearchParams(Object[_0x4d33c9(0x1d3)]({..._0x4bb07a,..._0x56d59d?{[_0x56d59d]:global[_0x4d33c9(0x169)][_0x1d3455 in global[_0x4d33c9(0x1ba)]?global[_0x4d33c9(0x1ba)][_0x1d3455]:_0x1d3455]}:{}})):''),global['timestamp']={'start':new Date()};const __dirname=global[_0x4d33c9(0x16d)](import.meta[_0x4d33c9(0x175)]);global['opts']=new Object(_0x1a9325(process[_0x4d33c9(0x1da)][_0x4d33c9(0x1db)](0x2))[_0x4d33c9(0x1ac)](![])[_0x4d33c9(0x195)]()),global['prefix']=new RegExp('^['+(opts['prefix']||_0x4d33c9(0x196))[_0x4d33c9(0x1ab)](/[|\\{}()[\]^$+*?.\-\^]/g,_0x4d33c9(0x19d))+']'),global['opts']['db']=process[_0x4d33c9(0x1b1)][_0x4d33c9(0x1d5)],global['db']=new Low(/https?:\/\//['test'](opts['db']||'')?new cloudDBAdapter(opts['db']):/mongodb(\+srv)?:\/\//i[_0x4d33c9(0x192)](opts['db'])?opts['mongodbv2']?new mongoDBV2(opts['db']):new mongoDB(opts['db']):new JSONFile((opts['_'][0x0]?opts['_'][0x0]+'_':'')+_0x4d33c9(0x166))),global[_0x4d33c9(0x1a2)]=global['db'],global[_0x4d33c9(0x16c)]=async function loadDatabase(){const _0x5b1227=_0x4d33c9;if(global['db'][_0x5b1227(0x1d0)])return new Promise(_0x1cb3af=>setInterval(async function(){const _0x2975cd=_0x5b1227;!global['db'][_0x2975cd(0x1d0)]&&(clearInterval(this),_0x1cb3af(global['db'][_0x2975cd(0x157)]==null?global[_0x2975cd(0x16c)]():global['db'][_0x2975cd(0x157)]));},0x1*0x3e8));if(global['db'][_0x5b1227(0x157)]!==null)return;global['db'][_0x5b1227(0x1d0)]=!![],await global['db']['read']()[_0x5b1227(0x180)](console[_0x5b1227(0x1bd)]),global['db'][_0x5b1227(0x1d0)]=null,global['db'][_0x5b1227(0x157)]={'users':{},'chats':{},'stats':{},'msgs':{},'sticker':{},'settings':{},...global['db']['data']||{}},global['db'][_0x5b1227(0x197)]=chain(global['db'][_0x5b1227(0x157)]);},loadDatabase(),global[_0x4d33c9(0x198)]=(opts['_'][0x0]||_0x4d33c9(0x1af))+_0x4d33c9(0x176);const {state,saveState}=_0x5d24de[_0x4d33c9(0x1b4)](global['authFile']),connectionOptions={'printQRInTerminal':!![],'auth':state,'logger':_0x325628({'level':_0x4d33c9(0x194)}),'browser':[_0x4d33c9(0x1cf),_0x4d33c9(0x182),_0x4d33c9(0x1cc)]};global[_0x4d33c9(0x1c1)]=makeWASocket(connectionOptions),conn[_0x4d33c9(0x1c6)]=![];!opts[_0x4d33c9(0x192)]&&setInterval(async()=>{const _0x2a8978=_0x4d33c9;if(global['db']['data'])await global['db']['write']()['catch'](console['error']);if(opts[_0x2a8978(0x18c)])try{clearTmp();}catch(_0x5c6b42){console[_0x2a8978(0x1bd)](_0x5c6b42);}},0x3c*0x3e8);if(opts[_0x4d33c9(0x1d6)])(await import(_0x4d33c9(0x15e)))['default'](global[_0x4d33c9(0x1c1)],PORT);async function clearTmp(){const _0x1dc593=_0x4d33c9,_0x143ce0=[tmpdir(),join(__dirname,_0x1dc593(0x19e))],_0x5dc6db=[];return _0x143ce0['forEach'](_0x279d35=>readdirSync(_0x279d35)[_0x1dc593(0x167)](_0x36276c=>_0x5dc6db[_0x1dc593(0x19a)](join(_0x279d35,_0x36276c)))),_0x5dc6db['map'](_0x367f3f=>{const _0x249140=_0x1dc593,_0x31c6d3=statSync(_0x367f3f);if(_0x31c6d3[_0x249140(0x191)]()&&Date[_0x249140(0x1c3)]()-_0x31c6d3[_0x249140(0x1a3)]>=0x3e8*0x3c*0x1)return unlinkSync(_0x367f3f);return![];});}setInterval(async()=>{const _0x2c9872=_0x4d33c9;var _0x3e2c45=await clearTmp();console[_0x2c9872(0x16b)](_0x19fdef[_0x2c9872(0x1c7)](_0x2c9872(0x1a9)));},0xea60);function _0x3b7d(){const _0x2b27c4=['@s.whatsapp.net','4GwXhsr','groupsUpdate','Stickers\x20may\x20not\x20work\x20without\x20imagemagick\x20if\x20libwebp\x20on\x20ffmpeg\x20doesnt\x20isntalled\x20(pkg\x20install\x20imagemagick)','🚩ㅤConnection\x20closed,\x20if\x20the\x20bot\x20doesn\x27t\x20respond,\x20delete\x20the\x20','error\x20require\x20plugin\x20\x27','26493921UOrirK','4088688qvBEiY','freeze','catch','Group\x20subject\x20cchanged\x20\x0a@group','Safari','3701015LEhJlh','\x20folder/file\x20and\x20re-scan\x20the\x20QR\x20code','reload','map','-loglevel','Group\x20link\x20changed\x20\x0a@revoke','toString','creds.update','-hide_banner','autocleartmp','plugins','logger','sdemote','-frames:v','isFile','test','support','silent','parse','‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\x5c-','chain','authFile','close','push','Goodbye\x20@user','509565GwKBAR','\x5c$&','./tmp','open','bind','?update=','DATABASE','mtimeMs','then','1471843ngmZug','sRevoke','dirname','message.delete','✅\x20\x20Auto\x20clear\x20\x20|\x20\x20tmp\x20folder\x20cleared','./handler.js','replace','exitProcess','win32','__require','DUX','sendMessage','env','sIcon','sDesc','useSingleFileAuthState','chats','loggedOut','--version','module','Group\x20description\x20changed\x20\x0a@desc','APIs','info','deleted\x20plugin\x20-\x20\x27','error','connectionUpdate','color','default','conn','SERVER_PORT','now','PORT','yellow','isInit','cyan','statusCode','groups.update','bye','onDelete','1.0.0','__filename','config','DUX-BOT','READ','./handler.js?update=','ffmpeg','entries','all','MONGO_DB','server','Group\x20icon\x20changed','ffmpegWebp','participantsUpdate','argv','slice','uncaughtException','5884776HVxbQc','276915HUKunm','credsUpdate','syntax\x20error\x20while\x20loading\x20\x27','data','group-participants.update','find','reloadHandler','keys','connection.update','filter','./server.js','timestamp','warn','length','spromote','off','Stickers\x20may\x20not\x20animated\x20without\x20libwebp\x20on\x20ffmpeg\x20(--enable-ibwebp\x20while\x20compiling\x20ffmpeg)','./plugins/index','database.json','forEach','Hello,\x20@user\x0aWelcome\x20to\x20@group','APIKeys','handler','log','loadDatabase','__dirname','4ZlWDhX','Quick\x20Test\x20Done','🚩\x20Scan\x20this\x20QR\x20code,\x20the\x20QR\x20code\x20expires\x20in\x2060\x20seconds.','Made\x20by\x20','convert','NODE_TLS_REJECT_UNAUTHORIZED','messages.upsert','url','.data.json'];_0x3b7d=function(){return _0x2b27c4;};return _0x3b7d();}async function connectionUpdate(_0x5070f8){const _0x939e3a=_0x4d33c9,{connection:_0x4b2e80,lastDisconnect:_0x41a003,isNewLogin:_0x4e6be7}=_0x5070f8;global['stopped']=_0x4b2e80;if(_0x4e6be7)conn[_0x939e3a(0x1c6)]=!![];const _0x38941a=_0x41a003?.[_0x939e3a(0x1bd)]?.['output']?.[_0x939e3a(0x1c8)]||_0x41a003?.['error']?.['output']?.['payload']?.[_0x939e3a(0x1c8)];_0x38941a&&_0x38941a!==DisconnectReason[_0x939e3a(0x1b6)]&&conn?.['ws']['readyState']!==CONNECTING&&(console['log'](await global['reloadHandler'](!![])['catch'](console[_0x939e3a(0x1bd)])),global[_0x939e3a(0x15f)]['connect']=new Date());if(global['db'][_0x939e3a(0x157)]==null)loadDatabase();_0x5070f8['qr']!=0x0&&_0x5070f8['qr']!=undefined&&console[_0x939e3a(0x16b)](_0x19fdef[_0x939e3a(0x1c5)](_0x939e3a(0x170)));_0x4b2e80==_0x939e3a(0x19f)&&console[_0x939e3a(0x16b)](_0x19fdef[_0x939e3a(0x1c5)](_0x939e3a(0x171)+author));console[_0x939e3a(0x16b)](JSON['stringify'](_0x5070f8,null,0x4));if(_0x5070f8['receivedPendingNotifications'])for(let _0x590ea9 of global['owner']){if(_0x590ea9[_0x939e3a(0x161)]<0x2)continue;const [_0x165ab7,_0x4b6b4a,_0xeb9d91]=_0x590ea9;if(!_0xeb9d91)continue;const _0x21e9a7=_0x165ab7+_0x939e3a(0x177);await this[_0x939e3a(0x1b0)](_0x21e9a7,{'text':'Dear\x20User,\x0a\x0aDUX-BOT\x20has\x20been\x20successfully\x20initialized\x20and\x20is\x20now\x20fully\x20operational.\x0a\x0aAs\x20a\x20reminder,\x20please\x20ensure\x20to\x20use\x20the\x20bot\x20responsibly.\x0aYou\x20can\x20access\x20the\x20DUX-BOT\x27s\x20source\x20code\x20at\x20https://github.com/DUX322/DUX-BOT.\x20\x0aThis\x20script\x20is\x20free\x20for\x20everyone\x20to\x20use.\x20If\x20you\x20see\x20anyone\x20selling\x20it,\x20please\x20report\x20them\x20immediately.\x0a\x0a\x0aHappy\x20Messaging!\x0a\x0aBest,\x0aThe\x20DUX-BOT\x20Team','quoted':_0x21e9a7,'contextInfo':{'mentionedJid':[_0x21e9a7]}});}_0x4b2e80=='close'&&console[_0x939e3a(0x16b)](_0x19fdef[_0x939e3a(0x1c5)](_0x939e3a(0x17b)+global['authFile']+_0x939e3a(0x184)));}process['on'](_0x4d33c9(0x1dc),console['error']);let isInit=!![],handler=await import(_0x4d33c9(0x1aa));global['reloadHandler']=async function(_0x532180){const _0x1cefce=_0x4d33c9;try{const _0x52074b=await import(_0x1cefce(0x1d1)+Date['now']())[_0x1cefce(0x180)](console[_0x1cefce(0x1bd)]);if(Object[_0x1cefce(0x15b)](_0x52074b||{})[_0x1cefce(0x161)])handler=_0x52074b;}catch(_0x4ed7f0){console[_0x1cefce(0x1bd)](_0x4ed7f0);}if(_0x532180){const _0x39153e=global['conn'][_0x1cefce(0x1b5)];try{global[_0x1cefce(0x1c1)]['ws'][_0x1cefce(0x199)]();}catch{}conn['ev']['removeAllListeners'](),global[_0x1cefce(0x1c1)]=makeWASocket(connectionOptions,{'chats':_0x39153e}),isInit=!![];}return!isInit&&(conn['ev'][_0x1cefce(0x163)](_0x1cefce(0x174),conn['handler']),conn['ev'][_0x1cefce(0x163)](_0x1cefce(0x158),conn[_0x1cefce(0x1d9)]),conn['ev'][_0x1cefce(0x163)]('groups.update',conn[_0x1cefce(0x179)]),conn['ev'][_0x1cefce(0x163)](_0x1cefce(0x1a8),conn[_0x1cefce(0x1cb)]),conn['ev'][_0x1cefce(0x163)]('connection.update',conn[_0x1cefce(0x1be)]),conn['ev'][_0x1cefce(0x163)](_0x1cefce(0x18a),conn[_0x1cefce(0x155)])),conn['welcome']=_0x1cefce(0x168),conn[_0x1cefce(0x1ca)]=_0x1cefce(0x19b),conn[_0x1cefce(0x162)]='@user\x20now\x20admin',conn[_0x1cefce(0x18f)]='@user\x20demoted',conn[_0x1cefce(0x1b3)]=_0x1cefce(0x1b9),conn['sSubject']=_0x1cefce(0x181),conn[_0x1cefce(0x1b2)]=_0x1cefce(0x1d7),conn[_0x1cefce(0x1a6)]=_0x1cefce(0x188),conn[_0x1cefce(0x16a)]=handler[_0x1cefce(0x16a)][_0x1cefce(0x1a0)](global['conn']),conn[_0x1cefce(0x1d9)]=handler['participantsUpdate'][_0x1cefce(0x1a0)](global[_0x1cefce(0x1c1)]),conn[_0x1cefce(0x179)]=handler['groupsUpdate'][_0x1cefce(0x1a0)](global[_0x1cefce(0x1c1)]),conn[_0x1cefce(0x1cb)]=handler['deleteUpdate'][_0x1cefce(0x1a0)](global['conn']),conn[_0x1cefce(0x1be)]=connectionUpdate[_0x1cefce(0x1a0)](global[_0x1cefce(0x1c1)]),conn[_0x1cefce(0x155)]=saveState[_0x1cefce(0x1a0)](global['conn'],!![]),conn['ev']['on']('messages.upsert',conn['handler']),conn['ev']['on'](_0x1cefce(0x158),conn[_0x1cefce(0x1d9)]),conn['ev']['on'](_0x1cefce(0x1c9),conn[_0x1cefce(0x179)]),conn['ev']['on'](_0x1cefce(0x1a8),conn[_0x1cefce(0x1cb)]),conn['ev']['on'](_0x1cefce(0x15c),conn[_0x1cefce(0x1be)]),conn['ev']['on']('creds.update',conn['credsUpdate']),isInit=![],!![];};const pluginFolder=global[_0x4d33c9(0x16d)](join(__dirname,_0x4d33c9(0x165))),pluginFilter=_0x4ae955=>/\.js$/[_0x4d33c9(0x192)](_0x4ae955);global[_0x4d33c9(0x18d)]={};async function filesInit(){const _0xa5b38=_0x4d33c9;for(let _0x253ec6 of readdirSync(pluginFolder)[_0xa5b38(0x15d)](pluginFilter)){try{let _0x120486=global[_0xa5b38(0x1cd)](join(pluginFolder,_0x253ec6));const _0x4e2880=await import(_0x120486);global[_0xa5b38(0x18d)][_0x253ec6]=_0x4e2880[_0xa5b38(0x1c0)]||_0x4e2880;}catch(_0x38ec21){conn[_0xa5b38(0x18e)][_0xa5b38(0x1bd)](_0x38ec21),delete global['plugins'][_0x253ec6];}}}filesInit()[_0x4d33c9(0x1a4)](_0xed159b=>console[_0x4d33c9(0x16b)](Object[_0x4d33c9(0x15b)](global[_0x4d33c9(0x18d)])))[_0x4d33c9(0x180)](console[_0x4d33c9(0x1bd)]),global[_0x4d33c9(0x185)]=async(_0x1fa97c,_0x46ea0b)=>{const _0x4fe6e8=_0x4d33c9;if(pluginFilter(_0x46ea0b)){let _0x93848c=global[_0x4fe6e8(0x1cd)](join(pluginFolder,_0x46ea0b),!![]);if(_0x46ea0b in global[_0x4fe6e8(0x18d)]){if(existsSync(_0x93848c))conn['logger'][_0x4fe6e8(0x1bb)]('\x20updated\x20plugin\x20-\x20\x27'+_0x46ea0b+'\x27');else return conn['logger'][_0x4fe6e8(0x160)](_0x4fe6e8(0x1bc)+_0x46ea0b+'\x27'),delete global[_0x4fe6e8(0x18d)][_0x46ea0b];}else conn['logger'][_0x4fe6e8(0x1bb)]('new\x20plugin\x20-\x20\x27'+_0x46ea0b+'\x27');let _0x4b9642=_0x4b8505(readFileSync(_0x93848c),_0x46ea0b,{'sourceType':_0x4fe6e8(0x1b8),'allowAwaitOutsideFunction':!![]});if(_0x4b9642)conn['logger'][_0x4fe6e8(0x1bd)](_0x4fe6e8(0x156)+_0x46ea0b+'\x27\x0a'+format(_0x4b9642));else try{const _0xbc4dc6=await import(global[_0x4fe6e8(0x1cd)](_0x93848c)+_0x4fe6e8(0x1a1)+Date[_0x4fe6e8(0x1c3)]());global[_0x4fe6e8(0x18d)][_0x46ea0b]=_0xbc4dc6[_0x4fe6e8(0x1c0)]||_0xbc4dc6;}catch(_0x59d04c){conn[_0x4fe6e8(0x18e)][_0x4fe6e8(0x1bd)](_0x4fe6e8(0x17c)+_0x46ea0b+'\x0a'+format(_0x59d04c)+'\x27');}finally{global[_0x4fe6e8(0x18d)]=Object['fromEntries'](Object[_0x4fe6e8(0x1d3)](global[_0x4fe6e8(0x18d)])['sort'](([_0x2ccc94],[_0x46443f])=>_0x2ccc94['localeCompare'](_0x46443f)));}}},Object['freeze'](global[_0x4d33c9(0x185)]),watch(pluginFolder,global[_0x4d33c9(0x185)]),await global[_0x4d33c9(0x15a)]();async function _quickTest(){const _0x4ccd1e=_0x4d33c9;let _0x540845=await Promise[_0x4ccd1e(0x1d4)]([spawn(_0x4ccd1e(0x1d2)),spawn('ffprobe'),spawn(_0x4ccd1e(0x1d2),[_0x4ccd1e(0x18b),_0x4ccd1e(0x187),_0x4ccd1e(0x1bd),'-filter_complex',_0x4ccd1e(0x1bf),_0x4ccd1e(0x190),'1','-f','webp','-']),spawn(_0x4ccd1e(0x172)),spawn('magick'),spawn('gm'),spawn(_0x4ccd1e(0x159),[_0x4ccd1e(0x1b7)])][_0x4ccd1e(0x186)](_0x59f2b6=>{return Promise['race']([new Promise(_0x33a6ea=>{const _0x34a970=_0x5278;_0x59f2b6['on'](_0x34a970(0x199),_0x3f6dc3=>{_0x33a6ea(_0x3f6dc3!==0x7f);});}),new Promise(_0x165d62=>{const _0x1d712a=_0x5278;_0x59f2b6['on'](_0x1d712a(0x1bd),_0x483b2e=>_0x165d62(![]));})]);})),[_0xa4c66,_0x48b26e,_0x378b56,_0x39b85c,_0x35596d,_0x3468bf,_0x5d657f]=_0x540845;console[_0x4ccd1e(0x16b)](_0x540845);let _0x5eae88=global[_0x4ccd1e(0x193)]={'ffmpeg':_0xa4c66,'ffprobe':_0x48b26e,'ffmpegWebp':_0x378b56,'convert':_0x39b85c,'magick':_0x35596d,'gm':_0x3468bf,'find':_0x5d657f};Object[_0x4ccd1e(0x17f)](global['support']);if(!_0x5eae88['ffmpeg'])conn[_0x4ccd1e(0x18e)][_0x4ccd1e(0x160)]('Please\x20install\x20ffmpeg\x20for\x20sending\x20videos\x20(pkg\x20install\x20ffmpeg)');if(_0x5eae88['ffmpeg']&&!_0x5eae88[_0x4ccd1e(0x1d8)])conn[_0x4ccd1e(0x18e)]['warn'](_0x4ccd1e(0x164));if(!_0x5eae88[_0x4ccd1e(0x172)]&&!_0x5eae88['magick']&&!_0x5eae88['gm'])conn[_0x4ccd1e(0x18e)][_0x4ccd1e(0x160)](_0x4ccd1e(0x17a));}_quickTest()['then'](()=>conn['logger'][_0x4d33c9(0x1bb)](_0x4d33c9(0x16f)))[_0x4d33c9(0x180)](console[_0x4d33c9(0x1bd)]);
