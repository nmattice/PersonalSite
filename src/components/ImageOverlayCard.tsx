// Define the props interface for type safety
type ImageOverlayCardProps = {
    imageUrl: string;
    imageAlt: string;
    title?: string;
    description?: string;
    aspectRatio?: 'video' | 'square' | 'auto';
    className?: string;
    onClick?: () => void;
    objectPosition?: 'center' | 'top' | 'bottom' | 'left' | 'right';
  };
  
  const ImageOverlayCard = ({
    imageUrl,
    imageAlt,
    title,
    description,
    aspectRatio = 'video',
    className = '',
    onClick,
    objectPosition = 'center',
  }: ImageOverlayCardProps) => {
  
    // Mapping aspect ratio prop to Tailwind classes
    const aspectClass = {
      video: 'aspect-video', // 16/9
      square: 'aspect-square', // 1/1
      auto: '', // Rely on natural image height or parent height
    }[aspectRatio];

    const positionClass = {
      center: 'object-center',
      top: 'object-top',
      bottom: 'object-bottom', 
      left: 'object-left',
      right: 'object-right',
    }[objectPosition];
  
    return (
      // 1. THE CONTAINER
      // 'group': allows child elements to change based on hovering this parent container.
      // 'relative': establishes the positioning context for children.
      // 'overflow-hidden': ensures the image doesn't spill out when zoomed on hover.
      <div className="flex w-full p-4 bg-dark-muted justify-center items-center">
          <div 
            className={`flex group align-center justify-center relative overflow-hidden rounded-2xl w-1/2 m-6 bg-dark-muted shadow-lg ${aspectClass} ${className} ${onClick ? 'cursor-pointer' : ''}`}
            onClick={onClick}
          >
      
            {/* 2. THE IMAGE LAYER */}
            {/* 'absolute inset-0': fills the entire container space. */}
            {/* 'object-cover': ensures image fills space without distortion (like background-size: cover). */}
            {/* 'transition-transform...': adds a subtle zoom effect on hover. */}
            <img
              src={imageUrl}
              alt={imageAlt}
              className={`absolute inset-0 h-full w-full object-cover opacity-95 transition-transform duration-700 will-change-transform group-hover:scale-105 ${positionClass}`}
            />
      
            {/* 3. THE OVERLAY LAYER */}
            {/* This sits on top of the image. */}
            {/* 'bg-black/50': 50% opacity black background for text contrast. */}
            {/* 'flex...': centers the text content horizontally and vertically. */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-6 text-center transition-all duration-300 group-hover:bg-black/60">
      
              {/* Conditional rendering: Only show if prop exists */}
              {title && (
                <h3 className="mb-2 text-2xl font-bold text-white tracking-tight drop-shadow-sm">
                  {title}
                </h3>
              )}
      
              {description && (
                <p className="max-w-md text-sm font-medium text-gray-100/90 drop-shadow-sm">
                  {description}
                </p>
              )}
      
            </div>
          </div>

      </div>

    );
  };
  
  export default ImageOverlayCard;