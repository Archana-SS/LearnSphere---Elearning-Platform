# LearnSphere: Elearning-Platform
LearnSphere is an interactive e-learning platform designed meet the evolving educational needs of students by combing curated contents such as video lectures, real-time news articles, YouTube Playlists and an AI-powered Interview Prep tool. 
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Platform Architecture Overview
LearnSphere implements a modular architecture that combines multiple frontend applications with external service integrations. The platform consists of a main React application, specialized tools, and content aggregation services.

<img width="1230" height="761" alt="image" src="https://github.com/user-attachments/assets/2d141324-8705-41a4-9f57-b8f2ca7aa097" />

Core Features and Capabilities

LearnSphere provides a comprehensive learning environment through several key feature categories:

Content Aggregation and Delivery:-

Feature Type	| Implementation	| Integration Method |
Video Lectures |	Curated educational content	| Backend API delivery
YouTube Playlists |	External video content |	YouTube Data API
Real-time News	| Technology and AI articles	| NewsAPI.org integration
Study Materials	| Interactive flashcards	| External app on port 3000

AI-Powered Learning Tools:-
The platform integrates specialized AI tools for enhanced learning:
Interview Preparation: AI-powered mock interviews with feedback (localhost:5174)
Adaptive Content: Real-time news filtering for educational relevance
Progress Tracking: User learning analytics and performance monitoring

Payment and Subscription System:-
LearnSphere implements a monetization layer through:
Razorpay Integration: Secure payment processing for course purchases
Subscription Management: User access control based on payment status
Role-based Pricing: Different access levels for various user types
