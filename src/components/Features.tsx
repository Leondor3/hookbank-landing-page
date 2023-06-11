import Star from '../assets/Star.svg'
import SectionTitle from '../common/SectionTitle'
import { FeatureOne } from './FeatureOne'
import { FeatureThree } from './FeatureThree'
import { FeatureTwo } from './FeatureTwo'

export function Features() {
    return (
        <section className="relative w-full py-16 max-sm:px-6 md:py-20 lg:py-28">
            <div className="container">
                <div className='flex [&>*:nth-child(even)]:flex-row-reverse flex-col'>
                    <FeatureOne />
                    <FeatureTwo />
                    <FeatureThree />
                </div>
            </div>
        </section>
    )
}