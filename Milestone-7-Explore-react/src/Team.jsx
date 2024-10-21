import { useState } from "react";

export default function Team() {

    const [player, setPlayer] = useState(15);

    const handleAdd = () => {
        const newPlayer = player + 1;
        setPlayer(newPlayer);
    }

    const handleRemove = () => {
        if(player > 0){
            const newPlayer = player - 1;
            setPlayer(newPlayer);
        }
    }


    return (
        <div>
            <h3>Team Player: {player} </h3>
            <button onClick={handleAdd}>Add Player</button>
            <button onClick={handleRemove}>Remove Player</button>
        </div>
    )
    
}