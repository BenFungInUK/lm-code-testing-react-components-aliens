import W12MHeader from "./W12MHeader";
import W12MFormContent from "./W12MFormContent";

const W12MForm = () => {
  return (
    <section className="w12MForm">
      <W12MHeader />
      <W12MFormContent onSubmit={submitForm} />
    </section>
  );

  function submitForm(data: string) {
    const formData = document.createElement("div");
    formData.textContent = data;
    document.querySelector(".w12MForm")?.appendChild(formData);
  }
};

export default W12MForm;
