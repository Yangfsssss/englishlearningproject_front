import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home'
import LoginForm from './components/user/LoginForm'

import { Div, GlobalStyle } from './styledComponents/General'

// import { initUser } from "./reducers/userReducer";
import { initializeRecords } from './reducers/recordReducer'
import { initializeQAUnits } from './reducers/QAUnitReducer'
import { initializeSections } from './reducers/sectionReducer'

import { Section, QAUnit, Record } from './types'

import Upload from './components/upload/upload'

interface RootState {
	users: {
		data: string
	}
	sections: Section[]
	QAUnits: QAUnit[]
	records: Record[]
}

const App: React.FC = () => {
	// const [currentUser, setCurrentUser] = useState<string | null>(null);

	// const dispatch = useDispatch();

	// useEffect(() => {
	//   dispatch(initializeRecords());
	//   dispatch(initializeQAUnits());
	//   dispatch(initializeSections());
	// }, [dispatch]);

	// const state = useSelector((state: RootState) => state);

	// const users = state.users;
	// let sections = state.sections;
	// let QAUnits = state.QAUnits;
	// let records = state.records;

	// const dataStatus = {
	//   sections: state.sections.length > 1 ? true : false,
	//   QAUnits: state.QAUnits.length > 1 ? true : false,
	//   records: state.records.length > 1 ? true : false,
	// };

	// console.log(users);
	// console.log(dataStatus);
	// console.log(sections);
	// console.log(QAUnits);
	// console.log(records);
	// if (users && users.data !== "Yang") sections = QAUnits = records = [];
	const Countdown = () => {
		let [count, setCount] = useState(60)

		useEffect(() => {
			let timer = setInterval(() => {
				setCount(count--)
			}, 1000)

			return () => {
				if (count === 0) {
					clearInterval(timer)
				}
			}
		}, [count])

		return <div>{count}</div>
	}

	return (
		<div>
			<Countdown />
			<Upload />
		</div>
		// <Div className="App">
		//   <GlobalStyle />

		//   <Router>
		//     <Route exact path="/">
		//       <LoginForm setCurrentUser={setCurrentUser} />
		//     </Route>

		//     <Route path="/home">
		//       <Home
		//         currentUser={currentUser}
		//         sections={sections}
		//         records={records}
		//         QAUnits={QAUnits}
		//         dataStatus={dataStatus}
		//       />
		//     </Route>
		//   </Router>
		// </Div>
	)
}

export default App
