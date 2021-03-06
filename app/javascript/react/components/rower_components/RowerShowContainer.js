import React, { useState,useEffect } from 'react'

const RowerShowContainer = (props) => {

  return(
    <div className="roster-text">
        <div className="">
          <div className="cell small-6">First Name: {props.shownRower.first_name}</div>
          <div className="cell small-6">Last Name: {props.shownRower.last_name}</div>
          <div className="cell small-6">Height: {props.shownRower.height}</div>
          <div className="cell small-6">Weight: {props.shownRower.weight}</div>
          <div className="cell small-6">Side: {props.shownRower.side}</div>
        </div>
    </div>
  )
}

export default RowerShowContainer