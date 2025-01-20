import { useState } from 'react';
import Square from './Square';
export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    return (
        <>
            <div className='board-row'>
                <Square />
                <Square />
                <Square />
            </div>

            <div className='board-row'>
                <Square />
                <Square />
                <Square />
            </div>

            <div className='board-row'>
                <Square />
                <Square />
                <Square />
            </div>
        </>
    )
}