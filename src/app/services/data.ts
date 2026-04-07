import { Injectable, signal } from '@angular/core';

export interface ServiceItem {
  id: string;
  title: string;
  about: string;
  documents: string[];
  steps: string[];
}

@Injectable({
  providedIn: 'root'
})
export class Data {
  public services = signal<ServiceItem[]>([
    {
      id: 'pvt-ltd-company',
      title: 'Private Limited Company',
      about: 'A Private Limited Company is a legally recognized business structure offering limited liability and credibility.',
      documents: ['PAN & Aadhaar Card', 'Address Proof', 'Passport Size Photograph', 'Office Address Proof '],
      steps: ['Fill Details', 'Submit Documents', 'Name Approval', 'Registration Filing', 'Certificate Issued ']
    },
    {
      id: 'llp-registration',
      title: 'LLP Registration',
      about: 'LLP combines partnership flexibility with limited liability protection.',
      documents: ['PAN Card', 'Aadhaar Card', 'Address Proof'],
      steps: ['Fill Form', 'Submit Details', 'Name Approval', 'LLP Filing', 'Certificate']
    },
    {
      id: 'one-person-company',
      title: 'One Person Company',
      about: 'OPC allows a single person to run a company with limited liability.',
      documents: ['PAN Card', 'Aadhaar Card', 'Address Proof'],
      steps: ['Submit Details', 'Upload Documents', 'Approval', 'Registration']
    },
    {
      id: 'section-8-company',
      title: 'Section 8 Company',
      about: 'Section 8 Company is for NGOs and charitable organizations.',
      documents: ['PAN Card', 'Address Proof', 'NGO Details'],
      steps: ['Application', 'License Approval', 'Registration']
    },
    {
      id: 'partnership-firm',
      title: 'Partnership Firm',
      about: 'Business owned by 2+ partners under agreement.',
      documents: ['PAN Card', 'Partnership Deed'],
      steps: ['Draft Deed', 'Registration', 'Certificate']
    },
    {
      id: 'proprietorship',
      title: 'Proprietorship',
      about: 'Single owner business, easy to start.',
      documents: ['PAN Card', 'Aadhaar Card', 'Bank Details'],
      steps: ['GST/MSME Apply', 'Setup Complete']
    },
    {
      id: 'msme-registration',
      title: 'MSME Registration',
      about: 'Government registration for small businesses.',
      documents: ['PAN Card', 'Aadhaar Card'],
      steps: ['Apply Online', 'Certificate Issued']
    },
    {
      id: 'pan-tan',
      title: 'PAN / TAN',
      about: 'PAN/TAN required for taxation and compliance.',
      documents: ['PAN & Aadhaar Card', 'Address Proof', 'Passport Size Photograph'],
      steps: ['Fill Form', 'Submit Docs', 'Receive PAN/TAN']
    },
    {
      id: 'gst-registration',
      title: 'GST Registration',
      about: 'GST Registration is mandatory for businesses whose turnover exceeds the prescribed limit. It allows businesses to legally collect tax and claim input tax credit. Registering under GST ensures compliance with government regulations and enhances business credibility.',
      documents: ['PAN Card of Applicant', 'Aadhaar Card', 'Business Address Proof (Electricity Bill / Rent Agreement)', 'Bank Account Details', 'Passport Size Photograph'],
      steps: ['Fill Basic Details', 'Submit Required Documents', 'GST Application Preparation by Expert', 'Application Filed on GST Portal', 'GST Number Issued']
    },
    {
      id: 'gst-return-filing',
      title: 'GST Return Filing',
      about: 'Monthly/Quarterly GST filing.',
      documents: ['Sales Data', 'Purchase Data'],
      steps: ['Share Data', 'Filing', 'Confirmation']
    },
    {
      id: 'gst-cancellation',
      title: 'GST Cancellation',
      about: 'Cancel your GST registration easily and compliant with the laws.',
      documents: ['PAN Card of Applicant', 'Aadhaar Card', 'Business Address Proof', 'Bank Account Details'],
      steps: ['Fill Basic Details', 'Submit Required Documents', 'Application Filed on GST Portal', 'GST Cancellation Confirmed']
    },
    {
      id: 'itr-filing',
      title: 'ITR Filing',
      about: 'File income tax returns annually.',
      documents: ['PAN', 'Form 16', 'Bank Details'],
      steps: ['Submit Details', 'Filing', 'Acknowledgement']
    },
    {
      id: 'tds-filing',
      title: 'TDS Filing',
      about: 'Tax deducted at source filing.',
      documents: ['PAN', 'Data'],
      steps: ['Upload Data', 'File Return']
    },
    {
      id: 'company-incorporation',
      title: 'Company Incorporation',
      about: 'Register company under MCA.',
      documents: ['PAN & Aadhaar Card', 'Address Proof', 'Passport Size Photograph', 'Registered Office Proof'],
      steps: ['Apply', 'Approval', 'Certificate']
    },
    {
      id: 'roc-filing',
      title: 'ROC Filing',
      about: 'Annual filing for companies.',
      documents: ['PAN & Aadhaar Card', 'Address Proof', 'Passport Size Photograph', 'Registered Office Proof'],
      steps: ['Submit Docs', 'Filing']
    },
    {
      id: 'annual-compliance',
      title: 'Annual Compliance',
      about: 'Maintain legal compliance yearly.',
      documents: ['PAN & Aadhaar Card', 'Address Proof', 'Passport Size Photograph', 'Registered Office Proof'],
      steps: ['Submit Docs', 'Filing']
    },
    {
      id: 'pf-registration',
      title: 'PF Registration & Filing',
      about: 'Employee provident fund compliance.',
      documents: ['PAN & Aadhaar Card', 'Address Proof', 'Passport Size Photograph'],
      steps: ['Register', 'Monthly Filing']
    },
    {
      id: 'esi-registration',
      title: 'ESI Registration & Filing',
      about: 'Employee insurance scheme compliance.',
      documents: ['PAN & Aadhaar Card', 'Address Proof', 'Passport Size Photograph'],
      steps: ['Register', 'Monthly Filing']
    },
    {
      id: 'payroll-services',
      title: 'Payroll Services',
      about: 'Complete payroll management.',
      documents: ['PAN & Aadhaar Card', 'Address Proof', 'Passport Size Photograph'],
      steps: ['Setup', 'Monthly Processing']
    }
  ]);

  getServiceById(id: string): ServiceItem | undefined {
    return this.services().find(s => s.id === id);
  }
}
