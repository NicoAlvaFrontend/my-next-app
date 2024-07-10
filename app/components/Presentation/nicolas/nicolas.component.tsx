import './nicolas.style.css'
import Image from 'next/image'
import nicolasPhoto from '../../../ui/presentationPhotos/nicolasPhoto.jpeg'

export const Nicolas = () => {
    return(
        <div>
            <Image
            src={nicolasPhoto}
            alt='Nicolas image'
            width={300}
            height={300}
            className='nicolas-image'
            />
        </div>
    )
}