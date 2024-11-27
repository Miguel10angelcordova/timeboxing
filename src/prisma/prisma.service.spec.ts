import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './prisma.service';
import { Injectable } from '@nestjs/common';

describe('PrismaService', () => {
  let service: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
    }).compile();

    service = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

@Injectable()
export class UserService {
 constructor(private readonly prisma : PrismaService){ }

 async getAllUser(){
  return this.prisma.user.findMany();
 }

}