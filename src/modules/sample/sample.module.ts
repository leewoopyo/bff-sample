import { Module } from '@nestjs/common';
import { SampleQueryResolver } from './sample.query.resolver';
import { SampleMutationResolver } from './sample.mutation.resolver';
import { SampleService } from './sample.service';

@Module({
  imports: [],
  providers: [SampleQueryResolver, SampleMutationResolver, SampleService],
  exports: [SampleModule],
})
export class SampleModule {}
