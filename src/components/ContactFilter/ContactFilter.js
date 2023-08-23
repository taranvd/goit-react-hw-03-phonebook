export const ContactFilter = ({ filter, changeFilter }) => {
  return (
    <>
      <p>Find by contact</p>
      <input
        type="text"
        value={filter}
        onChange={evt => changeFilter(evt.target.value)}
      />
    </>
  );
};
