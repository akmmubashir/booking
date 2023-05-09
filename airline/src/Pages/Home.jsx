import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [airlineData, setairlineData] = useState([]);


    useEffect(() => {
      axios
        .get(
          `https://digiblockairline.onrender.com/project/view`
        )
        .then((res) => {
          setairlineData(res.data);
          console.log(res.data);
        });
    }, []);

  return (
    <div className="">
      <h1>Home</h1>
    </div>
  );
}

export default Home;
