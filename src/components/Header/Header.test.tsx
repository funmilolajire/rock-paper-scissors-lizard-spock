import { mount } from 'enzyme';
import { act } from '@testing-library/react';
import { Header } from "./Header";
import { accessPlayerState, accessHouseState } from '../../state/score.state';

describe('header component', () => {
    let component = mount(<Header />)
    test('make a snapshot of header component', () => {
        expect(component).toMatchSnapshot()
    })
    test('when scores get to 10 they automatically reset to 10', () => {
        act(() => {
            accessPlayerState().set(10);
            accessHouseState().set(10);
        })
        expect(accessPlayerState().get()).toBe(0)
        expect(accessHouseState().get()).toBe(0)
    })
})