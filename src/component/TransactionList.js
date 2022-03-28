import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiTrash  } from "react-icons/bi"
const TransactionList = ({transaction , deleteTransaction}) =>{
    return(
          <li className="px-3 py-3 flex items-start">
  <button type="button" onClick= {() => deleteTransaction(transaction.id)}
    className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
    <BiTrash /></button>
  <div className="flex-grow">
    <div className="flex items-center ">
      <span className="flex-none font-medium text-2xl text-blue-500">{transaction.type}</span>
      <span className="flex-grow text-right"><span ><BsFillCalendarDateFill className= "float-right "/></span>{transaction.date}</span>
    </div>
    <div className="font-bold text-blue-500">Amount: <span className ="text-black"> {transaction.amount} </span></div>
    <div className="leading-tight">{transaction.description}</div>
  </div>
</li>
    )
}
export default TransactionList;