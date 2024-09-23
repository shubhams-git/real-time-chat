# Real-Time Chat Application
================================


## Overview
------------

This project implements a simple chat application using raw WebSockets in Node.js, supporting the following key features:


### Application Features
------------------------

*   **Admin Room Management**: Create new chat sessions/rooms with customizable properties:
    *   Room Name
    *   Start Time
    *   Room Status (Open/Closed)
    *   Cool Down Time
*   **User Engagement**:
    *   Join rooms and send messages
    *   Upvote chat messages
*   **Message Moderation**:
    *   Automatically move messages to a separate section upon reaching 3 upvotes
    *   Alert admin to respond when messages exceed 10 upvotes