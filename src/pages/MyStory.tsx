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

// 2020 - Learning the Fundamentals
// During covid I decided to fully commit and began with 100 Days of Python and Harvard's CS50 Computer Science course building my foundation.
// I began with the basics learning how to write a function, how and when to utilize classes and structure code.
// Once I had a basic understanding I decided to start learning frontend development with Javascript, HTML, CSS as that's what one of the team's I worked with closely used.
// They let me start taking very basic tickets

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
                    <h3 className="text-2xl font-bold mb-4">2020: Learning the Fundamentals</h3>
                    <p className="text-fall-grey leading-relaxed">
                        I've always been interested in software engineering but it was during covid that I started to fully commit and transform an interest into a career. 
                        I started with Havard's CS50 Computer Science course and Angela Yu's 100 Days of Python course on Udemy, practicing every day and learning the fundamentals of programming and computer science.
                        I learned how to write functions, utilize classes, and structure code to build basic applications.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-bold mb-4">2021: Building the Foundation</h3>
                    <p className="text-fall-grey leading-relaxed">
                        By 2021, I expanded my skills into web development, beginning with HTML, CSS, and JavaScript.
                        I started with freeCodeCamp and The Odin Project, then eventually a frontend team I worked with let me begin slowly working on frontend tickets.
                        I worked on code every single day, and this is where I truly began to understand how to apply what I had learned.
                        I continually sought to understand not only the how but more importantly the WHY behind solutions and what other approaches I could take.
                        This is when I began to learn about mobile-first design, responsive layouts, SOLID principles, DOM reflow etc.
                    <br></br>
                    <br></br>
                        Toward the latter half of 2021, I also began assisting with deployments and troubleshooting various issues slowly transforming from intrigued observer to active participant.
                        This is where I began to understand networking concepts, our infrastrucure, API's, CI/CD pipelines, and how everything fit together.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-bold mb-4">2022-2023: Going Full-Time</h3>
                    <p className="text-fall-grey leading-relaxed">
                        By 2022, I had built a reputation as a quick learner willing to take on anything.
                        I was splitting my time between my Product Manager role and assisting the frontend team with more complex tickets and troubleshooting, even providing feedback to fellow engineers.
                        Eventually, my dedication paid off when I was offered a Software Engineer role on the team.
                        <br></br>
                        <br></br>
                        At this point, I also became intrigued by OOP and strongly-typed languages so I began to learn Java as well.
                        I was learning at a rapid pace, often staying up late into the evenings and weekends reading Baeldung and other various resources then implementing the concepts I learned.
                        I would literally fall asleep to videos about various subjects - from Java or JavaScript concepts to software architecture and design - almost every single day for the next 1.5 years.
                        <br></br>
                        <br></br>
                        In 2023 I continued to grow, taking on more complex projects and responsibilities.
                        I was the most junior engineer by tenure but I quickly became one of the top contributors on the team even reviewing and approving code and helping my teammates grow in the process.
                        I was passionate about writing clean, efficient code and constantly sought to improve my skills.
                        At this point we were migrating entire applications to AEM, so I was learning the full scope of standing up applications along with the security and networking considerations involved all the while hone my skills learning how to build extensible, performant codebases.
                    </p>
                </section>
                <section>
                    <h3 className="text-2xl font-bold mb-4">2024-2025: Becoming a Leader</h3>
                    <p className="text-fall-grey leading-relaxed">
                        At this point I had built a strong understanding of how to troubleshoot, approach problems, and create performant solutions.
                        There was a project to build an authenticated account management application in React and Spring Boot, and the tech lead for the project was leaving the company.
                        I didn't have a lot of experience in React/Spring Boot at this point, but I was hungry to learn and was selected the lead the project - this was my chance to prove myself.
                        I spent every day for the next 2-3 months constantly learning about how Spring Boot handles dependency injection and IOC, React's Virtual DOM, the reconciliation process, memoization etc.
                        I successfully set it all up end-to-end and delivered the application leading a team of 7 engineers and was promoted to Senior Software Engineer in the process.
                    </p>
                </section>
                <section>
                    <h3 className="text-2xl font-bold mb-4">2026 and Beyond: Continual Growth</h3>
                    <p className="text-fall-grey leading-relaxed">
                        I still remember when I first began learning and how daunting it all felt when I was just trying to recall how to write a function or understand how object references worked.
                        I'm very proud of the progress I've made as a self-taught software engineer, and I'm so excited for the journey still to come.
                        <br></br>
                        <br></br>
                        I'm a passionate learner and can't express how much I love software engineering. There will always be more to learn, but that's precisely what excites me.
                    </p>
                </section>
            </div>
        </>
    );
}

export default MyStory;
