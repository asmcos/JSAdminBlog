JSAdminBlog is a Blog example by JSAdmin. JSAdmin + nodejs-restful.


#Dependencies
JSAdmin
nodejs-restful
mongodb

#database install
sudo aptitude install mongodb

#
sudo npm install webpack -g
sudo npm install forever -g
npm install
npm run build:fe
npm run build:be
>>>node build/release-server.js
npm run forever
