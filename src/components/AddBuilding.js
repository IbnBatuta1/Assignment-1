import React from 'react';

class AddBuilding extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            code: '',
            address:'',
            longitude:'',
            latitude:''
        };
    }
    
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    const newData = this.state;
    // Terminal Check
    console.log("Final Data is:", newData);
    // Send to addBuilding in App.js to add data to data.js
    const addedBuilding ={
      id: this.props.data.length + 1,
      code: newData.code,
      name: newData.name,
      coordinates: {
        latitude: newData.latitude,
        longitude: newData.longitude
      },
      address: newData.address
    }
    this.props.addBuilding(this.props.data.concat([addedBuilding]))
  }

	render() {
		return(
      <div>
        <h1>Add Building</h1>
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Building Name</label>
            <input type="text" className="form-control" name="name" value={this.state.name} placeholder="Full Building Name Here" onChange={this.handleChange} ref={input => this.name = input}/>
          </div>
          <div className="form-group">
            <label htmlFor="name">Building Code</label>
            <input type="text" className="form-control" name="code" value={this.state.code} placeholder="Building Code Here" onChange={this.handleChange} ref={input => this.code = input}/>
          </div>
          <div className="form-group">
            <label htmlFor="name">Building Address</label>
            <input type="text" className="form-control" name="address" value={this.state.address} placeholder="Building Address Here" onChange={this.handleChange} ref={input => this.address = input}/>
          </div>
          <div className="form-group">
            <label htmlFor="name">Latitude<p></p></label>
            <input type="number" className="form-control" name="latitude" value={this.state.latitude} placeholder="Latitude Here" onChange={this.handleChange} ref={input => this.latitude = input}/>
          </div>
          <div className="form-group">
            <label htmlFor="name"><p></p> Longitude<p></p></label>
            <input type="number" className="form-control" name="longitude" value={this.state.longitude} placeholder="Longitude Here" onChange={this.handleChange} ref={input => this.longitude = input}/>
          </div>
        <button type="submit" className="btn btn-primary"> Add Building </button>
        </form>
      </div>
    );
	}
}
export default AddBuilding;