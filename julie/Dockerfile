FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Thisan01/x-devil /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/Thisan01/media

CMD ["node", "bot.js"]
