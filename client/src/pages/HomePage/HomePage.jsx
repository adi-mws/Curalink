import { useSideBarState } from '../../components/contexts/SideBarStateContext.jsx';
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
            <h1>Welcome to Curalink Home Page!</h1>
        </>
    )
}
export default HomePage;