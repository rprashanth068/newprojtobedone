import * as React from "react";

import { Typeahead } from "react-typeahead";
import styles from "../../helloWorld/components/HelloWorld.module.scss";
export interface INameProps {}

export const NameHeader: React.FC<INameProps> = props => {
  const [activeForm, setActiveForm] = React.useState(0);
  return (
    <>
      {activeForm === 0 && (

{this.state.activeForm === 0 && (

    
    <div className={styles.flex7} ></div>

    </div>
    <div className={`${styles.row} ${styles.namesRow}`}>
      <div className={`${styles.flex2} ${styles.contactColSize}`}>
        <div className={styles["ms-TextField"]}>
          <label className={styles["ms-Label"]} htmlFor="formGroupExampleInput">First Name <span className="required" > *</span></label>
          <input type="text" className={styles["ms-TextField-field"]} maxLength={255} id="formGroupExampleInput" placeholder=" " />
        </div>
      </div>
      <div className={`${styles.flex2} ${styles.contactColSize}`}>
        <div className={styles["ms-TextField"]}>
        <label className={styles["ms-Label"]} htmlFor="formGroupExampleInput">Middle Name</label>
          <input type="text" className={styles["ms-TextField-field"]} maxLength={255} id="formGroupExampleInput" placeholder=" " />
        </div>
      </div>
      <div className={`${styles.flex2} ${styles.contactColSize}`}>
        <div className={styles["ms-TextField"]}>
        <label className={styles["ms-Label"]} htmlFor="formGroupExampleInput">Last Name <span className="required" > *</span></label>
          <input type="text" className={styles["ms-TextField-field"]} id="formGroupExampleInput" placeholder=" " />
        </div>
      </div>
      <div className={styles.flex3}>
        <div className={styles["ms-TextField"]}>
        <label className={styles["ms-Label"]} htmlFor="formGroupExampleInput">Preferred Name</label>
          <input type="text" className={styles["ms-TextField-field"]} maxLength={255} id="formGroupExampleInput" placeholder=" " />
        </div>
      </div>
    </div>
    )}



    {this.state.activeForm === 1 && (
        <div className={styles.row}>
          {/* <div className="col-2 contactcolsize"> */}
          <div className={`${styles["col-8"]}`}>
            <div className={styles["ms-TextField"]}>
              <label
                className={styles["ms-Label"]}
                htmlFor="formGroupExampleInput"
              >
                Entity Name <span className={styles.required}> *</span>
              </label>
              <input
                type="text"
                className={styles["ms-TextField-field"]}
                id="formGroupExampleInput"
                placeholder=" "
              />
            </div>
          </div>
          <div className={`${styles["col-2"]}`}>
            <div className={styles["ms-TextField"]}>
              <label
                className={styles["ms-Label"]}
                htmlFor="formGroupExampleInput"
              >
                c/o Name
              </label>
               <div className={styles["type-Ahead"]}>
                <Typeahead
                      options={['John', 'Paul', 'George', 'Ringo']}
                      maxVisible={2}
                    />
                    </div>
            </div>
          </div>
        </div>
      )}
       <hr className={styles.horizontalSeparator}/>










