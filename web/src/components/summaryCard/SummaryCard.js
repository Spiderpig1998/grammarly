import childrenStyles from './styles/summaryCard.module.css';
import parentStyles from '../styles/card.module.css';

import TextLists from "./components/TextLists";


const SummaryCard = (props) => {
    const { summaryInfo } = props;
    if (Object.keys(summaryInfo).length === 0) {
        return null;
    }

    const summary = summaryInfo.summary;
    return (
        <div className={`${childrenStyles['summarycard']} ${parentStyles['card']}`}>
            <h2 className={`${parentStyles['card']}`}>Summary</h2>
            <TextLists
                items={summary}
            />
        </div>
    )
}

export default SummaryCard;