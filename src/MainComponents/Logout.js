import React from 'react'
import { useHistory } from 'react-router';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
const LogoutModal = (props) => {
    const { push } = useHistory();
    const logout = () => {
        localStorage.clear();
        push('/home');
        window.location.reload();
    }

    return (
        <div>
            <Modal isOpen={props.modal} fade={false} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>Do you want logout ?</ModalHeader>
                <ModalBody>
                    <div className="row justify-content-center m-5">
                        <div className="col-sm-3 text-center">
                            <button className="btn btn-outline-danger" onClick={logout}>Yes</button>
                        </div>
                        <div className="col-sm-3 text-center">
                            <button className="btn btn-outline-success" onClick={props.toggle}>No</button>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default LogoutModal