function Tweet({ date, message, name, username }) {
    return (
      <div className="tweet">
        <span className="name">{name}</span>
        <span className="username">{username}</span>
        <span className="date">{date}</span>
        <p>{message}</p>
      </div>
    );
}