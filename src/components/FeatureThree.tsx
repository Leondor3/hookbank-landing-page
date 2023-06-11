import SectionTitle from "../common/SectionTitle";
import featureOne from "../mockup/FeatureOne";

export function FeatureThree() {

    return (
        <>
            {featureOne.map((feature, index) => (
                <div className="flex items-start gap-12 max-sm:flex-col " key={index}>
                    <div className="w-1/2 flex flex-col space-y-8 max-sm:w-full">
                        <SectionTitle title={feature.sectionTitle} />
                        <p className="text-white/60">{feature.paragraph}</p>
                        <button className="bg-text-gradient block w-max px-4 py-4 rounded-md font-medium">{feature.buttonLabel}</button>
                    </div>
                    <div className="w-1/2 max-sm:w-full">
                        <div className='flex flex-col gap-4'>
                            {feature.features.map((f, i) => (
                                <div key={i} className="bg-[#14101D] p-4 rounded-lg flex items-center gap-4">
                                    <div className="bg-emerald-500/20 rounded-full p-4">
                                        {f.icon}
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <h1 className="text-white font-bold">{f.title}</h1>
                                        <p className='text-white/60'>{f.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}