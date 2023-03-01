const express = require('express');
const app = express();
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: 3276799 });

const PAGE_SIZE = 300;

app.get('/guilds/:guildid', (req, res) => {
  const guildId = req.params.guildid;
  const guild = client.guilds.cache.get(guildId);
  if (!guild) return res.status(404).send({ message: 'server not found.' });

  const rolesCount = guild.roles.cache.size;
  const emojisCount = guild.emojis.cache.size;
  const membersCount = guild.memberCount;
  const onlineMembersCount = guild.members.cache.filter((member) => member.presence?.status !== 'offline').size;
  const guildBanner = guild.bannerURL({ format: 'png', size: 1024 });
  const guildDescription = guild.description;
  const guildOwner = guild.ownerId;

  const response = {
    id: guild.id,
    name: guild.name,
    photo: guild.iconURL({ format: 'png', size: 1024 }),
    rolesCount,
    emojisCount,
    membersCount,
    onlineMembersCount,
    banner: guildBanner,
    description: guildDescription,
    owner: guildOwner,
  };

  res.send(response);
});



app.get('/user/:userid', (req, res) => {
    const userId = req.params.userid;
    const user = client.users.cache.get(userId);
    if (!user) return res.status(404).send({ message: 'user not found.' });
  
    const badges = user.flags?.toArray() || [];
    const avatar = user.displayAvatarURL({ format: 'png', size: 1024 });
    const banner = user.bannerURL({ format: 'png', size: 1024 });
    const createdAt = user.createdAt.toISOString();
  
    const response = {
      id: user.id,
      username: user.username,
      discriminator: user.discriminator,
      badges,
      avatar,
      banner,
      createdAt,
    };
  
    res.send(response);
  });
app.listen(3000, () => {

    console.log('Server is running on port 3000');
}

);

client.login('MTA3NjExMzIxOTE4NzM4ODQ4OA.GHuYJs.kjNXcyZheL5f-70aKUjZ0OP04s2O4XG2O1FuCY');

