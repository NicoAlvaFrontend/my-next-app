'use client'
import './rooterSwiper.style.css'
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import { Pagination, Navigation, Autoplay} from "swiper/modules";
import 'swiper/swiper-bundle.css';
import viga2040 from '../../../public/rooterImage/rooterImages/viga2040.png'
import acoplamiento from '../../../public/rooterImage/rooterImages/acoplamiento.png'
import SBR10UU from '../../../public/rooterImage/rooterImages/SBR10UU .png'
import SCC10UU from '../../../public/rooterImage/rooterImages/SCC10UU .png'
import basemec from '../../../public/rooterImage/rooterImages/basemec.png'
import ejexz from '../../../public/rooterImage/rooterImages/ejexz.png'
import guia290 from '../../../public/rooterImage/rooterImages/guia290.png'
import guia360 from '../../../public/rooterImage/rooterImages/guia360.png'
import nema17 from '../../../public/rooterImage/rooterImages/nema17.png'
import pernoM510 from '../../../public/rooterImage/rooterImages/pernoM510.png'
import pernom314 from '../../../public/rooterImage/rooterImages/pernom314.png'
import pernom516 from '../../../public/rooterImage/rooterImages/pernom516.png'
import placaA from '../../../public/rooterImage/rooterImages/placaA.png'
import placaB from '../../../public/rooterImage/rooterImages/placaB.png'
import placaC from '../../../public/rooterImage/rooterImages/placaC.png'
import placaD from '../../../public/rooterImage/rooterImages/placaD.png'
import resorte from '../../../public/rooterImage/rooterImages/resorte.png'
import tnut from '../../../public/rooterImage/rooterImages/tnut.png'
import tnut30 from '../../../public/rooterImage/rooterImages/tnut30.png'
import tornillo295 from '../../../public/rooterImage/rooterImages/tornillo295.png'
import tornillo365 from '../../../public/rooterImage/rooterImages/tornillo365.png'
import tuercacobre from '../../../public/rooterImage/rooterImages/tuercacobre.png'
import viga2020 from '../../../public/rooterImage/rooterImages/viga2020.png'




export const RooterSwiper = () => {
    return(
        <div className='swiper-rooter'>
            <div className='flex'><b className='text-3xl ml-52 mt-4 text-common-black'>Piezas a utilizar:</b></div><br /><br />
            <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            loop = {true}
            navigation 
            // autoplay = {{
            //   delay: 2500,
            //   disableOnInteraction: true,
            // }}
            pagination ={{
                el: '.pagination',
                clickable:true,
            }}
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              200: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              674: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1401: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper: any) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className='swiper-target'>
                        <Image
                        src={acoplamiento}
                        alt='viga 20x40'
                        width={200}
                        height={100}
                        className='swiper-image'
                        />
                        <div className='bg-primary-cian swiper-image-complement'>
                            <p>Acoplamiento y tornillo de fijación [11420]</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='swiper-target'>
                            <Image
                            src={SBR10UU}
                            alt='viga 20x40'
                            width={200}
                            height={100}
                            className='swiper-image'
                            />
                            <div className='bg-primary-cian swiper-image-complement'>
                                <p>SBR10UU [13200] (4)</p>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='swiper-target'>
                        <Image
                        src={SCC10UU}
                        alt='viga 20x40'
                        width={200}
                        height={100}
                        className='swiper-image'
                        />
                        <div className='bg-primary-cian swiper-image-complement'>
                            <p>Asiento de tuerca SCC10UU [11210]</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='swiper-target'>
                        <Image
                        src={basemec}
                        alt='viga 20x40'
                        width={200}
                        height={100}
                        className='swiper-image'
                        />
                        <div className='bg-primary-cian swiper-image-complement'>
                            <p>Perfil de aluminio de 300 x 180 mm [11300]</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='swiper-target'>
                        <Image
                        src={ejexz}
                        alt='viga 20x40'
                        width={200}
                        height={100}
                        className='swiper-image'
                        />
                        <div className='bg-primary-cian swiper-image-complement'>
                            <p>Conjunto del eje X-Z de aluminio [16100]</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='swiper-target'>
                        <Image
                        src={guia290}
                        alt='viga 20x40'
                        width={200}
                        height={100}
                        className='swiper-image'
                        />
                        <div className='bg-primary-cian swiper-image-complement'>
                            <p>Cilindro de guía de eje Y de Ø10 x 290 mm [13100] (2)</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='swiper-target'>
                        <Image
                        src={guia360}
                        alt='viga 20x40'
                        width={200}
                        height={100}
                        className='swiper-image'
                        />
                        <div className='bg-primary-cian swiper-image-complement'>
                            <p>Cilindro guía eje X de Ø10 x 360 mm [11200] (2)</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='swiper-target'>
                        <Image
                        src={nema17}
                        alt='viga 20x40'
                        width={200}
                        height={100}
                        className='swiper-image'
                        />
                        <div className='bg-primary-cian swiper-image-complement'>
                            <p>Motor Nema 17 [11400] (2)</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='swiper-target'>
                        <Image
                        src={pernoM510}
                        alt='viga 20x40'
                        width={200}
                        height={100}
                        className='swiper-image'
                        />
                        <div className='bg-primary-cian swiper-image-complement'>
                            <p>Perno M5 x 10 [14201] (4)</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='swiper-target'>
                        <Image
                        src={pernom314}
                        alt='viga 20x40'
                        width={200}
                        height={100}
                        className='swiper-image'
                        />
                        <div className='bg-primary-cian swiper-image-complement'>
                            <p>Perno M3 x 14 [14610] (8)</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='swiper-target'>
                        <Image
                        src={pernom516}
                        alt='viga 20x40'
                        width={200}
                        height={100}
                        className='swiper-image'
                        />
                        <div className='bg-primary-cian swiper-image-complement'>
                            <p>Perno M5 x 16 [11320] (34)</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='swiper-target'>
                        <Image
                        src={placaA}
                        alt='viga 20x40'
                        width={200}
                        height={100}
                        className='swiper-image'
                        />
                        <div className='bg-primary-cian swiper-image-complement'>
                            <p>Placa de resina de baquetilla A 360*10 [14300]</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='swiper-target'>
                        <Image
                        src={placaB}
                        alt='viga 20x40'
                        width={200}
                        height={100}
                        className='swiper-image'
                        />
                        <div className='bg-primary-cian swiper-image-complement'>
                            <p>Placa de resina de baquetilla B 360*10 [14400]</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='swiper-target'>
                        <Image
                        src={placaC}
                        alt='viga 20x40'
                        width={200}
                        height={100}
                        className='swiper-image'
                        />
                        <div className='bg-primary-cian swiper-image-complement'>
                            <p>Placa de resina de baquetilla C [14500]</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='swiper-target'>
                        <Image
                        src={placaD}
                        alt='viga 20x40'
                        width={200}
                        height={100}
                        className='swiper-image'
                        />
                        <div className='bg-primary-cian swiper-image-complement'>
                            <p>Placa de resina de baquetilla D [14600]</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='swiper-target'>
                        <Image
                        src={resorte}
                        alt='viga 20x40'
                        width={200}
                        height={100}
                        className='swiper-image'
                        />
                        <div className='bg-primary-cian swiper-image-complement'>
                            <p>Resorte anti-torque [11111] (2)</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='swiper-target'>
                        <Image
                        src={tnut}
                        alt='viga 20x40'
                        width={200}
                        height={100}
                        className='swiper-image'
                        />
                        <div className='bg-primary-cian swiper-image-complement'>
                            <p>T-Nut 20M5 [11321] (16)</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='swiper-target'>
                        <Image
                        src={tnut30}
                        alt='viga 20x40'
                        width={200}
                        height={100}
                        className='swiper-image'
                        />
                        <div className='bg-primary-cian swiper-image-complement'>
                            <p>T-Nut 30M5 [11211] (10)</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='swiper-target'>
                        <Image
                        src={tornillo295}
                        alt='viga 20x40'
                        width={200}
                        height={100}
                        className='swiper-image'
                        />
                        <div className='bg-primary-cian swiper-image-complement'>
                            <p>tornillo de avance de 295 mm [11100]</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='swiper-target'>
                        <Image
                        src={tornillo365}
                        alt='viga 20x40'
                        width={200}
                        height={100}
                        className='swiper-image'
                        />
                        <div className='bg-primary-cian swiper-image-complement'>
                            <p>Tornillo de avance thsl 8  de 365 mm [13300]</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='swiper-target'>
                        <Image
                        src={tuercacobre}
                        alt='viga 20x40'
                        width={200}
                        height={100}
                        className='swiper-image'
                        />
                        <div className='bg-primary-cian swiper-image-complement'>
                            <p>Tuerca de cobre [11110] (2)</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='swiper-target'>
                        <Image
                        src={viga2020}
                        alt='viga 20x40'
                        width={200}
                        height={100}
                        className='swiper-image'
                        />
                        <div className='bg-primary-cian swiper-image-complement'>
                            <p>Perfil de aluminio de 20 x 20 x 360 mm [14200] (2)</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='swiper-target'>
                        <Image
                        src={viga2040}
                        alt='viga 20x40'
                        width={200}
                        height={100}
                        className='swiper-image'
                        />
                        <div className='bg-primary-cian swiper-image-complement'>
                            <p>Perfil de aluminio de 20 x 40 x 290 mm [14100] (2)</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}