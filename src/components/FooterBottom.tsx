import { FacebookLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react";

export function FooterBottom() {
    return (
        <div>
            <div className="container">
                <div className="flex items-center justify-between w-full mt-8 max-sm:flex-col max-sm:gap-12">
                    <div className="flex row-auto gap-4">
                        <h1 className="text-white/60">Copyright</h1>
                        <span className="text-white/60">&copy;</span>
                        <h2 className="text-white/60">2021 HooBank. All Rights Reserved.</h2>
                    </div>
                    <div className="flex gap-4">
                        <InstagramLogo size={24} color="#fff" strokeWidth="1"/>
                        <FacebookLogo size={24} color="#fff" />
                        <TwitterLogo size={24} color="#fff" />
                        <LinkedinLogo size={24} color="#fff" />
                    </div>
                </div>
            </div>
        </div>
    )
}