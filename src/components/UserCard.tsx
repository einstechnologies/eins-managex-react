import { useState } from "react";
import { CardTable } from '../components/UserCardTable';

export function UserCard() {
    const [cards, setCards] = useState([
        { id: 1, cardNo: "1234567889" },
        { id: 2, cardNo: "547896" },
    ]);

    const handleDelete = (id: number) => {
        setCards((prev) => prev.filter((c) => c.id !== id));
    };
    return (
        <>
            <div className="col-12">
                <h6><b>Card Registration</b></h6>
                <span>Scan the user's card from Biometric device</span>
                <div className="spaceBetweencontent"></div>


                <div className="col-lg-12">
                    <button className="btn-outline-soft-blue" style={{ width: "100%" }}>Scan</button>
                </div>
                <div>
                    <CardTable
                        cards={cards}
                        onDelete={handleDelete}
                    />
                </div>
            </div>
        </>
    );
}




