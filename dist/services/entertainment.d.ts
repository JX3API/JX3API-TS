import { JX3APIClient } from '../client';
import { TTSConfig, MusicInfo, ChatMessage, Idiom } from '../types/entertainment';
export declare class EntertainmentService extends JX3APIClient {
    /**
     * 文本转语音
     * @param text 要转换的文本
     * @param config 语音配置
     */
    textToSpeech(text: string, config?: Partial<TTSConfig>): Promise<{
        url: string;
        duration: number;
    }>;
    /**
     * 搜索音乐
     * @param keyword 搜索关键词
     * @param source 音乐来源
     */
    searchMusic(keyword: string, source?: 'qq' | 'netease' | 'kugou'): Promise<MusicInfo[]>;
    /**
     * 获取音乐详情
     * @param id 音乐ID
     * @param source 音乐来源
     */
    getMusicDetail(id: string, source: 'qq' | 'netease' | 'kugou'): Promise<MusicInfo>;
    /**
     * 智能聊天
     * @param message 用户消息
     * @param context 上下文消息
     */
    chat(message: string, context?: ChatMessage[]): Promise<ChatMessage>;
    /**
     * 成语接龙
     * @param word 当前成语
     */
    idiomSolitaire(word?: string): Promise<Idiom>;
    /**
     * 查询成语信息
     * @param word 成语
     */
    getIdiomInfo(word: string): Promise<Idiom>;
}
//# sourceMappingURL=entertainment.d.ts.map