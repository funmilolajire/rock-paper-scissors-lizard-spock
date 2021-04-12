import { mount } from 'enzyme';
import { RulesModal } from '../RulesModal';
import { accessModalState } from '../../../state/modal.state';

describe('rulesmodal component', () => {
    const portal = global.document.createElement('div')
    portal.setAttribute('id', 'portal')
    const body = global.document.querySelector('body')
    body?.appendChild(portal)
    let component = mount(<RulesModal />)
    test('make a snapshot of rulesmodal component', () => {
        expect(component).toMatchSnapshot()
    })
    test('modal closes on click', () => {
        const closeButton = component.find('.RulesModal .ModalContent .top span')
        closeButton.simulate('click')
        expect(accessModalState().get()).toBeFalse()
    })
})