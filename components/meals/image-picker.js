"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    // We gen the image through the event object
    const file = event.target.files[0]; // The first file the user picked

    if (!file) {
      setPickedImage(null); // No image picked - reset the preview
    }

    const fileReader = new FileReader(); // For data URL (source of the image) FileReader is a JS class
    fileReader.onload = () => {
      // When the file is loaded, this function will be triggered by the readAsDataURL method
      setPickedImage(fileReader.result); // The result is the data URL
    };

    fileReader.readAsDataURL(file); // Convert the file to a data URL
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input} // Hides the input element
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
        ></input>

        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an image
        </button>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="the image selected by the user"
              fill
            />
          )}
        </div>
      </div>
    </div>
  );
}
