"use client";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

const Loading = () => {
  return (
    <ClipLoader
      color="#3b82f6"
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
    />
  );
};

export default Loading;
