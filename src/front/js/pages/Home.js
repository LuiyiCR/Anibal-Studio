import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Link, useNavigate } from 'react-router-dom';
import { HeroSection } from '../component/HeroSection.jsx';
import { DividerSection } from '../component/DividerSection.jsx';
import { NuestrosTrabajosSection } from '../component/NuestrosTrabajosSection.jsx';
import { NuestraTrayectoriaSection } from '../component/NuestraTrayectoriaSection.jsx';
import { NuestrasCapacitacionesSection } from '../component/NuestrasCapacitacionesSection.jsx';
import { TestimoniosSection } from '../component/TestimoniosSection.jsx';
import { WhatsAppButton } from '../component/WhatsAppButton.jsx';
import heroImgUrl from '../../img/portada-facebook.png';
import cap1ImgUrl from '../../img/capacitaciones/cap1.jpeg';
import cap2ImgUrl from '../../img/capacitaciones/cap2.jpeg';
import buen1ImgUrl from '../../img/buen-dia/buen1.jpg';
import buen2ImgUrl from '../../img/buen-dia/buen2.jpg';
import cob1ImgUrl from '../../img/trabajos/cob1.jpeg';
import rub1ImgUrl from '../../img/trabajos/rub1.jpg';
import camb1ImgUrl from '../../img/trabajos/camb1.jpg';
import '../../styles/Home.css';

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.body.className = store.theme;
  }, [store.theme]);

  const handleOpenWhatsApp = () => {
    setShowModal(true);
  };

  const handleCloseWhatsApp = () => {
    setShowModal(false);
  };

  const handleConfirmWhatsApp = () => {
    window.location.href = 'https://wa.me/50672362847';
  };

  const testimonios = [
    {
      id: 1,
      nombre: 'Gustavo Santos',
      foto: 'gusTestimonioImgUrl',
      redSocial: 'Facebook',
      puntuacion: 5,
    },
    {
      id: 2,
      nombre: 'Paola Rodríguez',
      foto: 'paoTestimonioImgUrl',
      redSocial: 'Instagram',
      puntuacion: 4,
    },
    {
      id: 3,
      nombre: 'Rosaura Pérez',
      foto: 'rosTestimonioImgUrl',
      redSocial: 'Facebook',
      puntuacion: 5,
    },
    {
      id: 4,
      nombre: 'Soledad Gómez',
      foto: 'soleTestimonioImgUrl',
      redSocial: 'Instagram',
      puntuacion: 5,
    },
  ];

  return (
    <div className="container">
      <HeroSection heroImgUrl={heroImgUrl} />
      <DividerSection />
      <NuestrosTrabajosSection
        rub1ImgUrl={rub1ImgUrl}
        cob1ImgUrl={cob1ImgUrl}
        camb1ImgUrl={camb1ImgUrl}
      />
      <NuestraTrayectoriaSection
        buen1ImgUrl={buen1ImgUrl}
        buen2ImgUrl={buen2ImgUrl}
      />
      <NuestrasCapacitacionesSection
        cap1ImgUrl={cap1ImgUrl}
        cap2ImgUrl={cap2ImgUrl}
      />
      <div className="row align-items-center">
        <div className="col-lg-12 text-center mb-5">
          <Link
            to="/login"
            className="btn btn-light text-black rounded-3"
            type="button"
          >
            Únete ahora
          </Link>
        </div>
      </div>
      <TestimoniosSection testimonios={testimonios} />

      <WhatsAppButton
        handleOpenWhatsApp={handleOpenWhatsApp}
        showModal={showModal}
        handleCloseWhatsApp={handleCloseWhatsApp}
        handleConfirmWhatsApp={handleConfirmWhatsApp}
      />
    </div>
  );
};
