import './rooterPresentation.style.css'
import { RooterHome } from '../rooterHome/rooterHome.component'

export const RooterPresentation = () => {
    return (
        <div>
            <div className='flex bg-common-white pt-4'><b className='text-3xl ml-52 mt-4 text-common-black'>Descripciones generales del proyecto:</b></div>
            <RooterHome/>
        </div>
    )
}