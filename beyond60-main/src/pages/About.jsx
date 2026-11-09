import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        
        {/* Founder Section (Top) */}
        <div className="about-founder-container">
          
          {/* Left Column (Portrait - hidden on phone screen) */}
          <div className="about-founder-portrait">
            <img 
              src="https://res.cloudinary.com/rkuqh3mn/image/upload/f_auto,q_auto/v1792559684/f_og.jpg" 
              alt="Emmanuel Babu - Portrait" 
            />
          </div>
          
          {/* Right Column (Landscape & Text) */}
          <div className="about-founder-main">
            <div className="about-founder-landscape">
              <img 
                src="https://res.cloudinary.com/rkuqh3mn/image/upload/f_auto,q_auto/v1792559683/d_j.jpg" 
                alt="Emmanuel Babu - Landscape" 
              />
            </div>
            
            <div className="about-founder-text">
              <p>
                Hi, I’m <strong className="about-highlight">Emmanuel Babu</strong> just a boy who once dreamed of building something of his own.
              </p>
              
              <p>
                I didn’t know exactly where that dream would take me. I only knew that I wanted to create, tell stories, and build something that people could believe in. That little dream slowly grew into something bigger <strong className="about-highlight">Beyond60.</strong> A creative studio built from passion, countless ideas and the belief that every person, every brand and every moment has a story worth telling.
              </p>
              
              <p>
                What started as a dream is now something I’m building with my own hands, one story at a time.
              </p>
              
              <p>
                And the best part?
              </p>
              
              <p>
                The dream is still growing.
              </p>
            </div>
          </div>

        </div>


        {/* First Section */}
        <div className="about-story-section about-story-right">
          <div className="about-story-media">
            <img 
              src="https://res.cloudinary.com/rkuqh3mn/image/upload/f_auto,q_auto/v1792559684/A.jpg" 
              alt="Beyond60 Team"
              className="about-img-right"
            />
          </div>
          
          <div className="about-story-text">
            <div>
              <h2 className="about-heading-lg">More Than a Crew.</h2>
              <h1 className="about-heading-hero">We're Family.</h1>
            </div>
            
            <div>
              <p>
                At Beyond60, we’ve never believed that great work comes from simply putting a group of people in the same room.
              </p>
              
              <p>
                It comes from connection.
              </p>
              
              <p>
                From people who understand each other without having to say much. From late nights that somehow turn into the best memories. From random ideas that become something bigger than we imagined. From laughing between takes, solving problems together, celebrating small wins, and showing up for one another when things don’t go as planned.
              </p>

              <p>
                That’s why we don’t really call ourselves a crew.
              </p>

              <p>
                We’re family.
              </p>
            </div>
          </div>
        </div>
        
        {/* Second Section */}
        <div className="about-story-section about-story-left about-align-right">
          <div className="about-story-media">
            <img 
              src="https://res.cloudinary.com/rkuqh3mn/image/upload/f_auto,q_auto/v1792559683/c.jpg" 
              alt="Beyond60 History"
              className="about-img-left"
            />
          </div>
          
          <div className="about-story-text">
            <div>
              <p>
                Beyond60 started with a simple dream to create something of our own. Something that could turn ideas, moments, people, and stories into experiences that stay with you long after the screen goes dark.
              </p>
              
              <p>
                But along the way, something unexpected happened.
              </p>
              
              <p>
                The dream became bigger than one person.
              </p>

              <p>
                People came into the journey. Some stayed for a project. Some became part of multiple stories. Some stood in front of the camera. Some worked behind it. Some brought ideas. Some brought energy. Some simply showed up when they were needed.
              </p>

              <p>
                And slowly, they became more than collaborators.
              </p>

              <p className="about-quote-md">
                They became our people.
              </p>
            </div>
          </div>
        </div>

        {/* Third Section */}
        <div className="about-story-section about-story-right">
          <div className="about-story-media">
            <img 
              src="https://res.cloudinary.com/rkuqh3mn/image/upload/f_auto,q_auto/v1792559686/b.jpg" 
              alt="Beyond60 Roles"
              className="about-img-right"
            />
          </div>
          
          <div className="about-story-text" >
            <div>
              <h2 className="about-heading-md" style={{ fontSize: '1.9rem' }}>
                It’s Not About Who Has What Role
              </h2>
            </div>
            
            <div>
              <p>
                At Beyond60, we don’t believe a person should be defined only by a title.
              </p>
              
              <p>
                You might see someone acting in one project and helping us create an idea in another. Someone might be behind the camera today and helping shape the story tomorrow. Someone might come in with one small contribution and leave a much bigger impact on the final piece.
              </p>
              
              <p>
                That’s what makes our world different.
              </p>

              <p>
                We’re connected by what we create, not by what our job titles say. Because creativity doesn’t always follow a structure. Sometimes the best idea comes from the person you least expected. Sometimes a five-minute conversation changes an entire shoot.
              </p>
              
              <p>
                Sometimes a silly thought becomes the scene everyone remembers.
              </p>

              <p>
                And sometimes the people who were only supposed to be there for one project become part of the journey itself.
              </p>

              <p>
                That’s family.
              </p>
              
              <h3 className="about-heading-sm">
                We Grow Together
              </h3>
              
              <p>
                Beyond60 is still growing.
              </p>
            </div>
          </div>
        </div>

        {/* Fourth Section */}
        <div className="about-story-section about-story-left about-align-right" >
          <div className="about-story-media">
            <img 
              src="https://res.cloudinary.com/rkuqh3mn/image/upload/f_auto,q_auto/v1792559684/e.jpg" 
              alt="Beyond60 Family"
              className="about-img-left"
            />
          </div>
          
          <div className="about-story-text">
            <div>
              <h2 className="about-heading-hero" style={{ marginBottom: '10px' }}>
                This Is Our Family
              </h2>
            </div>
            
            <div>
              <p>
                Beyond60 isn’t just a team.
              </p>
              
              <p>
                It’s a group of people with different personalities, talents, dreams, and stories—brought together by a love for creating. We support each other, challenge each other, laugh together, and grow together.
              </p>
              
              <p>
                We may not always think alike, but when it matters, we show up for one another.
              </p>

              <p>
                Because we’re not just building a studio.
              </p>

              <p>
                We’re building a family.
              </p>
              
              <p style={{ marginTop: '10px' }}>
                We’re not a crew. <span className="about-quote-lg">We’re a family.</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
