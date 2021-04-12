import { mount } from 'enzyme';
import { GameOver } from './GameOver';
import { accessPlayerFighter, accessHouseFighter } from '../../state/fighter.state';

describe('gameover component', () => {
    let props = {
        gameOver: "win"
    }
    let component = mount(<GameOver {...props} />)
    test('make a snapshot of gameover component', () => {
        expect(component).toMatchSnapshot()
    })
    test('it restarts game on click', () => {
        let restart = component.find('.GameOver button');
        restart.simulate('click')
        expect(accessPlayerFighter().get()).toBeFalsy()
        expect(accessHouseFighter().get()).toBeFalsy()
    })
})
