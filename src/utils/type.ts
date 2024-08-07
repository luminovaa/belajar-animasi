export type LanguageOption = 'inggris' | 'romaji' | 'indonesia' | 'kanji' | 'jawa';

export interface LyricLine {
  text: string;
  startTime: number;
  endTime: number;
}

export interface LyricsData {
  inggris: LyricLine[];
  romaji: LyricLine[];
  indonesia: LyricLine[];
  kanji: LyricLine[];
  jawa: LyricLine[];
}