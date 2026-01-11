import ImageContainer from "./ImageContainer";
import { GradientText } from "./GradientText";

type HeaderProps = {
    title: string;
    gradientText?: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
};

const Header = ({
        title,
        gradientText,
        description,
        imageUrl,
        imageAlt,
    }: HeaderProps) => {
    return (
        <div className="flex flex-col items-center lg:flex-row flex-max-w-6xl mx-auto mb-10 h-full xl:h-20%">
            <div className="flex flex-col px-5% w-full relative">
                <div className="relative z-10 flex lg:pl-12 mb-4 md:mb-6 justify-center lg:justify-start">
                    <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-fall-white drop-shadow-lg text-center lg:text-left">
                        {title}
                        {gradientText && (
                            <>
                                <br />
                                <GradientText className="text-3xl sm:text-4xl lg:text-5xl">{gradientText}</GradientText>
                            </>
                        )}
                    </h1>
                </div>
                <div className="relative z-10 flex justify-center mb-6 md:mb-10 lg:justify-start">
                    <p className="text-md sm:text-lg text-fall-grey drop-shadow-md">{description}</p>
                </div>
            </div>
            <div className="w-full mb-4 md:mb-10 flex justify-center">
                <ImageContainer 
                    src={imageUrl}
                    alt={imageAlt}
                    ratio='square'/>
                
            </div>
        </div>
    );
};

export default Header;
