import styles from "./comissionlisttitle.module.css"

export default function ComissionListTitle() {
    return (
        <div className={styles.box}>
            <p className={styles.comissionListTitle}>
                篩選結果
            </p>
        </div>
    );
}