export default function ImageShow({ image }) {
  return (
    <div>
      <img src={image.urls.small} alt="cars" />
    </div>
  );
}
