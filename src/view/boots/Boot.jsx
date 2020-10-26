import React, {useState, useEffect} from 'react';
import './boot.css';

const simulateNetworkRequest = () => new Promise(resolve => setTimeout(resolve, 2000));

export const Boot = () => {
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
            if (isLoading) {
                simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true);

    return (
        <div className='form-box'>
            <div>
                <input type='text' placeholder='Betting price $' className='box-input' />
            </div>
            <div>
                <button className='box-btn' disabled={isLoading} onClick={!isLoading ? handleClick : null} >
                    {isLoading ? 'Loading…': 'Beting'}
                </button>
            </div>

        </div>
    )
}