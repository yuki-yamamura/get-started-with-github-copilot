import styles from './index.module.css';

type Props = Omit<React.ComponentProps<'button'>, 'className'> & {
  label: string;
};

const Button = ({ label, ...rest }: Props) => (
  <button {...rest} className={styles.module}>
    {label}
  </button>
);

export default Button;
