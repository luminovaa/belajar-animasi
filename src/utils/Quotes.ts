import { LanguageOption } from '@/utils/type';

interface Quote {
    id: string;
}

interface QuoteTranslations {
    [key: string]: Record<LanguageOption, string>;
}

interface QuoteDescription {
    [key: string]: Record<LanguageOption, string>;
}

export const TentangQuotes: Quote[] = [
    { id: "arima_kousei" },
    { id: "miyazono_kaori" },
    { id: "ryouta_watari" },
    { id: "tsubaki_sawabe" },
    { id: "dll" },
];

export const QuoteNames: QuoteTranslations = {
    arima_kousei: {
        indonesia: "Quotes dari Kousei Arima",
        inggris: "Quotes from Kousei Arima",
        romaji: "Kousei Arima no Kōto",
        kanji: "有馬 公生の引用",
        jawa: "Kutipan saka Kousei Arima"
    },
    miyazono_kaori: {
        indonesia: "Quotes dari Miyazono Kaori",
        inggris: "Quotes from Miyazono Kaori",
        romaji: "Miyazono Kaori no Kōto",
        kanji: "宮園 かをりの引用",
        jawa: "Kutipan saka Miyazono Kaori"
    },
    ryouta_watari: {
        indonesia: "Quotes dari Ryouta Watari",
        inggris: "Quotes from Ryouta Watari",
        romaji: "Watari Ryouta no Kōto",
        kanji: "渡 亮太の引用",
        jawa: "Kutipan saka Ryouta Watari"
    },
    tsubaki_sawabe: {
        indonesia: "Quotes dari Sawabe Tsubaki",
        inggris: "Quotes from Sawabe Tsubaki",
        romaji: "Sawabe Tsubaki no Kōto",
        kanji: "澤部 椿の引用",
        jawa: "Kutipan saka Sawabe Tsubaki"
    },
    dll: {
        indonesia: "Quotes dari Character Lainnya",
        inggris: "Quotes from Other Characters",
        romaji: "Sonota no kyarakutā no kōto",
        kanji: "他のキャラクターの引用",
        jawa: "Kutipan saka Karakter Liyane"
    },
};


export const QuoteDescriptions: QuoteDescription = {
    arima_kousei: {
        indonesia: `1. “Ada kesenangan cinta dan kesedihan cinta, tapi kenapa kau selalu memainkan kesedihan cinta? Itu agar kamu terbiasa dengan kesedihan.”<br/>
                   2. “Mozart bilang, “Mulailah perjalananmu”. Tak ada yang tahu kedepannya nanti akan seperti apa. Tapi aku sudah mengambil satu langkah maju. Tapi kita masih baru memulai perjalanan kita. Aku sama sepertimu, seorang pemusik. Karena itulah, aku melangkah maju.”<br/>
                   3. “Datang dan pergi, aku selalu saja mencari alasan.”<br/>
                   4. “Kau seperti kucing. Saat aku mendekatimu, kau berbalik arah dan pergi menjauh. Saat aku terluka, kau mendekat dan ingin berbagi rasa sakitnya.”<br/>
                   5. “Aku akan berjuang. Meskipun aku tidak tahu bagaimana hasilnya, tapi aku akan berjuang sekeras mungkin.”<br/>
                   6. “Di dasar laut yang gelap pun, cahaya masih bisa masuk.” <br/>
                   7.“Hanya dengan melihat langit yang sama denganmu, membuat pemandangan yang biasa terlihat berbeda.” <br/>
                   `,
        inggris: `1. "There is joy in love and sadness in love, but why do you always focus on the sadness of love? It is so you become accustomed to sadness."<br/>
                   2. "Mozart said, 'Begin your journey.' No one knows what the future holds. But I have taken one step forward. Yet, we are still at the beginning of our journey. I am like you, a musician. That’s why I keep moving forward."<br/>
                   3. "Coming and going, I always look for reasons."<br/>
                   4. "You are like a cat. When I approach you, you turn away and move further. When I am hurt, you come close and want to share the pain."<br/>
                   5. "I will fight. Even though I don't know how it will turn out, I will fight as hard as I can."<br/>
                   6. "Even in the dark depths of the sea, light can still enter."<br/>
                   7. "Just by seeing the same sky as you, the usual view looks different."<br/>`,
        romaji: `1. "Ai ni wa yorokobi mo kanashimi mo aru kedo, naze itsumo kanashimi no ai wo motte irunoka? Sore wa kanashimi ni narete iru kara."<br/>
                  2. "Mozart wa 'Tabi wo hajimeyo' to itta. Mirai ga dou naru ka wa daremo shiranai. Demo, watashi wa hitotsu no ashi wo fumimashita. Sorede mo, watashitachi wa mada hajimete iru. Watashi wa kimi to onaji, ongakuka da. Dakara, susunde iku no da."<br/>
                  3. "Kitanai to iku to, itsumo riyuu o sagashiteimasu."<br/>
                  4. "Anata wa neko no yō desu. Watashi ga chikadzuite iku to, anata wa kawatte tōsō shimasu. Watashi ga kizutsuita toki, anata wa chikadzuite, itami o wakachimasu."<br/>
                  5. "Watashi wa tatakau. Kekka ga dō naru ka wa wakaranai kedo, watashi wa dekiru dake ganbarimasu."<br/>
                  6. "Yami no umi no fukaku demo, hikari wa mada hairimasu."<br/>
                  7. "Onaji sora o miru dake de, itsumo no keshiki ga chigau yō ni narimasu."<br/>`,
        kanji: `1. 「愛には喜びも悲しみもあるけど、なぜいつも悲しみの愛を持っているのか？それは悲しみに慣れているから。」<br/>
                 2. 「モーツァルトは「旅を始めよ」と言った。未来がどうなるかは誰も知らない。でも、私は一つの足を踏み出しました。それでも、私たちはまだ始まったばかりです。私は君と同じ、音楽家です。だから、進んでいくのだ。」<br/>
                 3. 「来ることも去ることも、私はいつも理由を探しています。」<br/>
                 4. 「あなたは猫のようです。私が近づくと、あなたは振り向いて遠くに行きます。私が傷ついているとき、あなたは近づいてきて、その痛みを共有しようとします。」<br/>
                 5. 「私は戦います。結果がどうなるかわからないけれども、できる限り戦います。」<br/>
                 6. 「暗い海の底でも、光はまだ入ることができます。」<br/>
                 7. 「あなたと同じ空を見るだけで、いつもの景色が違って見えます。」<br/>`,
        jawa: `1. "Ana kabungahan ing katresnan lan sedhih ing katresnan, nanging kenapa sampeyan tansah nggatekake sedhih katresnan? Iku supaya sampeyan dadi kebiasaan karo sedhih."<br/>
                2. "Mozart ngomong, 'Miwi lakumu.' Ora ana sing ngerti apa sing bakal kelakon. Nanging aku wis njupuk siji langkah maju. Nanging kita isih anyar miwiti lakumu. Aku kaya sampeyan, sawijining musisi. Mula, aku terus maju."<br/>
                3. "Nglumpuk lan lunga, aku tansah nggoleki alasan."<br/>
                4. "Sampeyan kaya kucing. Nalika aku nyedhaki sampeyan, sampeyan mbalikke arah lan adoh. Nalika aku lara, sampeyan nyedhaki lan pengin bareng rasa lara." <br/>
                5. "Aku bakal perang. Senajan aku ora ngerti kepiye asilnya, nanging aku bakal perang sabisa-bisa." <br/>
                6. "Sanajan ing dasar segara peteng, cahya isih bisa mlebu." <br/>
                7. "Mung kanthi ndeleng langit sing padha karo sampeyan, pandelengan sing biasa katon beda." <br/>`
    },
    miyazono_kaori: {
        indonesia: `1. “Meski kau sedih, babak belur, ataupun jatuh ke titik terdalam, kau harus tetap hidup! Seperti itulah orang-orang seperti kita bertahan.”<br/>
                   2. "Dengan Saling bertukar nada, kau bisa mengenal satu sama lain"<br/>
                   3. “Lihat ke atas, lihat ke arahku. Kamu ini selalu melihat ke bawah. Makanya kamu terjebak dalam kerangkeng partitur musik.”<br/>
                   4. “Mungkin di hadapanmu cuma ada jalan yang kelam. Tapi kamu harus tetap yakin dan melangkah maju. Percayalah kalau bintang-bintang akan menerangi jalanmu, walaupun cuma sekilas.”<br/>
                   5. “Keajaiban bisa terjadi kapan saja.” <br/>
                   6. “Meskipun ini hanya sia-sia dan tak berarti, Aku akan berjuang, berjuang dan berjuang lebih keras lagi.” <br/> 
                   7. “Jika aku terus berkubang dalam keputusasaan dan menyerah, aku takkan bisa melihat wajah orang tua sayang yang sudah melahirkan dan membesarkanku.”<br/>`,
        inggris: `1. "Even if you are sad, beaten up, or fall to your lowest point, you must keep living! That’s how people like us survive."<br/>
                   2. "By exchanging notes, you can get to know each other better."<br/>
                   3. "Look up, look at me. You always look down. That's why you're trapped in the cage of music sheets."<br/>
                   4. "Maybe the path ahead of you is dark. But you have to keep believing and move forward. Trust that the stars will light your way, even if only briefly."<br/>
                   5. "Miracles can happen anytime."<br/>
                   6. "Even if this is futile and meaningless, I will fight, fight, and fight harder."<br/>
                   7. "If I keep wallowing in despair and give up, I won’t be able to see the faces of the loving parents who gave birth to and raised me."<br/>`,
        romaji: `1. "Kanashī toki mo, bokoboko ni natte mo, sai tei no ten ni ochi temo, anata wa ikitsudzuke nakereba narimasen! Sore ga watashitachi no yōna hitobito ga ikinokoru hōhō desu."<br/>
                   2. "Otagai ni onpu o kōkan suru koto de, motto yoku shiru koto ga dekimasu."<br/>
                   3. "Ue o mite, watashi o mite. Anata wa itsumo shita o miteimasu. Sore ga, anata ga gakufu no ori ni torawareru riyūdesu."<br/>
                   4. "Anata no mae ni wa kurai michi ga aru kamo shiremasen. Shikashi, anata wa shinji tsudzukete, mae ni susumanakereba narimasen. Hoshi ga michi o terasu to shinji, tatoe isshun dake demo."<br/>
                   5. "Kiseki wa itsu demo okoru koto ga dekimasu."<br/>
                   6. "Kore wa muda de imi ga nai koto demo, watashi wa tatakai tsudzukeru, tatakai, motto ganbarimasu."<br/>
                   7. "Zetsubō ni hikkakari tsudzukete akirametara, watashi o umarete sodate mashita, itoshī ryōshin no kao o miru koto ga dekimasen."<br/>`,
        kanji: `1. 「悲しい時も、ボコボコになっても、最低の点に落ちても、あなたは生き続けなければなりません！それが私たちのような人々が生き残る方法です。」<br/>
                 2. 「お互いに音符を交換することで、もっとよく知ることができます。」<br/>
                 3. 「上を見て、私を見て。あなたはいつも下を見ています。それが、あなたが楽譜の檻にとらわれる理由です。」<br/>
                 4. 「あなたの前には暗い道があるかもしれません。しかし、あなたは信じ続けて、前に進まなければなりません。星が道を照らすと信じて、たとえ一瞬だけでも。」<br/>
                 5. 「奇跡はいつでも起こることができます。」<br/>
                 6. 「これは無駄で意味がないことでも、私は戦い続ける、戦い、もっと頑張ります。」<br/>
                 7. 「絶望にひっかかり続けてあきらめたら、私を生まれて育てました、愛しい両親の顔を見ることができません。」<br/>`,
        jawa: `1. "Senajan sampeyan sedhih, dirungkel, utawa tiba ing titik sing paling ngisor, sampeyan kudu tetep urip! Kuwi carane wong kaya awake dhewe slamet."<br/>
               2. "Kanthi ijol-ijolan nada, sampeyan bisa luwih ngerti siji lan sijine." <br/>
               3. "Delengen, delok aku. Sampeyan tansah delok ngisor. Kuwi sebabe sampeyan kepepet ing kurungan lembaran musik." <br/>
               4. "Mungkin dalan ing ngarepmu peteng. Nanging sampeyan kudu tetep percaya lan maju. Percaya yen lintang-lintang bakal madhangi dalanmu, sanajan mung sedhela." <br/>
               5. "Mukjijat bisa kedadeyan kapan wae." <br/>
               6. "Sanajan iki sia-sia lan ora ana gunane, aku bakal perang, perang, lan berjuang luwih tenanan." <br/>
               7. "Yen aku terus nyemplung ing keputusasaan lan nyerah, aku ora bakal bisa ndeleng pasuryane wong tuwa sing nyintai sing wis nglairake lan nggedhekake aku."<br/>`
    },
    ryouta_watari: {
        indonesia: `1. “Jangan terlalu baik jadi cowok. Karena cowok yang terlalu baik biasanya selalu kalah di akhir-akhir.” <br/>
                    2. “Mustahil atau tidaknya, biar cewek itu yang memutuskan.”<br/>
                    3. “Cewek yang kausukai juga pasti punya cowok idamannya, entah siapa. Karena dia lagi jatuh cinta, dia jadi kelihatan indah di matamu. Makanya orang yang lagi jatuh cinta bisa jadi sangat irasional.”<br/>
                    4. “Menjadi Superstar memang banyak rintangannya. Rintangan itu akan membuatmu tahu apakah kau layak atau tidak.”<br/>
                    5. “Pria itu harus berani mengambil tindakan!.”<br/>
                    6. “Aku mengabil satu langkah! Aku membuatnya untuk melihatku seperti wanita! Aku sudah banyak menderita. Jadi kau juga harus menderita! Menderita, menderitalah, dan terus pikirkanlah aku! Akhirnya dimulai, waktuku mulai bergerak.”<br/>
                    7. “Jika kau sedang jatuh cinta pada seseorang, semuanya terlihat lebih berwarna.” `,
        inggris: `1. "Don’t be too nice as a guy. Because a guy who is too nice usually loses in the end."<br/>
                  2. "Whether it's impossible or not, let the girl decide."<br/>
                  3. "The girl you like also has her ideal guy, whoever he is. Because she’s in love, she looks beautiful in your eyes. That’s why people in love can be very irrational."<br/>
                  4. "Becoming a superstar has many obstacles. Those obstacles will show you whether you’re worthy or not."<br/>
                  5. "A man must be brave enough to take action!"<br/>
                  6. "I took a step! I made her see me as a woman! I've suffered a lot. So you have to suffer too! Suffer, suffer, and keep thinking of me! Finally, it starts, my time starts to move."<br/>
                  7. "When you're in love with someone, everything looks more colorful."<br/>`,
        romaji: `1. "Otoko wa amari yasashiku suru na. Yasashisugiru otoko wa saigo ni kanarazu make."<br/>
                2. "Fukanō ka dō ka wa, onna ni makaseru."<br/>
                3. "Kimi no sukina onna mo kanojo no risō no otoko ga iru, daredemo ii. Kanojo wa koi ni ochiteiru kara, kimi no me ni utsukushiku mieru. Dakara, koi ni ochita hito wa hijō ni fujori ni naru koto ga aru."<br/>
                4. "Supāsutā ni naru no wa takusan no shōgaiga aru. Sono shōgai ga kimi ga fusawashī ka dō ka o misete kureru."<br/>
                5. "Otoko wa kimenakya naranai!"<br/>
                6. "Ippo fumidashita! Watashi wa kanojo ni watashi o onna to shite mitaseta! Watashi wa takusan no kurushimi o ukete kita. Dakara anata mo kurushimanakya! Kurushimi, kurushimi, sorekara watashi o kangae tsuzukete! Saishū-teki ni, watashi no toki ga ugoki hajimeta."<br/>
                7. "Kimi ga dareka ni koi shite iru toki, subete ga motto karafuru ni mieru."<br/>`,
        kanji: `1. 「男はあまり優しくするな。優しすぎる男は最後に必ず負ける。」<br/>
                2.「不可能かどうかは、女に任せる。」<br/>
                3.「君の好きな女も彼女の理想の男がいる、誰でもいい。彼女は恋に落ちているから、君の目に美しく見える。だから、恋に落ちた人は非常に不条理になることがある。」<br/>
                4.「スーパースターになるのはたくさんの障害がある。その障害が君がふさわしいかどうかを見せてくれる。」<br/>
                5.「男は決めなきゃならない！」<br/>
                6.「一歩踏み出した！私は彼女に私を女として見せた！私はたくさんの苦しみを受けてきた。だからあなたも苦しまなきゃ！苦しみ、苦しみ、それから私を考え続けて！最終的に、私の時が動き始めた。」<br/>
                7.「君が誰かに恋している時、すべてがもっとカラフルに見える。」<br/>`,
        jawa: `1. "Aja banget apik dadi lanang. Lanang sing banget apik biasane kalah ing pungkasan."<br/>
                2. "Apa mustahil utawa ora, wong wedok sing mutusaké."<br/>
                3. "Wong wedok sing kok senengi uga mesthi nduwé wong lanang idamané, ora ngerti sapa. Amarga dheweke lagi tresna, dheweke dadi katon éndah ing mripatmu. Makane wong sing lagi tresna bisa dadi banget ora masuk akal."<br/>
                4. "Dadi superstar iku akeh rintangane. Rintangan iku bakal nuduhake apa kowe pantes utawa ora."<br/>
                5. "Lanang iku kudu wani njupuk tindakan!"<br/>
                6. "Aku njupuk langkah siji! Aku nggawe dheweke ndeleng aku kaya wong wadon! Aku wis nglakoni akeh kasangsaran. Dadi kowe uga kudu kasangsaran! Kasangsaran, kasangsaran, lan terus pikirna aku! Akhire diwiwiti, waktuku wiwit mlaku."<br/>
                7. "Yen kowe lagi tresna karo wong, kabeh katon luwih warna-warni."<br/>`
    },

    tsubaki_sawabe: {
        indonesia: `1. “Kalau kita lagi jatuh cinta, dunia jadi kelihatan lebih berwarna.”<br/>
                    2. “Menemukan sisi-sisi diriku yang tak pernah kutahu. Menghadapi sisi-sisi diriku yang tak pernah kutahu. Aku yakin itu yang namanya jatuh cinta.”<br/>
                    3. “Jika kau serius, kau bisa melakukannya.”<br/>
                    4. “Aku mengabil satu langkah! Aku membuatnya untuk melihatku seperti wanita! Aku sudah banyak menderita. Jadi kau juga harus menderita! Menderita, menderitalah, dan terus pikirkanlah aku! Akhirnya dimulai, waktuku mulai bergerak.” <br/>
                     `,
        inggris: `1. "When we’re in love, the world looks more colorful."<br/>
                2. "Finding sides of myself I never knew. Facing sides of myself I never knew. I’m sure that’s what falling in love is."<br/>
                3. "If you’re serious, you can do it."<br/>
                4. "I took a step! I made him see me as a woman! I’ve suffered a lot. So you have to suffer too! Suffer, suffer, and keep thinking of me! Finally, it starts, my time starts to move."<br/>`,
        romaji: `1. "Koi ni ochiteiru toki, sekai wa motto iro azayaka ni mieru."<br/>
                2. "Shirazu ni atta jibun no ichi men wo mitsukeru. Shirazu ni atta jibun no ichi men to mukiau. Koi ni ochiru to wa, kanarazu kono yō na mono da to omou."<br/>
                3. "Honki nara, dekiru."<br/>
                4. "Watashi wa ippo fumidashita! Kare ni watashi wo onna to shite mirareru yō ni natta! Watashi wa takusan kurushinda. Dakara, kimi mo kurushinakyana! Kurushinde, kurushinde, sore de mo watashi wo kangaeru! Yatto, watashi no jikan ga ugokidashita."<br/>
                `,
        kanji: `1.「恋に落ちている時、世界はもっと色鮮やかに見える。」<br/>
                2. 知らずにあった自分の一面を見つける。知らずにあった自分の一面と向き合う。恋に落ちるとは、必ずこのようなものだと思う。」<br/>
                3.「本気なら、できる。」<br/>
                4.「私は一歩踏み出した！彼に私を女として見られるようになった！私はたくさん苦しんだ。だから、君も苦しまなきゃ！苦しんで、苦しんで、それでも私を考える！やっと、私の時間が動き出した。」<br/>`,
        jawa: `1. "Yen kita lagi tresna, donya katon luwih werna."<br/>
                2. "Nemu sisih-sisihku sing ora tau tak kenal. Ngladeni sisih-sisihku sing ora tau tak kenal. Aku yakin yen iku sing diarani tresna."<br/>
                3. "Yen kowe serius, kowe bisa nglakoni."<br/>
                4. "Aku njupuk siji langkah! Aku nggawe dheweke ndeleng aku kaya wong wadon! Aku wis nandhang sangsara akeh. Dadi kowe uga kudu nandhang sangsara! Nandhang sangsara, nandhang sangsara, lan terus mikir aku! Pungkasan, wektu iki wiwit obah."<br/>`
        },
    dll: {
        indonesia: `1. “Kau harus jujur pada dirimu sendiri dan mengakuinya, atau akan ada seseorang yang terluka.” – Kashiwagi<br/>
                    2. “Ada jarak yang memisahkan jutaan tahun cahaya antara “Suka” dan “Tidak Suka”.” – Kashiwagi<br/>
                    3. “Semangat palsu sepertinya lebih baik daripada tidak sama sekali.” – Kashiwagi Nao<br/>
                    4. “Lebih memilih persahabatan dari pada cinta adalah alasan yang klise.” – Aizato Nagi<br/>
                    5. “Saingan bisa membuatmu berkembang lebih cepat daripada diajari oleh seseorang.” – Takayanagi<br/>
                    6. “Tidak ada ibu di dunia ini yang benci sama anaknya sendiri. Waktu itu kamu mulai tumbuh mandiri, baik sebagai manusia maupun sebagai pianis. Saki pasti merasa bahagia waktu itu.” – Seto Hiroko<br/> `,
        inggris: `1. "You have to be honest with yourself and admit it, or someone will get hurt." – Kashiwagi<br/>
                2. "There’s a distance of millions of light years between 'like' and 'don’t like'." – Kashiwagi<br/>
                3. "Fake enthusiasm seems better than none at all." – Kashiwagi Nao<br/>
                4. "Choosing friendship over love is a cliché reason." – Aizato Nagi<br/>
                5. "Rivals can make you grow faster than being taught by someone." – Takayanagi<br/>
                6. "There is no mother in the world who hates her own child. When you started to grow independently, both as a person and as a pianist, Saki must have been happy at that time." – Seto Hiroko<br/>`,
        romaji: `1. "Jibun ni honest ni natte, mitomeru ka, soretomo dareka ga kizu wo ukemasu." – Kashiwagi<br/>
                2. "Suki to kirai no aida ni wa, suuchi kō nen no kyori ga aru." – Kashiwagi<br/>
                3. "Nisemono no jōnetsu wa zenzen nai yori ii." – Kashiwagi Nao<br/>
                4. "Yūjō yori koi wo erabu koto wa, furui ririku da." – Aizato Nagi<br/>
                5. "Raibaru wa dareka ni oshierareru yori mo hayaku nobiru koto ga dekiru." – Takayanagi<br/>
                6. "Sekai ni wa jibun no ko wo nikumu haha wa inai. Kimi ga dokuritsu shite seichō shihajimeta toki, ningen to shite mo pianist to shite mo, Saki wa sono toki kitto ureshikatta ni chigai nai." – Seto Hiroko<br/>`,
        kanji: `1. 自分に正直になって、それを認めるか、それとも誰かが傷を受けます。」 – 柏木 <br/>
                2.「好きと嫌いの間には、数億光年の距離がある。」 – 柏木<br/>
                3.「偽物の情熱は、全然ないよりも良い。」 – 柏木奈緒<br/>
                4.「友情より恋を選ぶことは、古い理由だ。」 – 藍里凪<br/>
                5.「ライバルは誰かに教えられるよりも早く伸びることができる。」 – 高柳<br/>
                6.「世界には自分の子を憎む母はいない。君が独立して成長し始めた時、人間としてもピアニストとしても、サキはその時きっと嬉しかったに違いない。」 – 瀬戸弘子<br/>`,
        jawa: `1. "Kowe kudu jujur karo awakmu dhewe lan ngakoni, utawa bakal ana wong sing tatu." – Kashiwagi<br/>
                2. "Ana jarak jutaan taun cahya antarane 'seneng' lan 'ora seneng'." – Kashiwagi<br/>
                3. "Semangat palsu luwih apik tinimbang ora ana babar pisan." – Kashiwagi Nao<br/>
                4. "Milih persahabatan tinimbang tresna iku alasan klise." – Aizato Nagi<br/>
                5. "Saingan bisa nggawe kowe berkembang luwih cepet tinimbang diwulang dening wong." – Takayanagi<br/>
                6. "Ora ana ibu ing donya iki sing sengit karo anak dhewe. Wektu kuwi kowe mulai ngembangke mandiri, apik dadi manungsa utawa dadi pianis. Saki mesthi rumangsa seneng wektu kuwi." – Seto Hiroko<br/>`
    }
};