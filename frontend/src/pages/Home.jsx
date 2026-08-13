import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="app">

      {/* Navigation */}
      <nav className="navbar">

        <div className="logo">
          <span className="logo-icon">AI</span>
          <span>ClaimAI</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About</a>
        </div>

        <button
          className="login-btn"
          onClick={() => navigate("/new-claim")}
        >
          New Claim
        </button>

      </nav>


      {/* Hero */}
      <main id="home">

        <section className="hero">

          <div className="hero-content">

            <div className="badge">
              AI-POWERED INSURANCE
            </div>

            <h1>
              Smarter Vehicle
              <span>Damage Assessment</span>
            </h1>

            <p>
              Upload images of your damaged vehicle and let AI analyze
              the damage, identify affected parts, and estimate your
              repair cost in seconds.
            </p>

            <div className="hero-buttons">

              <button
                className="primary-btn"
                onClick={() => navigate("/new-claim")}
              >
                Start New Claim
                <span>→</span>
              </button>

              <button
                className="secondary-btn"
                onClick={() =>
                  document
                    .getElementById("how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn More
              </button>

            </div>

          </div>


          {/* AI Visualization */}
          <div className="hero-visual">

            <div className="scan-card">

              <div className="scan-header">
                <span>AI DAMAGE ANALYSIS</span>
                <span className="live">● LIVE</span>
              </div>

              <div className="car-placeholder">

                <div className="car-shape">

                  <div className="car-window"></div>

                  <div className="damage-marker marker-one">
                    <span>Front Bumper</span>
                    <strong>92%</strong>
                  </div>

                  <div className="damage-marker marker-two">
                    <span>Headlight</span>
                    <strong>87%</strong>
                  </div>

                </div>

              </div>

              <div className="analysis-result">

                <div>
                  <small>DAMAGE SEVERITY</small>
                  <strong>Moderate</strong>
                </div>

                <div>
                  <small>ESTIMATED COST</small>
                  <strong>₹24,500</strong>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* How it works */}
        <section id="how-it-works" className="how-section">

          <div className="section-heading">

            <div className="badge">
              SIMPLE PROCESS
            </div>

            <h2>
              From Accident to Estimate
            </h2>

            <p>
              Our AI-powered system simplifies the vehicle insurance
              assessment process.
            </p>

          </div>


          <div className="steps">

            <div className="step-card">
              <div className="step-number">01</div>
              <h3>Upload Images</h3>
              <p>
                Upload clear images of your damaged vehicle from
                multiple angles.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">02</div>
              <h3>AI Analysis</h3>
              <p>
                Our computer vision system identifies damaged parts
                and analyzes their severity.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">03</div>
              <h3>Get Estimate</h3>
              <p>
                Receive an estimated repair cost and a detailed
                insurance claim report.
              </p>
            </div>

          </div>

        </section>


        {/* About */}
        <section id="about" className="about-section">

          <div>

            <div className="badge">
              ABOUT THE PROJECT
            </div>

            <h2>
              AI-Powered Automated Insurance Claim Estimator
            </h2>

          </div>

          <p>
            The system uses computer vision and deep learning to
            analyze vehicle damage, classify its severity and
            generate an estimated repair cost.
          </p>

        </section>

      </main>


      <footer>

        <div>
          © 2026 ClaimAI
        </div>

        <div>
          AI Insurance Claim Estimator
        </div>

      </footer>

    </div>
  );
}

export default Home;