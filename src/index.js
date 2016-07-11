
import React from 'react'
import {render} from 'react-dom'

import "./style.less";

export default class App extends React.Component{
	render(){
		return <div> Hello Index.js </div>;
	}
}

render(<App />, document.getElementById("root"))