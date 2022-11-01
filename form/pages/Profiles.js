import React from 'react'
import { useParams } from 'react-router-dom'

export default function Profiles() {
    let {userName} = useParams();
  return (
    <div>
      Username : {userName}
    </div>
  )
}
