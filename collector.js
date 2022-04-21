const Discord = require('discord.js');
const bot = new Discord.Client();
const download = require('download-file');
const imageLib = require('./imageLib.js');
let k = 0;
var options = {
    directory: "./img",
    filename: `Hell.png`
}

bot.on('ready', () => {
    console.log('Ready');
});

bot.on('message', async msg => {
    if ((msg.content.includes(' collect ')) && (msg.author.id === "bot_id")) {
        console.log("Found image.")
        if (!msg.attachments.first()) return;
        let url = msg.attachments.first().url;
        await (async () => {
            return new Promise(resolve => {
                download(url, options, function(err) {
                    if (err) throw err;
                    console.log("Saved.")
                    resolve('Saved.')
                })
            })
        })()
        imageLib('./img/Hell.png').pngToData(async function() {
    let f = ``;
    let that1 = this;
    function c1(x, y) {
        if ((that1.getPixel(x, y)[0] === 255) && (that1.getPixel(x, y)[1] === 255) && (that1.getPixel(x, y)[2] === 255) && (that1.getPixel(x, y)[3] === 255)) {
            return true
        } else {
            return false
        }
    }
    that1.resize(500, 500, true);
    let m = 0;
    {
        for (let j = 0; j < 4; j++) {
            let a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (let i = 0; i < 16; i++)
                await (async () => {
                    return new Promise(resolve => {
                        imageLib(`D:/bot/img/${i}.png`).pngToData(async function() {
                            let that2 = this;
                            function c2(x, y) {
                                if (!(that2.getPixel(x, y)[0] === 255) && !(that2.getPixel(x, y)[1] === 255) && !(that2.getPixel(x, y)[2] === 255) && (that2.getPixel(x, y)[3] === 255)) {
                                    return true
                                } else {
                                    return false
                                }
                            }
                            function cmp(x1, y1, x2, y2) {
                                if ((x2 == 15) && (y2 == 29)) {
                                    if (c1(x1, y1) === c2(x2, y2)) {
                                        return 20
                                    } else return 0;
                                } else {
                                    if (c1(x1, y1) === c2(x2, y2)) {
                                        return 1
                                    } else return 0;
                                }
                            }
                            while (!(c1(m, 12) || c1(m, 42))) {
                                m++;
                            }
                            for (let x = 0; x < 16; x++) {
                                for (let y = 0; y < 30; y++) {
                                    a[i] = a[i] + cmp(x + m, y + 12, x, y);
                                    resolve(i, a[i]);
                                }
                            }
                        })
                    })
                })()
            let n = a[0];
            t = 0;
            for (let b = 1; b < 16; b++)
                if (a[b] > n) {
                    n = a[b];
                    t = b
                }
           if (t < 16) {
                f = f + '0123456789abcdef'[t]
            } 
            if (f[j] == 'f') {
                m = m + 16
            } else
                while ((c1(m, 12) || c1(m, 42))) {
                    m++;
                }
        }
        msg.channel.send(`.pick ${f}`);
        k++;
        console.log('Собрано:', k);
    }
});
}
});

bot.login("your_token");