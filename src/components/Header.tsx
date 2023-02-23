type Props = {
    tasklength: number;
};

//header component containing header section
const Header = (props:Props) => {
    return (
        <header className="App-header">
            <h1>Task List</h1>
            <h3>Total Number of Task: {props.tasklength}</h3>
        </header>
    );
};

export default Header;