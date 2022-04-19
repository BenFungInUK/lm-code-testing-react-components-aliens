import "./W12MFormContent.css";

interface Props {
  onChangeTextinput: (text: string) => void;
}

const PlanetName = ({ onChangeTextinput }: Props) => {
  return (
    <div className="form__div">
      <label htmlFor="planetInput" className="form__label">
        Planet Name:{" "}
      </label>
      <input
        id="planetInput"
        title="Enter your planet name with 2 and 49 characters/numbers, no special characters is allowed"
        type="text"
        required
        onInvalid={(e) =>
          (e.target as HTMLInputElement).setCustomValidity(
            "Must be between 2 and 49 characters. Numbers are allowed, but no special characters."
          )
        }
        onChange={(e) => validateAndSetText(e.target as HTMLInputElement)}
        pattern="[A-Za-z0-9]{2,49}"
        className="form__input"
      />
    </div>
  );

  function validateAndSetText(input: HTMLInputElement) {
    if (input.validity.patternMismatch) {
      input.setCustomValidity(
        "Must be between 2 and 49 characters. Numbers are allowed, but no special characters."
      );
    }
    setTimeout(function () {
      input.reportValidity();
      input.setCustomValidity("");
    }, 1);
    onChangeTextinput(input.value);
  }
};

export default PlanetName;
