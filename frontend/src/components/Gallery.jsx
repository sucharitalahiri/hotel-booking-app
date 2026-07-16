function Gallery({ images }) {
  if (!images || images.length === 0) return null;

  return (
    <div
      id="gallery"
      style={{
        padding: "50px",
      }}
    >
      <h2>Photo Gallery</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Hotel"
            style={{
              width: "350px",
              height: "220px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;