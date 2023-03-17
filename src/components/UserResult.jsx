const UserResult = (props) => {
  const { resultCount, uid, displayName } = props.results;
  return (
    <tr>
      <td>{displayName}</td>
      <td>{resultCount}</td>
    </tr>
  );
};
export default UserResult;
