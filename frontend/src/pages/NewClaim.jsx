import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewClaim() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    manufacturer: "",
    model: "",
    year: "",
    registrationNumber: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setError("");
  };


  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !formData.manufacturer ||
      !formData.model ||
      !formData.year ||
      !formData.registrationNumber
    ) {

      setError("Please fill in all vehicle details.");

      return;
    }

    const existingClaim =
  JSON.parse(localStorage.getItem("claimData")) || {};

const updatedClaim = {
  ...existingClaim,
  vehicle: formData,
};

localStorage.setItem(
  "claimData",
  JSON.stringify(updatedClaim)
);

console.log("Vehicle Details:", updatedClaim);

navigate("/new-claim/accident");

  };


  return (

    <div className="claim-page">

      {/* Header */}

      <header className="claim-header">

        <button
          className="back-button"
          onClick={() => navigate("/")}
        >
          ← Back
        </button>

        <div className="logo">
          <span className="logo-icon">AI</span>
          <span>ClaimAI</span>
        </div>

        <div className="claim-id">
          NEW CLAIM
        </div>

      </header>


      {/* Progress */}

      <div className="progress-container">

        <div className="progress-step active">
          <div className="progress-number">
            01
          </div>

          <span>Vehicle</span>
        </div>


        <div className="progress-line"></div>


        <div className="progress-step">
          <div className="progress-number">
            02
          </div>

          <span>Accident</span>
        </div>


        <div className="progress-line"></div>


        <div className="progress-step">
          <div className="progress-number">
            03
          </div>

          <span>Images</span>
        </div>

      </div>


      {/* Main */}

      <main className="claim-container">

        <div className="claim-heading">

          <div className="badge">
            STEP 01 / 03
          </div>

          <h1>
            Tell us about your vehicle
          </h1>

          <p>
            Enter the basic details of the vehicle involved in the
            insurance claim.
          </p>

        </div>


        <form
          className="claim-form"
          onSubmit={handleSubmit}
        >

          {/* Manufacturer */}

          <div className="form-group">

            <label>
              Vehicle Manufacturer
            </label>

            <select
              name="manufacturer"
              value={formData.manufacturer}
              onChange={handleChange}
            >

              <option value="">
                Select manufacturer
              </option>

              <option value="Maruti Suzuki">
                Maruti Suzuki
              </option>

              <option value="Hyundai">
                Hyundai
              </option>

              <option value="Tata">
                Tata
              </option>

              <option value="Honda">
                Honda
              </option>

              <option value="Toyota">
                Toyota
              </option>

              <option value="Mahindra">
                Mahindra
              </option>

              <option value="Kia">
                Kia
              </option>

              <option value="Other">
                Other
              </option>

            </select>

          </div>


          {/* Model */}

          <div className="form-group">

            <label>
              Vehicle Model
            </label>

            <input
              type="text"
              name="model"
              placeholder="e.g. Creta, City, Nexon"
              value={formData.model}
              onChange={handleChange}
            />

          </div>


          {/* Year */}

          <div className="form-group">

            <label>
              Manufacturing Year
            </label>

            <input
              type="number"
              name="year"
              placeholder="e.g. 2024"
              min="1990"
              max="2026"
              value={formData.year}
              onChange={handleChange}
            />

          </div>


          {/* Registration */}

          <div className="form-group">

            <label>
              Registration Number
            </label>

            <input
              type="text"
              name="registrationNumber"
              placeholder="e.g. KA01AB1234"
              value={formData.registrationNumber}
              onChange={handleChange}
            />

          </div>


          {error && (

            <div className="form-error">
              {error}
            </div>

          )}


          <div className="form-footer">

            <span>
              Your information is securely processed.
            </span>

            <button
              type="submit"
              className="primary-btn"
            >
              Continue
              <span>→</span>
            </button>

          </div>

        </form>

      </main>

    </div>

  );
}

export default NewClaim;