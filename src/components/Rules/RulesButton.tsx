import { useModalState } from '../../state';
export const RulesButton = () => {
    //open Modal on click
    const modalState = useModalState();
    const openModal = () => modalState.open();

    return (
        <button onClick={openModal} className="RulesButton">
            Rules
        </button>
    )
}