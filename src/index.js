
import React from 'react'
import {render} from 'react-dom'

import {Router, Route, IndexRoute, IndexRedirect, browserHistory,hashHistory,useRouterHistory,Link } from 'react-router'

import {createHashHistory} from 'history'

const history = useRouterHistory(createHashHistory)()

import "./style.less";

function ajax(){
	return new Promise((reslove, reject)=>{
		setTimeout(()=>{
			reslove("Hello async await")
		}, 2000)
	})
}

class Page extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			text:"click test async await "
		}
	}
	async onClickBtn(){
		
		this.setState({
			text:"loading ajax"
		});
		
		let text = await ajax();
		
		this.setState({
			text:text
		})
	}
	render(){
		let {title} = this.props;
		let {text} = this.state;

		return (
			<div className="page">
				<h1 className="h1">Hello {title}</h1>
				<div>
					<a href="#/">click to page1</a> <br/>
					<a href="#/page2">click to page2</a> <br/>
					<button onClick={this.onClickBtn.bind(this)} >{text}</button>
				</div>
			</div>
		)
	}
}


class Page1 extends React.Component{
	render(){
		return <Page title="index.js Page1"></Page>
	}
}


class Page2 extends React.Component{
	render(){
		return <Page title="index.js Page2"></Page>
	}
}


class App extends React.Component{

    constructor(props) {
        super(props)
    }
    render() {
			return (
				<Router history={history}>
					<Route path="/" component={Page1}></Route>
					<Route path="/page2" component={Page2}></Route>
				</Router>
			)
    }
}

render(<App />, document.getElementById("root"))