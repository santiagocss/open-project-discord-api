const express = require('express');
const app = express();
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: 3276799 });

app.get('/guilds/:guildid', (req, res) => {
  const guildId = req.params.guildid;
  const guild = client.guilds.cache.get(guildId);
  if (!guild) return res.status(404).send({ message: 'Sunucu bulunamadı.' });

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

client.login('YOUR_BOT_TOKEN');
app.listen(8080, () => console.log('Sunucu başlatıldı.'));

