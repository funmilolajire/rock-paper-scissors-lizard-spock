import { mount } from 'enzyme';
import { GamePlay } from './GamePlay';

describe('gameplay component', () => {
    let component = mount(<GamePlay />)
    test('make a snapshot of gameplay component', () => {
        expect(component).toMatchSnapshot()
    })
    test('winner class is absent when component loads', () => {
        const playerRing = component.find('[data-player-fighter]').hasClass('winner')
        const houseRing = component.find('[data-house-fighter]').hasClass('winner')
        expect(playerRing).toBeFalse()
        expect(houseRing).toBeFalse()
    })
})
