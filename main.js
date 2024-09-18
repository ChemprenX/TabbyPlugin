// main.js

// Fungsi untuk mengirim permintaan ke API TabbyML
function sendRequest(token, query) {
    const url = 'https://api.tabby.com/v1/ask';
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    };
    const data = JSON.stringify({
        query: query
    });

    fetch(url, {
        method: 'POST',
        headers: headers,
        body: data
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Tampilkan respons di Acode
        displayResponse(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// Fungsi untuk menampilkan respons di Acode
function displayResponse(responseData) {
    // Implementasi tampilan respons di Acode
    // Misalnya, menggunakan fungsi Acode untuk menampilkan output di panel tertentu
    acode.showOutput(responseData.answer);
}

// Contoh penggunaan
const token = 'YOUR_TOKEN_HERE';
const query = 'Bagaimana cara mengintegrasikan Acode dengan TabbyML?';
sendRequest(token, query);
