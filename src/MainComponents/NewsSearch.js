import React from 'react'
import { getNewsResults } from '../APICalls/fetchResults';
import { MyContext } from '../Context/MyContext';
import './newsSearch.css';

const NewsSearch = () => {
    const [news,] = React.useContext(MyContext);
    React.useEffect(() => { }, [news])
    console.log(news);
    return (
        <div className="newsSearchBody">
            {(news[0] !== undefined && news[0].articles !== undefined) ? news[0].articles.map((i, index) => {
                console.log(i)
                return (
                    <div className="mt-3" key={index}>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="card news" onClick={() => {
                                window.open(i.url)
                            }}>
                                <div className="row">
                                    <div className="col-lg-8 col-md-6 col-sm-12">
                                        <div className="card noBo">
                                            <div className="card-body">
                                                <p>{i.source.name}</p>
                                                <p className="h5 blue">{i.title}</p>
                                                <p>{i.description.split('').slice(0, 100).join('')}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="card noBo imgCard p-3">
                                            <img src={i.urlToImage} alt="" className="card-img-top imgCard" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }) : null}
        </div>)

}

export default NewsSearch
