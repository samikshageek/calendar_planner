import React from 'react';
import Popup from 'reactjs-popup';
import './event.css';
import 'reactjs-popup/dist/index.css';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save';
import { SketchPicker,CirclePicker } from 'react-color'
import SelectEventColor from "./SelectEventColor.js"
import ColorArray from './ColorArray.js'

 
 class CreateEventPopup extends React.Component{
 	 constructor(props){
	     super(props)

	     this.state={
               date : this.props.date,
               showColorPicker:false,
               popup:true,
               popupEnable:false,
               eventDetails:"",
               eventName:[]
	     }
	     this.handleEventColorPicker = this.handleEventColorPicker.bind(this)
	     this.handleAddEvent= this.handleAddEvent.bind(this)
	  }
      
      handleEventColorPicker(){
         
      	 this.setState({
      	 	showColorPicker:true
      	 })

      }

      handleAddEvent(event){
      	console.log("ok")
      	this.setState({
      		eventDetails : event.target.value
      	})
      	console.log(event.target.value)
      }
    render(){   
 	return(
  <Popup trigger={<button style={{backgroundColor:"Blue" , height:"30%" , color:"white", borderRadius:20, elevation:20}} > Trigger to add Event</button>} position="right center">
   {close =>(
      <div className="Event" >
                <div className="Event_inner" >
                  
                 <form className="root">
                   <div  style={{paddingLeft:"50px" , paddingRight :" 50px"}}>
                    <div >
                        <TextField id="standard-basic" onChange={() => this.handleAddEvent} label="Add Event" fullWidth/>
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
                        <Button variant="contained" color="green" onClick={()=> this.setState({popupEnable:true})}> More Options </Button>
                      </div>
                      <div style={{paddingLeft:"50px"}}> 
                         <Button variant="contained" color="secondary"   startIcon={<SaveIcon />}>  Save  </Button>
                      </div>
                      <div style={{paddingLeft:"50px"}}> 
                         <Button variant="contained" color="primary"  
                                 onClick={() => {console.log('modal closed ');
                                                 close();
                                                 }} > Close</Button>

                        
                      </div>
                 </div>
               {this.state.popupEnable?null : null}

           </div>  
   )}
  </Popup>

)}
}
export default CreateEventPopup;