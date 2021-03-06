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
    name: "Workcontent",
    embedded: false
  },
  {
    name: "Attention",
    embedded: false
  },
  {
    name: "Cooperation",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:5566`
});
exports.prismaHr = new exports.Prisma();
