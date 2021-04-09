import ReactDOM from 'react-dom';
import { ModalContent } from './Rules--ModalContent';

export const RulesModal = () => {
    return ReactDOM.createPortal(
        <div className="RulesModal">
            <ModalContent />
        </div>
        , document.getElementById('portal') as HTMLElement)
}