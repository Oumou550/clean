import React from 'react'
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'
import image5 from './image5.jpg'
import image6 from './image6.jpg'
import image7 from './gestion-des-dechets.jpg'


export default function PmeRamassage() {
  return (
    <div>
    <div className="separateur-1 d-inline-flex">
        <h1>Entreprises de ramassages</h1>
        <hr className=''/>
    </div>
    <div className="contenu-1 d-inline-flex justify-content-center align-items-center">
      <section className="contenu-1-pme-1">
          <article>
              <img src={image1}/>
          </article>
          <aside>
              <p>
                  Bienvenu(e) sur la pme de sonfonia. Nous vous offrons nos prestations de service mensuels et journalier.
              </p>
              <button className="">Voir plus</button>
          </aside>
      </section>
      <section className="contenu-1-pme-2">
        <article>
            <img src={image2} />
        </article>
        <aside>
            <p>Bienvenu(e) sur la pme de sonfonia. Nous vous offrons nos prestations de service mensuels et journalier.</p>
            <button className="">Voir plus</button>
        </aside>
      </section>
      <section className="contenu-1-pme-3">
        <article>
            <img src={image3} />
        </article>
        <aside>
            <p>
                Bienvenu(e) sur la pme de sonfonia. Nous vous offrons nos prestations de service mensuels et journalier.
            </p>
            <button className="">Voir plus</button>
        </aside>
    </section>
    <section className="contenu-1-pme-4">
      <article>
          <img src={image4} />
      </article>
      <aside>
          <p>Bienvenu(e) sur la pme de sonfonia. Nous vous offrons nos prestations de service mensuels et journalier.</p>
          <button className="">Voir plus</button>
      </aside>
    </section>
    
    </div>
    <div className="contenu-2 d-inline-flex">
        <section className="contenu-2-pme-1">
            <article>
                <img src={image5} />
            </article>
            <aside>
                <p>
                    Bienvenu(e) sur la pme de sonfonia. Nous vous offrons nos prestations de service mensuels et journalier.
                </p>
                <button className="">Voir plus</button>
            </aside>
        </section>
        <section className="contenu-2-pme-2">
          <article>
              <img src={image6} />
          </article>
          <aside>
              <p>Bienvenu(e) sur la pme de sonfonia. Nous vous offrons nos prestations de service mensuels et journalier.</p>
              <button className="">Voir plus</button>
          </aside>
        </section>
        <section className="contenu-2-pme-3">
          <article>
              <img src={image7} />
          </article>
          <aside>
              <p>
                  Bienvenu(e) sur la pme de sonfonia. Nous vous offrons nos prestations de service mensuels et journalier.
              </p>
              <button className="">Voir plus</button>
          </aside>
      </section>
      <section className="contenu-2-pme-4">
        <article>
            <img src={image1} />
        </article>
        <aside>
            <p className='pl-2'>
                Bienvenu(e) sur la pme de sonfonia. Nous vous offrons nos prestations de service mensuels et journalier.
            </p>
            <button className="">Voir plus</button>
        </aside>
      </section>
      </div>
    </div>
  )
}
