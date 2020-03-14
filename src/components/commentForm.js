import React,{Component} from 'react';
import SweetAlert from 'sweetalert2-react';
export default class CommenForm extends Component{
    state = {
        name:"",
        email:"",
        comment:"",
        ts:"",
        show:false
    }
    initialState = {
        name:"",
        email:"",
        comment:"",
        ts:""
        
    }
   
    handleSubmit = (event) =>{
        this.setState({show:true});
        let arr = localStorage.getItem("commentArray");
        let temp=[];
        if(arr) temp= JSON.parse(arr);
        let obj = JSON.parse(JSON.stringify(this.state));
        obj.ts = new Date().toString().split("GMT")[0];
        temp.unshift(obj);
        if(temp.length > 5) temp.length=5;
        localStorage.setItem("commentArray",JSON.stringify(temp));
        this.setState(this.initialState);
    }
    handleInputChange=(event)=>{
        this.setState({[event.target.id]: event.target.value});
    }
    render(){
      
        return(
            <div className="container">
            <SweetAlert
                show={this.state.show}
                title=""
                text="Thanks for your feedback!"
                onConfirm={() => this.setState({ show: false })}
            />
                <div className="card">
                    <div className="card-header">
                        Talk To Us
                    </div>
                    <div className="card-body">
                       <div className="row">
                           <div className="col-md-6">
                               <input type="text" className="form-control mb-1" id="name" value={this.state.name} placeholder="Name" onChange={this.handleInputChange}></input>
                               <input type="text" className="form-control mb-1" id="email" value={this.state.email} placeholder="Email id" onChange={this.handleInputChange}></input>
                               <textarea  className="form-control mb-1" id="comment" value={this.state.comment} placeholder="Comment" onChange={this.handleInputChange}></textarea>

                           </div>
                           <div className="col-md-6 btn-holder">
                                <input type="button" className="btn btn-success" value="Submit" onClick={this.handleSubmit} disabled={!this.state.name || !this.state.email||!this.state.comment}></input>
                           </div>
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}