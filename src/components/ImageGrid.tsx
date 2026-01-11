import ImageOverlayCard from './ImageOverlayCard';

type ImageGridItem = {
  imageUrl: string;
  imageAlt: string;
  title?: string;
  description?: string;
  onClick?: () => void;
};

type ImageGridProps = {
  images: ImageGridItem[];
};

const ImageGrid = ({ images }: ImageGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <ImageOverlayCard
          key={index}
          {...image}
          aspectRatio="square"
          className="m-0"
        />
      ))}
    </div>
  );
};

export default ImageGrid;