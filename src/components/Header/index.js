import {
  ZenCarLogoIcon,
  LanguageIcon,
  LogInIcon,
  RegistrationIcon,
} from "../../components/icons";
import { AuthItem } from "./AuthItem";
import styles from "./Header.module.scss";

const sectionsItem = [
  { id: 1, name: "Поиск автосервиса", href: "/workshops", target: "" },
  {
    id: 2,
    name: "Для автосервиса",
    href: "https://workshop.zen.car?utm_source=from_zen_car",
    target: "_blank",
  },
  { id: 3, name: "Услуги", href: "/worktypes", target: "" },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="http://localhost:3000/">
        <ZenCarLogoIcon />
      </a>
      <div className={styles.city}>
        <span> /</span>
        <span> Казань</span>
      </div>
      <div className={styles.language}>
        <LanguageIcon />
        <span>РУ</span>
      </div>
      <div className={styles.sections}>
        {sectionsItem.map((item) => {
          return (
            <a
              key={item.id}
              className={styles.sections_item}
              href={item.href}
              target={item.target && item.target}
            >
              {item.name}
            </a>
          );
        })}
      </div>
      <div className={styles.auth}>
        <AuthItem icon={<LogInIcon />} title="Войти" />
        <AuthItem icon={<RegistrationIcon />} title="Регистрация" />
      </div>
    </header>
  );
};

export { Header };
