import React from 'react'
import Contactform from './componets/Contactform'
import Imagegrid from './componets/ImageGrid'
import Mapsection from './componets/Mapsection'
import Textimage from './componets/Textimage'

export default function index() {
  return (
    <div>
      <Imagegrid />
      <Textimage />
      <Mapsection />
      <Contactform />
    </div>
  )
}
