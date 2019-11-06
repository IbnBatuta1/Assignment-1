import React from 'react';

class ViewBuilding extends React.Component {
	render() {

		const { selectedBuilding } = this.props;
		
		if(selectedBuilding){
			if(selectedBuilding.coordinates){
				var coordinates = selectedBuilding.coordinates.latitude + "," + selectedBuilding.coordinates.longitude;
				var link = "https://www.google.com/maps/search/?api=1&query=" + coordinates;
			}
		}
		if(selectedBuilding != null){
			return(
				<div>
					<div className="card">
						<div className="card-body">
							<h1>Listing Info</h1>
							<h4 className="card-title">{selectedBuilding.code} <p></p> {selectedBuilding.name} </h4>
							<p className="card-text">Address: {selectedBuilding.address ? selectedBuilding.address : 'Please select a Listing for an address.'}</p>
							<a className="btn btn-primary" rel="noopener noreferrer" href={link} target="_BLANK">Open in Google Maps</a>
						</div>
					</div>
				</div>
			);
		}
	}
}
export default ViewBuilding;
