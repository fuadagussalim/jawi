export default function Container({ children, classNames="" }) {
  return <div className={`${classNames}  `}>{children}
  </div>;
}
