
export function NewAddReducer(state : any,action : any)
{
    switch(action.type){
        case 'FORM_1':{
            const formOne = {...action.payload};
            return {...state,formOne};
        }
        case 'FORM_2':{
            const formTwo = {...action.payload};
            return {...state,formTwo};
        }
        case 'FORM_3':{
            const formThree = {...action.payload};
            return {...state,formThree};
        }
        case 'FORM_4':{
            const formFour = { file: action.payload };
            return {...state,formFour};
        }
    }
    return state;
}