import React from "react";
import "./Faq.css";
import faqline from "../../Assets/faqline.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Faq() {
  return (
    <div className="main_faq">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-">
            <h1 className="faq_head">Frequently Asked Questions</h1>
            <img src={faqline} alt="faq" />
            <p className="faq_ques">
              Have Questions In Your Mind? Get{" "}
              <span className="faq_queso"> The Answers Now</span>
            </p>
          </div>
          <div class="col-xl-6 col-lg- accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <strong className="faq_contenthead">
                    Who are my team members?
                  </strong>
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p className="">
                    At StopShopREI, our team is comprised of dedicated
                    professionals from the USA and Pakistan. Our team members
                    are typically college-educated and fluent in English,
                    ensuring clear and effective communication. Each member has
                    undergone a rigorous vetting process along with
                    comprehensive training and testing programs.
                    <br></br>
                    <strong>Our Commitment to You</strong>
                    <br></br> We provide more than just assistants; we offer a
                    dedicated back office team to support your business with
                    daily tasks and maximize your marketing ROI. Our assistants
                    are not just employees; they are integral parts of your
                    business operations.
                    <br></br>
                    <strong>Supervision and Support</strong>
                    <br></br> Our assistants are overseen by skilled Operations
                    Managers and have access to a supportive team for any
                    additional help they may need. We ensure our assistants are
                    well-compensated, offering salaries above market rates and
                    incentives based on your satisfaction.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <strong className="faq_contenthead">
                    What about data security?
                  </strong>
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    Data privacy is central to decisions we make at StopShopREI,
                    . We use bank-level security, and best-in-class services to
                    keep your data secure.
                  </p>
                  <ul>
                    <li>
                      <strong>Payments:</strong> Your payment information is
                      stored with Stripe/Square, a leading global payments
                      processing company that powers companies like Google,
                      Amazon, Slack, Zoom, and Lyft. Stripe is certified to PCI
                      Service Provider Level 1, the most stringent level of
                      certification in the payments industry. All card numbers
                      are encrypted at rest with AES-256-bit encryption keys. In
                      transit, Stripe forces TLS encryption on all data.
                    </li>
                    <li>
                      <strong>Credentials:</strong> Any credentials exchanged
                      with StopShopREI, are handled by Google Cloud’s Secret
                      Manager, a best-in-class credential management system. Any
                      data interchanged with Secret Manager are encrypted in
                      transit with TLS, and at rest, this data is encrypted with
                      AES-256-bit encryption keys.
                    </li>
                    <li>
                      <strong>StopShopREI, Staff:</strong> All staff associated
                      with StopShopREI, have signed strict non-disclosure
                      agreements and data security agreements. Data is only
                      viewed by essential parties, and every agent interacting
                      with customer data undergoes training and certification on
                      data security best practices. Access logs and monitoring
                      software are employed to track agent conduct.
                    </li>
                    <li>
                      <strong>File Uploads:</strong> All stored files are stored
                      with Google Cloud, and access to these files is controlled
                      by public-private key encryption.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <strong className="faq_contenthead">
                    How do I communicate with StopShopREI, Team?
                  </strong>
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    Any way you like! We have the following methods available at
                    this time:
                  </p>
                  <ul>
                    <li>Slack app</li>
                    <li>Dedicated phone number (calls & texts)</li>
                    <li>Email (Manager & Team Members Access)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <strong className="faq_contenthead">
                    What is the process to get started?
                  </strong>
                </button>
              </h2>
              <div
                id="collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <ol>
                    <li>
                      Have a 15-30 minute meeting with StopShopREI, to discuss
                      your business needs. <a>Click Here to Book a Meeting</a>.
                    </li>
                    <li>
                      Get set up on Slack for Business Communication & invite
                      your team and partners.
                    </li>
                    <li>
                      Have us start helping! Ask StopShopREI, for tips on how to
                      get the most out of us.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
