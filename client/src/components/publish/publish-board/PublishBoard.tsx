
import './publish-board.scss';

import PublishMainstream from './publish-mainstream/PublishMainstream';
import PublishOthers from './publish-others/PublishOthers';
import PublishRegular from './publish-regular/PublishRegular';

const PublishBoard = () => {
    return (
        <section className='publish-board'>
            <h1 className="publish-title">אני רוצה לפרסם מודעה בלוח...</h1>
            <PublishMainstream />
            <PublishRegular />
            <PublishOthers />
        </section>
    );
};

export default PublishBoard;