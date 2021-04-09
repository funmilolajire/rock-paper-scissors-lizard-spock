import { Icon } from "../Icon/Icon"
import { GameOver } from '../GameOver/GameOver';

export const GamePlay = () => {
    return (
        <div className="GamePlay">
            <section className="Player">
                <h3>You Picked</h3>
                <div className="Fighter">
                    <Icon iconName="scissors" />
                    <span className="Empty"></span>
                </div>
            </section>
            {/* <GameOver /> */}
            <section className="House">
                <h3>The house picked</h3>
                <div className="Fighter winner">
                    <Icon iconName="spock" />
                    <span className="Empty"></span>
                </div>
            </section>
        </div>
    )
}