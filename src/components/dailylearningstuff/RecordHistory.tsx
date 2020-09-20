import React from 'react'
import { useDispatch } from 'react-redux'

import { deleteRecordItem } from '../../reducers/recordReducer'

import Div from '../../styledComponents/Div'
import { Li, A, Span, Img } from '../../styledComponents/Img'

import { Record, Item } from '../../types'

const RecordUnitItemDetail: React.FC<{ item: Item; id: string }> = ({ item, id }) => {
  const dispatch = useDispatch()

  const recordUnitId = id

  const handleDeleteItem = () => {
    if (window.confirm('Are you sure you want to delete?')) {
      dispatch(deleteRecordItem(recordUnitId, item._id))
    }
  }

  return (
    <ul>
      <Li margin="10px 0">
        <A textDecoration="none" target="blank" href={item.url} color="black">
          {/* <Div display="flex" justifyContent="space-between"> */}
          <Span>{item.memo}</Span>
        </A>
        <Img
          onClick={handleDeleteItem}
          src="https://codesandbox.io/api/v1/sandboxes/4ynhw/fs/src/components/dailylearningstuff/delete.svg"
          alt="delete"
          width="13px"
          margin="0 0 0 auto"
          // position="absolute"
          // top="2px"
          // right="13px"
        />
        {/* </Div> */}
      </Li>
    </ul>
  )
}

const RecordUnit: React.FC<{ record: Record }> = ({ record }) => {
  return (
    <Div
      position="relative"
      height="100%"
      minWidth="320px"
      padding="10px"
      boxSizing="content-box"
      borderRight="2px solid black"
    >
      {record.date}
      <hr />
      {record.items.map((item: Item) => (
        <RecordUnitItemDetail item={item} id={record.id} />
      ))}
    </Div>
  )
}

const Records: React.FC<{ records: Record[] }> = ({ records }) => {
  return (
    <Div display="flex" height="100%" position="absolute">
      {records.map((record) => (
        <RecordUnit record={record} />
      ))}
    </Div>
  )
}

const RecordHistory: React.FC<{ records: Record[] }> = ({ records }) => {
  return (
    <Div position="absolute" width="100%" height="40%" border="2px solid black" top="65%" overflow="auto">
      <Records records={records} />
    </Div>
  )
}

export default RecordHistory