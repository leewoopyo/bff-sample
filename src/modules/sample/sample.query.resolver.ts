import { Resolver, Query } from '@nestjs/graphql';
import { Sample } from 'src/entities';
import { SampleService } from './sample.service';

// SampleQueryResolver 클래스를 Sample타입의 GraphQL쿼리에 대한 Resolver로 설정
@Resolver((of) => Sample)
export class SampleQueryResolver {
  // constructor(생성자)를 통해 의존성 주입 
  constructor(private readonly sampleService: SampleService) {}

  // Query 정의
  @Query((returns) => [Sample], {nullable: true})
  public async getSample(): Promise<Sample> {
    return await this.sampleService.getMembers();
  }
}