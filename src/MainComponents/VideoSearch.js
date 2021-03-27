import React from 'react'
import { MyContext } from '../Context/MyContext';
import './videoSearch.css'

const VideoSearch = () => {
    const [videos,] = React.useContext(MyContext);
    React.useEffect(() => { }, [videos])
    return (
        <div className='videoSearchBody'>
            {(videos[0] !== undefined && videos[0].items !== undefined) ? <>
                <div className="container-fluid">
                    <div className="row heading">
                        <div className="col-sm-12">
                            <p>{'About ' + videos[0].pageInfo.totalResults + ' results'}</p>
                        </div>
                    </div>
                    <div className="body">
                        <div className="row mb-3" >
                            {videos[0].items.map((i, index) => {
                                console.log(i)
                                return (
                                    <div className="col-sm-8" key={index}>
                                        <div className="card noBo pointer" onClick={() => {
                                            window.open('https://www.youtube.com/watch?v=' + i.id.videoId)
                                        }}>
                                            <div className="card-body">
                                                <div className="card-title">
                                                    <p className="h4 und">
                                                        {i.snippet.title}
                                                    </p>
                                                </div>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-lg-2 col-md-6 col-sm-12">
                                                            <div className="card">
                                                                <img src={i.snippet.thumbnails.medium.url} alt="" className="card-img-top" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-8 col-md-6 col-sm-12">
                                                            <p>
                                                                {i.snippet.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div> </> : null}
        </div>


    )
}

export default VideoSearch
