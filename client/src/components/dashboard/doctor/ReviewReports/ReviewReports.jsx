import React, {useState} from 'react'
import './ReviewReports.css'
import DocLogo from '../../../../assets/icons/Document.svg'
import DashboardHeader from '../../../layout/DashboardHeader/DashboardHeader'
import TertiaryButton from '../../../shared/buttons/TertiaryButton/TertiaryButton'

export default function ReviewReports() {

  const [reports,setReports] = useState([
    {
      name:"Raju Singh",
      category:"general Consultancy",
      reportList:[
        "report1",
        "report1",
        "report1",
        "report1",
        "report1",
        "report1",
      ]
    },
    {
      name:"Raju Singh",
      category:"general Consultancy",
      reportList:[
        "report1",
        "report1",
        "report1",
        "report1",
        "report1",
        "report1",
      ]
    },
    {
      name:"Raju Singh",
      category:"general Consultancy",
      reportList:[
        "report1",
        "report1",
        "report1",
        "report1",
        "report1",
        "report1",
      ]
    }
  ]);



  return (
    <>
    <DashboardHeader title="Reports to review"></DashboardHeader>
    <div className='ReviewReports'>
      <div className='PageHeading'>
        <p>Report</p>
        <p>Action</p>
      </div>
      {
        reports.map(report => (
          <div className='ReportsDetails'>
            <div className='Name'>{report.name}</div>
            <div className="category">{report.category}</div>
            <TertiaryButton text="View Appointment"></TertiaryButton>
            <div className="ReportDocs">
              {
                report.reportList.map(rep => (
                    <div className='ReportIcon'>
                      <div className='title'>{rep}</div>
                      <button><img src={DocLogo} alt="" /></button>
                    </div>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
    </>
  )
}
