import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    let num = 5;

    return (
        <main className={styles.main}>
            <h2>hello git </h2>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est possimus consequatur
                obcaecati in assumenda dolorum, debitis dicta id odio atque porro a totam distinctio
                officiis sed sequi magnam provident nam?
            </p>
            <h3>Hii</h3>
            <a href="">about</a>
        </main>
    );
}
