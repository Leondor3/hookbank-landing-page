import SectionTitle from "../common/SectionTitle";
import People1 from '../assets/people01.png'

export function Depoiment() {
    return (
        <section className="relative w-full py-16 max-sm:px-6 md:py-20 lg:py-28 overflow-hidden">
            <div className="container">
                <div className="flex flex-col items-start space-y-8">
                    <div className="flex items-center mb-16">
                        <div className="w-[550px]">
                            <SectionTitle title="What people are saying about us" />
                        </div>
                        <p className="text-white/60">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                    </div>
                    <div className="grid  grid-cols-4 gap-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 w-full justify-center">
                        <div className="-z-10 absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-[#2563eb] opacity-20 blur-[375px]" />
                        <div className="-z-10 absolute -left-48 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-[#2563eb] opacity-20 blur-[375px]" />
                        <div className="bg-card-gradient p-8 rounded-xl space-y-4">
                            <h1 className="italic text-5xl bg-text-gradient bg-clip-text text-transparent h-max">""</h1>
                            <p className="w-64 text-white">Money is only a tool. It will take you wherever you wish, but it
                                will not replace you as the driver.</p>
                            <div className="flex items-center gap-2">
                                <img width={48} src={People1} alt="" />
                                <div className="flex flex-col">
                                    <span className="text-white">Herman Jensen</span>
                                    <span className="text-white/50">Founder & Leader</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-card-gradient p-8 rounded-xl space-y-4">
                            <h1 className="italic text-5xl bg-text-gradient bg-clip-text text-transparent h-max">""</h1>
                            <p className="w-64 text-white">Money is only a tool. It will take you wherever you wish, but it
                                will not replace you as the driver.</p>
                            <div className="flex items-center gap-2">
                                <img width={48} src={People1} alt="" />
                                <div className="flex flex-col">
                                    <span className="text-white">Herman Jensen</span>
                                    <span className="text-white/50">Founder & Leader</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-card-gradient p-8 rounded-xl space-y-4">
                            <h1 className="italic text-5xl bg-text-gradient bg-clip-text text-transparent h-max">""</h1>
                            <p className="w-64 text-white">Money is only a tool. It will take you wherever you wish, but it
                                will not replace you as the driver.</p>
                            <div className="flex items-center gap-2">
                                <img width={48} src={People1} alt="" />
                                <div className="flex flex-col">
                                    <span className="text-white">Herman Jensen</span>
                                    <span className="text-white/50">Founder & Leader</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-card-gradient p-8 rounded-xl space-y-4">
                            <h1 className="italic text-5xl bg-text-gradient bg-clip-text text-transparent h-max">""</h1>
                            <p className="w-64 text-white">Money is only a tool. It will take you wherever you wish, but it
                                will not replace you as the driver.</p>
                            <div className="flex items-center gap-2">
                                <img width={48} src={People1} alt="" />
                                <div className="flex flex-col">
                                    <span className="text-white">Herman Jensen</span>
                                    <span className="text-white/50">Founder & Leader</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}