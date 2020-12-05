import { useRef, useState } from "react";
import { StyledNewsletterForm } from "../../styled/components/NewsletterForm";

export interface NewsLetterFormProps {}

const NewsletterForm: React.FC<NewsLetterFormProps> = () => {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();

    if (!/\S+@\S+\.\S+/.test(inputEl.current.value)) {
      setMessage(
        "Netinkamas elektroninis pašto adresas! 😥 Patikrink, ar nepadarei klaidų."
      );
      return;
    }

    // 3. Send a request to our API with the user's email address.
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
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
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
