import React, { Component } from 'react';
import '../styles/List.css';

// NOTE: mapping functionality and list-items done in same component.
class List extends Component {

  // Uncomment the code in render() to see this list appear.
  createListItem() {
    return this.props.cats.map(cat => (
      <div className="data-tile" key={cat.name}>
        <div>{cat.name}</div>
        <div>{cat.owner}</div>
        <div className="cat-photo" style={{ backgroundImage: `url(${cat.image})` }} />
      </div> 
    ));
  }

  render() {
    return (
      <div style={{border: '1px solid black'}}>
        Data Tiles
        <br/><br/>
        <button onClick={ () => this.props.testGet() }>test get</button>
        <br/><br/>        
        {JSON.stringify(this.props.async)}
        <br/><br/>       
        {/*{ this.createListItem() }*/}
      </div>
    )
  } 
}

export default List;
