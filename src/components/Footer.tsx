import Logo from '../assets/logo.svg'
import { FooterBottom } from './FooterBottom'

export function Footer() {
    return (
        <footer className="relative w-full pt-16 pb-8 max-sm:px-6 md:py-8 lg:pt-28">
            <div className="container">
                <div className='flex max-md:flex-col max-md:justify-center max-md:gap-12 max-lg:flex-col max-lg:gap-12'>
                    <div className="w-1/2 flex flex-col gap-4 max-md:w-full">
                        <img src={Logo} alt="" width={200} />
                        <p className='text-white/60 w-96'>A new way to make the payments easy, reliable and secure.</p>
                    </div>
                    <div className='w-1/2 max-md:w-full max-lg:w-full'>

                        <div className='grid grid-cols-3 max-sm:grid-cols-2 max-sm:gap-12'>
                            <div>
                                <span className='text-white font-bold'>Useful Links</span>
                                <nav className='mt-8 flex items-start gap-4 flex-col'>
                                    <li>
                                        <a className='text-white/60' href="">Content</a>
                                    </li>
                                    <li>
                                        <a className='text-white/60' href="">How it Works</a>
                                    </li>
                                    <li>
                                        <a className='text-white/60' href="">Create</a>
                                    </li>
                                    <li>
                                        <a className='text-white/60' href="">Explore</a>
                                    </li>
                                    <li>
                                        <a className='text-white/60' href="">Terms & Services</a>
                                    </li>
                                </nav>
                            </div>
                            <div>
                                <span className='text-white font-bold'>Community</span>
                                <nav className='mt-8 flex items-start gap-4 flex-col'>
                                    <li>
                                        <a className='text-white/60' href="">Help Center</a>
                                    </li>
                                    <li>
                                        <a className='text-white/60' href="">Partners</a>
                                    </li>
                                    <li>
                                        <a className='text-white/60' href="">Suggestions</a>
                                    </li>
                                    <li>
                                        <a className='text-white/60' href="">Blog</a>
                                    </li>
                                    <li>
                                        <a className='text-white/60' href="">Newsletters</a>
                                    </li>
                                </nav>
                            </div>
                            <div>
                                <span className='text-white font-bold'>Partner</span>
                                <nav className='mt-8 flex items-start gap-4 flex-col'>
                                    <li>
                                        <a className='text-white/60' href="">Newsletters</a>
                                    </li>
                                    <li>
                                        <a className='text-white/60' href="">Become a Partner</a>
                                    </li>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='border border-white w-full mt-12 opacity-10' />
                <FooterBottom />
            </div>
        </footer>
    )
}