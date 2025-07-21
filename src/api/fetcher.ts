export class FetchClient {
    static async get<T>(url: string, options?: RequestInit): Promise<T> {
        const res = await fetch(url, options);
        return res.json();
    }

    static async delete(url: string): Promise<void> {
        await fetch(url, { method: 'DELETE' });
    }

    static async post<T>(url: string, data: unknown): Promise<T> {
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        return res.json();
    }

    static async patch<T>(url: string, data: unknown): Promise<T> {
        const res = await fetch(url, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        return res.json();
    }
}