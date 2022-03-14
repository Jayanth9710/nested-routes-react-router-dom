import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import ArtistDashboard from '../ArtistDashboard/ArtistDashboard';
import FixedPrice from '../FixedPrice/FixedPrice';
import './Auction.css'

function Auction() {
   

    // const handleSelection = (e) => {
    //     const checked = e.target.checked;

    //     if (checked) {
    //         console.log('checked')
    //     }  
    //     else {
    //         console.log('Not checked')
    //     }
    // }
  return (
    <div className=' container-fluid Auction_page'>
<div className='row'>
    {/* <div className="col-lg-2"></div>
    <div className="col-lg-8">
        <form>
        <div className="row">
            <div className="col-lg-12 input_label">
                <span >Price</span>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-2">
                <div className="form-group">
                <input type='text'></input>
                </div>
            </div>
            <div className="col-lg-10">
                <div className="form-group">
            <input type='text'></input>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 input_label">
                <span >Duration</span>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="form-group">
            <input type='text' className='durationInput'></input>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-10 input_label">
                <span >Include Reserve Price</span>
            </div>
            <div className="col-lg-2">

<div class="form-check form-switch">
                                                  <input
                              class="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckDefault"
                              onClick={(e)=>handleSelection(e)}
                            />
</div>
            </div>
        </div>
        </form>
        <button>List for sale</button>
    </div>
    <div className="col-lg-2"></div> */}
    <Routes>
        
    </Routes>
    <div className='main_btn_switch'>
        <Link to='/auction/blockchain'>
            Blockchain
        </Link>
        <Link to='/auction/mobile'>
            Mobile Apps
        </Link>
    </div>
   
</div>
<Outlet/>
    </div>
  )
}

export default Auction