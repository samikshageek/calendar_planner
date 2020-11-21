import React ,{useState, useEffect}from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Calendar from 'react-calendar'
import CreateEvent from './CreateEvent.js'
import CreateEventPopup from './CreateEventPopup'
import CardInfo from './CardInfo.js'


function ToolContainer(props){
	const [popupEnable , setPopupEnable] = useState('false')
    const [date, setDate] = useState(new Date());
    console.log("Received")
    console.log(props.name)
    const onChange= date =>{
    	setDate(date)
    }
    
   
	return(
     <div style={{backgroundColor:"purple"}}>
      <div style={{flexDirection:'row'}}>
            
       <div style={{display: "flex" ,flexDirection:"row"}}>
           <div  style={{paddingLeft:'200px', elevation:20 , width:"30%"  ,}}>
               <div style={{backgroundColor:"red"}}>
                   <Calendar color="red"  value={date} onChange={onChange}/>

               </div >
           </div>
          
          <div style={{ paddingLeft : "300px" }}>
              <button  style={{backgroundColor:"green" , height:"30%" , color:"white" , elevation:20, borderRadius:30}} onClick={() => setPopupEnable('true')}> New Event ? </button>
             
               { popupEnable === 'true' ? <CreateEventPopup date={date.toString()}/> : null }
               
          </div>
         </div>
            <h4>  {date.toString()} </h4>
            
       </div>
       <div >
         <CardInfo />
        </div>
     </div>
      
	)
}
export default ToolContainer;