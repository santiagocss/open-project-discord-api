
# santiagoAPI

A brief description of what this project does and who it's for

# Discord API for Server Information

This is a simple RESTful API built with Node.js and Express.js that allows you to retrieve information about Discord servers. The API uses the Discord.js library to access the Discord API.

## Contents

- [Features](#features)
- [Installation](#installation)
- [Endpoints](#endpoints)
- [Example URL](#example-url)
- [Contributing](#contributing)
- [License](#license)

## Features

- Retrieves basic information about a Discord server, such as name, icon, roles, emojis, members, online members, banner, description, and owner ID.
- Returns a JSON response.
- Simple RESTful API architecture.
- Can be easily integrated into other projects.

## Installation

1. Clone the repository: ```git clone https://github.com/santiagocss/open-project-discord-api.git```
2. Install packages:
`cd discord-api-server-info
npm install`


3. Create a new application in the [Discord Developer Portal](https://discord.com/developers/applications).
4. Go to the "Bot" section and create a new bot.
5. Copy the bot token.
6. Paste the bot token into the `YOUR_TOKEN` line.
7. Start the server:

```npm start```

## Endpoints

### `/guilds/:guildid`

Returns information about a Discord server with the specified ID.

- **Method:** GET
- **URL Parameters:**
- `guildid`: The ID of the Discord server.
- **Response:**
- `id` (string): The ID of the guild.
- `name` (string): The name of the guild.
- `photo` (string): The URL of the guild's icon.
- `rolesCount` (number): The number of roles in the guild.
- `emojisCount` (number): The number of emojis in the guild.
- `membersCount` (number): The total number of members in the guild.
- `onlineMembersCount` (number): The number of members currently online in the guild.
- `banner` (string): The URL of the guild's banner.
- `description` (string): The guild's description.
- `owner` (string): The ID of the guild's owner.

## Example URL

http://localhost:8080/guilds/123456789012345678

# TODO list

This is an example of TODO.md

View the raw content of this file to understand the format.

### Todo

- [ ] npm module will be prepared

### In Progress

- [ ] /guilds/:roleid endpoint will be created.

### Done ✓

- [x] /guilds/:guildend endpoint is complete.
- [x] /user/:userid endpoint is complete.


## Contributing

Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). See the [LICENSE](LICENSE) file for details.
