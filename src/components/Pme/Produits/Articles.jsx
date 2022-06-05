import React from 'react'
import image1 from './douze-l.jpg'
import image2 from './tasse-4.jpg'
import image3 from './planche.jpg'
import image4 from './b-vingt-l.jpg'
import image5 from './tabouret.jpg'
import image6 from './p-1.jpg'
import image7 from './bulloire2.jpg'
import image8 from './dix-l.jpg'
import image9 from './dix-l2.jpg'
import image10 from './gobelet.jpg'
import image11 from './quinze-l.jpg'
import image12 from './poubelle.jpg'


import './article.css'

export default function Articles() {
  return (
    <div>
      <div className='entete-article'>
          <h2>
              Transformez vos ordures en <span className='entete-article-titre'> or dûr</span>
          </h2>
      </div>
        
    <div className="contenu-1 d-inline-flex justify-content-center align-items-center">
      <section className="contenu-1-article-1">
          <article>
              <img src={image1}/>
          </article>
          <aside>
              <div className='article-info d-inline-flex'>
              <p className='article-nom'>Nous vous proposons ce seau de ménage en bec de <span className="article-kilo">12l</span> en échange de <span className="article-kilo">20Kg</span> de déchets plastiques</p>
              </div>
              {/* <div className='d-flex justify-content-between'> */}
              <button className="choix-1" >Choisir</button>
          </aside>
      </section>
      <section className="contenu-1-article-2">
        <article>
            <img src={image2} />
        </article>
        <aside>
        <div className='article-info d-inline-flex'>
              <p className='article-nom'> Obtenez ces tasses qui vous serviront à la maison en échange de <span className="article-kilo">12Kg</span> de déchets plastiques</p>
              </div>
              <button className="choix-2" >Choisir</button>
        </aside>
      </section>
      <section className="contenu-1-article-3">
        <article>
            <img src={image3} />
        </article>
        <aside>
        <div className='article-info d-inline-flex'>
              <p className='article-nom'>Recevez ce lave linge africain pour toutes vos lessives en apportant <span className="article-kilo">40Kg</span> de déchets plastiques</p>
              </div>
              <button className="choix-3" >Choisir</button>
        </aside>
    </section>
    <section className="contenu-1-article-4">
      <article>
          <img src={image4} />
      </article>
      <aside>
      <div className='article-info d-inline-flex'>
              <p className='article-nom'> Une bassine d'eau pouvant contenir jusqu'à <span className="article-kilo">20l</span>. Obtenez-la en donnant <span className="article-kilo">60Kg</span> de déchets plastiques</p>
              </div>
              <button className="choix-4" >Choisir</button>
      </aside>
    </section>
    
    </div>
    <div className="contenu-2 d-inline-flex">
        <section className="contenu-2-article-1">
            <article>
                <img src={image5} />
            </article>
            <aside>
            <div className='article-info d-inline-flex'>
              <p className='article-nom'>Vous pouvez obtenir ce tabouret pour vos enfants en apportant <span className="article-kilo">16Kg</span> de déchets plastiques</p>
              </div>
              <button className="choix-5" >Choisir</button>
            </aside>
        </section>
        <section className="contenu-2-article-2">
          <article>
              <img src={image6} />
          </article>
          <aside>
          <div className='article-info d-inline-flex'>
              <p className='article-nom'>Donnez <span className="article-kilo">7Kg</span> de déchets plastiques et recevez une pelle qui vous permettra de ramasser facilement vos ordures </p>
              </div>
              <button className="choix-6" >Choisir</button>
          </aside>
        </section>
        <section className="contenu-2-article-3">
          <article>
              <img src={image7} />
          </article>
          <aside>
          <div className='article-info d-inline-flex'>
              <p className='article-nom'>En apportant <span className="article-kilo">10Kg</span> de déchets plastiques, recevez  en échange une bouilloire pour différents besoins</p>
              </div>
              <button className="choix-7" >Choisir</button>
          </aside>
      </section>
      <section className="contenu-2-article-4">
        <article>
            <img src={image8} />
        </article>
        <aside>
        <div className='article-info d-inline-flex'>
              <p className='article-nom'>Recevez ce seau de <span className="article-kilo">10l</span> pour toutes vos tâches ménagères en apportant <span className="article-kilo">18Kg</span> de déchets plastiques</p>
              </div>
              <button className="choix-8" >Choisir</button>
        </aside>
      </section>
      </div>
      <div className="contenu-3 d-inline-flex">
        <section className="contenu-3-article-1">
            <article>
                <img src={image9} />
            </article>
            <aside>
            <div className='article-info d-inline-flex'>
              <p className='article-nom'> Un seau de <span className="article-kilo">10l</span> pour vos differents travaux. Obtenez-la en donnant <span className="article-kilo">18Kg</span> de déchets plastiques</p>
              </div>
              <button className="choix-9" >Choisir</button>
            </aside>
        </section>
        <section className="contenu-3-article-2">
          <article>
              <img src={image10} /> 
          </article>
          <aside>
          <div className='article-info d-inline-flex'>
              <p className='article-nom'>Nous vous proposons ce gobelet pour vos différents besoins en échange de <span className="article-kilo">5Kg</span> de déchets plastiques</p>
              </div>
              <button className="choix-10" >Choisir</button>
          </aside>
        </section>
        <section className="contenu-3-article-3">
          <article>
              <img src={image11} />
          </article>
          <aside>
          <div className='article-info d-inline-flex'>
              <p className='article-nom'>Vous pouvez obtenir cette poubelle de <span className="article-kilo">15l</span> pour vos ordures en apportant <span className="article-kilo">28Kg</span> de déchets plastiques</p>
              </div>
              <button className="choix-11" >Choisir</button>
          </aside>
      </section>
      <section className="contenu-3-article-4">
        <article>
            <img src={image12} />
        </article>
        <aside>
        <div className='article-info d-inline-flex'>
              <p className='article-nom'> Obtenez une corbeille pour les papiers que vous n'utiliserez plus en échange de <span className="article-kilo">15Kg</span> de déchets plastiques</p>
              </div>
              <button className="choix-12" >Choisir</button>
        </aside>
      </section>
      </div>
    </div>
  )
}
