const database = {
    data: [],
    get() {
        return this.data;
    },
    insert(application) {
        this.data.push(application);
    },
};

async function fetch(endpoint, { method, data }) {
    const payload = (method === 'GET') ? JSON.stringify(database.get()) : database.insert(JSON.parse(data));

    return new Promise(resolve => {
        setTimeout(() => resolve(payload), 1000);
    });
}