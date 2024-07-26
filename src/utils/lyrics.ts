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
  "Bunga yang mekar dengan anggun",
  "Warna-warna yang bermekaran",
  "Di langit merah senja yang kau pandang",
  "Hari itu aku jatuh cinta",

  "Momen dramatis sekejap itu",
  "Setiap adegan dalam film",
  "Tak akan hilang, terukir di hati",

  "Kamu, kamu lah",
  "Yang mengajarkanku",
  "Jika kegelapan bisa bersinar",
  "Itu akan menjadi langit berbintang",
  "Kesedihan pun akan menjadi senyuman",
  "Jangan lagi kau sembunyikan",
  "Setiap bintang yang berkilau",
  "Akan menerangimu",

  "Menyambut fajar yang tiba tanpa tidur",
  "Menusuk dengan tajam",
  "Sakit kepala yang dibawa oleh tekanan rendah",
  "Akan terlupakan saat bertemu denganmu",

  "Keheningan itu romantis",
  "Seperti gula yang larut dalam teh hitam",
  "Suaramu mengalir ke seluruh tubuh",

  "Kamu, kamu lah",
  "Yang memberiku senyuman",
  "Jika air mata bisa bersinar",
  "Itu akan menjadi meteor",
  "Tangan yang terluka itu",
  "Jangan kau lepaskan lagi",
  "Di langit yang penuh harapan",
  "Hari esok akan datang",

  "Cahaya yang menuntun itu adalah dirimu",
  "Membuatku ikut berlari",
  "Tanpa sadar kita mulai berpapasan",
  "Lihatlah, jika sekarang bersinar di sini",
  "Kamu, kamu lah",
  "Yang mengajarkanku",
  "Kegelapan akan berakhir",

  "Kamu, kamu lah",
  "Yang mengajarkanku",
  "Jika kegelapan bisa bersinar",
  "Itu akan menjadi langit berbintang",
  "Kesedihan pun akan menjadi senyuman",
  "Jangan lagi kau sembunyikan",
  "Setiap bintang yang berkilau",
  "Akan menerangimu",

  "Apakah jawaban selalu kebetulan? Kepastian?",
  "Jalan yang suatu hari kau pilih akan menjadi takdir",
  "Harapan dan kekhawatiran yang kau genggam erat",
  "Pasti akan menjadi cahaya yang menggerakkan kita berdua",
];

const inggris: string[] = [
  "The rainbow after the rain",
  "The flower that bloomed gracefully",
  "The colors overflowing",
  "In the crimson sky you gaze at",
  "That day I fell in love",

  "That momentary dramatic",
  "Every frame in the film",
  "Won't disappear, engraved in my heart",

  "It's you, it's you",
  "Who taught me",
  "If the darkness can shine",
  "It will become a starry sky",
  "Even sadness will turn into a smile",
  "Don't hide it anymore",
  "Every shining star",
  "Will illuminate you",

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
  "Bakal dadi cahya sing nggerakke kita loro",
];


export {inggris, romaji, indonesia, kanji, jawa}