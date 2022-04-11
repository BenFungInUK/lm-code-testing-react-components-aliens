import "./W12MFormContent.css";

interface Props {
  onChangeTextinput: (text: string) => void;
}

const SpeciesName = ({ onChangeTextinput }: Props) => {
  return (
    <div className="form__div">
      <label htmlFor="speciesInput" className="form__label">
        Species Name:{" "}
      </label>
      <input
        id="speciesInput"
        title="Enter your species name with 3 and 23 characters"
        type="text"
        required
        onInvalid={(e) =>
          (e.target as HTMLInputElement).setCustomValidity(
            "Must be between 3 and 23 characters. No numbers or special characters allowed!"
          )
        }
        onChange={(e) => validateAndSetText(e.target as HTMLInputElement)}
        pattern="[A-Za-z]{3,23}"
        className="form__input"
      />
    </div>
  );

  function validateAndSetText(input: HTMLInputElement) {
    input.setCustomValidity("");
    onChangeTextinput(input.value);
  }
};

export default SpeciesName;
