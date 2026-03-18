# Virtual Classroom - Interactive Wireframe Prototype

An interactive HTML/CSS/JS prototype for **Virtual Classroom**, an educational platform that enables real-time whiteboard-based teaching and collaboration between teachers and students.

Built with vanilla HTML/CSS/JS, [Lucide Icons](https://lucide.dev), and an iOS 26-inspired liquid glass design system.

---

## User Flow

### 1. Welcome & Registration
- Users land on the **Welcome Screen** and choose their role: **Student** or **Teacher**
- Each role has a dedicated **Registration Form** (first name, last name, unique username, password)
- Returning users can **Log In**, toggling between Student/Teacher mode
- The UI adapts its color scheme: **blue** for students, **emerald green** for teachers

### 2. Student Flow

**Join a Course**
- After registration, students are directed to the **Join Course** screen
- Enter a course code provided by the teacher to enroll
- Alternatively, start a **Simple Session** (a shared whiteboard with friends, not tied to any course)

**Student Dashboard**
- View all enrolled courses as cards (e.g., Informatics II, Software Construction, Database Systems)
- Click a course to enter the **Course Page**

**Course Page (Student)**
- **Sessions Tab**: See live and past sessions; join active sessions or view saved PDFs
- **Materials Tab**: Access teacher-saved whiteboard PDFs; use the **AI Summarize** button to generate PDF summaries
- **Leaderboard Tab**: View the Brownie Points leaderboard showing student rankings

**Whiteboard Session (Student)**
- Split-view: **Teacher's Whiteboard** (view-only, real-time updates) on the left, **Personal Whiteboard** (editable) on the right
- Drawing tools: pen, eraser, shapes, text, color picker, stroke width
- Page navigation to flip through uploaded material pages
- **Session Chat** panel for real-time messaging with teacher and classmates
- On leaving: option to **Save as PDF** or leave without saving

**Student Profile**
- View/edit username, first name, last name
- Change password (requires current password)
- See list of enrolled courses with Brownie Points per course

### 3. Teacher Flow

**Teacher Dashboard**
- View created courses with student count and session count
- **Create**, **Edit**, or **Delete** courses
- **Share** courses via QR code or Outlook email
- Each course auto-generates a unique course code

**Course Page (Teacher)**
- **Sessions Tab**: Start new sessions, resume live sessions, view past session PDFs
- **Materials Tab**: Upload PDFs for sessions; view auto-saved whiteboard PDFs
- **Students Tab**: See enrolled students with usernames and Brownie Points
- **Leaderboard Tab**: View point rankings

**Whiteboard Session (Teacher)**
- Full drawing canvas with pen, eraser, shapes, text, color picker, upload, and page management
- **Excel-style page tabs** at the bottom: click to switch, double-click to rename, **+** to add new pages
- **Student tabs** at the top (Excel-style): click a student name to expand their whiteboard in a side panel
- **Student Whiteboard Panel**: slides in from the left showing the selected student's personal whiteboard; teacher can annotate, **Award Brownie Points**, or **Copy to My Board**
- **Multi-Mode** toggle: enables all students to draw on the teacher's whiteboard simultaneously
- **Session Chat** for real-time communication
- On ending: teacher's whiteboard is auto-saved as PDF to the course

**Teacher Profile**
- View/edit credentials
- Change password

### 4. Simple Session (Student)
- Create or join a shared whiteboard session via session code
- All participants can draw simultaneously
- Session ends when the creator leaves; materials are not saved

---

## Screens Overview

| # | Screen | Description |
|---|--------|-------------|
| 1 | Welcome | Role selection (Student/Teacher) |
| 2 | Student Registration | Signup form with validation |
| 3 | Teacher Registration | Signup form (green theme) |
| 4 | Login | Toggle between Student/Teacher login |
| 5 | Join Course | Enter course code or start simple session |
| 6 | Student Dashboard | Enrolled courses grid |
| 7 | Student Course Page | Sessions, Materials (AI Summarize), Leaderboard |
| 8 | Student Profile | Edit credentials, view courses & points |
| 9 | Student Whiteboard | Split view: teacher board + personal board, chat |
| 10 | Teacher Dashboard | Course management with edit/delete/share |
| 11 | Teacher Course Page | Sessions, Materials, Students, Leaderboard |
| 12 | Teacher Profile | Edit credentials |
| 13 | Teacher Whiteboard | Full canvas, student tabs, page tabs, multi-mode |
| 14 | Simple Session | Create/join shared whiteboard |
| 15 | Simple Whiteboard | Shared drawing canvas |

## Modals
- Create / Edit / Delete Course
- Share QR Code (with Outlook integration)
- Leave Session (PDF save option)
- End Session (auto-save confirmation)
- Change Password
- Award Brownie Points

---

## Design System

- **Style**: Modern minimal with iOS 26-inspired liquid glass effects
- **Icons**: [Lucide Icons](https://lucide.dev) (SVG, via CDN)
- **Font**: Inter (Google Fonts)
- **Student theme**: Blue (`#5B6CFF`)
- **Teacher theme**: Emerald Green (`#059669`)
- **Effects**: Backdrop blur, glass borders, subtle shadows, smooth animations

---

## Running Locally

Open `index.html` in any browser - no build step or server required.

Or serve with any static server:
```bash
python3 -m http.server 3456
# Open http://localhost:3456
```

---

## Deployment

Deploy to GitHub Pages:
1. Push this folder to a GitHub repository
2. Go to Settings > Pages > Source: main branch
3. Your prototype will be live at `https://<username>.github.io/<repo-name>/`
