const MAX_LENGTH = 6;

function Person({ age, hobbies, name }) {
    let voteText = "You must be 18";
    if (age >= 18) {
        voteText = "Please go vote!";
    }

    const hobbiesList = hobbies.map((hobby, index) => 
        <li key={index}>{hobby}</li>
    );

    return (
        <div>
            <p>Learn some information about this person:</p>
            <ul>
                <li>Name: {name.slice(0, MAX_LENGTH)}</li>
                <li>Age: {age}</li>
                <li>
                    Hobbies:
                    <ul>{hobbiesList}</ul>
                </li>
            </ul>
            <h3>{voteText}</h3>
        </div>
    );
}
