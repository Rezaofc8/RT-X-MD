let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Pulsa [6289606790112]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana [6281515696780]
│ • Dana [6281515696780]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
