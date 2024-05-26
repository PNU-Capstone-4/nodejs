# Node.js 이미지를 사용하여 빌드 단계 설정
FROM node:14 AS build

# 작업 디렉토리 설정
WORKDIR /app

# package.json과 package-lock.json 복사
COPY package.json package-lock.json ./

# 종속성 설치
RUN npm install

# 앱 소스 복사
COPY . .

# 노출할 포트
EXPOSE 8080

# 앱 실행
CMD ["npm", "start"]

