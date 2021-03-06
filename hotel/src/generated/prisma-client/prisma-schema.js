module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.28.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateBalance {
  count: Int!
}

type AggregateContract {
  count: Int!
}

type AggregateOccupation {
  count: Int!
}

type AggregateProfile {
  count: Int!
}

type AggregateTx {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Balance {
  id: ID!
  xuid: String
  balance: Int
}

type BalanceConnection {
  pageInfo: PageInfo!
  edges: [BalanceEdge]!
  aggregate: AggregateBalance!
}

input BalanceCreateInput {
  xuid: String
  balance: Int
}

type BalanceEdge {
  node: Balance!
  cursor: String!
}

enum BalanceOrderByInput {
  id_ASC
  id_DESC
  xuid_ASC
  xuid_DESC
  balance_ASC
  balance_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BalancePreviousValues {
  id: ID!
  xuid: String
  balance: Int
}

type BalanceSubscriptionPayload {
  mutation: MutationType!
  node: Balance
  updatedFields: [String!]
  previousValues: BalancePreviousValues
}

input BalanceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BalanceWhereInput
  AND: [BalanceSubscriptionWhereInput!]
  OR: [BalanceSubscriptionWhereInput!]
  NOT: [BalanceSubscriptionWhereInput!]
}

input BalanceUpdateInput {
  xuid: String
  balance: Int
}

input BalanceUpdateManyMutationInput {
  xuid: String
  balance: Int
}

input BalanceWhereInput {
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
  xuid: String
  xuid_not: String
  xuid_in: [String!]
  xuid_not_in: [String!]
  xuid_lt: String
  xuid_lte: String
  xuid_gt: String
  xuid_gte: String
  xuid_contains: String
  xuid_not_contains: String
  xuid_starts_with: String
  xuid_not_starts_with: String
  xuid_ends_with: String
  xuid_not_ends_with: String
  balance: Int
  balance_not: Int
  balance_in: [Int!]
  balance_not_in: [Int!]
  balance_lt: Int
  balance_lte: Int
  balance_gt: Int
  balance_gte: Int
  AND: [BalanceWhereInput!]
  OR: [BalanceWhereInput!]
  NOT: [BalanceWhereInput!]
}

input BalanceWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

type Contract {
  id: ID!
  contractaddress: String
  key: String
  date: Int
  occupation: Int
  blocknumber: Int
  hash: String
  hotelid: String
  adviserid: String
  ptid: String
  orderid: String
}

type ContractConnection {
  pageInfo: PageInfo!
  edges: [ContractEdge]!
  aggregate: AggregateContract!
}

input ContractCreateInput {
  contractaddress: String
  key: String
  date: Int
  occupation: Int
  blocknumber: Int
  hash: String
  hotelid: String
  adviserid: String
  ptid: String
  orderid: String
}

type ContractEdge {
  node: Contract!
  cursor: String!
}

enum ContractOrderByInput {
  id_ASC
  id_DESC
  contractaddress_ASC
  contractaddress_DESC
  key_ASC
  key_DESC
  date_ASC
  date_DESC
  occupation_ASC
  occupation_DESC
  blocknumber_ASC
  blocknumber_DESC
  hash_ASC
  hash_DESC
  hotelid_ASC
  hotelid_DESC
  adviserid_ASC
  adviserid_DESC
  ptid_ASC
  ptid_DESC
  orderid_ASC
  orderid_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ContractPreviousValues {
  id: ID!
  contractaddress: String
  key: String
  date: Int
  occupation: Int
  blocknumber: Int
  hash: String
  hotelid: String
  adviserid: String
  ptid: String
  orderid: String
}

type ContractSubscriptionPayload {
  mutation: MutationType!
  node: Contract
  updatedFields: [String!]
  previousValues: ContractPreviousValues
}

input ContractSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ContractWhereInput
  AND: [ContractSubscriptionWhereInput!]
  OR: [ContractSubscriptionWhereInput!]
  NOT: [ContractSubscriptionWhereInput!]
}

input ContractUpdateInput {
  contractaddress: String
  key: String
  date: Int
  occupation: Int
  blocknumber: Int
  hash: String
  hotelid: String
  adviserid: String
  ptid: String
  orderid: String
}

input ContractUpdateManyMutationInput {
  contractaddress: String
  key: String
  date: Int
  occupation: Int
  blocknumber: Int
  hash: String
  hotelid: String
  adviserid: String
  ptid: String
  orderid: String
}

input ContractWhereInput {
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
  contractaddress: String
  contractaddress_not: String
  contractaddress_in: [String!]
  contractaddress_not_in: [String!]
  contractaddress_lt: String
  contractaddress_lte: String
  contractaddress_gt: String
  contractaddress_gte: String
  contractaddress_contains: String
  contractaddress_not_contains: String
  contractaddress_starts_with: String
  contractaddress_not_starts_with: String
  contractaddress_ends_with: String
  contractaddress_not_ends_with: String
  key: String
  key_not: String
  key_in: [String!]
  key_not_in: [String!]
  key_lt: String
  key_lte: String
  key_gt: String
  key_gte: String
  key_contains: String
  key_not_contains: String
  key_starts_with: String
  key_not_starts_with: String
  key_ends_with: String
  key_not_ends_with: String
  date: Int
  date_not: Int
  date_in: [Int!]
  date_not_in: [Int!]
  date_lt: Int
  date_lte: Int
  date_gt: Int
  date_gte: Int
  occupation: Int
  occupation_not: Int
  occupation_in: [Int!]
  occupation_not_in: [Int!]
  occupation_lt: Int
  occupation_lte: Int
  occupation_gt: Int
  occupation_gte: Int
  blocknumber: Int
  blocknumber_not: Int
  blocknumber_in: [Int!]
  blocknumber_not_in: [Int!]
  blocknumber_lt: Int
  blocknumber_lte: Int
  blocknumber_gt: Int
  blocknumber_gte: Int
  hash: String
  hash_not: String
  hash_in: [String!]
  hash_not_in: [String!]
  hash_lt: String
  hash_lte: String
  hash_gt: String
  hash_gte: String
  hash_contains: String
  hash_not_contains: String
  hash_starts_with: String
  hash_not_starts_with: String
  hash_ends_with: String
  hash_not_ends_with: String
  hotelid: String
  hotelid_not: String
  hotelid_in: [String!]
  hotelid_not_in: [String!]
  hotelid_lt: String
  hotelid_lte: String
  hotelid_gt: String
  hotelid_gte: String
  hotelid_contains: String
  hotelid_not_contains: String
  hotelid_starts_with: String
  hotelid_not_starts_with: String
  hotelid_ends_with: String
  hotelid_not_ends_with: String
  adviserid: String
  adviserid_not: String
  adviserid_in: [String!]
  adviserid_not_in: [String!]
  adviserid_lt: String
  adviserid_lte: String
  adviserid_gt: String
  adviserid_gte: String
  adviserid_contains: String
  adviserid_not_contains: String
  adviserid_starts_with: String
  adviserid_not_starts_with: String
  adviserid_ends_with: String
  adviserid_not_ends_with: String
  ptid: String
  ptid_not: String
  ptid_in: [String!]
  ptid_not_in: [String!]
  ptid_lt: String
  ptid_lte: String
  ptid_gt: String
  ptid_gte: String
  ptid_contains: String
  ptid_not_contains: String
  ptid_starts_with: String
  ptid_not_starts_with: String
  ptid_ends_with: String
  ptid_not_ends_with: String
  orderid: String
  orderid_not: String
  orderid_in: [String!]
  orderid_not_in: [String!]
  orderid_lt: String
  orderid_lte: String
  orderid_gt: String
  orderid_gte: String
  orderid_contains: String
  orderid_not_contains: String
  orderid_starts_with: String
  orderid_not_starts_with: String
  orderid_ends_with: String
  orderid_not_ends_with: String
  AND: [ContractWhereInput!]
  OR: [ContractWhereInput!]
  NOT: [ContractWhereInput!]
}

input ContractWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createBalance(data: BalanceCreateInput!): Balance!
  updateBalance(data: BalanceUpdateInput!, where: BalanceWhereUniqueInput!): Balance
  updateManyBalances(data: BalanceUpdateManyMutationInput!, where: BalanceWhereInput): BatchPayload!
  upsertBalance(where: BalanceWhereUniqueInput!, create: BalanceCreateInput!, update: BalanceUpdateInput!): Balance!
  deleteBalance(where: BalanceWhereUniqueInput!): Balance
  deleteManyBalances(where: BalanceWhereInput): BatchPayload!
  createContract(data: ContractCreateInput!): Contract!
  updateContract(data: ContractUpdateInput!, where: ContractWhereUniqueInput!): Contract
  updateManyContracts(data: ContractUpdateManyMutationInput!, where: ContractWhereInput): BatchPayload!
  upsertContract(where: ContractWhereUniqueInput!, create: ContractCreateInput!, update: ContractUpdateInput!): Contract!
  deleteContract(where: ContractWhereUniqueInput!): Contract
  deleteManyContracts(where: ContractWhereInput): BatchPayload!
  createOccupation(data: OccupationCreateInput!): Occupation!
  updateOccupation(data: OccupationUpdateInput!, where: OccupationWhereUniqueInput!): Occupation
  updateManyOccupations(data: OccupationUpdateManyMutationInput!, where: OccupationWhereInput): BatchPayload!
  upsertOccupation(where: OccupationWhereUniqueInput!, create: OccupationCreateInput!, update: OccupationUpdateInput!): Occupation!
  deleteOccupation(where: OccupationWhereUniqueInput!): Occupation
  deleteManyOccupations(where: OccupationWhereInput): BatchPayload!
  createProfile(data: ProfileCreateInput!): Profile!
  updateProfile(data: ProfileUpdateInput!, where: ProfileWhereUniqueInput!): Profile
  updateManyProfiles(data: ProfileUpdateManyMutationInput!, where: ProfileWhereInput): BatchPayload!
  upsertProfile(where: ProfileWhereUniqueInput!, create: ProfileCreateInput!, update: ProfileUpdateInput!): Profile!
  deleteProfile(where: ProfileWhereUniqueInput!): Profile
  deleteManyProfiles(where: ProfileWhereInput): BatchPayload!
  createTx(data: TxCreateInput!): Tx!
  updateTx(data: TxUpdateInput!, where: TxWhereUniqueInput!): Tx
  updateManyTxes(data: TxUpdateManyMutationInput!, where: TxWhereInput): BatchPayload!
  upsertTx(where: TxWhereUniqueInput!, create: TxCreateInput!, update: TxUpdateInput!): Tx!
  deleteTx(where: TxWhereUniqueInput!): Tx
  deleteManyTxes(where: TxWhereInput): BatchPayload!
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

type Occupation {
  id: ID!
  occupations: [String!]!
}

type OccupationConnection {
  pageInfo: PageInfo!
  edges: [OccupationEdge]!
  aggregate: AggregateOccupation!
}

input OccupationCreateInput {
  occupations: OccupationCreateoccupationsInput
}

input OccupationCreateoccupationsInput {
  set: [String!]
}

type OccupationEdge {
  node: Occupation!
  cursor: String!
}

enum OccupationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OccupationPreviousValues {
  id: ID!
  occupations: [String!]!
}

type OccupationSubscriptionPayload {
  mutation: MutationType!
  node: Occupation
  updatedFields: [String!]
  previousValues: OccupationPreviousValues
}

input OccupationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OccupationWhereInput
  AND: [OccupationSubscriptionWhereInput!]
  OR: [OccupationSubscriptionWhereInput!]
  NOT: [OccupationSubscriptionWhereInput!]
}

input OccupationUpdateInput {
  occupations: OccupationUpdateoccupationsInput
}

input OccupationUpdateManyMutationInput {
  occupations: OccupationUpdateoccupationsInput
}

input OccupationUpdateoccupationsInput {
  set: [String!]
}

input OccupationWhereInput {
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
  AND: [OccupationWhereInput!]
  OR: [OccupationWhereInput!]
  NOT: [OccupationWhereInput!]
}

input OccupationWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Profile {
  id: ID!
  cover: [String!]!
  phone: String!
  name: String!
  occupation: String!
  latitude: Float!
  longitude: Float!
  address: String!
  introduction: String!
  user: User!
  hotelcer: String!
  hoteladd: String
  privatekey: String
  publickey: String
}

type ProfileConnection {
  pageInfo: PageInfo!
  edges: [ProfileEdge]!
  aggregate: AggregateProfile!
}

input ProfileCreatecoverInput {
  set: [String!]
}

input ProfileCreateInput {
  cover: ProfileCreatecoverInput
  phone: String!
  name: String!
  occupation: String!
  latitude: Float!
  longitude: Float!
  address: String!
  introduction: String!
  user: UserCreateOneWithoutProfileInput!
  hotelcer: String!
  hoteladd: String
  privatekey: String
  publickey: String
}

input ProfileCreateOneWithoutUserInput {
  create: ProfileCreateWithoutUserInput
  connect: ProfileWhereUniqueInput
}

input ProfileCreateWithoutUserInput {
  cover: ProfileCreatecoverInput
  phone: String!
  name: String!
  occupation: String!
  latitude: Float!
  longitude: Float!
  address: String!
  introduction: String!
  hotelcer: String!
  hoteladd: String
  privatekey: String
  publickey: String
}

type ProfileEdge {
  node: Profile!
  cursor: String!
}

enum ProfileOrderByInput {
  id_ASC
  id_DESC
  phone_ASC
  phone_DESC
  name_ASC
  name_DESC
  occupation_ASC
  occupation_DESC
  latitude_ASC
  latitude_DESC
  longitude_ASC
  longitude_DESC
  address_ASC
  address_DESC
  introduction_ASC
  introduction_DESC
  hotelcer_ASC
  hotelcer_DESC
  hoteladd_ASC
  hoteladd_DESC
  privatekey_ASC
  privatekey_DESC
  publickey_ASC
  publickey_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProfilePreviousValues {
  id: ID!
  cover: [String!]!
  phone: String!
  name: String!
  occupation: String!
  latitude: Float!
  longitude: Float!
  address: String!
  introduction: String!
  hotelcer: String!
  hoteladd: String
  privatekey: String
  publickey: String
}

type ProfileSubscriptionPayload {
  mutation: MutationType!
  node: Profile
  updatedFields: [String!]
  previousValues: ProfilePreviousValues
}

input ProfileSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProfileWhereInput
  AND: [ProfileSubscriptionWhereInput!]
  OR: [ProfileSubscriptionWhereInput!]
  NOT: [ProfileSubscriptionWhereInput!]
}

input ProfileUpdatecoverInput {
  set: [String!]
}

input ProfileUpdateInput {
  cover: ProfileUpdatecoverInput
  phone: String
  name: String
  occupation: String
  latitude: Float
  longitude: Float
  address: String
  introduction: String
  user: UserUpdateOneRequiredWithoutProfileInput
  hotelcer: String
  hoteladd: String
  privatekey: String
  publickey: String
}

input ProfileUpdateManyMutationInput {
  cover: ProfileUpdatecoverInput
  phone: String
  name: String
  occupation: String
  latitude: Float
  longitude: Float
  address: String
  introduction: String
  hotelcer: String
  hoteladd: String
  privatekey: String
  publickey: String
}

input ProfileUpdateOneWithoutUserInput {
  create: ProfileCreateWithoutUserInput
  update: ProfileUpdateWithoutUserDataInput
  upsert: ProfileUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: ProfileWhereUniqueInput
}

input ProfileUpdateWithoutUserDataInput {
  cover: ProfileUpdatecoverInput
  phone: String
  name: String
  occupation: String
  latitude: Float
  longitude: Float
  address: String
  introduction: String
  hotelcer: String
  hoteladd: String
  privatekey: String
  publickey: String
}

input ProfileUpsertWithoutUserInput {
  update: ProfileUpdateWithoutUserDataInput!
  create: ProfileCreateWithoutUserInput!
}

input ProfileWhereInput {
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
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
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
  occupation: String
  occupation_not: String
  occupation_in: [String!]
  occupation_not_in: [String!]
  occupation_lt: String
  occupation_lte: String
  occupation_gt: String
  occupation_gte: String
  occupation_contains: String
  occupation_not_contains: String
  occupation_starts_with: String
  occupation_not_starts_with: String
  occupation_ends_with: String
  occupation_not_ends_with: String
  latitude: Float
  latitude_not: Float
  latitude_in: [Float!]
  latitude_not_in: [Float!]
  latitude_lt: Float
  latitude_lte: Float
  latitude_gt: Float
  latitude_gte: Float
  longitude: Float
  longitude_not: Float
  longitude_in: [Float!]
  longitude_not_in: [Float!]
  longitude_lt: Float
  longitude_lte: Float
  longitude_gt: Float
  longitude_gte: Float
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  introduction: String
  introduction_not: String
  introduction_in: [String!]
  introduction_not_in: [String!]
  introduction_lt: String
  introduction_lte: String
  introduction_gt: String
  introduction_gte: String
  introduction_contains: String
  introduction_not_contains: String
  introduction_starts_with: String
  introduction_not_starts_with: String
  introduction_ends_with: String
  introduction_not_ends_with: String
  user: UserWhereInput
  hotelcer: String
  hotelcer_not: String
  hotelcer_in: [String!]
  hotelcer_not_in: [String!]
  hotelcer_lt: String
  hotelcer_lte: String
  hotelcer_gt: String
  hotelcer_gte: String
  hotelcer_contains: String
  hotelcer_not_contains: String
  hotelcer_starts_with: String
  hotelcer_not_starts_with: String
  hotelcer_ends_with: String
  hotelcer_not_ends_with: String
  hoteladd: String
  hoteladd_not: String
  hoteladd_in: [String!]
  hoteladd_not_in: [String!]
  hoteladd_lt: String
  hoteladd_lte: String
  hoteladd_gt: String
  hoteladd_gte: String
  hoteladd_contains: String
  hoteladd_not_contains: String
  hoteladd_starts_with: String
  hoteladd_not_starts_with: String
  hoteladd_ends_with: String
  hoteladd_not_ends_with: String
  privatekey: String
  privatekey_not: String
  privatekey_in: [String!]
  privatekey_not_in: [String!]
  privatekey_lt: String
  privatekey_lte: String
  privatekey_gt: String
  privatekey_gte: String
  privatekey_contains: String
  privatekey_not_contains: String
  privatekey_starts_with: String
  privatekey_not_starts_with: String
  privatekey_ends_with: String
  privatekey_not_ends_with: String
  publickey: String
  publickey_not: String
  publickey_in: [String!]
  publickey_not_in: [String!]
  publickey_lt: String
  publickey_lte: String
  publickey_gt: String
  publickey_gte: String
  publickey_contains: String
  publickey_not_contains: String
  publickey_starts_with: String
  publickey_not_starts_with: String
  publickey_ends_with: String
  publickey_not_ends_with: String
  AND: [ProfileWhereInput!]
  OR: [ProfileWhereInput!]
  NOT: [ProfileWhereInput!]
}

input ProfileWhereUniqueInput {
  id: ID
}

type Query {
  balance(where: BalanceWhereUniqueInput!): Balance
  balances(where: BalanceWhereInput, orderBy: BalanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Balance]!
  balancesConnection(where: BalanceWhereInput, orderBy: BalanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BalanceConnection!
  contract(where: ContractWhereUniqueInput!): Contract
  contracts(where: ContractWhereInput, orderBy: ContractOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Contract]!
  contractsConnection(where: ContractWhereInput, orderBy: ContractOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ContractConnection!
  occupation(where: OccupationWhereUniqueInput!): Occupation
  occupations(where: OccupationWhereInput, orderBy: OccupationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Occupation]!
  occupationsConnection(where: OccupationWhereInput, orderBy: OccupationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OccupationConnection!
  profile(where: ProfileWhereUniqueInput!): Profile
  profiles(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Profile]!
  profilesConnection(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProfileConnection!
  tx(where: TxWhereUniqueInput!): Tx
  txes(where: TxWhereInput, orderBy: TxOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tx]!
  txesConnection(where: TxWhereInput, orderBy: TxOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TxConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  balance(where: BalanceSubscriptionWhereInput): BalanceSubscriptionPayload
  contract(where: ContractSubscriptionWhereInput): ContractSubscriptionPayload
  occupation(where: OccupationSubscriptionWhereInput): OccupationSubscriptionPayload
  profile(where: ProfileSubscriptionWhereInput): ProfileSubscriptionPayload
  tx(where: TxSubscriptionWhereInput): TxSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Tx {
  id: ID!
  from: String!
  to: String!
  value: Int!
  hash: String!
  timestamp: Int!
  reason: String
}

type TxConnection {
  pageInfo: PageInfo!
  edges: [TxEdge]!
  aggregate: AggregateTx!
}

input TxCreateInput {
  from: String!
  to: String!
  value: Int!
  hash: String!
  timestamp: Int!
  reason: String
}

type TxEdge {
  node: Tx!
  cursor: String!
}

enum TxOrderByInput {
  id_ASC
  id_DESC
  from_ASC
  from_DESC
  to_ASC
  to_DESC
  value_ASC
  value_DESC
  hash_ASC
  hash_DESC
  timestamp_ASC
  timestamp_DESC
  reason_ASC
  reason_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TxPreviousValues {
  id: ID!
  from: String!
  to: String!
  value: Int!
  hash: String!
  timestamp: Int!
  reason: String
}

type TxSubscriptionPayload {
  mutation: MutationType!
  node: Tx
  updatedFields: [String!]
  previousValues: TxPreviousValues
}

input TxSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TxWhereInput
  AND: [TxSubscriptionWhereInput!]
  OR: [TxSubscriptionWhereInput!]
  NOT: [TxSubscriptionWhereInput!]
}

input TxUpdateInput {
  from: String
  to: String
  value: Int
  hash: String
  timestamp: Int
  reason: String
}

input TxUpdateManyMutationInput {
  from: String
  to: String
  value: Int
  hash: String
  timestamp: Int
  reason: String
}

input TxWhereInput {
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
  from: String
  from_not: String
  from_in: [String!]
  from_not_in: [String!]
  from_lt: String
  from_lte: String
  from_gt: String
  from_gte: String
  from_contains: String
  from_not_contains: String
  from_starts_with: String
  from_not_starts_with: String
  from_ends_with: String
  from_not_ends_with: String
  to: String
  to_not: String
  to_in: [String!]
  to_not_in: [String!]
  to_lt: String
  to_lte: String
  to_gt: String
  to_gte: String
  to_contains: String
  to_not_contains: String
  to_starts_with: String
  to_not_starts_with: String
  to_ends_with: String
  to_not_ends_with: String
  value: Int
  value_not: Int
  value_in: [Int!]
  value_not_in: [Int!]
  value_lt: Int
  value_lte: Int
  value_gt: Int
  value_gte: Int
  hash: String
  hash_not: String
  hash_in: [String!]
  hash_not_in: [String!]
  hash_lt: String
  hash_lte: String
  hash_gt: String
  hash_gte: String
  hash_contains: String
  hash_not_contains: String
  hash_starts_with: String
  hash_not_starts_with: String
  hash_ends_with: String
  hash_not_ends_with: String
  timestamp: Int
  timestamp_not: Int
  timestamp_in: [Int!]
  timestamp_not_in: [Int!]
  timestamp_lt: Int
  timestamp_lte: Int
  timestamp_gt: Int
  timestamp_gte: Int
  reason: String
  reason_not: String
  reason_in: [String!]
  reason_not_in: [String!]
  reason_lt: String
  reason_lte: String
  reason_gt: String
  reason_gte: String
  reason_contains: String
  reason_not_contains: String
  reason_starts_with: String
  reason_not_starts_with: String
  reason_ends_with: String
  reason_not_ends_with: String
  AND: [TxWhereInput!]
  OR: [TxWhereInput!]
  NOT: [TxWhereInput!]
}

input TxWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  profile: Profile
  wechat: String
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
  profile: ProfileCreateOneWithoutUserInput
  wechat: String
}

input UserCreateOneWithoutProfileInput {
  create: UserCreateWithoutProfileInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutProfileInput {
  name: String!
  email: String!
  password: String!
  wechat: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  wechat_ASC
  wechat_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  wechat: String
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
  name: String
  email: String
  password: String
  profile: ProfileUpdateOneWithoutUserInput
  wechat: String
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
  wechat: String
}

input UserUpdateOneRequiredWithoutProfileInput {
  create: UserCreateWithoutProfileInput
  update: UserUpdateWithoutProfileDataInput
  upsert: UserUpsertWithoutProfileInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutProfileDataInput {
  name: String
  email: String
  password: String
  wechat: String
}

input UserUpsertWithoutProfileInput {
  update: UserUpdateWithoutProfileDataInput!
  create: UserCreateWithoutProfileInput!
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
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  profile: ProfileWhereInput
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
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    