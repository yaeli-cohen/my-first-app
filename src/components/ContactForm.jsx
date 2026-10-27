import {useState} from 'react';

function ContactForm(){
  const [message, setMessage] = useState('');
  const [sendForm, setSendForm] = useState(false);
  
const maxLength = 100;
  
if(sendForm){
return <p>ההודעה נשלחה, תודה!</p>
}

  return (
    <div>
      
          <textarea
            value={message}
            maxLength={maxLength}
            onChange={(e) => setMessage(e.target.value)}
          />
          <p>נשארו {maxLength - message.length} תווים</p>
          <button type="button" onClick={()=>setSendForm(true)} disabled={message.length === 0}>
שליחה
          </button>
    </div>
  );
}

export default ContactForm;