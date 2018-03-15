import discord
import sys
import time
import pprint
import json

client = discord.Client()
				
@client.event
async def on_message(message):
	if message.author == client.user:
		return
	if message.channel.id == '399675966852431901':
		await client.send_message(discord.Object(id='423763579976679434'), message.content)
		

	
@client.event
async def on_ready():
    print('Logged in as')
    print(client.user.name)
    print(client.user.id)
    print('------')

client.run("NDIzMTcxNTYwMTgzMTY5MDI0.DYr5vg.s1NGMhcWG6aslMcu56kRPYhReII")
