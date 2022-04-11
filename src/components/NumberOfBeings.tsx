interface Props {
  onChangeTextinput: (text: string) => void;
}

const NumberOfBeings = ({ onChangeTextinput }: Props) => {
  return (
    <div>
      <label htmlFor="numInput">Number of beings: </label>
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
      />
    </div>
  );

  function validateAndSetText(input: HTMLInputElement) {
    // const regex = /^[1-9][0-9]{9,}$/g;
    // const found = input.value.match(regex);
    // if (!found)
    //   input.setCustomValidity("Numbers ONLY. Must be at least 1,000,000,000.");
    // else
    input.setCustomValidity("");
    onChangeTextinput(input.value);
  }
};

export default NumberOfBeings;
