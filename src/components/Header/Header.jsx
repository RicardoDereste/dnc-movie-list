const Header = (props) => {
  function handleSubmit(event) {
    event.preventDefault();
    const searchValue = event.target[0].value;
    props.onSubmit(searchValue);
    event.target[0].value = "";
  }

  return (
    <header className="Header">
      <h1>Movie List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search for Movies" />
      </form>
    </header>
  );
};

export default Header;