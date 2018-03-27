import React from 'react'

//一个简单的loading
export default class Loading extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			loading:false
		}
	}
	onStart(){
		this.setState({
			loading:true
		})
	}
	onComplete(){
		this.setState({
			loading:false
		})
	}

	render(){
		return this.state.loading ? <span>加载中...</span> : null
	}
}