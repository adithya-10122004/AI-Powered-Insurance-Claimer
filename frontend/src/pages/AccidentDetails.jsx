import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AccidentDetails() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    accidentDate: "",
    accidentTime: "",
    location: "",
    accidentType: "",
    description: "",
    anotherVehicle: "",
    vehicleDrivable: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };


  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !formData.accidentDate ||
      !formData.accidentTime ||
      !formData.location ||
      !formData.accidentType ||
      !formData.description ||
      !formData.anotherVehicle ||
      !formData.vehicleDrivable
    ) {

      setError("Please complete all accident details.");

      return;
    }


    /*
      Save accident information temporarily.

      Later this will be replaced by our backend/database.
    */

    const existingClaim =
      JSON.parse(localStorage.getItem("claimData")) || {};

    const updatedClaim = {
      ...existingClaim,
      accident: formData,
    };

    localStorage.setItem(
      "claimData",
      JSON.stringify(updatedClaim)
    );


    console.log("Complete Claim Data:", updatedClaim);


    // Move to Step 3
    navigate("/new-claim/images");

  };


  return (

    <div className="claim-page">

      {/* HEADER */}

      <header className="claim-header">

        <button
          className="back-button"
          onClick={() => navigate("/new-claim")}
        >
          ← Vehicle Details
        </button>


        <div className="logo">

          <span className="logo-icon">
            AI
          </span>

          <span>
            ClaimAI
          </span>

        </div>


        <div className="claim-id">
          NEW CLAIM
        </div>

      </header>



      {/* PROGRESS */}

      <div className="progress-container">

        <div className="progress-step completed">

          <div className="progress-number">
            ✓
          </div>

          <span>
            Vehicle
          </span>

        </div>


        <div className="progress-line active-line"></div>


        <div className="progress-step active">

          <div className="progress-number">
            02
          </div>

          <span>
            Accident
          </span>

        </div>


        <div className="progress-line"></div>


        <div className="progress-step">

          <div className="progress-number">
            03
          </div>

          <span>
            Images
          </span>

        </div>

      </div>



      {/* MAIN */}

      <main className="claim-container">

        <div className="claim-heading">

          <div className="badge">
            STEP 02 / 03
          </div>

          <h1>
            Tell us what happened
          </h1>

          <p>
            Provide details about the accident. This information
            helps us understand the circumstances surrounding your
            vehicle damage.
          </p>

        </div>



        {/* FORM */}

        <form
          className="claim-form accident-form"
          onSubmit={handleSubmit}
        >


          {/* DATE */}

          <div className="form-group">

            <label>
              Accident Date
            </label>

            <input
              type="date"
              name="accidentDate"
              value={formData.accidentDate}
              onChange={handleChange}
            />

          </div>



          {/* TIME */}

          <div className="form-group">

            <label>
              Approximate Time
            </label>

            <input
              type="time"
              name="accidentTime"
              value={formData.accidentTime}
              onChange={handleChange}
            />

          </div>



          {/* LOCATION */}

          <div className="form-group full-width">

            <label>
              Accident Location
            </label>

            <input
              type="text"
              name="location"
              placeholder="e.g. Outer Ring Road, Bengaluru"
              value={formData.location}
              onChange={handleChange}
            />

          </div>



          {/* ACCIDENT TYPE */}

          <div className="form-group">

            <label>
              Type of Accident
            </label>

            <select
              name="accidentType"
              value={formData.accidentType}
              onChange={handleChange}
            >

              <option value="">
                Select accident type
              </option>

              <option value="Collision">
                Collision
              </option>

              <option value="Rear End">
                Rear End Collision
              </option>

              <option value="Side Impact">
                Side Impact
              </option>

              <option value="Hit Object">
                Hit an Object
              </option>

              <option value="Single Vehicle">
                Single Vehicle Accident
              </option>

              <option value="Natural Cause">
                Weather / Natural Cause
              </option>

              <option value="Other">
                Other
              </option>

            </select>

          </div>



          {/* OTHER VEHICLE */}

          <div className="form-group">

            <label>
              Was another vehicle involved?
            </label>

            <select
              name="anotherVehicle"
              value={formData.anotherVehicle}
              onChange={handleChange}
            >

              <option value="">
                Select an option
              </option>

              <option value="Yes">
                Yes
              </option>

              <option value="No">
                No
              </option>

              <option value="Unknown">
                Not sure
              </option>

            </select>

          </div>



          {/* DRIVABLE */}

          <div className="form-group">

            <label>
              Is the vehicle currently drivable?
            </label>

            <select
              name="vehicleDrivable"
              value={formData.vehicleDrivable}
              onChange={handleChange}
            >

              <option value="">
                Select an option
              </option>

              <option value="Yes">
                Yes
              </option>

              <option value="No">
                No
              </option>

              <option value="Unsafe">
                Drivable but unsafe
              </option>

            </select>

          </div>



          {/* DESCRIPTION */}

          <div className="form-group full-width">

            <label>
              Describe the Accident
            </label>

            <textarea
              name="description"
              rows="5"
              placeholder="Briefly describe what happened and where the vehicle was damaged..."
              value={formData.description}
              onChange={handleChange}
            />

          </div>



          {/* ERROR */}

          {error && (

            <div className="form-error">

              {error}

            </div>

          )}



          {/* FOOTER */}

          <div className="form-footer">

            <span>
              Step 2 of 3
            </span>

            <button
              type="submit"
              className="primary-btn"
            >

              Continue

              <span>
                →
              </span>

            </button>

          </div>

        </form>

      </main>

    </div>

  );

}

export default AccidentDetails;