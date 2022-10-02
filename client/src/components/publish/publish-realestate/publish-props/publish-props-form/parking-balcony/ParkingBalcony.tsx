import {Fragment,useState} from 'react';

type Props = { propsForm: any ,setPropsForm: Function};

const ParkingBalcony = (props: Props) => {

    const [parking,setParking] = useState<number>(0);
    const [balcony,setBalcony] = useState<number>(0);
    const background = 'rgb(167, 167, 167)';

    const parkingHandler = (event : any) => {
        let parking = 0;
        switch(event.target.innerHTML){
            case 'ללא': { parking = 0; break;}
            case '1': { parking = 1; break;}
            case '2': { parking = 2; break;}
            case '3':{ parking = 3; break;}
        }
        setParking(parking);
        props.setPropsForm({...props.propsForm,parking});
    }

    const balconyHandler = (event : any) => {
        let balcony = 0;
        switch(event.target.innerHTML){
            case 'ללא': { balcony = 0; break;}
            case '1': { balcony = 1; break;}
            case '2': { balcony = 2; break;}
            case '3':{ balcony = 3; break;}
        }
        setBalcony(balcony);
        props.setPropsForm({...props.propsForm,balcony});
    }

    return (
        <Fragment>
            <div className="publish-form-div-wrapper">
                <label>חניה</label>
                <div className="parking-balcony-container" onClick={parkingHandler}>
                    <span style={ parking===0 ? {backgroundColor: background} : {}}>ללא</span>
                    <span style={ parking===1 ? {backgroundColor: background} : {}}>1</span>
                    <span style={ parking===2 ? {backgroundColor: background} : {}}>2</span>
                    <span style={ parking===3 ? {backgroundColor: background} : {}}>3</span>
                </div>
            </div>
            <div className="publish-form-div-wrapper">
                <label>מרפסת</label>
                <div className="parking-balcony-container" onClick={balconyHandler}>
                    <span style={ balcony===0 ? {backgroundColor: background} : {}}>ללא</span>
                    <span style={ balcony===1 ? {backgroundColor: background} : {}}>1</span>
                    <span style={ balcony===2 ? {backgroundColor: background} : {}}>2</span>
                    <span style={ balcony===3 ? {backgroundColor: background} : {}}>3</span>
                </div>
            </div>
        </Fragment>
    );
};

export default ParkingBalcony;