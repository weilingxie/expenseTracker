import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const { addTransaction } = useContext(GlobalContext);

    const generateId = () => Math.floor(Math.random() * 100000000);

    const onSbumit = e => {

        e.preventDefault();

        const newTransaction = {
            id: generateId(),
            text: text,
            amount: +amount
        };

        console.log(newTransaction);
         addTransaction(newTransaction);
    }

    return (
        <div>
             <h3>Add new transaction</h3>
            <form onSubmit={onSbumit}>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)</label
                >
                <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction;
