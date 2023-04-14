const headerStyle = {
    // doesn't like dashes compared to CSS
    textAlign: 'center',
    padding: '1%',
    fontSize: 'xx-large',
    borderBottom: '2px solid black',
    color: 'black',
} as const;

export default function Header() {

    return (
        <header style={headerStyle} >
            <div></div>
            <h1>Reimbursement app</h1>
        </header>
    );
}