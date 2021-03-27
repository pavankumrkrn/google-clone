import React from 'react'
import { useParams } from 'react-router';
import HomeBody from '../UIComponents/HomeBody'
import HomeHeader from '../UIComponents/HomeHeader'

const Home = () => {
    const [isImages, setIsImages] = React.useState(false);
    const params = useParams();
    React.useEffect(() => {
        if (params.images && params.images === 'images')
            setIsImages(true)
        else
            setIsImages(false)

    }, [params.images])
    return (
        <div className="">
            <HomeHeader images={isImages} />
            <HomeBody images={isImages} />
        </div>
    )
}

export default Home
