import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Read</span>
					<h2 className="colorlib-heading">Recent Blog</h2>
					</div>
				</div>
				<div className="row">
				
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
					<div className="blog-entry">
								<a href="https://virusworld3.blogspot.com/" target="_blank" rel="noopener noreferrer" className="blog-img"><img src="images/blog-2.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>April 25, 2020 </small> | <small> Personal Blog </small></span>
							<h3><a href="https://virusworld3.blogspot.com/" target="_blank" rel="noopener noreferrer">Personal Blog:First Blog</a></h3>
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