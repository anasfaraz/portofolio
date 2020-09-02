import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                     <span className="heading-meta">Who, What !</span> 
                    <h2 className="colorlib-heading">Get to know  Me..</h2>
                    <h4>I am a FrontEnd Developer </h4>
                    <h4>I love exploring new web technologies</h4>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Some insight into my work..</span>
                 <h2 className="colorlib-heading">Tech Interests</h2> 
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>Developed Websites and Application using HTML/CSS/JavaScript and JS Frameworks like React</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Java Programming</h3>
                    <p>Good understanding of Object-Oriented Programming Concepts and Data Structures (Java)</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Python Programming</h3>
                  <p>Developed some project using OpenCV</p>
                </div>
                </div>
            </div> 
            </div>
        </div>
        </section>
      </div>
    )
  }
}