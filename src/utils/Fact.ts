import { LanguageOption } from '@/utils/type';

interface Fact {
    id: string;
    photo: string;
}

interface FactTranslations {
    [key: string]: Record<LanguageOption, string>;
}

interface FactDescription {
    [key: string]: Record<LanguageOption, string>;
}

export const TentangFact: Fact[] = [
    { id: "kaori_cicak", photo: "/kaori_cicak.jpg" },
    { id: "kaori_tengkorak", photo: "/karoi_tengkorak.jpg" },
    { id: "tgl_18", photo: "/tgl18.jpg" },

];

export const FactName: FactTranslations = {
    kaori_cicak: {
        indonesia: "Kaori Cicak",
        inggris: "Gecko Kaori",
        romaji: "Yakōri Kaori",
        kanji: "ヤコウリ薫",
        jawa: "Kaori Cecak"
    },
    kaori_tengkorak: {
        indonesia: "Kaori Tengkorak",
        inggris: "Kaori Skull",
        romaji: "Kaori no Dokuro",
        kanji: "カオリの骸骨",
        jawa: "Kaori Tengkorak"
    },
    tgl_18: {
        indonesia: "Tanggal 18 Februari",
        inggris: "",
        romaji: "",
        kanji: "",
        jawa: ""
    },
};

export const FactDescriptions: FactDescription = {
    kaori_cicak: {
        indonesia: "Kaori Miyazono dari anime Your Lie in April sering dipanggil cicak sama para wibu. Gara-garanya karena dia terlihat mirip cicak, mata besar dan mulutnya yang melengkung. Meme Kaori Cicak jadi terkenal di internet dan medsos, banyak yang ngegabungin foto Kaori sama tubuh cicak buat lucu-lucuan. Tapi julukan cicak nggak dianggap nyinggung sama para penggemar, malah lucu-lucuan aja.",
        inggris: "Kaori Miyazono from the anime Your Lie in April is often called a gecko by anime fans. This is because she looks similar to a gecko, with large eyes and a curved mouth. The Gecko Kaori meme became famous on the internet and social media, with many people combining Kaori's photo with a gecko's body for fun. However, the gecko nickname isn't considered offensive by fans, it's just seen as a playful joke.",
        romaji: "Anime 'Shigatsu wa Kimi no Uso' no Kaori Miyazono wa, anime fan ni yotte yoku yakōri to yobaremasu. Kore wa kanojo ga ōkina me to magatta kuchi de yakōri ni nite iru kara desu. Yakōri Kaori no mīmu wa intānetto to sōsharu media de yūmei ni nari, takusan no hito ga Kaori no shashin to yakōri no karada o kumiawasete tanoshinde imasu. Shikashi, yakōri to iu aikyōna wa fan ni yotte kōgeki-teki to wa minasarezu, tada no yūmoa to shite toraete imasu.",
        kanji: "アニメ「四月は君の嘘」の香織宮園は、アニメファンによってよくヤコウリと呼ばれます。これは彼女が大きな目と湾曲した口でヤコウリに似ているからです。ヤコウリ薫のミームはインターネットとソーシャルメディアで有名になり、たくさんの人が薫の写真とヤコウリの体を組み合わせて楽しんでいます。しかし、ヤコウリという愛称はファンによって攻撃的とは見なされず、ただのユーモアとして捉えています。",
        jawa: "Kaori Miyazono saka anime Your Lie in April kerep diarani cecak karo para wibu. Sebabe merga dheweke ketok kaya cecak, mripate gedhe lan lambene sing melengkung. Meme Kaori Cecak dadi kondhang ing internet lan medhia sosial, akeh sing nggabungake fotone Kaori karo awake cecak kanggo guyonan. Nanging, julukan cecak ora dianggep nyinggung dening para penggemar, malah dianggep lucu wae."
    },
    kaori_tengkorak: {
        indonesia: "Meme tengkorak Kaori menjadi populer di kalangan penggemar anime Your Lie in April, karena jalan cerita yang menyedihkan dan tragis yang dihadapi oleh karakter tersebut. Di mana Kaori meninggal karena penyakit yang dideritanya. Meme tengkorak Kaori menampilkan gambar Kaori yang digambarkan sebagai tengkorak yang sedang bermain biola. Meme ini mengekspresikan perasaan penonton yang kecewa dan sedih dengan ending tragis dari anime tersebut. Sebagian besar penggemar anime Your Lie in April menerima meme tengkorak Kaori dengan baik dan menganggapnya sebagai cara untuk mengekspresikan perasaan mereka atas ending yang menyedihkan dari anime tersebut. Namun, ada juga yang menganggap meme ini tidak pantas dan menghormatinya.",
        inggris: "The Kaori skull meme became popular among fans of the anime Your Lie in April because of the sad and tragic storyline faced by the character. Kaori dies due to an illness she suffers from. The Kaori skull meme features an image of Kaori depicted as a skull playing the violin. This meme expresses the feelings of viewers who were disappointed and saddened by the tragic ending of the anime. Most fans of Your Lie in April accept the Kaori skull meme well and see it as a way to express their feelings about the sad ending of the anime. However, some also consider the meme inappropriate and disrespectful.",
        romaji: "Kaori no dokuro mīmu wa, anime 'Shigatsu wa Kimi no Uso' no fan no aida de ninki ni narimashita. Kaori ga byōki ni yotte shinu to iu kanashī to torajikku na sutōrīrain no tame desu. Kaori no dokuro no mīmu wa, Kaori ga baiorin o hiku dokuro toshite egakarete iru gazō o fīcharingu shite imasu. Kono mīmu wa, anime no torajikku na endingu ni yotte kanashī to kanashī ni natta kankyaku no kimochi o hyōgen shite imasu. Taitei no anime fan wa, Kaori no dokuro mīmu o yoku ukeire, anime no kanashī na endingu ni tsuite no kimochi o hyōgen suru hōhō to shite mite imasu. Shikashi, kono mīmu wa futekisetsu de fumeiyō to kangaeru hito mo imasu. ",
        kanji: "香織の骸骨のミームは、アニメ「四月は君の嘘」のファンの間で人気になりました。香織が病気によって死ぬという悲しいと悲劇的なストーリーラインのためです。香織の骸骨のミームは、香織がバイオリンを弾く骸骨として描かれている画像をフィーチャリングしています。このミームは、アニメの悲劇的なエンディングによって悲しいと悲しいになった観客の気持ちを表現しています。大抵のアニメファンは、香織の骸骨のミームをよく受け入れ、アニメの悲しいなエンディングについての気持ちを表現する方法として見ています。しかし、このミームは不適切で不名誉と考える人もいます。それに、香織の骸骨のミームは、「四月は君の嘘」のアニメファンの間で悲劇的なエンディングに対する気持ちを表現する創造的な形式の一つです。",
        jawa: "Meme tengkorak Kaori dadi kondhang ing kalangan penggemar anime Your Lie in April, merga crita sedhih lan tragis sing dialami dening karakter kasebut. Kaori mati merga penyakit sing diduweni. Meme tengkorak Kaori nampilake gambar Kaori sing digambarake minangka tengkorak sing lagi main biola. Meme iki nyatakake perasaan penonton sing kecewa lan sedhih karo ending tragis saka anime kasebut. Umume penggemar anime Your Lie in April nampa meme tengkorak Kaori kanthi apik lan nganggep iki minangka cara kanggo nyatakake perasaan sing sedhih amarga ending saka anime kasebut. Nanging, ana uga sing nganggep meme iki ora pantes lan ora sopan."
    },
    tgl_18: {
        indonesia: "Ada satu tradisi unik yang dilakukan para penggemar anime Shigatsu wa Kimi no Uso setiap tahunnya. Setiap tanggal 18 Februari para penggemar anime Shigatsu wa Kimi no Uso beramai-ramai memperingati hari kematian Miyazono Kaori, sang karakter wanita utama di berbagai jejaring media sosial. Tidak hanya itu, ada beberapa penggemar anime Shigatsu wa Kimi no Uso yang melakukan tradisi menonton ulang atau re-watch di tanggal tersebut tiap tahunnya. Pemilihan tanggal ini berdasarkan tanggal operasinya Miyazono Kaori dalam upaya menyembuhkan penyakitnya.  Adanya tradisi penggemar ini tiap tahunnya, menandakan bahwa seri anime Shigatsu wa Kimi no Uso berhasil dan terpatri di dalam hati para penontonnya tak lekang oleh waktu.",
        inggris: "On February 18th each year, there is a unique tradition observed by fans of the anime Shigatsu wa Kimi no Uso. On this day, fans commemorate the death of Miyazono Kaori, the female protagonist, across various social media platforms. Additionally, some fans also follow a tradition of re-watching the anime on this date each year. The annual observance of this tradition signifies that the anime Shigatsu wa Kimi no Uso has succeeded in making a lasting impression on its viewers.",
        romaji: "Tōka 18-nichi ni wa, anime Shigatsu wa Kimi no Uso no fan-tachi ga kotsu no keishiki o okonau tokubetsu na dōsa ga arimasu. Kono hi ni wa, fan-tachi ga Miyazono Kaori no shindō o shūshū shite, takusan no media shakai ni oishō shimasu. Mata, nan no fan-tachi wa kono hi ni anime o mikaesu dōsa o suru koto mo arimasu. Kotoshi no shūshū wa Shigatsu wa Kimi no Uso ga suki na kōka o kyōi shite iru koto o shimeshimasu.",
        kanji: "毎年2月18日には、アニメ「四月は君の嘘」のファンが行う特別な儀式があります。この日に、ファンたちは宮園かおりの死を追悼し、多くのソーシャルメディアに投稿します。また、何人かのファンは、この日にアニメを再視聴するという伝統もあります。この日が選ばれたのは、宮園かおりがエイヨウのための手術を受ける日を、エピソード21で有馬公生に伝えたことに基づいています。この年ごとの儀式は、「四月は君の嘘」がファンの心に強い印象を残したことを示しています。",
        jawa: "Tanggal 18 Februari saben taun, ana tradisi unik sing ditindakake para penggemar anime Shigatsu wa Kimi no Uso. Ing dina iki, para penggemar ngelingake tanggal kematian Miyazono Kaori, tokoh wanita utama, ing berbagai platform media sosial. Ora mung iku, sawetara penggemar uga nindakake tradisi nonton maneh anime iki ing tanggal iki saben taun. Peringatan tahunan iki nuduhake yen anime Shigatsu wa Kimi no Uso wis sukses nggawe kesan sing awet ing ati para penontone."
    }
}