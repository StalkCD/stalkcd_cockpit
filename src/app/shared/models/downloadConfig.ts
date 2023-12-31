export interface DownloadConfig {
    repoName: string;
    repoOwner: string;
    workflowName: string;
    gitHubToken: string;
    saveTo: string;
    depth: number;
    pages: number;
}