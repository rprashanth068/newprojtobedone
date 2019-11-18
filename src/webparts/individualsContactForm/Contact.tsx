import * as React from "react";
import styles from "../../helloWorld/components/HelloWorld.module.scss";

export interface ContactProps {}

export const Contact: React.FC<ContactProps> = props => {
  return(
    <>
     <h5 className={styles.formHeading} >Contact</h5>
            {this.state.activeForm === 0 && (
          <div className={`${styles.row} ${styles.contactRow} `}>

            <div className={styles.flex2}>
              <div className={`${styles["ms-TextField"]}`} >
                <label className={styles["ms-Label"]} htmlFor="formGroupExampleInput">Home Phone</label>
                  <input type="text" className={styles["ms-TextField-field"]} maxLength={12} id="formGroupExampleInput" placeholder=" " />
              </div>
            </div>
            <div className={styles.flex2}>
              <div className={`${styles["ms-TextField"]}  `}>
                <label className={styles["ms-Label"]} htmlFor="formGroupExampleInput">Mobile Number</label>
                <input type="text" className={styles["ms-TextField-field"]}  maxLength={12} id="formGroupExampleInput" placeholder=" " />
              </div>
            </div>
            <div className={styles.flex2}>
              <div className={`${styles["ms-TextField"]}  `}>
                <label className={styles["ms-Label"]} htmlFor="formGroupExampleInput">Business Phone</label>
                <input type="text" className={styles["ms-TextField-field"]}  maxLength={12} id="formGroupExampleInput" placeholder=" " />
              </div>
            </div>
            <div className={styles.flex1}>
              <div className={`${styles["ms-TextField"]}  `}>
                <label className={styles["ms-Label"]} htmlFor="formGroupExampleInput">Ext</label>
                <input type="text" className={styles["ms-TextField-field"]}  maxLength={12} id="formGroupExampleInput" placeholder=" " />
              </div>
            </div>
            <div className={styles.flex2}>
              <div className={`${styles["ms-TextField"]} `}>
                <label className={styles["ms-Label"]} htmlFor="formGroupExampleInput">Fax Number</label>
                <input type="text"className={styles["ms-TextField-field"]}  maxLength={12} id="formGroupExampleInput" placeholder=" " />
              </div>
            </div>

            <div className={`${styles.row} ${styles.contactRow}`}>

            <div className={styles.flex1}>

            <div className={`${styles["ms-TextField"]} ${styles.email}`}>

            <label className={styles["ms-Label"]} htmlFor="formGroupExampleInput">Email Address</label>

          <input type="text" className={styles["ms-TextField-field"]} id="formGroupExampleInput" placeholder=" " />

           </div>

           </div>

           </div>



            </div>

   )}


{this.state.activeForm === 1 && (
              <div>
                <div className={styles.flex2}>
              <div className={`${styles["ms-TextField"]}  `}>
                <label className={styles["ms-Label"]} htmlFor="formGroupExampleInput">Business Phone</label>
                <input type="text" className={styles["ms-TextField-field"]}  maxLength={12} id="formGroupExampleInput" placeholder=" " />
              </div>
            </div>
            <div className={styles.flex1}>
              <div className={`${styles["ms-TextField"]}  `}>
                <label className={styles["ms-Label"]} htmlFor="formGroupExampleInput">Ext</label>
                <input type="text" className={styles["ms-TextField-field"]}  maxLength={12} id="formGroupExampleInput" placeholder=" " />
              </div>
            </div>
            <div className={styles.flex2}>
              <div className={`${styles["ms-TextField"]}  `}>
                <label className={styles["ms-Label"]} htmlFor="formGroupExampleInput">Mobile Number</label>
                <input type="text" className={styles["ms-TextField-field"]}  maxLength={12} id="formGroupExampleInput" placeholder=" " />
              </div>
            </div>
            <div className={styles.flex2}>
              <div className={`${styles["ms-TextField"]} `}>
                <label className={styles["ms-Label"]} htmlFor="formGroupExampleInput">Fax Number</label>
                <input type="text"className={styles["ms-TextField-field"]}  maxLength={12} id="formGroupExampleInput" placeholder=" " />
              </div>
            </div>
            <div className={styles.flex1}>

            <div className={`${styles["ms-TextField"]} ${styles.email}`}>

             <label className={styles["ms-Label"]} htmlFor="formGroupExampleInput">Email Address</label>

           <input type="text" className={styles["ms-TextField-field"]} id="formGroupExampleInput" placeholder=" " />

            </div>

              </div>
                </div>

            )}

