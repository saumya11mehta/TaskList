import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import Navigation from './components/Navigation';
import JsonAPI from './components/JsonAPI';
import Filter from './components/Filter';
import Tasklist from './components/Tasklist';
import TaskListContext from './context/TaskListContext';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
	const [tasklist, setTask] = useState([
			{
					title: 'Humber',
					tasks: ['Task 1', 'Task 2', 'Task 3'],
					id: '1',
					show:true,
			},
			{
					title: 'MERN',
					tasks: ['Lab', 'Project', 'Quiz'],
					id: '2',
					show:true,
			},
			{
					title: 'Java',
					tasks: ['Group Discussion', 'Exam', 'Assignment'],
					id: '3',
					show:true,
			},
	]);
	let tasklength = 0;

	tasklist.forEach(
		(value) => {
				tasklength += value.tasks.length;
		}
	);

	const handleAddCategory = (title: string) => {
		setTask((prev) => [...prev, { title: title, tasks: [], id: uuidv4(),show:true }]);
	};
	const handleAddTask = (id: string, data: Array<string>) => {
		console.log(data)
		setTask((currentUpdatedState) =>
			currentUpdatedState.map((g) =>
			g.id === id
				? {
					...g,
					tasks:data,
				}
				: g
			)
		);
	};
	const hanldeHideTask  = (id: string) => {
		setTask((currentUpdatedState) =>
		currentUpdatedState.map((g) =>
			{
				if(id!==""){
					return g.id !== id
						? {
							...g,
							show:false,
						}
					: {
						...g,
						show:true,
					}
				}else{
					return {
						...g,
						show:true,
					}
				}
			}
			)
		);
	}
	const handleDeleteTask = (id:string,taskname:string,data: Array<string>) => {
		let newData = data.filter((t)=> t !== taskname);
		console.log(newData)
		setTask((currentUpdatedState) =>currentUpdatedState.map((g) =>{ return g.id === id?{...g,tasks:[...newData],}: g}));
	};

	let categories = tasklist.map(item => ({ title: item.title, id: item.id }));
	return (
		<TaskListContext.Provider 
		  value={{
			tasklist,
			handleAddCategory,
			handleAddTask,
			hanldeHideTask,
			handleDeleteTask,
		  }}
		>
		  <Router>
			<Navigation/>
			<Routes>
				<Route path="/" element={<p>This is Home Page.</p>} />
				<Route path="/task-list" element=
				{
					<div>
						<Header tasklength={tasklength} />
						<Filter categories={categories}/>
						{
							tasklist.map(
								(t) => (
									t.show && <Tasklist title={t.title} tasks={t.tasks} id={t.id} key={t.id.toString()} />
								)
							)
						}
					</div>
				}
				/>
				<Route path="/post" element=
				{<p>This is the Post page.</p>}
				/>
				<Route path="/todo" element=
				{<JsonAPI/>}
				/>
				<Route path="/about" element=
				{<p>This is the About page.</p>}
				/>
			</Routes>
		  </Router>
		</TaskListContext.Provider>
	  );
}

export default App;