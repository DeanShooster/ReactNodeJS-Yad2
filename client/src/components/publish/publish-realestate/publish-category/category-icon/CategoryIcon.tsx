
type Props = {icon: any, title: String, setFormStage: Function};

const CategoryIcon = (props: Props) => {

    const categoryChoiceHandler = () =>{
        if(props.title === 'מכירה'){
            props.setFormStage({
                one: {active: false, check: true},
                two: {active: true, check: false},
                three: {active: false, check: false},
                four: {active: false, check: false},
                five: {active: false, check: false},
                six: {active: false, check: false}
            });
        } else alert('Not Functional.');
    }

    return (
        <div className="category-item" onClick={categoryChoiceHandler}>
            <div>{props.icon}</div>
            <span>{props.title}</span>
        </div>
    );
};

export default CategoryIcon;