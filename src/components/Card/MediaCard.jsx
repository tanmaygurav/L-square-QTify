import styles from "./MediaCard.module.css";
import Chip from "@mui/material/Chip";

export default function MediaCard({ data, type }) {
  if (type === "album") {
    const { image, follows, title } = data;

    return (
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <img src={image} alt={title} loading="lazy" />
          <div className={styles.banner}>
            <Chip
              label={`${follows} Follows`}
              size="small"
              className={styles.chip}
            />
          </div>
        </div>
        <div className={styles.titleWrapper}>
          <p>{title}</p>
        </div>
      </div>
    );
  }

  if (type === "song") {
    const { image, likes, title } = data;

    return (
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <img src={image} alt={title} loading="lazy" />
          <div className={styles.banner}>
            <Chip label={`${likes}`} size="small" className={styles.chip} />
          </div>
        </div>
        <div className={styles.titleWrapper}>
          <p>{title}</p>
        </div>
      </div>
    );
  }

  return null;
}
