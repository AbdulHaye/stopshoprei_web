import NavbarMain from "../NavbarUpper/NavbarMain";
import Footer from "../FooterStop/Footer";

export default function TermsAndConditions() {
  return (
    <>
      <NavbarMain />
      {/* Main Container */}
      <div className="min-vh-100" style={{ backgroundColor: "#f8f9fa" }}>
        {/* Hero Section */}
        <div
          className="text-white py-5"
          style={{
            background: "#00235A",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="mb-4">
                  <i className="bi bi-file-text display-1 text-info"></i>
                </div>
                <h1 className="display-4 fw-bold mb-4">Terms and Conditions</h1>
                <div
                  className="d-inline-block mt-3 px-4 py-3 rounded"
                  style={{ backgroundColor: "rgba(30, 58, 138, 0.5)" }}
                >
                  <p className="h5 mb-0 fw-semibold text-white">
                    <span className="text-info">Effective Date:</span> January 1, 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card shadow-lg border-0 mb-4">
                <div className="card-body p-4 p-md-5">
                  <div
                    className="alert alert-warning border-start border-4 border-warning bg-light"
                    role="alert"
                  >
                    <p className="h6 mb-0 text-dark">
                      By using this website or submitting payment for any invoice issued by <strong>StopShopREI</strong>, you agree to the following terms:
                    </p>
                  </div>

                  <div className="mt-5">
                    {/* Section 1 */}
                    <section className="border-bottom pb-4 mb-5">
                      <div className="d-flex align-items-center mb-4">
                        <span
                          className="badge bg-secondary rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{ width: "40px", height: "40px", fontSize: "1rem" }}
                        >
                          1
                        </span>
                        <h2 className="h3 fw-bold text-dark mb-0">Services Provided</h2>
                      </div>
                      <p className="text-muted mb-4 lh-lg">
                        StopShopREI offers virtual assistant services including, but not limited to:
                      </p>
                      <div className="bg-light rounded p-4 mb-4">
                        <div className="row g-3">
                          <div className="col-md-6">
                            <div className="d-flex align-items-center">
                              <span
                                className="bg-warning rounded-circle me-3"
                                style={{ width: "8px", height: "8px" }}
                              ></span>
                              <span className="text-muted">Cold calling</span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="d-flex align-items-center">
                              <span
                                className="bg-warning rounded-circle me-3"
                                style={{ width: "8px", height: "8px" }}
                              ></span>
                              <span className="text-muted">SMS and email outreach</span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="d-flex align-items-center">
                              <span
                                className="bg-warning rounded-circle me-3"
                                style={{ width: "8px", height: "8px" }}
                              ></span>
                              <span className="text-muted">Lead scraping</span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="d-flex align-items-center">
                              <span
                                className="bg-warning rounded-circle me-3"
                                style={{ width: "8px", height: "8px" }}
                              ></span>
                              <span className="text-muted">Appointment setting</span>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-flex align-items-center">
                              <span
                                className="bg-warning rounded-circle me-3"
                                style={{ width: "8px", height: "8px" }}
                              ></span>
                              <span className="text-muted">Other CRM-based marketing operations</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted lh-lg">
                        Services are executed using your own CRM and tools. You confirm that the services listed in the invoice have been delivered or initiated at the time of payment.
                      </p>
                    </section>

                    {/* Section 2 */}
                    <section className="border-bottom pb-4 mb-5">
                      <div className="d-flex align-items-center mb-4">
                        <span
                          className="badge bg-secondary rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{ width: "40px", height: "40px", fontSize: "1rem" }}
                        >
                          2
                        </span>
                        <h2 className="h3 fw-bold text-dark mb-0">Refund and Chargeback Policy</h2>
                      </div>
                      <p className="fw-semibold text-dark mb-2">
                        All sales are final. No refunds or chargebacks are permitted once services have been initiated.
                      </p>
                      <p className="text-muted mb-0">
                        Payment of any invoice constitutes your acceptance of service delivery.
                      </p>
                    </section>

                    {/* Section 3 */}
                    <section className="border-bottom pb-4 mb-5">
                      <div className="d-flex align-items-center mb-4">
                        <span
                          className="badge bg-secondary rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{ width: "40px", height: "40px", fontSize: "1rem" }}
                        >
                          3
                        </span>
                        <h2 className="h3 fw-bold text-dark mb-0">Limitation of Liability</h2>
                      </div>
                      <p className="text-muted lh-lg">
                        StopShopREI is a service provider acting solely on your instruction. We do not guarantee specific results and accept no liability for legal claims or business losses resulting from your use of leads or data generated through our services. You agree to hold us harmless in the event of any third-party claims.
                      </p>
                    </section>

                    {/* Section 4 */}
                    <section className="border-bottom pb-4 mb-5">
                      <div className="d-flex align-items-center mb-4">
                        <span
                          className="badge bg-secondary rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{ width: "40px", height: "40px", fontSize: "1rem" }}
                        >
                          4
                        </span>
                        <h2 className="h3 fw-bold text-dark mb-0">Intellectual Property</h2>
                      </div>
                      <p className="text-muted lh-lg">
                        All content and materials on this site are the intellectual property of StopShopREI and protected under applicable copyright laws.
                      </p>
                    </section>

                    {/* Section 5 */}
                    <section className="border-bottom pb-4 mb-5">
                      <div className="d-flex align-items-center mb-4">
                        <span
                          className="badge bg-secondary rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{ width: "40px", height: "40px", fontSize: "1rem" }}
                        >
                          5
                        </span>
                        <h2 className="h3 fw-bold text-dark mb-0">Payment Terms</h2>
                      </div>
                      <p className="text-muted lh-lg mb-0">
                        All payments made to StopShopREI are non-refundable. Please ensure that you fully understand the scope of services before submitting payment.
                      </p>
                    </section>

                    {/* Section 6 */}
                    <section className="border-bottom pb-4 mb-5">
                      <div className="d-flex align-items-center mb-4">
                        <span
                          className="badge bg-secondary rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{ width: "40px", height: "40px", fontSize: "1rem" }}
                        >
                          6
                        </span>
                        <h2 className="h3 fw-bold text-dark mb-0">Termination</h2>
                      </div>
                      <p className="text-muted lh-lg">
                        StopShopREI may terminate service provision at any time in cases of abuse, violation of terms, or non-payment.
                      </p>
                    </section>

                    {/* Section 7 */}
                    <section className="border-bottom pb-4 mb-5">
                      <div className="d-flex align-items-center mb-4">
                        <span
                          className="badge bg-secondary rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{ width: "40px", height: "40px", fontSize: "1rem" }}
                        >
                          7
                        </span>
                        <h2 className="h3 fw-bold text-dark mb-0">Governing Law</h2>
                      </div>
                      <p className="text-muted lh-lg">
                        These Terms shall be governed by the laws of the United States. Any disputes shall be handled in accordance with U.S. jurisdiction and venue.
                      </p>
                    </section>

                    {/* Section 8 */}
                    <section className="border-bottom pb-4 mb-5">
                      <div className="d-flex align-items-center mb-4">
                        <span
                          className="badge bg-secondary rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{ width: "40px", height: "40px", fontSize: "1rem" }}
                        >
                          8
                        </span>
                        <h2 className="h3 fw-bold text-dark mb-0">Contact</h2>
                      </div>
                      <p className="h6 text-muted mb-0">
                        For general questions:{" "}
                        <a
                          href="mailto:info@stopshoprei.com"
                          className="text-warning fw-semibold text-decoration-underline"
                          style={{
                            textDecorationThickness: "2px",
                            textUnderlineOffset: "3px",
                          }}
                        >
                          info@stopshoprei.com
                        </a>
                      </p>
                    </section>
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="text-center">
                <p className="text-muted small mb-0">
                  Last updated: January 1, 2025 | © 2025 StopShopREI. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/* End of Main Container */}
    </>
  );
}