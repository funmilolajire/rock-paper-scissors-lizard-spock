import { createState, useState, State, DevTools } from '@hookstate/core';
import { DevToolsInitialize } from '@hookstate/devtools';
import { Persistence } from '@hookstate/persistence'


const playerState = createState(0);
const houseState = createState(0);

const wrapState = (state: State<number>) => ({
    get: () => state.value,
    increment: () => state.set(prev => prev + 1),
    clear: () => state.set(0)
})

//to use from outside a component
export const accessPlayerState = () => wrapState(playerState.attach(Persistence('playerScore')))
export const accessHouseState = () => wrapState(houseState.attach(Persistence('houseScore')))

//to use from within a component
export const usePlayerState = () => wrapState(useState(playerState).attach(Persistence('playerScore')))
export const useHouseState = () => wrapState(useState(houseState).attach(Persistence('houseScore')))

//devtools
DevTools(playerState).label('player-state')
DevTools(houseState).label('house-state')
DevToolsInitialize({
    monitored: ['player-state', 'house-state'],
    callstacksDepth: 30
})
