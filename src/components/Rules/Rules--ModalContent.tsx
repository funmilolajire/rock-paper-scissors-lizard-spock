import { IoMdClose } from 'react-icons/io';
import rules from './images/rules.svg';

export const ModalContent = () => {
    return (
        <div className="ModalContent">
            <section className="top">
                <h3>Rules</h3>
                <span className="close"><IoMdClose /></span>
            </section>
            <figure>
                <img src={rules} alt="rules" />
            </figure>
        </div>
    )
}