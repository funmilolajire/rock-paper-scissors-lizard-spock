import { useHouseFighter, usePlayerFighter } from '../../state';
import { GameLoad } from '../GameLoad/GameLoad';
import { GamePlay } from '../GamePlay/GamePlay';

export const Main = () => {
    const playerFighter = usePlayerFighter().get();
    const houseFighter = useHouseFighter().get();

    return (
        <div className="Main">
            {!playerFighter && !houseFighter ?
                <GameLoad /> :
                <GamePlay />
            }
        </div>
    )
}