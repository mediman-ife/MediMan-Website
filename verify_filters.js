
const API_BASE_URL = 'https://api.mediman.life';
const API_KEY = 'jmziDgOf+BmlBA8CJMkBT1hWAQltr1vh';

async function verifyFilters() {
    const headers = { 'Content-Type': 'application/json', 'key': API_KEY };
    console.log("🚀 Starting Filter Verification...");

    // 1. Fetch Dependencies
    let validServiceId = null;
    let serviceName = null;
    let validLanguageId = null;

    try {
        const sRes = await fetch(`${API_BASE_URL}/publicRoutes/getAllServices`, { headers });
        const sData = await sRes.json();
        if (sData.data?.[0]) {
            validServiceId = sData.data[0]._id;
            serviceName = sData.data[0].name;
            console.log(`✅ Reference Data: Service '${serviceName}' (${validServiceId})`);
        }

        const lRes = await fetch(`${API_BASE_URL}/publicRoutes/getAllLanguages`, { headers });
        const lData = await lRes.json();
        if (lData.data?.[0]) validLanguageId = lData.data[0]; // Assuming array of strings or objects? Array of strings based on Debug output
    } catch (e) {
        console.error("❌ Failed to fetch reference data");
        return;
    }

    const tests = [
        {
            name: "Baseline (No Filters)",
            body: { pageNumber: 1, limit: 5 }
        },
        {
            name: "Filter by Consultation Type (ONLINE)",
            body: { pageNumber: 1, limit: 5, filter: { consultationType: ['ONLINE'] } }
        },
        {
            name: "Filter by Gender (Male)",
            body: { pageNumber: 1, limit: 5, filter: { gender: ['Male'] } }
        },
        {
            name: `Filter by Service (${serviceName})`,
            skip: !validServiceId,
            body: { pageNumber: 1, limit: 5, filter: { service: [validServiceId] } }
        },
        {
            name: "Combined: Male + ONLINE",
            body: {
                pageNumber: 1,
                limit: 5,
                filter: { gender: ['Male'], consultationType: ['ONLINE'] }
            }
        }
    ];

    for (const test of tests) {
        if (test.skip) continue;
        process.stdout.write(`Testing ${test.name.padEnd(40)} ... `);
        try {
            const start = Date.now();
            const res = await fetch(`${API_BASE_URL}/publicRoutes/searchDoctors`, {
                method: 'POST',
                headers,
                body: JSON.stringify(test.body)
            });
            const duration = Date.now() - start;

            if (res.ok) {
                const data = await res.json();
                console.log(`✅ PASS (${data.data?.length || 0} results) - ${duration}ms`);
            } else {
                console.log(`❌ FAIL (${res.status})`);
                console.log(await res.text());
            }
        } catch (e) {
            console.log(`❌ ERROR: ${e.message}`);
        }
    }
}

verifyFilters();
