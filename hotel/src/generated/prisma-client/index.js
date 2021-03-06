"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Profile",
    embedded: false
  },
  {
    name: "Occupation",
    embedded: false
  },
  {
    name: "Balance",
    embedded: false
  },
  {
    name: "Tx",
    embedded: false
  },
  {
    name: "Contract",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prismaHotel = new exports.Prisma();
