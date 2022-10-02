
import './search-error-modal.scss';

type Props = {closeModal: Function};

const SearchErrorModal = (props: Props) => {
    return (
        <div className='block-wall'>
            <div className='search-error-modal-container'>
                <h3>המחיר שהוזן נמוך מהצפוי לדירה למכירה</h3>
                <p>האם לבצע חיפוש עבור דירות להשכרה או לחזור לחיפוש לשינוי מחיר?</p>
                <button onClick={()=>alert('Not Functional.')}>חיפוש נכסים להשכרה</button>
                <span onClick={()=> props.closeModal(false)}>חזרה לחיפוש</span>
            </div>
        </div>
    );
};

export default SearchErrorModal;