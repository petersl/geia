export interface AppUser {
  canAccessHospitalSection: boolean;
  email: string;
  id: string;
  image: string | null;
  isAdministrative: boolean;
  isDoctor: boolean;
  isNurse: boolean;
  isPatient: boolean;
  isSystem: boolean;
  name: string;
}

type User = {
  email: string;
  id: string;
  image: string | null;
  name: string;

  // eslint-disable-next-line typescript-sort-keys/interface
  // localCredentials: {
  //   passwordHash: string;
  // } | null;
  roles: UserRole[];
};

type UserRole = 'administrative' | 'doctor' | 'nurse' | 'patient' | 'system';

const mockUsers: User[] = [
  {
    email: 'janka@akesoholding.cz',
    id: 'P3nwZHx0fYQ3xUXXGNtZ',
    image: null,
    name: 'Marek Janka',
    roles: ['doctor'],
  },
  {
    email: 'slavik@multiscan.cz',
    id: 'oR2T4ZPJLZXJWnePKht5',
    image: null,
    name: 'Peter Slávik',
    roles: ['patient', 'system'],
  },
  {
    email: 'soukup@multiscan.cz',
    id: 'LgynCdmRq9UUgn0qDdKw',
    image: null,
    name: 'Daniel Soukup',
    roles: ['administrative'],
  },
  {
    email: 'sestra@multiscan.cz',
    id: '7VW3Jn7bWeQMUB1E1Hfy',
    image: null,
    name: 'Sestricka Jedna',
    roles: ['nurse'],
  },
];

const ROLES_FOR_HOSPITAL_SECTIONS: UserRole[] = ['administrative', 'doctor', 'nurse', 'system'];

export async function loginUserWithLocalCredential(opts: { email: string; password: string }) {
  // const userRecord = await prisma.user.findUnique({
  //   include: {
  //     credentials: true,
  //   },
  //   where: {
  //     email: username.toString(),
  //   },
  // });

  const userRecord = mockUsers.find((u) => u.email === opts.email);

  if (userRecord == null) return { ok: false, reason: 'USER NOT FOUND' };

  if (passwordMatch(userRecord, opts.password) === false) {
    return { ok: false, reason: 'PASSWORD DOES NOT MATCH' };
  }

  return { ok: true, user: decorateUser(userRecord) };
}

function decorateUser(ur: User): AppUser {
  const noRole = ur.roles.length === 0;

  return {
    canAccessHospitalSection: ur.roles.some((r) => ROLES_FOR_HOSPITAL_SECTIONS.includes(r)),
    email: ur.email,
    id: ur.id,
    image: ur.image,
    isAdministrative: ur.roles.includes('administrative'),
    isDoctor: ur.roles.includes('doctor'),
    isNurse: ur.roles.includes('nurse'),
    isPatient: ur.roles.includes('patient') || noRole,
    isSystem: ur.roles.includes('system'),
    name: ur.name,
  } satisfies AppUser;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
function passwordMatch(ur: User, plainPassword: string) {
  // TODO: check password...
  return true;
}
