import childStyles from '../styles/scorecard.module.css'
import parentStyles from '../../styles/card.module.css'
import ScoreCardItem from './ScoreCardItem';

const ScoreCardContent = (props) => {
    console.log(parentStyles);
    const { scores } = props;
    return (
        <div className={`${parentStyles['card-content']} ${childStyles['scorecard-content']}`}>
            {
                scores.map((score) => {
                    return (
                        <ScoreCardItem
                            heading={score[0]}
                            content={score[1]}
                        />
                    )
                })
            }
        </div>
    )
}

export default ScoreCardContent;