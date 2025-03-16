import { FaUser, FaPhoneAlt, FaLaptop } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";

export default function Contact() {
    return (
        <div>
            <section>
                <div className="bg-[url('./bg1.jpg')] mt-18 bg-cover bg-no-repeat bg-fixed flex flex-col items-center justify-center min-h-screen px-4">
                    <h1 className="text-center text-white text-3xl sm:text-5xl font-bold m-5">Contact Us</h1>
                    <form className="w-full max-w-lg md:max-w-2xl lg:max-w-[800px] p-4 flex flex-col items-center gap-6">
                        {[ 
                            { placeholder: "Full Name*", icon: <FaUser /> },
                            { placeholder: "Email Address*", icon: <MdOutlineMailOutline /> },
                            { placeholder: "Phone Number*", icon: <FaPhoneAlt /> },
                            { placeholder: "Company", icon: <FaLaptop /> },
                        ].map((item, index) => (
                            <div key={index} className="flex items-center w-full p-2 text-black bg-white border-2 border-[#033768] rounded-xl text-lg sm:text-xl">
                                <input type="text" placeholder={item.placeholder} className="w-full p-2 outline-none bg-transparent" />
                                {item.icon}
                            </div>
                        ))}

                        <div className="flex items-center w-full p-2 text-black bg-white border-2 border-[#033768] rounded-xl text-lg sm:text-xl">
                            <textarea placeholder="How can I help you?" className="w-full p-2 outline-none bg-transparent resize-none" />
                            <IoIosHelpCircleOutline />
                        </div>

                        <h2 className="text-white text-lg sm:text-2xl font-medium text-center">What services are you interested in?</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                            {[ 
                                { name: 'PPC Marketing', img: 'ppc-marketing.png' },
                                { name: 'SEO', img: 'seo.png' },
                                { name: 'Web Design', img: 'web-design.png' },
                                { name: 'Email Marketing', img: 'email-marketing.png' },
                                { name: 'Social Media', img: 'social-media.png' },
                                { name: 'Others', img: 'more.png' }
                            ].map((service, index) => (
                                <div key={index} className="flex flex-col items-center bg-white text-indigo-600 rounded-lg p-4 text-center">
                                    <input type="checkbox" className="w-5 h-5 mb-2" />
                                    <img src={service.img} alt={service.name} className="w-12 h-12 sm:w-14 sm:h-14 mb-2" />
                                    <label className="text-sm sm:text-base font-semibold">{service.name}</label>
                                </div>
                            ))}
                        </div>

                        <button type="submit" className="w-full bg-[#033768] text-white text-xl sm:text-2xl font-bold py-3 rounded-xl">Get Started</button>
                    </form>
                </div>
            </section>

            <section>
                <iframe className="w-full h-60 sm:h-80 md:h-96 lg:h-[500px]" src="https://www.youtube.com/embed/gAX6i9Mz3lY?autoplay=1&mute=1&loop=1&playlist=gAX6i9Mz3lY&controls=0&modestbranding=1&rel=0" title="YouTube video player" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </section>

            <section>
                <div className="flex flex-col items-center justify-center w-full py-10">
                    <h1 className="text-xl sm:text-2xl lg:text-4xl font-medium text-white mb-5">Follow Sitesence</h1>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full px-5">
                        {[ 
                            { platform: "Twitter", img: "twitter.png", action: "Follow Us" },
                            { platform: "Instagram", img: "instagram.png", action: "Join Us" },
                            { platform: "Facebook", img: "facebook.png", action: "Like Us" },
                            { platform: "LinkedIn", img: "linkedin.png", action: "Connect Us" },
                            { platform: "Pinterest", img: "pinterest.png", action: "Pin Us" },
                            { platform: "Website", img: "web.png", action: "Subscribe" }
                        ].map((social, index) => (
                            <li key={index} className="flex flex-col items-center text-center p-2">
                                <a href="#">
                                    <img src={social.img} alt={social.platform} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full hover:bg-amber-200" />
                                </a>
                                <h2 className="py-2 text-sm sm:text-lg font-medium">{social.action}</h2>
                                <p className="text-xs sm:text-sm text-white">Stay connected with us!</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}
