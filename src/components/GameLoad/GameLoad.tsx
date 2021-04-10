import { usePlayerFighter, fighters } from '../../state';
import { Icon } from '../Icon/Icon';
import { Polygon } from './GameLoad--Polygon';

export const GameLoad = () => {
    const playerFighter = usePlayerFighter();
    const handleClick = ({ target }: any) => {
        playerFighter.select(target.dataset.iconName)
    }
    return (
        <div className="GameLoad">
            <Polygon />
            {fighters && fighters.map(fighter => <Icon key={fighter} onClick={handleClick} iconName={fighter} />)}
        </div>
    )
}