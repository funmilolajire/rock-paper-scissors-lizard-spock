import { mount } from 'enzyme';
import { act } from '@testing-library/react';
import { App } from './App';
import { RulesButton } from '../Rules/RulesButton';
import { RulesModal } from '../Rules/RulesModal';
import { accessModalState } from '../../state';

describe('app component', () => {
  let component = mount(<App />)
  test('make a snapshot of app component', () => {
    expect(component).toMatchSnapshot()
  })
  test('check that it renders one initial component', () => {
    const getComponents = component.containsAnyMatchingElements([<RulesButton />])
    expect(getComponents).toBeTrue();
  })
  test('check that it doesn\'t render modal on load', () => {
    const getComponents = component.containsAnyMatchingElements([<RulesModal />])
    expect(getComponents).toBeFalse();
  })
  test('check that it renders modal on click', () => {
    const portal = global.document.createElement('div')
    portal.setAttribute('id', 'portal')
    const body = global.document.querySelector('body')
    body?.appendChild(portal)
    act(() => { accessModalState().open() })
    expect(accessModalState().get()).toBeTrue();
  })
})