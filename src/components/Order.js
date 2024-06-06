import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img} alt="Фото товара"/>
        <h2>{this.props.item.title}</h2>
        <b>{Intl.NumberFormat('ru-RU', {minimumFractionDigits: 2}).format(Number.parseFloat(this.props.item.price))}&#x20bd;</b>
        <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)} />
      </div>
    )
  }
}

export default Order
