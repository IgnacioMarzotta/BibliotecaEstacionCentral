import React from "react";
import Card from '../assets/components/Card'
import Carousel from '../assets/components/Carousel';

import '../assets/styles/main.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const dark_bg = {backgroundColor: '#1F1A18'};
const light_bg = {backgroundColor: '#2D2924'};

const slideImages = [
  'https://picsum.photos/1280/720?random=1',
  'https://picsum.photos/1280/720?random=2',
  'https://picsum.photos/1280/720?random=3',
  'https://picsum.photos/1280/720?random=4'
];

export const Home = () => {
    return (
      <>
        <div className="light-bg">
            <Carousel images={slideImages} />

            <div className="landing-row landing-section" style={light_bg}>
                <div className="landing-container">
                    <h1 className="section-header">LIBROS POPULARES POR CATEGORIA</h1>

                    <Tabs>
                        <TabList>
                            <Tab>Categoria 1</Tab>
                            <Tab>Categoria 2</Tab>
                            <Tab>Categoria 3</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="card-grid-container">
                                <Card 
                                    img='https://picsum.photos/360/720?random=1'
                                    title='Titulo de Libro'
                                    desc='Descripcion de libro'
                                    stock='14'
                                />
                                <Card 
                                    img='https://picsum.photos/360/720?random=2'
                                    title='Titulo de Libro'
                                    desc='Descripcion de libro'
                                    stock='14'
                                />
                                <Card 
                                    img='https://picsum.photos/360/720?random=3'
                                    title='Titulo de Libro'
                                    desc='Descripcion de libro'
                                    stock='14'
                                />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="card-grid-container">
                                <Card 
                                    img='https://picsum.photos/360/720?random=4'
                                    title='Titulo de Libro'
                                    desc='Descripcion de libro'
                                    stock='14'
                                />
                                <Card 
                                    img='https://picsum.photos/360/720?random=5'
                                    title='Titulo de Libro'
                                    desc='Descripcion de libro'
                                    stock='14'
                                />
                                <Card 
                                    img='https://picsum.photos/360/720?random=6'
                                    title='Titulo de Libro'
                                    desc='Descripcion de libro'
                                    stock='14'
                                />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="card-grid-container">
                                <Card 
                                    img='https://picsum.photos/360/720?random=7'
                                    title='Titulo de Libro'
                                    desc='Descripcion de libro'
                                    stock='14'
                                />
                                <Card 
                                    img='https://picsum.photos/360/720?random=8'
                                    title='Titulo de Libro'
                                    desc='Descripcion de libro'
                                    stock='14'
                                />
                                <Card 
                                    img='https://picsum.photos/360/720?random=9'
                                    title='Titulo de Libro'
                                    desc='Descripcion de libro'
                                    stock='14'
                                />
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>

            <div className="landing-row landing-section" style={dark_bg}>
                <div className="landing-container">
                    <h1 className="section-header">SERVICIOS DE BIBLIOTECA</h1>
                    <div className="card-grid-container">
                    <Card 
                        img='https://picsum.photos/360/720?random=1'
                        title='Titulo de Libro'
                        desc='Descripcion de libro'
                        stock='14'
                    />
                    <Card 
                        img='https://picsum.photos/360/720?random=2'
                        title='Titulo de Libro'
                        desc='Descripcion de libro'
                        stock='14'
                    />
                    <Card 
                        img='https://picsum.photos/360/720?random=3'
                        title='Titulo de Libro'
                        desc='Descripcion de libro'
                        stock='14'
                    />
                    </div>
                </div>
            </div>

            <div className="landing-row landing-section" style={light_bg}>
                <div className="landing-container">
                    <h1 className="section-header">PELICULAS POPULARES POR CATEGORIA</h1>
                    <Tabs>
                        <TabList>
                            <Tab>Categoria 1</Tab>
                            <Tab>Categoria 2</Tab>
                            <Tab>Categoria 3</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="card-grid-container">
                                <Card 
                                    img='https://picsum.photos/360/720?random=1'
                                    title='Titulo de Libro'
                                    desc='Descripcion de libro'
                                    stock='14'
                                />
                                <Card 
                                    img='https://picsum.photos/360/720?random=2'
                                    title='Titulo de Libro'
                                    desc='Descripcion de libro'
                                    stock='14'
                                />
                                <Card 
                                    img='https://picsum.photos/360/720?random=3'
                                    title='Titulo de Libro'
                                    desc='Descripcion de libro'
                                    stock='14'
                                />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="card-grid-container">
                                <Card 
                                    img='https://picsum.photos/360/720?random=4'
                                    title='Titulo de Libro'
                                    desc='Descripcion de libro'
                                    stock='14'
                                />
                                <Card 
                                    img='https://picsum.photos/360/720?random=5'
                                    title='Titulo de Libro'
                                    desc='Descripcion de libro'
                                    stock='14'
                                />
                                <Card 
                                    img='https://picsum.photos/360/720?random=6'
                                    title='Titulo de Libro'
                                    desc='Descripcion de libro'
                                    stock='14'
                                />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="card-grid-container">
                                <Card 
                                    img='https://picsum.photos/360/720?random=7'
                                    title='Titulo de Libro'
                                    desc='Descripcion de libro'
                                    stock='14'
                                />
                                <Card 
                                    img='https://picsum.photos/360/720?random=8'
                                    title='Titulo de Libro'
                                    desc='Descripcion de libro'
                                    stock='14'
                                />
                                <Card 
                                    img='https://picsum.photos/360/720?random=9'
                                    title='Titulo de Libro'
                                    desc='Descripcion de libro'
                                    stock='14'
                                />
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
      </>
    );
};