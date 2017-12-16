import React,{Component} from 'react';
import {connect} from 'react-redux'
import {loadingData} from '../actions'

class ListExistingMembers extends Component{

  componentWillMount(){
     console.log("initial data load call invoked ....")
     this.props.loadInitialData()
  }  

  render(){
    var roomMates = this.props.roomMatesList ? this.props.roomMatesList.map((element,i)=>{
      return (<li key={i}>
        <div><span className="name-head">Name : </span> <span className="name-val">{element.name}</span></div>
        <div><span className="name-head">Age : </span> <span className="name-val">{element.age}</span></div>
      </li>)
    }) : "No Data Found"
    console.log("rendered with data : \n",roomMates)
    return (
      <div>
        <ul>{roomMates}</ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log("data coming from store....\n",state)
  return { roomMatesList : state.memberList.roomMatesList}
}

function mapDispatchToProps(dispatch){
    console.log("actions are to be mapped to dispatch()....")
    return {
        loadInitialData : ()=> {
            dispatch(loadingData())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListExistingMembers)