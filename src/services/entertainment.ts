import { JX3APIClient } from '../client';
import { TTSConfig, MusicInfo, ChatMessage, Idiom } from '../types/entertainment';

export class EntertainmentService extends JX3APIClient {
  /**
   * 文本转语音
   * @param text 要转换的文本
   * @param config 语音配置
   */
  async textToSpeech(text: string, config?: Partial<TTSConfig>): Promise<{
    url: string;
    duration: number;
  }> {
    return this.post('/entertainment/tts', { text, ...config });
  }

  /**
   * 搜索音乐
   * @param keyword 搜索关键词
   * @param source 音乐来源
   */
  async searchMusic(
    keyword: string,
    source?: 'qq' | 'netease' | 'kugou'
  ): Promise<MusicInfo[]> {
    return this.get('/entertainment/music/search', { keyword, source });
  }

  /**
   * 获取音乐详情
   * @param id 音乐ID
   * @param source 音乐来源
   */
  async getMusicDetail(
    id: string,
    source: 'qq' | 'netease' | 'kugou'
  ): Promise<MusicInfo> {
    return this.get('/entertainment/music/detail', { id, source });
  }

  /**
   * 智能聊天
   * @param message 用户消息
   * @param context 上下文消息
   */
  async chat(
    message: string,
    context?: ChatMessage[]
  ): Promise<ChatMessage> {
    return this.post('/entertainment/chat', { message, context });
  }

  /**
   * 成语接龙
   * @param word 当前成语
   */
  async idiomSolitaire(word?: string): Promise<Idiom> {
    return this.get('/entertainment/idiom', { word });
  }

  /**
   * 查询成语信息
   * @param word 成语
   */
  async getIdiomInfo(word: string): Promise<Idiom> {
    return this.get('/entertainment/idiom/info', { word });
  }
} 