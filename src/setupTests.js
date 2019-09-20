import Enzyme, { shallow, render, mount } from 'enzyme';
// Enzyme is the default and the little guys are named things within it
import Adapter from 'enzyme-adapter-react-16';
// lets us config enzyme to run under react 16 set
Enzyme.configure({ adapter: new Adapter() });

global.shallow=shallow;
global.render=render;
global.mount=mount;

global.rootDirectory=__dirname;