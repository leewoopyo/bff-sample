import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Sample {
  @Field()
  id: number;

  @Field({ description: '멤버 이름'})
  memberName: string;

  @Field({ description: '전화 번호', nullable: true})
  phoneNumber: string;
}