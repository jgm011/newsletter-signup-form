import { useState } from "react";

function Form(props: {
  email: string;
  setSuccess: (arg0: boolean) => void;
  setEmail: (arg0: string) => void;
}) {
  const [isWrong, setIsWrong] = useState<boolean>(false);

  const at = props.email.indexOf("@");
  const colon = props.email.lastIndexOf(".");

  const emailBasicConditionals =
    at >= 3 &&
    colon >= 7 &&
    at !== 0 &&
    at !== -1 &&
    colon !== 1 &&
    colon !== -1 &&
    at < colon &&
    at !== colon - 1 &&
    props.email.length > 0 &&
    props.email[colon + 1] &&
    props.email[colon + 2] &&
    colon !== props.email.length - 1;

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    if (emailBasicConditionals) {
      props.setSuccess(true);
    } else {
      setIsWrong(true);
    }
  }

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    props.setEmail(event.target.value);
    setIsWrong(false);
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="form__text-box">
        <label htmlFor="email" className="form__text-box__label">
          Email address
        </label>
        {isWrong && (
          <div className="form__text-box__error-text">Valid email required</div>
        )}
      </div>
      <input
        type="text"
        name="email"
        id="email"
        className={`form__input ${isWrong && "form__input--error"}`}
        placeholder="email@company.com"
        onChange={changeHandler}
      />
      <button type="submit" className="form__button">
        Subscribe to monthly newsletter
      </button>
    </form>
  );
}

export default Form;
