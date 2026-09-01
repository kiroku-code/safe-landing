import DiplomaForm from "./imageFiles/diploma.png";
import ACLogo from "./imageFiles/ac-main-logo.png";
import "./App.css";

const SIGN_UP_URL = "https://editor.trykiroku.com/sign-up?code=SAFE";

/** The terms carried by the SAFE referral code itself. Keep in step with Firestore. */
const OFFER = [
  {
    id: "template",
    label: "Free for good",
    title: "The SAFE assessment form, yours to keep",
    body: "The Diploma version stays free on any plan, for as long as you use Kiroku. It doesn't expire with your trial.",
  },
  {
    id: "discount",
    label: "Delegate rate",
    title: "12 months at a reduced price",
    body: "10% off Kiroku Essential, or 30% off Kiroku Pro, for your first 12 months.",
  },
  {
    id: "trial",
    label: "Try it first",
    title: "14 days of everything else",
    body: "Full access while you decide. The assessment form stays free either way.",
  },
];

const INCLUDED = [
  "Structured for the full range of complexities, the way the diploma teaches it.",
  "Speak as you assess and Kiroku turns it into the written note.",
  "Generates the patient letter at the end, on Kiroku Pro.",
];

const STEPS = [
  {
    n: "1",
    title: "Start your account",
    body: "Use the button on this page. Your delegate code comes with the link, so there is nothing to type in.",
  },
  {
    n: "2",
    title: "Find it in your templates",
    body: "The SAFE assessment form is waiting in your template library.",
  },
  {
    n: "3",
    title: "Use it on your next patient",
    body: "Open it during the appointment and the note writes itself as you go.",
  },
];

function Tick() {
  return (
    <svg className="tick" viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M4 10.5l4 4 8-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SignUpButton({ children, variant = "primary" }) {
  return (
    <a
      className={"button button-" + variant}
      href={SIGN_UP_URL}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

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
          <h1>Your SAFE assessment form, free for good.</h1>
          <p className="hero-sub">
            Trained with Aligner Consulting, or took the SAFE Diploma? Your
            delegate code puts the SAFE assessment form into Kiroku and keeps it
            free, on any plan, for as long as you use it.
          </p>
          <div className="hero-actions">
            <SignUpButton>Claim your template</SignUpButton>
          </div>
        </section>

        <section className="offer">
          <h2>What your delegate code gets you</h2>
          <ul className="offer-grid">
            {OFFER.map(({ id, label, title, body }) => (
              <li className="offer-card" key={id}>
                <p className="offer-label">{label}</p>
                <h3>{title}</h3>
                <p className="offer-text">{body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="showcase">
          <div className="showcase-inner">
            <div className="showcase-copy">
              <p className="eyebrow">The template</p>
              <h2>SAFE Assessment Form</h2>
              <p className="showcase-variant">Diploma version</p>
              <p className="showcase-lede">
                A comprehensive assessment for patients being considered for
                orthodontic treatment across a range of complexities. Kiroku
                writes it up as you go, around 60% faster than notes by hand.
              </p>
              <ul className="tick-list">
                {INCLUDED.map((line) => (
                  <li key={line}>
                    <Tick />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="showcase-media">
              <img
                src={DiplomaForm}
                alt="The SAFE assessment form open in Kiroku"
              />
            </div>
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

        <section className="closer">
          <h2>Ready when you are.</h2>
          <p className="closer-sub">
            The assessment form is free for good. The delegate rate runs for your
            first 12 months.
          </p>
          <SignUpButton>Claim your template</SignUpButton>
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
