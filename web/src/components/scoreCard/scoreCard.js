import ScoreCardContent from './components/ScoreCardContent';
import childStyles from './styles/scorecard.module.css';
import parentStyles from '../styles/card.module.css';

const ScoreCard = (props) => {
    const score = props.scoreMetrics;
    //don't render if score is empty
    if (Object.keys(score).length === 0) {
        return null;
    }

    const scoreArr = Object.entries(score);

    return (
        <div className={`${parentStyles['card']} ${childStyles['scorecard']}`}>
            <h2 className={parentStyles["card-title"]}>Readability Information</h2>
            <ScoreCardContent
                scores={scoreArr}
            />
        </div>
    )
}

export default ScoreCard