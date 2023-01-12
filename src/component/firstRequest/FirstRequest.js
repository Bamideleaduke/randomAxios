import React, { useEffect,useState } from "react";
import axios from "axios";

const url = "https://course-api.com/react-store-products";

const FirstRequest = () => {
    const [request, setRequest] = useState("hi")
  const fetchData = async () => {
    try {
      const response = await axios(url);
      const data = response.data;
      setRequest(data.name)
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Hello: {request}</h2>
    </div>
  );
};

export default FirstRequest;
