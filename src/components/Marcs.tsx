import AinbLogo from '../assets/airbnb.png'
import BinanceLogo from '../assets/binance.png'
import CoinbaseLogo from '../assets/coinbase.png'
import DropBoxLogo from '../assets/dropbox.png'

export function Marcs() {
    return (
        <section className='relative w-full py-16 max-sm:px-6 md:py-20 lg:py-28'>
            <div className="container">
                <div className='grid grid-cols-4 place-items-center gap-4 max-sm:grid-cols-2 max-sm:gap-12  '>
                    <img width={140} src={AinbLogo} alt="" />
                    <img width={140} src={BinanceLogo} alt="" />
                    <img width={140} src={CoinbaseLogo} alt="" />
                    <img width={140} src={DropBoxLogo} alt="" />
                </div>
            </div>
        </section>
    )
}