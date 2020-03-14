import React,{Component} from 'react';
export default class CommentList extends Component{
    state = {
        fake:""
    }
    componentDidMount(){
        this.interval = setInterval(()=>{
            this.setState({fake:Date.now()});
        },1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render(){
        let temp=[];
        let comments = localStorage.getItem("commentArray");
        temp = (comments) ? JSON.parse(comments) : temp;
        
        return(
            <div className="container">
                <div className="card list">
                    <div className="card-header">
                        Recent Comments
                    </div>
                    <div className="card-body">
                         
                           { (temp.length) ? temp.map((value,index)=>{
                                return <React.Fragment key={index}>
                            <h6 className="card-title" >{value.name}<span className="commentTime">commented at {value.ts}</span></h6>
                            <p className="card-text">{value.comment}</p>
                                </React.Fragment>
                            }) : <h6>No Comments!</h6>
                        }
                    </div>
                </div>
            </div>
        )
    }
}