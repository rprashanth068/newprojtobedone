import * as React from "react";
import styles from "../../helloWorld/components/HelloWorld.module.scss";
const edit_ico = require("../../../icons/NRD-00001_02013_ICO_Edit 52525b_001.svg");
const delete_ico = require("../../../icons/NRD-00001_02013_ICO_Delete 52525b_001.svg");
const plus_ico = require("../../../icons/NRD-00001_02013_ICO_New 52525b_001.svg");
const delete_icon  = require( '../../../icons/NRD-00001_02013_ICO_Delete ff6600_001.svg');
const edit_icon  = require('../../../icons/NRD-00001_02013_ICO_Edit ff6600_001 (1).svg');
const plus_icon  = require( '../../../icons/NRD-00001_02013_ICO_New ff6600_001 (2).svg');

export interface DocumentstableProps {
  delete3: any;
  plus: any;
  documents: any;
  selecteddocument: any;
  iconOver: any;
  iconOut: any;
  
}

<h5>Documents</h5>
<div>
  <img
    src={this.state.edit2 as string}
    height="18px"
    width="18px"
    className={styles.editIcons}
    alt="editicon"
    onMouseOver={() => this.iconOver("edit2")}
    onMouseOut={() => this.iconOut("edit2")}
  />
  &nbsp; &nbsp; &nbsp;
  <img
    src={this.state.delete as string}
    height="18px"
    width="18px"
    className="deleteicons"
    alt="deleteicon"
    onMouseOver={() => this.iconOver("delete")}
    onMouseOut={() => this.iconOut("delete")}
  />
</div>
<div
  className={`${styles["ms-TextField"]} ${styles["table-input"]}`}
>
  <input
    type="text"
    className={`${styles["ms-TextField-field"]} ${styles["table-input"]}`}
    ref={node => (this.refe1 = node)}
    value={this.state.selectedDocument["_docname"]}
    id="formGroupExampleInput"
    placeholder=" "
    onChange={e => this.changeDocument(e)}
  />
  <i
    className="far fa-2x fa-plus"
    onClick={this.saveDocuments}
  ></i>
</div>

<div className={styles["document-Tabel"]}>
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
        <th>Document Name</th>
        <th>Date</th>
        <th>Who Uploaded</th>
      </tr>
    </thead>
  </table>
</div>

<div
  className={`${styles["document-Tabel"]} ${styles["scroll-table"]}`}
>
  <table className={styles["table-Body"]}>
    <tbody>
      {this.state.documents.map(row => (
        <tr>
          <td>
            <div className="form-check form-check-align">
              <input
                className="form-check-input"
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
          <td>{row.whouploaded}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>

</div>
</div>

);
}
}
