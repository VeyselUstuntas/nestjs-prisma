FROM node:22

WORKDIR /usr/src/app

COPY . .

RUN chmod 777 /usr/src/app/docker-entrypoint.sh


RUN npm install 

RUN npm run build

RUN npx prisma generate


RUN curl -o wait-for-it.sh https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh
RUN chmod +x wait-for-it.sh


ENTRYPOINT ["sh","/usr/src/app/docker-entrypoint.sh"]

# CMD ["npm", "run", "start:prod" ]

EXPOSE 3000