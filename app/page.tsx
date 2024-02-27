import Days from "./home/components/days";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles["container"]}>
                <img src="/images/img1.jpg" alt="img" className={styles["next_image"]} />
            </div>
            <div className={styles["days_container"]}>
                <Days />
            </div>
        </main>
    );
}
