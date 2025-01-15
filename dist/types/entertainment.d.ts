export interface TTSConfig {
    voice_name: string;
    speed: number;
    volume: number;
    pitch: number;
}
export interface MusicInfo {
    id: string;
    name: string;
    artist: string;
    album: string;
    duration: number;
    source: 'qq' | 'netease' | 'kugou';
    url?: string;
    cover?: string;
    lyric?: string;
}
export interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
    time: string;
}
export interface Idiom {
    word: string;
    pinyin: string;
    explanation: string;
    usage: string;
    first_char: string;
    last_char: string;
}
//# sourceMappingURL=entertainment.d.ts.map