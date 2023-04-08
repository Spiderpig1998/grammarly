import styles from './styles/mainHeading.module.css';

const MainHeading = ({ children }) => {
    return (
        <div className={styles['heading-container']}>
            <h1>{children}</h1>
        </div>
    )
}


export default MainHeading;