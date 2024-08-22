import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ClientService } from './client.service';
import { Client } from 'src/models/client.entity';
import { GetClientArgs } from './dto/get-client.args';
import { CreateClientInput } from './input/create-client.input';
import { UpdateClientInput } from './input/update-client.input';

@Resolver(() => Client)
export class ClientResolver {
  constructor(private clientService: ClientService) {}

  @Query(() => [Client], { name: 'clients', nullable: 'items' })
  async getClients(): Promise<Client[]> {
    const client = await this.clientService.findAllClient();
    return client;
  }

  @Query(() => [Client], { name: 'client', nullable: true })
  async getClient(@Args() getClientArgs: GetClientArgs): Promise<Client> {
    const client = await this.clientService.getClient(getClientArgs);
    return client;
  }

  @Mutation(() => Client)
  async createClient(@Args('data') data: CreateClientInput): Promise<Client> {
    const client = await this.clientService.createClient(data);
    return client;
  }

  @Mutation(() => Client)
  async updateClient(@Args('data') data: UpdateClientInput): Promise<Client> {
    const client = await this.clientService.updateClient(data);
    return client;
  }
}
