import { useRouter } from 'next/router'
import React from 'react'

const PidComponent = () => {
  const router = useRouter()
  const {pid} = router.query;
  
  return (
    <div>the content of pid is : {pid}</div>
  )
}

export default PidComponent