import { useState,useEffect } from 'react';

import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io';
import OrangeCheckbox from '../../../../../../../utils/orange-checkbox/OrangeCheckbox';
import ApartmentsDropbox from './apartments-dropbox/ApartmentsDropbox';
import HousesDropbox from './houses-dropbox/HousesDropbox';
import OtherDropbox from './other-dropbox/OtherDropbox';

type Props = { dispatchForm: Function, state: {values: {apartments: string[], houses: string[], others: string[]}, valid: boolean}, closeDropbox: Function};

const PropertyDropbox = (props: Props) => {

    const [dropbox,setDropbox] = useState<{apartments: boolean,houses:boolean,others:boolean}>( {apartments: false, houses: false, others: false} );

    const apartmentsDropboxHandler = () => setDropbox( { apartments: !dropbox.apartments, houses: false, others: false } );
    const housesDropboxHandler = () => setDropbox( { apartments: false ,houses: !dropbox.houses , others: false } );
    const othersDropboxHandler = () => setDropbox( { apartments: false , houses: false ,others: !dropbox.others } );

    const [checkedCategory,setCheckedCategory] = useState({checkedAll: false,checkedApartments:false,checkedHouses:false,checkedOthers:false});
    const [checked,setChecked] = useState<{apartments: string[],houses: string[], others: string[]}>({apartments:[],houses:[],others:[]});

    const categoryCheckHandler = (event: any) => {        
        switch(event.target.value){
            case 'all':{
                if(checkedCategory.checkedAll){
                    setCheckedCategory({checkedAll:false,checkedApartments:false,checkedHouses:false,checkedOthers:false});
                    props.dispatchForm({type: 'PROPERTY_KIND', payload: {value: []}, option: 'APARTMENTS'}); 
                    props.dispatchForm({type: 'PROPERTY_KIND', payload: {value: []}, option: 'HOUSES'}); 
                    props.dispatchForm({type: 'PROPERTY_KIND', payload: {value: []}, option: 'OTHERS'}); 
                    break;
                }else{
                    setCheckedCategory({checkedAll:true,checkedApartments:true,checkedHouses:true,checkedOthers:true});
                    props.dispatchForm({type: 'PROPERTY_KIND', payload: {value: ['apartment','garden_apartment','penthouse','duplex','holiday_apartment','basement','triplex','studio','studio_loft']}, option: 'APARTMENTS'}); 
                    props.dispatchForm({type: 'PROPERTY_KIND', payload: {value: ['private_house','farm']}, option: 'HOUSES'});
                    props.dispatchForm({type: 'PROPERTY_KIND', payload: {value: ['fields','nursing_home','tower','warehouse','parking','purchase_group','general']}, option: 'OTHERS'});
                    break;
                }
            }
            case 'apartments': {
                if(checkedCategory.checkedApartments){
                    props.dispatchForm({type: 'PROPERTY_KIND', payload: {value: []}, option: 'APARTMENTS'}); 
                    setCheckedCategory({...checkedCategory,checkedApartments: false});
                    break;
                } else{
                    props.dispatchForm({type: 'PROPERTY_KIND', payload: {value: ['apartment','garden_apartment','penthouse','duplex','holiday_apartment','basement','triplex','studio','studio_loft']}, option: 'APARTMENTS'}); 
                    setCheckedCategory({...checkedCategory,checkedApartments: true});
                    break;
                }
            }
            case 'houses': {
                if(checkedCategory.checkedHouses){
                    props.dispatchForm({type: 'PROPERTY_KIND', payload: {value: []}, option: 'HOUSES'}); 
                    setCheckedCategory({...checkedCategory,checkedHouses: false});
                    break;
                } else{
                    props.dispatchForm({type: 'PROPERTY_KIND', payload: {value: ['private_house','farm']}, option: 'HOUSES'}); 
                    setCheckedCategory({...checkedCategory,checkedHouses: true});
                    break;
                }
            }
            case 'others': {
                if(checkedCategory.checkedOthers){
                    props.dispatchForm({type: 'PROPERTY_KIND', payload: {value: []}, option: 'OTHERS'}); 
                    setCheckedCategory({...checkedCategory,checkedOthers: false});
                    break;
                } else{
                    props.dispatchForm({type: 'PROPERTY_KIND', payload: {value: ['fields','nursing_home','tower','warehouse','parking','purchase_group','general']}, option: 'OTHERS'}); 
                    setCheckedCategory({...checkedCategory,checkedOthers: true});
                    break;
                }
            }
        }
    }

    useEffect(()=>{
        setChecked(props.state.values);
        const checkCata = {checkedAll: false, checkedApartments: false, checkedHouses: false, checkedOthers: false};
        if(props.state.values.apartments.length === 9 ) checkCata.checkedApartments = true;
        if(props.state.values.houses.length === 2 ) checkCata.checkedHouses = true;
        if(props.state.values.others.length === 7) checkCata.checkedOthers = true;
        if(checkCata.checkedApartments && checkCata.checkedHouses && checkCata.checkedOthers ) checkCata.checkedAll = true;
        setCheckedCategory(checkCata);
    },[props.state.values]);

    return (
        <div className="property-dropbox">
            <div style={{borderBottom: '1px solid rgba(0, 0, 0, 0.15)'}} onClick={categoryCheckHandler}>
                <OrangeCheckbox value='all' checked={checkedCategory.checkedAll} />
                <span>כל סוגי הנכסים</span>
            </div>
            <div onClick={categoryCheckHandler}>
                <OrangeCheckbox value='apartments' checked={checkedCategory.checkedApartments}/>
                <span>דירות {checked.apartments.length > 0 && <span className='see-trough'>נבחרו {checked.apartments.length} סוגים</span>}</span>
                {dropbox.apartments ? <IoIosArrowUp className="dropbox-arrow-icon" onClick={apartmentsDropboxHandler}/> 
                                : <IoIosArrowDown className="dropbox-arrow-icon" onClick={apartmentsDropboxHandler}/> }
            </div>
            { dropbox.apartments && <ApartmentsDropbox checkedAll={checkedCategory.checkedApartments} dispatchForm={props.dispatchForm} checked={checked.apartments}/> }
            <div onClick={categoryCheckHandler}>
                <OrangeCheckbox value='houses' checked={checkedCategory.checkedHouses}/>
                <span>בתים {checked.houses.length > 0 && <span className='see-trough'>נבחרו {checked.houses.length} סוגים</span>}</span>
                {dropbox.houses ? <IoIosArrowUp className="dropbox-arrow-icon" onClick={housesDropboxHandler}/> 
                                : <IoIosArrowDown className="dropbox-arrow-icon" onClick={housesDropboxHandler}/> }
            </div>
            { dropbox.houses && <HousesDropbox checkedAll={checkedCategory.checkedHouses} dispatchForm={props.dispatchForm} checked={checked.houses}/> }
            <div onClick={categoryCheckHandler}>
                <OrangeCheckbox value='others' checked={checkedCategory.checkedOthers}/>
                <span>סוגים נוספים {checked.others.length > 0 && <span className='see-trough'>נבחרו {checked.others.length} סוגים</span>}</span>
                {dropbox.others ? <IoIosArrowUp className="dropbox-arrow-icon" onClick={othersDropboxHandler}/> 
                                : <IoIosArrowDown className="dropbox-arrow-icon" onClick={othersDropboxHandler}/> }
            </div>
            { dropbox.others && <OtherDropbox checkedAll={checkedCategory.checkedOthers} dispatchForm={props.dispatchForm} checked={checked.others}/> }
            <span className="dropbox-choose-button" onClick={()=> props.closeDropbox(false) }>בחירה</span>
        </div>
    );
};

export default PropertyDropbox;