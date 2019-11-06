import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      buildingData: this.props.data
    }
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    const selectedBuilding = this.state.buildingData.filter(building => building.id === id)[0];
    console.log("Building: " + JSON.stringify(selectedBuilding));
    this.setState({selectedBuilding: selectedBuilding});
  }

  addBuilding = (building) => {
    this.setState({
      buildingData: building
    });
  }

  removeBuilding = (id) => {
    this.setState({
      buildingData: this.state.buildingData.filter(building => building.id !== id)
    });
  }

  render() {
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>
        <Search
          filterText = {this.state.filterText}
          filterUpdate = {this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.buildingData}
                    filterText = {this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
              selectedBuilding = {this.state.selectedBuilding} 
              data={this.state.buildingData}
              />
              <AddBuilding
              data={this.state.buildingData}
              addBuilding={this.addBuilding}
              />
              <RemoveBuilding
              selectedBuilding = {this.state.selectedBuilding}
              data={this.state.buildingData}
              removeBuilding={this.removeBuilding}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
