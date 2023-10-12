// Import React features
import { useParams } from 'react-router-dom';

// Import components
import { VideoPlayer } from '../components/VideoPlayer';

// Import utils
import { Greeters } from '../utils/greeters.utils';


import PangasinanMap from '../assets/maps/Map-Pangasinan';
import NuevaEcijaMap from '../assets/maps/Maps-NuevaEcija';
import NuevaEcijaZambalesMap from '../assets/maps/Map-NuevaEcijaZambales';



export const GreeterPage = () => {
    // Gets greeter ID from route parameters
    const { id } = useParams();

    // Finds greeter with matching ID
    const greeter = Greeters.find(greeter => greeter.id === parseInt(id, 10));

    // If no greeter with matching ID is found:
    if (!greeter) {
        return <div>No greeter found for this ID.</div>;
    }

    // If greeter with matching ID is found:
    return (
        <div className='greeter-page card shadow'>
            <h1>{greeter.name}</h1>
            <h2>{greeter.id + '/18'}</h2>
            <div className='divider'></div>
            <div className='content' >
                {/* Content Left */}
                <div className='content-left'>
                    <VideoPlayer videoID={greeter.video} />
                    <div className='buttons'>
                        <button className='button'>Previous</button>
                        <button className='button'>Next</button>
                    </div>
                </div>

                {/* Content Right */}
                <div className='content-right'>
                    <h2>Deaconess Concentration of Work</h2>
                    {greeter.map === 'Pangasinan' && <PangasinanMap className='map' />}
                    {greeter.map === 'NuevaEcija' && <NuevaEcijaMap className='map' />}
                    {greeter.map === 'NuevaEcijaZambales' && <NuevaEcijaZambalesMap className='map' />}
                </div>
            </div >
        </div >
    );
};
