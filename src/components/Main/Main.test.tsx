import { mount } from 'enzyme';
import { act, queryByTestId, render } from '@testing-library/react';
import { Main } from './Main';
import { accessPlayerFighter } from '../../state/fighter.state';

describe('main component', () => {
    let component = mount(<Main />);
    test('make a snapshot of main component', () => {
        expect(component).toMatchSnapshot()
    })
    test('when a player picks a fighter, gameplay component is revealed', () => {
        let { container } = render(<Main />)
        act(() => {
            accessPlayerFighter().select('spock')
        })
        accessPlayerFighter().get()
        let innercomponent = queryByTestId(container, 'GamePlay')
        expect(innercomponent).toBeInTheDocument()
    })
})