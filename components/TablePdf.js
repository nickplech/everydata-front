import React from 'react'
import styled from 'styled-components'
import { CsvToHtmlTable } from 'react-csv-to-table'

const CssWrap = styled.div`
  display: flex;
  flex-flow: column;
  /* border: 2px solid grey; */
  width: 100%;

  tr {
    font-size: 12px;
    padding: 5px 5px;
    &:hover {
      background: rgba(20, 110, 240, 0.4);
    }
    &:nth-child(2n + 0) {
      background: rgba(20, 110, 240, 0.2);
      &:hover {
        background: rgba(20, 110, 240, 0.4);
      }
    }
  }
`
const TablePdf = props => {
  return (
    props.file && (
      <CssWrap>
        <p>{props.file}</p>
        <CsvToHtmlTable data={props.file || sampleData} csvDelimiter="," />
      </CssWrap>
    )
  )
}

export default TablePdf
