import HeroSection from '../../components/home/HeroSection/HeroSection.jsx';
import { useSideBarState } from '../../contexts/SideBarStateContext.jsx';
import { useEffect } from 'react';
function HomePage() {
    const { setSideBarState } = useSideBarState();
    useEffect(() => {
        setSideBarState('home');
        return () => {
            setSideBarState('');
        }
    }, []);
    return (
        <>
            <HeroSection />
        </>
    )
}
export default HomePage;