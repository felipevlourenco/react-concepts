import React, { useEffect, useRef, useState } from 'react'
import useHover from '../hooks/useHover'

const URL = 'https://randomuser.me/api'

const Fetch = () => {
  const [nodeRef, hover] = useHover()
  const [data, setData] = useState({})
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)

  const loadData = useRef(() => {})

  loadData.current = async () => {
    try {
      const response = await fetch(`${URL}?page=${page}`)
      const body = await response.json()
      setData(body)
      setUsers([...users, ...body.results])
      setPage(page + 1)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadData.current()
  }, [])

  return (
    <div>
      <div
        ref={nodeRef}
        style={{
          backgroundColor: hover ? 'green' : 'white'
        }}
      >
        {JSON.stringify(data, null, 2)}
      </div>
      ---------------------------------------
      <div>
        {users.map(user => (
          <div key={user.email}>
            <img src={user.picture.thumbnail} alt="user img" />
            <span>{`${user.name.first} ${user.name.last}`}</span>
          </div>
        ))}
      </div>
      <button onClick={loadData.current}>Load More</button>
    </div>
  )
}

export default Fetch
