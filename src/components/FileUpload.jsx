import React from "react";
import "./FileUpload.scss";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import LinearWithValueLabel from "./Loader";
import "../index.css";

const FileUpload = () => {
  return (
    <div className="container">
      <Container className="blurred-box" maxWidth="lg" sx={{ width: "900px" }}>
        <h2>File Upload</h2>
        {/* <div> */}
        <Button className="btn" variant="contained">
          Upload Video
        </Button>
        <LinearWithValueLabel />
        {/* </div> */}
      </Container>
    </div>
  );
};

export default FileUpload;
