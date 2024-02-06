import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="headerr">
      <h1>Welcome to MKRS File Uploader</h1>
      <Link className="link" href={"/upload"}>
        <button className="btn">Upload</button>
      </Link>
    </div>
  );
}
