import { useNavigate } from "react-router-dom";
import styles from "../styles/BackButton.module.scss";
import backIcon from "../assets/images/iconos/back.png";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className={styles.backButton} onClick={() => navigate("/")}>
      <img src={backIcon} alt="Volver al inicio" />
    </button>
  );
};

export default BackButton;
