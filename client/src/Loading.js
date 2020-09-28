import { faTruckLoading } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Loading({ fontSize }) {
  return (
    <div>
      <FontAwesomeIcon icon={faTruckLoading} fontSize={fontSize || 15} />
    </div>
  )
}
