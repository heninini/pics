import ImageShow from "./ImageShow";
import "./ImageList.css";
export default function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow image={image} key={images.id} />;
  });

  return <div className="image-list">{renderedImages}</div>;
}
