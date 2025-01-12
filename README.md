### Created a backed using Node.js

This backend contains routes i.e, Where to route the traffic after we hit the API
eg: http:/ec2-publicip:3003/assignment/role
roles are (frontend,backend,devops)

### Deploying Backend on AWS EC2
1. Created a EC2 instance of size t3.small and ami Ubuntu(opening ports SSH,HTTP,HTTPS, TCP:3003)

2. Installing Node on ec2
```bash
sudo apt install nodejs npm nginx
node -v
npm -v
```

3. Made a directory vf-backend for deploying backend 

```bash
sudo apt update
sudo mkdir vf-backend
sudo nano index.js
npm init -y
npm install express
```

4. Deploying backend on ec2 and accessing through ec2 public ip
```bash
node index.js
```
[Devops role Backend endponint-](http://13.203.141.207:3005/assignment/devops) http://13.203.141.207:3005/assignment/devops

[Devops role frontend endponint -](http://13.203.141.207:3005/assignment/frontend) http://13.203.141.207:3005/assignment/frontend

(can also access /backend, /devops,etc options in frontend ui/endpoints )

![](https://github.com/Shradha3001/vf-backend/blob/42e90429212f399f55a13108140f96df7410be8b/Screenshot%202025-01-11%20002601.png)
![](https://github.com/Shradha3001/vf-backend/blob/42e90429212f399f55a13108140f96df7410be8b/Screenshot%202025-01-11%20002628.png)

### Able to connect Backend(locally) and frontend hosted on firebase but require domain to connect remote backend.
![](https://github.com/Shradha3001/vf-backend/blob/88229a3dfd50fa6aa44f30f331a8d3e6d59f57d1/Screenshot%20(5).png)
![](https://github.com/Shradha3001/vf-backend/blob/88229a3dfd50fa6aa44f30f331a8d3e6d59f57d1/Screenshot%20(6).png)


