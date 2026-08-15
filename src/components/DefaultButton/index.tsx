import styles from './styles.module.css';

// DefaultButton
type DefaultButtonProps = {
  icon?: React.ReactNode;
  color?: 'green' | 'red';
  unstyled?: boolean; // opt out of the component's own styles entirely
} & React.ComponentProps<'button'>;

export function DefaultButton({
  icon,
  color = 'green',
  unstyled = false,
  className,
  children,
  ...props
}: DefaultButtonProps) {
  const baseClassName = unstyled ? '' : `${styles.button} ${styles[color]}`;

  return (
    <button className={`${baseClassName} ${className ?? ''}`.trim()} {...props}>
      {icon}
      {children}
    </button>
  );
}
