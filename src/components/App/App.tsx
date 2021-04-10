import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { RulesButton } from '../Rules/RulesButton';
import { RulesModal } from '../Rules/RulesModal';
import '../../sass/main.scss';
import { useModalState } from '../../state';

export const App = () => {
  const modalState = useModalState();
  return (
    <div className="App">
      <Header />
      <Main />
      <RulesButton />
      {modalState.get() && <RulesModal />}
    </div>
  );
}