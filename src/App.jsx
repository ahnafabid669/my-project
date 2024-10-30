import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Fetch from "./components/Fetch";

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("/public/data.json")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  return (
    <>
      <h1 className="font-extrabold text-3xl">Vite + React</h1>
      <div className="mt-10 w-11/12 mx-auto bg-green-200">
        <h2 className="p-3 mb-2">fetch images</h2>
        {photos.map((photo) => (
          <Fetch key={photo.id} photo={photo}></Fetch>
        ))}
      </div>
    </>
  );
}

export default App;
