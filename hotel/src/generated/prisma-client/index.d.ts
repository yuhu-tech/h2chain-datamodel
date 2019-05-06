// Code generated by Prisma (prisma@1.29.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  occupation: (where?: OccupationWhereInput) => Promise<boolean>;
  profile: (where?: ProfileWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  occupation: (where: OccupationWhereUniqueInput) => OccupationPromise;
  occupations: (
    args?: {
      where?: OccupationWhereInput;
      orderBy?: OccupationOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Occupation>;
  occupationsConnection: (
    args?: {
      where?: OccupationWhereInput;
      orderBy?: OccupationOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => OccupationConnectionPromise;
  profile: (where: ProfileWhereUniqueInput) => ProfilePromise;
  profiles: (
    args?: {
      where?: ProfileWhereInput;
      orderBy?: ProfileOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Profile>;
  profilesConnection: (
    args?: {
      where?: ProfileWhereInput;
      orderBy?: ProfileOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => ProfileConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createOccupation: (data: OccupationCreateInput) => OccupationPromise;
  updateOccupation: (
    args: { data: OccupationUpdateInput; where: OccupationWhereUniqueInput }
  ) => OccupationPromise;
  updateManyOccupations: (
    args: {
      data: OccupationUpdateManyMutationInput;
      where?: OccupationWhereInput;
    }
  ) => BatchPayloadPromise;
  upsertOccupation: (
    args: {
      where: OccupationWhereUniqueInput;
      create: OccupationCreateInput;
      update: OccupationUpdateInput;
    }
  ) => OccupationPromise;
  deleteOccupation: (where: OccupationWhereUniqueInput) => OccupationPromise;
  deleteManyOccupations: (where?: OccupationWhereInput) => BatchPayloadPromise;
  createProfile: (data: ProfileCreateInput) => ProfilePromise;
  updateProfile: (
    args: { data: ProfileUpdateInput; where: ProfileWhereUniqueInput }
  ) => ProfilePromise;
  updateManyProfiles: (
    args: { data: ProfileUpdateManyMutationInput; where?: ProfileWhereInput }
  ) => BatchPayloadPromise;
  upsertProfile: (
    args: {
      where: ProfileWhereUniqueInput;
      create: ProfileCreateInput;
      update: ProfileUpdateInput;
    }
  ) => ProfilePromise;
  deleteProfile: (where: ProfileWhereUniqueInput) => ProfilePromise;
  deleteManyProfiles: (where?: ProfileWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  occupation: (
    where?: OccupationSubscriptionWhereInput
  ) => OccupationSubscriptionPayloadSubscription;
  profile: (
    where?: ProfileSubscriptionWhereInput
  ) => ProfileSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type OccupationOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type ProfileOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "phone_ASC"
  | "phone_DESC"
  | "name_ASC"
  | "name_DESC"
  | "occupation_ASC"
  | "occupation_DESC"
  | "latitude_ASC"
  | "latitude_DESC"
  | "longitude_ASC"
  | "longitude_DESC"
  | "address_ASC"
  | "address_DESC"
  | "introduction_ASC"
  | "introduction_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "wechat_ASC"
  | "wechat_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface OccupationUpdateoccupationsInput {
  set?: String[] | String;
}

export type OccupationWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface OccupationUpdateManyMutationInput {
  occupations?: OccupationUpdateoccupationsInput;
}

export interface ProfileSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ProfileWhereInput;
  AND?: ProfileSubscriptionWhereInput[] | ProfileSubscriptionWhereInput;
  OR?: ProfileSubscriptionWhereInput[] | ProfileSubscriptionWhereInput;
  NOT?: ProfileSubscriptionWhereInput[] | ProfileSubscriptionWhereInput;
}

export interface UserCreateInput {
  name: String;
  email: String;
  password: String;
  profile?: ProfileCreateOneWithoutUserInput;
  wechat?: String;
}

export interface ProfileUpdateInput {
  cover?: ProfileUpdatecoverInput;
  phone?: String;
  name?: String;
  occupation?: String;
  latitude?: Float;
  longitude?: Float;
  address?: String;
  introduction?: String;
  user?: UserUpdateOneRequiredWithoutProfileInput;
}

export interface ProfileUpdateManyMutationInput {
  cover?: ProfileUpdatecoverInput;
  phone?: String;
  name?: String;
  occupation?: String;
  latitude?: Float;
  longitude?: Float;
  address?: String;
  introduction?: String;
}

export type ProfileWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface ProfileUpsertWithoutUserInput {
  update: ProfileUpdateWithoutUserDataInput;
  create: ProfileCreateWithoutUserInput;
}

export interface UserCreateWithoutProfileInput {
  name: String;
  email: String;
  password: String;
  wechat?: String;
}

export interface OccupationCreateInput {
  occupations?: OccupationCreateoccupationsInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface OccupationCreateoccupationsInput {
  set?: String[] | String;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  profile?: ProfileWhereInput;
  wechat?: String;
  wechat_not?: String;
  wechat_in?: String[] | String;
  wechat_not_in?: String[] | String;
  wechat_lt?: String;
  wechat_lte?: String;
  wechat_gt?: String;
  wechat_gte?: String;
  wechat_contains?: String;
  wechat_not_contains?: String;
  wechat_starts_with?: String;
  wechat_not_starts_with?: String;
  wechat_ends_with?: String;
  wechat_not_ends_with?: String;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface OccupationUpdateInput {
  occupations?: OccupationUpdateoccupationsInput;
}

export interface ProfileUpdateWithoutUserDataInput {
  cover?: ProfileUpdatecoverInput;
  phone?: String;
  name?: String;
  occupation?: String;
  latitude?: Float;
  longitude?: Float;
  address?: String;
  introduction?: String;
}

export interface UserUpsertWithoutProfileInput {
  update: UserUpdateWithoutProfileDataInput;
  create: UserCreateWithoutProfileInput;
}

export interface UserUpdateInput {
  name?: String;
  email?: String;
  password?: String;
  profile?: ProfileUpdateOneWithoutUserInput;
  wechat?: String;
}

export interface UserUpdateWithoutProfileDataInput {
  name?: String;
  email?: String;
  password?: String;
  wechat?: String;
}

export interface ProfileCreateWithoutUserInput {
  cover?: ProfileCreatecoverInput;
  phone: String;
  name: String;
  occupation: String;
  latitude: Float;
  longitude: Float;
  address: String;
  introduction: String;
}

export interface UserUpdateOneRequiredWithoutProfileInput {
  create?: UserCreateWithoutProfileInput;
  update?: UserUpdateWithoutProfileDataInput;
  upsert?: UserUpsertWithoutProfileInput;
  connect?: UserWhereUniqueInput;
}

export interface OccupationSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: OccupationWhereInput;
  AND?: OccupationSubscriptionWhereInput[] | OccupationSubscriptionWhereInput;
  OR?: OccupationSubscriptionWhereInput[] | OccupationSubscriptionWhereInput;
  NOT?: OccupationSubscriptionWhereInput[] | OccupationSubscriptionWhereInput;
}

export interface ProfileWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  phone?: String;
  phone_not?: String;
  phone_in?: String[] | String;
  phone_not_in?: String[] | String;
  phone_lt?: String;
  phone_lte?: String;
  phone_gt?: String;
  phone_gte?: String;
  phone_contains?: String;
  phone_not_contains?: String;
  phone_starts_with?: String;
  phone_not_starts_with?: String;
  phone_ends_with?: String;
  phone_not_ends_with?: String;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  occupation?: String;
  occupation_not?: String;
  occupation_in?: String[] | String;
  occupation_not_in?: String[] | String;
  occupation_lt?: String;
  occupation_lte?: String;
  occupation_gt?: String;
  occupation_gte?: String;
  occupation_contains?: String;
  occupation_not_contains?: String;
  occupation_starts_with?: String;
  occupation_not_starts_with?: String;
  occupation_ends_with?: String;
  occupation_not_ends_with?: String;
  latitude?: Float;
  latitude_not?: Float;
  latitude_in?: Float[] | Float;
  latitude_not_in?: Float[] | Float;
  latitude_lt?: Float;
  latitude_lte?: Float;
  latitude_gt?: Float;
  latitude_gte?: Float;
  longitude?: Float;
  longitude_not?: Float;
  longitude_in?: Float[] | Float;
  longitude_not_in?: Float[] | Float;
  longitude_lt?: Float;
  longitude_lte?: Float;
  longitude_gt?: Float;
  longitude_gte?: Float;
  address?: String;
  address_not?: String;
  address_in?: String[] | String;
  address_not_in?: String[] | String;
  address_lt?: String;
  address_lte?: String;
  address_gt?: String;
  address_gte?: String;
  address_contains?: String;
  address_not_contains?: String;
  address_starts_with?: String;
  address_not_starts_with?: String;
  address_ends_with?: String;
  address_not_ends_with?: String;
  introduction?: String;
  introduction_not?: String;
  introduction_in?: String[] | String;
  introduction_not_in?: String[] | String;
  introduction_lt?: String;
  introduction_lte?: String;
  introduction_gt?: String;
  introduction_gte?: String;
  introduction_contains?: String;
  introduction_not_contains?: String;
  introduction_starts_with?: String;
  introduction_not_starts_with?: String;
  introduction_ends_with?: String;
  introduction_not_ends_with?: String;
  user?: UserWhereInput;
  AND?: ProfileWhereInput[] | ProfileWhereInput;
  OR?: ProfileWhereInput[] | ProfileWhereInput;
  NOT?: ProfileWhereInput[] | ProfileWhereInput;
}

export interface UserCreateOneWithoutProfileInput {
  create?: UserCreateWithoutProfileInput;
  connect?: UserWhereUniqueInput;
}

export interface ProfileCreatecoverInput {
  set?: String[] | String;
}

export interface ProfileCreateInput {
  cover?: ProfileCreatecoverInput;
  phone: String;
  name: String;
  occupation: String;
  latitude: Float;
  longitude: Float;
  address: String;
  introduction: String;
  user: UserCreateOneWithoutProfileInput;
}

export interface ProfileUpdatecoverInput {
  set?: String[] | String;
}

export interface OccupationWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  AND?: OccupationWhereInput[] | OccupationWhereInput;
  OR?: OccupationWhereInput[] | OccupationWhereInput;
  NOT?: OccupationWhereInput[] | OccupationWhereInput;
}

export interface UserUpdateManyMutationInput {
  name?: String;
  email?: String;
  password?: String;
  wechat?: String;
}

export interface ProfileCreateOneWithoutUserInput {
  create?: ProfileCreateWithoutUserInput;
  connect?: ProfileWhereUniqueInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface ProfileUpdateOneWithoutUserInput {
  create?: ProfileCreateWithoutUserInput;
  update?: ProfileUpdateWithoutUserDataInput;
  upsert?: ProfileUpsertWithoutUserInput;
  delete?: Boolean;
  disconnect?: Boolean;
  connect?: ProfileWhereUniqueInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
  wechat?: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  wechat: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  wechat: () => Promise<AsyncIterator<String>>;
}

export interface ProfileEdge {
  node: Profile;
  cursor: String;
}

export interface ProfileEdgePromise extends Promise<ProfileEdge>, Fragmentable {
  node: <T = ProfilePromise>() => T;
  cursor: () => Promise<String>;
}

export interface ProfileEdgeSubscription
  extends Promise<AsyncIterator<ProfileEdge>>,
    Fragmentable {
  node: <T = ProfileSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface ProfileConnection {
  pageInfo: PageInfo;
  edges: ProfileEdge[];
}

export interface ProfileConnectionPromise
  extends Promise<ProfileConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ProfileEdge>>() => T;
  aggregate: <T = AggregateProfilePromise>() => T;
}

export interface ProfileConnectionSubscription
  extends Promise<AsyncIterator<ProfileConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ProfileEdgeSubscription>>>() => T;
  aggregate: <T = AggregateProfileSubscription>() => T;
}

export interface OccupationConnection {
  pageInfo: PageInfo;
  edges: OccupationEdge[];
}

export interface OccupationConnectionPromise
  extends Promise<OccupationConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<OccupationEdge>>() => T;
  aggregate: <T = AggregateOccupationPromise>() => T;
}

export interface OccupationConnectionSubscription
  extends Promise<AsyncIterator<OccupationConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<OccupationEdgeSubscription>>>() => T;
  aggregate: <T = AggregateOccupationSubscription>() => T;
}

export interface User {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
  wechat?: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  profile: <T = ProfilePromise>() => T;
  wechat: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  profile: <T = ProfileSubscription>() => T;
  wechat: () => Promise<AsyncIterator<String>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface Profile {
  id: ID_Output;
  cover: String[];
  phone: String;
  name: String;
  occupation: String;
  latitude: Float;
  longitude: Float;
  address: String;
  introduction: String;
}

export interface ProfilePromise extends Promise<Profile>, Fragmentable {
  id: () => Promise<ID_Output>;
  cover: () => Promise<String[]>;
  phone: () => Promise<String>;
  name: () => Promise<String>;
  occupation: () => Promise<String>;
  latitude: () => Promise<Float>;
  longitude: () => Promise<Float>;
  address: () => Promise<String>;
  introduction: () => Promise<String>;
  user: <T = UserPromise>() => T;
}

export interface ProfileSubscription
  extends Promise<AsyncIterator<Profile>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  cover: () => Promise<AsyncIterator<String[]>>;
  phone: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  occupation: () => Promise<AsyncIterator<String>>;
  latitude: () => Promise<AsyncIterator<Float>>;
  longitude: () => Promise<AsyncIterator<Float>>;
  address: () => Promise<AsyncIterator<String>>;
  introduction: () => Promise<AsyncIterator<String>>;
  user: <T = UserSubscription>() => T;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface OccupationPreviousValues {
  id: ID_Output;
  occupations: String[];
}

export interface OccupationPreviousValuesPromise
  extends Promise<OccupationPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  occupations: () => Promise<String[]>;
}

export interface OccupationPreviousValuesSubscription
  extends Promise<AsyncIterator<OccupationPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  occupations: () => Promise<AsyncIterator<String[]>>;
}

export interface OccupationSubscriptionPayload {
  mutation: MutationType;
  node: Occupation;
  updatedFields: String[];
  previousValues: OccupationPreviousValues;
}

export interface OccupationSubscriptionPayloadPromise
  extends Promise<OccupationSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = OccupationPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = OccupationPreviousValuesPromise>() => T;
}

export interface OccupationSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<OccupationSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = OccupationSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = OccupationPreviousValuesSubscription>() => T;
}

export interface Occupation {
  id: ID_Output;
  occupations: String[];
}

export interface OccupationPromise extends Promise<Occupation>, Fragmentable {
  id: () => Promise<ID_Output>;
  occupations: () => Promise<String[]>;
}

export interface OccupationSubscription
  extends Promise<AsyncIterator<Occupation>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  occupations: () => Promise<AsyncIterator<String[]>>;
}

export interface AggregateOccupation {
  count: Int;
}

export interface AggregateOccupationPromise
  extends Promise<AggregateOccupation>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateOccupationSubscription
  extends Promise<AsyncIterator<AggregateOccupation>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ProfilePreviousValues {
  id: ID_Output;
  cover: String[];
  phone: String;
  name: String;
  occupation: String;
  latitude: Float;
  longitude: Float;
  address: String;
  introduction: String;
}

export interface ProfilePreviousValuesPromise
  extends Promise<ProfilePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  cover: () => Promise<String[]>;
  phone: () => Promise<String>;
  name: () => Promise<String>;
  occupation: () => Promise<String>;
  latitude: () => Promise<Float>;
  longitude: () => Promise<Float>;
  address: () => Promise<String>;
  introduction: () => Promise<String>;
}

export interface ProfilePreviousValuesSubscription
  extends Promise<AsyncIterator<ProfilePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  cover: () => Promise<AsyncIterator<String[]>>;
  phone: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  occupation: () => Promise<AsyncIterator<String>>;
  latitude: () => Promise<AsyncIterator<Float>>;
  longitude: () => Promise<AsyncIterator<Float>>;
  address: () => Promise<AsyncIterator<String>>;
  introduction: () => Promise<AsyncIterator<String>>;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface ProfileSubscriptionPayload {
  mutation: MutationType;
  node: Profile;
  updatedFields: String[];
  previousValues: ProfilePreviousValues;
}

export interface ProfileSubscriptionPayloadPromise
  extends Promise<ProfileSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ProfilePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ProfilePreviousValuesPromise>() => T;
}

export interface ProfileSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ProfileSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ProfileSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ProfilePreviousValuesSubscription>() => T;
}

export interface OccupationEdge {
  node: Occupation;
  cursor: String;
}

export interface OccupationEdgePromise
  extends Promise<OccupationEdge>,
    Fragmentable {
  node: <T = OccupationPromise>() => T;
  cursor: () => Promise<String>;
}

export interface OccupationEdgeSubscription
  extends Promise<AsyncIterator<OccupationEdge>>,
    Fragmentable {
  node: <T = OccupationSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateProfile {
  count: Int;
}

export interface AggregateProfilePromise
  extends Promise<AggregateProfile>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateProfileSubscription
  extends Promise<AsyncIterator<AggregateProfile>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export type Long = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
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
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
