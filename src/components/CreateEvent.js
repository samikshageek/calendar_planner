import React from 'react'
import './event.css';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import SaveIcon from '@material-ui/icons/Save';
import { SketchPicker,CirclePicker } from 'react-color'
import SelectEventColor from "./SelectEventColor.js"
import ToolContainer from './toolContainer.js';

class CreateEvent extends React.Component{
	  constructor(props){
	     super(props)

	     this.state={
               date : this.props.date,
               showColorPicker:false,
               popup:true,
	     }
	     this.handleEventColorPicker = this.handleEventColorPicker.bind(this)
	  }
      
      handleEventColorPicker(){
         
      	 this.setState({
      	 	showColorPicker:true
      	 })

      }
      
	  render(){

	  	return(
              <div className="Event" >
                <div className="Event_inner" >
                  
                 <form className="root">
                   <div  style={{paddingLeft:"50px" , paddingRight :" 50px"}}>
                    <div >
                        <TextField id="standard-basic" label="Add Event" fullWidth/>
                    </div>   
                    <div >
                        <TextField id="standard-basic" label="Date and time" value={this.state.date} fullWidth />
                    </div>
                    <div >
                        <TextField id="standard-basic" label="Add guests"  fullWidth />
                    </div>
                    <div >
                        <TextField id="standard-basic" label="Add location"  fullWidth />
                    </div>
                    <div style={{paddingTop:"20px"}}>
                        <Button variant="contained" color="secondary" fullWidth> Add video Conferencing Option </Button>
                    </div>
                    <div style={{paddingTop:"20px"}} >
                        <TextField id="standard-basic" label="Add description or attachments"  fullWidth />
                    </div>
                    <div style={{display:"flex", flexDirection:"row" }}>
                        <div>
                            <TextField id="standard-basic" label="Email address"    />
                        </div>
                        <div style={{paddingLeft:"30px",paddingTop:"20px"}}>
                             <SelectEventColor />
                             <Button variant="contained" color="secondary" onClick={this.handleEventColorPicker} Open simple dialog> Event Color  </Button>
                            {this.state.showColorPicker ? <CirclePicker /> : null}
                        </div>
                    </div>
                    <div>
                       
                    </div>
                  </div> 
                 </form>

                 </div> 
                 
                 <div  class="buttonStyle" style={{paddingTop:"50px" , display:"flex", flexDirection:"row", justifyContent: "flex-end", 
                  paddingRight:"20px", }}>
                     <div>
                        <Button variant="contained" color="green" > More Options </Button>
                      </div>
                      <div style={{paddingLeft:"50px"}}> 
                         <Button variant="contained" color="secondary"   startIcon={<SaveIcon />}>  Save  </Button>
                      </div>
                      <div style={{paddingLeft:"50px"}}> 
                         <Button variant="contained" color="primary"  onClick={() => console.log("Radhe Radhe")}> Close</Button>
                      </div>
                 </div>
               

           </div>  
	  		);
	  }

}
export default CreateEvent;