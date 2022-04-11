interface Props {
  onChangeTextinput: (text: string) => void;
}

const SpeciesName = ({ onChangeTextinput }: Props) => {
  return (
    <div>
      <label htmlFor="speciesInput">Species Name: </label>
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
      />
    </div>
  );

  function validateAndSetText(input: HTMLInputElement) {
    input.setCustomValidity("");
    onChangeTextinput(input.value);
  }
};

export default SpeciesName;