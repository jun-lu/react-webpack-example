import Hello from './mods/Hello'
import React from 'react'
import {render} from 'react-dom'

import "./mods/css.less";

export default class CustomComponent extends React.Component{
	render(){
		return (<div className="custom-component">{Hello} index</div>);
	}
}

render(<CustomComponent />, document.getElementById("abc"))