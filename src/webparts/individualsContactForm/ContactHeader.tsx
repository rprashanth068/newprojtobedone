import * as React from 'react';
import styles from '../helloWorld/components/HelloWorld.module.scss';
//const delete_icon1 = require('../../../icons/NRD-00001_02013_ICO_Delete cccccc_001.svg');
//const save_ico = require('../../../icons/NRD-00001_02013_ICO_Save cccccc_001.svg');
//const save_icon = require("../../../icons/NRD-00001_02013_ICO_Save ff6600_001.svg");
const toggle_ico  = require( '../../../icons/NRD-00001_02013_ICO_ToggleLeft cccccc_001.svg');


export interface IContactHeaderProps {
	contactData: {
		save: any,
		save1: any,
		delete: any,
		delete1: any
	};
}

export class ContactHeader extends React.Component<IContactHeaderProps, {}> {
    constructor(props) {
			super(props);
		}

		state = {save: this.props.contactData.save, delete: this.props.contactData.delete};
		
		iconOver = (type) => {
			switch(type) {
				case 'save':
          this.setState({save:this.props.contactData.save})
					break;
				case 'delete':
					this.setState({delete:this.props.contactData.delete});
					break;
				default:
					break;
			}
		}

		iconOut = (type) => {
			switch(type) {
				case 'save':
          this.setState({save:this.props.contactData.save1})
					break;
				case 'delete':
					this.setState({delete:this.props.contactData.delete1});
					break;
				default:
					break;
			}
		}


    render() {
        return (
					<div>
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
              <img src={this.state.delete as string}
                height="14px"
                width="14px"
                alt="deleteicon"
                className={styles.saveicons}
                onMouseOver={()=>this.iconOver('delete')}
                onMouseOut ={()=>this.iconOut('delete')}
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
            <div className={styles.flex7} ></div>  
          </div>
					</div>
				)
    }
}


