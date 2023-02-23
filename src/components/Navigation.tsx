import { Link } from 'react-router-dom';

//Navigation component containing navigation section
const Navigation = () => {
    return (
        <nav className='topnav'>
			  <Link to="/">Home</Link>{" "}
			  <Link to="/task-list">Task List</Link>{" "}
			  <Link to="/post">Post</Link>{" "}
			  <Link to="/todo">Todo</Link>{" "}
			  <Link to="/about">About</Link>
		</nav>
    );
};

export default Navigation;