import { Avatar, Tooltip } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import React from 'react'
import './searchHeader.css'
import { useHistory, useParams } from 'react-router-dom';

const SearchHeader = () => {
    const params = useParams();
    const { push } = useHistory();
    const [text, setText] = React.useState(params.text);
    React.useEffect(() => {

    }, [params.type, params.text])
    return (
        <nav className="navbar sticky-top searchNavbar">
            <a href="#" className="navbar-brand mb-auto change" onClick={() => push('/')}>
                <img src="https://download.logo.wine/logo/Google/Google-Logo.wine.png" alt="" className='gg' />
            </a>
            <ul className="navbar nav mr-auto">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-sm-12">
                            <form action="" onSubmit={(e) => {
                                e.preventDefault()
                                push('/search/' + text + '/' + params.type)
                            }}>
                                <div className="searchHead">
                                    <div className="p-1">
                                        <SearchIcon />
                                    </div>

                                    <input type="text" className="gInput" required value={text} onChange={(e) => setText(e.target.value)} />
                                </div>
                                <button type='submit' hidden></button>
                            </form>
                        </div>
                    </div>
                    <div className="row mt-3 bottomRow">
                        <div className="col-sm-12">
                            <nav className="navbar">
                                <div className="items mr-auto">
                                    <div className={params.type === 'all' ? "item mt-1 active" : "item mt-1"}
                                        onClick={() => push('/search/' + params.text + '/all')}>
                                        <SearchIcon className='p-1' />
                                        <p className='ml-1'>
                                            All
                                    </p>
                                    </div>
                                    <div className={params.type === 'news' ? "item mt-1 active" : "item mt-1"}
                                        onClick={() => push('/search/' + params.text + '/news')}>
                                        <ReceiptIcon className="p-1" />
                                        <p className='ml-1'>
                                            News
                                    </p>
                                    </div>
                                    <div className={params.type === 'imagesearch' ? "item mt-1 active" : "item mt-1"}
                                        onClick={() => push('/search/' + params.text + '/imagesearch')}>
                                        <ImageSearchIcon className='p-1' />
                                        <p className='ml-1'>
                                            Images
                                    </p>
                                    </div>
                                    <div className={params.type === 'video' ? "item mt-1 active" : "item mt-1"}
                                        onClick={() => push('/search/' + params.text + '/video')}>
                                        <PlayCircleFilledIcon className='p-1' />
                                        <p className='ml-1'>
                                            Videos
                                    </p>
                                    </div>
                                </div>
                                <div className="items block">
                                    <p className="text-center mt-1 mr-3">Settings</p>
                                    <p className="text-center"><button className="btn btn-sm">Tools</button></p>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </ul>
            <ul className="navbar nav ml-auto mb-auto block">
                <li className="nav-item pointer"><a className="nav-link hnl">
                    <Tooltip title='Apps'>
                        <AppsIcon />
                    </Tooltip>
                </a></li>
            </ul>
        </nav >
    )
}

export default SearchHeader
