import Modal from 'react-bootstrap/Modal';

export default function VCenterModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.data?.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.data?.content}
            </Modal.Body>
        </Modal>
    );
}
