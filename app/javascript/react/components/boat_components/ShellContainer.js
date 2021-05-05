import React, { useEffect, useState } from 'react'

const ShellContainer = (props) => {



  return(
    <div className="boats-main-container">
        <div className="grid-container">
          <table className="responsive-card-table unstriped roster-table">
            <thead>
              <tr>
                <th>Shell Name</th>
                <th>Seats</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default ShellContainer