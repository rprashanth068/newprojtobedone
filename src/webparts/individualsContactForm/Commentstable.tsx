import * as React from "react";
import styles from "../../helloWorld/components/HelloWorld.module.scss";
const edit_ico = require("../../../icons/NRD-00001_02013_ICO_Edit 52525b_001.svg");
const delete_ico = require("../../../icons/NRD-00001_02013_ICO_Delete 52525b_001.svg");
const plus_ico = require("../../../icons/NRD-00001_02013_ICO_New 52525b_001.svg");
const plus_icon  = require( '../../../icons/NRD-00001_02013_ICO_New ff6600_001 (2).svg');
const delete_icon  = require( '../../../icons/NRD-00001_02013_ICO_Delete ff6600_001.svg');
const edit_icon  = require('../../../icons/NRD-00001_02013_ICO_Edit ff6600_001 (1).svg');

export interface CommentstableProps {
  delete2: any;
  plus: any;
  comments: any;
  selectedComment: any;
  iconOver: any;
  iconOut: any;
}

<h5 className={styles.commentsLabel}>Comments</h5>
<div>
  <img
    src={this.state.edit as string}
    height="18px"
    width="18px"
    className={styles.editIcons}
    alt="editicon"
    onMouseOver={() => this.iconOver("edit")}
    onMouseOut={() => this.iconOut("edit")}
  />
  &nbsp; &nbsp; &nbsp;
  <img
    src={this.state.delete3 as string}
    height="18px"
    width="18px"
    className="deleteicons"
    alt="deleteicon"
    onMouseOver={() => this.iconOver("delete3")}
    onMouseOut={() => this.iconOut("delete3")}
  />
</div>
<div
  className={`${styles["ms-TextField"]} ${styles.customFormInputContainer}`}
>
  <div className={styles.customFormInput}>
    <span className={styles.inputContainer}>
      <input
        type="text"
        className={`${styles["ms-TextField-field"]} ${styles["table-input"]}`}
        ref={node => (this.refe2 = node)}
        value={this.state.selectedComment["_gcomment"]}
        id="formGroupExampleInput"
        placeholder=" "
        onChange={e => this.changeComment(e)}
      />
    </span>
    <span className={styles.iconContainer}>
      <img
        src={this.state.plus as string}
        height="18px"
        width="18px"
        className="plusicon"
        alt="plusicon"
        onMouseOver={() => this.iconOver("plus")}
        onMouseOut={() => this.iconOut("plus")}
        onClick={this.saveComments}
      />
    </span>
  </div>
</div>

<div className={`${styles.commentsTable}`}>
  <table className={styles["table-Head"]}>
    <thead>
      <tr>
        <th>
          <div className="form-check form-check-align">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
          </div>
        </th>
        <th>General comment regarding Individual</th>
        <th>Date</th>
        <th>Who</th>
      </tr>
    </thead>
  </table>
</div>

<div className={` ${styles["scroll-table"]} ${styles.commentsTable}`}>
  <table className={styles["table-Body"]}>
    <tbody>
      {this.state.comments.map(row => (
        <tr>
          <td>
            <div className="form-check form-check-align">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
                name="comment_chk"
                defaultValue={row.selected}
                checked={row.selected}
                onChange={e => {
                  this.selectComment(e, row);
                }}
              />
            </div>
          </td>

          <td>{row.gcomment}</td>

          <td>{row.date}</td>

          <td>{row.who}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  <div>

  <hr className={styles.horizontalSeparator}/>


  )} )
      </div>
    </>
  );
};

