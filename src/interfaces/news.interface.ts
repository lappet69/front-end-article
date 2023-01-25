export interface News {
    author: string;
    content: string;
    description: string;
    publishedAt: Date | string;
    source: Source;
    title: string;
    url: string;
    urlToImage: string;
}

export interface Source {
    id: string;
    name: string;
}