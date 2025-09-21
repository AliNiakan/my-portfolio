import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'


const ContactSection = () => {

    return (
        <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
            <div className='container mx-auto max-w-5xl'>
                <h2
                    className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Contact <span className='text-primary'> me?</span>
                </h2>
                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me through any of the platforms below.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    <div className='space-y-8'>
                        <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>

                        <div className='space-y-6 justify-center'>
                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10 '>
                                    <Mail className='h-6 w-6 text-primary' />
                                </div>
                                <div className='flex flex-col items-start'>
                                    <h4 className='font-medium'>Email</h4>
                                    <a href='mailto:aliniakan.06@gmail.com' className='text-muted-foreground hover:text-primary transition-colors '>
                                        aliniakan.06@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='space-y-6 justify-center'>
                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10 '>
                                    <Phone className='h-6 w-6 text-primary' />
                                </div>
                                <div className='flex flex-col items-start'>
                                    <h4 className='font-medium'>Phone</h4>
                                    <a href='tel:+989335379971' className='text-muted-foreground hover:text-primary transition-colors '>
                                        +98 933-537-9971
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className='space-y-6 justify-center'>
                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10 '>
                                    <MapPin className='h-6 w-6 text-primary' />
                                </div>
                                <div className='flex flex-col items-start'>
                                    <h4 className='font-medium'>Location</h4>
                                    <a className='text-muted-foreground'>
                                        Shiraz, Iran
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='space-y-8'>
                        <h3 className='text-2xl font-semibold mb-6'>Social Media</h3>
                        <div className='pt-2'>
                            <div className='flex flex-col space-y-8 items-center justify-center'>

                                <div className='flex space-x-2'>
                                    <a className='cosmic-button px-12 bg-primary/10 text-primary' target='_blank' href='https://www.linkedin.com/in/ali-niakan-40467624b/'>
                                        <Linkedin size={24} className='w-6 h-6' />
                                    </a>
                                </div>

                                <div className='flex space-x-2 '>
                                    <a className='cosmic-button px-12 bg-primary/10 text-primary' target='_blank' href='https://www.instagram.com/alin.n_1/'>
                                        <Instagram size={24} className='w-6 h-6' />
                                    </a>
                                </div>

                                <div className='flex space-x-2 '>
                                    <a className='cosmic-button px-12 bg-primary/10 text-primary' target='_blank' href='https://t.me/Will_Never_Fade_Away'>
                                        <Send size={24} className='w-6 h-6' />
                                    </a>
                                </div>



                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactSection