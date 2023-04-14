import childStyles from '../styles/scorecard.module.css'
import parentStyles from '../../styles/card.module.css'


const formatText = (text) => {
    const result = text.replace(/([A-Z])/g, " $1");
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    
    return finalResult;
}

const ScoreCardItem = (props) => {
    const { heading, content } = props;
    return (
        <div className={`${parentStyles['card-item']} ${childStyles["scorecard-item"]}`}>
            <div className={parentStyles["card-item-value"]}>{formatText(heading)}</div>
            <div className={childStyles["card-item-label"]}>{content}</div>
        </div>
    )
}

export default ScoreCardItem;