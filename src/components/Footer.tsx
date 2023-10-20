import { useMediaQuery } from 'react-responsive';

export const Footer = () => {
    const isShort = useMediaQuery({ maxHeight: 838 });

    return (
        !isShort && (
            <footer className='flex-center-x'>
                <p>©2023 Southern California Deaconess Association</p>
            </footer>
        )
    );
};