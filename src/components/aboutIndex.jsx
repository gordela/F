import React, { Component } from "react";

class AboutIndex extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1 className="currentPageTitle mt-4 mb-3">About</h1>
        {/* Intro Content */}
        <div>
        <div className="thumbnail" />
        <nav className="container">
          <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
            <a className="nav-item nav-link nav-link-emg active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-governance" aria-selected="true">GOVERNANCE</a>
            <a className="nav-item nav-link nav-link-emg" id="nav-strategic-vision-tab" data-toggle="tab" href="#nav-strategic-vision" role="tab" aria-controls="nav-strategic-vision" aria-selected="false">STRATEGIC VISION</a>
            <a className="nav-item nav-link nav-link-emg" id="nav-quality-and-permits-tab" data-toggle="tab" href="#nav-quality-and-permits" role="tab" aria-controls="nav-quality-and-permits" aria-selected="false">QUALITY AND PERMITS</a>
            <a className="nav-item nav-link nav-link-emg" id="nav-training-tab" data-toggle="tab" href="#nav-training" role="tab" aria-controls="nav-training" aria-selected="false">TRAINING</a>
            <a className="nav-item nav-link nav-link-emg" id="nav-partners-tab" data-toggle="tab" href="#nav-partners" role="tab" aria-controls="nav-partners" aria-selected="false">PARTNERS</a>
            <a className="nav-item nav-link nav-link-emg" id="nav-branches-tab" data-toggle="tab" href="#nav-branches" role="tab" aria-controls="nav-branches" aria-selected="false">BRANCHES</a>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <div className="container">
              <h1 className="currentPageTitle mt-3">Structure</h1>
            </div>
            <div className="fluid-container highlight p-5">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <img className="img-fluid" src="http://emg.ge/wp-content/uploads/2018/11/struktura.jpg" alt="" />
                  </div>
                  <div className="col-12 col-md-6">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Officiis odio iusto ipsa eos voluptatum in voluptates sed,
                      autem assumenda numquam, perferendis ea. Quis velit hic
                      perspiciatis nulla! Nulla, possimus neque.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fluid-container p-5">
              <div className="container">
                <h5 className="color-emg">MANAGEMENT</h5>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Officiis odio iusto ipsa eos voluptatum in voluptates sed,
                      autem assumenda numquam, perferendis ea. Quis velit hic
                      perspiciatis nulla! Nulla, possimus neque.
                    </p>
                  </div>
                  <div className="col-12 col-md-6">
                    <img className="img-fluid" src="http://emg.ge/wp-content/uploads/2018/11/struktura.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="fluid-container highlight p-5">
              <div className="container">
                <h5 className="color-emg">COMMITEES</h5>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <img className="img-fluid" src="http://emg.ge/wp-content/uploads/2018/11/struktura.jpg" alt="" />
                  </div>
                  <div className="col-12 col-md-6">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Officiis odio iusto ipsa eos voluptatum in voluptates sed,
                      autem assumenda numquam, perferendis ea. Quis velit hic
                      perspiciatis nulla! Nulla, possimus neque.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="nav-strategic-vision" role="tabpanel" aria-labelledby="nav-strategic-vision-tab">
            <div className="container">
              <h1 className="currentPageTitle mt-3">Strategic Vision</h1>
              <h5 className="color-emg pb-4">ORGANIZATION'S PLANS</h5>
            </div>
            <div className="fluid-container highlight">
              <div className="container">
                <div className="row p-5">
                  <div className="col-sm-12 col-md-6 min-vh-25 ">
                    <div className="column text-center">
                      <img src="1.png" alt="" />
                      <p className="p-2 color-emg">COMPANY BASIC PRINCIPLES</p>
                      <ul className="str">
                        <li>
                          Protection of legal requirements and regulations
                        </li>
                        <li>Independence</li>
                        <li>Objectivity</li>
                        <li>
                          Working in accordance with international standards and
                          best practices
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 min-vh-25 ">
                    <div className="column text-center">
                      <img src="2.png" alt="" />
                      <p className="p-2 color-emg">OUR GOALS</p>
                      <ul className="str">
                        <li>
                          Nonstop improvement of professional level
                        </li>
                        <li>
                          Service according to international standards
                        </li>
                        <li>
                          Continuous maintenance of high level of credibility and
                          trust
                        </li>
                        <li>
                          Constant extension of service spheres
                        </li>
                        <li>
                          Leadership of the Georgian market
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 min-vh-25">
                    <div className="column text-center">
                      <img src="3.png" alt="" />
                      <p className="p-2 color-emg">OUR MISSION</p>
                      <p className="text-left">
                        Introduction and implementation of international standards,
                        best engineering solutions, and correct decision making
                        practice as in inspection and supervising, as weel as in the
                        construction sector of Georgia
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 min-vh-25">
                    <div className="column text-center">
                      <img src="4.png" alt="" />
                      <p className="p-2 color-emg">OUR COMPANY'S PRIORITIES</p>
                      <ul className="str">
                        <li>
                          Impartiality
                        </li>
                        <li>
                          Credibility
                        </li>
                        <li>
                          High quality service
                        </li>
                        <li>
                          Teamwork
                        </li>
                        <li>
                          Continuous growth and development
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="nav-quality-and-permits" role="tabpanel" aria-labelledby="nav-quality-and-permits-tab">
            <div className="container">
              <h1 className="currentPageTitle mt-3">QUALITY AND PERMITS</h1>
            </div>
            <div className="fluid-container highlight">
              <div className="container">
                <div className="row p-5">
                  <div className="col-sm-12 col-md-6 min-vh-25 ">
                    <div className="column text-center">
                      <img src="5.png" alt="" />
                      <p className="p-2 color-emg">QUALITY AND PERMITS</p>
                      <p>
                        Engineering Monitoring Group LLC is A type inspection
                        company, which is accredited by LEPL “The Unified National
                        Body of Accreditation, Accreditation Center” by SST ISO /
                        IEC 17020: 2012/2013 according to the international
                        standards, and is recognised by the EA (European
                        Accreditation) General Assembly. Accreditation certificate
                        ID : GAC-IB-0274. Accreditation of the company’s ISO
                        standards is a guarantee, that our inspection reports are in
                        compatible with international standards, and is acceptable
                        for both Georgian governmental structures, as well as for
                        international organisations.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 min-vh-25 ">
                    <div className="column text-center">
                      <img src="6.png" alt="" />
                      <p className="p-2 color-emg">EMPLOYEE QUALIFICATION</p>
                      <p>
                        The company is staffed by accredited, professional and
                        highly qualified local and foreign specialists with several
                        years of working experience: Engineers, technical managers,
                        experts, supervisors, quality control managers. The company
                        is also staffed with a range of professionals and service
                        companies, such as risk management, information technology,
                        marketing, business development, public relations, legal and
                        financial services, etc.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 min-vh-25">
                    <div className="column text-center">
                      <img src="7.png" alt="" />
                      <p className="p-2 color-emg">Quality management</p>
                      <p className="text-left">
                        The company’s aim is to cooperate with strong international
                        companies working in similar spheres. Intensive sharing of
                        experience increases and deepens the knowledge of the
                        organization and personnel and helps to accumulate the
                        knowledge of high international standards.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 min-vh-25">
                    <div className="column text-center">
                      <img src="8.png" alt="" />
                      <p className="p-2 color-emg">Health and Safety Management</p>
                      <p>
                        A health and safety management system is a systematic
                        approach put in place by an employer to minimize the risk of
                        injury and illness. It involves identifying, assessing, and
                        controlling risks to workers in all workplace operations.
                        Engineering Monitoring Group is following to the European
                        standard Directive 2013/35/EU: The minimum health and safety
                        requirements regarding the exposure of workers to the risks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="nav-training" role="tabpanel" aria-labelledby="nav-training-tab">
            training
          </div>
          <div className="tab-pane fade" id="nav-partners" role="tabpanel" aria-labelledby="nav-partners-tab">
            <div className="container">
              <h1 className="currentPageTitle  mt-3">Partners</h1>
              <div className="container row">
                <div className="col-sm-6 col-md-3  p-1  ">
                  <div className="border-emg row logoes justify-content-center">
                    <img src="partner.PNG" className="img-fluid p-1 align-self-center" />
                  </div>
                </div>
                <div className="col-sm-6 col-md-3  p-1  ">
                  <div className="border-emg row logoes justify-content-center">
                    <img src="partner.PNG" className="img-fluid p-1 align-self-center" />
                  </div>
                </div>
                <div className="col-sm-6 col-md-3  p-1  ">
                  <div className="border-emg row logoes justify-content-center">
                    <img src="partner.PNG" className="img-fluid p-1 align-self-center" />
                  </div>
                </div>
                <div className="col-sm-6 col-md-3  p-1  ">
                  <div className="border-emg row logoes justify-content-center">
                    <img src="partner.PNG" className="img-fluid p-1 align-self-center" />
                  </div>
                </div>
                <div className="col-sm-6 col-md-3  p-1  ">
                  <div className="border-emg row logoes justify-content-center">
                    <img src="partner.PNG" className="img-fluid p-1 align-self-center" />
                  </div>
                </div>
                <div className="col-sm-6 col-md-3  p-1  ">
                  <div className="border-emg row logoes justify-content-center">
                    <img src="partner.PNG" className="img-fluid p-1 align-self-center" />
                  </div>
                </div>
                <div className="col-sm-6 col-md-3  p-1  ">
                  <div className="border-emg row logoes justify-content-center">
                    <img src="partner.PNG" className="img-fluid p-1 align-self-center" />
                  </div>
                </div>
                <div className="col-sm-6 col-md-3  p-1  ">
                  <div className="border-emg row logoes justify-content-center">
                    <img src="partner.PNG" className="img-fluid p-1 align-self-center" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="nav-branches" role="tabpanel" aria-labelledby="nav-branches-tab">
            <div className="container">
              <h1 className="currentPageTitle mt-3">Branches</h1>
              <div className="row">
                <div className="col-sm-12 col-md-6 row">
                  <div className="col-6 row">
                    <img className="location" src="./location.png" alt="" />
                    <div className="column mt-3">
                      <p className="color-emg" style={{margin: 0}}>Head office</p>
                      <p>Head office</p>
                    </div>
                  </div>
                  <div className="col-6 row">
                    <img className="location" src="./location.png" alt="" />
                    <div className="column mt-3">
                      <p className="color-emg" style={{margin: 0}}>Head office</p>
                      <p>Head office</p>
                    </div>
                  </div>
                  <div className="col-6 row">
                    <img className="location" src="./location.png" alt="" />
                    <div className="column mt-3">
                      <p className="color-emg" style={{margin: 0}}>Head office</p>
                      <p>Head office</p>
                    </div>
                  </div>
                  <div className="col-6 row">
                    <img className="location" src="./location.png" alt="" />
                    <div className="column mt-3">
                      <p className="color-emg" style={{margin: 0}}>Head office</p>
                      <p>Head office</p>
                    </div>
                  </div>
                  <div className="col-6 row">
                    <img className="location" src="./location.png" alt="" />
                    <div className="column mt-3">
                      <p className="color-emg" style={{margin: 0}}>Head office</p>
                      <p>Head office</p>
                    </div>
                  </div>
                  <div className="col-6 row">
                    <img className="location" src="./location.png" alt="" />
                    <div className="column mt-3">
                      <p className="color-emg" style={{margin: 0}}>Head office</p>
                      <p>Head office</p>
                    </div>
                  </div>
                  <div className="col-6 row">
                    <img className="location" src="./location.png" alt="" />
                    <div className="column mt-3">
                      <p className="color-emg" style={{margin: 0}}>Head office</p>
                      <p>Head office</p>
                    </div>
                  </div>
                  <div className="col-6 row">
                    <img className="location" src="./location.png" alt="" />
                    <div className="column mt-3">
                      <p className="color-emg" style={{margin: 0}}>Head office</p>
                      <p>Head office</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">MAP HERE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* /.row */}
        {/* Our Customers */}
      </React.Fragment>
    );
  }
}

export default AboutIndex;
