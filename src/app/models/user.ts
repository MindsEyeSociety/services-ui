export interface User {
  address: string;
  email: string;
  firstName: string;
  fullName: string;
  id: number;
  lastName: string;
  membershipExpiration: string;
  membershipNumber: string;
  membershipType: string;
  nickname: string;
}

export function makeUserModel(data = null): User {
  let user: User = {
    address: null,
    email: null,
    firstName: null,
    fullName: null,
    id: null,
    lastName: null,
    membershipExpiration: null,
    membershipNumber: null,
    membershipType: null,
    nickname: null
  };
  if(data) {
    user = {
      address: data.address,
      email: data.email,
      firstName: data.firstName,
      fullName: data.fullName,
      id: data.id,
      lastName: data.lastName,
      membershipExpiration: data.membershipExpiration,
      membershipNumber: data.membershipNumber,
      membershipType: data.membershipType,
      nickname: data.nickname
    };
  }
  return user;
}
