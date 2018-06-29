import React from 'react'
import code from '../images/code.jpg'


class Contact extends React.Component {
  render() {
  return(
    <div className='mdl-grid portfolio-max-width'>
      <div className='mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp'>
        <div className="mdl-card__title">
       </div>
       <div className="mdl-card__media">
          <img className="article-image" src={code} border="0" alt=""/>
       </div>
       <div className="mdl-grid ">
          <div className="mdl-cell mdl-cell--12-col mdl-card__supporting-text no-padding ">
          <h1 className="massive_header">Say hello!</h1>
              <div className="social_icons social">
                <a className="fa fa-envelope fa-2x" href="mailto:lidianvilazio@hotmail.com" target="_blank"></a>
                <a className="fa fa-twitter fa-2x" href="https://twitter.com/LidianVilazio" target="_blank"></a>
                <a className="fa fa-linkedin fa-2x" href="https://www.linkedin.com/in/lidian-vil%C3%A1zio-hays/" target="_blank"></a>
                <a className="fa fa-github-alt fa-2x" href="https://github.com/lidianvilazio" target="_blank"></a>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

}

export default Contact;
