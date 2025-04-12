/**
 * This is a mock database module.
 * In a real application, you would use a real database like MongoDB, PostgreSQL, etc.
 */

// Mock database collections
const collections = {
  users: [],
  universities: [],
  departments: [],
  colleges: [],
  events: [],
  jobs: [],
  resources: [],
  forums: [],
}

/**
 * Find documents in a collection
 * @param {string} collectionName - The name of the collection
 * @param {Object} query - The query to filter documents
 * @returns {Promise<Array>} The matching documents
 */
export async function find(collectionName, query = {}) {
  if (!collections[collectionName]) {
    throw new Error(`Collection ${collectionName} does not exist`)
  }

  // Simple filtering logic - in a real DB this would be more sophisticated
  return collections[collectionName].filter((doc) => {
    for (const [key, value] of Object.entries(query)) {
      if (doc[key] !== value) {
        return false
      }
    }
    return true
  })
}

/**
 * Find a single document in a collection
 * @param {string} collectionName - The name of the collection
 * @param {Object} query - The query to filter documents
 * @returns {Promise<Object|null>} The matching document or null
 */
export async function findOne(collectionName, query = {}) {
  const results = await find(collectionName, query)
  return results.length > 0 ? results[0] : null
}

/**
 * Insert a document into a collection
 * @param {string} collectionName - The name of the collection
 * @param {Object} document - The document to insert
 * @returns {Promise<Object>} The inserted document
 */
export async function insertOne(collectionName, document) {
  if (!collections[collectionName]) {
    throw new Error(`Collection ${collectionName} does not exist`)
  }

  const newDoc = {
    _id: generateId(),
    ...document,
    createdAt: new Date().toISOString(),
  }

  collections[collectionName].push(newDoc)

  return newDoc
}

/**
 * Update a document in a collection
 * @param {string} collectionName - The name of the collection
 * @param {Object} query - The query to find the document to update
 * @param {Object} update - The update to apply
 * @returns {Promise<Object|null>} The updated document or null
 */
export async function updateOne(collectionName, query, update) {
  if (!collections[collectionName]) {
    throw new Error(`Collection ${collectionName} does not exist`)
  }

  const index = collections[collectionName].findIndex((doc) => {
    for (const [key, value] of Object.entries(query)) {
      if (doc[key] !== value) {
        return false
      }
    }
    return true
  })

  if (index === -1) {
    return null
  }

  const updatedDoc = {
    ...collections[collectionName][index],
    ...update,
    updatedAt: new Date().toISOString(),
  }

  collections[collectionName][index] = updatedDoc

  return updatedDoc
}

/**
 * Delete a document from a collection
 * @param {string} collectionName - The name of the collection
 * @param {Object} query - The query to find the document to delete
 * @returns {Promise<boolean>} True if a document was deleted, false otherwise
 */
export async function deleteOne(collectionName, query) {
  if (!collections[collectionName]) {
    throw new Error(`Collection ${collectionName} does not exist`)
  }

  const initialLength = collections[collectionName].length

  collections[collectionName] = collections[collectionName].filter((doc) => {
    for (const [key, value] of Object.entries(query)) {
      if (doc[key] === value) {
        return false
      }
    }
    return true
  })

  return collections[collectionName].length < initialLength
}

/**
 * Generate a random ID
 * @returns {string} A random ID
 */
function generateId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
