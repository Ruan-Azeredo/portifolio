import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";


export default function ModalButton(props) {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };

    var but
    var largura = window.screen.width;
    if (largura < 600) {
        but = (
            <button onClick={handler} disabled className="grid">
                {props.children}
            </button>
        )
    } else {
        but = (
            <button onClick={handler} className="grid">
                {props.children}
            </button>
        )
    }

    return (
        <div>
            {but}
            <Modal
                width="fit-content"
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <img src={props.img} className="h-[500px] object-cover"/>
            </Modal>
        </div>
    );
}