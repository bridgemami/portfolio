import React, { useState } from 'react';

export default function Fun() {
        const [counter, setCounter] = useState(0);

        function up () {
            setCounter(counter+1)
        }
    return (
        <section>
            <p>{counter}</p>
            <button onClick={up}> ++++ </button>
        </section>
    )
}