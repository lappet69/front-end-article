

export const fetchArticles = async (country: string, category: string) => {
    try {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=a31f7d286a2643ff823fbe24515e240e`)
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error)
    }
}
export const fetchArtilce = async (id: number) => {
    const res = await JSON.parse(localStorage.getItem("news") || "")
    return res[id]
}

