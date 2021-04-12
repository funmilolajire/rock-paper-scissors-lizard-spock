import { mount } from 'enzyme';
import { GameLoad } from './GameLoad';
import { accessPlayerFighter } from '../../state/fighter.state';

describe('gameload component', () => {
    let component = mount(<GameLoad />);
    test('make a snapshot of gameload component', () => {
        expect(component).toMatchSnapshot()
    })
    test('sets fighter to clicked icon', () => {
        let icon = component.find('.GameLoad .Icon.spock')
        icon.simulate('click')
        expect(accessPlayerFighter().get()).toEqual('spock')
    })
})