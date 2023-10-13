import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getHistory } from '../Services/allAPI'

function WatchHistory() {
  const [history, setHistory] = useState([])

  const getWatchHistory = async () => {
    //make api call
    const { data } = await getHistory()
    setHistory(data);
  }

  useEffect(() => {
    getWatchHistory()
  }, [])

  const handleDeleteHistory = async(id)=>{
    // api call
    await deleteHistory(id)
    // get all history after deletion
    getWatchHistory()
  }

  return (
    <>
      <div className="d-flex justify-content-between mt-5 mb-5 container align-items-center">
        <h3>Watch History</h3>
        <Link to={'/home'} style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}> <i className='fa-solid fa-arrow-left fa-beat'></i> Back to Home  </Link>
      </div>
      <div className="container mt-5 mb-5">
        <table className='table rounded shadow'>
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time Stamp</th>
              <th>*</th>
            </tr>
          </thead>
          <tbody>
            {
              history.length > 0 ?
                history.map((item, index) => (
                  <tr>
                    <td>{index+1}</td>
                    <td>{item?.caption}</td>
                    <td> <a href={item?.embbedLink} target='_blank'>{item?.embbedLink}</a> </td>
                    <td>{item?.timeStamp}</td>
                    <td><button onClick={()=>handleDeleteHistory(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
                  </tr>
                ))
                : <p>No data to display</p>
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default WatchHistory