import React, { Component } from "react";
import axios from 'axios';
 import  './additem.css'

export class AddItem extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title:'',
            description:'' 
        }
    }

    addSubmit=(e)=>{
        e.preventDefault();
        const {title,description}=this.state;
        console.log(this.state.title +" "+ this.state.description);
        axios.post(`http://localhost:5000/api/addItem`, { title:title,
    description:description })
        .then(res => {
          console.log(res.data.message);
        }).catch(err=>{
            console.log(err);
        })
    }

    handleChange=(e)=>{
        if(e.target.name==='title'){
            this.setState({
                title:e.target.value
            })
        }else{
            this.setState({
                description:e.target.value
            })
        }
        
    }
    
  render() {
    return (<>
 <form name="formadd"  onSubmit={this.addSubmit}>
  <label>
    <p className="title-p">Title : 
    <input className="input" type="text" placeholder="add title" value={this.state.title} onChange={this.handleChange} name="title" /></p>
  </label>
  <label>
   <p className="title-p">Description : </p>
    <textarea  className="input" rows="15" cols="40" placeholder="add description" value={this.state.description} onChange={this.handleChange} name="description" />
  </label>
  <br/>
  <input className='b' type="submit" value="Submit" />
</form>
</>
    );
  }
}

export default AddItem;