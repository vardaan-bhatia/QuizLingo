import { useEffect } from "react";
import axios from "axios";

const LangApiComponent = () => {
  const langApi = async () => {
    const options = {
      method: "POST",
      url: "https://microsoft-translator-text.p.rapidapi.com/translate",
      params: {
        "to[0]": "am",
        "api-version": "3.0",
        profanityAction: "NoAction",
        textType: "plain",
      },
      headers: {
        "x-rapidapi-key": "2feae43139msh91d8e953f8663a7p1aa1bcjsne33d5897f08b",
        "x-rapidapi-host": "microsoft-translator-text.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: [
        {
          Text: "مرحبا",
        },
      ],
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    langApi();
  }, []);

  return <div>API Call Complete. Check console for results.</div>;
};

export default LangApiComponent;
