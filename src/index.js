
import React from 'react'
import {render} from 'react-dom'

import "./style.less";

function ajax(){
	return new Promise((reslove, reject)=>{
		setTimeout(()=>{
			reslove("Hello async await")
		}, 2000)
	})
}

export default class App extends React.Component{
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
			Hello Index.js 
			<div>
				<input  onClick={this.asyncFunc.bind(this)} type="button" value="点击发送请求，使用async/await语法" />
				<div>
					{
						this.state.msg
					}
				</div>
			</div>
		</div>;
	}
}

render(<App />, document.getElementById("root"))