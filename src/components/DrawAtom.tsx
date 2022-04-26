import React from 'react';
import { Atom } from './Atom';

interface Props {
    atom: Atom;
}

const DrawAtom: React.FC<Props> = ({ atom }) => {

    return (
    <g>
        <circle
            cx={atom.x}
            cy={atom.y}
            r="10"
            fill="black"
        />
    </g>
    )
}

export default DrawAtom;
