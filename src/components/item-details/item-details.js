import React, { Component } from 'react'

import './item-details.css'
import ErrorButton from '../error-button'

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  )
}

export { Record }

export default class ItemDetails extends Component {
  state = {
    item: null,
    image: null,
  }

  componentDidMount() {
    this.updateItem()
  }

  componentDidUpdate(props) {
    if (
      this.props.itemId !== props.itemId ||
      this.props.getData !== props.getData ||
      this.props.getImageUrl !== props.getImageUrl
    ) {
      this.updateItem()
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props
    if (!itemId) {
      return
    }

    getData(itemId).then((item) => {
      this.setState({
        item,
        image: getImageUrl(itemId),
      })
    })
  }

  render() {
    const { item, image } = this.state
    if (!item) {
      return <span>Select a item from a list</span>
    }

    const { name } = item

    return (
      <div className="item-details card mt-0">
        <img className="item-image" src={image} alt={name} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush mb-1">
            {React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, { item })
            })}
          </ul>
          <ErrorButton />
        </div>
      </div>
    )
  }
}
