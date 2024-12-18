import { LyricLine, LyricsData } from '@/utils/type';

const createLyrics = (texts: string[], startTimes: number[], endTimes: number[]): LyricLine[] => {
  return texts.map((text, index) => ({
    text,
    startTime: startTimes[index],
    endTime: endTimes[index],
  }));
};

const startTimes = [
  17, 20, 23.5, 29, 35,
  41, 44, 47,
  56, 59, 62, 64.5, 68, 70.5, 74, 76,
  82, 88, 93, 99,
  105, 108, 111,
  120, 123, 126, 129, 132, 135, 138, 141,
  146, 151, 156, 162, 170, 172, 175,
  182, 184, 187, 190, 194, 196, 199, 202,
  206, 213, 219, 224
];

const endTimes = [
  19.5, 23, 28, 34, 40,
  43.5, 46.5, 55,
  58.5, 61.5, 64, 67.5, 70, 73.5, 75.5, 81,
  87, 92.5, 98, 104.5,
  107.5, 110.5, 119,
  122.5, 125.5, 128.5, 132.5, 134.5, 137.5, 140.5, 145,
  150, 155, 161, 169, 171.5, 174.5, 181,
  183.5, 186.5, 189.5, 193.5, 195.5, 198.5, 201.5, 205.5,
  212, 218, 223.5, 240
];


const romaji: string[] = [
  "Ameagari no niji mo",
  "Rin to saita hana mo",
  "Irozuki afuredasu",
  "Akaneiro no sora aogu kimi ni",
  "Ano hi koi ni ochita",

  "Shunkan no doramachikku",
  "Firumu no naka no hitokoma mo",
  "Kienai yo kokoro ni kizamu kara",

  "Kimi da yo kimi nanda yo",
  "Oshiete kureta",
  "Kurayami mo hikaru nara",
  "Hoshizora ni naru",
  "Kanashimi mo egao ni",
  "Mou kakusanai de",
  "Kirameku don'na hoshi mo",
  "Kimi wo terasu kara",

  "Nemuri mo wasurete mukaeta asahi ga",
  "Yatara to tsukisasaru",
  "Teikiatsu hakobu zutsuu datte",
  "Wasureru kimi ni aeba",

  " Seijaku wa romantikku",
  "Koucha ni toketa shugaa no you ni",
  "Zenshin ni meguru yo kimi no koe",

  "Kimi da yo kimi nanda yo",
  "Egao wo kureta",
  "Namida mo hikaru nara",
  "Ryuusei ni naru",
  "Kizutsuita sono te wo",
  "Mou hanasanai de",
  "Negai wo kometa sora ni",
  "Ashita ga kuru kara",

  "Michibiite kureta hikari wa kimi da yo",
  "Tsurarete boku mo hashiridashita",
  "Shiranu ma ni kurosu shihajimeta",
  "Hora ima da koko de hikaru nara",
  "Kimi da yo kimi nanda yo",
  "Oshiete kureta",
  "Kurayami wa owaru kara",

  "Kimi da yo kimi nanda yo",
  "Oshiete kureta",
  "Kurayami mo hikaru nara",
  "Hoshizora ni naru",
  "Kanashimi wo egao ni",
  "Mou kakusanai de",
  "Kirameku donna hoshi mo",
  "Kimi wo terasu kara",

  "Kotae wa itsudemo guuzen? Hitsuzen?",
  "Itsuka eranda michi koso unmei ni naru",
  "Nigirishimeta sono kibou mo fuan mo",
  "Kitto futari wo ugokasu hikari ni naru kara",
];

const indonesia: string[] = [
  "Pelangi setelah hujan",
  "Serta Bunga yang mekar dalam dingin",
  "Menunjukkan Warna-wanrinya",
  "Di langit merah senja yang kau pandang",
  "Hari itu aku jatuh cinta",

  "Adegan Film Dramatis",
  "yang berlalu sejenak",
  "Tak akan hilang karena telahx terukir di hati",

  "Dirimu lah, dan itu dirimu",
  "Yang mengajarkanku",
  "Jika kita terangi kegelapan",
  "Maka Langit akan lebih berbintang",
  "Jangan Menutupi sedihmu",
  "dengan senyumanmu",
  "Karena Setiap bintang yang bersinar",
  "Akan menerangimu wajahmu kembali",

  "Aku lupa untuk tidur",
  "dan matahari pagi terlalu menyengatkanku",
  "Jika bertemu dirimu",
  "segala perasaan kacauku sirna olehmu",

  "Keheningan itu sangat romantis",
  "Seperti gula yang larut dalam teh hitam",
  "Sama seperti suaramu yang menggetarkan ragaku",

  "Dirimulah, dan itu dirimu",
  "Yang memberiku senyuman",
  "Jika air mata bisa berkilau",
  "maka bintang jatuh akan hiasi langit",
  "Jangan kau lepaskan lagi",
  "Tangan yang terluka itu",
  "Karena langit esok akan dihiasi",
  "oleh harapan yang datang",

  "Cahaya yang menuntunku adalah dirimu",
  "Aku yang terseret pun mulai berlari",
  "Dan tanpa sadar telah menyebrang",
  "Di sini dan saat ini, jika cahaya itu ada",
  "Dirimulah, dan itu dirimu",
  "yang memberitahuku ",
  "bahwa gelap akan segera pergi",

  "Dirimulah, dan itu dirimu",
  "Yang mengajarkanku",
  "Jika kita terangi kegelapan",
  "Maka Langit akan lebih berbintang",
  "Jangan Menutupi sedihmu",
  "dengan senyumanmu",
  "Karena Setiap bintang yang bersinar",
  "Akan menerangimu wajahmu kembali",

  "Apa setiap kali jawaban itu mungkin? Perlukah?",
  "Suatu saat jalan yang terpilih akan menjadi takdir",
  "Beserta harapan dan keinginan yang digenggam",
  "Akan membuat kita melangkah, karena harapan itu ‘kan jadi cahaya",
];

const inggris: string[] = [
  "A rainbow after rain",
  "and a flower that bloomed with the cold",
  "are abundantly changing colors",
  "That day, I fell in love with you",
  "who looked up at the blazing red sky",

  "That one instant in a ",
  "scene of the dramatic film",
  "Won't disappear, because it's etched into my heart",

  "It's you, it's you",
  "Who taught me",
  "If the darkness shines too",
  "then it'll become a night of stars",
  "Don't hide your sadness ",
  "behind a laughing face anymore",
  "Because all the twinkling stars",
  "will shine on you",

  "Welcoming the morning sun without sleep",
  "Piercing sharply",
  "The headache brought by the low pressure",
  "Will be forgotten when I meet you",

  "The silence is romantic",
  "Like sugar melted in black tea",
  "Your voice circulates through my entire body",

  "It's you, it's you",
  "Who gave me a smile",
  "If tears can shine",
  "They will become a meteor",
  "Those wounded hands",
  "Don't let go anymore",
  "In the sky filled with wishes",
  "Tomorrow will come",

  "The light that guided me is you",
  "Making me start running too",
  "Before I knew it, we began to cross paths",
  "Look, if it shines here now",
  "It's you, it's you",
  "Who taught me",
  "The darkness will end",

  "It's you, it's you",
  "Who taught me",
  "If the darkness can shine",
  "It will become a starry sky",
  "Even sadness will turn into a smile",
  "Don't hide it anymore",
  "Every shining star",
  "Will illuminate you",

  "Is the answer always coincidence? Inevitability?",
  "The path you choose someday will become destiny",
  "The hope and anxiety you hold tightly",
  "Will surely become the light that moves us both",
];

const kanji: string[] = [
  "雨上がりの虹も",
  "凛と咲いた花も",
  "色づきあふれ出す",
  "茜色の空 仰ぐ君に",
  "あの日恋に落ちた",

  "瞬間のドラマチック",
  "フィルムの中のひとこまも",
  "消えないよ 心に刻むから",

  "君だよ 君なんだよ",
  "教えてくれた",
  "暗闇も光るなら",
  "星空になる",
  "悲しみも笑顔に",
  "もう隠さないで",
  "煌めくどんな星も",
  "君を照らすから",

  "眠りも忘れて 迎えた朝日が",
  "やたらと突き刺さる",
  "低気圧運ぶ頭痛だって",
  "忘れる 君に会えば",

  "静寂はロマンティック",
  "紅茶に溶けたシュガーのように",
  "全身に巡るよ 君の声",

  "君だよ 君なんだよ",
  "笑顔をくれた",
  "涙も光るなら",
  "流星になる",
  "傷ついたその手を",
  "もう離さないで",
  "願いを込めた空に",
  "明日が来るから",

  "導いてくれた光は君だよ",
  "連れて僕も走り出した",
  "知らぬ間にクロスし始めた",
  "ほら 今だここで光るなら",
  "君だよ 君なんだよ",
  "教えてくれた",
  "暗闇は終わるから",

  "君だよ 君なんだよ",
  "教えてくれた",
  "暗闇も光るなら",
  "星空になる",
  "悲しみを笑顔に",
  "もう隠さないで",
  "煌めくどんな星も",
  "君を照らすから",

  "答えはいつでも偶然? 必然?",
  "いつか選んだ道こそ運命になる",
  "握りしめたその希望も不安も",
  "きっと二人を動かす光になるから",
];

const jawa: string[] = [
  "Pelangi sakwise udan",
  "Kembang sing mekrok kanthi gagah",
  "Werna-werna sing kebak",
  "Ing langit abang senja sing kowe pandang",
  "Dina iku aku tresna marang kowe",

  "Momen dramatis sekedhik iku",
  "Saben adegan ing film",
  "Ora bakal ilang, tetulis ing ati",

  "Kowe, kowe kuwi",
  "Sing mulang aku",
  "Yen peteng bisa sumunar",
  "Bakal dadi langit lintang",
  "Susah bakal dadi eseman",
  "Aja disimpen maneh",
  "Saben lintang sing sumunar",
  "Bakal madhangi kowe",

  "Sambut esuk tanpa turu",
  "Nusuk kanthi tajem",
  "Sirah lara sing digawa tekanan rendah",
  "Bakal dilalekake yen ketemu kowe",

  "Kasepen iku romantis",
  "Kaya gula sing lebur ing teh ireng",
  "Swara kowe mili ing kabeh awak",

  "Kowe, kowe kuwi",
  "Sing maringi aku eseman",
  "Yen eluh bisa sumunar",
  "Bakal dadi lintang jatuh",
  "Tangan sing lara iku",
  "Aja dibuwang maneh",
  "Ing langit sing kebak pangarep-arep",
  "Sesuk bakal teka",

  "Cahya sing nuntun iku kowe",
  "Nyebabke aku melu mlayu",
  "Tanpa sadar kita wiwit nyabrang",
  "Deloken, yen saiki sumunar ing kene",
  "Kowe, kowe kuwi",
  "Sing mulang aku",
  "Peteng bakal rampung",

  "Kowe, kowe kuwi",
  "Sing mulang aku",
  "Yen peteng bisa sumunar",
  "Bakal dadi langit lintang",
  "Susah bakal dadi eseman",
  "Aja disimpen maneh",
  "Saben lintang sing sumunar",
  "Bakal madhangi kowe",

  "Apa jawaban tansah kebeneran? Kebutuhan?",
  "Jalan sing kapan wae kowe pilih bakal dadi takdir",
  "Pangarep-arep lan kuatir sing kowe gegem erat",
  "Bakal dadi cahya sing nggerakke awadewe",
];


export const lyricsData: LyricsData = {
  inggris: createLyrics(inggris, startTimes, endTimes),
  romaji: createLyrics(romaji, startTimes, endTimes),
  indonesia: createLyrics(indonesia, startTimes, endTimes),
  kanji: createLyrics(kanji, startTimes, endTimes),
  jawa: createLyrics(jawa, startTimes, endTimes),
};
