import React, { useState } from "react";
import "./../Plans/Pricing_plan.css";
import whitech from "./../../Assets/white_check.png";
import bluech from "../../Assets/blue_check.png";
import plus from "../../Assets/plus.png";
import minus from "../../Assets/minus.png";
import minus_disabled from "../../Assets/minus_disabled.png";
const Pricing_plan = () => {
  const [value, setValue] = useState(20);
  const [value1, setValue1] = useState(20);
  const [value2, setValue2] = useState(20);
  const [value3, setValue3] = useState(20);
  const [value4, setValue4] = useState(20);
  const [month_year_btn, setmonth_year_btn] = useState(true);
  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    if (value > 20) {
      setValue(value - 1);
    }
  };

  const handleIncrement1 = () => {
    setValue1(value1 + 1);
  };

  const handleDecrement1 = () => {
    if (value1 > 20) {
      setValue1(value1 - 1);
    }
  };

  const handleIncrement2 = () => {
    setValue2(value2 + 1);
  };

  const handleDecrement2 = () => {
    if (value2 > 20) {
      setValue2(value2 - 1);
    }
  };

  const handleIncrement3 = () => {
    setValue3(value3 + 1);
  };

  const handleDecrement3 = () => {
    if (value3 > 20) {
      setValue3(value3 - 1);
    }
  };

  const handleIncrement4 = () => {
    setValue4(value4 + 1);
  };

  const handleDecrement4 = () => {
    if (value4 > 20) {
      setValue4(value4 - 1);
    }
  };

  const calculateTotalCost = () => {
    const standardCRM = 300;
    const website = 700;
    const trainedVA = value * 7;
    const marketingSetup = 200;
    return standardCRM + website + trainedVA + marketingSetup;
  };

  const totalCost = calculateTotalCost();

  const calculateTotalCost1 = () => {
    const IntegratedCRM = 750;
    const website = 700;
    const trainedVA = value1 * 7;
    const trainedVAcold = value2 * 7;
    const marketingSetup = 200;
    return IntegratedCRM + website + trainedVA + trainedVAcold + marketingSetup;
  };

  const totalCost1 = calculateTotalCost1();

  const calculateTotalCost2 = () => {
    const IntegratedCRM = 750;
    const website = 1400;
    const trainedVA = value3 * 7;
    const trainedVAcold = value4 * 7;

    return IntegratedCRM + website + trainedVA + trainedVAcold;
  };

  const totalCost2 = calculateTotalCost2();

  return (
    <React.Fragment>
    
      <div className="month_yearr">
        <div className="main_plans">
          <p className="plan_heading">Simple, Transparent Pricing</p>
          <p className="plan_subheading">No contracts, No surprise fees.</p>
          <table>
            <thead>
              <tr>
                <th className="col-md-8 month_year">
                  <div className="plan_btn_y">
                    <button className={month_year_btn===false?"button_right":"button_left"} onClick={()=>setmonth_year_btn(true)}>Monthly</button>
                    
                    <button className={month_year_btn===true?"button_right":"button_left1"} onClick={()=>setmonth_year_btn(false)}>Yearly</button>
                  </div>
                </th>
              </tr>
            </thead>
          </table>
          {month_year_btn === true ?<div className="pricing_container">
            <table className="price_table">
              <thead>
                <tr>
                  <th className="tb_one">
                    Select the package that best suits your needs.
                    <p className="tb_two">
                      Pay monthly, or save big with an annual subscription.
                    </p>
                  </th>
                  <th className="plan_basic">BASIC</th>
                  <th className="plan_standard">STANDARD</th>
                  <th className="plan_basic">PREMIUM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td_main"></td>
                  <td className="td_main_amount">$850</td>
                  <td className="td_main_amount">$1700</td>
                  <td className="td_main_amount">$2400</td>
                </tr>
                <tr>
                  <td className="td_main">Marketing Expert* (6hrs/day) </td>
                  <td className="bas_tick">
                    <img src={bluech} alt="blue_check"></img>
                  </td>
                  <td className="bas_tickg">
                    <img src={whitech} alt="white_check"></img>
                  </td>
                  <td className="bas_tick">
                    <img src={bluech} alt="blue_check"></img>
                  </td>
                </tr>
                <tr>
                  <td className="td_main">Client Success Manager</td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                  <td className="bas_tickg">
                    <img src={whitech}></img>
                  </td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                </tr>
                <tr>
                  <td className="td_main">Campaigns KPI Tracking</td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                  <td className="bas_tickg">
                    <img src={whitech}></img>
                  </td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                </tr>
                <tr>
                  <td className="td_main">Auditing of marketing campaigns</td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                  <td className="bas_tickg">
                    <img src={whitech}></img>
                  </td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                </tr>
                <tr>
                  <td className="td_main">
                    Setting up marketing work environment*{" "}
                  </td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                  <td className="bas_tickg">
                    <img src={whitech}></img>
                  </td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                </tr>
                <tr>
                  <td className="td_main">
                    List Management (Data pulling, skip tracing & stacking)
                  </td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                  <td className="bas_tickg">
                    <img src={whitech}></img>
                  </td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                </tr>
                <tr>
                  <td className="td_main">
                    CRM Management (Configuring and leads update)
                  </td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                  <td className="bas_tickg">
                    <img src={whitech}></img>
                  </td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                </tr>
                <tr>
                  <td className="td_main">
                    Tool and Data health management (daily)
                  </td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                  <td className="bas_tickg">
                    <img src={whitech}></img>
                  </td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                </tr>
                <tr>
                  <td className="td_main">Lead Follow-up Manager</td>
                  <td className="bas_tick"></td>
                  <td className="bas_tickg">
                    <img src={whitech}></img>
                  </td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                </tr>
                <tr>
                  <td className="td_main">
                    Disposition of property campaigns*
                  </td>
                  <td className="bas_tick"></td>
                  <td className="bas_tickg"></td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                </tr>
               
                <tr>
                  <td></td>
                  <td className="btn_clas1">
                    <button className="plan_btn">BUY NOW</button>
                  </td>
                  <td className="btn_clas1">
                    <button className="plan_btn1">BUY NOW</button>
                  </td>
                  <td className="btn_clas1">
                    <button className="plan_btn">BUY NOW</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>:
          <div className="pricing_container">
            <table className="price_table">
              <thead>
                <tr>
                  <th className="tb_one1">
                    Select the package that best suits your needs.
                    <p className="tb_two">
                      Pay monthly, or save big with an annual subscription.
                    </p>
                  </th>
                  <th className="plan_basic1">BASIC</th>
                  <th className="plan_standard1">STANDARD</th>
                  <th className="plan_basic1">PREMIUM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td_main_1"></td>
                  <td className="td_main_amount1">$850</td>
                  <td className="td_main_amount1">$1700</td>
                  <td className="td_main_amount1">$2400</td>
                </tr>
                <tr>
                  <td className="td_main_1">Marketing Expert* (6hrs/day) </td>
                  <td className="bas_tick">
                    <img src={bluech} alt="blue_check"></img>
                  </td>
                  <td className="bas_tickg1">
                    <img src={whitech} alt="white_check"></img>
                  </td>
                  <td className="bas_tick">
                    <img src={bluech} alt="blue_check"></img>
                  </td>
                </tr>
                <tr>
                  <td className="td_main_1">Client Success Manager</td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                  <td className="bas_tickg1">
                    <img src={whitech}></img>
                  </td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                </tr>
                <tr>
                  <td className="td_main_1">Campaigns KPI Tracking</td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                  <td className="bas_tickg1">
                    <img src={whitech}></img>
                  </td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                </tr>
                <tr>
                  <td className="td_main_1">Auditing of marketing campaigns</td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                  <td className="bas_tickg1">
                    <img src={whitech}></img>
                  </td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                </tr>
                <tr>
                  <td className="td_main_1">
                    Setting up marketing work environment*{" "}
                  </td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                  <td className="bas_tickg1">
                    <img src={whitech}></img>
                  </td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                </tr>
                <tr>
                  <td className="td_main_1">
                    List Management (Data pulling, skip tracing & stacking)
                  </td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                  <td className="bas_tickg1">
                    <img src={whitech}></img>
                  </td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                </tr>
                <tr>
                  <td className="td_main_1">
                    CRM Management (Configuring and leads update)
                  </td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                  <td className="bas_tickg1">
                    <img src={whitech}></img>
                  </td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                </tr>
                <tr>
                  <td className="td_main_1">
                    Tool and Data health management (daily)
                  </td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                  <td className="bas_tickg1">
                    <img src={whitech}></img>
                  </td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                </tr>
                <tr>
                  <td className="td_main_1">Lead Follow-up Manager</td>
                  <td className="bas_tick"></td>
                  <td className="bas_tickg1">
                    <img src={whitech}></img>
                  </td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                </tr>
                <tr>
                  <td className="td_main_1">
                    Disposition of property campaigns*
                  </td>
                  <td className="bas_tick"></td>
                  <td className="bas_tickg1"></td>
                  <td className="bas_tick">
                    <img src={bluech}></img>
                  </td>
                </tr>
               
                <tr>
                  <td></td>
                  <td className="btn_clas1">
                    <button className="plan_btn">BUY NOW</button>
                  </td>
                  <td className="btn_clas1">
                    <button className="plan_btn1y">BUY NOW</button>
                  </td>
                  <td className="btn_clas1">
                    <button className="plan_btn">BUY NOW</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>}
          
        </div>
      </div>
      <div className="row main_rei">
      <div className="col-md-4">
       
          <div className="tb_rei_kit">
            <p className="rei_text">REI Kit ONE</p>
            <table className="tab_rei">
              <thead>
                <tr>
                  <th className="th_serv">Service Names</th>
                  <th className="th_serv1">Adjust Hrs.($6/hr)</th>
                  <th className="th_serv2">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tb_data_rei_b">
                  <td className="">Standard REI Podio CRM</td>
                  <td className=""></td>
                  <td className="rei_costdiv"><div className="rei_cost">$300</div></td>
                </tr>
                <tr className="tb_data_rei_b">
                  <td className="">Website (for Buying)</td>
                  <td className=""></td>
                  <td className="rei_costdiv"><div className="rei_cost">$700</div></td>
                </tr>
                <tr className="tb_data_rei_b">
                  <td className="">Trained VA (Texting/Cold Calling Expert)</td>
                  <td className="inp_class">
                    {value > 20 ? (
                      <img src={minus} onClick={handleDecrement} alt="minus" />
                    ) : (
                      <span className="disabled"><img src={minus_disabled}/></span>
                    )}
                    <input className="inp" value={value} readOnly />
                    <img src={plus} onClick={handleIncrement} alt="plus" />
                  </td>
                  <td className="rei_costdiv"><div className="rei_cost">${value * 7}</div></td>
                </tr>
                <tr className="tb_data_rei_b">
                  <td className="">LeadGen Marketing Environment Setup</td>
                  <td className=""></td>
                  <td className="rei_costdiv"><div className="rei_cost">$200</div></td>
                </tr>
                <tr className="check">
                  <td className="">LeadGen Marketing Environment Setup</td>
                  <td className=""></td>
                  <td className="rei_costt">Free</td>
                </tr>
                <tr className="tb_data_rei_ba">
                <td className="">a</td>
                <td className=""></td>
                <td className=""></td>
              </tr>
                
               
               
              </tbody>
            </table>
            <div className="rei_text_cost">
            <p className="col-6 total_cost">Total Cost</p>
                  <p className="col-6 total_amount">${totalCost}</p>
            </div>
             
              <div className="btn_divone1">
                <button className="col-md-4 btn_reitwo1">BUY NOW</button>
              
            </div>
          </div>
        
        </div>
        <div className="col-md-4">
        <div className="Rei_kit_mian">
          <div className="tb_rei_kit1">
            <h1 className="rei_text1">REI Kit TWO</h1>
            <table className="tab_rei">
              <thead>
                <tr>
                  <th className="th_serv">Service Names</th>
                  <th className="th_serv1">Adjust Hrs.($6/hr)</th>
                  <th className="th_serv2">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tb_data_rei_b">
                  <td className="">Fully integrated CRM</td>
                  <td className=""></td>
                  <td className="rei_costdiv"><div className="rei_cost">$750</div></td>
                </tr>
                <tr className="tb_data_rei_b">
                  <td className="">Website (for Buying)</td>
                  <td className=""></td>
                  <td className="rei_costdiv"><div className="rei_cost">$700</div></td>
                </tr>
                <tr className="tb_data_rei_b">
                  <td className="">Trained VA (Texting)</td>
                  <td className="inp_class">
                    {value1 > 20 ? (
                      <img src={minus} onClick={handleDecrement1} alt="minus" />
                    ) : (
                      <span className="disabled"><img src={minus_disabled}/></span>
                    )}
                    <input className="inp" value={value1} readOnly />
                    <img src={plus} onClick={handleIncrement1} alt="plus" />
                  </td>
                  <td className="rei_costdiv"><div className="rei_cost">${value1 * 7}</div></td>
                </tr>
                <tr className="tb_data_rei_b">
                  <td className="">Trained VA (Cold Calling)</td>
                  <td className="inp_class">
                    {value2 > 20 ? (
                      <img src={minus} onClick={handleDecrement2} alt="minus" />
                    ) : (
                      <span className="disabled"><img src={minus_disabled}/></span>
                    )}
                    <input className="inp" value={value2} readOnly />
                    <img src={plus} onClick={handleIncrement2} alt="plus" />
                  </td>
                  <td className="rei_costdiv"><div className="rei_cost">${value2 * 7}</div></td>
                </tr>
                <tr className="tb_data_rei_b">
                  <td className="">LeadGen Marketing Environment Setup</td>
                  <td className=""></td>
                  <td className="rei_costdiv"><div className="rei_cost">$200</div></td>
                </tr>
                
              </tbody>
            </table>
            <div className="rei_text_cost1">
            <p className="col-6 total_cost">Total Cost</p>
                  <p className="col-6 total_amount">${totalCost1}</p>
            </div>
            <div>
             
              <div className="btn_divone">
                <button className="col-md-4 btn_reitwo">BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="col-md-4">
        <div className="Rei_kit_mian">
          <div className="tb_rei_kit2">
            <h1 className="rei_text">REI Kit THREE</h1>
            <table className="tab_rei">
              <thead>
                <tr>
                  <th className="th_serv">Service Names</th>
                  <th className="th_serv1">Adjust Hrs.($6/hr)</th>
                  <th className="th_serv2">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tb_data_rei_b">
                  <td className="">Fully integrated CRM</td>
                  <td className=""></td>
                  <td className="rei_costdiv"><div className="rei_cost">$750</div></td>
                </tr>
                <tr className="tb_data_rei_b">
                  <td className="">Website (for Buying)</td>
                  <td className=""></td>
                  <td className="rei_costdiv"><div className="rei_cost">$1400</div></td>
                </tr>
                <tr className="tb_data_rei_b">
                  <td className="">Trained VA (Texting)</td>
                  <td className="inp_class">
                    {value3 > 20 ? (
                      <img src={minus} onClick={handleDecrement3} alt="minus" />
                    ) : (
                      <span className="disabled"><img src={minus_disabled}/></span>
                    )}
                    <input className="inp" value={value3} readOnly />
                    <img src={plus} onClick={handleIncrement3} alt="plus" />
                  </td>
                  <td className="rei_costdiv"><div className="rei_cost">${value3 * 7}</div></td>
                </tr>
                <tr className="tb_data_rei_b">
                  <td className="">Trained VA (Team)</td>
                  <td className="inp_class">
                    {value4 > 20 ? (
                      <img src={minus} onClick={handleDecrement4} alt="minus" />
                    ) : (
                      <span className="disabled"><img src={minus_disabled}/></span>
                    )}
                    <input className="inp" value={value4} readOnly />
                    <img src={plus} onClick={handleIncrement4} alt="plus" />
                  </td>
                  <td className="rei_costdiv"><div className="rei_cost">${value4 * 7}</div></td>
                </tr>
                <tr className="tb_data_rei_b">
                  <td className="">LeadGen Marketing Environment Setup</td>
                  <td className=""></td>
                  <td className="rei_costdiv"><div className="rei_costt">$FREE</div></td>
                </tr>
               
              </tbody>
            </table>
            <div className="rei_text_cost2">
            <p className="col-6 total_cost">Total Cost</p>
                  <p className="col-6 total_amount">${totalCost2}</p>
            </div>
            <div>
              
              <div className="btn_divone">
                <button className="col-md-4 btn_reitwo">BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Pricing_plan;
