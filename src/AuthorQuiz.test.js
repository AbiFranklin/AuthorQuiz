import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import Hero from './Components/Hero';
import Turn from './Components/Turn';
import Continue from './Components/Continue';
import Footer from './Components/Footer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

describe("AuthorQuiz Tests", () => {
  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<AuthorQuiz />, div)
  });

  //Contains Hero
  //Contains Turn
  //Contains Continue
  //Contains Footer
})

describe("Hero Tests", () => {
  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Hero />, div)
  })

  //Contains one h1
  //Contains one p
})

describe("Turn Tests", () => {
  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Turn />, div)
  })
})

describe("Continue Tests", () => {
  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Continue />, div)
  })
})

describe("Footer Tests", () => {
  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div)
  })

  //Contains one a
})