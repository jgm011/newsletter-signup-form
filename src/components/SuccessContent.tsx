import SuccessImage from "./images/SuccessImage";

function SuccessContent(props: {
  email: string;
  setSuccess: (arg0: boolean) => void;
  setEmail: (arg0: string) => void;
}) {
  return (
    <main className="main">
      <SuccessImage />
      <h1 className="main__title">Thanks for subscribing!</h1>
      <p className="main__intro">
        A confirmation email has been sent to{" "}
        <span className="main__intro__email">{props.email.toLowerCase()}</span>. Please open
        it and click the button inside to confirm your subscription.
      </p>
      <button
        className="main__button"
        onClick={() => {
          props.setSuccess(false);
          props.setEmail("");
        }}
      >
        Dismiss message
      </button>
    </main>
  );
}

export default SuccessContent;
