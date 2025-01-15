export interface MasterRecruitment {
    id: string;
    server: string;
    role_id: string;
    name: string;
    level: number;
    school: string;
    type: 'master' | 'apprentice';
    description: string;
    requirements: string[];
    contact: string;
    create_time: string;
    update_time: string;
    status: 'active' | 'closed';
}
export interface TeamRecruitment {
    id: string;
    server: string;
    leader: {
        role_id: string;
        name: string;
        level: number;
        school: string;
    };
    activity: {
        type: string;
        name: string;
        difficulty?: string;
    };
    requirements: Array<{
        school?: string[];
        role?: string[];
        level?: number;
        score?: number;
    }>;
    description: string;
    contact: string;
    create_time: string;
    start_time: string;
    status: 'recruiting' | 'full' | 'canceled';
    current_members: number;
    max_members: number;
}
export interface FireworkRecord {
    id: string;
    server: string;
    map: string;
    location: {
        x: number;
        y: number;
        z: number;
    };
    sender: {
        role_id: string;
        name: string;
        school: string;
    };
    receiver?: {
        role_id: string;
        name: string;
        school: string;
    };
    type: string;
    content: string;
    time: string;
}
export interface ForumPost {
    id: string;
    title: string;
    author: {
        id: string;
        name: string;
        level: number;
        avatar?: string;
    };
    content: string;
    images?: string[];
    create_time: string;
    update_time: string;
    views: number;
    likes: number;
    replies: number;
    tags: string[];
    is_top: boolean;
    is_essence: boolean;
}
export interface ForumReply {
    id: string;
    post_id: string;
    author: {
        id: string;
        name: string;
        level: number;
        avatar?: string;
    };
    content: string;
    images?: string[];
    create_time: string;
    update_time: string;
    likes: number;
    floor: number;
    reply_to?: {
        id: string;
        author: string;
        floor: number;
    };
}
//# sourceMappingURL=social.d.ts.map