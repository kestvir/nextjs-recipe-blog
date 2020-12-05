import { useRef, useState } from "react";
import { StyledNewsletterForm } from "../../styled/components/NewsletterForm";

export interface NewsLetterFormProps {}

const NewsletterForm: React.FC<NewsLetterFormProps> = () => {
  const inputEl = useRef(null);
  const [message, setMessage] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();

    if (!/\S+@\S+\.\S+/.test(inputEl.current.value)) {
      setMessage(
        "Netinkamas elektroninis pašto adresas! 😥 Patikrink, ar nepadarei klaidų."
      );
      return;
    }

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      setMessage(error);

      return;
    }

    inputEl.current.value = "";
    setMessage("Pavyko! 🎉 Dabar Tu gausi pranešimus apie naujus receptus.");
  };

  return (
    <StyledNewsletterForm onSubmit={subscribe}>
      <div>
        {message
          ? message
          : `Įrašyk savo el. paštą, jei nori gauti pranešimus apie naujus receptus.`}
      </div>

      <input
        id="email-input"
        name="email"
        placeholder="you@awesome.com"
        ref={inputEl}
        type="email"
      />
      <button type="submit">{"✨ Prenumeruoti! 💌"}</button>
    </StyledNewsletterForm>
  );
};

export default NewsletterForm;
