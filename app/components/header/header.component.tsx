import './header.style.css'
import Image from 'next/image'
import logoTripodyImage from '../../../public/tripody-logo/logoTripodyImage.jpg'
import Link from 'next/link'

export const Header = () => {

    return (
        <div className='header flex '>
            <div className='header-options flex items-center'>
                <div className='header-title-logo'>
                    <Link href={'/'}>
                        <Image
                            src={logoTripodyImage}
                            alt="screenchot of logo"
                            width={87}
                            height={87}
                            className="homezHomeLogo"
                        />
                    </Link>
                </div>
                <div className='header-buttons'>
                    <p className='header-title-text text-xl'><b>Lo Mejor Ha Llegado</b></p>
                </div>
            </div>
            <div className='header-buttons'>
                <Link href={'../tripode'}>
                    <button className='header-buttons-tripode text-xl hover:bg-skyBlue-90'>Trípode</button>
                </Link>
                <Link href={'../rooter'}>
                    <button className='header-buttons-rooter text-xl hover:bg-skyBlue-90'>Rooter</button>
                </Link>
            </div>
        </div>
    )
}