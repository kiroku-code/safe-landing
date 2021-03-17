import Diploma from "./imageFiles/diploma.png";
import Assessment from "./imageFiles/assessment.png";
import ACLogo from "./imageFiles/ac-main-logo.png";
import "./App.css";

function App() {
  return (
    <div>
      <div className="nav">
        <img src={ACLogo} alt="logo" />
      </div>
      <div className="main-title">
        <h1>
          <span>Choose your workflow.</span>
        </h1>
      </div>
      <div className="workflow-container">
        <div className="parent">
          <div className="column">
            <div className="image-wrapper">
              <img src={Assessment} alt="assessment" />
            </div>
            <div className="content-wrapper">
              <h3 className="item1">
                Invisalign<span className="sup">®</span> Go SAFE Assessment Form
              </h3>
            </div>
            <div className="text-wrapper">
              <p className="powered">
                Powered by <span className="kiroku-logo">Kiroku</span>
              </p>
            </div>
            <div className="text-wrapper">
              <p>
                This will guide you through the assessment of a patient, when
                considering orthodontic treatment. This is available to previous
                delegates of aligner consulting Invisalign
                <span className="sup-small">®</span> Go courses.
              </p>
            </div>
            <div className="button-container">
              <button>Select</button>
            </div>
          </div>
          <div className="column">
            <div className="image-wrapper">
              <img src={Diploma} alt="diploma" />
            </div>
            <div className="content-wrapper">
              <h3 className="item1">SAFE Diploma Assessment Form</h3>
            </div>
            <div className="text-wrapper">
              <p className="powered">
                Powered by <span className="kiroku-logo">Kiroku</span>
              </p>
            </div>
            <div className="text-wrapper">
              <p>
                This will guide you though a comprehensive assessment of a
                patient, when considering orthodontic treatment for a range of
                complexities. This is available to previous and current SAFE
                diploma students.
              </p>
            </div>
            <div className="button-container">
              <button>Select</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
