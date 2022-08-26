import React from 'react';

const MailPopup = () => {
  return (
    <div className='mail_popup'>
      <form>
        <h3>Completez les champs ci-dessous pour accéder a vos fiches !</h3>
        <input type='text' name='name' placeholder='Prénom/Nom de famille...'/>
        <input type='email' name='mail' placeholder='Adresse mail...'/>
        <button>Valider</button>
      </form>
    </div>
  );
}

export default MailPopup;
