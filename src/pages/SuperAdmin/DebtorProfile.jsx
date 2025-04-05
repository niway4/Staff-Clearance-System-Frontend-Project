import React from 'react'
import Wrapper from './Wrapper'
import TitleBar from '../../components/layout/TitleBar'
import TableCard from '../../components/layout/TableCard'
import Sidebar from '../../components/layout/SideBar'



function DebtorProfile() {

  return (
   <Wrapper>
<div className="flex-1 bg-backgroundColor p-6 overflow-auto">
        <TitleBar title="Debtor Profile" />
        <TableCard header={["Loan Office","Items Borrowed", "Borrowing Date","Returning Date", "Status", "Comment"]} inputData={employeeData} />
      </div>
    </Wrapper>
)
}

export default DebtorProfile