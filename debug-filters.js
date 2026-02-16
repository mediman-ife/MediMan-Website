
const API_BASE_URL = 'https://api.mediman.life';
const API_KEY = 'jmziDgOf+BmlBA8CJMkBT1hWAQltr1vh';

async function testKeys() {
    const headers = { 'Content-Type': 'application/json', 'key': API_KEY };

    // Fetch Clinics
    let validClinicId = null;
    let clinicName = null;
    try {
        const cRes = await fetch(`${API_BASE_URL}/publicRoutes/getAllClinics`, { headers });
        const cData = await cRes.json();
        if (cData.data && cData.data.length > 0) {
            validClinicId = cData.data[0]._id;
            clinicName = cData.data[0].clinicName;
            console.log(`Got Clinic: ${clinicName} (${validClinicId})`);
        }
    } catch (e) { console.error('Failed to fetch clinics'); }

    if (!validClinicId) return;

    const keysToProbe = ['clinic', 'clinics', 'hospital', 'hospitals', 'attachedHospital', 'provider', 'medicalCenter'];
    const endpoints = ['/publicRoutes/searchDoctors', '/publicRoutes/getAllDoctors'];

    for (const endpoint of endpoints) {
        console.log(`\n=== Testing Endpoint: ${endpoint} ===`);
        for (const key of keysToProbe) {
            const body = {
                pageNumber: 1,
                limit: 10,
                filter: { [key]: [validClinicId] }
            };

            try {
                const res = await fetch(`${API_BASE_URL}${endpoint}`, {
                    method: 'POST',
                    headers,
                    body: JSON.stringify(body)
                });

                if (res.ok) {
                    const data = await res.json();
                    console.log(`✅ SUCCESS key '${key}': ${data.data ? data.data.length : 0} results`);
                } else {
                    const txt = await res.text();
                    // errors usually say "X is not allowed"
                    if (txt.includes("not allowed")) {
                        console.log(`❌ Key '${key}' NOT ALLOWED`);
                    } else {
                        console.log(`❌ Key '${key}' Error: ${res.status} ${txt}`);
                    }
                }
            } catch (err) { console.error(err.message); }
        }
    }
}

testKeys();
