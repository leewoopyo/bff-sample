import { Injectable } from '@nestjs/common';
import { Sample } from 'src/entities';

// Injectable : 의존성 주입을 위한 데코레이터
@Injectable()
export class SampleService {
  // QUERIES
  public async getMembers(): Promise<Sample> {
    console.log('getMembers');
    return null;
  }
  // MUTATIONS
  public async createMember() {
    console.log('createMember');
  }
  // PRIVATE METHODS
}
