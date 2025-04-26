import avatar from "../images/avatar.png";
const debtors = [
  {
    id: 1,
    name: "John Doe",
    img: avatar,
    contactnumber: "123-456-7890",
    email: "john.doe@example.com",
    amountowed: 5000,
    duedate: "2023-12-01",
    itemsborrowed: [
      {
        loanoffice: "Loan Office 1",
        itemsborrowed: "Item 2",
        borrowingdate: "2023-01-01",
        returningdate: "2023-01-10",
        status: "Pending",
        comment: "No comment",
      },
      {
        loanoffice: "Loan Office 2",
        itemsborrowed: "Item 3",
        borrowingdate: "2023-02-01",
        returningDate: "2023-02-10",
        status: "Approved",
        comment: "No comment",
      },
      {
        loanoffice: "Loan Office 3",
        itemsborrowed: "Item 1",
        borrowingdate: "2023-02-01",
        returningDate: "2023-02-10",
        status: "Approved",
        comment: "No comment",
      },
    ],
  },

  {
    id: 2,
    name: "Jane Smith",
    contactnumber: "987-654-3210",
    email: "jane.smith@example.com",
    amountowed: 3000,
    duedate: "2023-11-15",
  },

  {
    id: 3,
    name: "Acme Corp",
    contactnumber: "555-123-4567",
    email: "info@acmecorp.com",
    amountowed: 15000,
    duedate: "2024-01-10",
  },
  {
    id: 4,
    name: "XYZ Financial",
    contactnumber: "444-555-6666",
    email: "support@xyzfinancial.com",
    amountowed: 2500,
    duedate: "2023-10-20",
  },
];

export const employeeData = [
  {
    id: 1,
    loanofficer: "John Doe",
    itemsborrowed: 5,
    borrowingdate: "2023-10-01",
    returningdate: "2023-10-15",
    status: "Returned",
    comment: "No issues",
  },
  {
    id: 2,
    loanofficer: "Jane Smith",
    itemsborrowed: 3,
    borrowingdate: "2023-09-20",
    returningdate: "2023-09-25",
    status: "Pending",
    comment: "Late return",
  },
  {
    id: 3,
    loanofficer: "Acme Corp",
    itemsborrowed: 10,
    borrowingdate: "2023-08-15",
    returningdate: "2023-08-30",
    status: "Returned",
    comment: "No issues",
  },
  {
    id: 4,
    loanofficer: "XYZ Financial",
    itemsborrowed: 2,
    borrowingdate: "2023-07-10",
    returningdate: "2023-07-20",
    status: "Pending",
    comment: "Late return",
  },
];

export default debtors;
