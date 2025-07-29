import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";

import "./../Testimonials/Testimonials.css";
import comma1 from "./../../Assets/testimonials_comma1.png";
import comma2 from "./../../Assets/testimonials_comma2.png";
import left_arr from "../../Assets/left_arr.png";
import right_arr from "../../Assets/right_arr.png";
import feedback from "../../Assets/abel_feedback.png";
import feedback1 from "../../Assets/nebu_grema.png";
import feedback2 from "../../Assets/client_feedback.png";

function Testimonials() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [displayedSubtitle, setDisplayedSubtitle] = useState("");
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const videos = ["NmiFpwySuj0", "ISkx5LAWtis", "PRN8BHhFQsY"];
  const subtitles = [
   
    " All right. Yeah. So, um, uh, this is a, uh, really big thank you to Mohammed and his team at 360. Um, they have done a fantastic job with, um, our backend operations. Um, they're basically a one stop shop for everything that you need from a VA standpoint. Uh, they actually handle a lot of our backend, um, smartphone, uh, which is a Capability within podio. They handle everything within podio. Um, on top of that, they have a fully staffed, um, uh, team available for you to use at any time of the day whenever you have a question. Um, uh, so Mohammed and his team have done a great job. Um, we've been able to scale our SMS side of our marketing, um, and have everything on the backend as fluent as slowly as possible. So thank you Mohammed, and your team. ",
    " Hi guys. My name is Nevy Germa from B and G Investments, and I'm here to talk a little bit about Support 360 Synergy Tech. We've been contracted with 'em for about four to five, six months, and they have exceeded our expectations by providing us timely deliverables, um, streamlining some of our processes, and I've also had a lot of transparency exceeding our expectations. Us. This has been a great pleasure working with them and we plan on working with them in the far future. Thank you. ",
    " We highly recommend 360 Synergy Tech. Uh, they have been instrumental in our growth, um, and domination in the SMS space. We are E two F properties. Uh, we buy and sell real estate. We wholesale, we, um, fix and flip. And we buy and hold. Um, they are a consistent, uh, knowledgeable, dependable. A partner of ours who have helped us grow, um, and automate all of our marketing, um, in, especially in particular in sms. Um, and we recommend them to anybody. So, um, they've, they've been fantastic. Thanks.",
  ];
  // ...

  useEffect(() => {
    let currentIndex = 0;
    let typingTimer;

    const typeSubtitle = () => {
      if (currentIndex <= subtitles[currentVideoIndex].length) {
        setDisplayedSubtitle(
          subtitles[currentVideoIndex].substring(0, currentIndex)
        );
        currentIndex++;
        typingTimer = setTimeout(typeSubtitle, 10); // Adjust typing speed here
      }
    };

    typeSubtitle();

    return () => {
      clearTimeout(typingTimer);
    };
  }, [currentVideoIndex]);

  const handleVideoClick = (index) => {
    setSelectedVideoIndex(index);
    setCurrentVideoIndex(index);
    setDisplayedSubtitle("");
  };

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
    setDisplayedSubtitle(""); 
  };

  const handlePreviousVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
    setDisplayedSubtitle(""); 
  };
  const handleVideoReady = (event) => {
    event.target.playVideo(); 
  };
  const handleVideoEnd = (event) => {
    event.target.playVideo(); 
  };
  return (
    <React.Fragment>
      <div className="main">
        <div className="row p-0 m-0">
          <div className="col-lg-4 col-md-4"></div>
          <div className="col-lg-4 col-md-4">
            <p className="testimonial_main">Testimonials</p>
          </div>
          <div className="col-lg-4 col-md-4"></div>
        </div>

        <div className="row p-0 m-0">
          <div className="col-lg-2 col-md-2 div_video">
            <div className="playlist_vid" onClick={() => handleVideoClick(0)}>
              <img src={feedback} alt="feedback 1" className="feedback" />
            </div>
            <div className="playlist_vid" onClick={() => handleVideoClick(1)}>
              <img src={feedback1} alt="feedback 2" className="feedback" />
            </div>
            <div className="playlist_vid" onClick={() => handleVideoClick(2)}>
              <img src={feedback2} alt="feedback 3" className="feedback" />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 video_main">
            <div className="video">
            <YouTube
            videoId={videos[currentVideoIndex]}
            className="video_link"
            containerClassName="video"
            opts={{
              playerVars: {
                autoplay: 1,
                loop: 1, 
              },
            }}
            onReady={handleVideoReady}
            onEnd={handleVideoEnd} 
          />
            </div>
          </div>
          <div className="col-lg-1 col-md-1 "></div>
          <div className="col-lg-5 col-md-5 testimo_data">
            <p className="testi_data">
              <img src={comma1} alt="comma 1" />
              {displayedSubtitle}
              <img src={comma2} alt="comma 2" />
            </p>
            <div></div>
          </div>
          <div className="col-lg-1 col-md-1 "></div>
        </div>

        <div className="row p-0 m-0">
          <div className="col-lg-4 col-md-4"></div>
          <div className="col-lg-4 col-md-4">
            {" "}
            <div className="arrows">
              <img
                className="left_arr"
                src={left_arr}
                alt="Left Arrow"
                onClick={handlePreviousVideo}
              />
              <img
                className="right_arr"
                src={right_arr}
                alt="Right Arrow"
                onClick={handleNextVideo}
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-4"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Testimonials;
