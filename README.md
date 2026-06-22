# 💬 Chatify – Real-Time Chat Application

Chatify is a modern, real-time chat application designed to deliver a seamless, secure, and responsive messaging experience. Built with a scalable architecture and a clean UI, Chatify supports real-time presence, media sharing, email notifications, and smooth user interactions.

This project reflects a production-oriented AWS with a focus on performance, maintainability, and user experience.

---

## 🚀 Features

* 🔐 **Authentication & Authorization** (JWT-based)
* 💬 **Real-time Messaging** using Socket.IO
* 🟢 **Online / Offline Presence Indicator**
* 🖼️ **Image Sharing with Preview**
* ✉️ **Email Notifications** using Resend API
* ⚡ **Third-party service integration** via ArcJet
* 🔔 **Keyboard Sound Effects (Optional)**
* 🎨 **Modern UI** with Tailwind CSS + DaisyUI
* ⚡ **State Management** using Zustand
* 🧠 **Optimized Rendering** with React hooks

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* DaisyUI
* Zustand
* Lucide Icons

### Backend

* Node.js
* Express.js
* Socket.IO
* MongoDB
* JWT Authentication
* Resend API for emails
* ArcJet integration

---

## 📂 Project Structure

```
chatify-app/
├── backend/
│   └── src/
│       ├── controllers/
│       ├── emails/        # Email sending logic using Resend
│       ├── lib/
│       ├── middleware/
│       ├── models/
│       └── routes/
└── frontend/
    ├── dist/
    │   ├── assets/
    │   └── sounds/
    ├── public/
    │   └── sounds/
    └── src/
        ├── components/
        ├── hooks/
        ├── lib/
        ├── pages/
        └── store/
```

---

## ⚙️ Environment Variables

Create a `.env` file in the backend directory and configure the following:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=production
JWT_SECRET=your_jwt_secret
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM="your_email@resend.dev"
EMAIL_FROM_NAME="Your Name"
CLIENT_URL=http://localhost:5173
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development
```

**Notes:**

* Keep this file secure and **do not commit to GitHub**.
* Replace placeholder values with your actual keys.
* Use ArcJet and Resend keys for their respective integrations.

---

## ▶️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/inba-web/chatify.git
cd chatify-app
```

### 2️⃣ Install dependencies

**Frontend**

```bash
cd frontend
npm install
```

**Backend**

```bash
cd ../backend
npm install
```

### 3️⃣ Run the application

**Backend**

```bash
npm run dev
```

**Frontend**

```bash
cd ../frontend
npm run dev
```

Visit `http://localhost:5173` to access Chatify.

---

## 🧠 Key Learnings

* Real-time state synchronization with Socket.IO
* Handling user presence accurately
* Sending transactional emails with Resend API
* Integrating third-party services using ArcJet
* Avoiding CSS namespace collisions
* Clean separation of UI and data logic
* Production-ready React patterns

---

## 📌 Future Enhancements

* Message reactions & read receipts
* Group chats
* Voice notes
* Push notifications
* Profile customization

---

## 🙌 Acknowledgements

Built with consistency, persistence, and a strong learning mindset. This project marks a key milestone in the journey toward becoming a full-stack engineer.

---

## 📜 License

This project is open-source and available under the MIT License.

---

**GitHub Repository:** [https://github.com/inba-web/chatify](https://github.com/inba-web/chatify)

**Chatify – Simple. Real-time. Scalable.**
