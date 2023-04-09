import styles from '../styles/summaryCard.module.css'


const TextLists = (props) => {
    const { items } = props;

    const renderedParagraphs = items.map((paragraph, index) => (

        <li key={index} className={styles['summaryCard-item']}>
            {paragraph} 
        </li>

    ));

    return (
        <div className={styles["summaryCard-content"]}>
            {renderedParagraphs}
        </div>
    );
}

export default TextLists;