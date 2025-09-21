import { Briefcase, Code, User } from 'lucide-react'

const AboutSection = () => {
    return (
        <section id="about" className=" px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Front-end & Back-end developer</h3>
                        <p className="text-muted-foreground">
                            I’ve learned programming through self-study and by building personal projects in React and Node.js.
                        </p>
                        <p className="text-muted-foreground">
                            My main focus is on JavaScript, and I’m always learning new things to sharpen my skills and bring creative ideas to life.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 pt-4 justify-center items-center">
                            <a href="#contact" className="cosmic-button ">
                                Get in touch
                            </a>

                            <a
                                href="/profile/cv.pdf"
                                download="Ali_Niakan_CV.pdf"
                                className="px-8 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download CV
                            </a>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover max-w-sm">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Most of my projects are focused on creating clean designs and smooth user experiences.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover max-w-sm">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground">
                                        I always try to balance functionality with aesthetic design
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover max-w-sm">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Experience</h4>
                                    <p className="text-muted-foreground">
                                        Through several personal projects, I gained hands-on full-stack experience with React and...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
