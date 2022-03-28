
import { AiFillCreditCard } from "react-icons/ai";
import { useState } from "react";

const AddTransaction = ({onSendTransaction, lastID}) => {

  const clearData ={
    type: "",
    amount: "",
    date: "",
    description: ""
  }
  let[formData,setFormData]= useState (clearData);

  let[toggleForm,setToggleForm] = useState(false);


   function formDataPublish(){
     const transactionData ={
    id: lastID +1,
    type: formData.type,
    amount: formData.amount,
    date: formData.date,
    description: formData.description
     }
     onSendTransaction(transactionData);
    setToggleForm(!toggleForm);
    setFormData(clearData);
    }
  
return(
     <div>
      <button onClick={()=>{setToggleForm(!toggleForm)}}
            className={`bg-blue-400 text-white px-2 py-3 w-full text-left rounded-t-md
            ${toggleForm ? 'rounded-t-md' : 'rounded-md' }`
            }>
        <div><AiFillCreditCard className="inline-block align-text-top" />  Add Transaction</div>
      </button>
     {
     toggleForm &&

      <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="transactionType" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
           Transaction Type
          </label>
          <div className="flex space-x-2 items-center">
            <input type="radio" name="transactionType" id="transactionType"
             onChange = {(event)=>{setFormData({...formData, type : event.target.value})}}
             value= "Creadited"
              className="" /> <span className="">Creadit</span>
              <input type="radio" name="transactionType" id="transactionType" 
              onChange = {(event)=>{setFormData({...formData, type : event.target.value})}}
               value= "Debited"
              className="" /> <span className="">Debit</span>
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="transactionAmount" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
          Transaction Amount
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="text" name="transactionAmount" id="transactionAmount" 
            onChange = {(event)=>{setFormData({...formData, amount : event.target.value})}}
             value= {formData.amount}
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="transactionDate" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Transaction Date
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="date" name="transactionDate" id="transactionDate" 
            onChange = {(event)=>{setFormData({...formData, date : event.target.value})}}
             value= {formData.date}
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>


        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="transactionNotes" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
           Transaction description
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <textarea id="transactionNotes" name="transactionNotes" rows="3" 
            onChange = {(event)=>{setFormData({...formData, description : event.target.value})}}
             value= {formData.description}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Detailed comments about the Transaction"></textarea>
          </div>
        </div>


        <div className="pt-5">
          <div className="flex justify-end">
            <button type="submit" onClick = {formDataPublish}
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
              Submit
            </button>
          </div>
        </div>
      </div>
     
     } 
    </div>
)
}
export default AddTransaction