import NavbarMain from "../NavbarUpper/NavbarMain";
import Footer from "../FooterStop/Footer";

export default function PrivacyPolicy() {
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
                  <i className="bi bi-shield-lock display-1 text-info"></i>
                </div>
                <h1 className="display-4 fw-bold mb-4">Privacy Policy</h1>
                <div
                  className="d-inline-block mt-3 px-4 py-3 rounded"
                  style={{ backgroundColor: "rgba(30, 58, 138, 0.5)" }}
                >
                  <p className="h5 mb-0 fw-semibold text-white">
                    <span className="text-info">Effective Date:</span> June 1,
                    2025
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
                      Your privacy is important to us at{" "}
                      <strong>StopShopREI</strong>. This Privacy Policy
                      explains how we collect, use, and safeguard your personal
                      information.
                    </p>
                  </div>

                  <div className="mt-5">
                    {/* Section 1 */}
                    <section className="border-bottom pb-4 mb-5">
                      <div className="d-flex align-items-center mb-4">
                        <span
                          className="badge bg-secondary rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{ width: "40px", height: "40px" }}
                        >
                          1
                        </span>
                        <h2 className="h3 fw-bold text-dark mb-0">
                          Information Collection and Use
                        </h2>
                      </div>
                      <p className="text-muted lh-lg">
                        We do not collect, store, or manage any customer data
                        during the delivery of services. All outreach (cold
                        calling, SMS, email, lead scraping, etc.) is performed
                        using your systems and CRMs. You, as our client, are the
                        data controller and are solely responsible for
                        compliance with applicable data protection laws.
                      </p>
                    </section>

                    {/* Section 2 */}
                    <section className="border-bottom pb-4 mb-5">
                      <div className="d-flex align-items-center mb-4">
                        <span
                          className="badge bg-secondary rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{ width: "40px", height: "40px" }}
                        >
                          2
                        </span>
                        <h2 className="h3 fw-bold text-dark mb-0">
                          Third-Party Tools
                        </h2>
                      </div>
                      <p className="text-muted lh-lg">
                        We may integrate with third-party platforms at your
                        direction (e.g., CRMs, telecommunication systems). Your
                        data may be processed through those systems according to
                        their terms and privacy policies.
                      </p>
                    </section>

                    {/* Section 3 */}
                    <section className="border-bottom pb-4 mb-5">
                      <div className="d-flex align-items-center mb-4">
                        <span
                          className="badge bg-secondary rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{ width: "40px", height: "40px" }}
                        >
                          3
                        </span>
                        <h2 className="h3 fw-bold text-dark mb-0">
                          Data Security
                        </h2>
                      </div>
                      <p className="text-muted lh-lg">
                        We do not retain any customer data. Your data remains
                        within your platforms. Nevertheless, we follow general
                        industry standards to help protect any information
                        provided to us directly.
                      </p>
                    </section>

                    {/* Section 4 */}
                    <section className="border-bottom pb-4 mb-5">
                      <div className="d-flex align-items-center mb-4">
                        <span
                          className="badge bg-secondary rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{ width: "40px", height: "40px" }}
                        >
                          4
                        </span>
                        <h2 className="h3 fw-bold text-dark mb-0">
                          No Sale of Data
                        </h2>
                      </div>
                      <p className="text-muted lh-lg">
                        We do not sell, trade, or share your information with
                        external parties.
                      </p>
                    </section>

                    {/* Section 5 */}
                    <section className="border-bottom pb-4 mb-5">
                      <div className="d-flex align-items-center mb-4">
                        <span
                          className="badge bg-secondary rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{ width: "40px", height: "40px" }}
                        >
                          5
                        </span>
                        <h2 className="h3 fw-bold text-dark mb-0">
                          Communication
                        </h2>
                      </div>
                      <p className="h6 text-muted mb-0">
                        You may contact us for questions regarding this policy
                        at:{" "}
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
                  Last updated: June 1, 2025 | © 2025 StopShopREI . All
                  rights reserved.
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
