import { mount } from 'enzyme';
import { accessModalState } from '../../../state';
import { RulesButton } from '../RulesButton';

describe('rules button component', () => {
    let component = mount(<RulesButton />)
    test('make a snapshot of rules button component', () => {
        expect(component).toMatchSnapshot()
    })
    test('opens modal on click', () => {
        let button = component.find('button')
        button.simulate('click')
        expect(accessModalState().get()).toBeTrue()
    })
})