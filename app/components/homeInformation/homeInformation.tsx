import './homeInformation.style.css'

export const HomeInformation = () => {
    return (
        <div className='home-information'>
            <div className='flex'><b className='text-3xl ml-52 mt-4'>Más Sobre Nosotros:</b></div><br /><br />
            <div className='home-information-text'>
            <p className='w-1/2 text-2xl'>
            En Tripody, nuestra pasión es transformar la industria a través de la 
            innovación. Diseñamos y fabricamos soluciones que mejoran la comodidad, 
            seguridad y calidad en los procesos de mecanizado. Nuestros productos 
            están diseñados para optimizar la eficiencia, reducir los tiempos de 
            producción y garantizar resultados excepcionales.
            Todo esto manteniendo un precio moderado, pero brindando la calidad y fiabilidad
            que todo operario desea. <br/>
            Nuestros valores son: <br /><br />
                 1) La innovacción constante<br />
                 2) La seguridad integral<br />
                 3) La calidad intransigente<br /><br />
            En Tripody, estamos comprometidos con la excelencia. Únete a nosotros 
            en esta emocionante travesía hacia un futuro industrial más eficiente
             y seguro ;).
            </p></div>
        </div>
    )
}