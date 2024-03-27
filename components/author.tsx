
export default function Author({ author, classNames="" }) {
  const isAuthorHaveFullName =
    author?.node?.firstName && author?.node?.lastName;
  const name = isAuthorHaveFullName
    ? `${author.node.firstName} ${author.node.lastName}`
    : author.node.name || null;

  return (
    <div className="flex items-left">
      <div className={classNames}>{name}</div>
    </div>
  );
}
