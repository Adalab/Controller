import React from 'react';
import ItemBar from './ItemBar';
import '../stylesheet/BarList.css';

class BarList extends React.Component {
  render() {
    if (this.props.establishments.data !== undefined) {
      return (
        <div className="div__barList">
          <div className="barLists">
            <ul>
              {this.props.establishments.data
                .map((item, index) => {
                  return (
                    <li className="barLists_element" key={index} onClick={() => this.props.getDetails(item.establishmentId)}>
                      <ItemBar item={item} selectedEstablishment={this.props.selectedEstablishment} />
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
      );
    } else {
      return <p>No hay contenido</p>
    }
  }
}

export default BarList;