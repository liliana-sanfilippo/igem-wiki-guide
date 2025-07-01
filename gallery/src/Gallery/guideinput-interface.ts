export interface GuideFace {
    title: string;
    tags: Array<string>;
    author: string;
    year: string;
    url: string;
    type?: string; /* Website, Book, Article, Thesis, Chapter */
    teampage?: string;
}