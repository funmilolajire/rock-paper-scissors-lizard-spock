import { useHouseFighter, usePlayerFighter } from "../../state"

export const GameOver = ({ gameOver }: { gameOver: string }) => {
    const playerFighter = usePlayerFighter()
    const houseFighter = useHouseFighter()
    const playAgain = (): void => {
        playerFighter.select('')
        houseFighter.select('')
    }
    return (
        <div className="GameOver">
            <h3>You {gameOver}</h3>
            <button onClick={playAgain}>Play Again</button>
        </div>
    )
}