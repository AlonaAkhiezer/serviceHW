export interface IAPIObj {
    id: number;
    name: string;
    description: string;    
    html_url: string;
    homepage: string;
    forks: number;
    watchers: number;
    score: number;
    owner: {
        avatar_url: string;
    }
}