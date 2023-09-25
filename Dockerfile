## DOCKER CONFIG FOR WASMEDGE
FROM wasmedge/slim:0.10.1
ADD wasmedge_quickjs.wasm /
ADD wasmedge-server-build/index.js /
ADD data /data
ADD build /build
ADD modules /modules
RUN ["wasmedgec", "/wasmedge_quickjs.wasm", "/wasmedge_quickjs.wasm"]
CMD ["wasmedge", "--dir", ".:/", "/wasmedge_quickjs.wasm", "index.js"]


##DOCKER CONFIG FOR NODEJS
# FROM node:alpine

# # COPY all the files from Current Directory into the Container
# COPY ./express/package.json ./
# COPY ./data ./data
# COPY ./build ./build
# COPY ./express-build/index.js ./index.js
# # Install the Project Dependencies like Express Framework
# RUN npm install

# # express path fs react react-dom react-router-dom
# # Tell that this image is going to Open a Port 
# EXPOSE 3006

# # Default Command to launch the Application
# CMD ["node", "./index.js"]