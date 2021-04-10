import { Icon } from "../Icon/Icon"
import { GameOver } from '../GameOver/GameOver';
import { useHouseFighter, usePlayerFighter, fighters } from "../../state";
import { useEffect, useCallback } from 'react';
import { outcome } from "../../state/utils/rules";
import { useState } from 'react';

export const GamePlay = () => {
    const [gameOver, setGameOver] = useState('')
    //get player and house fighters
    const playerFighter = usePlayerFighter();
    const houseFighter = useHouseFighter();
    const player = playerFighter.get();
    const house = houseFighter.get();
    const randomFighter = useCallback(() => {
        const randomNumber = Math.floor(Math.random() * fighters.length)
        let fighter = fighters[randomNumber]
        return houseFighter.select(fighter);
    }, [])
    useEffect(() => {
        houseFighter.select('')
        let houseTimeout: any;
        if (player) {
            houseTimeout = setTimeout(() => {
                randomFighter()
                setGameOver(outcome())
            }, 3000)
        }
        return () => {
            clearTimeout(houseTimeout)
        }
    }, [player, randomFighter])

    return (
        <div className="GamePlay">
            <section className="Player">
                <h3>You Picked</h3>
                <div className="Fighter">
                    {player && <Icon iconName={player} />}
                    <span className="Empty"></span>
                </div>
            </section>
            {gameOver && <GameOver gameOver={gameOver} />}
            <section className="House">
                <h3>The house picked</h3>
                <div className="Fighter">
                    {house && <Icon iconName={house} />}
                    <span className="Empty"></span>
                </div>
            </section>
        </div>
    )
}