import * as React from "react";
import styles from "../../helloWorld/components/HelloWorld.module.scss";

export interface SignatoriesProps {}

export const Contact: React.FC<SignatoriesProps> = props => {
  return(
    <>
     <h5 className={styles.formHeading} >Contact</h5>
            {this.state.activeForm === 0 && ({this.state.activeForm === 1 && (
    <div>
      <hr  />
      <h5>Signatories</h5>
      <label className={styles["preffered-sign"]}>
        Preffered Signatory
      </label>
      <div
        className={`${styles["ms-TextField"]} ${styles["table-input"]} ${styles["table-input-signaturies"]} ${styles.mLeft}`}
      >
        <span>
          <img
            src={this.state.edit2 as string}
            height="18px"
            width="18px"

            alt="editicon"
            onMouseOver={() => this.iconOver("edit2")}
            onMouseOut={() => this.iconOut("edit2")}
          />
        </span>

        <span>
          <img
            src={this.state.delete as string}
            height="18px"
            width="18px"
            className={styles.signotorydeleteicons}
            alt="deleteicon"
            onMouseOver={() => this.iconOver("delete")}
            onMouseOut={() => this.iconOut("delete")}
          />
        </span>
        <span>

          <div className={`${styles["type-Ahead"]} ${styles["table-input"]} ${styles["margin-icons"]}`}>
            <Typeahead
                  options={['John', 'Paul', 'George', 'Ringo']}
                  maxVisible={2}
                />
                </div>
        </span>
        <span>
          <i
            className="far fa-2x fa-plus"
            onClick={this.saveDocuments}
          ></i>
        </span>
        <span className={styles["margin-icons"]}>
          <img
            src={this.state.edit2 as string}
            height="18px"
            width="18px"

            alt="editicon"
            onMouseOver={() => this.iconOver("edit2")}
            onMouseOut={() => this.iconOut("edit2")}
          />
        </span>
        <span className={styles["margin-icons"]}>
          <input type="checkbox" name="sign" />
        </span>
        <span className={styles["margin-icons"]}>
          <img
            src={this.state.plus as string}
            height="18px"
            width="18px"

            alt="editicon"
            onMouseOver={() => this.iconOver("edit2")}
            onMouseOut={() => this.iconOut("edit2")}
          />
        </span>
      </div>

      <div className={`${styles["sign-Tabel"]} ${styles.mLeft}`}>
        <table className={styles["table-Head"]}>
          <thead>
            <tr>
              <th scope="row">
                <div className="form-check form-check-align">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                </div>
              </th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Preferred Name</th>
            </tr>
          </thead>
        </table>
      </div>

      <div
        className={`${styles["sign-Tabel"]} ${styles["scroll-table"]} ${styles.mLeft}`}
      >
        <table className={styles["table-Body"]}>
          <tbody>
            {this.state.documents.map(row => (
              <tr>
                <td scope="row">
                  <div className="form-check form-check-align">
                    <input

                      type="checkbox"
                      id="gridCheck"
                      name="document_chk"
                      defaultValue={row.selected}
                      checked={row.selected}
                      onChange={e => {
                        this.selectDocument(e, row);
                      }}
                    />
                  </div>
                </td>
                <td>{row.docname}</td>
                <td>{row.dateuploaded}</td>
                <td>
                  <input
                  className={styles["ms-TextField"]}
                  type="checkbox"
                  id="gridCheck"
                />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )}

  <hr className={styles.horizontalSeparator}/>
