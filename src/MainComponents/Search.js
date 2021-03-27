import React, { useContext } from 'react'
import { useParams } from 'react-router';
import Footer from '../UIComponents/Footer';
import SearchBody from './SearchBody'
import SearchHeader from '../UIComponents/SearchHeader'
import { MyContext } from '../Context/MyContext';
import { fetchResultsByType } from '../HelperMethods/ResultFetcher';

const Search = () => {
    const params = useParams();
    const [context, setContext] = useContext(MyContext);
    const fetchResults = async () => {
        let response = await fetchResultsByType(params.type, params.text);
        console.log(response);
        setContext([response]);
    }
    React.useEffect(fetchResults, [params.type, params.text]);
    return (
        <>
            <div className="searchPage">
                <SearchHeader type={params.type} text={params.text} />
                <SearchBody type={params.type} text={params.text} />
            </div>
            <div className="mt-5">
                <Footer />
            </div>
        </>
    )
}

export default Search
