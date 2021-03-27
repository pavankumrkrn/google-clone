import * as keys from "../Key"

const VIDEO_SEARCH_URL = (text) => `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${text}&maxResults=30&key=${keys.VIDEO_API_KEY}`;
const IMAGE_SEARCH_URL = (text) => {
    return {
        url: `https://bing-image-search1.p.rapidapi.com/images/search?q=${text}`,
        key: keys.IMAGE_API_KEY
    }
}
const ALL_SEARCH_URL = (text) => `https://www.googleapis.com/customsearch/v1?key=${keys.GOOGLE_API_KEY}&cx=b707857a43fcb3b68&q=${text}`
const NEWS_SEARCH_URL = (text) => `https://newsapi.org/v2/everything?q=${text}&apiKey=${keys.NEWS_API_KEY}`

export {
    VIDEO_SEARCH_URL,
    IMAGE_SEARCH_URL,
    ALL_SEARCH_URL,
    NEWS_SEARCH_URL
}
