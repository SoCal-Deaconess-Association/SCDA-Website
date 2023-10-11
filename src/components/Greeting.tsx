// Components
import { VideoPlayer } from '../components/VideoPlayer';

export const Greeting = () => (
    <div className='greeting-popup z-2 flex-center-xy'>
        <div className='container shadow'>
            <h1>Greeter Name</h1>
            <h2>1/18</h2>
            <div className='divider'></div>
            <div className='content'>
                <div className='content-left'>
                    <VideoPlayer />
                    <div className='buttons'></div>
                </div>
                <div className='content-right'>
                </div>
            </div>
        </div>
    </div>
)