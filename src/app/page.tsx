import Form from "@/components/Form";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.contact}>
        <h1 className="title">Contact Us</h1>
        <Form />
      </section>
    </main>
  );
}
