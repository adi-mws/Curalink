import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import './Carousel1.css';

const Carousel1 = forwardRef(({ items_list, currentState, autoPlay = { isRunning: false, time: 3 }, buttons = false, navigation = false }, ref) => {
    const [items, setItems] = useState([]);
    const [activeItem, setActiveItem] = useState(0); // Middle item
    const [autoPlayState, setAutoPlayState] = useState(false);
    const autoPlayInterval = useRef(null);

    useEffect(() => {
        setItems(items_list);
    
    }, [items_list]);

    

    useEffect(() => {
        setAutoPlayState(autoPlay.isRunning);
    }, [autoPlay.isRunning]);

    const slideTo = (index) => {
        setActiveItem(() => {
            if (index < 0) {
                currentState(items.length-1);
                return items.length - 1;
            } else if (index >= items.length) {
                currentState(0)
                return 0;
            } else {
                currentState(index);
                return index;
            }
        });
    };

    const slideNext = () => {
        setActiveItem((prevActiveItem) => (prevActiveItem + 1) % items.length);
        currentState((prevActiveItem) => (prevActiveItem + 1) % items.length);

    };
    
    const slidePrev = () => {
        setActiveItem((prevActiveItem) => (prevActiveItem - 1 + items.length) % items.length);
        currentState((prevActiveItem) => (prevActiveItem - 1 + items.length) % items.length);
    };

    const startAutoPlayer = () => {
        autoPlayInterval.current = setInterval(() => {
            slideNext();
        }, autoPlay.time * 1000);
    };

    const stopAutoPlayer = () => {
        clearInterval(autoPlayInterval.current);
    };

    useEffect(() => {
        if (autoPlayState) {
            startAutoPlayer();
        } else {
            stopAutoPlayer();
        }
        return () => stopAutoPlayer();
    }, [autoPlayState]);

    // Expose slideTo and activeItem to parent through ref
    useImperativeHandle(ref, () => ({
        slideTo,
      
    }));

    return (
        <div className="Carousel1">
            {buttons && (
                <div className="controls">
                    <button className="left" onClick={slidePrev}>
                        LEFT
                    </button>
                    <button className="right" onClick={slideNext}>
                        RIGHT
                    </button>
                </div>
            )}

            <div className="slider">
                {items.map((item, index) => {
                    let position = '';
                    if (index === activeItem) {
                        position = 'active';
                    } else if (
                        index === activeItem - 1 ||
                        (activeItem === 0 && index === items.length - 1)
                    ) {
                        position = 'left';
                    } else if (
                        index === activeItem + 1 ||
                        (activeItem === items.length - 1 && index === 0)
                    ) {
                        position = 'right';
                    }
                    return (
                        <div className={`item ${position}`} key={index}>
                            {item}
                        </div>
                    );
                })}
            </div>
            {navigation && (
                <div className="navs">
                    {items.map((_, index) => (
                        <button
                            className={`nav-dot ${index === activeItem ? 'nactive' : ''}`}
                            onClick={() => slideTo(index)}
                            key={index}
                        ></button>
                    ))}
                </div>
            )}
        </div>
    );
});

export default Carousel1;
