import { LanguageOption } from '@/components/lyrics/type';

interface Character {
    id: string;
    photo: string;
}

interface CharacterTranslations {
    [key: string]: Record<LanguageOption, string>;
}

interface CharacterDescription {
    [key: string]: Record<LanguageOption, string>;
}

export const TentangCharacters: Character[] = [
    { id: "arima_kousei", photo: "/kousei.jpg" },
    { id: "miyazono_kaori", photo: "/kaori.jpg" },
    { id: "ryouta_watari", photo: "/watari.jpg" },
    { id: "tsubaki_sawabe", photo: "/sawabe.jpg" },
];

export const CharacterNames: CharacterTranslations = {
    arima_kousei: {
        indonesia: "Kousei Arima",
        inggris: "Arima Kousei",
        romaji: "Kousei Arima",
        kanji: "有馬 公生",
        jawa: "Arima Kousei"
    },
    miyazono_kaori: {
        indonesia: "Miyazono Kaori",
        inggris: "Kaori Miyazono",
        romaji: "Miyazono Kaori",
        kanji: "宮園 かをり",
        jawa: "Miyazono Kaori"
    },
    ryouta_watari: {
        indonesia: "Ryouta Watari",
        inggris: "Watari Ryouta",
        romaji: "Ryouta Watari",
        kanji: "渡亮太",
        jawa: "Ryouta Watari"
    },
    tsubaki_sawabe: {
        indonesia: "Sawabe Tsubaki",
        inggris: "Tsubaki Sawabe",
        romaji: "Sawabe Tsubaki",
        kanji: "澤部椿",
        jawa: "Tsubaki Sawabe"
    }
};

export const CharacterDescriptions: CharacterDescription = {
    arima_kousei: {
        indonesia: "Kousei adalah seorang pianis berbakat dan merupakan pianis termuda yang memenangkan Kompetisi Saki, namun ia berhenti bermain setelah kematian ibunya yang menyebabkan ketidakmampuannya untuk mendengar suara permainannya sendiri. Setelah kematian ibunya, dia hidup selama dua tahun tanpa bermain piano dan melihat dunia melalui warna-warna monoton, namun hal ini berubah setelah bertemu dengan Kaori Miyazono, seorang musisi muda yang cantik yang mendorong Kousei hingga ke batas kemampuannya untuk mengembalikan jari-jarinya ke tuts piano.",
        inggris: "Kousei is a prodigy pianist and was the youngest pianist to win the Saki Competition but quit playing after the death of his mother resulted in his inability to hear the sounds of his own playing. Following the death of his mother, he lived two years without playing the piano and saw the world through monotone colors, but this changed after meeting Kaori Miyazono, a beautiful young musician who pushed Kousei to his limits in an attempt to get his fingers back onto the piano keys.",
        romaji: "Kousei wa tensai pianisuto de, Saki Konkūru de saishou nenrei yūshōsha to natta ga, haha no shi ni yotte jibun no ensō no oto ga kikoenaku natta tame, piano o yameta. Haha no shi go, ni-nen-kan piano o hikazuni monotōn na sekai de ikite ita ga, utsukushii wakate no ongakuka Miyazono Kaori to deatte kara, kanojo ni hagemasa re, saido piano o hiraku koto ni natta.",
        kanji: "公生は天才ピアニストで、咲コンクールで最少年齢優勝者となったが、母の死によって自分の演奏の音が聞こえなくなったため、ピアノをやめた。母の死後、2年間ピアノを弾かずにモノトーンな世界で生きていたが、美しい若手の音楽家宮園かをりと出会ってから、彼女に励まされ、再度ピアノを開くことになった。",
        jawa: "Kousei kuwi pianis pinter lan dadi pianis paling enom sing menang Kompetisi Saki, nanging mandeg main piano sawise ibune seda sing nyebabake dheweke ora bisa krungu swara mainane dhewe. Sawise ibune seda, dheweke urip rong taun tanpa main piano lan ndeleng donya kanthi werna monoton, nanging iki owah sawise ketemu karo Kaori Miyazono, musisi enom sing ayu sing ndorong Kousei nganti tekan wates kemampuane kanggo mbalekake driji-drijine menyang tuts piano."
    },
    miyazono_kaori: {
        indonesia: "Kaori Miyazono adalah salah satu protagonis utama Shigatsu wa Kimi no Uso. Dia adalah pemain biola yang membantu Kousei Arima kembali ke dunia piano setelah kematian ibunya. Kaori Miyazono adalah pemain biola berjiwa bebas yang gaya permainannya mencerminkan kepribadiannya. Ia mandiri, tidak dapat diprediksi, dan pemarah. Ia juga terkadang bersikap pasif agresif. Dia adalah pacar Watari, namun ia lebih suka ke kousei",
        inggris: "Kaori Miyazono is one of the main protagonists of Shigatsu wa Kimi no Uso. She is a violinist who helps Kousei Arima return to the piano world after his mother's death. Kaori Miyazono is a free-spirited violinist whose playing style reflects on her personality. She is independent, unpredictable, and short-tempered. It is also touched upon that she is passive aggressive at times. She is Watari's girlfriend, but she prefers kousei.",
        romaji: "Miyazono Kaori wa Shigatsu wa Kimi no Uso no shuyaku no hitori desu. Kanojo wa Arima Kousei ga haha no shi no ato ni piano no sekai ni modoru no o tasukeru baiorinisuto desu. Miyazono Kaori wa jiyū na seishin no baiorinisuto de, kanojo no ensō sutairu wa kanojo no seikaku o hanei shite imasu. Kanojo wa dokuritsu-teki de, yosoku fukano de, ki ga mijikai desu. Toki ni shōkyokuteki ni kōgeki-teki de aru koto mo furete imasu. Kanojo wa Watari no kanojo desu ga, Kousei no hō ga suki desu.",
        kanji: "宮園かをりは「四月は君の嘘」の主役の一人です。彼女は有馬公生が母の死の後にピアノの世界に戻るのを助けるバイオリニストです。宮園かをりは自由な精神のバイオリニストで、彼女の演奏スタイルは彼女の性格を反映しています。彼女は独立的で、予測不可能で、気が短いです。時に消極的に攻撃的であることも触れています。彼女は渡の彼女ですが、公生の方が好きです。",
        jawa: "Kaori Miyazono kuwi salah sijine protagonis utama ing Shigatsu wa Kimi no Uso. Dheweke pemain biola sing mbantu Kousei Arima mbalik menyang donya piano sawise ibune seda. Kaori Miyazono kuwi pemain biola sing bebas jiwane lan cara mainne nggambarake kepribadiane. Dheweke mandiri, ora bisa diprediksi, lan gampang nesu. Dheweke uga kadang-kadang pasif agresif. Dheweke pacare Watari, nanging luwih seneng marang Kousei."
    },
    ryouta_watari: {
        indonesia: "Ryouta adalah teman masa kecil Kousei dan Tsubaki yang juga kapten tim sepak bola sekolah. Dia sangat populer di kalangan para gadis, dan sering bersikap sembrono. Namun demikian, sesekali dia juga memiliki wawasan yang bagus. Ryota adalah anak yang suka bermain-main. Dia tampaknya lebih menyukai gadis yang imut terlihat dari komentarnya di episode 1 bahwa ketika dia melihat Kaori untuk pertama kalinya, dia menyatakan bahwa Tsubaki melakukan pekerjaan yang baik dalam menemukan seorang gadis yang terlihat imut. Dia adalah pacar dari kaori miyazono.",
        inggris: "Ryouta is a childhood friend of Kousei and Tsubaki who is also the captain of the school football team. He is very popular with the girls, and is often reckless. However, he occasionally has great insight. Ryota is a playful boy. He seems to prefer cute girls as seen from his comment in episode 1 that when he saw Kaori for the first time, he stated that Tsubaki did a good job of finding a girl who looked cute. He is the boyfriend of Kaori Miyazono.",
        romaji: "Ryouta wa Kousei to Tsubaki no osananajimi de, gakkō no sakkā-bu no kyaputen demo arimasu. Kare wa onna no ko-tachi ni totemo ninki ga arimasu ga, yoku mubō na kōdō o shimasu. Shikashi, toki ni wa subarashii dōsatsu-ryoku o motte imasu. Ryouta wa asobi-zuki na shōnen desu. Kare wa kawaii onna no ko ga suki na yō de, dai-ichi-wa de Kaori o hajimete mita toki ni, Tsubaki ga kawaii onna no ko o mitsuketa to itte ita koto kara mo wakari masu. Kare wa Miyazono Kaori no kareshi desu.",
        kanji: "亮太は公生と椿の幼なじみで、学校のサッカー部のキャプテンでもあります。彼は女の子たちにとても人気がありますが、よく無謀な行動をします。しかし、時には素晴らしい洞察力を持っています。亮太は遊び好きな少年です。彼はかわいい女の子が好きなようで、第一話でかをりを初めて見たときに、椿がかわいい女の子を見つけたと言っていたことからもわかります。彼は宮園かをりの彼氏です。",
        jawa: "Ryouta kuwi kancane Kousei lan Tsubaki nalika isih cilik lan uga kapten tim sepak bola sekolah. Dheweke populer banget ing antarane cah wadon-wadon, lan asring tumindak sembrana. Nanging, kadang-kadang dheweke uga duwe wawasan sing apik. Ryota kuwi bocah sing seneng dolanan. Dheweke kaya-kaya luwih seneng cah wadon sing ayu, katon saka komentare ing episode 1 yen nalika dheweke ndeleng Kaori kanggo pisanan, dheweke ngomong yen Tsubaki wis nindakake tugas sing apik nemokake cah wadon sing katon ayu. Dheweke pacare Kaori Miyazono."
    },
    tsubaki_sawabe: {
        indonesia: "Tsubaki adalah teman masa kecil Kousei. Dia selalu datang ke pertunjukan Kousei dan mendukungnya. Bersama Kousei dalam waktu yang lama, Tsubaki secara bertahap mengambil peran sebagai kakak perempuan. Kousei adalah adik yang tidak berguna, yang harus ia rawat. Alih-alih tipe orang yang suka musik, Tsubaki adalah tipe orang yang atletis. Ia masuk dalam tim softball di sekolah menengah pertama dan sekolah menengah atas bersama dengan senpai-nya dari sekolah menengah pertama, di mana ia sangat menikmati olahraga ini.",
        inggris: "Tsubaki is Kousei's childhood friend. She has always gone to his performances and cheered him on. Being with Kousei for a long time, Tsubaki gradually took on the role as an older sister. Kousei was that useless little brother she just had to take care of. Rather than the music type, Tsubaki was the athletic type. She was on the softball team in both middle school and high school along with her senpai from middle school where she enjoyed the sport a lot.",
        romaji: "Tsubaki wa Kousei no osananajimi desu. Kanojo wa itsumo kare no ensō ni itte, ōen shite kimashita. Nagai aida Kousei to issho ni ite, Tsubaki wa jojo ni ane no yō na yakuwari o motsu yō ni narimashita. Kousei wa kanojo ga sewa o shinakerebanaranu yakunitatanai otōto deshita. Ongaku-kei to iu yori, Tsubaki wa undō-kei deshita. Kanojo wa chūgakkō to kōkō no ryōhō de sofutobōru-bu ni haitte ite, chūgakkō kara no senpai to issho ni, sono supōtsu o ōini tanoshinde imashita.",
        kanji: "椿は公生の幼なじみです。彼女はいつも彼の演奏に行って、応援してきました。長い間公生と一緒にいて、椿は徐々に姉のような役割を持つようになりました。公生は彼女が世話をしなければならぬ役に立たない弟でした。音楽系というより、椿は運動系でした。彼女は中学校と高校の両方でソフトボール部に入っていて、中学校からの先輩と一緒に、そのスポーツを大いに楽しんでいました。",
        jawa: "Tsubaki kuwi kancane Kousei nalika isih cilik. Dheweke tansah teka menyang pertunjukane Kousei lan nyengkuyung dheweke. Bareng karo Kousei ing wektu sing suwe, Tsubaki kanthi alon-alon njupuk peran minangka mbak. Kousei kuwi adhi sing ora migunani, sing kudu dirawat. Nanging, tinimbang wong sing seneng musik, Tsubaki kuwi wong sing atletis. Dheweke mlebu tim softball ing SMP lan SMA bareng karo senpai-ne saka SMP, ing ngendi dheweke seneng banget karo olahraga iki."
    }
};