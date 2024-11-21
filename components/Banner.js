import React from 'react'
import { Gallery } from './Gallery'
const Banner = () => {
  return (
    <main>
        <section>
            <div>
                <h1>Care</h1>
                <h1>Eats</h1>
                <h1>Get fit</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className='hidden'> Download our App</button>
            </div>
            <div className='hidden'>
                <form>
                    <h1>form</h1>
                </form>
            </div>
        </section>
        <section>
              <Gallery />
        </section>
        <section>
            <button className='md:hidden'>Download our App</button>
        </section>
    </main>
  )
}

export default Banner