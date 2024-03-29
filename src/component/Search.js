import { BiSearch , BiCaretDown, BiCheck, BiUpArrowCircle, BiDownArrowCircle } from "react-icons/bi";
import { useState } from "react";



const DropDown  = ({toggle,orderBy,onOrderBy,sortBy,onSort}) =>{

  
if(!toggle){
return null;
}
 
  return(
    
    <div className="origin-top-right absolute right-0 mt-2 w-56
      rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div   onClick = {()=>{ onSort('Amount')}}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem">Amount { (sortBy=== 'Amount') && <BiCheck />}</div>
        <div onClick = { () => { onSort('Type')}}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem">Type  { (sortBy=== 'Type') && <BiCheck />}</div>
        <div onClick = { () => { onSort('Date')}}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem">Date { (sortBy=== 'Date') && <BiCheck />}</div>
    
      </div>
    </div>
  )

}





const Search = ({searchTransactions,query,orderBy,onOrderBy,sortBy,onSortBy}) =>{
 
  let[toggleSort,setToggleSort] = useState(false);
    return(
          <div className="py-5">
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BiSearch />
          <label htmlFor="query" className="sr-only" />
        </div>
        <input type="text" name="query" id="query" value = {query} 
        onChange = {(event) =>{ searchTransactions(event.target.value)}}
        className="pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-1000 sm:text-sm border-gray-300" placeholder="Search" />
      
        <div className="absolute inset-y-0 right-0 flex items-center">
          <span className =" flex space-x-3  p-12">
           <button><BiUpArrowCircle className = {`mr-145 h-18 w-18 rounded-2xl ${ orderBy === 'dsc' ?'bg-blue-400':''}`} onClick={()=>{onOrderBy('dsc')}}/></button>
           <button> <BiDownArrowCircle className = {`mr-145 h-18 w-18 rounded-2xl ${ orderBy === 'asc' ?'bg-blue-400':''}`} onClick={()=>{onOrderBy('asc')}}/></button>
          </span>
          <div>
            <button type="button" onClick = {()=>{setToggleSort(!toggleSort)}}
              className="justify-center px-4 py-2 bg-blue-400 border-2 border-blue-400 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center  rounded-md" id="options-menu" aria-haspopup="true" aria-expanded="true">
              Sort By <BiCaretDown className="ml-2" />
            </button>
            <DropDown 
             toggle={toggleSort}
             orderBy ={orderBy}
             onOrder = {myOder => { onOrderBy(myOder)}}
             sortBy ={sortBy}
             onSort = {mySort => { onSortBy(mySort)}}
            
            />
            </div>
        </div>
      </div>
    </div>
    )
}

export default Search;