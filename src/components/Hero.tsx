import { Equals, Mountains } from "@phosphor-icons/react";
import HeroRobot from '../assets/robot.png'

export function Hero() {
    return (
        <section className="relative z-10 overflow-hidden    pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]">
            <div className="container text-white">
                <div className="flex items-start max-lg:flex-col">
                    <div className="flex items-start space-y-8 flex-col">
                        <div className="bg-linear-bg w-max p-2 rounded-md flex items-center gap-4">
                            <div className="bg-card-gradient w-max p-1 rounded-md">
                                <Equals color="#31C179" />
                            </div>
                            <span className="text-sm text-white/40">
                                20% DISCOUNT FOR
                                <span className="text-white ml-1">
                                    1 MONTH</span> ACCOUNT
                            </span>
                        </div>
                        <div className="flex flex-col gap-8">
                            <h1 className="text-6xl text-white font-bold">The Next <br />
                                <span className="bg-text-gradient bg-clip-text font-bold text-transparent">Generation</span>
                                <br />
                                Payment Method.</h1>
                            <p className="w-[400px] text-white/60">
                                Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
                                We examine annual percentage rates, annual fees.
                            </p>
                        </div>
                    </div>
                    <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-[#2563eb] opacity-20 blur-[375px]" />
                    <div className="absolute right-0 top-32 max-2xl:top-24 flex flex-1 max-lg:w-[400px] max-2xl:w-[600px] max-lg:top-[35rem] w-[600px] max-lg:hidden">
                        <img className="w-full h-auto object-cover" src={HeroRobot} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}