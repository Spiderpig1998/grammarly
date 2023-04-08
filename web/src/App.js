import MainHeading from "./components/headings/MainHeading";
import SlateEditor from "./components/slateEditor/SlateEditor";
//styles
import styles from './styles/appStyles.module.css';

const App = () => {
    return (
        <div className={styles['app']}>
            <MainHeading>Grammarly</MainHeading>
            <SlateEditor />
        </div>
    )
}

export default App;
