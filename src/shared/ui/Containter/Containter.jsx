import styles from './Containter.module.css'

const Container = (props) => {
    const {
        children
    } = props
    return (
        <div className={styles.containter}>
            {children}
        </div>
    )
}

export default Container