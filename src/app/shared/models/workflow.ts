export interface Workflow {
    repoName: string;
    downloadDate?: Date;
    id: number;
    name: string;
    node_id: string;
    path: string;
    state: string;
    created_at: Date;
    updated_at: Date;
    url: string;
    html_url: string;
    badge_url: string;
}