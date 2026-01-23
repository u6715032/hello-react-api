import { useEffect, useState } from "react";

function TestApi() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:3000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error(err);
        setMessage("Error connecting to API");
      });
  }, []);

  return (
    <div>
      <h2>API Result</h2>
      <p>{message}</p>
    </div>
  );
}

export default TestApi;
