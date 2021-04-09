import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { RulesButton } from '../Rules/RulesButton';
import '../../sass/main.scss';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <RulesButton />
    </div>
  );
}