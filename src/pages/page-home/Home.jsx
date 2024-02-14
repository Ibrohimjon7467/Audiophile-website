import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';

// components
import About from '../../components/about/About';
import Categories from '../../components/categories/Categories';

// home sections
import IntroHeader from './home-intro-header/Intro-header';
import Section1 from './home-section1/Section1';
import Section2 from './home-section2/Section2';
import Section3 from './home-section3/Section3';

gsap.registerPlugin(ScrollTrigger)

const slide = (elem, delay, duration) => {
    gsap.fromTo(
        elem,
        {
            opacity: 0,
        },
        {
            duration: duration || 0.5,
            delay: delay || 0.5,
            opacity: 1,
            scrollTrigger: {
                trigger: elem,
            }
        }
    )
}

function Home({ dataProduct }) {

    useEffect(() => {
        slide('#aboutHome', "2", "1")
    }, [])

    return (
        <>
            <IntroHeader slide={slide} dataProduct={dataProduct} />
            <main className='main-home'>
                <Categories />
                <Section1 slide={slide} />
                <Section2 slide={slide} />
                <Section3 slide={slide} />
                <div id="aboutHome">
                    <About slide={slide} />
                </div>
            </main>
        </>
    )
}

export default Home