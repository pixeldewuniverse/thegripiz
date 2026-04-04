import type { Customer } from './types';

const toCsvCell = (value: string) => `"${value.replaceAll('"', '""')}"`;

export const buildCustomerCsv = (customers: Customer[]) => {
  const headers = ['name', 'email', 'phone'];
  const rows = customers.map((customer) =>
    [customer.name, customer.email, customer.phone].map(toCsvCell).join(',')
  );

  return [headers.join(','), ...rows].join('\n');
};

export const downloadCustomerCsv = (customers: Customer[]) => {
  const csv = buildCustomerCsv(customers);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'crm-customers.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};
