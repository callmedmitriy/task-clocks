import React, { useState } from 'react'

function Form(props) {

  const [name,setName] = useState('')
  const [UTC,setUTC] = useState('')

  const changeName = evt => {

    setName(evt.target.value)

  }
  
  const changeUTC = evt => {
    
    let str = evt.target.value.replace(/[^0-9\+\-]/g,"")
    if (parseInt(str) > 12) {
      str = +12
    } if (parseInt(str) < -12) {
      str = -12
    }
    setUTC(str)

  }

  const addClocks = evt => {
    evt.preventDefault()
    props.add(name,UTC)
  }

  return (
      <form>
        <label>Name<input type="text" onChange={changeName} value={name}/></label>
        <label>UTC<input type="text" onChange={changeUTC} value={UTC}/></label>
        <button onClick={addClocks}>Добавить</button>
      </form>
    )
}

export default Form