import React from "react";

export default class FetchLocation extends React.Component {
    
    state = {
        loading: true,
        person: null
    };
    

    
    
    render(){
        return(
            <div>
                {this.state.loading || !this.state.person ? (
                <div> loading...</div>
                 ):( 
                     <div>
                 
                 </div>
                 )}
            </div>
            
        );
            
        
    }
}
