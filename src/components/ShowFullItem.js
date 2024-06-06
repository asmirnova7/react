import React, { Component } from 'react'

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div>
            <img src={"./img/" + this.props.item.img} alt="Фото товара" onClick={() => this.props.onShowItem()} />
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.desc}</p>
            <b>{new Intl.NumberFormat('ru-RU', {minimumFractionDigits: 2}).format(Number.parseFloat(this.props.item.price))}&#x20bd;</b>
            <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
        </div>
      </div>
    )
  }
}

export default ShowFullItem