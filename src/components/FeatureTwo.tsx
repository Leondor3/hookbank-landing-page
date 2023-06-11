import SectionTitle from "../common/SectionTitle";
import featureTwo from "../mockup/FeatureTwo";

export function FeatureTwo() {

    return (
        <>
            {featureTwo.map((feature, index) => (
                <div className="flex items-start gap-12 max-sm:flex-col mb-48" key={index}>
                    <div className="w-1/2 flex flex-col space-y-8 max-sm:w-full">
                        <SectionTitle title={feature.sectionTitle} />
                        <p className="text-white/60">{feature.paragraph}</p>
                        <button className="bg-text-gradient block w-max px-4 py-4 rounded-md font-medium">{feature.buttonLabel}</button>
                    </div>
                    <div className="w-1/2 max-sm:w-full">
                        <div className='flex'>
                            <div className="bg-card-gradient w-60 h-56 mt-20 rounded-md p-8">
                            </div>
                            <div className="bg-[#14101D] w-60 h-56 " />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}