interface Props {
  onChangeTextarea: (reason: string) => void;
}

const ReasonOfSparing = ({ onChangeTextarea }: Props) => {
  return (
    <div>
      <label htmlFor="reasonInput">Reason of sparing: </label>
      <textarea
        id="reasonInput"
        title="Enter the reason of sparing with 17 and 153 characters"
        required
        onChange={(e) => validateAndSetText(e.target as HTMLTextAreaElement)}
        onInvalid={(e) =>
          (e.target as HTMLTextAreaElement).setCustomValidity(
            "Must be between 17 and 153 characters."
          )
        }
      />
    </div>
  );

  function validateAndSetText(input: HTMLTextAreaElement) {
    const regex = /^.{17,153}$/g;
    const found = input.value.match(regex);
    if (!found)
      input.setCustomValidity("Must be between 17 and 153 characters.");
    else input.setCustomValidity("");
    onChangeTextarea(input.value);
  }
};

export default ReasonOfSparing;
