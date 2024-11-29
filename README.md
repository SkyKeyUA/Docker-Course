Docker

Help command: docker --help

All available config options for docker ps: docker ps --help

List Containers: docker ps

List Images: docker images

All containers I had in the past: docker ps -a

Use past containers: docker start [ID or NAME]

Docker Start: 

check container in Docker Hub: https://hub.docker.com/

Create container: docker build .

start container: docker run [ID]

start a container and remove it whenever we stop it: docker run -p 3000:[EXPOSE] -d --rm [ID]

if we have container: docker start [ID]

stop container: docker stop [NAME or ID]

the container needs to be removed first.

remove container (multi): docker rm [NAME] [NAME]

remove images (multi): docker rmi [ID] [ID]

remove all unused images: docker image prune

more information about image: docker image inspect [ID]

copy files or folders into a running container or out of running container: docker cp [folder or file] [NAME]

for example: docker cp dummy/test.txt [NAME] or docker cp dummy/. [NAME]:/test

copy file or folder in container: docker cp [NAME]:/test [folder] or docker cp [NAME]:/test/test.txt [folder]

create custom name container: docker run -p 3000:[EXPOSE] -d --rm --name [NEW NAME] [ID]

create custom name image: docker build -t [NEW NAME]:[TAG] .

for example: docker build -t goals:latest . 

now we can use tag: docker run -p 3000:[EXPOSE] -d --rm --name [NEW NAME]:[TAG]
