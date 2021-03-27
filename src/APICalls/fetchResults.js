import * as urls from '../Urls/searchResultUrls'


const getSearchResults = async (text) => {
    const response = await fetch(urls.ALL_SEARCH_URL(text))
        .then((resp) => resp.json()).catch((error) => error.json());
    return response;
}

const getImageResults = async (text) => {
    const url = urls.IMAGE_SEARCH_URL(text).url;
    const key = urls.IMAGE_SEARCH_URL(text).key;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            "x-rapidapi-key": key,
            "x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
        }
    }).then((resp) => resp.json()).catch((error) => error.json());
    return response;
}

const getNewsResults = async (text) => {
    const response = await fetch(urls.NEWS_SEARCH_URL(text))
        .then((resp) => resp.json()).catch((error) => error.json());
    return response;
}

const getVideoResults = async (text) => {
    const response = await fetch(urls.VIDEO_SEARCH_URL(text))
        .then((resp) => resp.json()).catch((error) => error.json());
    return response;
}


export {
    getImageResults,
    getNewsResults,
    getSearchResults,
    getVideoResults
}