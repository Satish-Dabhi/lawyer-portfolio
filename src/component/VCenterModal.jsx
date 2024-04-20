import Modal from 'react-bootstrap/Modal';

export default function VCenterModal(props) {
    const { children, title } = props;

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Header closeButton>
                {title &&
                    <Modal.Title id="contained-modal-title-vcenter">
                        {title}
                    </Modal.Title>
                }
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    );
}
