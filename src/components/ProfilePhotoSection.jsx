import pfp from "../../public/profile/pfp.webp";
const ProfilePhotoSection = () => {
    return (
        <section id="about" className="pt-24 px-4 relative">
            <div className="container mx-auto max-w-5xl flex items-center justify-center z-50 ">
                <div className="relative p-[4px] rounded-full bg-gradient-to-r from-secondary to-primary animate-float card-hover">
                    <img
                        src={pfp}
                        alt="Profile"
                        className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-background"
                    />
                </div>
            </div>
        </section>
    );
};

export default ProfilePhotoSection;
