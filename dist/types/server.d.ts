export interface ServerStatus {
    code: number;
    data: {
        zone: string;
        server: string;
        status: string;
    };
}
export interface ServerCheck {
    id: number;
    zone: string;
    server: string;
    status: 0 | 1;
    time: number;
}
export interface ServerMaster {
    id: string;
    zone: string;
    name: string;
    column: string;
    duowan: Record<string, number[]>;
    abbreviation: string[];
    subordinate: string[];
}
//# sourceMappingURL=server.d.ts.map