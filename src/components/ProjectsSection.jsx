import { ArrowRight, Github } from 'lucide-react'
import ShoeShopImage from "../../public/projects/shoeshop.webp";
import QuizMakerImage from "../../public/projects/quizmaker.webp";
import LyricFinderImage from "../../public/projects/lyricfinder.webp";


const projects = [
  {
    id: 1,
    title: "Shoe Shop",
    description: "This project is a website for buying shoes, It allows users to view some information about shoes, and add them to their shopping list.",
    image: ShoeShopImage,
    tags: ['HTML/CSS', 'JavaScript', 'React', 'TypeScript'],
    githubUrl: "https://github.com/AliNiakan/shoe-shop"
  },
  {
    id: 2,
    title: "Quiz Maker",
    description: "A movie search app to share your favorite movies with your friend, built with React.",
    image: QuizMakerImage,
    tags: ['HTML/CSS', 'JavaScript', 'React', 'Bootstrap'],
    githubUrl: "https://github.com/AliNiakan/quiz-maker"
  }, {
    id: 3,
    title: "Lyric finder",
    description: "Search, view, and explore song lyrics. It fetches data from Genius and provides an AI-powered overview for each song. ",
    image: LyricFinderImage,
    tags: ['HTML/CSS', 'JavaScript', 'React', 'Vite', 'TailwindCSS'],
    githubUrl: "https://github.com/AliNiakan/lyric-finder"
  }
]

const ProjectsSection = () => {
  return (
    <section id="projects" className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Featured <span className='text-primary'> Porjects</span> </h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Here is some of my recent works. Want to see <span className='text-primary font-semibold'>more?</span>
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, key) => (
            <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>

              <div className='h-48 overflow-hidden'>
                <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transfrom duration-500 group-hover:scale-110 ' />
              </div>

              <div className='p-7'>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag) => (
                    <span
                      className='border px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground' key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
              <p className='text-muted-foreground text-sm mb-4 p-2'>{project.description}</p>
              <div className='flex justify-center items-center'>
                <div className='flex space-x-3 '>
                  <a
                    href={project.githubUrl}
                    target='_blank'
                    className='p-3 mb-2 border rounded-full text-foreground/80 hover:text-primary transition-colors duration-300'>
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>


        <div className='text-center mt-12'>
          <a href='https://github.com/AliNiakan' target='_blank' className='cosmic-button w-fit flex items-center mx-auto gap-2'>
            Check out my <Github size={16} /> <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection