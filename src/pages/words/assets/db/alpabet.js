export const  Alphabet = []

for (let i = 65; i <= 90; i++) {
    Alphabet.push(String.fromCharCode(i));
}

export const  KhAlphabet = []

const khmerAlphabets  = [
    "ក", "ខ", "គ", "ឃ", "ង", "ច", "ឆ", "ជ", "ឈ", "ញ",
    "ដ", "ឋ", "ឌ", "ឍ", "ណ", "ត", "ថ", "ទ", "ធ", "ន",
    "ប", "ផ", "ព", "ភ", "ម", "យ", "រ", "ល", "វ", "ឝ",
    "ឞ", "ស", "ហ", "ឡ", "អ", "ឥ", "ឦ", "ឧ", "ឨ", "ឩ",
    "ឪ", "ឫ", "ឬ", "ឭ", "ឮ", "ឯ", "ឰ", "ឱ", "ឲ", "ឳ"
]

khmerAlphabets.map((char, index) => {
    KhAlphabet.push({
        id:`${index + 1}_${char}`,
        char_name:char
    })
})