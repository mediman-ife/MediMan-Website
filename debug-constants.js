
const API_BASE_URL = 'https://api.mediman.life';
const API_KEY = 'jmziDgOf+BmlBA8CJMkBT1hWAQltr1vh';

async function checkConstants() {
    const headers = { 'Content-Type': 'application/json', 'key': API_KEY };
    try {
        console.log("Fetching Filter Constants...");
        const res = await fetch(`${API_BASE_URL}/publicRoutes/getFilterConstants`, { headers });
        const data = await res.json();
        console.log("Filter Constants Keys:", Object.keys(data.data || {}));
        if (data.data && data.data.services) {
            console.log("Services in Constants:", data.data.services.length);
        } else {
            console.log("No services in Constants");
        }
    } catch (e) { console.error(e.message); }
}

checkConstants();
