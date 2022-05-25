import React from 'react'
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'
import image5 from './image5.jpg'
import image6 from './image6.jpg'
import image7 from './gestion-des-dechets.jpg'

export default function PmeRecyclage() {
  return (
    <div>
      <div className="separateur-2 d-inline-flex">
    <h1>Entreprises de recyclages</h1>
    <hr/>
    </div>
      <div className="contenu-3 d-inline-flex">
        <section className="contenu-3-pme-1">
            <article>
                <img src={image1} />
            </article>
            <aside>
            <div className='pme-info d-inline-flex'>
              <h2 className='pme-nom'>SODIA PLAST</h2>
              <h2 className="pme-commune">Dixinn</h2>
              </div>
              <h2 className='activite'>Recyclage</h2>
              <button className="">Plus de details</button>
            </aside>
        </section>
        <section className="contenu-3-pme-2">
          <article>
              <img src={image2} />
          </article>
          <aside>
          <div className='pme-info d-inline-flex'>
              <h2 className='pme-nom'>SODIA PLAST</h2>
              <h2 className="pme-commune">Dixinn</h2>
              </div>
              <h2 className='activite'>Recyclage</h2>
              <button className="">Plus de details</button>
          </aside>
        </section>
        <section className="contenu-3-pme-3">
          <article>
              <img src={image3} />
          </article>
          <aside>
          <div className='pme-info d-inline-flex'>
              <h2 className='pme-nom'>SODIA PLAST</h2>
              <h2 className="pme-commune">Dixinn</h2>
              </div>
              <h2 className='activite'>Recyclage</h2>
              <button className="">Plus de details</button>
          </aside>
      </section>
      <section className="contenu-3-pme-4">
        <article>
            <img src={image4} />
        </article>
        <aside>
            <div className='pme-info d-inline-flex'>
              <h2 className='pme-nom'>SODIA PLAST</h2>
              <h2 className="pme-commune">Dixinn</h2>
              </div>
              <h2 className='activite'>Recyclage</h2>
              <button className="">Plus de details</button>
        </aside>
      </section>
      
      </div>

      <div className="contenu-4 d-inline-flex">
        <section className="contenu-4-pme-1">
            <article>
                <img src={image5} />
            </article>
            <aside>
            <div className='pme-info d-inline-flex'>
              <h2 className='pme-nom'>SODIA PLAST</h2>
              <h2 className="pme-commune">Dixinn</h2>
              </div>
              <h2 className='activite'>Recyclage</h2>
              <button className="">Plus de details</button>
            </aside>
        </section>
        <section className="contenu-4-pme-2">
          <article>
              <img src={image6} />
          </article>
          <aside>
          <div className='pme-info d-inline-flex'>
              <h2 className='pme-nom'>SODIA PLAST</h2>
              <h2 className="pme-commune">Dixinn</h2>
              </div>
              <h2 className='activite'>Recyclage</h2>
              <button className="">Plus de details</button>
          </aside>
        </section>
        <section className="contenu-4-pme-3">
          <article>
              <img src={image7} />
          </article>
          <aside>
          <div className='pme-info d-inline-flex'>
              <h2 className='pme-nom'>SODIA PLAST</h2>
              <h2 className="pme-commune">Dixinn</h2>
              </div>
              <h2 className='activite'>Recyclage</h2>
              <button className="">Plus de details</button>
          </aside>
      </section>
      <section className="contenu-4-pme-4">
        <article>
            <img src={image1} />
        </article>
        <aside>
        <div className='pme-info d-inline-flex'>
              <h2 className='pme-nom'>SODIA PLAST</h2>
              <h2 className="pme-commune">Dixinn</h2>
              </div>
              <h2 className='activite'>Recyclage</h2>
              <button className="">Plus de details</button>
        </aside>
      </section>
      
      </div>
    </div>
  )
}

