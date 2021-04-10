import { IoMdClose } from 'react-icons/io';
import rules from './images/rules.svg';
import { useModalState } from '../../state';

export const ModalContent = () => {
    //close Modal on click
    const modalState = useModalState()
    const closeModal = () => modalState.close();

    return (
        <div className="ModalContent">
            <section className="top">
                <h3>Rules</h3>
                <span onClick={closeModal} className="close"><IoMdClose /></span>
            </section>
            <figure>
                <img src={rules} alt="rules" />
            </figure>
        </div>
    )
}