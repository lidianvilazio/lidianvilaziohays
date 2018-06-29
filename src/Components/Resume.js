import React from 'react'
import code from '../images/code.jpg'



class Resume extends React.Component {
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
         <h3 className="mdl-cell mdl-cell--12-col mdl-typography--headline">Work Experience</h3>
         <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--12-col mdl-card__supporting-text no-padding ">
                <p>
                Itau Bank (Rio De Janeiro, Brazil) Relationship Banking Manager (Nov.2006-May 2015)
                </p>
                <ul>
                  <li> Led employee teams in various sales projects, ranging from two to five people.</li>
                  <li> Trained employees in-house and many retail locations in sales, bank software, administrative, etc..</li>
                  <li> Exceeded monthly sales requirements of banking products on a monthly basis.</li>
                  <li> Educated clients and provided customer service on a daily basis, which included issuing new loans, credit card, bank accounts, investments, etc. </li>
                  <li> Thrived in a fast pace environment, including daily pressure/deadlines from upper management.</li>
                </ul>
            </div>
          </div>
          <h3 className="mdl-cell mdl-cell--12-col mdl-typography--headline">Education</h3>
          <div className="mdl-grid">
             <div className="mdl-cell mdl-cell--12-col mdl-card__supporting-text no-padding ">
                 <ul>
                   <li> June 2018 - FLATIRON SCHOOL (Fully Immersive Program New York, NY)</li>
                   <li> July 2017 - ESTACIO DE SA UNIVERSITY (Brazil) Bachelor’s degree, Information Systems Major</li>
                 </ul>
             </div>
           </div>
           <h3 className="mdl-cell mdl-cell--12-col mdl-typography--headline">Additional Technical Courses Completed</h3>
           <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--12-col mdl-card__supporting-text no-padding ">
                  <ul>
                    <li> Intro to Data Structure course, C++, (COTI INFORMATICA, Brazil)</li>
                    <li> Web-development course, Java - Object-Oriented Programming logic course, (COTI INFORMATICA, Brazil)</li>
                    <li> Java Introduction to Java course, (COTI INFORMATICA, Brazil) </li>
                  </ul>
              </div>
            </div>
            <h3 className="mdl-cell mdl-cell--12-col mdl-typography--headline">Languages</h3>
            <div className="mdl-grid">
               <div className="mdl-cell mdl-cell--12-col mdl-card__supporting-text no-padding ">
                   <ul>
                     <li> Native Brazilian-Portuguese speaker</li>
                     <li> Native-level English speaker</li>
                   </ul>
               </div>
             </div>
             <h3 className="mdl-cell mdl-cell--12-col mdl-typography--headline">Technical Skills</h3>
             <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--12-col mdl-card__supporting-text no-padding ">
                    <ul>
                      <li>  Ruby</li>
                      <li> C++</li>
                      <li> Java</li>
                      <li>Javascript</li>
                      <li>HTML 5</li>
                      <li>CSS</li>
                    </ul>
                </div>
              </div>
        </div>
      </div>
    )
  }
}

export default Resume;
