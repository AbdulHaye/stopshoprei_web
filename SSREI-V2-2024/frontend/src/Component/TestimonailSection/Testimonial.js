import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Testimonial.css";
import Jeremy_Smith from "../../Assets/Jeremy_Smith.jpg";
import Michael_Moughames from "../../Assets/Michael_Moughames.jpg";
import Abel_Gervacio_Jr from "../../Assets/Abel_Gervacio.jpg";
import Jay_Halliburton from "../../Assets/Jay_Halliburton.jpg";
import Joe_Field from "../../Assets/Joe_Field.jpg";
import Adam_Chodes from "../../Assets/Adam_Chodes.jpg";
import shena_moray from "../../Assets/shena_moray.png";

const Testimonial = () => {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + "...";
  };

  const testimonials = [
    {
      name: "Abel Gervacio Jr",
      company: "Real Neighborhood Offer",
      text: "\"A really big thank to StopShopREI. They have done a fantastic job with our back-end operations. They're basically a one-stop shop for everything you need from an administrative standpoint. They actually handle a lot of our back-end operations, including the smartphone capability within Podio. They handle everything within Podio. On top of that, they have a fully staffed team available for you to use at any time of the day whenever you have a question. Mohammed and his team have done a great job. We've been able to scale the SMS side of our marketing and have everything on the back end run as smoothly as possible. So thank you, StopShopREI and your team.\"",
      image: Abel_Gervacio_Jr,
    },
    {
      name: "Michael Moughames",
      company: "Cedar Acquisitions",
      text: "\"With StopShopREI. for the past three weeks now and they're helping me automate my Go high level account with SMS, emails and Bentley Outreach, I'm in the real estate wholesaling niche and they basically automate my whole system right now for outreach. So my acquisitions have never been easier, never been more. They convert the best, I would say. That's the word I was looking for. The conversion rates really increased. Working with StopShopREI, his team has been very easy. They are always responsive even at with you late hours of the night\"",
      image: Michael_Moughames,
    },
    {
      name: "Jay Halliburton",
      company: "Jay Buys Detroit",
      text: "\"Hey guys, it's Jay with Jay Buys Detroit and I'm here to talk to you about StopShopREI . I've been working with these guys for maybe. A year or so and in that year they have scaled my business tremendously. They're perfect at lead management, they're good at marketing campaigns, they're good at list building, then it goes on and on. They help me with my Podio CRM. They were able to expand those and I just want to say that if you are even considering working with these guys, they will improve your business. I'm still a client. I'm still happy work with these guys daily, man. I couldn't imagine my business without them. So shout out StopShopREI \"",
      image: Jay_Halliburton,
    },
    {
      name: "Joe Field",
      company: "We Close Fast,",
      text: "\"I've been working with StopShopREI for about 2-3 years. We've been consistently crushing it. We've been sending thousands and thousands of texts a day. They know how to use launch control. They know how to use batch leads. You know what I mean? I don't know any other company that's better than them when it comes to SMS Marketing & Cold Calling like it's crazy. So you know what I mean? We're getting ready to scale our texting team up, scale up the texting with StopShopREI . So I highly recommend them for sure. They won't let you down.\"",
      image: Joe_Field,
    },
    {
      name: "Jeremey Smith",
      company: "Connect Real Estate, ",
      text: "\"Highly recommend the StopShopREI . They've been awesome with our company. They've enhanced what we've done, what we're doing in the real estate world helped us tremendously with SMS Marketing, Cold Calling & KPIs and doing some of the tedious tasks that we didn't have the time to do. But these guys are experts at it, so we let them do it. So definitely recommend the StopShopREI \"",
      image: Jeremy_Smith,
    },
    {
      name: "Adam Chodes",
      company: "Atom Property Group, ",
      text: "\"So I just want to quickly thank the whole StopShopREI organization. They've done a tremendous job from a development standpoint and satisfying all the needs of, you know, my business from a real estate standpoint and more so I can definitely see the value that can be shared outside of just real estate. So very much appreciate all the efforts from you know his development team and their marketing efforts and things of that nature. So I think they're just a strong organization to work with and I'm very grateful. To have that opportunity to work with Mohammed, his team, and have this great partnership come to fruition and see how things play out\"",
      image: Adam_Chodes,
    },
    {
      name: "Sheena Murray",
      company: "Seven Pine Investment, ",
      text: '"Hi everyone, I just want to give a testimonial on StopShopREI  and my experience with their group. Since I started, their team has been very hands-on with me, taking the time to walk me through and understand all the technology and the entire process. He explained why all these software and technologies are important, which was crucial for me as this is my first time wholesaling. They made me comfortable with understanding the upfront costs and establishing a monthly budget. The team was very helpful in helping me understand the different software and how they fit into the overall plan. Within two to three weeks, I was already generating good leads from the time I signed on and started this wholesaling journey. Since then, the leads have continued to come in through positive text messaging campaigns and cold calling campaigns. So far, I have a couple of deals about to go under contract, one that is already under contract. The team has also been very helpful in creating a website to send interested buyers to. The overall experience, including the weekly meetings, consistent communication, and continuous support, has been fantastic. The team also has lots of best practices and tools to help people, whether you\'re seasoned or just starting out, to really get your business up and running and to scale up once you are."',
      image: shena_moray,
    },
  ];

  return (
    <div className="main_testimonial">
      <div className="container gtco-testimonials pt-5">
        <h3 className="client_head">
          Testimonials from Our Valued Clients Who Experienced Our REI Services
        </h3>
        <p className="client_subhead">
          Discover what clients of StopShopREI have to say about how our
          cutting-edge REI marketing and CRM solutions have revolutionized their
          real estate ventures, optimized their processes, and elevated their
          success to new levels.
        </p>
        <OwlCarousel
          className="owl-carousel owl-theme"
          loop
          center
          margin={10}
          responsiveClass
          nav={true}
          dots={false}
          navText={[
            '<span class="owl-nav-prev">‹</span>',
            '<span class="owl-nav-next">›</span>',
          ]}
          responsive={{
            0: { items: 1, nav: true },
            680: { items: 2, nav: true, loop: false },
            1000: { items: 3, nav: true },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <div className="card text-center">
                <img
                  className="card-img-top"
                  src={testimonial.image || "/placeholder.svg"}
                  alt="feedback"
                />
                <div className="card-body">
                  <h5 className="feedback_name">
                    {testimonial.name}
                    <br />
                    <span className="feedback_desig">
                      {" "}
                      {testimonial.company}{" "}
                    </span>
                  </h5>
                  <p className="card-text feedback_content">
                    <span className="truncate-text" title={testimonial.text}>
                      {truncateText(testimonial.text, 195)}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Testimonial;
