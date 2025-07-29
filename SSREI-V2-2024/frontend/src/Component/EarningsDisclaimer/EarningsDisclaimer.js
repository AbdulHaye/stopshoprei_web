import NavbarMain from "../NavbarUpper/NavbarMain";
import Footer from "../FooterStop/Footer";

export default function EarningsDisclaimer() {
  return (
    <>
      <NavbarMain />
      {/* Main Container */}
      <div className="min-vh-100" style={{ backgroundColor: "#f8f9fa" }}>
        {/* Hero Section */}
        <div
          className="bg-primary text-white py-5"
          style={{
            background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="mb-4">
                  <i className="bi bi-exclamation-triangle display-1 text-info"></i>
                </div>
                <h1 className="display-4 fw-bold mb-4">Earnings Disclaimer</h1>
                <div
                  className="d-inline-block mt-3 px-4 py-3 rounded"
                  style={{ backgroundColor: "rgba(30, 58, 138, 0.5)" }}
                >
                  <p className="h5 mb-0 fw-semibold text-white">
                    <span className="text-info">Last Updated:</span> 2024
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
              <div className="card shadow-lg">
                <div className="card-body p-4 p-md-5">
                  <div
                    className="alert alert-warning border-start border-4 border-warning bg-light"
                    role="alert"
                  >
                    <p className="h6 mb-0 text-dark">
                      By using our materials and services, you agree that{" "}
                      <strong>StopShopREI</strong> is not responsible for
                      your success or failure in any business decision related
                      to information provided by our company, programs, or
                      services.
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
                          General Earnings Disclaimer
                        </h2>
                      </div>
                      <p className="text-muted lh-lg">
                        Any income or earnings statements provided by
                        StopShopREI are estimates of income potential only.
                        There is no assurance that your earnings will match the
                        figures we present. Your reliance on these figures is at
                        your own risk. The income or earnings mentioned should
                        not be interpreted as common, typical, expected, or
                        normal for the average participant. Any stated results
                        may be exceptional, and numerous variables—many of which
                        are beyond our control—impact outcomes. StopShopREI
                        makes no guarantees regarding your income or earnings at
                        any time.
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
                          Specific Income Figures
                        </h2>
                      </div>
                      <p className="text-muted lh-lg">
                        Where specific income figures are mentioned and
                        attributed to an individual or business, that figure
                        reflects what that person or business actually earned.
                        However, this does not guarantee you will achieve
                        similar results—or that you will earn any income at all.
                        If you rely on these examples or figures, you do so
                        voluntarily and accept all associated risk.
                      </p>
                    </section>

                    {/* Section 3 */}
                    <section className="border-bottom pb-4 mb-4">
                      <div className="d-flex align-items-center mb-4">
                        <span
                          className="badge bg-secondary rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{ width: "40px", height: "40px" }}
                        >
                          3
                        </span>
                        <h2 className="h3 fw-bold text-dark mb-0">
                          Testimonials and Claims
                        </h2>
                      </div>
                      <p className="text-muted lh-lg">
                        Any and all claims or representations regarding earnings
                        on our website, in our materials, or in our
                        communications should not be viewed as average earnings.
                        Testimonials represent unique experiences and are not
                        representative of all results. There is no assurance
                        that prior success or results can be used as indicators
                        of future performance.
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
                          Risks and Suitability
                        </h2>
                      </div>
                      <p className="text-muted lh-lg">
                        Earnings in real estate or real property-related
                        businesses involve unknown risks, and may not be
                        suitable for everyone. Your success depends on many
                        factors we cannot assess: your personal background,
                        experience, work ethic, business skills, and many other
                        variables. For that reason, we do not guarantee any
                        income, earnings, prize winnings, or business success.
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
                          Decision-Making and Financial Risk
                        </h2>
                      </div>
                      <p className="text-muted lh-lg">
                        Decisions made based on any of our content—whether from
                        programs, services, products, or website—should be made
                        with the understanding that you could incur significant
                        financial loss or earn nothing at all. Only risk capital
                        should be invested.
                      </p>
                    </section>

                    {/* Section 6 */}
                    <section className="border-bottom pb-4 mb-5">
                      <div className="d-flex align-items-center mb-4">
                        <span
                          className="badge bg-secondary rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{ width: "40px", height: "40px" }}
                        >
                          6
                        </span>
                        <h2 className="h3 fw-bold text-dark mb-0">
                          Educational Purpose
                        </h2>
                      </div>
                      <p className="text-muted lh-lg">
                        All of our products and services are intended for
                        educational and informational purposes only. Always use
                        caution and seek advice from qualified professionals.
                        Consult your accountant, attorney, or other professional
                        advisor before acting on any information we provide.
                      </p>
                    </section>

                    {/* Section 7 */}
                    <section className="border-bottom pb-4 mb-5">
                      <div className="d-flex align-items-center mb-4">
                        <span
                          className="badge bg-secondary rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{ width: "40px", height: "40px" }}
                        >
                          7
                        </span>
                        <h2 className="h3 fw-bold text-dark mb-0">
                          Due Diligence
                        </h2>
                      </div>
                      <p className="text-muted lh-lg">
                        We urge all users of our programs, products, services,
                        and website to conduct their own due diligence before
                        making any business decisions. All information should be
                        independently verified by your own qualified
                        professionals.
                      </p>
                    </section>

                    {/* Section 8 */}
                    <section className="border-bottom pb-4 mb-5">
                      <div className="d-flex align-items-center mb-4">
                        <span
                          className="badge bg-secondary rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{ width: "40px", height: "40px" }}
                        >
                          8
                        </span>
                        <h2 className="h3 fw-bold text-dark mb-0">
                          Offers and Incentives
                        </h2>
                      </div>
                      <p className="text-muted lh-lg">
                        The disclosures and disclaimers stated herein apply
                        equally to any offers, bonuses, or incentives that may
                        be presented by StopShopREI.
                      </p>
                    </section>

                    {/* Section 9 */}
                    <section className="border-bottom pb-4 mb-5">
                      <div className="d-flex align-items-center mb-4">
                        <span
                          className="badge bg-secondary rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{ width: "40px", height: "40px" }}
                        >
                          9
                        </span>
                        <h2 className="h3 fw-bold text-dark mb-0">
                          No Affiliation
                        </h2>
                      </div>
                      <p className="text-muted lh-lg">
                        This site is not affiliated with, endorsed by, or part
                        of Google or Facebook. GOOGLE and FACEBOOK are
                        trademarks of their respective owners.
                      </p>
                    </section>
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="text-center">
                <p className="text-muted small mb-0">
                  Copyright 2024 – StopShopREI – All Rights Reserved
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
