
import './media-icons.scss';
import apple from '../../../assets/footer-icons/apple.png';
import googlePlay from '../../../assets/footer-icons/google-play.png';
import facebook from '../../../assets/footer-icons/facebook.png';
import youtube from '../../../assets/footer-icons/youtube.png';

const MediaIcons = () => {
    return (
        <div className="media-icons">
            <div>
                <img alt='apple' src={apple}/>
            </div>
            <div>
                <img alt='google-play' src={googlePlay}/>
            </div>
            <div>
                <img alt='facebook' src={facebook}/>
            </div>
            <div>
                <img alt='youtube' src={youtube}/>
            </div>
        </div>
    );
};

export default MediaIcons;