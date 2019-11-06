import React from 'react';

class RemoveBuilding extends React.Component {
    
    render() {

        const { selectedBuilding } = this.props;

        if(selectedBuilding != null){
            return(
                <div>
                    <h1>Remove Building</h1>
                    <button type="submit" className="btn btn-primary" onClick={() => this.props.removeBuilding(selectedBuilding.id)}> Remove Selected Building </button>
                </div>
            );  
        }
    }
}
export default RemoveBuilding;