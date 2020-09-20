import React from "react";
import Link from "next/link";
import styles from "../src/styles.module.css";

const Page = () => (
    <div>
        <h1 className={styles.ting}>Index page</h1>
        <Link href="/notes">
            <a>Notes</a>
        </Link>
    </div>
);

export default Page;
