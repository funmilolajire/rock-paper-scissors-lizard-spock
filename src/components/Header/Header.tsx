import { NameList } from './Header--NameList';
import { Score } from './Header--Score';

export const Header = () => {
    return (
        <header className="Header">
            <div className="Header--Inner">
                <NameList />
                <Score />
            </div>
        </header>
    )
}