import {useState,useEffect, useRef} from 'react';

type Props = { propsForm: any ,setPropsForm: Function};

const StateAbout = (props: Props) => {

    const textareaMaxSize = 400;
    const textAreaPlaceholder = "זה המקום לתאר את הפרטים הבולטים. למשל, האם נערך שיפוץ במבנה. מה שופץ, כיווני אוויר, האווירה ברחוב וכ'.";
    const [textSize,setTextSize] = useState<number>(0);
    const [text,setText] = useState<string>('ממליצים לך בחום להוסיף תיאור');
    const [background,setBackground] = useState<string>('filler-orange');
    const textarea = useRef<any>(null);

    const textSizeHandler = (event: any) => {
        const about = event.target.value;
        setTextSize(about.length);
        props.setPropsForm({...props.propsForm,about});
    }

    useEffect(()=>{
        switch(true){
            case textSize < 30 && textSize > 0:{ setBackground('filler-orange'); setText('מרגיש לנו שהטקסט שכתבת קצר מידי'); break;}
            case textSize < 100:{ 
                setBackground('filler-yellow');
                if(textSize < 60) setText('יופי, המודעה הולכת לכיוון נכון'); 
                else setText('עוד ממש קצת וזה שם');
                break;
            }
            case textSize < 130:{ setBackground('filler-light-green'); setText('אוטוטו'); break;}
            case textSize >= 130:{ setBackground('filler-green'); setText('בול!'); break;}
        };  
    },[textSize,background]);

    const clearTextAreaHandler = () =>{ setTextSize(0); setText('ממליצים לך בחום להוסיף תיאור'); textarea.current.value = '';}

    return (
        <div className="state-about-container">
            <h3>מה חשוב לך שידעו על הנכס?</h3>
            <div className="about-container">
                <label>פרוט הנכס</label>
                <div className="text-stats-container">
                    <div className="text-stats">
                        <div className="text">{text}</div>
                        <div className={`filler `+background} style={{width: `${(textSize/(textareaMaxSize-250))*100}%`}}></div>
                    </div>
                    <div className="word-count">{textSize+''}/{textareaMaxSize}</div>
                </div>
            </div>
            <div className='textarea-container'>
                <textarea onChange={textSizeHandler} maxLength={textareaMaxSize} placeholder={textAreaPlaceholder} ref={textarea}/>
                <div className='clear-textarea' onClick={clearTextAreaHandler}>X</div>
            </div>
            <span className='span-notes'>אין צורך להוסיף מספר טלפון כחלק מהתיאור. בהמשך התהליך יש אזור מסודר לזה</span>
        </div>
    );
};

export default StateAbout;