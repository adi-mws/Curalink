import React, { useEffect, useRef, useState } from 'react'
import Carousel1 from '../../shared/carousel/Carousel1'
import OurValuesCard from '../../shared/cards/OurValuesCard/OurValuesCard'
import CarouselGraphics from '../../../assets/graphics/person-in-laptop.png'
import './OurValuesSection.css';

export default function OurValuesSection() {
    const [currentItem, setCurrentItem] = useState(0);
    const carouselRef = useRef();

    const items = [
        {
            title: "Title 1",
            background: "#DFDFDF",
            description: "We believe that quality healthcare should be a right, not a privilege. Our platform breaks down barriers of distance and time, making it possible for patients to connect with verified doctors from anywhere in the country. By offering online consultations and seamless appointment scheduling, we ensure healthcare is within reach for everyone.",
            image: CarouselGraphics
        },
        {
            title: "Title 2",
            background: "#F1E691",
            description: "We believe that quality healthcare should be a right, not a privilege. Our platform breaks down barriers of distance and time, making it possible for patients to connect with verified doctors from anywhere in the country. By offering online consultations and seamless appointment scheduling, we ensure healthcare is within reach for everyone.",
            image: CarouselGraphics
        },
        {
            title: "Title 3",
            background: "#EEC8FB",
            description: "We believe that quality healthcare should be a right, not a privilege. Our platform breaks down barriers of distance and time, making it possible for patients to connect with verified doctors from anywhere in the country. By offering online consultations and seamless appointment scheduling, we ensure healthcare is within reach for everyone.",
            image: CarouselGraphics
        },
        {
            title: "Title 4",
            background: "#D3C8FB",
            description: "We believe that quality healthcare should be a right, not a privilege. Our platform breaks down barriers of distance and time, making it possible for patients to connect with verified doctors from anywhere in the country. By offering online consultations and seamless appointment scheduling, we ensure healthcare is within reach for everyone.",
            image: CarouselGraphics
        },
        {
            title: "Title 5",
            background: "#C8FBE5",
            description: "We believe that quality healthcare should be a right, not a privilege. Our platform breaks down barriers of distance and time, making it possible for patients to connect with verified doctors from anywhere in the country. By offering online consultations and seamless appointment scheduling, we ensure healthcare is within reach for everyone.",
            image: CarouselGraphics
        } 
    
    ]

    let carousel_items = items.map((item, index) => {
        return <OurValuesCard key={index} background={item.background} description={item.description} image={item.image} />
    })
    const handleSlideTo = (index) => {
        if (carouselRef.current) {
            carouselRef.current.slideTo(index); // Slide to the 4th item (index 3)
        }
    };

    return (
        <section className="OurValuesSection">
            <div className="our-values-content">
                <p className="our-values-title">Our Values</p>
                <div className='our-values-container'>
                    {items.map((item, index) => {
                        const isActive = currentItem === index;
                        console.log(currentItem)

                        return (
                            <div
                                className={`our-values-item ${isActive ? 'active' : ''}`}
                                onClick={() => !isActive && handleSlideTo(index)}
                                key={index}
                            > {item.title}
                            </div>
                        );
                    })}
                </div>

            </div>
            <div className="our-values-carousel">
                <Carousel1 ref={carouselRef} items_list={carousel_items} autoPlay={{ time: 3, isRunning: true }} currentState={setCurrentItem} navigation={true} />
            </div>
        </section>
    )
}
