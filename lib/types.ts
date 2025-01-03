export type Orders ={
    id: number,
    customer_name: string,
    customer_email: string,
    order_date: Date,
    amount_in_cents: number,
    status: 'completed' | 'pending',
    created_at: string,
    updated_at: string,
}
// id: 160,
// customer_name: 'Yohanna Rodrigues',
// customer_email: 'yohanna.rodrigues@example.org',
// order_date: '2015-02-28',
// amount_in_cents: 492913,
// status: 'completed',
// created_at: '2025-01-02T18:00:04.000000Z',
// updated_at: '2025-01-02T18:00:04.000000Z'