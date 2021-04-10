import { createState, useState, State, DevTools } from '@hookstate/core';
import { outcome } from './utils/rules';
import { DevToolsInitialize } from '@hookstate/devtools';

export const fighters = ["rock", "paper", "scissors", "lizard", "spock"];

const playerFighter = createState('');
const houseFighter = createState('');

const wrapState = (state: State<string>) => ({
    get: () => state.value,
    select: (name: string) => state.set(prev => prev = name),
})

//to use outside of a component
export const accessPlayerFighter = () => wrapState(playerFighter);
export const accessHouseFighter = () => wrapState(houseFighter);

//to use within a component
export const usePlayerFighter = () => wrapState(useState(playerFighter));
export const useHouseFighter = () => wrapState(useState(houseFighter));

//devtools
DevTools(playerFighter).label('player-fighter')
DevTools(houseFighter).label('house-fighter')
DevToolsInitialize({
    monitored: ['player-fighter', 'house-fighter'],
    callstacksDepth: 30
})
