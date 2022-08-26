import React, { useState } from 'react';
import first from './../assets/first.svg'
import second from './../assets/second.svg'
import third from './../assets/third.svg'
import fourth from './../assets/fourth.svg'
import MailPopup from '../components/mail_popup';


const Formations = () => {
  const {activePopup, setActivePopup} = useState(true)

  return (
    <div className='pages-formations'>
      <section>
        <div className='info'>
          <h1>Formations</h1>
          <p>Nous faisons tous partie d'un système avec des règles, des lois et une dynamique non écrites. Chaque mouvement et décision que nous prenons est influencé par notre système, même si nous pensons souvent que nous en sommes séparés. Les dynamiques invisibles et très puissantes sont en effet, des liens qui nous influencent. En rendant ces courants sous-jacents visibles, nous pouvons agir.</p>
          <button>Prise de RDV</button>
        </div>
        <div className='illu'>
          <img src={first}/>
        </div>
      </section>
      <section>
        <div className='info'>
          <h1>Coaching relationel systemique</h1>
          <p>Nous faisons tous partie d'un système avec des règles, des lois et une dynamique non écrites. Chaque mouvement et décision que nous prenons est influencé par notre système, même si nous pensons souvent que nous en sommes séparés. Les dynamiques invisibles et très puissantes sont en effet, des liens qui nous influencent. En rendant ces courants sous-jacents visibles, nous pouvons agir.</p>
          <button>Prise de RDV</button>
        </div>
        <div className='illu'>
        <img src={second}/>
        </div>
      </section>
      <section>
        <div className='info'>
          <h1>Formation numerologie</h1>
          <p>Nous faisons tous partie d'un système avec des règles, des lois et une dynamique non écrites. Chaque mouvement et décision que nous prenons est influencé par notre système, même si nous pensons souvent que nous en sommes séparés. Les dynamiques invisibles et très puissantes sont en effet, des liens qui nous influencent. En rendant ces courants sous-jacents visibles, nous pouvons agir.</p>
          <button>Prise de RDV</button>
        </div>
        <div className='illu'>
        <img src={third}/>
        </div>
      </section>
      <section>
        <div className='info'>
          <h1>Ateliers</h1>
          <p>Nous faisons tous partie d'un système avec des règles, des lois et une dynamique non écrites. Chaque mouvement et décision que nous prenons est influencé par notre système, même si nous pensons souvent que nous en sommes séparés. Les dynamiques invisibles et très puissantes sont en effet, des liens qui nous influencent. En rendant ces courants sous-jacents visibles, nous pouvons agir.</p>
          <button>Prise de RDV</button>
        </div>
        <div className='illu'>
        <img src={fourth}/>
        </div>
      </section>
      <MailPopup/>
    </div>
  );
}

export default Formations;
