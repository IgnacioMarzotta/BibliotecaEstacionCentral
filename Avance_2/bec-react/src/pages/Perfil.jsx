import React from "react";

import '../assets/styles/perfil.css';
import ProfileCard from '../assets/components/ProfileCard';

import Portada1 from "../assets/img/Portadas/100_anos.png";
import Portada2 from "../assets/img/Portadas/La_chica_de_nieve.jpg";
import Portada3 from "../assets/img/Portadas/La_coleccionista.jpg";
import Portada4 from "../assets/img/Portadas/Rosa.png";
import Portada5 from "../assets/img/Portadas/desayuno_en_jupiter.png";
import Portada6 from "../assets/img/Portadas/los_100.jpg";
import Portada7 from "../assets/img/Portadas/nunca_digas_tu_nombre.png";
import Portada8 from "../assets/img/Portadas/revolucion.webp";
import perfil_img from "../assets/img/Portadas/icono_perfil.png";

const propsFotoPerfil = {width: 300, height: 300, filter: 'invert(1)'};
const light_bg = {backgroundColor: '#2D2924', paddingBottom: '20px'};

export const Perfil = () => {
    return (
        <>
            <div style={light_bg}>
                <center>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
                    
                    <div className="main--grid container">
                        <img src={perfil_img} style={propsFotoPerfil} />
                        <h3 className="perfil-title">Nombre de usuario</h3><p className="perfil-email">Correo electronico: Usuario@example.com</p>
                        <h5 className="btn btn-outline-light mb-5">Editar perfil</h5>

                        <div className="row row-cols-1 row-cols-md-4 g-4">

                            <ProfileCard 
                                img={Portada1}
                                title='Titulo de Libro'
                                author='Autor'
                                time='1 semana'
                            />

                            <ProfileCard 
                                img={Portada2}
                                title='Desayuno en Jupiter'
                                author='Andrea Tome'
                                time='1 semana'
                            />

                            <ProfileCard 
                                img={Portada3}
                                title='Titulo de Libro'
                                author='Autor'
                                time='1 semana'
                            />

                            <ProfileCard 
                                img={Portada4}
                                title='Titulo de Libro'
                                author='Autor'
                                time='1 semana'
                            />

                            <ProfileCard 
                                img={Portada5}
                                title='Titulo de Libro'
                                author='Autor'
                                time='1 semana'
                            />

                            <ProfileCard 
                                img={Portada6}
                                title='Titulo de Libro'
                                author='Autor'
                                time='1 semana'
                            />

                            <ProfileCard 
                                img={Portada7}
                                title='Titulo de Libro'
                                author='Autor'
                                time='1 semana'
                            />

                            <ProfileCard 
                                img={Portada8}
                                title='Titulo de Libro'
                                author='Autor'
                                time='1 semana'
                            />
                        </div>
                    </div>
                </center>
            </div>
        </>
    );
};