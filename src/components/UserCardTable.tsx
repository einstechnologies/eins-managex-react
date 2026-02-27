import '../styles/UserCardTable.css'

interface CardEntry {
    id: number;
    cardNo: string;
}

interface CardTableProps {
    cards: CardEntry[];
    onDelete: (id: number) => void;
}

export function CardTable({ cards, onDelete }: CardTableProps) {
    return (
        <div className="user-card-table-tableWrapper">
            <table>
                <colgroup>
                    <col style={{ width: "10%" }} />
                    <col style={{ width: "40%" }} />
                    <col style={{ width: "15%" }} />
                </colgroup>

                <thead className="tableHead">
                    <tr>
                        <th>#</th>
                        <th>Card No</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody className="tableBody">
                    {cards.length === 0 ? (
                        <tr className="emptyRow">
                            <td colSpan={3}>No cards registered yet</td>
                        </tr>
                    ) : (
                        cards.map((card, index) => (
                            <tr key={card.id}>
                                <td>{index + 1}</td>
                                <td>{card.cardNo}</td>
                                <td>
                                    <button
                                        className="deleteBtn"
                                        onClick={() => onDelete(card.id)}
                                        title="Delete"
                                    >
                                        <i className="bi bi-trash3"></i>
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}