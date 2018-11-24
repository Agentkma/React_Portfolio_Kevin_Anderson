# Base Image
FROM node:8.11.1

# Global environent variables
ENV NPM_CONFIG_LOGLEVEL warn

# Arg variable to give variable value
ARG app_env

ENV APP_ENV $app_env

# Make a directory
RUN mkdir -p /portfolio-react-rebuild

# Set the working directory
WORKDIR /portfolio-react-rebuild

# Copy files from /portfolio-react-rebuild folder to working directory
COPY ./portfolio-react-rebuild ./

RUN npm install

# Make port available
EXPOSE 3000

CMD if [ ${APP_ENV} = production ]; \
    then \
    npm install -g http-server && \
    npm run build && \
    cd build && \
    hs -p 3000; \
    else \
    npm run start; \
    fi


# terminal command to build image : docker build -t portfolio-react-rebuild .
# terminal command to see all images created: docker images