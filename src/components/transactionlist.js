import React, { useContext } from 'react';

import { GlobalContext } from '../context/globalstate';
import Transaction from './transaction';

export default function TransactionList() {
    const { transactions } = useContext(GlobalContext);
    
    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction}/>
                ))}
            </ul>
        </div>
    );
}