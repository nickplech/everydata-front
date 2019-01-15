import React from 'react'
import styled from 'styled-components'

const StyledTable = styled.table`
  position: relative;
  display: flex;
  width: 100%;
  margin-top: 30px;
  border-spacing: 0 0px;
`

const Hour = styled.th`
  border-bottom: 1px solid lightgrey;
  border-left: 1px solid lightgrey;
  text-align: left;
  padding: 4px 8px;
  font-size: 12px;
`

const BorderlessHour = styled.th`
  border-bottom: none;
  text-align: left;
  padding: 4px 8px;
  font-size: 12px;
`
const BorderlessSub = styled.td`
  border-bottom: none;
  text-align: left;
  padding: 4px 8px;
  font-size: 12px;
`
const Sub = styled.td`
  border-bottom: 1px solid lightgrey;
  border-left: 1px solid lightgrey;
  text-align: left;
  padding: 4px 8px;
  font-size: 12px;
`

const HourRow = props => {
  const category = props.category
  return (
    <tr>
      <BorderlessHour>{category}</BorderlessHour>
      <Hour>{category}</Hour>
    </tr>
  )
}

const ProductRow = props => {
  const product = props.product
  const name = product.booked ? (
    <span style={{ color: 'lightgrey' }}>{product.name}</span>
  ) : (
    product.name
  )

  return (
    <tr>
      <BorderlessSub>{name}</BorderlessSub>
      <Sub>{name}</Sub>
    </tr>
  )
}

class ProductTable extends React.Component {
  render() {
    const rows = []
    let lastCategory = null

    this.props.products.map(product => {
      if (product.category !== lastCategory) {
        rows.push(
          <HourRow category={product.category} key={product.category} />,
        )
      }
      rows.push(<ProductRow product={product} key={product.id} />)
      lastCategory = product.category
    })

    return (
      <StyledTable>
        <tbody>{rows}</tbody>
      </StyledTable>
    )
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      booked: false,
    }
  }
  render() {
    return <ProductTable products={this.props.products} />
  }
}

export default FilterableProductTable
