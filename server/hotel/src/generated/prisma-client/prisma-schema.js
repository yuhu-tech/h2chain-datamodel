module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.28.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateOccupation {
  count: Int!
}

type AggregateProfile {
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
  AND: [ProfileWhereInput!]
  OR: [ProfileWhereInput!]
  NOT: [ProfileWhereInput!]
}

input ProfileWhereUniqueInput {
  id: ID
}

type Query {
  occupation(where: OccupationWhereUniqueInput!): Occupation
  occupations(where: OccupationWhereInput, orderBy: OccupationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Occupation]!
  occupationsConnection(where: OccupationWhereInput, orderBy: OccupationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OccupationConnection!
  profile(where: ProfileWhereUniqueInput!): Profile
  profiles(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Profile]!
  profilesConnection(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProfileConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  occupation(where: OccupationSubscriptionWhereInput): OccupationSubscriptionPayload
  profile(where: ProfileSubscriptionWhereInput): ProfileSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
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
    