
interface CreditSection {
    title: string;
    items: { label: string }[];
}

export const creditData: CreditSection[] = [

    {
        title: "Song Information",
        items: [
            { label: "Title: Hikaru Nara (光るなら)" },
            { label: "Artist: Goose House" },
            { label: "Album: Goose house Phrase #7" },
            { label: "Composer: Sakai Shun" },
            { label: "Lyricist: Sakai Shun" },
            { label: "Record Label: A-Sketch" },
            { label: "Release Year: 2014" },
        ],
    },
    {
        title: "Anime Information",
        items: [
            { label: "Anime Title: Your Lie in April (四月は君の嘘)" },
            { label: "Studio: A-1 Pictures" },
            { label: "Produser: Aniplex" },
            { label: "Director: Kyōhei Ishiguro" },
            { label: "Original Manga: Naoshi Arakawa" },
            { label: "Aired: Oct 10, 2014 to Mar 20, 2015" },
            { label: "Character Designer: Yukiko Aikei" },
            { label: "Original Webiste: https://kimiuso.jp/" },
        ],
    },
    {
        title: "Website Credits",
        items: [
            { label: "Developer: Luminova" },
            { label: "Design: Luminova" },
            { label: "Animasi: Luminova" },
            { label: "Tech Stack: Next.js, React" },
            { label: "Styling: Tailwind CSS" },
        ],
    },
    {
        title: "Special Thanks",
        items: [
            { label: "Thanks To Allah Swt" },
            { label: "My Parents" },
            { label: "Aswin" },
        ],
    },
    {
        title: "Assets",
        items: [
            { label: "Pixiv.net" },
            { label: "Freepik.com" },
            { label: "MyAnimeList.com" },
            { label: "Fandom Shigatsu Wa Kimi No Uso" },
            { label: "WaifuWallpaper.com" },
        ],
    },
];