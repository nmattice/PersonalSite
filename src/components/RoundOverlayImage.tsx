interface RoundOverlayImageProps {
  imageUrl: string;
  imageAlt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const RoundOverlayImage = ({
  imageUrl,
  imageAlt,
  size = 'md',
  className = '',
}: RoundOverlayImageProps) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16', 
    lg: 'w-24 h-24',
  }[size];

  return (
    <div className={`z-10 ${sizeClasses} ${className}`}>
      <img
        src={imageUrl}
        alt={imageAlt}
        className="w-full h-full rounded-full object-cover border-1 border-fall-green shadow-lg"
      />
    </div>
  );
};

export default RoundOverlayImage;