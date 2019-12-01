import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import Hero from './Components/Hero';
import Turn from './Components/Turn';
import Continue from './Components/Continue';
import Footer from './Components/Footer'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

describe("AuthorQuiz Tests", () => {
  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<AuthorQuiz />, div)
  });
})

describe("Hero Tests", () => {
  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Hero />, div)
  })

  let component;
  beforeAll(() => {
    component = mount(<Hero />)
  })

  it("returns two h1", () => {
    expect(component.find("h1")).toHaveLength(2)
  })
  

  it("returns one p", () => {
    expect(component.find("p")).toHaveLength(1)
  })
})

describe("Turn Tests", () => {
  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Turn />, div)
  })

  let component;
  beforeAll(() => {
    component = mount(<Turn />);
  });

  it("should have four options", ()=> {
    expect(component.find(".alert")).toHaveLength(4)
  })

  it("should show one img", () => {
    expect(component.find("img")).toHaveLength(1)
  })

})

describe("Continue Tests", () => {
  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Continue />, div)
  })

  let component;
  beforeAll(() => {
    component = mount(<Continue />);
  });

  it("should have one button", ()=> {
    expect(component.find(".btn")).toHaveLength(1)
  })

})

describe("Footer Tests", () => {
  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div)
  })

  let component;
  beforeAll(() => {
    component = mount(<Footer />);
  });

  it("should have one links", ()=> {
    expect(component.find("a")).toHaveLength(1)
  })
})