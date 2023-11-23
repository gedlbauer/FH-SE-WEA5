export const baseUrl = 'http://localhost:3000';

export async function getBooks() {
    return await fetch(`${baseUrl}/bookshop-rest-service/api/books`)
        .then(response => response.json());
}

export async function getBookById(id) {
    return await fetch(`${baseUrl}/bookshop-rest-service/api/book/${id}`)
        .then(response => response.json());
}