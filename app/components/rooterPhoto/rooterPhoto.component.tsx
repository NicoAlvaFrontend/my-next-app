import Image from "next/image";
import './rooterPhoto.style.css'
import rooterImage from '../.././../public/rooterImage/rooterImage.png'


export const RooterImage = () => {
    return (
        <div className="rooterImage-conteiner">
            <Image
            src={rooterImage}
            alt="rooter image"
            width={500}
            height={500}
            className="rooterClass"
            />
        </div>
    )
}