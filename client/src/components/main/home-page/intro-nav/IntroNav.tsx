import house from '../../../../assets/home-nav/house.svg';
import car from '../../../../assets/home-nav/car.svg';
import chair from '../../../../assets/home-nav/chair.svg';
import bag from '../../../../assets/home-nav/bag.svg';
import chat from '../../../../assets/home-nav/chat.svg';
import dog from '../../../../assets/home-nav/dog.svg';
import scroller from '../../../../assets/home-nav/scroller.svg';

const IntroNav = () => {

    const nav = [
        { title: 'נדל"ן', image: house },
        { title: 'רכב',image: car },
        { title: 'יד שנייה', image: chair },
        { title: 'עסקים למכירה', image: bag },
        { title: 'דרושים IL', image: chat },
        { title: 'חיות מחמד', image: dog },
        { title: 'בעלי מקצוע', image: scroller }
    ];

    return (
        <nav className="intro-nav-container">
            {nav.map( (item: {title: string, image: string},index : number)=> { 
                return <div className='nav' key={item.title + index}>
                    <div className='image-container'>
                        <img alt={item.title +'icon'} src={item.image}/>
                    </div>
                    {item.title}
                </div>})}
        </nav>
    );
};

export default IntroNav;