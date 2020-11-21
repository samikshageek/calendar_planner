import React from "react"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tasks from './Tasks.js'



class CardInfo extends React.Component{
	constructor(props){
		super(props)

	    this.state={
            tasks: Tasks
	    }
     }
      
      

	render(){
		return(  
			<div style={{paddingLeft:"200px" , width:"30%", elevation:"20", borderRadius:"30"}}>
			  {this.state.tasks.map(Listitem =>  
			  	<div style={{paddingTop:"20px"}}>
			  	   
			  	<Card style={{backgroundColor:Listitem.color}} >
                      <CardContent>
                         <Typography variant="h5" component="h2">{Listitem.task} </Typography>
                         <Typography className="title" color="textSecondary" gutterBottom> Total tasks: {Listitem.total }</Typography>
                         
                       </CardContent>
                     </Card>
			  	</div>
			  )}
                  
			  
            </div>
			         )
	}
}
export default CardInfo;