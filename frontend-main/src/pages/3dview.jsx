import React, {
  useEffect,
  useState,
} from "react";
import { MainContainer } from "../wrapper";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

export default function ThreeDimView({
  link,
  setopen,
}) {
  const [modelSrc, setModelSrc] = useState("");

  useEffect(() => {
    const fetchModel = async () => {
      try {
        const response = await fetch(
          "https://glbfileconverter.onrender.com/api/v1/special/addspecial",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              link: link,
            }),
          }
        ); // Fetch GLB from your server
        if (response.ok) {
          const modelData =
            await response.arrayBuffer();
          console.log("M", modelData);
          setModelSrc(
            URL.createObjectURL(
              new Blob([modelData])
            )
          );
        } else {
          toast.error("Invalid Url!");
        }
      } catch (error) {
        toast.error("Something went wrong!");
      }
    };

    fetchModel();
  }, [link]);
  return (
    <MainContainer>
      <model-viewer
        style={{
          height: "50vh",
          width: "100vw",
          top: 70,
          left: 0,
          position: "fixed",
          backgroundColor: "#000",
        }}
        ar-modes="webxr scene-viewer"
        alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
        src={modelSrc}
        ar
        shadow-intensity="1"
        camera-controls
        touch-action="pan-y"
      >
        <div className="flex flex-wrap justify-evenly">
          <button
            onClick={() => setopen(false)}
            className="w-[200px] text-center text-white p-2 rounded-xl bg-orange-600"
          >
            Exit 3D
          </button>
        </div>
      </model-viewer>
    </MainContainer>
  );
}
ThreeDimView.propTypes = {
  link: PropTypes.string.isRequired,
  setopen: PropTypes.func.isRequired,
};
