import Diploma from "./imageFiles/diploma.png";
import Assessment from "./imageFiles/assessment.png";
import ACLogo from "./imageFiles/ac-main-logo.png";
import "./App.css";

/**
 * TODO: swap for per-workflow codes once they exist in Firestore, so the choice
 * on this page is actually recorded. Both cards currently share one code, which
 * means we can't tell the two audiences apart in Airtable.
 */
const SIGN_UP_URL = "https://editor.trykiroku.com/sign-up?code=SAFE2024";

const WORKFLOWS = [
  {
    id: "diploma",
    image: Diploma,
    eligibility: "SAFE Diploma students",
    title: "SAFE Diploma Assessment Form",
    body: "A comprehensive assessment for patients being considered for orthodontic treatment across a range of complexities. Available to previous and current SAFE diploma students.",
    cta: "Get the Diploma form",
    primary: true,
  },
  {
    id: "go",
    image: Assessment,
    eligibility: (
      <>
        Invisalign<span className="sup-small">®</span> Go delegates
      </>
    ),
    title: (
      <>
        Invisalign<span className="sup">®</span> Go SAFE Assessment Form
      </>
    ),
    body: (
      <>
        Guides you through assessing a patient when considering orthodontic
        treatment. Available to previous delegates of the Aligner Consulting
        Invisalign<span className="sup-small">®</span> Go courses.
      </>
    ),
    cta: "Get the Go form",
    primary: false,
  },
];

const STEPS = [
  {
    n: "1",
    title: "Pick your workflow",
    body: "Choose the form that matches the course you completed.",
  },
  {
    n: "2",
    title: "Create your account",
    body: "Your delegate code is applied as you sign up. Nothing to type in.",
  },
  {
    n: "3",
    title: "Keep the template",
    body: "It sits in your template library and stays free, on any plan.",
  },
];

export default function App() {
  return (
    <>
      <header className="nav">
        <img className="nav-logo" src={ACLogo} alt="Aligner Consulting" />
        <p className="nav-powered">
          Powered by <span className="kiroku-logo">Kiroku</span>
        </p>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">For Aligner Consulting delegates</p>
          <h1>Your SAFE assessment, built into your notes.</h1>
          <p className="hero-sub">
            Set up Kiroku with your delegate code and the SAFE assessment
            template is yours to keep, free for as long as you use it.
          </p>
          <a className="button button-primary hero-cta" href="#workflows">
            See the forms
          </a>
        </section>

        <section className="workflows" id="workflows">
          <h2>Choose your workflow.</h2>
          <p className="section-sub">
            Completed the 12-month SAFE Clear Aligner Therapy Diploma? Take the
            Diploma form. Trained with Aligner Consulting on Invisalign
            <span className="sup-small">®</span> Go? Take the Go form.
          </p>

          <div className="card-grid">
            {WORKFLOWS.map(
              ({ id, image, eligibility, title, body, cta, primary }) => (
                <article
                  className={`card${primary ? " card-featured" : ""}`}
                  key={id}
                >
                  <div className="card-media">
                    <img src={image} alt="" />
                  </div>
                  <div className="card-body">
                    <p className="card-eligibility">{eligibility}</p>
                    <h3>{title}</h3>
                    <p className="card-text">{body}</p>
                  </div>
                  <a
                    className={`button ${primary ? "button-primary" : "button-secondary"}`}
                    href={SIGN_UP_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {cta}
                  </a>
                </article>
              ),
            )}
          </div>
        </section>

        <section className="steps">
          <h2>How it works</h2>
          <ol className="step-grid">
            {STEPS.map(({ n, title, body }) => (
              <li className="step" key={n}>
                <span className="step-number">{n}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer className="footer">
        <p>
          Aligner Consulting · Powered by{" "}
          <a href="https://www.trykiroku.com" target="_blank" rel="noreferrer">
            Kiroku
          </a>
        </p>
      </footer>
    </>
  );
}
