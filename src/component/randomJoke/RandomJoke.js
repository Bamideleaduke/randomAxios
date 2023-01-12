import axios from "axios";
import React, { useState } from "react";

const url = "https://icanhazdadjoke.com/";

const RandomJoke = () => {

    const [joke, setJoke] = useState("Random Joke")

  const fetchJoke = async () => {
    try {
      const { data } = await axios(url, {
        headers: { Accept: "application/json" },
      });
     setJoke(data.joke)
    } catch (error) {
      console.log(error.response);
    }
  };

//   useEffect(() => {
//     fetchJoke();
//   }, []);

  return <>
    <p>{joke}</p>
    <button onClick={()=> fetchJoke()}>click me</button>
  </>;
};

export default RandomJoke;
