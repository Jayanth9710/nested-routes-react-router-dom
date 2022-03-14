import React from 'react'

function MainContent({ title , problem , solution  }) {
  return (
    <div className='container-fluid MainContent_page'>
        <div className='row'>
            <div className='col-lg-6'>
                <div>{title}</div>
                <div>{problem}</div>
                <div>{solution}</div>
            </div>
            <div className='col-lg-6'>
                {/* <img src={} alt='img'/> */}
            </div>
        </div>
    </div>
  )
}

export default MainContent