import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { useHistory } from 'react-router';
import './HomeBody.css'

const HomeBody = (props) => {

    const [text, setText] = React.useState('')
    const { push } = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        props.images ? push('/search/' + text + '/imagesearch') : push('/search/' + text + '/all')
    }

    return (
        <div className="homeBody">
            <div className="container">
                <div className="row justify-content-center mt-3 pt-3">
                    <div className="col-sm-12 text-center">
                        <img src="https://download.logo.wine/logo/Google/Google-Logo.wine.png" alt="" className='googleImage' />
                    </div>
                </div>
                {props.images ?
                    <div className="row justify-content-center pb-3">
                        <div className="col-sm-6">
                            <p className="text-right text-primary h4"> Images</p>
                        </div>
                    </div> : null}
                <form action="" onSubmit={(e) => handleSubmit(e)}>
                    <div className="row justify-content-center pr-5 pl-5">
                        <div className="col-sm-7 search">
                            <div className="p-1">
                                <SearchIcon />
                            </div>
                            <input type="text" className="gInput" required value={text} onChange={(e) => setText(e.target.value)} />
                        </div>
                    </div>
                    <div className="row justify-content-center p-5">
                        <div className="col-sm-12 text-center">
                            <button className="btn" type='submit'>Google Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default HomeBody
