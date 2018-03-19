
import React from 'react'
import {render} from 'react-dom'

import "./style.less";

export default class App extends React.Component{
	render(){
		return (
			<div className="page">
				<h1 className="h1">Hello main.js</h1>
			</div>
		)
	}
}

render(<App />, document.getElementById("root"))