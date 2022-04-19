import "./W12MFormContent.css";

interface Props {
  onChangeTextinput: (text: string) => void;
}

const NumberOfBeings = ({ onChangeTextinput }: Props) => {
  return (
    <div className="form__div">
      <label htmlFor="numInput" className="form__label">
        Number of beings:{" "}
      </label>
      <input
        id="numInput"
        title="Enter a number > 1,000,000,000"
        type="text"
        required
        onInvalid={(e) =>
          (e.target as HTMLInputElement).setCustomValidity(
            "Numbers ONLY. Must be at least 1,000,000,000."
          )
        }
        onChange={(e) => validateAndSetText(e.target as HTMLInputElement)}
        pattern="[1-9][0-9]{9,}"
        className="form__input"
      />
    </div>
  );

  function validateAndSetText(input: HTMLInputElement) {
    if (input.validity.patternMismatch) {
      input.setCustomValidity("Numbers ONLY. Must be at least 1,000,000,000.");
    }
    setTimeout(function () {
      input.reportValidity();
      input.setCustomValidity("");
    }, 1);
    onChangeTextinput(input.value);
  }
};

export default NumberOfBeings;
