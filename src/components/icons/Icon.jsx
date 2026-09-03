

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function Svg({ size = 20, strokeWidth = 1.8, children, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...base}
      strokeWidth={strokeWidth}
      {...rest}
    >
      {children}
    </svg>
  )
}

export function IconWorkshop(props) {
  return (
    <Svg {...props}>
      <path d="M4 4h16v12H4z" />
      <path d="M9 20h6M12 16v4" />
      <path d="M8 9l2 2-2 2M13 13h3" />
    </Svg>
  )
}

export function IconTalk(props) {
  return (
    <Svg {...props}>
      <path d="M4 5h13a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H10l-4 3v-3H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
      <path d="M8 9h6M8 12h4" />
    </Svg>
  )
}

export function IconProject(props) {
  return (
    <Svg {...props}>
      <rect x="3.5" y="4" width="17" height="16" rx="1.5" />
      <path d="M8 9h8M8 13h8M8 17h5" />
    </Svg>
  )
}

export function IconBranch(props) {
  return (
    <Svg {...props}>
      <circle cx="6" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="9" r="2" />
      <path d="M6 8v8" />
      <path d="M6 12c0-3 3-5 6-5h4" />
    </Svg>
  )
}

export function IconCode(props) {
  return (
    <Svg {...props}>
      <path d="M9 8 4 12l5 4" />
      <path d="M15 8l5 4-5 4" />
    </Svg>
  )
}

export function IconStack(props) {
  return (
    <Svg {...props}>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="M3 12l9 5 9-5" />
      <path d="M3 16l9 5 9-5" />
    </Svg>
  )
}

export function IconRocket(props) {
  return (
    <Svg {...props}>
      <path d="M13.5 3.5c3.2.3 5.6 2.7 6 6-3 3.4-5.4 5-8.8 6.3L7 12.2c1.3-3.4 3-5.8 6.5-8.7Z" />
      <path d="M9 15l-3.5 3.5" />
      <path d="M6.5 12.5C5 12 4 13 3.5 15c1.9-.4 3 .5 2.6 2 2-.6 3-1.6 2.6-3" />
      <circle cx="14.5" cy="8.5" r="1.3" />
    </Svg>
  )
}

export function IconCalendar(props) {
  return (
    <Svg {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </Svg>
  )
}

export function IconClock(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 8v4.2l3 1.8" />
    </Svg>
  )
}

export function IconCheck(props) {
  return (
    <Svg {...props}>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </Svg>
  )
}

export function IconUsers(props) {
  return (
    <Svg {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <circle cx="17.5" cy="9" r="2.3" />
      <path d="M15.7 14.3c2.4.4 4 2.1 4 4.7" />
    </Svg>
  )
}

export function IconArrow(props) {
  return (
    <Svg {...props}>
      <path d="M5 12h13M13 6l6 6-6 6" />
    </Svg>
  )
}

export function IconShield(props) {
  return (
    <Svg {...props}>
      <path d="M12 3.5l7 2.6v5.4c0 4.4-3 7.3-7 9-4-1.7-7-4.6-7-9V6.1Z" />
      <path d="M9 12l2 2 4-4.2" />
    </Svg>
  )
}

export function IconVote(props) {
  return (
    <Svg {...props}>
      <rect x="4" y="10" width="16" height="9" rx="1.5" />
      <path d="M9 10l3-6 3 6" />
      <path d="M12 14v2" />
    </Svg>
  )
}

export function IconCrown(props) {
  return (
    <Svg {...props}>
      <path d="M4 17h16l-1.4-7-4.1 3-2.5-5-2.5 5-4.1-3L4 17Z" />
      <path d="M6 20h12" />
    </Svg>
  )
}

export function IconHeart(props) {
  return (
    <Svg {...props}>
      <path d="M12 19.5S4 14.8 4 9.4A4 4 0 0 1 12 7a4 4 0 0 1 8 2.4c0 5.4-8 10.1-8 10.1Z" />
    </Svg>
  )
}

export function IconMail(props) {
  return (
    <Svg {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="M4.5 7l7.5 6 7.5-6" />
    </Svg>
  )
}

export function IconChevron(props) {
  return (
    <Svg {...props}>
      <path d="M6 9l6 6 6-6" />
    </Svg>
  )
}
