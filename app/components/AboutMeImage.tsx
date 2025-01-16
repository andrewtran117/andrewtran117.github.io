"use client";

const AboutMeGallery = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        src="/BeachLessSky.png"
        alt="About Me"
        style={{
          borderRadius: "15px",
          width: "100%",
          height: "auto",  // keeps aspect ratio
        }}
      />
    </div>
  );
};

export default AboutMeGallery;
