import './presentation.style.css'
import { Nicolas } from './nicolas/nicolas.component'
import { Lucas } from './lucas/lucas.component'

export const Presentation = () => {
    return (
        <div className='presentation'>
            <p className='text-common-black text-3xl ml-52 pt-14'><b>Nuestros CEO's:</b></p>
            <div className='presentation-members'>
                <div className='flex items-center presentation-members-member'>
                    <Nicolas/>
                    <p className='text-common-black ml-14 text-xl size-1/3 members-member-text'>
                        Hola! Mi nombre es Nicolás Álvarez. Me encuentro cursando mi 6to año de secundaria, para recibirme de
                        técnico mecanico especializado en máquinas herramientas. Actualmente tengo 18 años; Nací el 9 de abril del
                        2006. Me gusta mucho dormir, comer y jugar videojuegos. Actualmente trabajo como programador freelancer.
                        Es un honor para mi ser miembro de este maravilloso equipo y poder construir la comodidad y confortabilidad 
                        para el ingeniero.
                        Todo el equipo de TripodY S.A. y yo te damos la bienvenida a esta fantástica empresa!
                    </p>
                </div>
                <div className='flex items-center presentation-members-member'>
                    <Lucas/>
                    <p className='text-common-black ml-14 text-xl size-1/3 members-member-text'>                        
                        Hola! Mi nombre es Lucas Martín Palomares. Me encuentro cursando mi 6to año de secundaria, para recibirme de
                        técnico mecanico especializado en máquinas herramientas. Actualmente tengo 18 años; Nací el 8 de agosto del
                        2005. Me gusta mucho la aeronáutica, es por eso que, al recibirme, planeo continuar estudiando sobre ese tema. 
                        Todo el equipo de TripodY S.A. y yo te damos la bienvenida a esta fantástica empresa!</p>
                </div>
            </div>
        </div>
    )
}