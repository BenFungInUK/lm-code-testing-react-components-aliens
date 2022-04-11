import { useState, useCallback } from "react";
import SpeciesName from "./SpeciesName";
import PlanetName from "./PlanetName";
import NumberOfBeings from "./NumberOfBeings";
import MathQuestion from "./MathQuestion";
import ReasonOfSparing from "./ReasonOfSparing";

interface Props {
  onSubmit: (formData: string) => void;
}

const W12MFormContent = ({ onSubmit }: Props) => {
  const [speciesName, setSpeciesName] = useState("");
  const [planetName, setPlanetName] = useState("");
  const [numOfBeings, setNumberOfBeings] = useState("");
  const [mathQuestion, setMathQuestion] = useState("4");
  const [reasonOfSparing, setReasonOfSparing] = useState("");

  const returnFormData = useCallback(
    (formData: string) => {
      onSubmit(formData);
    },
    [onSubmit]
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        returnFormData(
          `SpeciesName: ${speciesName} PlanetName: ${planetName} NumberOfBeings: ${numOfBeings} Math: ${mathQuestion} ReasonOfSparing: ${reasonOfSparing}`
        );
      }}
    >
      <SpeciesName onChangeTextinput={setSpeciesName} />
      <PlanetName onChangeTextinput={setPlanetName} />
      <NumberOfBeings onChangeTextinput={setNumberOfBeings} />
      <MathQuestion onChangeSelection={setMathQuestion} />
      <ReasonOfSparing onChangeTextarea={setReasonOfSparing} />
      <input type="submit" value="Submit form" />
    </form>
  );
};

export default W12MFormContent;
