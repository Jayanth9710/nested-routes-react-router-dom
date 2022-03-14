import React from "react";
import "./CollectionProfile.css";

function CollectionProfile() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <div class="profile-block">
            <div class="profile-block-thumb cover-container">
              <img
                src="https://www.teahub.io/photos/full/51-513680_facebook-cover-wallpaper.jpg"
                alt=""
                title=""
              />
            </div>
            <div class="profile-img">
              <a href="#">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt=""
                  title=""
                />
              </a>
            </div>
            <div className="profile-Contact">
              <div className="row">
                <div className="col-lg-9"></div>
                <div className="col-lg-3">
                  <div className="row">
                    <div className="col-lg-3">fb</div>
                    <div className="col-lg-3">twitter</div>
                    <div className="col-lg-3">reddit</div>
                    <div className="col-lg-3">mail</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-name">
              <h2>Kai</h2>
            </div>
            <div className="profile-details">
              <div className="row profile-details-group ">
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
                  <div className="row">
                    <div className="col-lg-6 ">
                      <div className="profile-details-columns">
                        <div className="asset-key">
                          <span>Items</span>
                          <div className="asset-value">xxxxxxx</div>
                        </div>

                        <div className="asset-key">
                          <span>Sales</span>
                          <div className="asset-value">xxxxxxx</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="profile-details-columns">
                        <div className="asset-key">
                          <span>Floor</span>
                          <div className="asset-value">xxxxxxx</div>
                        </div>

                        <div className="asset-key">
                          <span>Volume</span>
                          <div className="asset-value">xxxxxxx</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1"></div>
              </div>
            </div>
            <div className=" container-fluid profile-slogan">
                <div className="row">
                <div className="col-lg-12 profile-slogan-container">
                    <h2>Slogan</h2>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionProfile;
