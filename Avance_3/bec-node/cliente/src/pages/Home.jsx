import React from "react";
import { useEffect, useState } from "react";
import Document from '../../../src/models/document.model';

import Card from '../components/Card'
import Carousel from '../components/Carousel';

import '../assets/styles/main.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { useDocuments } from "../context/documentsContext";

const dark_bg = {backgroundColor: '#1F1A18'};
const light_bg = {backgroundColor: '#2D2924'};

const slideImages = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/1280px-Books_HD_%288314929977%29.jpg',
  'https://media.istockphoto.com/id/1413840933/photo/old-books-on-wooden-shelf-tiled-bookshelf-background-concept-on-the-theme-of-history.webp?b=1&s=170667a&w=0&k=20&c=1Npv4ypDzrRYfcKmz1FpolYgeLWC5ndy9VGcgC7Odvs=',
  'https://wallpaperaccess.com/full/124378.jpg',
  'https://ichef.bbci.co.uk/images/ic/1200x675/p0gl91h1.jpg'
];

export function Home() {
    
    const { documents, getDocuments } = useDocuments();

    useEffect(() => {
        getDocuments();
    }, []);

    console.dir(documents);
    const scifiBooks = documents.filter(doc => doc.type === 1 && doc.genre === 1);
    const romanceBooks = documents.filter(doc => doc.type === 1 && doc.genre === 2);
    const actionMovies = documents.filter(doc => doc.type === 2 && doc.genre === 9);
    const comedyMovies = documents.filter(doc => doc.type === 2 && doc.genre === 10);

    
    return (
      <>
        <div className="light-bg">
            <Carousel images={slideImages} />

            <div className="landing-row landing-section" style={light_bg}>
                <div className="landing-container">
                    <h1 className="section-header">LIBROS POPULARES POR CATEGORIA</h1>

                    <Tabs>
                        <TabList>
                            <Tab>Ciencia Ficcion</Tab>
                            <Tab>Novela Romance</Tab>
                            <Tab>Fantasia</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="card-grid-container">
                                {scifiBooks.map(book => (
                                    <div key={book._id}>
                                        <Card 
                                            id={book._id}
                                            img={book.img}
                                            title={book.title}
                                            year={book.year}
                                            author={book.author}
                                            desc=""
                                            stock={book.stock}
                                            type={book.type}
                                            genre={book.genre}
                                        />
                                    </div>
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="card-grid-container">
                                {romanceBooks.map(book => (
                                    <div key={book._id}>
                                        <Card 
                                            id={book._id}
                                            img={book.img}
                                            title={book.title}
                                            year={book.year}
                                            author={book.author}
                                            desc=""
                                            stock={book.stock}
                                            type={book.type}
                                            genre={book.genre}
                                        />
                                    </div>
                                ))}
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
                                {actionMovies.map(movie => (
                                    <div key={movie._id}>
                                        <Card 
                                            id={movie._id}
                                            img={movie.img}
                                            title={movie.title}
                                            year={movie.year}
                                            author={movie.author}
                                            desc=""
                                            stock={movie.stock}
                                            type={movie.type}
                                            genre={movie.genre}
                                        />
                                    </div>
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="card-grid-container">
                                {comedyMovies.map(movie => (
                                    <div key={movie._id}>
                                        <Card 
                                            id={movie._id}
                                            img={movie.img}
                                            title={movie.title}
                                            year={movie.year}
                                            author={movie.author}
                                            desc=""
                                            stock={movie.stock}
                                            type={movie.type}
                                            genre={movie.genre}
                                        />
                                    </div>
                                ))}
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