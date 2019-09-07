import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { findComponentByChildren } from './methods';

Enzyme.configure({ adapter: new Adapter() });


global.shallow = shallow;
global.render = render;
global.mount = mount;

global.findComponentByChildren = findComponentByChildren;
