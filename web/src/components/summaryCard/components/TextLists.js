import parentStyles from '../../styles/card.module.css';
import childStyles from '../styles/summaryCard.module.css';


const TextLists = (props) => {
    const { items } = props;

    const renderedParagraphs = items.map((paragraph, index) => (

        <li key={index} className={`${parentStyles['card-item']} ${childStyles['summarycard-item']}`}>
            {paragraph} 
        </li>

    ));

    return (
        <div className={`${parentStyles['card-content']} ${childStyles['summarycard-content']}`}>
            {renderedParagraphs}
        </div>
    );
}

export default TextLists;