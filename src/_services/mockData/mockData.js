export const UserData = [
  {
    name: "John Doe",
    emailAddress: "John.Doe@gmail.com",
    company: "ABC Company",
    createdAt: String(new Date()),
    role: "Admin",
  },
  {
    name: "John smith 1",
    emailAddress: "John.smoth@gmail.com",
    company: "DEF Company",
    createdAt: String(new Date()),
    role: "ReadOnly",
  },
  {
    name: "Abraham ",
    emailAddress: "AB.Doe@gmail.com",
    company: "FGH Company",
    createdAt: String(new Date()),

    role: "Admin",
  },
  {
    name: "Rick Sanchez ",
    emailAddress: "Rick.Doe@gmail.com",
    company: "Rick Company",
    createdAt: String(new Date()),

    role: "Admin",
  },
  {
    name: "Morty  ",
    emailAddress: "John.Doe@gmail.com",
    company: "Morty Company",
    createdAt: String(new Date()),

    role: "Read Only",
  },
  {
    name: "Leena Smith",
    emailAddress: "Leena.Doe@gmail.com",
    company: "Leen Company",
    createdAt: String(new Date()),

    role: "Admin",
  },
  {
    name: "Morty  ",
    emailAddress: "John.Doe@gmail.com",
    company: "Morty Company",
    createdAt: String(new Date()),

    role: "Read Only",
  },
  {
    name: "Leena Smith",
    emailAddress: "Leena.Doe@gmail.com",
    company: "Leen Company",
    createdAt: String(new Date()),

    role: "Admin",
  },
  {
    name: "Rick Sanchez ",
    emailAddress: "Rick.Doe@gmail.com",
    company: "Rick Company",
    createdAt: String(new Date()),

    role: "Admin",
  },
  {
    name: "Morty  ",
    emailAddress: "John.Doe@gmail.com",
    company: "Morty Company",
    createdAt: String(new Date()),

    role: "Read Only",
  },
];

export const roles = [
  { roleName: "", permission: "" },
  { roleName: "Admin", permission: "admin" },
  { roleName: "Read Only", permission: "readOnly" },
  { roleName: "Company Admin", permission: "companyAdmin" },
  { roleName: "Company View Only", permission: "companyViewOnly" },
];

export const companies = [
  { companyName: "Global Technologies" },
  { companyName: "ABC Technologies" },
  { companyName: "Inter Technologies" },
  { companyName: "Corp Technologies" },
];

export const userValues = {
  title: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
  companyName: "",
  role: "",
};
