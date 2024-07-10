import './frecuentQuestions.style.css'

export const FrecuentQuestions = () => {
    return (
        <div className='frecuentQuestions'>
            <div className='flex'><b className='text-3xl ml-52 mt-4 text-common-black'>Justificaciones:</b></div><br /><br />
            <p className='text-common-black w-1/2 text-2xl blueprints-text'>
            <b>¿Por qué se utilizará un nema 17 y no un nema 21?</b><br />
            Se optó por un motor Nema 17 por sobre un Nema 21 por dos razones: <br /> 
            1) Se quiere poder utilizar una fuente pequeña y barata, así que la sumatoria de los consumos de los motores no debe superar los 12 volt y 10 amper, 
            por eso se optó por un nema 17 de 0,6 Amper <br />
            2) Tamaño. El tamaño del nema 21, en comparación al nema 17, es mucho mayor, teniendo en cuenta el tamaño del motor y la placa de control que este 
            necesita. Para utilizar perfiles de menor tamaño se optó por el nema 17. <br /> <br />
            <b>¿Por qué se utilizará el SBR10UU?</b><br />
            Esto con el fin de brindar un soporte extra al cilindro de guía del eje X, evitando la caída de éste por su propio peso, o la rotura de la máquina por
            el doble de dicho cilindro, llegando al mismo final que la razón anterior. <br /><br />
            <b>¿Por qué se utilizará una placa de acrílico?</b><br />
            Esto con el fin de aumentar la seguridad del usuario. Si bien este proyecto está dirigido a gente con experiencia previa en el uso de estas máquinas, 
            nunca está de más el agregarle medidas de protección extra. <br /><br />
            <b>¿Por qué se utilizarán gomas en las patas?</b><br />
            Se utilizan gomas en las patas para reducir el impacto que pueden tener las vibraciones en la precisión del CNC 3018 <br /><br />
            <b>¿Por qué se utilizará el SCC10UU?</b><br />
            Esto se diseñó así más que nada por la disponibilidad y la facilidad de conseguir esta pieza para el ensamblaje o repuesto de la máquina.
            </p>

            <div className='flex'><b className='text-3xl ml-52 mt-4 text-common-black'>Cálculos a Realizar:</b></div><br /><br />
            <p className='text-common-black w-1/2 text-2xl blueprints-text'>
            Torque que habrá en los ejes debido al movimiento del tornillo
            Potencia y energía necesarias para el funcionamiento del motor Nema 17
            Consumo eléctrico de la máquina 1 hora encendida sin trabajar.
            Consumo de eléctrico de la máquina en 1 hora de trabajo a x revoluciones/min.    

            </p>
        </div>
    )
}