import Header from "../components/Header";
import journeyImg from '../assets/journey.jpeg';
import Skills, { type Skill } from "../components/Skills";

const skills: Skill[] = [
    {
        name: 'YouTube',
        logoSrc: 'https://cdn.simpleicons.org/youtube',
    },
    {
        name: 'Udemy',
        logoSrc: 'https://cdn.simpleicons.org/udemy',
    },
    {
        name: 'freeCodeCamp',
        logoSrc: 'https://cdn.simpleicons.org/freecodecamp/white',
        logoColor: '#0A0A23',
    },
    {
        name: 'Fellow Engineers',
        logoSrc: '/src/assets/engineer.png',
    },
    {
        name: 'Source Documentation',
        logoSrc: '/src/assets/document.png',
    },
    {
        name: 'Books',
        logoSrc: '/src/assets/books.png',
    },
    {
        name: 'Google Gemini',
        logoSrc: 'https://cdn.simpleicons.org/googlegemini',
    }
]

// I'm a philomath at heart - i've always been curious and voracious learner. in college i graduated with degrees in mathematics and economics but also simultaneously took computer science courses, a multitude of graduate-level finance courses, and every pre-med course available.
// i've always been curious about software engineering and had dabbled in it in the past but it was in 2020 during covid i found my opportunity to dive in deep and took full advantage of the times to begin learning software engineering beginning with havard's cs50 intro to computer science course and the 100 days of python course on udemy.
// this helped lay the foundations of basic concepts and understanding how to write and organize code
// then i worked with a frontend team that allowed me to begin working on basic tickets writing html, sass and javascript progressively helping solve larger problems
// this was the spark i needed and i literally spent every day and weekend working on problems and learning not only the how but more importantly the WHY behind how i could solve and organize my code. i spent ~1.5 years falling asleep to videos on javascript/java/react concepts and techniques and working on implementing them the next day
// by 2022 i was already helping fellow engineers solve various problems and sharing my knowledge. then i finally officially transitioned to a full-time software engineer.
// i'm an extremely quick learner but my true strength comes from my constant pursuit of understanding the WHY behind solutions so I can better apply what I learn to any problem
// my arsenal: youtube, library books, language/framework source documentation, udemy courses, google, and most recently AI such as Google Gemini

const MyStory = () => {
    return (
        <>
            <Header
                title="My Journey to "
                gradientText="Senior Software Engineer"
                description="From curious beginner to full-time software engineer - a journey of self-learning and determination. How I leveraged an arsenal of resources and translated a passion into a career."
                imageUrl={journeyImg}
                imageAlt="My Journey"
            />
            <div>
                <h3>The Arsenal</h3>
            </div>
            <Skills skills={skills}/>
            <div className="max-w-4xl mx-auto space-y-8 text-left mt-8">
                <section>
                    <h3 className="text-2xl font-bold mb-4">2020: The Beginning</h3>
                    <p className="text-fall-grey leading-relaxed">
                        I've always been interested in software engineering but it was during covid that I started to fully commit to transform an interest into a career. 
                        I started with Havard's CS50 Computer Science course and Angela Yu's 100 Days of Python course on Udemy, practicing every day and learning the fundamentals of programming and computer science.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-bold mb-4">2021: Building Foundations</h3>
                    <p className="text-fall-grey leading-relaxed">
                        By 2021, I expanded my skills into web development, learning HTML, CSS, JavaScript and Java.
                        While working as a Product Manager I was given an opportunity to simultaneously help a frontend team on an enterprise app starting with simple tickets
                        and slowly expanding my knowledge and scope. I would often work late into the evening and weekends to have the time
                        to accomplish both jobs, and senior engineers would help provide feedback so I could hone my skills.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-bold mb-4">2022: Going Full-Time</h3>
                    <p className="text-fall-grey leading-relaxed">
                        By 2022, I had built a reputation as a quick learner and  on the teaminto a full-time software engineering role. 
                        This marked a pivotal moment in my career - turning my self-taught skills into a professional craft. 
                        Since then, I've continued to grow, learn new technologies, and contribute to meaningful projects.
                    </p>
                </section>
            </div>
        </>
    );
}

export default MyStory;
