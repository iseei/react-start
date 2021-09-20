import React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'

export const Demo = () => {
  const history = useHistory();
  const match = useRouteMatch();
  return (
    <div>
      demo page math： {match.path}
    </div>
  )
}
