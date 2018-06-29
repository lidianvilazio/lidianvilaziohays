import React from 'react'
import code from '../images/code.jpg'
import me from '../images/me.png'



class About extends React.Component {
  render() {
    return (
      <div className='mdl-grid portfolio-max-width'>
        <div className='mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp'>
          <div className="mdl-card__title">
            <h2 className="mdl-card__title-text"></h2>
         </div>
         <div className="mdl-card__media">
            <img className="article-image" src={code} border="0" alt=""/>
         </div>
         <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--4-col mdl-card__supporting-text no-padding">
              <img className='image' src={me} alt=""/>
            </div>
            <div className="mdl-cell mdl-cell--8-col mdl-card__supporting-text no-padding">
                <p>
                    Full stack web developer with a passion for new challenges, diversity in teams/work environments, and constant learning. Seeking a position within a large tech company. After almost 10 years at the largest bank in South America, I started practicing coding and fell in love. A fun fact about me is that I moved to the United States in 2015, only able to speak my native language of Brazilian Portuguese and not knowing any English.  Teaching myself English to a native level has been a challenging but exciting experience. I put 100% effort into everything I do and learn, I thrive leading and managing team projects, and I am a fantastic communicator. I am proficient in  Ruby, JavaScript, React, Redux, C++, Java.
                </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
