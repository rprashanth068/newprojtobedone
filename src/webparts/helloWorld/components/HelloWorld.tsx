import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ContactHeader } from '../components/';

const save_ico = require('../../../icons/NRD-00001_02013_ICO_Save cccccc_001.svg');
const delete_ico = require('../../../icons/NRD-00001_02013_ICO_Delete 52525b_001.svg');
const delete_icon1 = require('../../../icons/NRD-00001_02013_ICO_Delete cccccc_001.svg');
const edit_ico = require( '../../../icons/NRD-00001_02013_ICO_Edit 52525b_001.svg');
const plus_ico = require('../../../icons/NRD-00001_02013_ICO_New 52525b_001.svg');
const toggle_ico  = require( '../../../icons/NRD-00001_02013_ICO_ToggleLeft cccccc_001.svg');
const save_icon  = require( '../../../icons/NRD-00001_02013_ICO_Save ff6600_001.svg');
const delete_icon  = require( '../../../icons/NRD-00001_02013_ICO_Delete ff6600_001.svg');
const edit_icon  = require('../../../icons/NRD-00001_02013_ICO_Edit ff6600_001 (1).svg');
const plus_icon  = require( '../../../icons/NRD-00001_02013_ICO_New ff6600_001 (2).svg');
import { state,country, canadaStates, usStates } from '../../../data/Address';
import { comments,documents,parents } from '../../../data/data';
import {Typeahead} from 'react-typeahead';

interface IHelloWorldState {
  states: state;
  countries: country;
  save: any;
  edit: any;
  edit2: any;
  delete: any;
  plus: any;
  delete1: any;
  delete2: any;
  delete3: any;
  comments: comments;
  documents: documents;
  selectedComment: any;
  tComments: any;
  selectedDocument: any;
  tDocuments: any;
  selected: any;
  selectedCountry: number;
  zipvalidator: boolean;
  activeForm: number;
  homequatere: boolean;
}

// export default class HelloWorld extends React.Component<
//   IHelloWorldProps,
//   IHelloWorldState
// > {





export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {

  constructor(props) {
    super(props);
  }
    state = {
      states: state,
        countries: country,
        save: save_ico,
        edit: edit_ico,
        edit2: edit_ico,
        delete:delete_ico,
        plus:plus_ico,
        delete1:delete_icon1,
        delete2:delete_ico,
        delete3:delete_ico,
        comments:comments,
        documents:documents,
        selectedComment:{},
        tComments: [],
        selectedDocument:{},
        tDocuments:[],
        selected: [],
        selectedCountry: 0,
        zipvalidator:true,
        activeForm: 0
        contactData: {'save': save_ico, 'delete': delete_icon1, 'save1': save_icon, 'delete1': delete_icon}
    }


    refe2;
    refe1;

    iconOver = (type) => {
      switch(type){
       case 'save':
         this.setState({save:save_icon})
         break;
         case 'edit':
           this.setState({edit:edit_icon})
           break;
           case 'edit2':
            this.setState( {edit2:edit_icon})
            break;
           case 'delete':
             this.setState( {delete: delete_icon})
             break;
             case 'plus':
             this.setState( {plus: plus_icon})
             break;
             case 'delete1':
              this.setState( {delete1:delete_icon})
              break;
              case 'delete2':
              this.setState( {delete2:delete_icon})
              break;
              case 'delete3':
              this.setState( {delete3:delete_icon})
              break;
             default:
               break;
     }
    }

    iconOut = (type) => {
      switch(type){
       case 'save':
         this.setState({save:save_ico})
         break;
         case 'edit':
           this.setState({edit:edit_ico})
           break;
           case 'edit2':
            this.setState({edit2:edit_ico})
            break;

           case 'delete':
             this.setState( {delete: delete_ico})
             break;
             case 'plus':
             this.setState( {plus: plus_ico})
             break;
             case 'delete1':
             this.setState( {delete1:delete_icon1})
             break;
             case 'delete2':
              this.setState( {delete2:delete_ico})
              break;
              case 'delete3':
              this.setState( {delete3:delete_ico})
              break;

             default:
               break;
     }
    }

    selectComment = (event, row) => {
      row._gcomment = row.gcomment;
      this.state.comments.map(c=>{
        if(c.id === row.id){
          c.selected = !c.selected;
          if(c.selected) {
            this.setState({selectedComment:row})
          }else {
            this.setState({selectedComment:{}})
            this.refe2.value = '';
          }
        }else{
          c.selected = false;
        }
      })
      console.log(comments);
    }
    selectDocument = (event, row) => {
      row._docname = row.docname;
      this.setState({selectedComment:row});
      this.state.documents.map(d=>{
        if(d.id === row.id){
          d.selected = !d.selected;
          if(d.selected){
            this.setState({selectedDocument: row})
          }else{
            this.setState({selectedDocument: {}})
            this.refe1.value = '';
          }
        }else{
          d.selected = false;
        }
      })
      console.log(documents);
    }

    changeComment = (event) => {
      let e = event.target.value;
      event.preventDefault();
      //let me = this;
      let _tcoment1 = this.state.comments;
      /** Mutablity isssue  */
      //_tcoment1 = Array.from(this.state.comments);
      let t = {};
      _tcoment1.forEach(c => {
        if(c.id === this.state.selectedComment["id"]){
          c._gcomment = e;
          t = c;
        }
      })
      this.setState({selectedComment: t});
      this.setState({tComments: _tcoment1});
    }
    changeDocument = (event) => {
      let e = event.target.value;
      event.preventDefault();
      //let me = this;
      let _dDoument1 = this.state.documents;
      /** Mutablity isssue  */
      //_tcoment1 = Array.from(this.state.comments);
      let t = {};
      _dDoument1.forEach(d => {
        if(d.id === this.state.selectedDocument["id"]){
          d._docname = e;
          t = d;
        }
      })
      this.setState({selectedDocument: t});
      this.setState({tDocuments: _dDoument1});
    }

    saveComments = () => {
      this.state.tComments.map(c => {
        c.gcomment = c._gcomment ? c._gcomment : c.gcomment;
      })
      this.setState({comments: this.state.tComments})
    }
    saveDocuments = () => {
      this.state.tDocuments.map(d => {
        d.docname = d._docname ? d._docname : d.docname;
      })
      this.setState({documents: this.state.tDocuments})
    }

    selectCountry = (e) => {
      this.setState({selectedCountry: e.target.selectedIndex });
    }

    getValidator = (e) => {
      if(e.target.value === ''){
        this.setState({zipvalidator: true})
        return;
      }
      switch(this.state.selectedCountry){
        case 214:
          this.setState({zipvalidator: (/^(([A-Za-z][A-Za-z]\s\d{5}))$/).test(e.target.value)})
          return;
        case 0:
            this.setState({zipvalidator: (/^(([A-Za-z]\d[A-Za-z]\s\d[A-Za-z]\d))$/).test(e.target.value)})
          return;
          default:
              this.setState({zipvalidator: true})
            return;
      }


    }

    toggleForms = () => {
      this.setState({ activeForm: this.state.activeForm === 0 ? 1 : 0 });
    };


  public render(): React.ReactElement<IHelloWorldProps> {
    const states = this.state.selectedCountry === 0 ? canadaStates : (this.state.selectedCountry === 214 ? usStates : [])
    return ( 
    
    <ContactHeader contactData={this.state.contactData}></ContactHeader>

    )}

     /*  <div className={styles.helloWorld}  >
      <div className="container main-container ">
        <h5 className={styles.contactHeader}>Contact</h5>
        <div className={`${styles.row} ${styles.headerRow}`}>
          <div className={styles.flex3}>
            <img src={this.state.save as string}
              height="14px"
              width="14px"
              className={styles.saveicons}
              alt="saveicon"
              onMouseOver={()=>this.iconOver('save')}
              onMouseOut ={()=>this.iconOut('save')}
            />
            <img src={this.state.delete1 as string}
              height="14px"
              width="14px"
              alt="deleteicon"
              className={styles.saveicons}
              onMouseOver={()=>this.iconOver('delete1')}
              onMouseOut ={()=>this.iconOut('delete1')}
            />
          </div>
          <div className={`${styles.flex3} ${styles.toggleContainer}`}>
            <span className={styles.togglespan}>Individuals</span>
            <img src={toggle_ico as string}
              height="12px"
              width="25px"
              className={styles.toggleIcon}
              alt="toggleicon"

              // onClick={this.toggleForms}
              
            />
             <span className={styles.togglespan}>Entities</span>
          </div>
          </div> */
         {/* <div className={styles.flex7} ></div>

       </div>
          <div className={styles.myform}>
          <div className= "namemargin"></div>
          <h5 className={styles.formHeading}>Name</h5>
          <div className={styles.deceasedCheckBox}>
            <span>
              <label className={`${styles.labelposition} `} htmlFor="gridCheck">
                Deceased
              </label>
              <input className="form-check-input" type="checkbox" id="gridCheck" />
            </span>
          </div>

          {this.state.activeForm === 0 && (

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
                {/* <div className="col-2 contactcolsize"> 
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
             <hr className={styles.horizontalSeparator}/> */}











          {/* <h5 className={styles.formHeading} >Contact</h5>
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

            )} */}





{/* {this.state.activeForm === 1 && (
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

            <hr className={styles.horizontalSeparator}/> */}






          {/* <h5>Address</h5>
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
          </div>
          <hr className={styles.horizontalSeparator}/> */}


          {/* <h5>Tax Number </h5>
          <div className={` ${styles.row} ${styles.taxRow}`}>
            <div className={styles.flex1}>
              <div className={`${styles["ms-TextField"]}`}>
                <label
                  className={styles["ms-Label"]}
                  htmlFor="formGroupExampleInput"
                >
                  GST#
                </label>
                <input
                  type="text"
                  className={styles["ms-TextField-field"]}
                  id="formGroupExampleInput"
                  placeholder=" "
                  maxLength={17}
                />
              </div>
            </div>
            <div className={styles.flex1}>
              <div className={`${styles["ms-TextField"]}`}>
                <label
                  className={styles["ms-Label"]}
                  htmlFor="formGroupExampleInput"
                >
                  HST#
                </label>
                <input
                  type="text"
                  className={styles["ms-TextField-field"]}
                  id="formGroupExampleInput"
                  placeholder=" "
                  maxLength={17}
                />
              </div>
            </div>
            <div className={styles.flex1}>
              <div className={`${styles["ms-TextField"]}`}>
                <label
                  className={styles["ms-Label"]}
                  htmlFor="formGroupExampleInput"
                >
                  PST#
                </label>
                <input
                  type="text"
                  className={styles["ms-TextField-field"]}
                  id="formGroupExampleInput"
                  placeholder=" "
                  maxLength={8}
                />
              </div>
            </div>
            <div className={styles.flex1}>
              <div className={`${styles["ms-TextField"]}`}>
                <label
                  className={styles["ms-Label"]}
                  htmlFor="formGroupExampleInput"
                >
                  QST#
                </label>
                <input
                  type="text"
                  className={styles["ms-TextField-field"]}
                  id="formGroupExampleInput"
                  placeholder=" "
                  maxLength={15}
                />
              </div>
            </div>
            <div className={styles.flex2}></div>
          </div>
          <hr className={styles.horizontalSeparator} />



          <h5>Parent (Individual or Entity)</h5>
            <div className={`${styles.row} ${styles.parentRow}`}>
              <div className={styles.flex7}>
                <div className={styles["ms-TextField"]}>
                 
                <input className={styles["ms-TextField-field"]} type="text" />
                </div>
              </div>
              <div
                className={`${styles.flex2} ${styles["usericon-align"]}}`}>
                <i className="fas fa-user"></i>
              </div>
              <div className={styles.flex3}></div>
            </div>
            <hr className={styles.horizontalSeparator} /> */}






            {/* <h5 className={styles.commentsLabel}>Comments</h5>
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

 */}

                {/* <h5>Documents</h5>
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
} */}


<div>
<Form activeForm={this.state.activeForm}
      delete3={this.state.delete3}
      delete1={this.state.delete1}
      plus={this.state.plus}
      save={this.state.save}
      comments={this.state.comments}
      selectedComment={this.state.selectedComment}
      documents={this.state.documents}
      selectedDocument={this.state.selectedDocument}
      iconOver={this.iconOver}
      iconOut={this.iconOut}
      ></Form>
</div>
</>
)
}
}

