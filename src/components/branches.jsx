import React, { Component } from "react";

class Branches extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-6">
              <div className="locationItem">
                <div className="city" style={{ color: "#7cb34d" }}>
                  სათაო ოფისი: თბილისი
                </div>
                <div className="address">კალისტრატე ქუთათელაძის 8</div>
              </div>
            </div>
            <div className="col-6">
              <div className="locationItem">
                <div className="city" style={{ color: "#7cb34d" }}>
                  ქუთაისი
                </div>
                <div className="address">დ. ბერძენაძის 59 ა</div>
              </div>
            </div>
            <div className="col-6">
              <div className="locationItem">
                <div className="city" style={{ color: "#7cb34d" }}>
                  ქუთაისი
                </div>
                <div className="address">რუსთაველის გამზ. # 95</div>
              </div>
            </div>
            <div className="col-6">
              <div className="locationItem">
                <div className="city" style={{ color: "#7cb34d" }}>
                  ზესტაფონი
                </div>
                <div className="address">რუსთაველის გამზ. # 95</div>
              </div>
            </div>
            <div className="col-6">
              <div className="locationItem">
                <div className="city" style={{ color: "#7cb34d" }}>
                  თელავი
                </div>
                <div className="address">ბახტრიონის ქ. # 10</div>
              </div>
            </div>
            <div className="col-6">
              <div className="locationItem">
                <div className="city" style={{ color: "#7cb34d" }}>
                  დედოფლისწყარო
                </div>
                <div className="address">სტალინის ქუჩა # 2ა, კორპ. 11</div>
              </div>
            </div>
            <div className="col-6">
              <div className="locationItem">
                <div className="city" style={{ color: "#7cb34d" }}>
                  წნორი
                </div>
                <div className="address">ერეკლე II-ის ქუჩა # 29</div>
              </div>
            </div>
            <div className="col-6">
              <div className="locationItem">
                <div className="city" style={{ color: "#7cb34d" }}>
                  ჩოხატაური
                </div>
                <div className="address">სოფელი ხიდისთავი</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Branches;
