
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

class Index extends React.Component{
	constructor(props){
		super(props)
		this.state = {}
	}
	async asyncFunc(){

		this.setState({
			msg:"请求中..."
		})

		//异步请求
		var str = await ajax()
		this.setState({
			msg:str
		})
	}

	render(){
		return <div> 
			Hello Index 
			<div>
				<input  onClick={this.asyncFunc.bind(this)} type="button" value="点击发送请求，使用async/await语法" />
				<div>
					{
						this.state.msg
					}
				</div>
				<div>
					<Link to="/">首页</Link><br/>
					<Link to="/page2">第二页</Link>
				</div>
			</div>
		</div>;
	}
}

class Page2 extends React.Component{
	render(){
		return <div> 
			Hello page2
			<div>
				
				<div>
					<Link to="/">首页</Link><br/>
					<Link to="/page2">第二页</Link>
				</div>
			</div>
		</div>;
	}
}


class App extends React.Component{

    constructor(props) {
        super(props)
    }
    render() {
        return (
        	<Router history={history}>
            <Route path="/" component={Index}></Route>
            <Route path="/page2" component={Page2}></Route>
					</Router>
        )

    }
}

render(<App />, document.getElementById("root"))