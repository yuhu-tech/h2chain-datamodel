module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.28.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregatePersonalmsg {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createPersonalmsg(data: PersonalmsgCreateInput!): Personalmsg!
  updatePersonalmsg(data: PersonalmsgUpdateInput!, where: PersonalmsgWhereUniqueInput!): Personalmsg
  updateManyPersonalmsgs(data: PersonalmsgUpdateManyMutationInput!, where: PersonalmsgWhereInput): BatchPayload!
  upsertPersonalmsg(where: PersonalmsgWhereUniqueInput!, create: PersonalmsgCreateInput!, update: PersonalmsgUpdateInput!): Personalmsg!
  deletePersonalmsg(where: PersonalmsgWhereUniqueInput!): Personalmsg
  deleteManyPersonalmsgs(where: PersonalmsgWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Personalmsg {
  id: ID!
  name: String!
  phonenumber: String!
  idnumber: String!
  gender: Int!
  height: Int!
  weight: Int!
  status: Int!
  user: User!
}

type PersonalmsgConnection {
  pageInfo: PageInfo!
  edges: [PersonalmsgEdge]!
  aggregate: AggregatePersonalmsg!
}

input PersonalmsgCreateInput {
  name: String!
  phonenumber: String!
  idnumber: String!
  gender: Int!
  height: Int!
  weight: Int!
  status: Int!
  user: UserCreateOneWithoutPersonalmsgInput!
}

input PersonalmsgCreateOneWithoutUserInput {
  create: PersonalmsgCreateWithoutUserInput
  connect: PersonalmsgWhereUniqueInput
}

input PersonalmsgCreateWithoutUserInput {
  name: String!
  phonenumber: String!
  idnumber: String!
  gender: Int!
  height: Int!
  weight: Int!
  status: Int!
}

type PersonalmsgEdge {
  node: Personalmsg!
  cursor: String!
}

enum PersonalmsgOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  phonenumber_ASC
  phonenumber_DESC
  idnumber_ASC
  idnumber_DESC
  gender_ASC
  gender_DESC
  height_ASC
  height_DESC
  weight_ASC
  weight_DESC
  status_ASC
  status_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PersonalmsgPreviousValues {
  id: ID!
  name: String!
  phonenumber: String!
  idnumber: String!
  gender: Int!
  height: Int!
  weight: Int!
  status: Int!
}

type PersonalmsgSubscriptionPayload {
  mutation: MutationType!
  node: Personalmsg
  updatedFields: [String!]
  previousValues: PersonalmsgPreviousValues
}

input PersonalmsgSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PersonalmsgWhereInput
  AND: [PersonalmsgSubscriptionWhereInput!]
  OR: [PersonalmsgSubscriptionWhereInput!]
  NOT: [PersonalmsgSubscriptionWhereInput!]
}

input PersonalmsgUpdateInput {
  name: String
  phonenumber: String
  idnumber: String
  gender: Int
  height: Int
  weight: Int
  status: Int
  user: UserUpdateOneRequiredWithoutPersonalmsgInput
}

input PersonalmsgUpdateManyMutationInput {
  name: String
  phonenumber: String
  idnumber: String
  gender: Int
  height: Int
  weight: Int
  status: Int
}

input PersonalmsgUpdateOneWithoutUserInput {
  create: PersonalmsgCreateWithoutUserInput
  update: PersonalmsgUpdateWithoutUserDataInput
  upsert: PersonalmsgUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: PersonalmsgWhereUniqueInput
}

input PersonalmsgUpdateWithoutUserDataInput {
  name: String
  phonenumber: String
  idnumber: String
  gender: Int
  height: Int
  weight: Int
  status: Int
}

input PersonalmsgUpsertWithoutUserInput {
  update: PersonalmsgUpdateWithoutUserDataInput!
  create: PersonalmsgCreateWithoutUserInput!
}

input PersonalmsgWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  phonenumber: String
  phonenumber_not: String
  phonenumber_in: [String!]
  phonenumber_not_in: [String!]
  phonenumber_lt: String
  phonenumber_lte: String
  phonenumber_gt: String
  phonenumber_gte: String
  phonenumber_contains: String
  phonenumber_not_contains: String
  phonenumber_starts_with: String
  phonenumber_not_starts_with: String
  phonenumber_ends_with: String
  phonenumber_not_ends_with: String
  idnumber: String
  idnumber_not: String
  idnumber_in: [String!]
  idnumber_not_in: [String!]
  idnumber_lt: String
  idnumber_lte: String
  idnumber_gt: String
  idnumber_gte: String
  idnumber_contains: String
  idnumber_not_contains: String
  idnumber_starts_with: String
  idnumber_not_starts_with: String
  idnumber_ends_with: String
  idnumber_not_ends_with: String
  gender: Int
  gender_not: Int
  gender_in: [Int!]
  gender_not_in: [Int!]
  gender_lt: Int
  gender_lte: Int
  gender_gt: Int
  gender_gte: Int
  height: Int
  height_not: Int
  height_in: [Int!]
  height_not_in: [Int!]
  height_lt: Int
  height_lte: Int
  height_gt: Int
  height_gte: Int
  weight: Int
  weight_not: Int
  weight_in: [Int!]
  weight_not_in: [Int!]
  weight_lt: Int
  weight_lte: Int
  weight_gt: Int
  weight_gte: Int
  status: Int
  status_not: Int
  status_in: [Int!]
  status_not_in: [Int!]
  status_lt: Int
  status_lte: Int
  status_gt: Int
  status_gte: Int
  user: UserWhereInput
  AND: [PersonalmsgWhereInput!]
  OR: [PersonalmsgWhereInput!]
  NOT: [PersonalmsgWhereInput!]
}

input PersonalmsgWhereUniqueInput {
  id: ID
}

type Query {
  personalmsg(where: PersonalmsgWhereUniqueInput!): Personalmsg
  personalmsgs(where: PersonalmsgWhereInput, orderBy: PersonalmsgOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Personalmsg]!
  personalmsgsConnection(where: PersonalmsgWhereInput, orderBy: PersonalmsgOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PersonalmsgConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  personalmsg(where: PersonalmsgSubscriptionWhereInput): PersonalmsgSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  wechat: String!
  personalmsg: Personalmsg
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  wechat: String!
  personalmsg: PersonalmsgCreateOneWithoutUserInput
}

input UserCreateOneWithoutPersonalmsgInput {
  create: UserCreateWithoutPersonalmsgInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutPersonalmsgInput {
  wechat: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  wechat_ASC
  wechat_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  wechat: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  wechat: String
  personalmsg: PersonalmsgUpdateOneWithoutUserInput
}

input UserUpdateManyMutationInput {
  wechat: String
}

input UserUpdateOneRequiredWithoutPersonalmsgInput {
  create: UserCreateWithoutPersonalmsgInput
  update: UserUpdateWithoutPersonalmsgDataInput
  upsert: UserUpsertWithoutPersonalmsgInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutPersonalmsgDataInput {
  wechat: String
}

input UserUpsertWithoutPersonalmsgInput {
  update: UserUpdateWithoutPersonalmsgDataInput!
  create: UserCreateWithoutPersonalmsgInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  wechat: String
  wechat_not: String
  wechat_in: [String!]
  wechat_not_in: [String!]
  wechat_lt: String
  wechat_lte: String
  wechat_gt: String
  wechat_gte: String
  wechat_contains: String
  wechat_not_contains: String
  wechat_starts_with: String
  wechat_not_starts_with: String
  wechat_ends_with: String
  wechat_not_ends_with: String
  personalmsg: PersonalmsgWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  wechat: String
}
`
      }
    