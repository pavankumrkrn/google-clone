import { Avatar, Tooltip } from '@material-ui/core'
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import HistoryIcon from '@material-ui/icons/History';
import './HomeHeader.css';
import { Login } from '../MainComponents/Login';
import LogoutModal from '../MainComponents/Logout';

const HomeHeader = (props) => {
    const [isLogin, setisLogin] = useState(false);
    const [modal, setmodal] = useState(false);
    const [open, setopen] = useState(false);
    
    const { push } = useHistory();
    const navigate = () => {
        if (props.images) push('/home');
        else push('/home/images')
    }
    const toggle = () => setmodal(!modal);
    const toggleLogout = () => setopen(!open);
    return (
        <>
        <nav className="navbar homeHeader">
            <ul className="navbar nav ml-auto">
                <li className="nav-item pointer"><a className="nav-link hnl"
                    onClick={navigate}
                >{props.images ? "Search" : "Images"}</a></li>
                <li className="nav-item pointer"><a className="nav-link hnl"
                onClick={!isLogin ? toggle : toggleLogout}>
                    <Tooltip title={!isLogin ? 'login' : 'logout'}>
                        <Avatar />
                    </Tooltip>
                </a></li>
                <li className="nav-item pointer"><a className="nav-link hnl">
                    <Tooltip title='My History'>
                        <HistoryIcon />
                    </Tooltip>
                </a></li>
            </ul>
        </nav>
        <Login modal={modal} toggle={toggle}/>
        <LogoutModal modal={open} toggle={toggleLogout} />
        </>
    )
}

export default HomeHeader
