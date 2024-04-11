import styles from "./styles.module.css";
import GitHubIcon from "../../../assets/github-icon.svg"

export default function ProjectCard({ project }) {
  return (
    <a className={styles.card} href={project.link} target="_blank" rel="noopener noreferrer">
      <h3 className={styles.name}>{project.name}</h3>
      <img className={styles.gitLogo} src={GitHubIcon} alt="github" />
      <span className={styles.description}>{project.description}</span>
      <span className={styles.link}>Saiba mais</span>
    </a>
  );
}
