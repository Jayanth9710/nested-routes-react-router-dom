import React, { useEffect } from "react";
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from "react-redux";
import { connectWallet } from "./redux/WalletAction";
import TradeExchange from "./components/TradeExchange/TradeExchange";
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet
  } from "react-router-dom";
import "./App.css";
import AddLiquidity from "./components/AddLiquidity/AddLiquidity";
import CollectionProfile from "./components/CollectionsProfile/CollectionProfile";
import CreateNFTForm from "./components/createNFTForm/createNFTForm";
import ArtistDashboard from "./components/ArtistDashboard/ArtistDashboard";
import FixedPrice from "./components/FixedPrice/FixedPrice";
import Auction from "./components/Auction/Auction";
import MainContent from "./components/MainContent/MainContent";

const App = () => {

    const wallet = useSelector(state => state.WalletConnect);
    const dispatch = useDispatch();

    useEffect(() => {
        const {web3Modal} = wallet;
        if(web3Modal.cachedProvider) {
            dispatch(connectWallet());
        }
        // eslint-disable-next-line
    }, []);

    return (
            <div className="App">
                <>
                
                < Navbar />
                <Routes>
                <Route exact path="/add" element={<AddLiquidity/>}/>
                <Route exact path="/swap" element={<TradeExchange/>}/>
                <Route exact path="/ui" element={<CollectionProfile/>}/>
                <Route exact path="/form" element={<CreateNFTForm/>}/>
                <Route exact path="/art" element={<ArtistDashboard/>}/>
                <Route exact path="/list" element={<FixedPrice/>}/>
                <Route exact path="/auction" element={<Auction/>}>
                <Route  path="blockchain" element={<ArtistDashboard/>}>
                    <Route path='lockness' element={<MainContent title="Escrow" problem="Problem1" solution="solution1"/>}/>
                    <Route path='hives' element={<MainContent title="Multisign" problem="Problem2" solution="solution2"/>}/>
                    <Route path='doxa' element={<MainContent title="Doxazo" problem="Problem3" solution="solution3"/>}/>
                    <Route path='skippy' element={<MainContent title="Skippy Apparels" problem="Problem4" solution="solution4"/>}/>
                    <Route path='bt' element={<MainContent title="Modern Dex" problem="Problem5" solution="solution5"/>}/>
                </Route>
        <Route  path="mobile" element={<FixedPrice/>}>
            
        </Route>
                </Route>
                
               </Routes>
            
               </>

            </div>
    );
}

export default App;
