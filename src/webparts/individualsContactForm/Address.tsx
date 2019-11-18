import * as React from "react";
import styles from "../../helloWorld/components/HelloWorld.module.scss";
import { states } from "../../../data/address";
export interface AddressProps {}

export const Address: React.FC<AddressProps> = props => {
  const [state, setState] = React.useState(states);
  return (

    <h5>Address</h5>
    <div className={`${styles.row} ${styles.addressRow}`}>
      <div className={styles.flex1}>
        <div className={styles["ms-TextField"]}>
          <label className={styles["ms-Label"]} htmlFor="formGroupExampleInput">Address</label>
          <textarea rows={5} className={styles["ms-TextField-field"]} id="formGroupExampleInput" placeholder="" />
        </div>
      </div>
      <div className={styles.flex1}>
       <div>
            <div className={`${styles["ms-TextField"]} ${styles.city}`}>
            <label className={styles["ms-Label"]} htmlFor="formGroupExampleInput">City/Municipality</label>
            <input type="text" className={styles["ms-TextField-field"]} id="formGroupExampleInput" placeholder=" " />
        </div>
        </div>
        <div>
          <div className={`${styles["ms-TextField"]} ${styles.province}`}>
            <label className={styles["ms-Label"]} htmlFor="formGroupExampleInput">Province/State</label>
            {(this.state.selectedCountry === 0 || this.state.selectedCountry === 214) && <select className={styles["ms-TextField-field"]}  >
              {
                states.map((v, i) => {
                  return (
                    <option key={i} value="i">{v}</option>
                  )
                })
              }
            </select>}
            {
              (this.state.selectedCountry !== 0 && this.state.selectedCountry !== 214) && <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter a state " />
            }

          </div>
        </div>
      </div>
      <div className={styles.flex1}>
        <div>
          <div className={`${styles["ms-TextField"]} ${styles.country}`}>
            <label className={styles["ms-Label"]} htmlFor="formGroupExampleInput">Country</label>
            <select className={styles["ms-TextField-field"]} defaultValue="0" onChange={e=> this.selectCountry(e)} >
              {
                this.state.countries.map((v, i) => {
                  return (
                    <option key={i} value={i}>{v}</option>
                  )
                })
              }
            </select>
          </div>
        </div>
        <div>
          <div className={`${styles["ms-TextField"]} ${styles.postalcode}`}>
            <label className={styles["ms-Label"]} htmlFor="formGroupExampleInput">Postal/Zip Code</label>
            <input type="text" className={styles["ms-TextField-field"]} maxLength= {8} id="formGroupExampleInput" placeholder=" " onChange={e => this.getValidator(e)} />
              {!this.state.zipvalidator && 'Invalid zip code entered'}
          </div>
        </div>
      </div>
    </div>
    <div className={` ${styles.row} ${styles.homeQuarterRow}`}>
      <div className={styles.flex1}>
        <div className={styles["ms-TextField"]}>
          <label className={styles["ms-Label"]} htmlFor="formGroupExampleInput">Home Quarter</label>
          <input type="text" className={styles["ms-TextField-field"]} id="formGroupExampleInput" placeholder=" " />
        </div>
      </div>
      <div className={styles.flex2}>
          <div className={`${styles["ms-CheckBoxField"]} ${styles.alignCheckbox} `}>
            <span><input className={styles["ms-TextField"]} type="checkbox" id="gridCheck" /> </span>
            <span>Residence is the same as listed address</span>

          </div>
      </div>
      <div className={styles.flex1}></div>
   
    
    <hr className={styles.horizontalSeparator}/>
  )} )
</>
);
};

