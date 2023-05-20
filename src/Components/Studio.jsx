
import React from 'react'
import Recommended from './Recommended'
import Trending from './Trending'


const Studio = () => {

  return (
    <section>
      <article>
        <div>
          <Trending/>
          <Recommended/>
        </div>
      </article>
    </section>
  )
}

export default Studio