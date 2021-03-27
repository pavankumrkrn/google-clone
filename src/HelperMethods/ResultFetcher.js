import * as fetchers from '../APICalls/fetchResults'
export const fetchResultsByType = async (type, text) => {
    let response
    switch (type) {
        case 'all':
            response = await fetchers.getSearchResults(text)
            break;
        case 'imagesearch':
            response = await fetchers.getImageResults(text)
            break;
        case 'video':
            response = await fetchers.getVideoResults(text)
            break;
        case 'news':
            response = await fetchers.getNewsResults(text)
            break;
        default:
            response = await fetchers.getSearchResults(text)
    }
    return response
}