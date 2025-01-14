// 语音合成配置
export interface TTSConfig {
  voice_name: string;
  speed: number;
  volume: number;
  pitch: number;
}

// 音乐搜索结果
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

// 智能聊天消息
export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  time: string;
}

// 成语信息
export interface Idiom {
  word: string;
  pinyin: string;
  explanation: string;
  usage: string;
  first_char: string;
  last_char: string;
} 