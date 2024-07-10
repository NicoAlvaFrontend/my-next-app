import './lucas.style.css'
import Image from 'next/image'
import lucasPhoto from '../../../ui/presentationPhotos/lucasPhoto.jpeg'

export const Lucas = () => {
    return (
        <div>
            <Image
            src={lucasPhoto}
            alt='Lucas image'
            width={300}
            height={300}
            className='lucas-image'
            />
        </div>
    )
}