
import { useState } from 'react'

function QuestionForm() {
    const [inputValue, setInputValue] = useState('E-mail')
    function checkValue(value) {
        if (value.includes('@')) {
            setInputValue(value)
        }else{
            alert('Attention, il n y a pas d @, ceci n est pas une adresse valide');
        }
    }
    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => checkValue(inputValue)}>Envoyer</button>
        </div>
    )
}



export default QuestionForm