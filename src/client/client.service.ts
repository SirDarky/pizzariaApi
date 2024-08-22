import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/models/client.entity';
import {
  BusinessErrorMessage,
  CodeMessage,
} from 'src/shared/exception/bussiness.error.message';
import { Repository } from 'typeorm';
import { GetClientArgs } from './dto/get-client.args';
import { CreateClientInput } from './input/create-client.input';
import { UpdateClientInput } from './input/update-client.input';
import { DeleteClientInput } from './input/delete-client.input';
import { HashService } from 'src/shared/services/hash/hash.servicer';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client) private clientRepository: Repository<Client>,
    private readonly hashService: HashService,
  ) {}

  async createClient(data: CreateClientInput): Promise<Client> {
    const clientExist = await this.clientRepository.findOne({
      where: { email: data.email },
    });
    if (clientExist) {
      this.handleError(CodeMessage.KEY_033);
    }
    data.password = await this.hashService.encrypt(data.password);
    const client = new Client(data);
    await this.clientRepository.create(data);
    const clientSaved = await this.clientRepository.save(client);

    if (!clientSaved) {
      this.handleError(CodeMessage.KEY_031);
    }
    return clientSaved;
  }

  async updateClient(UpdateClientInput: UpdateClientInput): Promise<Client> {
    const client = await this.clientRepository.findOne({
      where: {
        _id: UpdateClientInput.clientId,
      },
    });
    if (!client) {
      this.handleError(CodeMessage.KEY_001);
    }
    Object.assign(client, UpdateClientInput);
    await this.clientRepository.save(client);
    return client;
  }

  async findAllClient(): Promise<Client[]> {
    return await this.clientRepository.find();
  }

  async getClient(getClientArgs: GetClientArgs): Promise<Client> {
    return await this.clientRepository.findOne({
      where: {
        _id: getClientArgs.clientId,
      },
    });
  }

  async deleteClient(clientDeleteInput: DeleteClientInput): Promise<void> {
    const client = await this.clientRepository.findOne({
      where: {
        _id: clientDeleteInput.clientId,
      },
    });
    if (!client) {
      this.handleError(CodeMessage.KEY_001);
    }
    await this.clientRepository.delete(clientDeleteInput.clientId);
  }

  handleError(codeMessage: string) {
    const errorMessage = BusinessErrorMessage[CodeMessage[codeMessage]];
    throw new Error(errorMessage);
  }
}
