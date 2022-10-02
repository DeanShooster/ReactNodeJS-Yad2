
type Props = {icon: any , title: string};

const PublishPicInput = (props: Props) => {
    return (
        <div className="upload-container">
            <input type='file'/>
            <div className="upload">
                {props.icon}
                <span>{props.title}</span>
            </div>
        </div>
    );
};

export default PublishPicInput;