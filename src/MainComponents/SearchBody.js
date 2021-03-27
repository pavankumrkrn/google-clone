import ImageSearch from './ImageSearch'
import React from 'react'
import { AllSearch } from './AllSearch'
import NewsSearch from './NewsSearch'
import VideoSearch from './VideoSearch'

const SearchBody = ({ type, text }) => {
    React.useEffect(() => {
    }, [type, text])
    switch (type) {
        case 'all':
            return <AllSearch text={text} />
        case 'imagesearch':
            console.log('hi')
            return <ImageSearch text={text} />
        case 'video':
            return <VideoSearch text={text} />
        case 'news':
            return <NewsSearch text={text} />
        default:
            return <AllSearch text={text} />
    }
}

export default SearchBody
