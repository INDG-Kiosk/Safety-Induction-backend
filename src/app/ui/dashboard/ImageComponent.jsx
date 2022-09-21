import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import React, {useEffect, useState} from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css' // This only needs to be imported once in your app

export default function ImageComponent(props) {
  const [state, setState] = useState({isOpen: false, photoIndex: 0})
  const handleShowDialog = () => {
    setState({isOpen: !state.isOpen})
    console.log('cliked')
  }

  return (
    <div>
      <img
        width='32px'
        onClick={(r) => handleShowDialog()}
        src={process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/ProfileImage/' + props.image1}
      />
      {state.isOpen && (
        <Lightbox
          mainSrc={process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/ProfileImage/' + props.image1}
          onCloseRequest={() => setState({isOpen: false})}
        />
      )}
    </div>
  )
}
