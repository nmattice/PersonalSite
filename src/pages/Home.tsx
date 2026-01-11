import ImageOverlayCard from "../components/ImageOverlayCard";
import journeyImg from '../assets/journey.jpeg';
import fallImg from '../assets/fall.jpeg';
import Header from "../components/Header";
import Skills, { type Skill } from "../components/Skills";

const skills: Skill[] = [
    {
        name: 'React',
        logoSrc: '/src/assets/react.svg',
        logoColor: '#61DAFB',
    },
    {
        name: 'JavaScript',
        logoSrc: 'https://cdn.simpleicons.org/javascript',
        logoColor: '#F7DF1E',
    },
    {
        name: 'TypeScript',
        logoSrc: 'https://cdn.simpleicons.org/typescript',
        logoColor: '#3178C6',
    },
    {
        name: 'Node.js',
        logoSrc: 'https://cdn.simpleicons.org/nodedotjs',
        logoColor: '#5FA04E',
    },
    {
        name: 'Spring Boot',
        logoSrc: 'https://cdn.simpleicons.org/springboot',
        logoColor: '##6DB33F',
    },
    {
        name: 'Tailwind CSS',
        logoSrc: 'https://cdn.simpleicons.org/tailwindcss',
        logoColor: '#06B6D4',
    },
    {
        name: 'Sass',
        logoSrc: 'https://cdn.simpleicons.org/sass',
        logoColor: '#CC6699',
    },
    {
        name: 'Adobe Experience Manager',
        logoSrc: '/src/assets/aem.svg',
    }
]

const Home = () => {
    return (
        <>
            <Header
                title="Hello, my name is "
                gradientText="Nathan Mattice"
                description="A Senior Software Engineer with a unique background - 10 years of experience spanning operations, product management and software engineering. Explore my journey."
                imageUrl={fallImg}
                imageAlt="Nathan"
            />
            <div>
                <h3>Skills</h3>
            </div>
            <Skills skills={skills}/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 place-items-center">
                <ImageOverlayCard
                    imageUrl={journeyImg}
                    imageAlt="My Story"
                    title="My Story"
                />
            </div>
        </>
    );
}

export default Home;