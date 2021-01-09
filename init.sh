docker stop robot
docker build . -t robotscreen 
docker run -d -p 5000:5000 --name robot robotscreen