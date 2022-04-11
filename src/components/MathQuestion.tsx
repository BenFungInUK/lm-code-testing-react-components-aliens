import "./W12MFormContent.css";

interface Props {
  onChangeSelection: (selection: string) => void;
}

const MathQuestion = ({ onChangeSelection }: Props) => {
  return (
    <div className="form__div">
      <label htmlFor="mathAns" className="form__label">
        What is 2+2?
      </label>
      <select
        id="mathAns"
        required
        defaultValue=""
        onChange={(e) => validateAndSelect(e.target as HTMLSelectElement)}
        className="form__input"
      >
        <option value="" disabled hidden>
          Choose here
        </option>
        <option value="4">4</option>
        <option value="Not 4">Not 4</option>
      </select>
    </div>
  );

  function validateAndSelect(input: HTMLSelectElement) {
    if (input.value === "Not 4")
      input.setCustomValidity("Incorrect answer! Please try again!");
    else input.setCustomValidity("");
    onChangeSelection(input.value);
  }
};

export default MathQuestion;
