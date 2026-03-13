export type User = {
    id: number;
    UserId: string;
    UserName: string;

};

type UserTableProps = {
    Users: User[];
    selectedusers: number[];
    onSelect: (id: number) => void;

};

export function UserTable({
    Users,
    selectedusers,
    onSelect,

}: UserTableProps) {
    return (
        <div className="Template-transfer-table templateTransfer ">

            <table>
                <thead className="tableHead">
                    <tr>
                        <th>Select</th>
                        <th className="hidden-col template-transfer">#</th>
                        <th>UserId</th>
                        <th>User Name</th>


                    </tr>
                </thead>

                <tbody className="tableBody">

                    {

                        Users.length === 0 ? (
                            <tr className="emptyRow">
                                <td colSpan={3}>No cards registered yet</td>
                            </tr>
                        ) : (

                            Users.map((user, index) => (
                                <tr key={user.id}>
                                    <td>
                                        <input type="hidden" value={user.id} />

                                        <input
                                            type="checkbox"
                                            checked={selectedusers.includes(user.id)}
                                            onChange={() => onSelect(user.id)}
                                        />
                                    </td>

                                    <td className="hidden-col template-transfer">{index + 1}</td>
                                    <td>{user.UserId}</td>
                                    <td>{user.UserName}</td>



                                </tr>
                            )))}
                </tbody>
            </table>
        </div>
    );
}