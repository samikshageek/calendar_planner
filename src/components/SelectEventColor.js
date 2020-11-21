import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Button from '@material-ui/core/Button';
import ColorArray from './ColorArray.js'

class SelectEventColor extends React.Component{
	constructor(props){
	  super(props)
    this.state={
      options : ColorArray,
      tasks:['Plumbing', 'Flooring', 'Brick work' , 'Plantation', 'Engineering'],
      showColorPicker:false,
    }
	}
 
	render(){
	   return(
               <div>
                   
                  <Dropdown options={this.state.options.map(ListItem => ListItem.color)} onChange={this._onSelect}  
                            placeholder="Pick Event Color "  />;

                  <Dropdown options={this.state.tasks} onChange={this._onSelect} placeholder="Select Task" />
               </div>
             
	   )
	}
}

export default SelectEventColor;