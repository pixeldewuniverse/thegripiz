'use client';

import { useMemo, useState } from 'react';
import { downloadCustomerCsv } from '@/lib/crm/export';
import { mockCustomers } from '@/lib/crm/mockCustomers';
import type { Customer, CustomerSource, CustomerStatus, CustomerTag } from '@/lib/crm/types';

const statusFilters: Array<{ label: string; value: CustomerStatus | 'all' }> = [
  { label: 'All status', value: 'all' },
  { label: 'New', value: 'new' },
  { label: 'Contacted', value: 'contacted' },
  { label: 'Converted', value: 'converted' },
];

const sourceFilters: Array<{ label: string; value: CustomerSource | 'all' }> = [
  { label: 'All sources', value: 'all' },
  { label: 'Landing Page', value: 'landing_page' },
  { label: 'Instagram', value: 'instagram' },
  { label: 'Ads', value: 'ads' },
];

const tags: CustomerTag[] = ['VIP', 'repeat', 'tourist'];

const isWithinDateRange = (createdAt: string, fromDate: string, toDate: string) => {
  if (!fromDate && !toDate) {
    return true;
  }

  const date = new Date(createdAt).getTime();
  const from = fromDate ? new Date(`${fromDate}T00:00:00`).getTime() : Number.NEGATIVE_INFINITY;
  const to = toDate ? new Date(`${toDate}T23:59:59`).getTime() : Number.POSITIVE_INFINITY;

  return date >= from && date <= to;
};

export default function CrmDashboardPage() {
  const [customers, setCustomers] = useState<Customer[]>(mockCustomers);
  const [status, setStatus] = useState<CustomerStatus | 'all'>('all');
  const [source, setSource] = useState<CustomerSource | 'all'>('all');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [query, setQuery] = useState('');

  const filteredCustomers = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return customers.filter((customer) => {
      const statusMatch = status === 'all' || customer.status === status;
      const sourceMatch = source === 'all' || customer.source === source;
      const queryMatch =
        !normalizedQuery ||
        customer.name.toLowerCase().includes(normalizedQuery) ||
        customer.phone.toLowerCase().includes(normalizedQuery);
      const dateMatch = isWithinDateRange(customer.created_at, fromDate, toDate);

      return statusMatch && sourceMatch && queryMatch && dateMatch;
    });
  }, [customers, fromDate, query, source, status, toDate]);

  const segments = useMemo(() => {
    const newLeads = customers.filter((customer) => customer.status === 'new').length;
    const notContacted = customers.filter((customer) => customer.status !== 'contacted').length;
    const repeatCustomers = customers.filter((customer) => customer.tags.includes('repeat')).length;

    return {
      newLeads,
      notContacted,
      repeatCustomers,
    };
  }, [customers]);

  const toggleTag = (customerId: string, tag: CustomerTag) => {
    setCustomers((current) =>
      current.map((customer) => {
        if (customer.id !== customerId) {
          return customer;
        }

        const nextTags = customer.tags.includes(tag)
          ? customer.tags.filter((value) => value !== tag)
          : [...customer.tags, tag];

        return { ...customer, tags: nextTags };
      })
    );
  };

  return (
    <main className="min-h-screen bg-neutral-100 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="rounded-xl bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-semibold text-neutral-900">CRM Ads Dashboard</h1>
          <p className="mt-2 text-sm text-neutral-600">
            Manage audience targeting for Facebook and Google campaigns.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <button
            className="rounded-lg bg-white p-4 text-left shadow-sm"
            onClick={() => setStatus('new')}
            type="button"
          >
            <p className="text-sm text-neutral-500">New leads</p>
            <p className="text-2xl font-semibold text-neutral-900">{segments.newLeads}</p>
          </button>
          <button
            className="rounded-lg bg-white p-4 text-left shadow-sm"
            onClick={() => setStatus('new')}
            type="button"
          >
            <p className="text-sm text-neutral-500">Not contacted</p>
            <p className="text-2xl font-semibold text-neutral-900">{segments.notContacted}</p>
          </button>
          <button
            className="rounded-lg bg-white p-4 text-left shadow-sm"
            onClick={() => setQuery('')}
            type="button"
          >
            <p className="text-sm text-neutral-500">Repeat customers</p>
            <p className="text-2xl font-semibold text-neutral-900">{segments.repeatCustomers}</p>
          </button>
        </section>

        <section className="space-y-4 rounded-xl bg-white p-4 shadow-sm md:p-6">
          <div className="flex flex-wrap items-center gap-3">
            {statusFilters.map((item) => (
              <button
                key={item.value}
                className={`rounded-full border px-3 py-1 text-sm transition ${
                  status === item.value
                    ? 'border-neutral-900 bg-neutral-900 text-white'
                    : 'border-neutral-300 text-neutral-700 hover:border-neutral-500'
                }`}
                onClick={() => setStatus(item.value)}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {sourceFilters.map((item) => (
              <button
                key={item.value}
                className={`rounded-full border px-3 py-1 text-sm transition ${
                  source === item.value
                    ? 'border-neutral-900 bg-neutral-900 text-white'
                    : 'border-neutral-300 text-neutral-700 hover:border-neutral-500'
                }`}
                onClick={() => setSource(item.value)}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="grid gap-3 md:grid-cols-4">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search name / phone"
              className="rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-neutral-600"
            />
            <input
              type="date"
              value={fromDate}
              onChange={(event) => setFromDate(event.target.value)}
              className="rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-neutral-600"
            />
            <input
              type="date"
              value={toDate}
              onChange={(event) => setToDate(event.target.value)}
              className="rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-neutral-600"
            />
            <button
              className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white"
              onClick={() => downloadCustomerCsv(filteredCustomers)}
              type="button"
            >
              Export CSV
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200 text-neutral-500">
                  <th className="px-2 py-3">Name</th>
                  <th className="px-2 py-3">Email</th>
                  <th className="px-2 py-3">Phone</th>
                  <th className="px-2 py-3">Country</th>
                  <th className="px-2 py-3">Interest</th>
                  <th className="px-2 py-3">Status</th>
                  <th className="px-2 py-3">Source</th>
                  <th className="px-2 py-3">Date</th>
                  <th className="px-2 py-3">Tags</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="border-b border-neutral-100 align-top">
                    <td className="px-2 py-3 font-medium text-neutral-900">{customer.name}</td>
                    <td className="px-2 py-3 text-neutral-700">{customer.email}</td>
                    <td className="px-2 py-3 text-neutral-700">{customer.phone}</td>
                    <td className="px-2 py-3 text-neutral-700">{customer.country}</td>
                    <td className="px-2 py-3 text-neutral-700">{customer.product_interest}</td>
                    <td className="px-2 py-3 text-neutral-700">{customer.status}</td>
                    <td className="px-2 py-3 text-neutral-700">{customer.source}</td>
                    <td className="px-2 py-3 text-neutral-700">
                      {new Date(customer.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-2 py-3">
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => {
                          const active = customer.tags.includes(tag);

                          return (
                            <button
                              key={tag}
                              onClick={() => toggleTag(customer.id, tag)}
                              type="button"
                              className={`rounded-full border px-2 py-0.5 text-xs ${
                                active
                                  ? 'border-amber-500 bg-amber-100 text-amber-900'
                                  : 'border-neutral-300 text-neutral-600'
                              }`}
                            >
                              {tag}
                            </button>
                          );
                        })}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
