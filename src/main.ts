
import { NestFactory } from '@nestjs/core';
// 프로젝트의 최상위 모듈. 다른 모듈을 임포트하고 애플리케이션 설정을 담당
import { AppModule } from './app.module'; 

async function bootstrap() {
  // app은 NestJS 애플리케이션 인스턴스, AppModule을 기반으로 NestJS 애플리케이션 인스턴스를 생성 
  // NestFactory : 애플리케이션 인스턴스를 생성 및 관리하는 클래스
  const app = await NestFactory.create(AppModule);
  // 포트 3000에서 HTTP 서버를 시작
  await app.listen(3000);
}
// 애플리케이션 실행
bootstrap();
