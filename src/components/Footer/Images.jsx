import React from 'react'
import image from './facebook.png'
import image2 from './twitter.png'

export default function Images() {
  return (
    <div class="images">
                <div>
                    <img src={image} />
                </div>
                <div>
                    <img src={image2} />
                </div>
                <div>
                    <img src={image} />
                </div>
            </div>
  )
}
