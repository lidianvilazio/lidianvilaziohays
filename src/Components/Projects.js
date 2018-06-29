import React from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import cat from '../images/cat.jpg'
import starwars from '../images/starwars.jpg'
import bug from '../images/bug.jpg'
import book from '../images/book.jpg'
import youtube from '../images/youtube.jpg'



class Projects extends React.Component {
  render() {
    return(
      <div className='mdl-grid portfolio-max-width'>
              <div className="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
                <div className="mdl-card__media">
                    <img className="article-image" src={bug} border="0" alt=""/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">BugSystem</h5>
                  <p className="card-text">Built a system that is a forum which facilitates its users (customers) to create and track their complaints.  The system also allows its users (companies), to create responses to solve the customers complaints and concerns.
    </p>
                  <div className="social_icons social">
                    <a className="fa fa-github-alt fa-2x" href="https://github.com/lidianvilazio/BugSystem" target="_blank"></a>
                    <a className="fa fa-tv fa-2x" href="https://www.youtube.com/watch?v=mKDJCGROHS8&feature=youtu.be" target="_blank"></a>
                  </div>
                </div>
              </div>
              <div className="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
                <div className="mdl-card__media">
                    <img className="article-image" src={starwars} border="0" alt=""/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Star Wars Game</h5>
                  <p className="card-text">Created a video game based on the Star Wars theme, and includes Star Wars music, characters, and scenery.</p>
                  <div className="social_icons social">
                    <a className="fa fa-github-alt fa-2x" href="https://github.com/lidianvilazio/star-wars-game" target="_blank"></a>
                    <a className="fa fa-tv fa-2x" href="https://www.youtube.com/watch?v=5pkPBR9oHx8&feature=youtu.be" target="_blank"></a>
                  </div>
                </div>
              </div>
              <div className="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
                <div className="mdl-card__media">
                    <img className="article-image" src={book} border="0" alt=""/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">BookSystem</h5>
                  <p className="card-text">Built a system that allows users to perform a keyword search for specific books via google books api. Users can track their selected books within their personal inventory, and then users can share the books with other users.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  <div className="social_icons social">
                    <a className="fa fa-github-alt fa-2x" href="https://github.com/lidianvilazio/Book-System" target="_blank"></a>
                    <a className="fa fa-tv fa-2x" href="https://www.youtube.com/watch?v=xF8oJXjVvIo&feature=youtu.be" target="_blank"></a>
                  </div>
                </div>
              </div>
              <div className="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
                <div className="mdl-card__media">
                    <img className="article-image" src={youtube} border="0" alt=""/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Rating Youtube</h5>
                  <p className="card-text">Created a system that allows Youtube’s users to rate a video through recognition of the users facial emotions. Using Youtube API to search a video, and Google vision API to recognize the users facial emotion. The facial emotions recognized are: happy, sad, surprised.</p>
                  <div className="social_icons social">
                    <a className="fa fa-github-alt fa-2x" href="https://github.com/lidianvilazio/rating-youtube" target="_blank"></a>
                    <a className="fa fa-tv fa-2x" href="https://www.youtube.com/watch?v=gWFTi-6WKcI&feature=youtu.be" target="_blank"></a>
                  </div>
                </div>
              </div>
            </div>
        )
      }
    }

export default Projects;
