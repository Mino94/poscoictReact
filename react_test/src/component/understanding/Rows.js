const Rows = ({ row }) => {
    return (
        <tr>
            <id style={row.stocked ? {color: "red"} : {}}>{row.name}</id>
            <td>{row.price}</td>
        </tr>
    );
};

export default Rows;