import { accessPlayerFighter, accessHouseFighter } from '../fighter.state';
import { accessHouseState, accessPlayerState } from '../score.state';

interface Rule {
    name: string;
    wins: string[];
    loses: string[];
}

export const rules: Rule[] = [
    {
        name: 'rock',
        wins: ['lizard', 'scissors'],
        loses: ['paper', 'spock']
    },
    {
        name: 'paper',
        wins: ['rock', 'spock'],
        loses: ['scissors', 'lizard']
    },
    {
        name: 'scissors',
        wins: ['paper', 'lizard'],
        loses: ['spock', 'rock']
    },
    {
        name: 'lizard',
        wins: ['spock', 'paper'],
        loses: ['rock', 'scissors']
    },
    {
        name: 'spock',
        wins: ['scissors', 'rock'],
        loses: ['lizard', 'paper']
    }
]

export const outcome = () => {
    const playerData = rules.find(rule => rule.name === accessPlayerFighter().get())
    const houseData = rules.find(rule => rule.name === accessHouseFighter().get())
    const playerClasses = document.querySelector('[data-player-fighter]')?.classList;
    const houseClasses = document.querySelector('[data-house-fighter]')?.classList;

    if (houseData && playerData?.wins.includes(houseData.name)) {
        accessPlayerState().increment()
        if (!playerClasses?.contains('winner')) {
            playerClasses?.add('winner')
        }
        if (houseClasses?.contains('winner')) {
            houseClasses?.remove('winner')
        }
        return 'Win'
    }
    else if (houseData?.name === playerData?.name) {
        return "Tied"
    }
    else {
        accessHouseState().increment()
        if (playerClasses?.contains('winner')) {
            playerClasses?.remove('winner')
        }
        if (!houseClasses?.contains('winner')) {
            houseClasses?.add('winner')
        }
        return 'Lose';
    }
}