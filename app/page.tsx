import Days from "./home/components/days";
import HomePageContact from "./home/components/homepageContact";
import ImagestoPage from "./home/components/imagestopage";
import LatestNews from "./home/components/latestNews";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles["container"]}>
                <img
                    src="/images/home-page-images/img1.jpg"
                    alt="img"
                    className={styles["profile_image"]}
                />
            </div>
            <div className={styles["days_container"]}>
                <Days />
            </div>
            <LatestNews />
            <ImagestoPage />
            <HomePageContact />
        </main>
    );
}
