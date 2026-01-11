type ImageContainerProps = {
    src: string;
    alt: string;
    ratio?: 'square' | 'video' | 'portrait';
    clickable?: boolean;
}

const ImageContainer = ({
    src,
    alt,
    ratio = 'square',
    clickable = false,
}: ImageContainerProps) => {
    const ratioClasses = {
        square: 'aspect-square',
        video: 'aspect-video',
        portrait: 'aspect-[3/4]',
    };

    return (
        <div className={`overflow-hidden max-w-80 lg:max-w-100 rounded-2xl ${ratioClasses[ratio]}`}>
            <img 
                src={src}
                alt={alt}
                className={`object-cover w-full h-full ${clickable ? 'cursor-pointer transition-transform hover:scale-105' : ''}`}/>
        </div>
    );
};

export default ImageContainer;