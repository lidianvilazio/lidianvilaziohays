import React from 'react'
import {Route, withRouter} from 'react-router-dom'
import Projects from '../Components/Projects'
import About from '../Components/About'
import Resume from '../Components/Resume'
import Contact from '../Components/Contact'
import NavBar from '../Components/NavBar'
import code from '../images/code.jpg'


class Main extends React.Component {
  render() {
    return (
      <div className='main'>
        <header>
          <div className="App-header">
            <NavBar/>
          </div>
        <div className='row'>
        </div>
        </header>
        <Route exact path="/" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume}/>
          <Route exact path="/contact" component={Contact}/>
      </div>

    )
  }
}

export default Main;
