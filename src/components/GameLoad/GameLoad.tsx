import { Icon } from '../Icon/Icon';
import { Polygon } from './GameLoad--Polygon';

export const GameLoad = () => {
    return (
        <div className="GameLoad">
            <Polygon />
            <Icon iconName='rock' />
            <Icon iconName='paper' />
            <Icon iconName='scissors' />
            <Icon iconName='lizard' />
            <Icon iconName='spock' />
        </div>
    )
}