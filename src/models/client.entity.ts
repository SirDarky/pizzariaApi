import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Expose, plainToClass } from 'class-transformer';
import { Column, Entity } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@ObjectType()
@Entity({
  name: 'clients',
  orderBy: {
    createdAt: 'ASC',
  },
})
export class Client {
  @Column('uuid', { primary: true })
  @Field(() => ID)
  @Expose()
  _id: string;

  @Expose()
  @Column()
  name: string;

  @Expose()
  @Column()
  phone: string;

  @Expose()
  @Column()
  email: string;

  @Column()
  password: string;

  @Expose()
  @Column({ type: 'bigint' })
  createdAt: number;

  @Expose()
  @Column({ type: 'bigint' })
  updatedAt: number;

  constructor(client: Partial<Client>) {
    if (client) {
      Object.assign(
        this,
        plainToClass(Client, client, {
          excludeExtraneousValues: true,
        }),
      );
      this._id = this._id || uuidv4();
      this.createdAt = this.createdAt || +new Date();
      this.updatedAt = +new Date();
      this.password = client.password;
    }
  }
}