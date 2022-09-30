import {BtnsBlock, CloseIcon, ModalBlock} from "../styles/Modal.styles";
import {CustomImg} from "../styles/MessageSender.styles";



interface IModal {
    setModalConst: Function
    FC: Function
    object: any
}

export const Modal = ({object, FC, setModalConst}: IModal) => {

    const sendImage = async () => {
        try {
            await FC()
            window.location.reload()
        } catch (e) {
            console.log(e)
        }
    }

    const cancelFC = async () => {
        await setModalConst('')
        window.location.reload()
    }

    return (
        <ModalBlock>
            <CustomImg src={URL.createObjectURL(object)}/>
            <BtnsBlock>
                <button onClick={sendImage}>Отправить</button>
                <button onClick={cancelFC}>Отменить</button>
            </BtnsBlock>
        </ModalBlock>
    )
}
