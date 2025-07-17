export const API_PATHS = {
  AI: {
    GENERATE_QUESTIONS: "/api/ai/generate",             // POST: Generate interview questions
    GENERATE_EXPLANATION: "/api/ai/generate-explanation", // POST: Explain a concept
  },

  QUESTION: {
    PIN: (id) => `/api/ai/${id}/pin`,                   // POST: Toggle pin on a question
    ADD_TO_SESSION: "/api/ai/add",                      // POST: Add questions to a session
    NOTE: (id) => `/api/ai/${id}/note`,                 // POST: Update a question note
  },

  SESSION: {
    CREATE: "/api/ai/create",                           // POST: Create a new interview session
    GET_ONE: (id) => `/api/ai/${id}`,                   // GET: Get a session by ID
    MY_SESSIONS: "/api/ai/my-sessions",                 // GET: All sessions for logged-in user
    DELETE: (id) => `/api/ai/${id}`,                    // DELETE: Remove a session
  },
};
