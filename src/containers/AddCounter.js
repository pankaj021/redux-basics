import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCounter } from '../actions';
import { bindActionCreators } from 'redux';

class AddCounter extends Component {
  constructor(props) {
        super(props);
   }
   render() {
     debugger
     return (
           <div className="container">
            <form>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-primary" 
                    onClick={(e) => {e.preventDefault();this.props.dispatch({type: "ADD_COUNTER", payload: 1})}}>
                      Add
                  </button>
                </div>
              </div>
            </form>
            </div>
     )
   }
}

function mapDispatchToProps(state) {
  console.log("state=>>>>>>>>>>>>>>>>",state)
  return { actions: bindActionCreators({type: "ADD_COUNTER", payload: 1}, state) }
}
export default connect(mapDispatchToProps)(AddCounter);