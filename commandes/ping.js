const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { default: axios } = require('axios');
//const conf = require('../set');


zokou({ nomCom: 'ping',
    desc: 'To check ping',
    Categorie: 'General',
    reaction: '🚨', 
    fromMe: 'true', 

       
  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;
    const { start} = new Date().getTime()
    return repondre('📌 *DEXTER-MD ♨ PING*\n ```' + 2000 + '``` *ms*') 
    const { end } = new Date().getTime()
    await zok.sendMessage('*Ping!*\n ```' + (end - start) + '``` *ms*')
  }
)

