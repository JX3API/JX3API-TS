export interface ArenaRecord {
    server: string;
    role_id: string;
    name: string;
    score: number;
    ranking: number;
    total_count: number;
    winning_count: number;
    winning_rate: number;
    school: string;
    camp: string;
    history_highest: {
        score: number;
        ranking: number;
        time: string;
    };
    recent_matches: Array<{
        time: string;
        opponent: {
            name: string;
            school: string;
            score: number;
        };
        result: 'win' | 'lose';
        score_change: number;
    }>;
}
export interface BattleField {
    time: string;
    map_id: number;
    map_name: string;
    battle_type: string;
    camps: Array<{
        name: string;
        score: number;
        population: number;
        bases: Array<{
            name: string;
            status: string;
            owner: string;
        }>;
    }>;
}
export interface SchoolSkill {
    id: number;
    name: string;
    school: string;
    type: string;
    desc: string;
    icon: string;
    level: number;
    cost: {
        rage?: number;
        mana?: number;
        energy?: number;
        time?: number;
    };
    attributes: Array<{
        name: string;
        value: number;
    }>;
    cooldown?: number;
    distance?: number;
}
export interface Talent {
    id: number;
    name: string;
    school: string;
    position: number;
    desc: string;
    icon: string;
    level: number;
    requires: Array<{
        talent_id: number;
        level: number;
    }>;
    effects: Array<{
        type: string;
        value: number;
        skill_id?: number;
    }>;
}
export interface TalentBuild {
    id: string;
    name: string;
    school: string;
    author: string;
    description: string;
    update_time: string;
    talents: Array<{
        position: number;
        talent_id: number;
    }>;
    votes: number;
    views: number;
}
//# sourceMappingURL=battle.d.ts.map