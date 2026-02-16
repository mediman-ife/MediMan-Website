
const API_BASE_URL = 'https://api.mediman.life';
const API_KEY = 'jmziDgOf+BmlBA8CJMkBT1hWAQltr1vh';

async function searchDoctors() {
    try {
        const response = await fetch(`${API_BASE_URL}/publicRoutes/searchDoctors`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'key': API_KEY
            },
            body: JSON.stringify({
                pageNumber: 1,
                limit: 5,
                searchTerm: "",
                filter: {}
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Docs found:", data.data.length);
        data.data.forEach(doc => {
            console.log(`Doctor ID: ${doc._id}`);
            console.log(`Doctor: ${doc.firstName} ${doc.lastName}`);
            console.log("Profile Image:", JSON.stringify(doc.profileImage, null, 2));
            console.log("---");
        });

    } catch (error) {
        console.error('Error:', error);
    }
}

searchDoctors();
