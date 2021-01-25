import React from 'react'

const MaxLimitDropDown = ({reslutLength, changePageLimit}) => {
    if(reslutLength>0)
      return(
    <div>
    <label className="mb-2" for="maxLimit">Select result Limit:</label>
    <select onChange={e => changePageLimit(e.target.value)}  name="maxLimit" id="maxLimit">
    <option  value="5">5</option>
    <option  value="10">10</option>
    <option  value="15">15</option>
    <option  value="20">20</option>
  </select>
  </div>
  
    )
    else
    return(
      <div> 
      </div>
    )

}

export default MaxLimitDropDown