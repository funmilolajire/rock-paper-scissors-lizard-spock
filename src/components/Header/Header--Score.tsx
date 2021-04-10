import { useHouseState, usePlayerState } from "../../state"
import { useEffect } from 'react';

export const Score = () => {
    //get scores
    const playerState = usePlayerState()
    const houseState = useHouseState()
    const playerScore = playerState.get()
    const houseScore = houseState.get()
    useEffect(() => {
        if (playerScore === 10 || houseScore === 10) {
            playerState.clear()
            houseState.clear()
        }
    })

    return (
        <section className="Score">
            <h2>Score</h2>
            <span>{playerScore} - {houseScore}</span>
        </section>
    )
}