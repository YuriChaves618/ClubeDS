import './Button.css'
import { IconArrow } from '../icons/Icon.jsx'

export default function Button({
  as = 'a',
  href,
  onClick,
  variant = 'primary',
  showArrow = false,
  children,
  className = '',
  ...rest
}) {
  const Tag = as
  const classes = `btn btn--${variant} ${className}`.trim()

  return (
    <Tag href={href} onClick={onClick} className={classes} {...rest}>
      <span>{children}</span>
      {showArrow && <IconArrow size={16} strokeWidth={2} />}
    </Tag>
  )
}
