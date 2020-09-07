import { companies } from "@/_services/mockData";

const initialState = {
  companies: [
    {
      id: 1,
      companyName: "ABC Name",
      email: "abc@gmail.com",
      primaryContactCellNo: "+91-987654321",
      companyUrl: "ABCName",
      companyAdmin: "abc user"
    },
    {
      id: 2,
      companyName: "DEF Name",
      email: "def@gmail.com",
      primaryContactCellNo: "+91-982224321",
      companyUrl: "DEF",
      companyAdmin: "abc user"
    },
    {
      id: 3,
      companyName: "GHI Name",
      email: "hig@gmail.com",
      primaryContactCellNo: "+91-9876324321",
      companyUrl: "GHI",
      companyAdmin: "abc user"
    }
  ],
  clientCompany: [
    {
      id: 1,
      companyName: "ABC Name",
      email: "abc@gmail.com",
      primaryContactCellNo: "+91-987654321",
      companyUrl: "ABCName",
      companyAdmin: "abc user"
    }
  ],
  apiFetching: false,
  errors: []
};
const clientCompanyInitialState = [
  {
    id: 1,
    companyName: "",
    email: "",
    primaryContactCellNo: "",
    companyUrl: "",
    companyAdmin: ""
  }
];
const initialStore = { initialState, clientCompanyInitialState };

export default initialStore;
