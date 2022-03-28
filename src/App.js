import { useState,useEffect,useCallback } from "react";
import { AiFillCreditCard } from "react-icons/ai"
import Search  from "./component/Search";
import AddTransaction from "./component/AddTransaction";

import TransactionList from "./component/TransactionList";

function App() {

  let[Transactions,setTransaction] =  useState ([]);
  let[query,setQuery] = useState("");
  let[sortBy,setSortBy] = useState("amount");
  let[orderBy,setOrderBy] = useState("asc");
  const filterTransactions = Transactions.filter(

    item =>{
      return(
        item.amount.toLowerCase().includes(query.toLowerCase()) ||
        item.type.toLowerCase().includes(query.toLowerCase()) ||
        item.date.toLowerCase().includes(query.toLowerCase()) 
      )
    }
  ).sort((a,b)=>{
    console.log("A"+ Number( a[sortBy]))
    console.log("B"+ Number( b[sortBy]))
    console.log(a[sortBy] < b[sortBy])
     let order = (orderBy === 'asc') ? 1 : -1;
      if(sortBy.toLowerCase() === 'amount' || sortBy.toLowerCase() === 'date'){
        return(
          Number( a[sortBy]) <  Number( b[sortBy])
       ? -1*order : 1*order
        )
      } else{
    return(
     
     a[sortBy]?.toLowerCase() < b[sortBy]?.toLowerCase()
       ? -1*order : 1*order
    )
      }
  })
    
 

  const fetchData = useCallback( () => {
   fetch ('./data.json')
   .then(response => response.json())
   .then(data => {
     setTransaction(data)
    })
  },[])

  useEffect(() => {
   fetchData()
  }, [fetchData])
  return (
   <div className ="App container mx-auto mt-3 font-thin">
     <h1 className ="text-5xl mb-4"> 
     <AiFillCreditCard className = "inline-block text-blue-400 align-top"/> My Credits and Debits</h1>
     <AddTransaction 
     onSendTransaction ={newData => setTransaction ([...Transactions,newData])}
     lastID ={Transactions.reduce((max,item) => Number(item.id) > max ? Number(item.id):max , 0)}    
     />
     <Search  
     query ={query}
     searchTransactions = { myQuery => {setQuery(myQuery)} }
     sortBy = {sortBy}
     onSortBy = {mySort => {setSortBy(mySort)} }
     orderBy = {orderBy}
     onOrderBy ={ myOder => {setOrderBy(myOder)} }
     />
     <ul className = "divide-y divide-blue-300">
      {filterTransactions
         
       .map(transaction =>(
        
      <TransactionList key ={transaction.id}
      transaction ={transaction}
      deleteTransaction = {

        transactionID =>{
          setTransaction(Transactions.filter(transaction =>  transactionID !== transaction.id))
        }
      }
      />

       ))

      }
     </ul>
     </div>
     
  );
}

export default App;
