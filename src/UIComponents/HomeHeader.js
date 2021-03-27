import { Avatar, Tooltip } from '@material-ui/core'
import AppsIcon from '@material-ui/icons/Apps';
import React from 'react';
import { useHistory } from 'react-router';
import './HomeHeader.css';

const HomeHeader = (props) => {
    const { push } = useHistory();
    const navigate = () => {
        if (props.images) push('/home');
        else push('/home/images')

    }
    return (
        <nav className="navbar homeHeader">
            <ul className="navbar nav ml-auto">
                <li className="nav-item pointer"><a className="nav-link hnl"
                    onClick={navigate}
                >{props.images ? "Search" : "Images"}</a></li>
                <li className="nav-item pointer"><a className="nav-link hnl">
                    <Tooltip title='Apps'>
                        <AppsIcon />
                    </Tooltip>
                </a></li>
            </ul>
        </nav>
    )
}

export default HomeHeader
