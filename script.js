document.addEventListener('DOMContentLoaded', function () {
    const commandsList = document.getElementById('commands-list');
    const commandDetails = document.getElementById('command-details');

    // Replace the following with your actual command data
    const commands = [
        { name: 'help', syntax: '!help', description: 'List all available commands.' },
        // Add other commands here
    ];

    // Dynamically create buttons for each command
    commands.forEach(command => {
        const button = document.createElement('button');
        button.textContent = command.name;
        button.addEventListener('click', () => displayCommandDetails(command));
        commandsList.appendChild(button);
    });

    // Function to display command details
    function displayCommandDetails(command) {
        commandDetails.innerHTML = `
            <h2>${command.name}</h2>
            <p><strong>Syntax:</strong> ${command.syntax}</p>
            <p><strong>Description:</strong> ${command.description}</p>
        `;
    }
});
