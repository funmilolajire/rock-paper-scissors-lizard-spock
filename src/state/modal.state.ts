import { createState, useState, State, DevTools } from '@hookstate/core';
import { DevToolsInitialize } from '@hookstate/devtools';

const modalState = createState(false);
const wrapState = (state: State<boolean>) => ({
    get: () => state.value,
    open: () => state.set(true),
    close: () => state.set(false)
})

//to use outside of a component
export const accessModalState = () => wrapState(modalState);

//to use within a component
export const useModalState = () => wrapState(useState(modalState));

//devtools
DevTools(modalState).label('modal-state')
DevToolsInitialize({
    monitored: ['modal-state'],
    callstacksDepth: 30
})
